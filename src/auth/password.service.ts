import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

@Injectable()
export class PasswordService {
  private _defaultHashRounds = 10;

  async hash(value: string): Promise<string> {
    return hash(value, this._defaultHashRounds);
  }

  validatePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }
}
