import { CancelContractSpecification } from './specification/cancel-cotract.specification';
import { CanceledAtSpecification } from './specification/contract-dates.specification';
import {
  CancelAnySpecification,
  CancelByDesistenceSpecification,
  CancelByWithdrahawSpecification,
} from './specification/contract-status.specification';

export enum ContractStatusEnum {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  WITHDRAHAW = 'WITHDRAHAW',
}

export class Contract {
  id: string;
  code: string;
  status: ContractStatusEnum;
  canceledAt: Date;

  cancelUnderCustomerProtection() {
    return new CancelContractSpecification([
      new CanceledAtSpecification(),
      new CancelAnySpecification([
        new CancelByWithdrahawSpecification(),
        new CancelByDesistenceSpecification(),
      ]),
    ]).isSatisfiedBy(this);
  }
}

const contractSpec = new Contract();
contractSpec.code = 'any_code';
contractSpec.id = 'any_id';
contractSpec.status = ContractStatusEnum.WITHDRAHAW;
contractSpec.canceledAt = new Date();

console.log(contractSpec.cancelUnderCustomerProtection());
