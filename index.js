const { deterministicPartitionKey } = require("./dpk");

// console.log(deterministicPartitionKey());
// console.log(deterministicPartitionKey({ partitionKey: "257890652365617527726725347237462781641765478164732623646134641684658196586584965891547728657821656521658916589658946589265489614866472647326489564819234686832165658126587859648516658321625623891653654783265476564532646453654765476457238437265746575632786576476574632752346723467853462782346758465723464573" }));
console.log(deterministicPartitionKey(257890652365617676782));
