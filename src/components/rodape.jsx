import React from 'react';
import '../styles/components/rodape.css';

// 1. Importe as imagens no topo do arquivo para funcionar no Vercel
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitterx.png';
import youtubeIcon from '../assets/youtube.png';

export default function Footer() {
    return (
        // 2. Usando a tag <footer> que é semanticamente mais correta
        <footer className="rodape">
            <div className="parteSuperior">
                <div className="direitosReservados">
                    <p>&copy; 2025 E4u LTDA. Todos os direitos reservados.</p>
                </div>
            </div>

            <div className="parteInferior">
                <div className="duvidas">
                    <a href="#">Termos de uso e privacidade</a>
                    <a href="#">Segurança</a>
                    <a href="#">Dúvidas?</a>
                </div>

                <div className="redesSociais">
                    <p>Nos acompanhe</p>
                    {/* 3. Usando as imagens importadas e adicionando alt text */}
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Logo do Instagram"/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Logo do Facebook"/>
                    </a>
                    <a href="https://x.com/EquipeE4u" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Logo do Twitter/X"/>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={youtubeIcon} alt="Logo do YouTube"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}