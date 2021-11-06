import styled from "styled-components";

export const Contact = () => {
    return(
        <Sdiv>
            <h1>Contact</h1>
           <ul>
                <Sli>Tell：080-9386-2635</Sli>
                <Sli>Email：ryohei846@ezweb.ne.jp</Sli>
            </ul> 
        </Sdiv>
        
    )
}

const Sdiv = styled.div`
    width: 60%;
    max-width: 500px;
    margin: auto;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    background: white;
`

const Sli = styled.li`
    font-size: 30px;
`