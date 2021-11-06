import TopImage from "../../images/topImage.png";
import AnotherTopImage from "../../images/topImage2.png";
import styled from "styled-components";
import mediaQuery from "styled-media-query";

const mediaMobile = mediaQuery.lessThan("medium");

export const Top = () => {
    return(
        <Sdiv>
            <Stitle>Ryohei's Portfolio</Stitle>
            <Simage src={TopImage} alt="top"/>
            <SanotherImage src={AnotherTopImage} alt="top"/>
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
        display: none;
    `}
`

const SanotherImage = styled.img`
    width: 100%;
    height: 100%;
    display: none;
    ${mediaMobile`
        display: block;
    `}
`