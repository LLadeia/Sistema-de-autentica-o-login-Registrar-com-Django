# 🔐 Sistema de Autenticação com Django

Projeto desenvolvido com **Django** que implementa um sistema completo de autenticação de usuários, incluindo:

- Registro de usuários
- Login e logout
- Área administrativa protegida por **superusuário**
- Listagem, edição e exclusão de usuários
- Controle de acesso por permissões

Este projeto foi criado com foco em **boas práticas**, **organização de código** e **segurança**.

---

## 🚀 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login com autenticação segura
- ✅ Área Admin personalizada
- ✅ Acesso restrito apenas para superusuários
- ✅ Edição e exclusão de usuários
- ✅ Mensagens de feedback ao usuário
- ✅ Proteção contra acesso não autorizado
- ✅ Uso do sistema nativo de autenticação do Django

---

## 🛠️ Tecnologias Utilizadas

- **Python 3.14**
- **Django 6**
- **HTML5**
- **CSS3**
- **SQLite (ambiente de desenvolvimento)**

---

## 📁 Estrutura do Projeto

django/
├── danada/ # Projeto Django (settings, urls)
├── login/ # App principal
│ ├── migrations/
│ ├── templates/
│ ├── views.py
│ ├── urls.py
│ └── models.py
├── manage.py
└── .gitignore
---

## 🔐 Controle de Acesso

- A **Área Admin** só pode ser acessada por usuários com permissão de **superusuário**.
- Caso um usuário comum tente acessar a área administrativa, o sistema bloqueia o acesso automaticamente.
- O acesso a area Admin e pelo login na home, mas a permissão é validada no backend.
---

## ⚙️ Como Rodar o Projeto Localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/django

---
2️⃣ Criar e ativar o ambiente virtual
python -m venv venv
# Windows
venv\Scripts\activate
# Linux/Mac
source venv/bin/activate

3️⃣ Instalar as dependências
pip install django

4️⃣ Rodar as migrações
python manage.py migrate

5️⃣ Criar um superusuário
python manage.py createsuperuser

6️⃣ Iniciar o servidor
python manage.py runserver

Acesse:

Home: http://127.0.0.1:8000/

Área Admin: http://127.0.0.1:8000/login/admin/
