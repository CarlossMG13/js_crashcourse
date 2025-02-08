const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting w/ boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    },
];

//Redundant method to call the objects in arrays
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);  
}

//omptimized method to call the objects in arrays
//also you can add a '.' to call the properties of the objects
for(let todo of todos){
    console.log(todo.id);
}

//forEach
todos.forEach(function(todo){
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo){
    return todoText;
});
console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
})
console.log(todoCompleted);

//filter & map
const todoCompleted1 = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);