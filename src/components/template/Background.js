import styled from "styled-components"

export const Background = (props) => {
    const { children } = props;
    return <Sdiv>{children}</Sdiv>
}

const Sdiv = styled.div`
    width: 100%;
    height:100%;
    background: linear-gradient(blue, pink);
`