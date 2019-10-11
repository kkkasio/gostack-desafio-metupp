This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Inicio do projeto

yarn add eslint -D
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
yarn eslint --init
yarn react-router-dom

## history/index.js

yarn add history

> navegar o usuário de tela, de todos os lugares da aplicação (inclusive dentro do redux)

## Root Import

> para não ter que ficar navegando entre os componentes. ele dá o caminho apartir da pasta src
> tem que colocar isso no babel pois ele ensina ao navegador ok?

yarn add customize-cra react-app-rewired -D (permite editar as configurações do babel)
cria um arquivo config-overrides.js e seta as config

```js
/* eslint-disable import/no-extraneous-dependencies */
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
```

yarn add babel-plugin-root-import -D

vai no package.json e troca o start,build,test trocar por **react-app-rewired**

> yarn add eslint-import-resolver-babel-plugin-root-import -D

## Configurando Reactotron

yarn add reactotron-react-js

> fazer o debug de forma mais fácil

## Proptypes

yarn add prop-types

> validar props passada para os componentes

## unform

> lib para facilitar a criação de formulários

## yup

> validação dos formulários

## redux, redux-saga, immer (feat reactotron)

yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer

## axios

> realizar requisiçõess para a api

## react toastify

> incluir o css, botar o toastcontainer no global, e usar toast nas páginas necesárias

## persistir os dados do usuário no storage do navegador

> yarn add redux-persist
