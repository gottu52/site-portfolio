import styled from "styled-components";

export const Header = () => {
    return(
        <Sdiv>
            <Sul>
                <Sli>Profile</Sli>
                <Sli>Skill</Sli>
                <Sli>Works</Sli>
                <Sli>Contact</Sli>
            </Sul>
        </Sdiv>
    )
}

const Sdiv = styled.div`
    background-color: black;
    color: white;
    height: 100px;
    margin: 0;
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