// Find the max  of the following array
//     [22,34,78,12,10,5,28]

const arr = [22, 34, 78, 12, 10, 5, 28, 99]

const maxArr = (arr) => {
    let max = arr[0]
    for (let i = 1; i <= arr.length - 1; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max

}
console.log(maxArr(arr))

//------------------------------------------------------------------
function moveArrayElements(arr, positions) {
    const movedArray = [];
    const length = arr.length;

    // Iterate through the array starting from the specified positions
    for (let i = positions; i < length; i++) {
        movedArray.push(arr[i]);
    }
    // Iterate through the array from the beginning up to the specified positions
    for (let i = 0; i < positions; i++) {
        movedArray.push(arr[i]);
    }

    return movedArray;
}

const inputArray = [2, 6, 3, 9, 7, 5];
const positionsToMove = 2;

const movedArray = moveArrayElements(inputArray, positionsToMove);

console.log(movedArray);

//------------------------------------------------------------------


const {MongoClient} = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

async function addOrganization(organizationName) {
    try {
        await client.connect();

        // Create a new database for the organization
        const dbName = organizationName.toLowerCase().replace(/\s+/g, '_');
        const db = client.db(dbName);

        // Add organization details to the new database
        const organizationDetails = {
            name: organizationName,
            // Add other organization details as needed
        };

        // Insert organization details into a collection (e.g., 'organizations')
        const organizationsCollection = db.collection('organizations');
        await organizationsCollection.insertOne(organizationDetails);

        // Create additional collections with initial data if needed
        await createDefaultCollections(db);

        console.log(`Organization '${organizationName}' added with database '${dbName}'`);
    } finally {
        await client.close();
    }
}

async function createDefaultCollections(db) {
    // Create additional collections and insert initial data if needed
    const usersCollection = db.collection('users');
    await usersCollection.insertMany([
        {username: 'admin', password: 'adminpassword'},
        // Add more initial user data as needed
    ]);

    const productsCollection = db.collection('products');
    await productsCollection.insertMany([
        {name: 'Product 1', price: 19.99},
        // Add more initial product data as needed
    ]);

    // Add more collections and initial data as needed
}

// Example usage
const organizationName = 'My Organization';
addOrganization(organizationName);
