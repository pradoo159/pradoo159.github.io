import { Typography } from "@mui/material"
import "./TextField.scss"

export default function TextField({text}) {
    return (
        <Typography id="text" variant="h5" component="h2" noWrap={false}>{text}</Typography>
    )
}