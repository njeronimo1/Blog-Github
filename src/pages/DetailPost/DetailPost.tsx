import { BiLinkExternal, BiSolidCalendarEvent } from "react-icons/bi";
import { ContainerDetailPost, ContentDetailPost } from "./DetailPost.styled";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMessage } from "react-icons/ai"
import { Header } from "../../components/Header/header";
import {IoIosArrowBack} from 'react-icons/io'
import { DetailPublicationContent } from "../../components/DetailPublicationContent";
import { Link } from "react-router-dom";

export function DetailPost(){
    return(
        <>
        <Header />
        <ContainerDetailPost>
            <div className="box_resume_personal">
                <div className="content_info_resume_personal">
                    <div className="content_info_resume_header">
                        <Link to="/">
                            <button> <IoIosArrowBack size={20}/> VOLTAR</button>
                        </Link>
                        <a href="#">VER NO GITHUB <BiLinkExternal size={20}/></a>
                    </div>
                    <h2>
                    JavaScript data types and data structures
                    </h2>
                    <div className="content_info_links">
                        <section>
                            <BsGithub size={20} />
                            <p>cameronwll</p>
                        </section>
                        <section>
                            <BiSolidCalendarEvent size={20} />
                            <p>Há 1 dia</p>
                        </section>
                        <section>
                            <AiTwotoneMessage size={20} />
                            <p>5 comentários</p>
                        </section>
                    </div>
                </div>
            </div>

            
        </ContainerDetailPost>

        <ContentDetailPost >
            <DetailPublicationContent />
        </ContentDetailPost>
        </>
    )
}