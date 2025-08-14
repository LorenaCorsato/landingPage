import React, { useState, useEffect } from "react";

// Componentes da página
import CabecalhoPublico from '../components/cabecalhoPublico'; 
import Footer from "../components/rodape";
import Card from "../components/card";
import Acessibilidade from "../components/acessibilidade";
import Popup from "../components/Popup";
import "../styles/pages/inicio.css";

// Dependências do Carrossel (Swiper)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// ==================================================================
// PASSO 1: Importando todas as imagens no topo do arquivo
// ==================================================================
// Imagens do Carrossel de Alunos (substitua pelos caminhos corretos se forem diferentes)
import funcaoImg1 from "../assets/perfil.png";
import funcaoImg2 from "../assets/perfil.png";
import funcaoImg3 from "../assets/perfil.png";
import funcaoImg4 from "../assets/perfil.png";
import funcaoImg5 from "../assets/perfil.png";
import funcaoImg6 from "../assets/perfil.png";

// Imagens dos Cards de Benefícios
import cardEnergiaImg from "../assets/img12.png";
import cardEficienciaImg from "../assets/img10.png";
import cardEcologiaImg from "../assets/img14.png";
import cardEconomiaImg from "../assets/img13.png";


export default function Inicio() {
    // --- Estados e Lógica do Componente (simplificada e corrigida) ---
    const [paragrafos, setParagrafos] = useState(["", "", "", ""]);
    const [titulo, setTitulo] = useState(["", "", "", ""]);
    const [openPopup, setOpenPopup] = useState(null);
    const [clicado, setClicado] = useState([true, false, false, false]);
    const [slideAtivo1, setSlideAtivo1] = useState(0);
    const [slideAtivo2, setSlideAtivo2] = useState(0);
    const [slideAtivo3, setSlideAtivo3] = useState(0);

    const textosSlides1 = ["Lorena C. Programadora", "Gustavo M. Designer"];
    const textosSlides2 = ["Lyncon S. Programador", "Lavinía K. Documentadora"];
    const textosSlides3 = ["Raphael S. Programador", "Gabriela C. Documentadora"];

    const beneficiosPopups = [
        { title: "Para o Meio Ambiente", initialContent: "Captar energia...", fullContent: "Captar energia através de fontes limpas e renováveis ajuda na preservação do ambiente natural e na biodiversidade..." },
        { title: "Para o Seu Bolso", initialContent: "Com a eficiência...", fullContent: "Contando com a eficiência energética, através da utilização de fontes renováveis..." },
        { title: "Para o Seu Conhecimento", initialContent: "Sustentabilidade...", fullContent: "Sustentabilidade é o que se ouve falar atualmente, e para ajudar o meio ambiente..." },
        { title: "Para o Seu Estilo de Vida", initialContent: "Ao escolher utilizar...", fullContent: "Ao escolher utilizar a energia fotovoltaica, você incentivará o próximo a repensar seus hábitos de vida..." },
        { title: "Para a Sua Empresa", initialContent: "Adotar energia...", fullContent: "Adotar energia fotovoltaica em sua empresa não só diminui gastos ou ajuda o meio ambiente..." },
        { title: "Para a Sua Família", initialContent: "Investir no uso...", fullContent: "Investir no uso de energia renovável em sua casa vai muito além de diminuir gastos..." },
    ];

    // Lógica simplificada para mudar os textos e o estado de clique
    const selecionarTopico = (topicoIndex) => {
        const paragrafosPorTopico = [
            ["A maneira como trabalhamos e os problemas que buscamos resolver...", "A maneira como trabalhamos...", "Buscamos adquirir conhecimento...", "Temos como princípio sempre incluir..."],
            ["Nós nos preocupamos com o meio ambiente...", "Todas as informações presentes são devidamente claras...", "Queremos que nossos usuários continuem conosco...", "Nossa missão consiste em facilitar o acesso..."],
            ["Mantemos os dados de nossos usuários em segurança...", "Em nosso site, priorizamos recomendar aparelhos...", "Pensamos no financeiro de nossos usuários...", "Nossos questionários são totalmente seguros..."],
            ["Principalmente para empresas, os detalhes são muito importantes...", "Tudo foi meticulosamente verificado e analisado...", "Criamos um ambiente respeitoso...", "No E4u, priorizamos a facilidade..."]
        ];
        const titulosPorTopico = [
            ["Apoiar usuários de diversos lugares:", "Disponibilizar informação:", "Incentivar o aprendizado:", "Incluir todas as pessoas:"],
            ["Fazer parte da campanha sustentável:", "Apresentar claramente:", "Valorizar o que importa:", "Simplificar o complicado:"],
            ["Dados protegidos:", "Aparelhos seguros:", "Segurança financeira:", "Questionários anônimos:"],
            ["Enfatizar os detalhes:", "Confirmar todas as informações:", "Respeitar os usuários:", "Priorizar a excelência:"]
        ];
        
        setParagrafos(paragrafosPorTopico[topicoIndex]);
        setTitulo(titulosPorTopico[topicoIndex]);
        
        const novoClicado = [false, false, false, false];
        novoClicado[topicoIndex] = true;
        setClicado(novoClicado);
    };
    
    useEffect(() => {
        selecionarTopico(0); // Inicia a página com o primeiro tópico selecionado
    }, []);

    return (
        <>
            <CabecalhoPublico />

            <main className="conteudo-com-cabecalho">
                <div className="inicio">
                    <div className="conteinerExplicacao">
                        <div className="explicacao">
                            <div className="explicacao-left">
                                {/* --- ESTRUTURA HTML CORRIGIDA --- */}
                                <div className="explicacao-item">
                                    <h3>Como funciona o calculo de energia para placas solares:</h3>
                                    <p>O calculo será feito baseado na média de gasto de energia dos últimos 3 meses para realizar a analise qual placa é capaz de suprir sua necessidade. Também haverá um seletor de preços que ajudará a buscar placas próximas desse valor e que cumpram sua necessidade.</p>
                                </div>
                                <div className="explicacao-item">
                                    <h3>Como nossos artigos vão te ajudar:</h3>
                                    <p>Possuímos artigos informativos que vão te esclarecer sobre como anda o mercado sustentável para civis e empresas, questões jurídicas como a lei 14.300/22 junto a incentivos fiscais do governo, responsabilidades de grandes empresas e civis a favor da sustentabilidade e explicações sobre a pegada de carbono.</p>
                                </div>
                                <div className="explicacao-item">
                                    <h3>Como funciona a pegada de carbono:</h3>
                                    <p>A pegada de carbono ajuda a entender o quanto cada individuo ou empresa emite de gases contribuindo para o efeito estufa, calculamos isso usando um questionário de poucas perguntas e baseada na resposta encontramos soluções possíveis para a diminuição da emissão desses gases.</p>
                                </div>
                            </div>
                            <div className="explicacao-right"></div>
                        </div> 
                    </div>

                    <div className="descricoes">
                        <div className="topicos">
                            <a onClick={() => selecionarTopico(0)} className={`topico ${clicado[0] ? "ativo" : ""}`}><span className="linha"> Auxílio ao usuário</span></a>
                            <a onClick={() => selecionarTopico(1)} className={`topico ${clicado[1] ? "ativo" : ""}`}><span className="linha"> Ambiente limpo e agradável</span></a>
                            <a onClick={() => selecionarTopico(2)} className={`topico ${clicado[2] ? "ativo" : ""}`}><span className="linha"> Segurança</span></a>
                            <a onClick={() => selecionarTopico(3)} className={`topico ${clicado[3] ? "ativo" : ""}`}><span className="linha"> Seriedade</span></a>
                        </div>
                        <div className="paragrafos-cards">
                            <div className="paragrafo-card"><span className="paragrafo-titulo">{titulo[0]}</span><span className="paragrafo-texto">{paragrafos[0]}</span></div>
                            <div className="paragrafo-card"><span className="paragrafo-titulo">{titulo[1]}</span><span className="paragrafo-texto">{paragrafos[1]}</span></div>
                            <div className="paragrafo-card"><span className="paragrafo-titulo">{titulo[2]}</span><span className="paragrafo-texto">{paragrafos[2]}</span></div>
                            <div className="paragrafo-card"><span className="paragrafo-titulo">{titulo[3]}</span><span className="paragrafo-texto">{paragrafos[3]}</span></div>
                        </div>
                    </div>

                    <div className="beneficios-popups-container">
                        <h1 className="beneficios-titulo"><span className="linha">Benefícios</span></h1>
                        <div className="beneficios-popups">
                            {beneficiosPopups.map((item, index) => (
                                <Popup key={`beneficio-${index}`} title={item.title} initialContent={item.initialContent} fullContent={item.fullContent} isOpen={openPopup === index} onToggle={() => setOpenPopup(openPopup === index ? null : index)} onClose={() => openPopup === index && setOpenPopup(null)} />
                            ))}
                        </div>
                    </div>

                    <div className="cards">
                        {/* ================================================================== */}
                        {/* PASSO 2: Usando as variáveis importadas nas imagens */}
                        {/* ================================================================== */}
                        <Card srcCard={cardEnergiaImg} tituloCard="Energia" textoCard="Utilize energia com aparelhos de qualidade e estabelecendo seus próprios limites..." />
                        <Card srcCard={cardEficienciaImg} tituloCard="Eficiência" textoCard="Garantimos uma experiência positiva, que promete resultados, melhorando a geração de energia..." />
                        <Card srcCard={cardEcologiaImg} tituloCard="Ecologia" textoCard="Ao mesmo tempo em que você se beneficia, ainda ajuda a natureza com um sistema limpo e sustentável..." />
                        <Card srcCard={cardEconomiaImg} tituloCard="Economia" textoCard="Além de ajudar a natureza, também ajudamos a sua carteira. O investimento em aparelhos de energia limpa..." />
                    </div>

                    <div className="objetivos">
                        <div className="objetivos-conteudo">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/6nALgJdfgKc?si=kCSJN_t2vGz634gQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <div className="texto-e-carrosseis">
                                <p className="texto-ao-lado">Nós do E4U nos propusemos a desenvolver uma aplicação com a finalidade de informar e conscientizar...</p>
                                <div className="mini-swipers-row">
                                    <div className="mini-swiper-col">
                                        <Swiper modules={[EffectCoverflow, Pagination, Autoplay]} className="mySwiper" onSlideChange={swiper => setSlideAtivo1(swiper.realIndex)} effect="coverflow" grabCursor={false} centeredSlides={true} slidesPerView="auto" coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}>
                                            <SwiperSlide><img src={funcaoImg1} alt="Lorena C. Programadora" /></SwiperSlide>
                                            <SwiperSlide><img src={funcaoImg2} alt="Gustavo M. Designer" /></SwiperSlide>
                                        </Swiper>
                                        <p className="mini-swiper-text">{textosSlides1[slideAtivo1]}</p>
                                    </div>
                                    <div className="mini-swiper-col">
                                        <Swiper modules={[EffectCoverflow, Pagination, Autoplay]} className="mySwiper" onSlideChange={swiper => setSlideAtivo2(swiper.realIndex)} effect="coverflow" grabCursor={false} centeredSlides={true} slidesPerView="auto" coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}>
                                            <SwiperSlide><img src={funcaoImg3} alt="Lyncon S. Programador" /></SwiperSlide>
                                            <SwiperSlide><img src={funcaoImg4} alt="Lavinía K. Documentadora" /></SwiperSlide>
                                        </Swiper>
                                        <p className="mini-swiper-text">{textosSlides2[slideAtivo2]}</p>
                                    </div>
                                    <div className="mini-swiper-col">
                                        <Swiper modules={[EffectCoverflow, Pagination, Autoplay]} className="mySwiper" onSlideChange={swiper => setSlideAtivo3(swiper.realIndex)} effect="coverflow" grabCursor={false} centeredSlides={true} slidesPerView="auto" coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: false }}>
                                            <SwiperSlide><img src={funcaoImg5} alt="Raphael S. Programador" /></SwiperSlide>
                                            <SwiperSlide><img src={funcaoImg6} alt="Gabriela Documentadora" /></SwiperSlide>
                                        </Swiper>
                                        <p className="mini-swiper-text">{textosSlides3[slideAtivo3]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Acessibilidade />
            <Footer />
        </>
    );
}