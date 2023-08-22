import styled from "styled-components";

const Wrapper = styled.label`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    .custum-file-upload{
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 20px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: 2px dashed #cacaca;
    background-color: rgba(255, 255, 255, 1);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 48px 35px -48px rgba(0,0,0,0.1);

    }
    .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    }



    .text {
    display: flex;
    align-items: center;
    justify-content: center;
    }

    span {
    font-weight: 400;
    color: rgba(75, 85, 99, 1);
    }

    input {
    display: none;
    }

    .video-description{
        height: 300px;
        position: relative;
    }
    textarea{
        height: 100%;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        outline: none;
        resize: none;
        font-size: 1rem;
        font-weight: 500;
        border: 2px solid #cacaca;
    }
    .words-counter{
        font-size: .8rem;
        font-weight: 700;
        color: rgba(0,0,0,0.5);
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

export default Wrapper