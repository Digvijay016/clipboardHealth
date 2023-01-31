const crypto = require("crypto");

exports.deterministicPartitionKey = (inputKey) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let finalPartionedKey;

  if (inputKey) {
    if (inputKey.partitionKey) {
      finalPartionedKey = inputKey.partitionKey;
    } else {
      const data = JSON.stringify(inputKey);
      finalPartionedKey = crypto
        .createHash("sha3-512")
        .update(data)
        .digest("hex");
    }
  }
  if (finalPartionedKey) {
    if (typeof finalPartionedKey !== "string") {
      finalPartionedKey = JSON.stringify(finalPartionedKey);
    }
  } else {
    finalPartionedKey = TRIVIAL_PARTITION_KEY;
  }
  if (finalPartionedKey.length > MAX_PARTITION_KEY_LENGTH) {
    finalPartionedKey = crypto
      .createHash("sha3-512")
      .update(finalPartionedKey)
      .digest("hex");
  }
  return finalPartionedKey;
};
