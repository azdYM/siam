import Case from "./Case"

import Player from "./Player"

export type Area = ('reserve' | 'grid')

export type ReservedArea = ('top' | 'bottom')

export type PlayerByArea = Map<ReservedArea, Player>

export type AnimalName = ('Eléphan' | 'Rhinocéros')

export type AnimalPosition = ('top' | 'bottom' | 'left' | 'right')

export type PlayerDataEntry = {
    name: string,
    area: ReservedArea
}

export type BoardSection = {
    playArea: HTMLDivElement | null, 
    topReserveArea: HTMLDivElement | null, 
    bottomReserveArea: HTMLDivElement | null
}

export type PlayerCase = {
    cell: Case,
    player: Player
}

export type HTMLCases = {
    id: string,
    index: number,
    area: Area,
    reservedArea?: ReservedArea
}