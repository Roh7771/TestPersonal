"use strict";

const bcrypt = require(`bcrypt`);
const {SALT_ROUNDS} = require(`../../../../constants`);

class UsersService {
  constructor(db) {
    this._db = db;
  }

  async create(userData) {
    const hash = await bcrypt.hash(userData.password, SALT_ROUNDS);
    return await this._db.User.create({...userData, password: hash});
  }
}

module.exports = UsersService;
