const NodeEnvironment = require('jest-environment-node');

const { memoryDatabaseServer } = require('../src/utils/MemoryDatabaseServer');

class CustomEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    this.global.__DB_URL__ = await memoryDatabaseServer.getConnectionString();
  }

  async teardown() {
    await super.teardown();
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;
