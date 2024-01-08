const complexArray = [
    {
        id: 1,
        name: 'John',
        details: {
            age: 30,
            address: {
                city: 'New York',
                zipCode: '10001',
                country: 'USA',
            },
        },
        hobbies: ['reading', 'traveling'],
    },
    {
        id: 2,
        name: 'Jane',
        details: {
            age: 28,
            address: {
                city: 'San Francisco',
                zipCode: '94105',
                country: 'USA',
            },
        },
        hobbies: ['painting', 'gardening'],
    },
    {
        id: 3,
        name: 'Bob',
        details: {
            age: 35,
            address: {
                city: 'London',
                zipCode: 'WC2N',
                country: 'UK',
            },
        },
        hobbies: ['photography', 'cooking'],
    },
];

// 1. Flatten the array of objects:
const flattenedArray = complexArray.map(obj => ({
    id: obj.id,
    name: obj.name,
    age: obj.details.age,
    city: obj.details.address.city,
    zipCode: obj.details.address.zipCode,
    country: obj.details.address.country,
    hobbies: obj.hobbies.join(', '),
}));

console.log('Flattened Array:', flattenedArray);


//with forEach
const flattenArray = [];
complexArray.forEach(obj => {
    flattenArray.push({
        id: obj.id,
        name: obj.name,
        age: obj.details.age,
        city: obj.details.address.city,
        zipCode: obj.details.address.zipCode,
        country: obj.details.address.country,
        hobbies: obj.hobbies.join(', '),
    });
});

console.log('Flattened Array:', flattenArray);


//console.log(complexArray)