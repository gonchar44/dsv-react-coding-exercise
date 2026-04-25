import { Avatar, Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <CakeIcon sx={{ fontSize: 16, color: "text.secondary", flexShrink: 0 }} />
                        <Chip label={`Age ${user.age}`} size="small" />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <BusinessIcon sx={{ fontSize: 16, color: "primary.main", flexShrink: 0 }} />
                        <Chip label={user.companyName} size="small" color="primary" variant="outlined" />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 0.5, color: "text.secondary" }}>
                    <LocationOnIcon sx={{ fontSize: 16, mt: "2px", flexShrink: 0 }} />
                    <Typography variant="body2" color="text.secondary">
                        {user.address.street}, {user.address.suite}
                        <br />
                        {user.address.city} · {user.address.zipcode}
                    </Typography>
                </Box>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
                {isRemoved ? (
                    <Button
                        size="small"
                        variant="outlined"
                        color="success"
                        startIcon={<PersonAddIcon />}
                        onClick={() => onRestore(user.id)}
                    >
                        Restore
                    </Button>
                ) : (
                    <Button
                        size="small"
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteOutlineIcon />}
                        onClick={() => onRemove(user.id)}
                    >
                        Remove
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
