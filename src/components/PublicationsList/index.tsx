import { useEffect, useState } from "react";
import { Card } from "../Card/Index";
import { ContainerCards, ContainerPublicationList } from "./style";
import { api } from "../../Network/ApiGithub";
import { ResumePersonal } from "../ResumePersonal/ResumePersonal";

export interface PublicationProps{
    body: string,
    comments: number, 
    comments_url: string, 
    created_at: string, 
    html_url: string, 
    id: number, 
    node_id: string, 
    number: number, 
    repository_url: string, 
    title: string, 
    updated_at: string, 
    url: string, 
    user: ResumePersonal
}

export function PublicationsList(){

    const [publicationProps, setPublicationProps] = useState<PublicationProps[]>([]);
    const [publicationPropsSearch, setPublicationPropsSearch] = useState<PublicationProps[]>([]);

    useEffect(() => {
        api.get('/repos/njeronimo1/Blog-Github/issues').then((dados) => {
            let infos:PublicationProps[] = dados.data;
            const infoPublications:PublicationProps[] = [];

            infos.forEach((i) => {
                let infoPersonal:ResumePersonal = {
                    avatar_url: i.user.avatar_url,
                    bio: i.user.bio,
                    blog: i.user.blog, //linkedin
                    company: i.user.company,
                    created_at: i.user.created_at,
                    followers: i.user.followers,
                    followers_url: i.user.followers_url,
                    id: i.user.id,
                    location: i.user.location,
                    login: i.user.login,
                    name: i.user.name,
                    node_id: i.user.node_id,
                    url: i.user.url,
                    html_url: i.user.html_url,
                }

                let info = {
                    body: i.body,
                    comments: i.comments, 
                    comments_url: i.comments_url, 
                    created_at: i.created_at, 
                    html_url: i.html_url, 
                    id: i.id, 
                    node_id: i.node_id, 
                    number: i.number, 
                    repository_url: i.repository_url, 
                    title: i.title, 
                    updated_at: i.updated_at, 
                    url: i.url, 
                    user: infoPersonal
                }

                infoPublications.push(info);
            })

            setPublicationProps(infoPublications);
            setPublicationPropsSearch(infoPublications);
        })
    }, [])

    function searchPublications(search: string){
        if(search !== ""){
            let filter = publicationProps.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.body.toLowerCase().includes(search.toLowerCase()));
            setPublicationPropsSearch(filter);
        }else{
            setPublicationPropsSearch(publicationProps);
        }
    }

    return(
        <ContainerPublicationList>
            <header>
                <div>
                    <h3>Publicações</h3>
                    <p>{publicationProps.length} publicações</p>
                </div>
                
                <input 
                    type="text" 
                    placeholder="Buscar conteúdo" 
                    onChange={(e) => {searchPublications(e.target.value)}}
                />
            </header>

            <ContainerCards>
                {publicationPropsSearch.map((p) => {
                    return(
                        <Card key={p.id} publicationProps={p}/>
                    )
                })}
            </ContainerCards>
        </ContainerPublicationList>
    )
}