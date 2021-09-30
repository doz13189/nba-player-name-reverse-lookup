import { Search } from '@/domain/models/Search'



describe('Search.ts', () => {
  it('検索のテスト', async () => {
    const playerName: string = 'gafford'
    const search = new Search(playerName)
    const searchResponse = await search.execute()
    console.log(searchResponse)
    expect(searchResponse).toEqual({"data":[{"id":666577,"first_name":"Daniel","height_feet":null,"height_inches":null,"last_name":"Gafford","position":"F","team":{"id":30,"abbreviation":"WAS","city":"Washington","conference":"East","division":"Southeast","full_name":"Washington Wizards","name":"Wizards"},"weight_pounds":null}],"meta":{"total_pages":1,"current_page":1,"next_page":null,"per_page":25,"total_count":1}});
  })
})
