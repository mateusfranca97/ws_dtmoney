import { WhatsappButton } from '../WhatsappButton'
import backgroundMain from '../../assets/backgroundMain.svg'
import { Content } from './styles'

export function Main(){
    return(
        <Content>
            <img src={backgroundMain} alt="" />
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

            </div>
            <div className="footer-page">

            </div>
            <WhatsappButton/>
        </Content>
    )
}