// <<<<<<<<<<<<<<<-----------------------------------------------  [[ List of All Problem]] ------------------------------------------------>>>>>>>>>>>

/*

  1. Array of Object [ Problem 1 || Problem -2 || Problem-3]
  2.
  3.
  4.
  5.

*/


//--------------------------------------------------------------------------------------------> Problem-1
const hardcodedData = {
    assets: [
        {
            assetIdentification: {
                formStepId: '65573e803e40d89735e0d31c'
            },
            ownershipDetails: {
                formStepId: '65573e803e40d89735e0d31c'
            },
        },
        // Add more assets as needed
    ]
};

const formStepDetails = {
    '65573e803e40d89735e0d31c': {
        _id: '65573e803e40d89735e0d31c',
        stepNo: 1,
        stepName: 'Asset Identification',
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0
    },
};

const createNestedObject = async (assets, details) => {
    try {
        const nestedObject = await Promise.all(assets.assets.map(async (asset) => {
            const nestedDetails = {};

            for (const key in asset) {
                if (asset[key] && asset[key].formStepId) {
                    const formStepId = asset[key].formStepId;
                    nestedDetails[key] = {...asset[key], formStepId: details[formStepId]};
                }
            }

            return nestedDetails;
        }));

        return nestedObject;

    } catch (error) {
        throw new Error('Error creating nested object');
    }
};


createNestedObject(hardcodedData, formStepDetails)
    .then(result => {
        // Use console.dir for better inspection of objects
        console.dir(result, {depth: null});

        // Or use JSON.stringify for a formatted JSON string
        // console.log(JSON.stringify(result, null, 2));
    })
    .catch(error => console.error(error));


//--------------------------------------------------------------------------------------------> Problem-2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3];

function arrIntersection(arr1, arr2) {
    const intersection = arr1.filter(element => arr2.includes(element));
    return intersection;
}

const result = arrIntersection(arr1, arr2);
console.log(result);


//--------------------------------------------------------------------------------------------> Problem-3
// Sample data representing your groups
const assetFormManagements = {
    assetFormManagements: [
        {
            orderNo: 1,
            someCriteria: 'value1',
        },
        {
            // no orderNo in this object
            someCriteria: 'value4',
        },
        {
            orderNo: 3,
            someCriteria: 'value3',
        },
        {
            orderNo: 2,
            someCriteria: 'value2',
        },
    ],
};

// Copy the array to avoid modifying the original data
const result1 = [...assetFormManagements.assetFormManagements];

// Filter based on the presence of orderNo and then sort by orderNo
const result2 = result1
    .filter((item) => item.orderNo !== undefined)
    .sort((a, b) => a.orderNo - b.orderNo);

console.log(result2);


// const result1 = [...assetFormManagements.assetFormManagements];
//
// const result = result1.filter((items) => {
//     if (items.orderNo !== undefined) {
//         return items;
//     }
// });
//
// const result2 = result.sort((a, b) => {
//     const filterOutput = a.orderNo - b.orderNo;
//     return filterOutput;
// });
//
// console.log(result2);


//--------------------------------------------------------------------------------------------> Problem-4

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