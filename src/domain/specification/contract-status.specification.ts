import {Contract, ContractStatusEnum } from '../contract';
import { ISpecification } from './ISpecification';

export class CancelByDesistenceSpecification
  implements ISpecification<Contract>
{
  isSatisfiedBy(data: Contract): boolean {
    return data.status === ContractStatusEnum.CANCELED;
  }
}

export class CancelByWithdrahawSpecification
  implements ISpecification<Contract>
{
  isSatisfiedBy(data: Contract): boolean {
    return data.status === ContractStatusEnum.WITHDRAHAW;
  }
}

export class CancelAnySpecification implements ISpecification<Contract> {
  constructor(private specifications: ISpecification<Contract>[]) {}
  isSatisfiedBy(data: Contract): boolean | Promise<boolean> {
    return this.specifications.some((specs) => specs.isSatisfiedBy(data));
  }
}
