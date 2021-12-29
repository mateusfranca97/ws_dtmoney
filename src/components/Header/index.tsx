import logo from '../../assets/logo.svg'
import { Container } from './styles'

export function Header(){
    return(
        <Container>
            <img src={logo} alt="" />
            <div className="menu">
                <ul>
                    <a href="/#">Início</a>
                    <a href="/#">Sobre</a>
                    <a href="/#">Empreendimento</a>
                    <a href="/#">Contato</a>
                </ul>
            </div>
        </Container>
    )
}