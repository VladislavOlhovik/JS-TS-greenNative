import { CityType } from "../02/02";
import { addMoneyToBudget } from "./03";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            buildedAt: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White spreet'
                }
            }
        },
        {
            buildedAt: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy spreet'
                }
            }
        },
        {
            buildedAt: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy spreet'
                }
            }
        }],
        governmentBuildings: [
            { type: 'HOSPITAL', budget: 200000, staffCount: 200,
            address: { street: { title: 'Central Str' } }},
            { type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
            address: { street: { title: 'Central Str' } }}
        ],
        citizensNumber: 1000000
    }
})

test('Budget should be changed for HOSPITAL',()=>{
    addMoneyToBudget(city.governmentBuildings[0],'HOSPITAL',100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
    // expect(city.governmentBuildings[1].budget).toBe(500000)
})