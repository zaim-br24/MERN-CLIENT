import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';



export default function ClipShotsCard({id}) {
  return (
    <Wrapper className='ClipShot-card'>
      <Link to={`/clipshot/${id}`}>
            <div class="card-image"></div>
            {/* <div class="category"> Illustration </div> */}
            <div class="heading"> A heading that must span over two lines
                <div class="author"> By <span class="name">Abi</span> 4 days ago   - <span>3.2K views</span></div>
            </div>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-width: 200px;
  height: 300px;

  border-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  
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



`;