# nba-player-name-reverse-lookup

## コンポーネント設計

基本的には、1つのコンポーネントで、1つのドメインを扱うようにしています。
ドメインの定義としては、******、
例えば、検索を実行する、であったり、カタカナ表記で表示する、と言った単位です。

基本的には、Vue の MVVM を意識して設計をしています。
ドメインは、

views は、ページ単位です。
components は、views で呼ばれるコンポーネント、あるいは、components から呼ばれるコンポーネントです。
今のところ、コンポーネントとしては、views と components の2つで分類しており、コンポーネントが増えて管理しづらくなってくれば、components を一つ細かくした分類を作ろうと思っています。


### CSS フレームワーク
bulma


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
