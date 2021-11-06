import styled from "styled-components"

export const Footer = () => {
    return(
        <Sdiv>
            <p style={{margin: 0}}>© ryohei's Portfolio</p>
        </Sdiv>
    )
}

const Sdiv = styled.div`
    width: 100%;
    height: 60px;
    background: gray;
    color: white;
    text-align: center;
    padding-top: 40px
    bottom: 0;
`