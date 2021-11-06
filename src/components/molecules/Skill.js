import skillImage from "../../images/skill.png";
import styled from "styled-components";
import mediaQuery from "styled-media-query";

const mediaMobile = mediaQuery.lessThan("medium");

export const Skill = () => {
    return(
        <Sdiv>
            <h1>Skill</h1>
            <Simg src={skillImage} alt="skill" />
        </Sdiv>
    )
}

const Sdiv = styled.div`
    margin: auto;
    text-align: center;
`

const Simg = styled.img`
    margin: auto;
    width:700px;
    height: 400px;
    ${mediaMobile`
        width: 400px;
        height: 300px;
    `}
`