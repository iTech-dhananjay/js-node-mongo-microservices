// // <<<<<<<<<<<<<<<-----------------------------------------------  [[ MongoDB Aggregation ]] ------------------------------------------------>>>>>>>>>>>

/*
The MongoDB aggregation pipeline consists of several stages that allow you to process and transform documents as they pass through each stage. There are seven primary stages in the aggregation pipeline:

1. **$match**: Filters the documents to pass only those that match the specified conditions.

2. **$project**: Reshapes documents, includes, excludes, or renames fields, and computes new fields.

3. **$group**: Groups documents by a specified key and performs aggregation operations on grouped data.

4. **$sort**: Sorts documents based on specified criteria.

5. **$skip**: Skips a specified number of documents.

6. **$limit**: Limits the number of documents passed to the next stage.

7. **$unwind**: Deconstructs an array field from the input documents and outputs one document for each element.

**/


// Q. =>  SELECT * FROM `posts` RIGHT JOIN users ON users.id=posts.user_id ORDER BY posts.id DESC GROUP BY posts.user_id
/*Different Types of SQL JOINs
Here are the different types of the JOINs in SQL:

(INNER) JOIN: Returns records that have matching values in both tables
LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table*/


// Create users
db.users.insertMany([
    {_id: 1, name: "User1"},
    {_id: 2, name: "User2"},
    {_id: 3, name: "User3"},
]);

// Create posts with isPublished and category fields
db.posts.insertMany([
    {_id: 101, userId: 1, title: "Post1", category: "Technology"},
    {_id: 102, userId: 1, title: "Post2", category: "Science"},
    {_id: 103, userId: 2, title: "Post3", category: "Science"},
    {_id: 104, userId: 2, title: "Post4", category: "Technology"},
]);


db.posts.updateMany({}, {$set: {isPublished: false}});

// Set isPublished to true for some posts
db.posts.updateMany({_id: {$in: [101, 103]}}, {$set: {isPublished: true}});


db.users.aggregate([
    {
        $lookup: {
            from: "posts",
            localField: "_id",
            foreignField: "userId",
            as: "result"
        }
    },
    {
        $unwind: "$result"
    },
    {
        $match: {
            "result.isPublished": true
        }
    },
    {
        $sort: {"result._id": -1}
    },
    {
        $group: {
            _id: "$_id",
            name: {$first: "$name"},
            posts: {$push: "$result"}

        }
    },
    {
        $project: {
            _id: 1,
            name: 1,
            published_posts: "$posts",
            category: "$posts.category", // Include the category field in the projection
        },
    },
    {
        $skip: 0, // Skip the first document
    },
    {
        $limit: 2, // Limit the result to 2 documents
    },

]).pretty()
/*
 Output : -

{ "acknowledged" : true, "insertedIds" : [ 1, 2, 3 ] }
{ "acknowledged" : true, "insertedIds" : [ 101, 102, 103, 104 ] }
{ "acknowledged" : true, "matchedCount" : 4, "modifiedCount" : 4 }
{ "acknowledged" : true, "matchedCount" : 2, "modifiedCount" : 2 }
{
	"_id" : 1,
	"name" : "User1",
	"published_posts" : [
		{
			"_id" : 101,
			"userId" : 1,
			"title" : "Post1",
			"category" : "Technology",
			"isPublished" : true
		}
	],
	"category" : [
		"Technology"
	]
}
{
	"_id" : 2,
	"name" : "User2",
	"published_posts" : [
		{
			"_id" : 103,
			"userId" : 2,
			"title" : "Post3",
			"category" : "Science",
			"isPublished" : true
		}
	],
	"category" : [
		"Science"
	]
}

* */


db.users.insertMany([
    {_id: 1, firstName: "Dhananjay", lastName: "Kumar"},
    {_id: 2, firstName: "Rohit", lastName: "Kumar"},
    {_id: 3, firstName: "Abhishek", lastName: "Kumar"},
    {_id: 4, firstName: "John", lastName: "Doe"},
    {_id: 5, firstName: "Dhananjay", lastName: "Kumar"},
    {_id: 6, firstName: "John", lastName: "Singh"},
    {_id: 7, firstName: "Abhishek", lastName: "Singh"},
]);


db.users.aggregate([
    {
        $group: {
            _id: "$firstName",
            lastNames: {$addToSet: "$lastName"},
            count: {$sum: 1}
        }
    },
    {
        $match: {
            $expr: {
                $gt: [{$size: "$lastNames"}, 1]
            }
        }
    },
    {
        $project: {
            firstName: "$_id",
            lastNames: 1,
            count: 1,
            _id: 0
        }
    }
]);

/*
Output:

{
	"acknowledged" : true,
	"insertedIds" : [
		1,
		2,
		3,
		4,
		5,
		6,
		7
	]
}
{ "lastNames" : [ "Singh", "Doe" ], "count" : 2, "firstName" : "John" }
{ "lastNames" : [ "Kumar", "Singh" ], "count" : 2, "firstName" : "Abhishek" }

* */

db.courses.insert([
    {
        university: 'USAL',
        name: 'Computer Science',
        level: 'Excellent'
    },
    {
        university: 'USAL',
        name: 'Electronics',
        level: 'Intermediate'
    },
    {
        university: 'USAL',
        name: 'Communication',
        level: 'Excellent'
    }
])

db.courses.aggregate([
    {
        $match: {
            university: 'USAL',
            level: {"$ne": 'Excellent'}
        }
    }
]).pretty()
// db.employees.find({dept: 'Sales'});

