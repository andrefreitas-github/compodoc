export interface ISpecification<T> {
  isSatisfiedBy(data: T): boolean | Promise<boolean>;
}
