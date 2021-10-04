import { shallowMount } from '@vue/test-utils'
// import flushPromises from 'flush-promises'
import ListView from '@/components/List.vue'
import { List } from '@/domain/models/List'
// jest.mock('@/domain/models/Search')
// const SearchMock = Search as jest.MockedClass<typeof Search>;

const response: SearchResponseIF =  { data:
  [{
      id: 386,
      first_name: "Chasson",
      height_feet: 6,
      height_inches: 2,
      last_name: "Randle",
      position: "G",
      team: {
        id: 22,
        abbreviation: "ORL",
        city: "Orlando",
        conference: "East",
        division: "Southeast",
        full_name: "Orlando Magic",
        name: "Magic"
      },
      weight_pounds: 185
    },
    {
      id: 387,
    first_name: "Julius",
    height_feet: 6,
    height_inches: 9,
    last_name: "Randle",
    position: "F",
    team: {
      id: 20,
      abbreviation: "NYK",
      city: "New York",
      conference: "East",
      division: "Atlantic",
      full_name: "New York Knicks",
      name: "Knicks"
    },
    weight_pounds: 250
  }],
  meta: {
    total_pages: 1,
    current_page: 1,
    next_page: null,
    per_page: 25,
    total_count: 2
  }
}

describe('Search.vue', () => {

  // beforeEach(() => {
  //   SearchMock.mockClear()
  // })

  it('画面から検索実行するテスト', async () => {
    // new Search() は、初期ロードと以下の setValue により2回インスタンス化される
    
    const wrapper = shallowMount(ListView, {
      propsData: {
        searchResultData: response
      })

    const searchResultView = wrapper.find('[data-testid="search-result-view"]')
    
    expect(searchResultView.length).toBe(2)

    expect(searchResultView[0]).toBe('Chasson')
    expect(searchResultView[0]).toBe('Randle')
    expect(searchResultView[0]).toBe('Orlando Magic')
    
    expect(searchResultView[1]).toBe('Julius')
    expect(searchResultView[1]).toBe('Randle')
    expect(searchResultView[1]).toBe('New York Knicks')
    
  })
})
