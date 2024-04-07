import styled from "styled-components";

export const FrameMainContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    font-size: var(--font-size-base-8);
    color: var(--color-white);
    font-family: var(--font-jetbrains-mono);

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;
    // width: 100%;
    margin: 10px 0;

    div {
        align-self: flex-start;
        position: relative;
    }

    div::before {
        content: '';
        position: absolute;
        top: 50px;
        top: -100px;
        left: 10px;
        width: 2px;
        height: 50px;
        background: #ffffff50;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-self: flex-start;
    position: relative;
`
