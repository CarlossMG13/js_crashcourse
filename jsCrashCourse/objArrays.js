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

console.log(todos[1].text)

//How to convert in JSON to communicate with API's, also you can search a JSON convert online, and replace the code with the JSON's syntax
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

