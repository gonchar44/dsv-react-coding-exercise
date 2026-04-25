import { useReducer, useState } from "react";
import { Alert, Box, Button, Collapse, Divider, TextField, Tooltip, Typography } from "@mui/material";
import CasinoIcon from "@mui/icons-material/Casino";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

type State = { count: number };
type Action =
    | { type: "increment" | "increment-random" | "increment-odd" | "decrement" | "reset" }
    | { type: "decrement-by"; payload: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "increment-random":
            return { count: state.count + Math.floor(Math.random() * 10) + 1 };
        case "increment-odd":
            return { count: state.count % 2 === 0 ? state.count + 1 : state.count + 2 };
        case "decrement":
            return { count: Math.max(0, state.count - 1) };
        case "decrement-by":
            return { count: Math.max(0, state.count - action.payload) };
        case "reset":
            return { count: 0 };
        default:
            throw new Error();
    }
}

export default function Counter() {
    const [countState, dispatch] = useReducer(reducer, { count: 0 });
    const [numberInput, setNumberInput] = useState(0);
    const [showMinError, setShowMinError] = useState(false);

    const handleDecrement = (action: Action) => {
        if (countState.count === 0) {
            setShowMinError(true);
            setTimeout(() => setShowMinError(false), 2500);
            return;
        }
        dispatch(action);
    };

    return (
        <Box sx={{ p: 3, border: "1px solid", borderColor: "divider", borderRadius: 3 }}>
            <Typography variant="h4" fontWeight={700} gutterBottom>
                {countState.count}
            </Typography>
            <Typography variant="overline" color="text.secondary" display="block" sx={{ mb: 2, lineHeight: 1 }}>
                Counter
            </Typography>

            <Divider sx={{ mb: 2 }} />

            {/* Increment group */}
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                Increment
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <Button variant="contained" size="small" onClick={() => dispatch({ type: "increment" })}>
                    +1
                </Button>
                <Tooltip title="Adds a random number between 1 and 10">
                    <Button variant="outlined" size="small" startIcon={<CasinoIcon />} onClick={() => dispatch({ type: "increment-random" })}>
                        Random
                    </Button>
                </Tooltip>
                <Tooltip title="Jumps to the next odd number (e.g. 4 → 5, 5 → 7)">
                    <Button variant="outlined" size="small" startIcon={<AutoFixHighIcon />} onClick={() => dispatch({ type: "increment-odd" })}>
                        Next Odd
                    </Button>
                </Tooltip>
            </Box>

            {/* Decrement group */}
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                Decrement
            </Typography>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", mb: 2 }}>
                <Button variant="contained" size="small" onClick={() => handleDecrement({ type: "decrement" })}>
                    −1
                </Button>
                <TextField
                    value={numberInput}
                    onChange={(e) => setNumberInput(Number(e.target.value))}
                    type="number"
                    size="small"
                    label="by"
                    sx={{ width: 80 }}
                    slotProps={{ htmlInput: { min: 0 } }}
                />
                <Tooltip title={numberInput <= 0 ? "Enter a value above to decrement by that amount" : ""}>
                    <span>
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<RemoveCircleOutlineIcon />}
                            disabled={numberInput <= 0}
                            onClick={() => handleDecrement({ type: "decrement-by", payload: numberInput })}
                        >
                            −{numberInput > 0 ? numberInput : "?"}
                        </Button>
                    </span>
                </Tooltip>
            </Box>

            <Collapse in={showMinError}>
                <Alert severity="warning" sx={{ mb: 2 }}>
                    Count is already at 0 — can't go lower.
                </Alert>
            </Collapse>

            <Divider sx={{ mb: 2 }} />

            <Button variant="outlined" color="error" size="small" startIcon={<RestartAltIcon />} onClick={() => dispatch({ type: "reset" })}>
                Reset
            </Button>
        </Box>
    );
}
