import styled from "styled-components";

const ProductCardElement = styled.div`
    margin-right: 30px;
    box-shadow: 1px 2px 5px rgba(0,0,0,0.1);
    border: 1px solid #ecf0f1;
    border-radius: 5px;
    .img-container {
        height: 200px;
        width: 200px;
        margin: auto;
        padding: 20px;
        img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .topInfo {
        padding: 0px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h5:last-child {
            background-color: #299e7f;
            padding: 3px 15px;
            border-radius: 25px;
            color: white;
        }
    }

    .productDetails {
        padding: 0px 20px 20px;
        h3:first-child {
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 0;
        }
        h2 {
            margin: 0;
            margin-top: 10px;
            display: flex;
            align-items: center;

            span {
                color: #2bc06d;
            }

            p {
                font-weight: 100;
                color: grey;
                font-size: 1rem;
                margin: 0;
                padding-left: 5px;
            }
        }
    }

    button {
        background: #2bc06d;
        border: none;
        width: 100%;
        padding: 10px 0px;
        color: white;
        font-size: 1.1rem;
        font-weight: 700;
        display: none;
    }
    
    &:hover > button {
        display: block !important;
        animation-name: buttonAnimation;
        animation-duration: 1.5s;
        cursor: pointer;
    }
    
    @keyframes buttonAnimation{
        from {
            display: none;
            opacity: 0;
        }to {
            display: block;
            opacity: 1;
        }
    } 
`



export default  ProductCardElement;