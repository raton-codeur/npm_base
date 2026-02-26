import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome() {
    return 'bienvenue';
  }
}
