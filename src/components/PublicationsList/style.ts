import styled from "styled-components";

export const ContainerPublicationList = styled.div`

    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    justify-content: center;

    header{
        width: 100%;
        margin-top:3.5rem;

        div{
            display: flex;
            justify-content: space-between;
            
            h3{
                color: white;
            }

            p{
                font-size: 0.9rem;
                color:#41556a;
            }
        }

        input{
            margin-top: 1rem;
            width: 100%;
            padding: 0.8rem 0.8rem;
            background-color: #040f1a;
            border: 1px solid #192a3c;
            border-radius: 6px;
            color: #2c4156;

            &:focus{
                outline: none;
            }
        }

        input::placeholder{
                color: #2c4156;
                font-weight: 500;
            }
    }

`

export const ContainerCards = styled.div`

    display: flex;
    gap: 1rem;  
    margin-top: 1.5rem;
    flex-wrap: wrap;
    padding-bottom: 4rem;
    /* justify-content: center; */

`