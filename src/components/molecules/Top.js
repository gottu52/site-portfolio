import TopImage from "../../images/topImage.png";
import styled from "styled-components";

export const Top = () => {
    return(
        <Sdiv>
            <Stitle>Ryohei's Portfolio</Stitle>
            <Simage src={TopImage} alt="top"/>
        </Sdiv>
        
    )
}

const Sdiv = styled.div`
    background: #A8C5E1;
`

const Stitle = styled.h1`
    text-align: center;
    padding: 50px 0;
    margin: 0;
    margin-top: 100px;
    font-size: 60px;
    background: white;
`

const Simage = styled.img`
    width: 100%;
    height: 100%;
`