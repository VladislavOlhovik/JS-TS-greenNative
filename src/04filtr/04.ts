const ages = [18,20,22,1,100,90,14];

 export const predicate = (age:number)=>age>90

const oldAges = [100]; //>90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title:'CSS', price:110},
    {title:'JS', price:200},
    {title:'REACT', price:150}
]

//<168
const chipPreditcate = (courses:CourseType)=>courses.price<160

const chipCourses = [
    {title:'CSS', price:110},
    {title:'REACT', price:150}
]
