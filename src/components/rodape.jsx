import '../styles/components/rodape.css'
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitterx.png';
import youtubeIcon from '../assets/youtube.png';


export default function Footer() {
    return (
            <div className="rodape">
                <div className="parteSuperior">
                    <div className="direitosReservados">
                        <p>&reg;2025 E4u LTDA. Todos os direitos reservados aos proprietários</p>
                   
                        <p className="citacao-dados">
                            Fonte dos dados de irradiação: <a href="http://labren.ccst.inpe.br/" target="_blank" rel="noopener noreferrer">Atlas Brasileiro de Energia Solar, INPE, 2017.</a>
                        </p>
                        
                    </div>
                </div>

                <div className="parteInferior">
                    <div className="duvidas">
                        <a href="/termos">Termos de uso e privacidade</a>
                        <a href="/duvidas">Dúvidas?</a>
                    </div>

                    <div className="redesSociais">
                        <p>Nos acompanhe</p>
                        <a href=""><img src={instagramIcon}style={{height:"2rem", margin:"0.1rem"}}/></a>
                        <a href=""><img src={facebookIcon} style={{height:"2rem", margin:"0.1rem"}}/></a>
                        <a href="https://x.com/EquipeE4u"><img src={twitterIcon} style={{height:"2rem", margin:"0.1rem"}}/></a>
                        <a href=""><img src={youtubeIcon} style={{height:"2rem", margin:"0.1rem"}}/></a>
                    </div>
                </div>
            </div>
    
    )
}  