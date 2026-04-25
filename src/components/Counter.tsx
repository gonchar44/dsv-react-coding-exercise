import { useReducer, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

type State = { count: number };
type Action = { type: "increment" | "decrement" };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export default function Counter() {
    const [countState, dispatch] = useReducer(reducer, { count: 0 });
    const [numberInput] = useState(0);

    return (
        <Box sx={{ p: 3, border: "1px solid", borderColor: "divider", borderRadius: 3 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
                Counter: {countState.count}
            </Typography>
            <TextField
                defaultValue={numberInput}
                type="number"
                size="small"
                label="Decrement by"
                sx={{ mb: 2, display: "block", width: 160 }}
            />
            <Box sx={{ display: "flex", gap: 1 }}>
                <Button variant="contained" onClick={() => dispatch({ type: "decrement" })}>
                    −
                </Button>
                <Button variant="contained" onClick={() => dispatch({ type: "increment" })}>
                    +
                </Button>
            </Box>
        </Box>
    );
}
