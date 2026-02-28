import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  private l: string[] = ['test', 'test'];

  get() {
    return this.l;
  }

  add(message: string) {
    this.l.push(message);
    return { ok: true };
  }
}
