interface PlayerOIF {
  id: number
  first_name: string
  height_feet: number | null
  height_inches: number | null
  last_name: string
  position: string
  team: TeamOIF
  weight_pounds: number | null
}

interface TeamOIF {
  id : number
  abbreviation : string
  city : string
  conference : string
  division : string
  full_name : string
  name : string
}

interface MetaOIF {
  total_pages : number
  current_page : number
  next_page : number | null
  per_page : number
  total_count : number
}

interface SearchResponseOIF {
  data: PlayerOIF[]
  meta: MetaOIF
}


export {
  PlayerOIF,
  TeamOIF,
  MetaOIF,
  SearchResponseOIF
}