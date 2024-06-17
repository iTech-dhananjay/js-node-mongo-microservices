// Sample array of objects
const arrayOfObjects = [
    {id: 1, name: 'Object 1', subObjects: [{id: 11, name: 'SubObject 11'}, {id: 12, name: 'SubObject 12'}]},
    {id: 2, name: 'Object 2', subObjects: [{id: 21, name: 'SubObject 21'}, {id: 22, name: 'SubObject 22'}]},
    {id: 3, name: 'Object 3', subObjects: [{id: 31, name: 'SubObject 31'}, {id: 32, name: 'SubObject 32'}]}
];

// Using map to transform the array
const mappedArray = arrayOfObjects.map(obj => ({
    ...obj,
    name: `Mapped ${obj.name}`,
    subObjects: obj.subObjects.map(subObj => ({...subObj, name: `Mapped ${subObj.name}`}))
}));

console.log('Mapped Array:', mappedArray);

// Using flatMap to flatten the array
const flattenedArray = arrayOfObjects.flatMap(obj => [
    {...obj, name: `FlatMapped ${obj.name}`},
    ...obj.subObjects.map(subObj => ({...subObj, name: `FlatMapped ${subObj.name}`}))
]);

console.log('Flattened Array:', flattenedArray);