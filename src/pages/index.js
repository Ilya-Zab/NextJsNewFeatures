import { Box, Button, Typography } from "@mui/material";
import { BreadcrumbsNav } from "@/components/BreadcrumbsNav";
import Link from "next/link";


export default function Home() {
  return (
    <Box sx={{ maxWidth: "1440px", margin: "2em auto", padding: "0 1em", textAlign: "center" }}>
      <Typography component={'h1'} variant={'h1'}>
        Main title
      </Typography>
      <Typography component={'h2'} variant={'h2'}>
        Second Title
      </Typography>
      <Link href='/blog' passHref>
        <Button variant="contained">
          Enter Blog
        </Button>
      </Link>
    </Box>
  );
}

