import { useState } from "react";
import { Box, Divider, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import users from "../../data";
import { processUsers } from "../../utils/processUsers";
import { type ProcessedUser } from "../../types";
import UserList from "./UserList";

export default function UsersSection() {
    const [activeUsers, setActiveUsers] = useState<ProcessedUser[]>(() => processUsers(users));
    const [removedUsers, setRemovedUsers] = useState<ProcessedUser[]>([]);
    const [searchText, setSearchText] = useState("");

    const handleRemove = (id: string) => {
        const user = activeUsers.find((u) => u.id === id)!;
        setActiveUsers((prev) => prev.filter((u) => u.id !== id));
        setRemovedUsers((prev) => [...prev, user]);
    };

    const handleRestore = (id: string) => {
        const user = removedUsers.find((u) => u.id === id)!;
        setRemovedUsers((prev) => prev.filter((u) => u.id !== id));
        setActiveUsers((prev) =>
            [...prev, user].sort((a, b) => a.age - b.age || a.companyName.localeCompare(b.companyName)),
        );
    };

    const query = searchText.trim().toLowerCase();
    const filteredActiveUsers = query ? activeUsers.filter((u) => u.username.toLowerCase().includes(query)) : activeUsers;
    const filteredRemovedUsers = query ? removedUsers.filter((u) => u.username.toLowerCase().includes(query)) : [];

    return (
        <Box>
            <Typography variant="h5" fontWeight={700} gutterBottom>
                Users
            </Typography>

            <TextField
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search by username…"
                size="small"
                fullWidth
                sx={{ mb: 3, "& .MuiOutlinedInput-root": { borderRadius: 3 } }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    },
                }}
            />

            <UserList users={filteredActiveUsers} onRemove={handleRemove} onRestore={handleRestore} />

            {filteredRemovedUsers.length > 0 && (
                <Box sx={{ mt: 4 }}>
                    <Divider sx={{ mb: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            Removed users matching "{searchText}"
                        </Typography>
                    </Divider>
                    <UserList
                        users={filteredRemovedUsers}
                        isRemoved
                        onRemove={handleRemove}
                        onRestore={handleRestore}
                    />
                </Box>
            )}
        </Box>
    );
}
