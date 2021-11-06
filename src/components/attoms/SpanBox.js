import styled from "styled-components"

export const SpanBox = (props) => {
    const { id } = props;
    return  <Sdiv id={id}></Sdiv>
    }

const Sdiv = styled.div`
    width: 100%;
    height: 200px;
`