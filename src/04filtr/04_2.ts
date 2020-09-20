import { CityType, governmentBuildingsType, HousType } from "../02/02";

export function  demoLishHousesOnTheStreet (city:CityType,b:string){
    city.houses=city.houses.filter(el=>el.address.street.title!==b)
}

export function getHousesOnTheStreet(a:Array<HousType>,b:string){
    return a.filter(el=>el.address.street.title===b)
}
export const getBuildingsWithtafCountGreaterThen=(buildings:Array<governmentBuildingsType>,a:number)=>{
    return buildings.filter(el=>el.staffCount>a)    
}