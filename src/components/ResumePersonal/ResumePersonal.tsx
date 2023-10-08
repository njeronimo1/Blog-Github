import { ContainerResumePersonal } from "./style";
import {BsFillBuildingFill, BsFillPeopleFill, BsGithub} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'
import { useEffect, useState } from "react";
import { api } from "../../Network/ApiGithub";

export interface ResumePersonal {
    avatar_url: string,
    bio: string,
    blog: string, //linkedin
    company: string,
    created_at: string,
    followers: 1,
    followers_url: string,
    id: number,
    location: string,
    login: string,
    name: string,
    node_id: string,
    url: string,
    html_url: string
}

export function ResumePersonal(){

    const [resumePersonal, setResumePersonal] = useState<ResumePersonal>();


    useEffect(() => {
        api.get('/users/njeronimo1').then((user) => {
            let infos:ResumePersonal = user.data;
            let info:ResumePersonal = {
                avatar_url: infos.avatar_url,
                bio: infos.bio,
                blog: infos.blog, //linkedin
                company: infos.company,
                created_at: infos.created_at,
                followers: infos.followers,
                followers_url: infos.followers_url,
                id: infos.id,
                location: infos.location,
                login: infos.login,
                name: infos.name,
                node_id: infos.node_id,
                url: infos.url,
                html_url: infos.html_url,
            }

            setResumePersonal(info);
        })
    }, [])

    return(
        
        <ContainerResumePersonal>
            <div className="box_resume_personal">
                <div>
                    <img src={resumePersonal?.avatar_url} alt="avatar" />
                </div>
                <div className="content_info_resume_personal">
                    <div className="content_info_resume_header">
                        <h1>{resumePersonal?.name}</h1>
                        <a href={resumePersonal?.html_url} target="_blank">GITHUB <BiLinkExternal size={20}/></a>
                    </div>
                    <div className="content_info_description">
                        {resumePersonal?.bio}
                    </div>
                    <div className="content_info_links">
                        <section>
                            <BsGithub size={20} />
                            <p>{resumePersonal?.login}</p>
                        </section>
                        <section>
                            <BsFillBuildingFill size={20} />
                            <p>{resumePersonal?.company}</p>
                        </section>
                        <section>
                            <BsFillPeopleFill size={20} />
                            <p>{resumePersonal?.followers} seguidores</p>
                        </section>
                    </div>
                </div>
            </div>
        </ContainerResumePersonal>

    )
}