import styled from "styled-components";

export const ContainerDetailPost = styled.div`

    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        margin:1rem
    }

    .box_resume_personal{
        width: 100%;
        max-width: 1000px;
        border-radius: 12px;
        background-color: #0B1B2B;
        box-shadow: rgba(149, 157, 165, 0.01) 0px 8px 24px;
        padding:2rem;
        margin-top: -4rem;
        color: white;

        display: flex;
        align-items: flex-start;
        gap: 2rem;

        .content_info_resume_personal{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            width: 100%;

            .content_info_resume_header{
                width: 100%;
                display: flex;
                justify-content: space-between;
                
                button{
                    border: none;
                    background-color: transparent;
                    display: flex;
                    align-items: center;
                    color: #3294f8;
                    font-weight: bold;
                    gap: 0.5rem;
                    font-size:0.95rem;
                    cursor:pointer;
                    &:hover{
                        text-decoration: underline;
                    }
                }

                a{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #3294f8;
                    text-decoration: none;
                    font-weight: bold;
                    font-size:0.95rem;

                    &:hover{
                        text-decoration: underline;
                    }
                }
                
            }

            .content_info_links{
                display: flex;
                align-items: center;
                gap: 2rem;
                /* justify-content: space-around; */

                section{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    svg{
                        color: #3a526b;
                    }
                }
            }
        }
    }

`

export const ContentDetailPost = styled.div`

    
    width: 100%;    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 900px;
    margin:0 auto;

    margin-top: 2rem;
    padding-bottom: 2rem;
    color: white;
    line-height: 180%;

    a{
        color: #3294f8;
    }

`