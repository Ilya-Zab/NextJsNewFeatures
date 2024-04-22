import styled from "@emotion/styled";

export const BlogGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    row-gap: 2em; 
    margin: 1em auto;
    width: 100%;
    max-width: 1440px;
    padding: 0 1em;

    @media(min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
    }

    @media(min-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 1em;
        }
`;