import { Injectable } from '@nestjs/common';
import { ComplexObj } from './domain/complexObj';

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

  /**
   * This class calculate the age from Person
   * @param compleXObject 
   * @returns a complexObject
   */
  getCompodoc(compleXObject: ComplexObj): ComplexObj {
    return {
      age:compleXObject.age,
      name: compleXObject.name
    }
  }
}
