# grpc-example
grpc sample example

# [What is grpc?](https://grpc.io/docs/guides/)

# Usage
grpc can be used to call server methods directly from client (node or browser) and by doing so it reduce overhead of making rest api request or socket communication implementation.
This is highly prefereale approach when there is binary data involved like high resolution images, audio, video etc. Google Assistant API is developed on top of grpc library. 

To run this example, execute following commands.

```code
npm install
node server.js
node client.js sample-name

// outout
Hello sample-name ☺☻♥♦
```
