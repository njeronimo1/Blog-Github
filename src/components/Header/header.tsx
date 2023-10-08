import cover from '../../assets/Cover.png'
import { ContainerHeader } from './style'

export function Header(){
    return(
        <ContainerHeader>
            <img src={cover} alt='cover'/>
        </ContainerHeader>
    )
}