<img src="src/assets/images/readMe/logoReadMe.png" alt="Logo da Alpha Speed" height="250" width="100%"/>

# Alpha Speed

Site de concessionária de veículos desenvolvido em HTML, CSS e JavaScript puro como parte de um curso de desenvolvimento de sistemas, com mostruário dinâmico de veículos, filtros de busca e login via Local Storage.

<img src="src/assets/images/readMe/capaReadMe.png" alt="Capa da Alpha Speed" width="100%"/>

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Conclusão](#conclusão)
- [Contato](#contato)

## Tecnologias Utilizadas

- **HTML** — estruturação das páginas
- **CSS (em módulos)** — estilização e responsividade
- **JavaScript** — interatividade: login, filtros de busca e mostruário dinâmico

## Funcionalidades

**Mostruário de veículos**
Os dados dos veículos ficam em um array e são renderizados com `map`, exibindo modelo, marca e preço ao passar o mouse por cima.

**Filtros de busca**
Busca por marca, modelo, tipo e faixa de preço, aplicada em tempo real conforme o usuário ajusta as opções.

**Login com Local Storage**
Login que salva as informações do usuário no Local Storage do navegador, sem banco de dados — o site reconhece o usuário em visitas futuras a partir desses dados salvos localmente.

## Estrutura do Projeto

```
├── index.html            # Mostruário de veículos e filtros de busca
└── assets/
    ├── html/
    │   ├── login.html        # Página de login
    │   └── cadastrar.html    # Página de cadastro
    ├── css/
    │   ├── modules/           # Módulos CSS por componente
    │   └── styles.css        # Estilização geral
    └── js/
        ├── modules/           # Módulos JS (mostruário, filtros, login)
        └── main.js           # Lógica geral do site
```

## Como Executar o Projeto

1. Clone este repositório:

    ```bash
    git clone https://github.com/lucasatdriano/alphaSpeed
    ```

2. Acesse o diretório do projeto:

    ```bash
    cd alphaSpeed
    ```

3. Abra o arquivo `index.html` no navegador:
    ```bash
    open index.html      # macOS
    start index.html     # Windows
    xdg-open index.html  # Linux
    ```

## Conclusão

Projeto de estudo que aplica HTML, CSS e JavaScript puros na construção de um site funcional para uma concessionária de veículos, incluindo mostruário dinâmico, filtros de busca e um sistema de login simples baseado em Local Storage.

## Contato

Desenvolvido por Lucas Adriano como parte de um curso em desenvolvimento de sistemas.

- **E-mail**: [lucasatdriano@gmail.com](mailto:lucasatdriano@gmail.com)
- **LinkedIn**: [Lucas Adriano](https://linkedin.com/in/lucasadrianodev/)
