from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from django.contrib import messages


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import UserSerializer
from django.http import JsonResponse

# Home pública
def home(request):
    return render(request, 'index.html')

# Login
def login(request):
    if request.user.is_authenticated:
        # Se já está logado, redireciona baseado no tipo de usuário
        if request.user.is_superuser:
            return redirect('admin')
        return redirect('suces')
    
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        
        if user:
            auth_login(request, user)
            # Redireciona baseado no tipo de usuário
            if user.is_superuser:
                return redirect('admin')
            return redirect('suces')
        else:
            messages.error(request, 'Usuário ou senha inválidos')
    
    return render(request, 'login.html')

# Registrar
def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        if not all([username, email, password]):
            messages.error(request, 'Preencha todos os campos')
            return redirect('register')
        
        if User.objects.filter(username=username).exists():
            messages.error(request, 'Usuário já existe')
            return redirect('register')
        
        User.objects.create_user(username=username, email=email, password=password)
        messages.success(request, 'Conta criada! Faça login')
        return redirect('login')
    
    return render(request, 'registrar.html')

# Sucesso após login (para usuários normais)
def suces(request):
    if not request.user.is_authenticated:
        messages.error(request, 'Faça login primeiro')
        return redirect('login')
    
    # Se for superusuário, redireciona para admin
    if request.user.is_superuser:
        return redirect('admin')
    
    return render(request, 'suces.html')

# Admin (apenas superusuário)
def admin(request):
    if not request.user.is_authenticated:
        messages.error(request, 'Faça login para acessar')
        return redirect('login')
    
    if not request.user.is_superuser:
        messages.error(request, 'Acesso negado. Apenas superusuários podem acessar.')
        return redirect('home')
    
    users = User.objects.all().order_by('-date_joined')
    return render(request, 'admin.html', {'users': users})

# Editar usuário
def editar_usuario(request, user_id):
    if not request.user.is_authenticated or not request.user.is_superuser:
        messages.error(request, 'Acesso negado')
        return redirect('home')
    
    user = get_object_or_404(User, id=user_id)
    
    if request.method == 'POST':
        user.username = request.POST.get('username')
        user.email = request.POST.get('email')
        user_password = request.POST.get('password')
        if user_password:
            user.set_password(user_password)
        
        # Só atualiza is_superuser se não for o próprio usuário
        if user.id != request.user.id:
            user.is_superuser = request.POST.get('is_superuser') == 'on'
        
        user.save()
        messages.success(request, 'Usuário atualizado')
        return redirect('admin')
    
    return render(request, 'edit.html', {'user': user})

# Deletar usuário
def deletar_usuario(request, user_id):
    if not request.user.is_authenticated or not request.user.is_superuser:
        messages.error(request, 'Acesso negado')
        return redirect('home')
    
    user = get_object_or_404(User, id=user_id)
    
    # Não permite deletar a si mesmo
    if user == request.user:
        messages.error(request, 'Não pode deletar seu próprio usuário')
        return redirect('admin')
    
    user.delete()
    messages.success(request, f'Usuário {user.username} deletado')
    return redirect('admin')

# Logout
def logout_view(request):
    if request.user.is_authenticated:
        messages.success(request, f'Até logo, {request.user.username}!')
    auth_logout(request)
    return redirect('home')

@api_view(['GET', 'POST'])
def user_list_create(request):
        if request.method == 'GET':
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return Response(serializer.data)
        elif request.method == 'POST':
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            return Response(serializer.errors, status=400)
        

@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, id):
        try:
            user = User.objects.get(id=id)
        except User.DoesNotExist:
            return Response(status=404)
        
        if request.method == 'GET':
            serializer = UserSerializer(user)
            return Response(serializer.data)
        elif request.method == 'PUT':
            serializer = UserSerializer(user, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=400)
        elif request.method == 'DELETE':
            user.delete()
            return Response(status=204)