import { WhatsappButton } from '../WhatsappButton'
import { Content } from './styles'
import backgroundMain from '../../assets/backgroundMain.svg'
import description from '../../assets/description.svg'

export function Main(){
    return(
        <Content>
            <img className="background" src={backgroundMain} alt="" />
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
                <div className="description">
                    <div>
                        <h2>Descrição</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry <br/> Lorem Ipsum has been the industry's.
                        </p>
                    </div>
                    <img src={description} alt="" />
                </div>
                <div className="enterprises">
                    {/* carousel */}
                </div>
            </div>
            <div className="footer-page">

            </div>
            <WhatsappButton/>
        </Content>
    )
}