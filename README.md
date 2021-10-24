# nba-player-name-reverse-lookup

## ディレクトリ設計

ソースコードのディレクトリ構造に関する設計について記載する。
ディレクトリ構造は、以下のようにしている。

- src
  - router
  - views 
  - components
  - domain
    - models
    - repository
  - interfaces
  - plugins
  - assets

### router

ページ遷移に関する設定ファイルを格納している。ページ遷移は、vue-router を使用しているため、設定ファイルはイコール、vue-router の設定ファイルとなっている。
コンポーネントとルートをマッピングは、単独のフォルダで管理しやすいため、独立させている。


### views & components

いずれのフォルダも SFC(単一コンポーネントファイル) となっている。
views にあるファイルは、表示ページと1対1にしている。components は、views の子コンポーネントとなっている。詳細は、コンポーネント設計として後述する。


### domain(model & repository)

ドメイン駆動設計のような設計方針をとっているため、ドメインに関するロジックは、views & components には記載せずに、domain フォルダ以下に書いている。model は、ドメインに関するロジックを扱っており、repository は、DB (firestore) へのアクセスに関するロジックを扱っている（低レイヤーなコードになるため、ドメインから切り離してコードを管理している。）


### interfaces

オブジェクトのインターフェースとクラスのインターフェースを扱っている。ドメインロジックのコードやユニットテストコードなど参照元が多いため、フォルダとして独立させている。


### plugins

アプリケーション単位で変わらないライブラリの設定を管理している。例えば、google analytics などがある。


### assets

イメージを管理している。


### 全体的な設計方針

ドメイン駆動設計のような設計方針をとっている。アプリケーションが持っているドメイン単位でロジックを管理している。例えば、「メタ情報」や「選手情報」をドメインとして扱い、そのドメインの持つ振る舞い(= 関数)をドメインに対して実装している。メタ情報であれば、メタ情報があるかどうか、やメタ情報の一部である検索結果のページ数の確認をメタ情報というドメインに対して振る舞いとして実装している。

上記に記載しているドメインロジックを基本的には、/domain 以下で管理している。画面ロジックは、/view あるいは、/components で管理している。画面ロジックは、画面の表示内容や画面からのイベントのことを指している。

これは vue の設計方針である MVVM にも則っていると考えている。View と ViewModel を /view あるいは、/components に書き、Model は /domain に書いている。

Vue3 から導入された Composition API を利用しているのだが、その理由としてはドメインロジックと画面ロジックの分離がしやすくなるためである。従来の Optional API でも同じことは可能だが、同じことをして読みやすいのは Composition API の記法だと考える。


## コンポーネント設計

基本的には、1つのコンポーネントで、1つのドメインを扱うようにしている。/view は、基本的にはドメインロジックは扱わず、/components にドメインロジックの実行する責務を持たせている。/view では、ドメインロジックでの実行結果の受け取りや引き渡しなどの、ハブのような責務を持たすようにしている。

今のところ、コンポーネントとしては、/views と /components の2つで分類しており、コンポーネントが増えて管理しづらくなってくれば、components を一つ細かくした分類を作ろうと思っている。


## ユニットテスト

ユニットテストは、画面ロジックに関するユニットテストとドメインロジックに関するユニットテストの2つに分類している。画面ロジックは、画面が持つアクション単位でユニットテストを書いている（現時点では、未実装箇所が多い）。画面は、コードベースの C1 といような網羅の仕方よりも、ユーザーの目線でのアクション単位でユニットテストをしたほうが品質は高くしやすいため（画面はコード量が多くなりがちなため、コードベースだと見落としやすい）。アクションとしては、以下を定義している。

- ユーザーが画面を操作する
- コンポーネントに定義されたデータが変更される
- 親コンポーネントからプロップが渡される
- Vue ライフサイクルが変わる
- URL のパラメータによってデータが渡される

ドメインロジックは、コードベースでユニットテストを書いている。

