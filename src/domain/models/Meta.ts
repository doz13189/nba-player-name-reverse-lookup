import { MetaOIF } from '@/interfaces/ObjectInterfaces'
import { MetaIF } from '@/interfaces/ClassInterfaces'


export class Meta implements MetaIF {

  private _meta: MetaOIF

  constructor(response: MetaOIF) {
    this._meta = response
  }

  isMeta(): boolean {
    // Meta Class の _meta に undefined が渡されることはロジック上ないため、この関数は常に true を返す
    // return this._meta !==  undefined
    return true
  }

  isOver100(): boolean {
    if (this._meta.total_pages > 1) { return true }
    return false
  }

  get meta(): MetaOIF {
    return this._meta
  }

}


