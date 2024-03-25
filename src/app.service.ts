import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getTest(): string {
    const a = process.env.KEY_TEST;
    return `Test ${a} Ok!`;
  }
}
