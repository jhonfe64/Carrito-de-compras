import styled from "styled-components";

const ShoppingCartElement = styled.div`
width: 100%;
position: absolute;
background-color: white;
z-index: 10000;
margin-left: -500%;
top: 0;
bottom: 0;
left: 0;
right: 0;
height: 100%;
    h4 {
        display: flex;
        align-items: center;
        font-weight: 500;
        cursor: pointer;
        span {
            color: #2bc06d;
            padding-right: 20px ;
        }
    }
    .chartHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
            color: #2bc06d;
        }
    }

    table {
        table-layout: fixed;
        border-spacing: 0px 50px;
        width: 100%;
        tr:first-child{
            margin-bottom: 50px;
        }
        tr{
            td {
                text-align: center;
            }

            td:first-child{
                display: flex;
                align-items: center;
                .img-container{
                    img{
                        width: 200px;
                        height: 200px;
                        object-fit: cover;
                    }
                }

                .productInfo{
                    h4,p,h5 {
                        overflow: hidden;
                        text-align: left;
                        padding-left: 20px;
                        margin: 0;
                        margin-bottom: 5px;
                    }
                    h5 {
                        color: #2bc06d;
                    }
                }
            }

            td:nth-child(2){
                span:first-child, span:last-child{
                    color: #2bc06d;
                    font-size: 1.3rem;
                    padding: 10px;
                }

                span:nth-child(2){
                    font-size: 1.3rem;
                }
            }

            td:last-child span{
                color: #2bc06d;
            }
        }
    }

    @media screen and (max-width: 1100px){
        width: 1200px;
    }
`

export default ShoppingCartElement;