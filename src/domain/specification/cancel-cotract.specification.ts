import { ISpecification } from './ISpecification';

export class CancelContractSpecification<T> implements ISpecification<T> {
  constructor(private specifications: ISpecification<T>[]) {}
  
  isSatisfiedBy(data: T): boolean {
    return this.specifications.every((spec) => spec.isSatisfiedBy(data));
  }
}
