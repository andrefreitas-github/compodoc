import { Contract } from "../contract";
import { ISpecification } from "./ISpecification";

export class CanceledAtSpecification implements ISpecification<Contract> {
    isSatisfiedBy(data: Contract): boolean {
        return data.canceledAt && (data.canceledAt instanceof Date)
    }
}