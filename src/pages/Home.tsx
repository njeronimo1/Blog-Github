import { Header } from "../components/Header/header";
import { PublicationsList } from "../components/PublicationsList";
import { ResumePersonal } from "../components/ResumePersonal/ResumePersonal";

export function Home(){
    return(
        <>
            <Header />
            <ResumePersonal />
            <PublicationsList />
        </>
    )
}