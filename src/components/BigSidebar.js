import {GrClose} from 'react-icons/gr'
import { useAppContext } from '../context/appContext'
import Wrapper from '../assets/Styles/BigSidebarWrapper'
import {
  homeLight,
  bookmarkLight,
  addSquareLight, 
  clipshotLight,
  watchLight,
  redoosLight,
} from "../assets/icons/index"
import NavLinks from './NavLinks';


const BigSidebar = () => {
  const {toggleSidebar, toggleOverly } = useAppContext()
  return (
    <Wrapper>
      <div className='sidebar-container' >
         <div className='close-btn'> <GrClose/> </div>
        <div className='content'>
          <NavLinks insertText={true}/>
        </div>
      </div>
      
    </Wrapper>
  )
}

export default BigSidebar