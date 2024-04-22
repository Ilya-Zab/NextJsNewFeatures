import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import MuiMarkdown from "mui-markdown";

const MarkdownImage = styled.img`
    max-width: 100%;
`;

const makeHeader = (variant, textAlign = "center") => (props) => (
    <Typography component={`h${variant}`} variant={variant} {...props} textAlign={textAlign} marginBottom={'0.5em'} />
);

const overrides = {
    img: ({ alt, src }) => (
        <Box sx={{ display: "flex", justifyContent: "center", margin: "2em 0" }}>
            <MarkdownImage alt={alt} src={`${src}?q=80&h=1000`} />
        </Box>
    ),
    p: (props) => <Typography component={"div"} variant="body1" {...props} />,
    h1: makeHeader(1),
    h2: makeHeader(2),
    h3: makeHeader(3),
};

export const Paragraph = ({ text }) => {
    return (
        <MuiMarkdown overrides={overrides} >{text}</MuiMarkdown>
    )
}