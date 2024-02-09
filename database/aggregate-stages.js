// <<<<<<<<<<<<<<<-----------------------------------------------  [[ MongoDB Aggregation ]] ------------------------------------------------>>>>>>>>>>>
/*

The MongoDB aggregation pipeline consists of several stages that allow you to process and transform documents as they pass through each stage. There are seven primary stages in the aggregation pipeline:

1. **$match**: Filters the documents to pass only those that match the specified conditions.

2. **$project**: Reshapes documents, includes, excludes, or renames fields, and computes new fields.

3. **$group**: Groups documents by a specified key and performs aggregation operations on grouped data.

4. **$sort**: Sorts documents based on specified criteria.

5. **$skip**: Skips a specified number of documents.

6. **$limit**: Limits the number of documents passed to the next stage.

7. **$unwind**: Deconstructs an array field from the input documents and outputs one document for each element.


*/
// Create users collection and insert documents
db.users.insertMany([
    {
        name: "Alice",
        age: 30,
        gender: "female",
        maritalStatus: "single",
        shoppingList: ["dress", "shoes", "jewelry"]
    },
    {
        name: "Bob",
        age: 35,
        gender: "male",
        maritalStatus: "married",
        shoppingList: ["electronics", "books"]
    },
    {
        name: "Charlie",
        age: 28,
        gender: "male",
        maritalStatus: "single",
        shoppingList: ["gadgets", "clothes"]
    }
]);

// Create marriage_shopping_events collection and insert documents
db.marriage_shopping_events.insertMany([
    {
        eventName: "Wedding",
        items: ["wedding dress", "suit", "rings", "flowers", "cake"]
    },
    {
        eventName: "Anniversary",
        items: ["gift", "dinner reservations", "flowers"]
    },
    {
        eventName: "Engagement",
        items: ["engagement ring", "proposal location", "flowers"]
    }
]);
// Aggregation on users collection
const userAggregation = db.users.aggregate([
    {
        $match: {
            gender: "female" // Match only female users
        }
    },
    {
        $project: {
            name: 1,
            age: 1,
            maritalStatus: 1,
            shoppingList: 1
        }
    },
    {
        $group: {
            _id: "$maritalStatus",
            users: {
                $push: {
                    name: "$name",
                    age: "$age",
                    shoppingList: "$shoppingList"
                }
            }
        }
    },
    {
        $sort: {
            _id: 1 // Sort by marital status
        }
    }
]);

// Aggregation on marriage_shopping_events collection
const eventAggregation = db.marriage_shopping_events.aggregate([
    {
        $project: {
            eventName: 1,
            items: 1
        }
    },
    {
        $unwind: "$items"
    },
    {
        $group: {
            _id: "$eventName",
            shoppingList: {$push: "$items"}
        }
    }
]);

// Print the results
print("User Aggregation:");
while (userAggregation.hasNext()) {
    printjson(userAggregation.next());
}

print("\nMarriage Shopping Event Aggregation:");
while (eventAggregation.hasNext()) {
    printjson(eventAggregation.next());
}
