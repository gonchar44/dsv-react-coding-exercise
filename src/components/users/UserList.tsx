import { Box } from "@mui/material";
import { type ProcessedUser } from "../../types";
import UserCard from "./UserCard";

type UserListProps = {
    users: ProcessedUser[];
    isRemoved?: boolean;
    onRemove: (id: string) => void;
    onRestore: (id: string) => void;
};

export default function UserList({ users, isRemoved = false, onRemove, onRestore }: UserListProps) {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                },
                gap: 2,
            }}
        >
            {users.map((user) => (
                <UserCard key={user.id} user={user} isRemoved={isRemoved} onRemove={onRemove} onRestore={onRestore} />
            ))}
        </Box>
    );
}
