// Usage example:   logDebugStamp('20.09.16 [ server.js ] 19:39a', `process.env.DATABASE: ${process.env.DATABASE}`);

const logDebugStamp = (stamp, message) => {
  console.log(`  ${stamp} >>>   🛑 ${message}`);
};

module.exports = logDebugStamp;
