import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  /**
   * Este é o método getHello
   * @param greeting mensagem opcional que você pode enviar
   * @returns A mensagem que você desejar
   */
  getHello(greeting?: string): string {
    return this.appService.getHello(greeting);
  }
}
