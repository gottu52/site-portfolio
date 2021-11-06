import styled from "styled-components";
import mediaQuery from "styled-media-query";
import { useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link as Scroll } from "react-scroll"
import { NavRouter } from "../routers/NavRouter";

const mediaMobile = mediaQuery.lessThan("medium");

export const Header = () => {

    useEffect(() => {
        if(process.browser) {
            gsap.registerPlugin(ScrollTrigger)
            setAnimation()
        }
    }, [])
    
    const setAnimation = () => {
        gsap.fromTo(
            '#animation',
            {opacity: 0, y: 10},
            {opacity: 1, y: 0, duration: 1, 
            scrollTrigger: {
                trigger: '#animation',
                start: 'top center',
                end: 'bottom: center',
            }}
        )
    }

    return(
        <Sdiv id='animation'>
            {NavRouter.map((router) => {
                        return(
                            <Snav>
                                <Scroll 
                                to={router.Id} 
                                smooth={true}
                                duration={600}
                                >
                                    {router.navName}
                                </Scroll>
                            </Snav>
                        )
                    })}
        </Sdiv>
    )
}

const Sdiv = styled.div`
    background-color: black;
    color: white;
    height: 100px;
    position: fixed;
    display: flex;
    margin: 0;
    top: 0;
    left: 0;
    right: 0;
    ${mediaMobile`
        height: 70px;
    `}
`

const Snav = styled.nav`
    width: 25%;
    text-align: center;
    padding-top: 40px;
    cursor: pointer;
    ${mediaMobile`
        padding-top: 25px;
    `}
`