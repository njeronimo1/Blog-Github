import { BiLinkExternal, BiSolidCalendarEvent } from "react-icons/bi";
import { ContainerDetailPost, ContentDetailPost } from "./DetailPost.styled";
import { BsGithub } from "react-icons/bs";
import { AiTwotoneMessage } from "react-icons/ai"
import { Header } from "../../components/Header/header";
import {IoIosArrowBack} from 'react-icons/io'
import { DetailPublicationContent } from "../../components/DetailPublicationContent";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PublicationProps } from "../../components/PublicationsList";
import { api } from "../../Network/ApiGithub";
import { ResumePersonal } from "../../components/ResumePersonal/ResumePersonal";
import { relativeDateFormatter } from "../../utils/dateFormated";

export function DetailPost(){

    const [publicationProps, setPublicationProps] = useState<PublicationProps>();
    const {id} = useParams();

    useEffect(() => {
        api.get(`/repos/njeronimo1/Blog-Github/issues/${id}`).then((dados) => {
            let infos:PublicationProps = dados.data;

            let infoPersonal:ResumePersonal = {
                avatar_url: infos.user.avatar_url,
                bio: infos.user.bio,
                blog: infos.user.blog, //linkedin
                company: infos.user.company,
                created_at: infos.user.created_at,
                followers: infos.user.followers,
                followers_url: infos.user.followers_url,
                id: infos.user.id,
                location: infos.user.location,
                login: infos.user.login,
                name: infos.user.name,
                node_id: infos.user.node_id,
                url: infos.user.url,
                html_url: infos.user.html_url,
            }

            let info = {
                body: infos.body,
                comments: infos.comments, 
                comments_url: infos.comments_url, 
                created_at: infos.created_at, 
                html_url: infos.html_url, 
                id: infos.id, 
                node_id: infos.node_id, 
                number: infos.number, 
                repository_url: infos.repository_url, 
                title: infos.title, 
                updated_at: infos.updated_at, 
                url: infos.url, 
                user: infoPersonal
            }

            setPublicationProps(info);
        })
    }, [])

    return(
        <>
        <Header />
        <ContainerDetailPost>
            {publicationProps ? 

                <div className="box_resume_personal">
                    <div className="content_info_resume_personal">
                        <div className="content_info_resume_header">
                            <Link to="/">
                                <button> <IoIosArrowBack size={20}/> VOLTAR</button>
                            </Link>
                            <a href={publicationProps.html_url} target="_blank">VER NO GITHUB <BiLinkExternal size={20}/></a>
                        </div>
                        <h2>
                        {publicationProps?.title}
                        </h2>
                        <div className="content_info_links">
                            <section>
                                <BsGithub size={20} />
                                <p>{publicationProps?.user.login}</p>
                            </section>
                            <section>
                                <BiSolidCalendarEvent size={20} />
                                <p>{relativeDateFormatter(publicationProps.created_at)}</p>
                            </section>
                            <section>
                                <AiTwotoneMessage size={20} />
                                <p>{publicationProps?.comments == undefined ? 0 : publicationProps.comments} comentários</p>
                            </section>
                        </div>
                    </div>
                </div>
            :
                <span>Loading...</span>
            }
            
        </ContainerDetailPost>

        <ContentDetailPost >
            <DetailPublicationContent body={publicationProps?.body}/>
        </ContentDetailPost>
        </>
    )
}