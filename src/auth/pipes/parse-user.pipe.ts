import { Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { PasswordService } from '../password.service';

@Injectable()
export class ParseUserPipe
  implements PipeTransform<CreateUserInput, Promise<CreateUserInput>>
{
  constructor(private readonly passwordService: PasswordService) {}

  async transform(value: CreateUserInput): Promise<CreateUserInput> {
    if (value.password)
      value.password = await this.passwordService.hash(value.password);
    return value;
  }
}
