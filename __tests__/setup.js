const { memoryDatabaseServer } = require('../src/utils/MemoryDatabaseServer');

module.exports = async () => {
  await memoryDatabaseServer.start();
};
