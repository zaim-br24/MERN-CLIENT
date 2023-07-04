import React from 'react'
import styled from 'styled-components'



export default function ClipShotsCard() {
  return (
    <Wrapper>
        <div class="card">
            <div class="card-image"></div>
            {/* <div class="category"> Illustration </div> */}
            <div class="heading"> A heading that must span over two lines
                <div class="author"> By <span class="name">Abi</span> 4 days ago</div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.card {
  min-width: 200px;
  height: 300px;
  /* background: white; */
  /* padding: .4em; */
  border-radius: 6px;
  /* margin: 5px; */
  
.card-image {
  background-color: rgb(236, 236, 236);
  width: 100%;
  height: 90%;
  border-radius: 6px 6px 0 0;

}

/* .category {
  text-transform: uppercase;
  font-size: 0.5em;
  font-weight: 600;
  color: rgb(63, 121, 230);
  padding: 10px 7px 0;

  :hover {
  cursor: pointer;
}
} */



.heading {
  font-weight: 600;
  color: rgb(88, 87, 87);
  font-size: .8rem;
  padding: 5px;

  :hover {
  cursor: pointer;
}
  .author {
  color: gray;
  font-weight: 400;
  font-size: 11px;
  padding-top: 10px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}
}


}

`;