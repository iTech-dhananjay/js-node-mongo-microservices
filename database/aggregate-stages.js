// // <<<<<<<<<<<<<<<-----------------------------------------------  [[ MongoDB Aggregation ]] ------------------------------------------------>>>>>>>>>>>

/*
The MongoDB aggregation pipeline consists of several stages that allow you to process and transform documents as they pass through each stage.
There are seven primary stages in the aggregation pipeline:

1. $match:   Filters the documents to pass only those that match the specified conditions.
2. $project: Reshapes documents, includes, excludes, or renames fields, and computes new fields.
3. $group:   Groups documents by a specified key and performs aggregation operations on grouped data.
4. $sort:    Sorts documents based on specified criteria.
5. $skip:    Skips a specified number of documents.
6. $limit:   Limits the number of documents passed to the next stage.
7. $unwind:  Deconstructs an array field from the input documents and outputs one document for each element.

**/


/*
Different Types of SQL JOINs => Here are the different types of the JOINs in SQL:
 1. - (INNER) JOIN: Returns records that have matching values in both tables
 2. - LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
 3. - RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
 4. - FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table
*/

// Q-1 =>  SELECT * FROM `posts` RIGHT JOIN users ON users.id=posts.user_id ORDER BY posts.id DESC GROUP BY posts.user_id

// Inserting into the users collection
db.users.insertMany([
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
    { id: 3, name: "User3" }
]);

// Inserting into the posts collection
db.posts.insertMany([
    { id: 101, user_id: 1, content: "Post by User1", created_at: new Date("2024-07-01T12:00:00Z") },
    { id: 102, user_id: 2, content: "Post by User2", created_at: new Date("2024-07-02T12:00:00Z") },
    { id: 103, user_id: 1, content: "Another post by User1", created_at: new Date("2024-07-03T12:00:00Z") }
]);



db.posts.updateMany({}, {$set: {isPublished: false}});

// Set isPublished to true for some posts
db.posts.updateMany({_id: {$in: [101, 103]}}, {$set: {isPublished: true}});


db.posts.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "user_id",
            foreignField: "id",
            as: "user_info"
        }
    },
    {
        $unwind: "$user_info"
    },
    {
        $sort: { id: -1 }
    },
    {
        $group: {
            _id: "$user_id",
            post: { $first: "$$ROOT" }
        }
    },
    {
        $replaceRoot: { newRoot: "$post" }
    }
]);




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


// Q-2 => What course is offered by the University of South Asia with a level other than "Excellent"?
db.users.insertMany([
    {_id: 1, firstName: "Dhananjay", lastName: "Kumar"},
    {_id: 2, firstName: "Rohit", lastName: "Kumar"},
    {_id: 3, firstName: "Abhishek", lastName: "Kumar"},
    {_id: 4, firstName: "John", lastName: "Doe"},
    {_id: 5, firstName: "Dhananjay", lastName: "Kumar"},
    {_id: 6, firstName: "John", lastName: "Singh"},
    {_id: 7, firstName: "Abhishek", lastName: "Singh"},
]);


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


