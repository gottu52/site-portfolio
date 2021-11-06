import TopImage from "../../images/topImage.png";
import styled from "styled-components";

export const Top = () => {
    return(
        <div>
            <Stitle>Ryohei's Portfolio</Stitle>
            <Simage src={TopImage} alt="top"/>
        </div>
        
    )
}

const Stitle = styled.h1`
    text-align: center;
    padding-top: 30px;
    font-size: 60px;
`

const Simage = styled.img`
    width: 100%;
    height: 100%;
`