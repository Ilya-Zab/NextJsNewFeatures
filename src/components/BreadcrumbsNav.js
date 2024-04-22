import { Box, Typography, Breadcrumbs, Link as MUILink, Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { Button } from "@mui/material";
import { useState } from "react";

export const BreadcrumbsNav = ({ breadcrumbs, current }) => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState('');

    const onChange = (_, value) => {
        setValue(value);
        if (value.trim().length < 3) return;
        axios(`/api/search?query=${value}`)
            .then((resp) => setData(resp.data))
            .catch((error) => console.error(error));
    }

    return (
        <Box sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignContent: "center",
            justifyContent: "space-between"
        }}>
            <Breadcrumbs aria-label="breadcrumb" separator="›"
                sx={{
                    marginBottom: "20px",
                }}>
                {
                    breadcrumbs.map(({ href, title }) => (
                        <Link key={href} href={href} legacyBehavior>
                            <MUILink underline="hover" color="inherit" style={{ cursor: 'pointer' }}>
                                {title}
                            </MUILink>
                        </Link>

                    ))
                }
                < Typography color="text.primary" > {current}</Typography >
            </Breadcrumbs >
            <Autocomplete
                value={value}
                onInputChange={onChange}
                id="free-solo-demo"
                freeSolo
                options={data.map((option) => option.title)}
                sx={{ minWidth: "300px", maxWidth: "100%" }}
                renderOption={option => {
                    const post = data.filter(el => el.title === option.key)[0];
                    return (
                        <Link href={post.href} passHref key={post.title}
                            style={{
                                color: "inherit",
                                textDecoration: 'none',
                            }}
                        >
                            <Button
                                variant='text'
                                sx={{
                                    display: "block",
                                    width: '100%',
                                    textAlign: "start"
                                }}
                                onClick={() => {
                                    setValue("");
                                    setData([]);
                                }}
                            >
                                {post.title}
                            </Button>
                        </Link>
                    )

                }}
                renderInput={(params) => <TextField {...params} label="Search Article..." />}
            />
        </Box>

    )
}