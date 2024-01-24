const user1 = {
    name: "Rajan",
    age: null,
    address: {
        pincode: 1234444,
        city: null,
    },
    test: null,
};

const user2 = {
    name: "Piyush",
    age: null,
    address: {
        pincode: 843434,
        city: "GGN",
        state: "haryana",
    },
    mobile: 1234567890,
};


function mergeObjects(obj1, obj2) {
    const result = {...obj2};

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            if (obj1[key] !== null && typeof obj1[key] === 'object' && result[key]) {
                // Recursively merge nested objects
                result[key] = mergeObjects(obj1[key], result[key]);
            } else if (obj1[key] !== null || result[key] === undefined) {
                result[key] = obj1[key];
            }
        }
    }

    return result;
}


console.log(mergeObjects(user1, user2))