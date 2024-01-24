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
    age: 20,
    address: {
        pincode: 843434,
        city: "GGN",
        state: "haryana",
    },
    mobile: 1234567890,
};


function mergeObjects(user1, user2) {
    const result = {...user2};
    
    for (const key in user1) {
        if (user1.hasOwnProperty(key)) {
            if (user1[key] !== null && typeof user1[key] === 'object' && result[key]) {
                // Recursively merge nested objects
                result[key] = mergeObjects(user1[key], result[key]);
            } else if (user1[key] !== null || result[key] === undefined) {
                result[key] = user1[key];
            }
        }
    }

    return result;
}

console.log(mergeObjects(user1, user2))

