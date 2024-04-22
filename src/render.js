import { LeftRight } from "./components/LeftRight";
import { Paragraph } from "./components/Paragraph";
import { Quote } from "./components/Quote";

export const renderComponent = (data, key) => {
    const contentType = data.sys.contentType.sys.id;
    console.log(data);
    switch (contentType) {
        case "paragraph":
            return <Paragraph key={key}{...data.fields} />

        case 'quote':
            return <Quote key={key} {...data.fields}></Quote>

        case 'leftRight':
            return <LeftRight key={key} {...data.fields} />

        default:
            return <span>{`Unknown type ${contentType}`}</span>
    }
}