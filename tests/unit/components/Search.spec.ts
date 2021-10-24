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
    
    // new Search() は、初期ロードと以下の setValue により2回インスタンス化される
    
    // https://github.com/vuejs/vue-test-utils/issues/1698
    const wrapper = shallowMount(SearchView, {
      global: {
        provide: {
          updateSearchResponse: jest.fn()
        }
      }
    })

    const searchString = wrapper.find('[data-testid="search-string"]')
    searchString.setValue('test')
    await flushPromises()

    const searchButton = wrapper.find('[data-testid="search-button"]')
    wrapper.find('[data-testid="search-button"]')
    searchButton.trigger('click')
    await flushPromises()

    expect(SearchMock.mock.instances.length).toEqual(2)
    expect(SearchMock.mock.calls[0][0]).toBe('')
    expect(SearchMock.mock.calls[1][0]).toBe('test')
    expect(SearchMock.prototype.getPlayer).toHaveBeenCalledTimes(1)

  })
})
