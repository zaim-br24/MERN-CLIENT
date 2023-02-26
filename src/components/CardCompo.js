import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default function CardCompo() {
  return (
    <Link to="/postId">
        <Card>
        <div className="post_img">
            <img src="" alt="" />
        </div>
        <div className="content">
            <div className="post_details">
                <p > Posted by - 
                    <span className="user_name"> jack london34</span> - 
                    <span className="posted_date">7 hours ago</span>
                </p>
            </div>
            <p className="post_content_text">
                Architecture used to be artistic, but nowadays it's just about spending minimal budget to build a box, what do you think?
            </p>
        </div>
        </Card>
    </Link>

  )
}

const Card = styled.div`
    display: flex ;
    border: 1px solid var(--border-color) ;
    margin-bottom: 5px;


    :first-child{
        border-top-left-radius: 10px ;
        border-top-right-radius: 10px ;
    }
    :last-child{
        border-bottom-left-radius: 10px ;
        border-bottom-right-radius: 10px ;
    }
    :first-child .post_img { border-top-left-radius: 10px ;}
    :last-child .post_img{ border-bottom-left-radius: 10px ;} 
    .post_img{
        background-color: gray ;
        width: 40% ;
        min-width: 200px ;
        height: 150px;
    }
    .content{
        margin-left: 10px ;
        padding:10px ;
        .post_details{
            font-size: 18px; 

        }        
        .post_content_text{
        margin-top: 10px;
        color: var(--font-color);
    }
    }
   

`;