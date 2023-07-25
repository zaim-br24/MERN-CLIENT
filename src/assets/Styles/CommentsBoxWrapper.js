import styled from "styled-components"

const Wrapper = styled.div`
  width: 400px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid black;
  
.comments-container{
  width: 100%;
  max-width: 400px;
  /* overflow-y: scroll; */
}
.comments-container::-webkit-scrollbar {
  width: 0.5em; /* Adjust the width as needed */
}

.comments-container::-webkit-scrollbar-track {
  background-color: rgba(225, 225, 225, .5); /* Customize the track color */
}

.comments-container::-webkit-scrollbar-thumb {
  background-color: rgba(225, 225, 225, 1); /* Customize the thumb color */
}

.comments-container::-webkit-scrollbar-thumb:hover {
  background-color: rgba(225, 225, 225, 0); /* Customize the thumb color on hover */
}

`


export default Wrapper