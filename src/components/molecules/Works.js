import styled from "styled-components";
import runningMethod from "../../images/RunningMethodImage.png";
import hairSalon from "../../images/HairSalonImage.png";
import gym from "../../images/GymImage.png";
import thisSite from "../../images/portfolioImage.png"

export const Works = () => {
    return(
        <Sdiv>
            <h1>Works</h1>
            <Sflex>
               <Sul>
                    <li>
                        <Simg src={runningMethod} alt="runningMethod" />
                    </li>
                    <Sli>Running Method</Sli>
                    <Sli>製作日数：4日</Sli>
                    <Sli>使用言語：HTML,CSS,JavaScript</Sli>
                </Sul>
                <Sul>
                    <li>
                        <Simg src={hairSalon} alt="hairSalon" />
                    </li>
                    <Sli>Hair Salon</Sli>
                    <Sli>製作日数：2日</Sli>
                    <Sli>使用言語：HTML,CSS,JavaScript</Sli>
                </Sul> 
                <Sul>
                    <li>
                        <Simg src={gym} alt="gym" />
                    </li>
                    <Sli>Gold Gym</Sli>
                    <Sli>製作日数：3日</Sli>
                    <Sli>使用言語：HTML,CSS,JavaScript</Sli>
                </Sul> 
                <Sul>
                    <li>
                        <Simg src={thisSite} alt="thisSite" />
                    </li>
                    <Sli>This Site</Sli>
                    <Sli>製作日数：2日</Sli>
                    <Sli>使用言語：HTML,CSS,JavaScript,React</Sli>
                </Sul> 
            </Sflex>
            
        </Sdiv>
    )
}

const Sdiv = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px 0;
    text-align: center;
    background: white;
    border-radius: 8px;
`

const Sflex = styled.div`
    display:flex;
    flex-wrap: wrap;
`

const Sul = styled.ul`
    margin: 40px 0;
`

const Simg = styled.img`
    width: 80%;
    max-width: 540px;
    border: 1px solid black;
`

const Sli = styled.li`
    font-size: 20px;
    line-height: 35px;
`