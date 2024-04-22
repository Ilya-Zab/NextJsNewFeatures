const { AlertTitle, Alert } = require("@mui/material");
import styled from '@emotion/styled';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const QuoteComponent = styled(Alert)`
MuiAlert-message {
    width: 100%;
    text-align: center;
}
`;
export const Quote = ({ quote, author }) => {
    return (
        <QuoteComponent severity="info" icon={<AutoStoriesIcon fontSize="inherit" />}>
            <AlertTitle>{quote}</AlertTitle>
            author - <strong>{author}</strong>
        </QuoteComponent >
    )
}