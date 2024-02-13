// // <<<<<<<<<<<<<<<-----------------------------------------------  [[ MongoDB Search ]] ------------------------------------------------>>>>>>>>>>>

/*
The MongoDB aggregation pipeline consists of several stages that allow you to process and transform documents as they pass through each stage. There are seven primary stages in the aggregation pipeline:



**/

db.books.insertMany([
    {
        _id: 1,
        title: "Book 1",
        author: "Author 1",
        reviews: [
            {user: "User1", rating: 4, comment: "Enjoyed the book!"},
            {user: "User2", rating: 5, comment: "Highly recommended!"},
        ],
    },
    {
        _id: 2,
        title: "Book 2",
        author: "Author 2",
        reviews: [
            {user: "User1", rating: 3, comment: "Good read."},
            {user: "User3", rating: 4, comment: "Interesting plot."},
        ],
    },
]);


// Perform a search using the $match stage:
db.books.aggregate([
    {
        $match: {
            $or: [
                {title: {$regex: "Book 1", $options: "i"}}, // Case-insensitive search for books with "Book 1" in the title
                {'reviews.comment': {$regex: "Highly recommended!", $options: "i"}}, // Case-insensitive search for reviews with "Highly recommended" in the comment
            ],
        },
    },
]);


// Simple search without aggregation
db.books.find({
    $or: [
        {title: {$regex: "Book 1", $options: "i"}},
        {reviews: {$elemMatch: {comment: {$regex: "Highly recommended!", $options: "i"}}}},
    ],
});
