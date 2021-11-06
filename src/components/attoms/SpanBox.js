import styled from "styled-components"
import mediaQuery from "styled-media-query";

const mediaMobile = mediaQuery.lessThan("medium");

export const SpanBox = (props) => {
    const { id } = props;
    return  <Sdiv id={id}></Sdiv>
    }

const Sdiv = styled.div`
    width: 100%;
    height: 200px;
    ${mediaMobile`
        height: 100px;
    `}
`