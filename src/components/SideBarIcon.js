import React ,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function SideBarIcon({path, src, id, handleClick}) {
  
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    const buttons = document.querySelectorAll(`.active`);
        buttons.forEach((button) => {
          button.classList.remove('active'); // Replace 'your-css-class' with the class you want to remove
        });
        
    setActiveButton(buttonId)

  };
  // useEffect(() => {

  //   const removeCssClass = () => {
  //     const buttons = document.querySelectorAll('.sidebar-btn');
  //     buttons.forEach((button) => {
  //       button.classList.remove('active'); // Replace 'your-css-class' with the class you want to remove
  //     });
  //   };

  //   const buttons = document.querySelectorAll('.sidebar-btn');
  //   buttons.forEach((button) => {
  //     button.addEventListener('click', removeCssClass);
  //   });

  //   return () => {
  //     buttons.forEach((button) => {
  //       button.removeEventListener('click', removeCssClass);
  //     });
  //   };
  // }, []);

  return (
    <Wrapper 
      className={`sidebar-btn ${id === activeButton ? 'active' : ''}` }
      onClick={handleClick}
    >
         <Link to={path}><img className="icon" src={src}></img></Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`

      /* :first-child{
      background-color: whitesmoke;
      } */
      width: 60px;
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
        width: 70%;

        .icon{
        width: 35px;
        color: black;
      }
      }
      

`