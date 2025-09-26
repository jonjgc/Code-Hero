# Code Hero

A aplicação é uma interface responsiva que consome a API da Marvel para listar, buscar e exibir detalhes de personagens.

## Features

* **Listagem de Personagens**: Exibe uma lista paginada de personagens da Marvel.
* **Busca Dinâmica**: Filtragem de personagens por nome.
* **Paginação Completa**: Navegação entre páginas, incluindo botões para ir ao início e ao fim da lista.
* **Página de Detalhes**: Visualização de informações detalhadas de cada personagem, incluindo uma lista de quadrinhos em que participou.
* **Troca de Tema**: Suporte para temas Light e Dark.
* **Design Responsivo**: Interface adaptada para visualização em desktops e dispositivos móveis.

## Tecnologias Utilizadas

* **React com TypeScript:** A versão do React utilizada foi a 19.1.13.
* **Styled Components**: Para estilização de componentes.
* **React Router Dom**: Para gerenciamento de rotas.
* **Jest & React Testing Library**: Para testes unitários e de integração.
* **ESLint & Prettier**: Para padronização do código.

## Como Executar o Projeto

Siga os passos abaixo para executar o projeto localmente.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
* [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* Chaves da API da Marvel, que podem ser obtidas em [developer.marvel.com](https://developer.marvel.com/).

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/jonjgc/code-hero.git
    cd code-hero
    ```

2.  **Crie o arquivo de variáveis de ambiente:**
    Na raiz do projeto, crie um arquivo chamado `.env` e adicione suas chaves da Marvel, como no exemplo abaixo:
    ```
    REACT_APP_MARVEL_PUBLIC_KEY=SUA_CHAVE_PUBLICA_AQUI
    REACT_APP_MARVEL_PRIVATE_KEY=SUA_CHAVE_PRIVADA_AQUI
    REACT_APP_MARVEL_API_BASE_URL=[https://gateway.marvel.com/v1/public](https://gateway.marvel.com/v1/public)
    ```

3.  **Instale as dependências e inicie a aplicação:**

    ```bash
    # 1. Instala as dependências
    npm install

    # 2. Inicia o servidor de desenvolvimento
    npm start
    ```
    A aplicação estará disponível em `http://localhost:3000`.

### Rodando os Testes

Para executar os testes automatizados, rode o comando:
```bash
npm test
```

### Importante

O teste pede para restringir o uso de bibliotecas de terceiros. No entanto, para navegação em uma Single Page Application (SPA) como este projeto, uma biblioteca de roteamento como a react-router-dom é considerada uma ferramenta fundamental e padrão da indústria.
