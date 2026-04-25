import { Avatar, Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import { type ProcessedUser } from "../../types";

type UserCardProps = {
    user: ProcessedUser;
    isRemoved?: boolean;
    onRemove: (id: string) => void;
    onRestore: (id: string) => void;
};

export default function UserCard({ user, isRemoved = false, onRemove, onRestore }: UserCardProps) {
    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                opacity: isRemoved ? 0.75 : 1,
                transition: "box-shadow 0.2s, transform 0.2s",
                "&:hover": {
                    boxShadow: 4,
                    transform: "translateY(-2px)",
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Avatar sx={{ bgcolor: isRemoved ? "text.disabled" : "primary.main", width: 40, height: 40 }}>
                        {user.username[0].toUpperCase()}
                    </Avatar>
                    <Typography variant="h6" fontWeight={600}>
                        {user.username}
                    </Typography>
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    <Chip label={`Age ${user.age}`} size="small" />
                    <Chip label={user.companyName} size="small" color="primary" variant="outlined" />
                </Box>

                <Typography variant="body2" color="text.secondary">
                    {user.address.street}, {user.address.suite}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {user.address.city} · {user.address.zipcode}
                </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
                {isRemoved ? (
                    <Button size="small" variant="outlined" color="success" onClick={() => onRestore(user.id)}>
                        Restore
                    </Button>
                ) : (
                    <Button size="small" variant="outlined" color="error" onClick={() => onRemove(user.id)}>
                        Remove
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
