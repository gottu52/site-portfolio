import skillImage from "../../images/skill.png";
import styled from "styled-components"

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
`