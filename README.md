## Criando um servidor Web com Express utilizando SOLID

Este projeto é um `boilerplate` para a criação de servidores REST em express.

O projeto usa uma metodologia baseada em um dos princípios SOLID chamado de `Open Closed`, que basicamente diz o seguinte: 

    Classes, modules, functions etc. should be open for extension, but closed for modification" 

Isso significa que, se formos adicionar uma nova funcionalidade ao sistema, devemos obrigatoriamente adicionar um novo arquivo/classe no mesmo, ao invés de editar o código já existente.

Utilizando essa metodologia evitamos de escrever código ruim como [neste exemplo](https://github.com/danielschmitz/tindev/blob/master/backend/src/index.js) que eu mesmo fiz uma vez. Imagine dar manutenção em um código confuso como esse, onde diversas funcionalidades estão misturadas. Se quisermos adicionar uma nova funcionalidade precisaríamos editar o arquivo e adicionar mais código, deixando o arquivo mais confuso ainda.

O princípio `Open/Closed` garante que novas funcionalidades serão criadas em novos arquivos, sem necessidade de "misturar" com códigos existentes. 

## Como funciona?

Se você analisar o arquivo `src/main.js`, que é o arquivo que instancia, configura e inicia o servidor, encontrará o seguinte código:

```js
const express = require('express')
const app = express()

const libs = require('./libs')
libs.forEach(lib => require(`./libs/${lib}`)(app))
```

É muito pouco código para iniciar um servidor web, não é mesmo ?
s
Claro que existe mais código, mas através do princípio Open/Close separamos cada funcionalidade em arquivos diferentes.

No código `const libs = require('./libs')` temos a criação de uma constante `libs` que usa o método [require](https://nodejs.org/en/knowledge/getting-started/what-is-require/) do Node para importar o arquivo `./libs/index.js`. Quando usamos o `require` apontando somente para o diretório, o arquivo `index.js` será importado:

```js
// src/libs/index.js
module.exports = [
    'cors',
    'body-parser',
    'static',
    'api',
    'error',
    'start'
]
```

O arquivo `src/libs/index.js` é um simples array exportado pelo `module.exports`. Isso significa que a variável `libs` receberá este array, como se fosse:

```js
const libs = [
    'cors',
    'body-parser',
    'static',
    'api',
    'error',
    'start'
]
libs.forEach(lib => require(`./libs/${lib}`)(app))
```

Não adicionamos o array de libs no arquivo `main.js` para que possamos manter uma organização no código, e para que quando formos adicionar uma nova lib no projeto, não seja necessário editar o arquivo `main.js`, mantendo assim o princípio Open/Closed. 

Para cada funcionalidade específica que o servidor executa, temos um arquivo diferente sendo carregado. Por exemplo, funcionalidades relativas ao `cors` estão em `src/libs/cors.js`. 

As rotas do servidor REST estão em `src/api`.

## Instalação

```
$ git clone https://github.com/danielschmitz/express-solid.git
$ cd express-solid
$ npm install
$ npm run dev

```

Acesse no seu navegador `http://localhost:3000/api/foo`
