import styled from "styled-components";

export const Header = () => {
    return(
        <Sdiv>
            <Sul>
                <Sli><Sa href="#profile">Profile</Sa></Sli>
                <Sli><Sa href="#skill">Skill</Sa></Sli>
                <Sli><Sa href="#works">Works</Sa></Sli>
                <Sli><Sa href="#contact">Contact</Sa></Sli>
            </Sul>
        </Sdiv>
    )
}

const Sdiv = styled.div`
    background-color: black;
    color: white;
    height: 100px;
    position: fixed;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
`

const Sul = styled.ul`
    display: flex;
    text-align: center;
    width: 100%;
    margin: 0;
    padding: 0;
`

const Sli = styled.li`
    width: 25%;
    margin-top: 40px;
`

const Sa = styled.a`
    color: white;
    text-decoration: none;
`