from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('registrar/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout_view, name='logout_view'),  # Alterado para 'logout_view'
    path('home/', views.home, name='home'),
    path('admin/', views.admin, name='admin'),
    path('editar/<int:user_id>/', views.editar_usuario, name='editar'),
    path('deletar/<int:user_id>/', views.deletar_usuario, name='deletar'),
    path('suces/', views.suces, name='suces'),
]