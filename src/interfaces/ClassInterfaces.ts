import {
  ApprovalOIF,
  KatakanaOIF,
  SearchResponseOIF
} from '@/interfaces/ObjectInterfaces'

export interface ApprovalIF {
  getApprovalDocument(): Promise<ApprovalOIF | undefined>
}

export interface KatakanaIF {
  getPlayerslDocument(): Promise<KatakanaOIF | undefined>
}

export interface SearchIF {
  fetch(args: string): Promise<any>
  getPlayer(): Promise<SearchResponseOIF | undefined>
  isGetPlayerResponse(checkTarget: any): boolean
  isError(response: SearchResponseOIF | undefined): boolean
  isZero(response: SearchResponseOIF): boolean
}

export interface MetaIF {
  isMeta(): boolean
  isOver100(): boolean
}

export interface PlayerListIF {
  isPlayerList(): boolean
}

export interface FirestoreServiceIF {
  getDocument(document: string, key: string): Promise<any>
}
