## todo
- (must) JapaniseName の setup のコードからドメインのコードを抜いて分離する
- (must) Approval の setup のコードからドメインのコードを抜いて分離する
- (must) any を使っていて、解消するべきところを解消する
- (must) Google Analytics を機能させる
- (must) UT を書く
- (must) 存在しない選手名を検索したときのエラーを解消する
- (must) 存在しない選手名を検索したときの「存在しない」ことを表示する
- (must) axios のエラー時の動作を定義する
- (must) axios のエラー時のテストを作成する
- (must) 空白での検索をエラー扱いする


## done
- (must) ut の jest のモック化
- (must) 検索できるようにする
  - 検索ボックスに文字を入力して、検索実行ボタンを押すと、レスポンスが返ってくる
- (should) api response の型定義をちゃんとする
  - (should) Team の division や TeamName は詳細に型を決めれる
  - (should) meta 情報の値のバリエーションを確認して、型情報に反映する
- (must) meta のファクトリーを作成する
- (must) playerList のファクトリーを作成する
- (must) 検索結果を画面に表示する
- (must) 検索結果を値オブジェクトとして扱う
- (must) object を assing しているため、前回オブジェクトが残る
- (must) About ページを書く
- (must) 日本語選手名が登録されていない場合は、未登録と表示する


## memo

- Q1

```sh
ts-jest[versions] (WARN) Version 4.4.3 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=2.7.0 <4.0.0). Please do not report issues in ts-jest if you are using unsupported versions.
```

typescript のバージョンを 3.9 にすると上記のワーニングは消えるが、vue のビルド時に以下のエラーが発生する。
typescript のバージョンを 4.4 にして、ワーニングを抱えた状態ですすめる。

```sh
ERROR in src/components/Search.vue:30:27
TS2305: Module '"../../node_modules/vue/dist/vue"' has no exported member 'ref'.
    28 |
    29 | <script lang="ts">
  > 30 | import { defineComponent, ref } from 'vue';
```

- Q2

```sh
error    Don't use `object` as a type. The `object` type is currently hard to use ([see this issue](https://github.com/microsoft/TypeScript/issues/21732)
```

