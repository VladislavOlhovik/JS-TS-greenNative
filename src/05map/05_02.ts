import { governmentBuildingsType, HousType } from "../02/02"


export const getStreetsTitlesOfGovernmentsBuildings = (Buildings:Array<governmentBuildingsType>)=>{
    return Buildings.map(el=>el.address.street.title)
}

export const getStreetsTitlesOfHouses=(houses:Array<HousType>)=>{
    return houses.map(el=>el.address.street.title)
}
export const createMessages=(houses:Array<HousType>)=>{
    return houses.map(el=>`Hello guys from ${el.address.street.title}`)
}