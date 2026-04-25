import { type Address } from "./data";

export type ProcessedUser = {
    id: string;
    username: string;
    address: Address;
    age: number;
    companyName: string;
};
