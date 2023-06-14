import styled from "styled-components";

const Wrapper = styled.div`
    display: flex ;
    border: 1px solid var(--border-color) ;
    margin-bottom: 5px;
    background-color: white;
    transition: all .3s ease-out;
    height: 150PX;
    :hover{
        /* border: 1px solid black; */
        box-shadow: 0px 4px 13px -5px rgba(0,0,0,0.62);
    }
    
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
        height: 100%;
    }
    .content{
        margin-left: 10px ;
        padding:10px ;
        .post_details{
            font-size: 18px; 
            @media screen and (max-width: 1200px){
                font-size: 12px;
            }
        }        
        .post_content_text{
        margin-top: 10px;
        color: var(--font-color);
        @media screen and (max-width: 1200px){
                font-size: 14px; 
         }
    }
        
    }
   

`;


export default Wrapper