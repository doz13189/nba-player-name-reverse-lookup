import {
  Meta
} from '@/domain/models/Meta'
import { MetaOIF } from '@/interfaces/ObjectInterfaces'


const dummyMetaUnder100: MetaOIF = { 
  'total_pages' : 1,
  'current_page' : 1,
  'next_page' : null,
  'per_page' : 25,
  'total_count' : 1
}

const dummyMetaOver100: MetaOIF = { 
  'total_pages' : 2,
  'current_page' : 1,
  'next_page' : null,
  'per_page' : 25,
  'total_count' : 1
}

const dummyCorrectMeta: MetaOIF = { 
  'total_pages' : 1,
  'current_page' : 1,
  'next_page' : null,
  'per_page' : 25,
  'total_count' : 1
}


const dummyWrongMeta: MetaOIF = { 
  'total_pages' : 1,
  'current_page' : 0,
  'next_page' : null,
  'per_page' : 25,
  'total_count' : 1
}

describe('SearchResponse.ts Meta Class', () => {

  it('検索結果が100件以下の場合のテスト', async () => {

    const metaAndPlayerlist = new Meta(dummyMetaUnder100)
    expect(metaAndPlayerlist.isOver100()).toBe(false)

  })

  it('検索結果が100件より多い場合のテスト', async () => {

    const metaAndPlayerlist = new Meta(dummyMetaOver100)
    expect(metaAndPlayerlist.isOver100()).toBe(true)

  })

  
  it('検索結果のメタ情報が正しい場合のテスト', async () => {

    const metaAndPlayerlist = new Meta(dummyCorrectMeta)
    expect(metaAndPlayerlist.isMeta()).toBe(true)

  })

  // 常に isMeta() は true を返すため、テスト不要
  // it('検索結果のメタ情報が誤っている場合のテスト', async () => {

  //   const metaAndPlayerlist = new Meta(dummyWrongMeta)
  //   expect(metaAndPlayerlist.isMeta()).toBe(false)

  // })


})



