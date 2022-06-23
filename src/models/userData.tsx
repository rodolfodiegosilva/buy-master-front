export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address,
    phone: string;
    website: string;
    company: Company;
}

export interface Address {

}

export interface Company {

}

export class Employee {
    private id: number;
    private firstName: string;
    private lastName: string;
    private salary: number;

    constructor(id: number, firstName: string, lastName, salary: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    getName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getSalary(): string {
        return `${this.lastName}`;
    }
}