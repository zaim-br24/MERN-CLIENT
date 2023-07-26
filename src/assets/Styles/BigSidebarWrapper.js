import styled from 'styled-components'

const Wrapper = styled.aside`
    max-height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9999;
    background-color:  rgba(0, 0, 0, 0.5);
    padding: 10px;

    .sidebar-container {
      padding: 10px;
      border-radius: 10px;
      background: white;
      height: 100%;
      width: 100%;
      box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
      transition: all .3s ease-in ;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content{
      display: flex;
      flex-direction: column;
    }
    .close-btn{
      font-size: 1.5rem;
      color: orange;
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: black;
      padding: 1rem 0;
      /* padding-left: 2.5rem; */
      text-transform: capitalize;
      transition: all .3s ease-in;
    }
    .nav-link:hover {
      color: lightgray;
    }
    .nav-link:hover .icon {
      color: black;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: all .3s ease-in;
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: black;
    }

  /* @media (max-width: 992px) {

    .sidebar-container {
      background: var(--white);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    
  } */
`
export default Wrapper
