import styled from "styled-components";

export const FrameMainContainer = styled.div`
    width: 100%;
    // height: 100vh;
    box-sizing: border-box;
    font-size: var(--font-size-base-8);
    color: var(--color-white);
    font-family: var(--font-jetbrains-mono);

    display: flex;
    flex-direction: row;
    // align-items: center;
    gap: var(--gap-mini-4);
    justify-content: space-around;
    position: relative;
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--gap-mini-4);
    gap: 100px;
    justify-content: space-around;
    width: 100%;

    div {
        align-self: flex-start;
        position: relative;
    }

    div::before {
        content: '';
        position: absolute;
        top: 50px;
        left: -100px;
        width: 50px;
        height: 2px;
        background: #ffffff50;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start;
    position: relative;
    // opacity: 0.4;
`

export const HeadText = styled.span`
    font-size: var(--font-size-9xl-8);
    font-family: var(--font-krungthep);
    display: flex;
    flex-direction: column;
`

export const OffWhiteText = styled.span`
    color: #ffffff40;
`

export const ImgWrapper = styled.section`
    display: flex;
    gap: 10px;
`