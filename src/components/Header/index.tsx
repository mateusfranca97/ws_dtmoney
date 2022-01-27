import logo from '../../assets/logo.svg'
import { Container } from './styles'

export function Header(){
    return(
        <Container>
            <div className="menu">
                <ul>
                    <a href="/#">Início</a>
                    <a href="/#">Sobre</a>
                    <img src={logo} alt="" />
                    <a href="/#">Galeria</a>
                    <a href="/#">Contato</a>
                </ul>
                <hr/> 
            </div>
        </Container>
    )
}