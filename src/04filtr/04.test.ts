import { predicate } from "./04";
import { compileFunction } from "vm";

test('should take old men older then 90', ()=>{
    const ages = [18,20,22,1,100,90,14];
    
    const oldAges = ages.filter(e=>e>90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})



test('should take courses chip', ()=>{
    const courses = [
        {title:'CSS', price:110},
        {title:'JS', price:200},
        {title:'REACT', price:150}
    ]

    
    const chipCourses = courses.filter(cours=>cours.price<160);

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('REACT');
})

test('get only completed tasks',()=>{
    const tasks=[
        {id:1, title:'Bread', isDone:false},
        {id:2, title:'Milk', isDone:true},
        {id:3, title:'Solt', isDone:false},
        {id:4, title:'Sugar', isDone:true}
    ]
    const completedTasks = tasks.filter(t=>t.isDone)
    // const completedTasks = tasks.filter(function(t){
    //     return t.isDone
    // })
    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)
})
test('get only uncompleted tasks',()=>{
    const tasks=[
        {id:1, title:'Bread', isDone:false},
        {id:2, title:'Milk', isDone:true},
        {id:3, title:'Solt', isDone:false},
        {id:4, title:'Sugar', isDone:true}
    ]
    const uncompletedTasks = tasks.filter(t=>!t.isDone)
    // const uncompletedTasks = tasks.filter(t=>t.isDone===false)
    expect(uncompletedTasks.length).toBe(2)
    expect(uncompletedTasks[0].id).toBe(1)
    expect(uncompletedTasks[1].id).toBe(3)
})