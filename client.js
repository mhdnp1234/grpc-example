var PROTO_PATH = __dirname + '/testservice.proto';

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());
  var user;
  if (process.argv.length >= 3) {
    user = process.argv[2];
  } else {
    user = 'world';
  }
  var data = new Uint8Array(10);
  data = [1,2,3,4,5,6,7,8,9,10];
  client.sayHello({name: user, data: data}, function(err, response) {
    console.log('Greeting:', response.message);
  });
}

main();