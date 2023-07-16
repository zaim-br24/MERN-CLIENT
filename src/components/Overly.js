import React from 'react'
import styled from 'styled-components';
export default function Overly({children, handelClose}) {
 
    return (
        <Wrapper className="overlay">
          <div className="overlay-content">
            {children}
            <button className="close-button" onClick={handelClose}>
              Close
            </button>
          </div>
        </Wrapper>
      );
  
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity value (0.5) as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .overlay-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;

  .close-button {
  margin-top: 10px;
    } 
 }

`