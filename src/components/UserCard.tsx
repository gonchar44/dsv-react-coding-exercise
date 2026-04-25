import { type ProcessedUser } from "../types";

type UserCardProps = {
    user: ProcessedUser;
    onRemove: (id: string) => void;
};

export default function UserCard({ user, onRemove }: UserCardProps) {
    return (
        <div>
            <p>{user.username}</p>
            <button onClick={() => onRemove(user.id)}>Remove</button>
        </div>
    );
}
