import styled from 'styled-components'
import { useEffect } from "react"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const Wrapper = (props) => {
    const { children } = props;

    useEffect(() => {
        if(process.browser) {
            gsap.registerPlugin(ScrollTrigger)
            setAnimation()
        }
    }, [])
    
    const setAnimation = () => {
        gsap.fromTo(
            '#animation',
            {opacity: 0, y: 5},
            {opacity: 1, y: 0, duration: 1, 
            scrollTrigger: {
                trigger: '#animation',
                start: 'top center',
                end: 'bottom: center',
            }}
        )
    }

    return <Sdiv id='animation'>{children}</Sdiv>
}

const Sdiv = styled.div`
    z-index: 1;
`