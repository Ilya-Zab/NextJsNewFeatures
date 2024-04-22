import Link from "next/link";
import { Typography, Button } from "@mui/material";

export default function about() {
    return (
        <>
            <Typography variant="h1" component={"h1"}>About</Typography>
            <Link href={'/'} passHref>
            <Button variant="outlined">Go to home</Button>
            </Link>  
        </>
    )
}