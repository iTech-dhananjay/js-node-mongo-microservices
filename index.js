function getObjectDepth(obj) {
    if (typeof obj !== 'object' || obj === null) {
        // Base case: if obj is not an object or is null, return 1
        return 1;
    }

    let maxDepth = 1; // Initialize maxDepth to 1

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const depth = getObjectDepth(obj[key]);
            maxDepth = Math.max(maxDepth, depth);
        }
    }

    return maxDepth;
}

// Example usage:
const person = {
    name: "John",
    age: 25,
    address: {
        city: "Exampleville",
        zipCode: "12345",
        country: "Sampleland",
    },
    hobbies: ["Reading", "Coding", "Traveling"],
};

const depth = getObjectDepth(person);
console.log("Depth of the object:", depth);
