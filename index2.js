let users = [
    {name: 'A', age: 10},
    {name: 'B', age: 17},
    {name: 'C', age: 14},
    {name: 'D', age: 10},
];


const groupUsersByAge = (users) => {

    let groupByAge = {}
    for (let user of users) {
        //  const {name,age} = user
        if (!groupByAge[user.age]) {
            groupByAge[user.age] = []
        }
        groupByAge[user.age].push(user)
    }
    return groupByAge
}


console.log(groupUsersByAge(users))


// function groupPeopleByAge(people) {
//     const groupedByAge = {};
//
//     for (const person of people) {
//         const {name, age} = person;
//
//         if (!groupedByAge[age]) {
//             groupedByAge[age] = [];
//         }
//
//         groupedByAge[age].push({name, age});
//     }
//
//     return groupedByAge;
// }
//
// const groupedPeople = groupPeopleByAge(peopleArr);
//
// console.log(groupedPeople);
