//1.1 $ positional operator
db.students.insertMany([
    {'_id': 1, 'grades': [85, 80, 80]},
    {'_id': 2, 'grades': [88, 90, 92]},
    {'_id': 3, 'grades': [85, 100, 90]}
]);

//The positional $ operator acts as a placeholder for the first match of the update query document.
db.students.updateOne(
    {_id: 1, grades: 80},
    {$set: {'grades.$': 90}}
);
//db.students.find().pretty()


//1.2 Update Documents in an Array

db.studentMark.insertOne({
    _id: 4,
    grades: [
        {grade: 80, mean: 75, std: 8},
        {grade: 80, mean: 90, std: 5},
        {grade: 85, mean: 85, std: 8}
    ]
});


db.studentMark.updateOne(
    {_id: 4, 'grades.grade': 85},
    {$set: {'grades.$.grade': 1}}
);
//db.studentMark.find().pretty()  


//1.3 Update Embedded Documents Using Multiple Field Matches

db.studentMark.insertOne({
    _id: 5,
    grades: [
        {grade: 80, mean: 75, std: 8},
        {grade: 80, mean: 90, std: 5},
        {grade: 85, mean: 85, std: 8}
    ]
});

db.studentMark.updateMany(
    {
        _id: 5,
        grades: {$elemMatch: {grade: {$lte: 90}, mean: {$gt: 80}}}
    },
    {$set: {'grades.$.std': 4}}
);
//db.studentMark.find().pretty()


//---------------------------------------------------------------2ND Cases-----------------------------------------------------------------------------
//2.0 $[] - Update All Elements in an Array

db.users.insertMany([
    {'_id': 1, 'savings': [85, 82, 80]},
    {'_id': 2, 'savings': [88, 90, 92]},
    {'_id': 3, 'savings': [85, 100, 90]}
]);


db.users.updateOne(
    {},
    {$inc: {'savings.$[]': 10}}
);
//Acts as a placeholder to update all elements in an array for the documents that match the query condition.
//db.users.find().pretty()

// 2.1 Update All Documents in an Array

db.students2.insertMany([
    {
        '_id': 1,
        'grades': [
            {'grade': 80, 'mean': 75, 'std': 8},
            {'grade': 85, 'mean': 90, 'std': 6},
            {'grade': 85, 'mean': 85, 'std': 8}
        ]
    },
    {
        '_id': 2,
        'grades': [
            {'grade': 90, 'mean': 75, 'std': 8},
            {'grade': 87, 'mean': 90, 'std': 5},
            {'grade': 85, 'mean': 85, 'std': 6}
        ]
    }

]);

db.students2.updateMany(
    {},
    {$inc: {'grades.$[].std': -2}}
);

db.students2.aggregate([
    {
        $unwind: '$grades'
    },
    {
        $project: {
            _id: 0,
            std: '$grades.std'
        }
    }
]);

//2.2 Update Nested Arrays in Conjunction with $[<identifier>]
//Acts as a placeholder to update all elements that match the arrayFilters condition for the documents that match the query condition.


db.students3.insertMany([
    {
        '_id': 1,
        'grades': [
            {type: 'quiz', questions: [10, 8, 5]},
            {type: 'quiz', questions: [8, 9, 6]},
            {type: 'hw', questions: [5, 4, 3]},
            {type: 'exam', questions: [25, 10, 23, 0]},
        ]
    }
]);

db.students3.updateMany(
    {},
    {$inc: {'grades.$[].questions.$[score]': 2}},
    {arrayFilters: [{'score': {$gte: 8}}]}
);

db.students3.find().pretty();


//---------------------------------------------------------------3rd Cases-----------------------------------------------------------------------------
const documents = [
    {
        organizationId: "org123",
        assets: [
            {
                _id: ObjectId("61e6d6a8200ed2b42e942a95"),
                images: [
                    {publicId: "image1"},
                    {publicId: "image2"},
                    {publicId: "image3"}
                ]
            },
            {
                _id: ObjectId("61e6d6a8200ed2b42e942a96"),
                images: [
                    {publicId: "image4"},
                    {publicId: "image5"},
                    {publicId: "image6"}
                ]
            }
        ]
    },
    {
        organizationId: "org456",
        assets: [
            {
                _id: ObjectId("61e6d6a8200ed2b42e942a97"),
                images: [
                    {publicId: "image7"},
                    {publicId: "image8"},
                    {publicId: "image9"}
                ]
            },
            {
                _id: ObjectId("61e6d6a8200ed2b42e942a98"),
                images: [
                    {publicId: "image10"},
                    {publicId: "image11"},
                    {publicId: "image12"}
                ]
            }
        ]
    }
];

db.organization.insertMany(documents);


db.organization.updateOne(
    {
        organizationId: "org123",
        "assets._id": ObjectId("61e6d6a8200ed2b42e942a95")
    },
    {
        $pull: {
            "assets.$.images": {"publicId": "image2"}
        }
    },
    {
        new: true // Return the modified document
    }
)

db.organization.find().pretty()