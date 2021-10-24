import { MetaOIF } from '@/interfaces/ObjectInterfaces'
import { MetaIF } from '@/interfaces/ClassInterfaces'


export class Meta implements MetaIF {

  private _meta: MetaOIF

  constructor(response: MetaOIF) {
    this._meta = response
  }

  isMeta(): boolean {
    return this._meta.current_page !== 0
  }

  isOver100(): boolean {
    return this._meta.total_pages > 1
  }

  get meta(): MetaOIF {
    return this._meta
  }

}


