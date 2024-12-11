import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  /**
   * Aqui já é a classe service
   * @param greeting mensagem opcional
   * @returns 
   */
  getHello(greeting?: string): string {
    return 'Hello World!';
  }
}
