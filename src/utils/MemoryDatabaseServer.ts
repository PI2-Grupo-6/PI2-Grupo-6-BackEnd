import { MongoMemoryServer } from 'mongodb-memory-server';

class MemoryDatabaseServer {
  mongod: MongoMemoryServer;

  public constructor() {
    this.mongod = new MongoMemoryServer({
      binary: {
        version: '4.0.3',
      },
      autoStart: false,
    });
  }

  public start() {
    return this.mongod.start();
  }

  public stop() {
    return this.mongod.stop();
  }

  public getConnectionString() {
    return this.mongod.getUri();
  }
}
export const memoryDatabaseServer = new MemoryDatabaseServer();
export default memoryDatabaseServer;
