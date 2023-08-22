import styled from 'styled-components'



const wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  padding: 10% 25%;
  margin-top: 20px;
  gap: 30px; */

.editor-wrapper {
  /* border: 1px solid #c4cdd5; */
  border-radius: 10px;
}
.message-toolbar {
  border-bottom: 1px solid #c4cdd5;
  margin-bottom: 0px;
  padding: 6px 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;


}
.message-editor {
  height: 150px;
  font-size: 16px;
  padding: 0px 10px;
  border: 1px solid #c4cdd5;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

}
.rdw-option-wrapper {
  min-width: 35px;
  height: 30px;
}
.html-output {
  border: 1px solid silver;
  padding: 20px;
  background-color: #fafafa;
}
`

export default wrapper