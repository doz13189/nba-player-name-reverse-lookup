import { SearchResponseOIF } from '@/domain/models/SearchResponseOIF'


class SearchResponseFactory {

  static createSearchResponse(): SearchResponseOIF {

    return {
      meta: {
        total_pages : 0,
        current_page : 0,
        next_page : 0,
        per_page : 0,
        total_count : 0
      },
      data: [{
        id : 0,
        first_name : '',
        height_feet : null,
        height_inches : null,
        last_name : '',
        position : '',
        team : {
          id: 0,
          abbreviation : '',
          city : '',
          conference : '',
          division : '',
          full_name : '',
          name : ''
        },
        weight_pounds : null
      }]
    }

  }

}

export {
  SearchResponseFactory
}
