const todolist = require('./todolist')

//Define a function that gets all the todos from the 
// todolist array declared asynchronously after 2 seconds
const getAllTodos = () => {
    return new Promise((resolve,reject)=>{
     setTimeout(()=>{
        if(todolist.length==0){
            reject('empty list')
        }
        resolve(todolist)
     },2000)
        }) 
    
}
// Define a function to add a todo to the todolist array
const createTodo = (todo) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Object.keys(todo)==0){
                reject('No Data Entry')
            }
            todolist.push(todo)
            getAllTodos().then(item=>resolve(item)).then(data=>data.length).catch(err=>err)
        },1000)

    })
  
   }

   let data = {
    "id": 741,
    "user_id": 148,
    "title": "Buy Electronic Parts",
    "due_on": "2021-11-19T00:00:00.000+05:30",
    "status": "pending"
}
// getAllTodos().then(data=>{
//     console.log(data)
// }).catch(err=>console.log(err))
// createTodo(data).then(ata=>{
//     console.log(ata)
// })
module.exports ={
    createTodo,getAllTodos
}