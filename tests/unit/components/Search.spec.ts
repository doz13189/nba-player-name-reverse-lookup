import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import SearchView from '@/components/Search.vue'
import { Search } from '@/domain/models/Search'
jest.mock('@/domain/models/Search')
const SearchMock = Search as jest.MockedClass<typeof Search>;

describe('Search.vue', () => {

  beforeEach(() => {
    SearchMock.mockClear()
  })

  it('画面から検索実行するテスト', async () => {
    
    const wrapper = shallowMount(SearchView)
    const searchString = wrapper.find('[data-testid="search-string"]')
    searchString.setValue('test')
    await flushPromises()

    const searchButton = wrapper.find('[data-testid="search-button"]')
    wrapper.find('[data-testid="search-button"]').trigger('click')
    await flushPromises()

    // expect(SearchMock.mock.calls.length).toBe(2)
    console.log(SearchMock.mock.instances[0])
    // expect(SearchMock.mock.instances[0].searchString).toEqual('')
    expect(SearchMock.mock.instances[1].searchString).toEqual('test')
    
  })
})
