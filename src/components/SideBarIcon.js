import React ,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function SideBarIcon({path, src, id,text, handleClick}) {
  
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    const buttons = document.querySelectorAll(`.active`);
        buttons.forEach((button) => {
          button.classList.remove('active'); // Replace 'your-css-class' with the class you want to remove
        });
        
    setActiveButton(buttonId)

  };


  return (
    <Wrapper 
      className={`sidebar-btn ${id === activeButton ? 'active' : ''}` }
      onClick={handleClick}
    >
         <Link to={path}>
            <img className="icon" src={src}></img>{text}
            {/* <p>{text}</p> */}
         </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
      width: 45px;
      padding: 10px;
      margin: 5px 0 ;
      border-radius: 10px;
      transition: all .2s ease-in;
      display: flex;
      align-items: center;
      cursor: pointer;
      :hover{
        background-color:  rgba(35, 165, 213, 0.5);

      }
      a{
        font-weight: 600;
        width: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        .icon{
        width: 35px;
        color: black;
        /* margin: 0 auto; */
      }
    }
      

`