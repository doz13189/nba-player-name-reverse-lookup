export interface ApprovalOIF {
  status: boolean
}

export interface KatakanaOIF {
  first_name: string
  last_name:string
}

export interface PlayerOIF {
  id: number
  first_name: string
  height_feet: number | null
  height_inches: number | null
  last_name: string
  position: string
  team: TeamOIF
  weight_pounds: number | null
}

export interface TeamOIF {
  id : number
  abbreviation : string
  city : string
  conference : string
  division : string
  full_name : string
  name : string
}

export interface MetaOIF {
  total_pages : number
  current_page : number
  next_page : number | null
  per_page : number
  total_count : number
}

export interface SearchResponseOIF {
  data: PlayerOIF[]
  meta: MetaOIF
}
