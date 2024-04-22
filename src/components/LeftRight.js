import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { renderComponent } from "@/render";

const LeftRightImage = styled.img`
max-width: 100%;
`;

export const LeftRight = ({ image, right, left }) => (
    <Box sx={{
        display: { md: "grid", xs: "flex" },
        flexDirection: "column",
        gridTemplateColumns: "1fr 1fr",
        marginTop: 4,
        gap: 2,
        alignItems: "center"
    }}>
        {left && renderComponent(left)}
        <LeftRightImage
            alt={image.fields.description}
            src={image.fields.file.url}
        />
        {right && renderComponent(right)}
    </Box>
);