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

- **Python 3**
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
