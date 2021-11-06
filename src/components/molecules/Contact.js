import styled from "styled-components";
import mediaQuery from "styled-media-query";

const mediaMobile = mediaQuery.lessThan("medium");

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
    width: 500px;
    margin: auto;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    background: white;
    ${mediaMobile`
        width: 300px;
    `}
`

const Sli = styled.li`
    font-size: 30px;
    ${mediaMobile`
        font-size: 18px;
    `}
`