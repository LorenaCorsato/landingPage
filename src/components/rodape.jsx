import '../styles/components/rodape.css'
import Facebook from "../assets/facebook.png";
import Instagram from  "../assets/instagram.png";
import Youtube from "../assets/youtube.png";
import Twitter from "../assets/twitterx.png";

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
                        <a href=""><img src={Instagram} style={{height:"2rem", margin:"0.1rem"}}/></a>
                        <a href=""><img src={Facebook} style={{height:"2rem", margin:"0.1rem"}}/></a>
                        <a href="https://x.com/EquipeE4u"><img src={Twitter} style={{height:"2rem", margin:"0.1rem"}}/></a>
                        <a href=""><img src={Youtube}style={{height:"2rem", margin:"0.1rem"}}/></a>
                    </div>
                </div>
            </div>
    
    )
}