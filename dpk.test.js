const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given 1 as input", () => {
    const trivialKey = deterministicPartitionKey(1);
    expect(trivialKey).toBe(
      "ca2c70bc13298c5109ee0cb342d014906e6365249005fd4beee6f01aee44edb531231e98b50bf6810de6cf687882b09320fdd5f6375d1f2debd966fbf8d03efa"
    );
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given 2 as input", () => {
    const trivialKey = deterministicPartitionKey(2);
    expect(trivialKey).toBe(
      "564e1971233e098c26d412f2d4e652742355e616fed8ba88fc9750f869aac1c29cb944175c374a7b6769989aa7a4216198ee12f53bf7827850dfe28540587a97"
    );
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given partitionKey integer 0 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 0 });
    expect(trivialKey).toBe(
      "e65a0cb83a95cae7eb0642da576cac881e397c0405c63577c977068f7892f69f1c315baa294124da2a67e0c486d340f9d357377f894d0c0fd850484f8984f2e7"
    );
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given partitionKey string 0 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "0" });
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the string '1' when given partitionKey integer 1 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: 1 });
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the string '1' when given partitionKey string 1 as input", () => {
    const trivialKey = deterministicPartitionKey({ partitionKey: "1" });
    expect(trivialKey).toBe("1");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given partitionKey string as input, length is greater than 256", () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey:
        "257890652365617527726725347237462781641765478164732623646134641684658196586584965891547728657821656521658916589658946589265489614866472647326489564819234686832165658126587859648516658321625623891653654783265476564532646453654765476457238437265746575632786576476574632752346723467853462782346758465723464573",
    });
    expect(trivialKey).toBe(
      "9d087dc38eeadb89251c8503bed24d10b943f419c5253410206f7ec9aec62a06ceb47c64dd5cd3e2ef81fde763f51f99f042f8ae6854d0203f31efe1cc16672b"
    );
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns the hash value when given partitionKey integer as input, length is greater than 16 bits", () => {
    const trivialKey = deterministicPartitionKey(257890652365617676782);
    expect(trivialKey).toBe(
      "c7db4d4a906d8610bc6a0b3930ea5673b716ef044d3f8c258342e2d5323882d68b5e79f6f1fbdc628f00797894a244a56193efc0c61f2c3f21690eebb2087109"
    );
  });
});
