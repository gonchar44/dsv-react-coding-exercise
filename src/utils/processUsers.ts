import { type RawUser } from "../data";
import { type ProcessedUser } from "../types";

const ID_CHARSET = "ABCDEF123456";
const ID_LENGTH = 6;

function generateId(existingIds: Set<string>): string {
    let id: string;
    do {
        id = Array.from({ length: ID_LENGTH }, () => ID_CHARSET[Math.floor(Math.random() * ID_CHARSET.length)]).join(
            "",
        );
    } while (existingIds.has(id));
    existingIds.add(id);
    return id;
}

export function processUsers(rawUsers: RawUser[]): ProcessedUser[] {
    const usedIds = new Set<string>();

    return rawUsers
        .filter((user) => user.age >= 18)
        .map((user) => ({
            id: generateId(usedIds),
            username: user.username,
            address: user.address,
            age: user.age,
            companyName: user.company.name,
        }))
        .sort((a, b) => a.age - b.age || a.companyName.localeCompare(b.companyName));
}
