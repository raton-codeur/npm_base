import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestService } from './test.service';

@Controller()
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  get() {
    return this.testService.get();
  }

  @Post()
  add(@Body('message') message: string) {
    return this.testService.add(message);
  }
}
