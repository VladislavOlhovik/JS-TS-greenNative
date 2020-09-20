
export type CityType = {
    title: string
    houses: Array<HousType>
    governmentBuildings: Array<governmentBuildingsType>
    citizensNumber: number
}
export type HousType = {
    id?:number
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type AddressType = {
    number: number
    street: StreetType
}
export type StreetType = {
    title: string
}
export type governmentBuildingsType = {
    type: string
    budget: number
    staffCount: number
    address: addressType
}
export type addressType = {
    street: titleType
    number?: number
}
export type titleType = {
    title: string
}