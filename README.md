# 🚀 CI/CD com Node.js, GitHub Actions e AWS

Este projeto tem como objetivo demonstrar e padronizar a configuração de um **pipeline de CI/CD** utilizando **Node.js**, **GitHub Actions** e **AWS** para automação de build, testes e deploy.

---

## 📌 Visão Geral

O pipeline implementado realiza:

- Instalação das dependências do projetogit status
- Build da aplicação Node.js
- Deploy automático na AWS
- Integração contínua a cada push ou pull request

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**
- **GitHub Actions**
- **AWS (IAM, EC2 / S3 / ECS / Lambda — conforme o projeto)**
- **NPM**
- **YAML**

---

## 📁 Estrutura do Projeto

```text
.
├── .github/
│   └── workflows/
│       └── ci-cd.yml
├── src/
│   └── index.js
├── package.json
├── package-lock.json
└── README.md