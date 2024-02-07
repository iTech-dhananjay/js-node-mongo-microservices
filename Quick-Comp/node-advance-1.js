// <<<<<<<<<<<<<<<-----------------------------------------------  [[ Node.js Advanced Concepts ]] ------------------------------------------------>>>>>>>>>>>
/*
   Advanced Concepts
  1.  Event Loop ||  Streams || Promises and Async/Await || Concurrency and Parallelism ||  Debugging and Profiling
  2.  Microservices Architecture || Security Best Practices ||  Performance Optimization ||  Scalability ||  Dependency Management and Package Security
  3.
  4.
  5.
  6.
  7.
  8.
  9.
  10.
*/

// <<<<<<<<<<<<<<<------------------------------------------------ 1. [[ Event Loop ]] ----------------------------------------------------->>>>>>>>>>>

// <<<<<<<<<<<<<<<------------------------------------------------ 1. [[ Streams ]] ----------------------------------------------------->>>>>>>>>>>

/*
        - Streams are used for handling large amounts of data efficiently. Here's an example of using streams to copy data from one file to another.
        - In this example, createReadStream() and createWriteStream() create readable and writable streams, respectively. The pipe() method is used to pipe the data
          from the readable stream to the writable stream, allowing for efficient data transfer without loading the entire file into memory.
* */


const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt')

readStream.pipe(writeStream)

// <<<<<<<<<<<<<<<------------------------------------------------ 2. [[ Security Best Practices ]] ----------------------------------------------------->>>>>>>>>>>
/*
        - Node.js applications are vulnerable to various security threats, so it's essential to follow security best practices. Here's an example of implementing authentication
          using JSON Web Tokens (JWT) in a Node.js application

* */

const jwt = require('jsonwebtoken');

// Generate JWT token
const token = jwt.sign({userId: '123456'}, 'secret', {expiresIn: '1h'});

// Verify JWT token
const decodedToken = jwt.verify(token, 'secret');
console.log(decodedToken);


// <<<<<<<<<<<<<<<------------------------------------------------ 2. [[  Performance Optimization ]] ----------------------------------------------------->>>>>>>>>>>
/*
        - Optimizing the performance of Node.js applications involves various techniques. Here's an example of caching database queries using Redis to improve performance
        - In this example, we use Redis as a caching layer to store and retrieve data from the database. Cached data is stored with an expiration time to ensure freshness.

* */
const redis = require('redis');
const client = redis.createClient();

function getCachedData(key, callback) {
    client.get(key, (err, data) => {
        if (err) return callback(err);
        if (data !== null) {
            console.log('Data found in cache');
            return callback(null, JSON.parse(data));
        }
        // If data not found in cache, retrieve it from the database
        retrieveDataFromDatabase((err, data) => {
            if (err) return callback(err);
            client.setex(key, 3600, JSON.stringify(data)); // Cache data for 1 hour
            callback(null, data);
        });
    });
}
