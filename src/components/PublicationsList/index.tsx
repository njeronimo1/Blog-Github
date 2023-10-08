import { Card } from "../Card/Index";
import { ContainerCards, ContainerPublicationList } from "./style";

export function PublicationsList(){
    return(
        <ContainerPublicationList>
            <header>
                <div>
                    <h3>Publicações</h3>
                    <p>6 publicações</p>
                </div>
                
                <input type="text" placeholder="Buscar conteúdo" />
            </header>

            <ContainerCards>
                <Card />
                <Card />
                <Card />
            </ContainerCards>
        </ContainerPublicationList>
    )
}