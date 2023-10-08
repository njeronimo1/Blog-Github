import { ContainerResumePersonal } from "./style";
import avatar from '../../assets/avatar.png'
import {BsFillBuildingFill, BsFillPeopleFill, BsGithub} from 'react-icons/bs'
import {BiLinkExternal} from 'react-icons/bi'

export function ResumePersonal(){
    return(
        
        <ContainerResumePersonal>
            <div className="box_resume_personal">
                <div>
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="content_info_resume_personal">
                    <div className="content_info_resume_header">
                        <h1>Cameron Williamson</h1>
                        <a href="#">GITHUB <BiLinkExternal size={20}/></a>
                    </div>
                    <div className="content_info_description">
                        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                    </div>
                    <div className="content_info_links">
                        <section>
                            <BsGithub size={20} />
                            <p>cameronwll</p>
                        </section>
                        <section>
                            <BsFillBuildingFill size={20} />
                            <p>Rocketseat</p>
                        </section>
                        <section>
                            <BsFillPeopleFill size={20} />
                            <p>32 seguidores</p>
                        </section>
                    </div>
                </div>
            </div>
        </ContainerResumePersonal>

    )
}