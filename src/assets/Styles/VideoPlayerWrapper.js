import styled from 'styled-components'


const Wrapper = styled.div`
  text-align: center;
  width:90%;
  max-height:550px;
  margin: 0 auto;
  background-color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;


video {
  width: 100%;
  height: 100%;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background-color: #ddd;
  cursor: pointer;
}

.progress {
  height: 100%;
  width: 0;
  background-color: #007bff;
}
`

export default Wrapper