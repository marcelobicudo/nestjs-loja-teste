import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async save(user) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async emailExists(email: string) {
    const verifyUser = this.users.find((user) => user.email === email);

    return verifyUser !== undefined;
  }
}
