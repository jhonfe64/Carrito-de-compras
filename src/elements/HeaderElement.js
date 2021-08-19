import styled from 'styled-components';

const HeaderElement = styled.div`
background-color: #25c16a;
    .container {
        display: flex;
        color: #ffffff;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0px;

        .img-container{
            width: 150px;
            img {
                width: 100%;
            }
        }

        .searchingBar{
            width: 30%;
            display: flex;
            align-items: center;
            form {
                width: 100%;
                display: flex;
                margin-right: 55px;
                input {
                    border: none;
                    width: 90%;
                    border-radius: 50px 0px 0px 50px;
                    padding: 7px;
                    &:focus {
                        outline: 0;
                    }
                }
                button {
                    padding-right: 15px;
                    background: none;
                    border: none;
                    background-color: #ffffff;
                    border-radius: 0px 50px 50px 0px;
                }
            }
        }

        .productQuantity {
            position: relative;
            div {
                position: absolute;
                display: flex;
                top: -10px;
                right: -15px;
                background-color: #789dca;
                width: 20px;
                height: 20px;
                justify-content: center;
                align-items: flex-end;
                border-radius: 100%
            }
        }
           
        
        .userInfo div {
            display: flex;
            align-items: center;

            .img-container {
                width: 55px;
                margin-left: 15px;
                img {
                    width: 100%;
                    border-radius: 100%;
                }
            }
        }

        .userInfo div div {
            display: flex;
            flex-wrap: wrap;
            h6 {
                color: #000000;
            }
            h5, h6 {
                width: 100%;
                margin-top: 0;
                margin-bottom: 0;
                text-align: right;
            }
        }
    }
    
    @media screen and (max-width: 992px) {
    .container {
        flex-wrap: wrap;
        .searchingBar {
            justify-content: space-between;
            order: 1;
            width: 100%;
            margin-top: 20px;
            form {
                width: 85%;
                margin-right: 0;
                input {

                }
            }
        }
        .productQuantity {
            div {
                right: 12px;
            }
        }
    }
}

@media screen and (max-width: 500px){
    .container {
        .userInfo {
            display: none;
        }
        .img-container{
            width: 160px;
            margin: auto;
            padding-top: 10px;
        }
        .searchingBar {
            margin-top: 5px;
            margin-bottom: 7px;
            
        }
    }
} 
`

export default HeaderElement;