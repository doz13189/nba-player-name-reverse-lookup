import { Search } from '@/domain/models/Search'


describe('Search.ts', () => {
  it('検索のテスト', () => {
    const playerName: string = 'gafford'
    const search = new Search()
    const searchResponse = search.execute(playerName)
    expect(searchResponse).toBe(true)
  })
})
