import { CityType, governmentBuildingsType } from "../02/02"

export const addMoneyToBudget = (a:governmentBuildingsType,b:string,c:number)=>{
    a.budget = c*3
    a.type = b
}