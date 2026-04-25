import { type ProcessedUser } from "../types";
import UserCard from "./UserCard";

type UserListProps = {
    users: ProcessedUser[];
    onRemove: (id: string) => void;
};

export default function UserList({ users, onRemove }: UserListProps) {
    return (
        <div>
            {users.map((user) => (
                <UserCard key={user.id} user={user} onRemove={onRemove} />
            ))}
        </div>
    );
}
