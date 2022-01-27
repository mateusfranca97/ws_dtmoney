import { WhatsappButton } from '../WhatsappButton'
import { Content } from './styles'
import { Project } from '../Project'
import backgroundMain from '../../assets/backgroundMain.svg'
import group from '../../assets/group.png'

export function Main(){
    return(
        <Content>
            <img className="background" src={backgroundMain} alt="" />
            <img className="group" src={group} alt="" />
            <div className="begin-page">
                <div className="title">
                    <h1>Barros &amp; Araujo</h1>
                    <h1>Construtora</h1>
                </div>
                <div className="aside-media-social">
                    <i className="fab fa-instagram fa-2x"></i>
                    <i className="fab fa-facebook-square fa-2x"></i>
                </div>
                
            </div>
            <div className="middle-page">
                <h1>Galeria de Projetos</h1>
                <div className="project-list">
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
            <div className="footer-page">

            </div>
            <WhatsappButton/>
        </Content>
    )
}