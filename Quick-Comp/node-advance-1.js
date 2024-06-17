// <<<<<<<<<<<<<<<-----------------------------------------------  [[ Node.js Advanced Concepts ]] ------------------------------------------------>>>>>>>>>>>
/*
   Advanced Concepts
  1.  Event Loop and Non-blocking I/O [[ What is the event loop in node.js ]]
  2.  Microservices Architecture
  3.  Streams
  4   Buffers
  5.  Clusters
  6.  Concurrency and Parallelism
  7.  Debugging and Profiling
  8.  Microservices Architecture
  9.  Security Best Practices [Middleware: Helmet.js for security headers.]
  10. Scalability
  11  Dependency Management and Package Security || Package Management
  12. Memory Management
  13. N-API and Native Addons
  14.
  15.

  1. Index of element in sorted rotated array
 2. Given two strings find minimum window which contains all characters of second string
 3. Design Review system which will scale  up to 150 million requests
 4. Cost optimization design keeping AWS billing in mind

*/
import {randomInt} from 'crypto'

const otp = randomInt(100000, 1000000)
console.log(otp, 'otp')

// <<<<<<<<<<<<<<<------------------------------------------------ 1. [[ Event Loop ]] ----------------------------------------------------->>>>>>>>>>>


//https://www.builder.io/blog/visual-guide-to-nodejs-event-loop - Guide to Node.js Event Loop
// <<<<<<<<<<<<<<<------------------------------------------------ 3. [[ Streams ]] ----------------------------------------------------->>>>>>>>>>>

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


// <<<<<<<<<<<<<<<------------------------------------------------ 10. [[ Scalability ]] ----------------------------------------------------->>>>>>>>>>>
/*
     - Scalability refers to the ability of a system to handle increasing loads and traffic effectively. In the context of Node.js applications, scalability becomes crucial
       as your application grows and encounters higher levels of traffic.
     - Scalability ensures that your application can continue to perform well under heavy loads without experiencing slowdowns or failures.
     - There are generally two types of scalability:
        1) Vertical Scalability: Vertical scalability involves increasing the resources (such as CPU, memory, or disk space) of a single server to handle more load.
           While vertical scalability can provide immediate improvements, it has limitations, and there's a point beyond which further scaling becomes impractical or cost-prohibitive.
        2) Horizontal Scalability: Horizontal scalability involves adding more servers to distribute the load across multiple instances.This approach allows for more flexibility
           and can handle larger loads by adding more servers as needed. Horizontal scalability is typically achieved through techniques like load balancing and distributed computing.

     => Node.js applications are inherently scalable due to their non-blocking, event-driven architecture, which allows them to handle multiple concurrent connections efficiently.
        However, to fully leverage the capabilities of modern multicore processors, Node.js applications can benefit from horizontal scaling using clustering.

   "Clustering in Node.js"
    Clustering is a built-in module in Node.js that allows you to create multiple instances of your application, each running on a separate core of the CPU. By utilizing clustering,
    you can take advantage of all available CPU cores and distribute the workload across them, thereby improving the overall performance and scalability of your application.

    Benefits of Clustering
    => Utilization of CPU Cores: Clustering allows you to take full advantage of multicore processors by distributing the workload across multiple CPU cores.
    => Improved Performance: By spreading the workload across multiple worker processes, clustering can significantly improve the performance of your application, especially under heavy loads.
    => Fault Tolerance: If a worker process crashes or becomes unresponsive, the master process can restart it, ensuring that your application remains available and responsive.
    => Horizontal Scaling: Clustering facilitates horizontal scaling by enabling you to add more worker processes as needed to handle increasing loads.

    Overall, clustering is a powerful technique for achieving scalability and performance optimization in Node.js applications, particularly in scenarios
    where vertical scaling is not sufficient to meet the demands of growing traffic.
* */

/*
  - Here's a simple example demonstrating how to use clustering in a Node.js application
    In this example:
                  - The master process checks if it's the master using cluster.isMaster.
                  - If it's the master process, it forks multiple worker processes equal to the number of CPU cores available (numCPUs) using cluster.fork().
                  - Each worker process executes the logic inside the else block.
* */

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    console.log(`Worker ${process.pid} started`);
    // Worker process logic
}


// <<<<<<<<---------------------------------- 11. [[ Dependency Management and Package Security ]] ----------------------------------------->>>>>>>>>>>
/*
        - Managing dependencies and ensuring their security is crucial for building secure Node.js applications. Here's an example of using
          npm audit to check for security vulnerabilities in dependencies
          npm audit
        - Running npm audit in the terminal will scan your project's dependencies for known security vulnerabilities and provide recommendations for fixing them.
          It's essential to regularly update dependencies and follow security best practices to keep your Node.js applications secure.
* */


// <<<<<<<<----------------------------------------------- 12. [[ Memory Management ]] ------------------------------------------------------->>>>>>>>>>>
/*
        - Garbage Collection: V8’s mechanism to free up unused memory.
        - Heap Snapshots: Provides a state of the heap at a particular point.
        - Memory Leaks: Situations where memory isn’t released even when no longer needed.
        - Identification: Tools like node-inspect and heapdump.
        - Common Causes: Global variables, event listeners not being removed.
* */
let str = "Hello, World!"; // String stored in a more direct manner, possibly on the stack
let num = 42;              // Number stored similarly

let person = {              // Object stored in the heap
    name: "John",
    age: 30
};

let array = [1, 2, 3];       // Array (which is an object) stored in the heap
//https://www.daily.co/blog/introduction-to-memory-management-in-node-js-applications/

//Binary vs. text: BSON is a binary-encoded format, whereas JSON is a text-based format. This means that BSON is compact for transmitting over a network, while JSON is human-readable and easier to work with in various contexts.

let arr = [
    {_id: 1, name: "John"},
    {_id: 2, name: "Doe"}
];

let result = [
    {_id: 3, name: "John-Update"},
    {_id: 4, name: "Doe-Update"} // Corrected _id value
];

// Replace contents of arr with result
console.log(arr.splice(0, arr.length, ...result));

console.log(arr);
