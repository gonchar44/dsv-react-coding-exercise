import "./styles.css";
import { Box } from "@mui/material";
import Counter from "./components/Counter";
import UsersSection from "./components/users/UsersSection";

export default function App() {
    return (
        <Box sx={{ maxWidth: 1100, mx: "auto", px: 3, py: 4, display: "flex", flexDirection: "column", gap: 5 }}>
            <Counter />
            <UsersSection />
        </Box>
    );
}
