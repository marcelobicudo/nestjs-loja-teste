import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async emailExists(email: string) {
    const verifyUser = this.users.find((user) => user.email === email);

    return verifyUser !== undefined;
  }

  async update(id: string, userData: Partial<UserEntity>) {
    const verifyUser = this.users.find((savedUser) => savedUser.id === id);

    if (!verifyUser) {
      throw new Error('Usuário não encontrado');
    }

    Object.entries(userData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      verifyUser[key] = value;
    });

    return verifyUser;
  }
}
