const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/application').default;
const User = require('../../src/models/User').default;
const { defaultUser1, defaultUser2 } = require('../defaultModels');
const { compareObjectsWithSimilarKeys } = require('../../src/utils/');
const request = supertest(app);

describe('Auth/User', () => {
  beforeEach(async (done) => {
    this.user = await User.create(defaultUser1);
    await this.user.save();
    done();
  });

  // SignUp
  it('should be able to create user', async () => {
    const response = await request.post('/users').send(defaultUser2);
    expect(response.status).toBe(200);
  });

  it('should give error because trying to signup USERNAME that already exists', async () => {
    const response = await request.post('/users').send({
      ...defaultUser1,
      email: 'jo22@email.com',
    });
    expect(response.status).toBe(400);
  });

  // get One

  it('will find user by id', async () => {
    const response = await request.get(`/users/${this.user._id}`);
    expect(response.status).toBe(200);
  });

  it('wont find user by random id', async () => {
    const dummyId = mongoose.Types.ObjectId();
    const response = await request.get(`/users/${dummyId}`);
    expect(response.status).toBe(400);
    expect(response.error.text).toBe(
      "User not found"
    );
  });

  it('wont find user invalid url', async () => {
    const response = await request.get(`/users/blabla`);
    expect(response.status).toBe(400);
    expect(response.error.text).toBe(
      'Cast to ObjectId failed for value "blabla" at path "_id" for model "User"'
    );
  });

  // get All

  it('will find 2 users correctly saved in db', async () => {
    await User.create(defaultUser2);
    await this.user.save();
    
    const response = await request.get(`/users/`);
    expect(response.status).toBe(200);
    expect(compareObjectsWithSimilarKeys(response.body[0], defaultUser1)).toBeTruthy();
    expect(compareObjectsWithSimilarKeys(response.body[1], defaultUser2)).toBeTruthy();
  });

  it('will not find any user', async () => {
    await User.remove({});
    const response = await request.get(`/users/`);
    expect(response.status).toBe(400);
  });

  // update

  it('should be able to update user', async () => {
    const response = await request.put(`/users/${this.user._id}`).send({
      ...defaultUser2,
      username: 'cleber'
    });
    expect(response.status).toBe(200);
    expect(response.body.username).toBe('cleber');
  });


  it('will throw error, invalid username', async () => {
    const response = await request.put(`/users/${this.user._id}`).send({
      ...defaultUser2,
      username: ''
    });
    expect(response.status).toBe(400);
  });
  

  // delete

  it('will delete user', async () => {
    const response = await request.delete(`/users/${this.user._id}`);
    expect(response.status).toBe(200);
  });

  it('will not delete user for the second time', async () => {
    await request.delete(`/users/${this.user._id}`);
    const response = await request.delete(`/users/${this.user._id}`);
    expect(response.status).toBe(400);
  });
});
