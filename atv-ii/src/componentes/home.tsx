import Carousel from 'react-bootstrap/Carousel';
import { Component } from "react";
import "./home.css"

export class Carrosel extends Component {
    render() {
        return (
            <>
                <Carousel className='tamanho-imagem'>
                    <Carousel.Item>
                        <img
                            className="img1"
                            src="https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658_640.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img2"
                            src="https://conexaoplaneta.com.br/wp-content/uploads/2016/12/curiosidade-animal-conexao-planeta-panda-vermelho-mathias-appel.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img3"
                            src="https://pbs.twimg.com/ext_tw_video_thumb/1596936268822216705/pu/img/7dbFTeY03Rc5vLG_.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}

export class Intro extends Component {
    render() {
        return (
            <>
                <div className='texto1'>

                    <div className='t1'><h1>Quem Somos</h1></div>
                    <div className='txt1'>
                        <p>Bem-vindo ao nosso Petshop! Somos uma equipe apaixonada por animais e dedicada a fornecer produtos e serviços de alta qualidade para atender às necessidades dos seus queridos companheiros de quatro patas. Aqui, no nosso Petshop, valorizamos o bem-estar animal, a saúde e a felicidade de cada animalzinho que atendemos.</p>
                    </div>

                    <div className='t2'><h1>Nossa Missão</h1></div>
                    <div className='txt2'>
                        <p>Nossa missão é oferecer uma experiência única e positiva para você e seu animal de estimação. Acreditamos que todos os animais merecem cuidados especiais, amor e atenção. Por isso, buscamos sempre fornecer os melhores produtos e serviços para garantir que eles vivam vidas saudáveis e felizes.</p>
                    </div>

                </div>

                <div className='texto2'>

                    <div className='t3'><h1>Produtos de Qualidade</h1></div>
                    <div className='txt3'>
                        <p>Em nosso Petshop, você encontrará uma ampla variedade de produtos cuidadosamente selecionados para atender às necessidades de cada animal. Trabalhamos apenas com marcas confiáveis e de alta qualidade, que priorizam a segurança e o conforto dos animais. Desde alimentos nutritivos e brinquedos divertidos até acessórios elegantes e produtos de higiene, temos tudo o que você precisa para cuidar do seu animal de estimação.</p>
                    </div>

                    <div className='t4'><h1>Serviços Especializados</h1></div>
                    <div className='txt4'>
                        <p>Além de oferecer produtos de qualidade, também disponibilizamos uma variedade de serviços especializados para garantir o bem-estar do seu animal. Nossa equipe de profissionais qualificados está pronta para fornecer serviços de banho e tosa, cuidados de higiene, tratamentos terapêuticos, consultas veterinárias e muito mais. Valorizamos a saúde e o conforto do seu animal de estimação e nos esforçamos para oferecer um atendimento personalizado e cuidadoso em todos os momentos.</p>
                    </div>

                </div>

                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </>
        )
    }
}