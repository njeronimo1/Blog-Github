import { Link } from "react-router-dom";
import { CardStyle } from "./style";
import { PublicationProps } from "../PublicationsList";
import { relativeDateFormatter } from "../../utils/dateFormated";

interface CardProps{
    publicationProps: PublicationProps
}

export function Card( { publicationProps } : CardProps){

    return(

        <CardStyle>
            <Link to={`/detalhe/${publicationProps.number}`} style={{textDecoration:'none'}}>
                <span>{relativeDateFormatter(publicationProps.created_at)}</span>
                <h3>{publicationProps.title}</h3>

                <p>{publicationProps.body.substring(0, 200)}</p>
            </Link>
        </CardStyle>
    )
}