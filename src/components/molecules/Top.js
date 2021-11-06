import TopImage from "../../images/topImage.png";
import styled from "styled-components";
import mediaQuery from "styled-media-query";

const mediaMobile = mediaQuery.lessThan("medium");

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
    margin: 100px 0 0 0;
    font-size: 60px;
    background: white;
    ${mediaMobile`
        text-align: left;
        padding-left: 10px;
    `}
`

const Simage = styled.img`
    width: 100%;
    height: 100%;
    ${mediaMobile`
        
    `}
`