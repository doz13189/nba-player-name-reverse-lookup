import { Search } from '@/domain/models/Search'
import { SearchResponse } from '@/domain/models/SearchResponse'


const testResponse = {"data":[{"id":666577,"first_name":"Daniel","height_feet":null,"height_inches":null,"last_name":"Gafford","position":"F","team":{"id":30,"abbreviation":"WAS","city":"Washington","conference":"East","division":"Southeast","full_name":"Washington Wizards","name":"Wizards"},"weight_pounds":null}],"meta":{"total_pages":1,"current_page":1,"next_page":null,"per_page":25,"total_count":1}}

describe('Search.ts', () => {
  it('検索のテスト', async () => {

    const playerName: string = 'gafford'
    const search = new Search(playerName)

    const searchResponse: SearchResponse = await search.execute()

    expect(searchResponse.totalPages).toEqual(new searchResponse(testResponse).totalPages)
    expect(searchResponse.currentPage).toEqual(new searchResponse(testResponse).currentPage)
    expect(searchResponse.nextPage).toEqual(new searchResponse(testResponse).nextPage)
    expect(searchResponse.perPage).toEqual(new searchResponse(testResponse).perPage)
    expect(searchResponse.totalCount).toEqual(new searchResponse(testResponse).totalCount)
    expect(searchResponse.playerListLength).toEqual(new searchResponse(testResponse).playerListLength)
    expect(searchResponse.playerListData).toEqual(new searchResponse(testResponse).playerListData)
    
  })

})
