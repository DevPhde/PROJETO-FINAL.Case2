
import '../style/home.css'
import Carousel from 'react-bootstrap/Carousel'
import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import SavingMoney from "../components/SavingMoneyAnimation";
import MakingMoney from "../components/MakingMoneyAnimation";
import Card from 'react-bootstrap/Card';
import Security from '../images/security.png'
import Acess from '../images/access.png'
import Analisys from '../images/analisys.png'
import Control from '../images/control.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';






function Home() {
const navigate = useNavigate();
    useEffect(() => {
        if(sessionStorage.getItem('authorization') && !sessionStorage.getItem('admin')){{
            navigate('/dashboard')
        }}
    })

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (

        <div className="background">





            <main className="main-home">
                <div className="home-first-part">

                    <div className="carousel-home-field text-center" >
                        <h1 className="text-center fw-bolder welcome" style={{ color: "#048A78", fontSize: "clamp(35px,5vw,50px)" }}>Seja bem vindo ao SYM! ;)</h1>
                        <Carousel variant="dark" activeIndex={index} onSelect={handleSelect} className="text-center d-flex align-items-center carousel-home" >
                            <Carousel.Item interval={20000} className="carousel-item" >
                                <h3 className="fw-medium" style={{ color: "#29056B" }}>Gerenciamento sem estresse! &#128176;</h3>
                                <p className="carousel-text">O SYM foi desenvolvido para simplificar a gestão financeira. Com ele, você pode monitorar suas despesas, acompanhar suas receitas e alcançar seus objetivos financeiros mais rapidamente.</p>

                            </Carousel.Item>
                            <Carousel.Item interval={20000} >
                                <h3 className="fw-medium" style={{ color: "#29056B" }} >Acompanhe as suas finanças! &#128202;</h3>
                                <p className="carousel-text">Não perca mais tempo tentando acompanhar suas despesas manualmente.
                                    Com o SYM você pode monitorar suas finanças, e visualizar essas informações graficamente para tomar decisões mais informadas.</p>


                            </Carousel.Item>
                            <Carousel.Item interval={20000} >
                                <h3 className="fw-medium" style={{ color: "#29056B" }}>Você no controle! &#128184; </h3>
                                <p className="carousel-text">
                                    Não se preocupe mais com suas finanças!
                                    O SYM ajuda você a ficar organizado e no controle. Com ele é possível registrar receitas e despesas, e gerenciar categorias de gastos para que você nunca mais perca o controle da situação.
                                </p>


                            </Carousel.Item>
                        </Carousel>

                        <Link to="/register"><button className="btn btn-home fw-medium mt-3"> Crie a sua conta! </button></Link>
                    </div>

                    <div className="img-home"><SavingMoney className="pigAnimation" /></div>




                </div>
                <div className="home-second-part">



                    < div className="img-home-sp">

                        <MakingMoney />
                    </div>



                    <div className="home-sp-text-field ">

                        <h2 className="mb-5 pb-2 border-bottom border-light fw-bolder title-home " >Você sabe a importância de gerenciar as suas despesas? &#128173;</h2>
                        <p className="fst-italic fw-medium"><q>A cada 100 famílias no Brasil, 79 estão endividadas, conforme levantamento mensal realizado pela Confederação Nacional do Comércio de Bens, Serviços e Turismo (CNC). </q>- CNNBrasil em 04/10/2022</p>
                        <p className="fst-italic fw-medium"><q>O número de famílias endividadas atingiu, em agosto, 79% do total de lares no país, informou a Confederação Nacional do Comércio de Bens, Serviços e Turismo (CNC).</q> - G1 em 05/09/2022 </p>
                        <p>A gestão financeira é uma tarefa essencial para qualquer pessoa ou empresa que deseja ter sucesso em suas finanças.
                            No entanto, muitas vezes pode ser difícil manter o controle de todas as despesas que ocorrem diariamente.
                            O controle de orçamento pessoal é uma prática importante para assegurar uma vida financeira saudável. Ele é importante por vários motivos,
                            incluindo a prevenção de dívidas e gastos excessivos, a capacidade de tomar decisões financeiras informadas e alcançar metas financeiras importantes.
                            Quando você sabe exatamente quanto dinheiro tem disponível para gastar, é menos provável que acabe gastando mais do que ganha. Isso pode evitar que você se endivide,
                            o que pode causar problemas financeiros significativos no futuro.


                        </p>

                    </div>





                </div>

                <div className="home-third-part">

                    <h1 className="text-center fw-bolder" style={{ color: "#048A78", fontSize: "clamp(35px,5vw,45px)" }}> Venha para o SYM você também!</h1>
                    <h2 className="text-center fw-medium">Nosso objetivo é ajudar você a realizar seus sonhos</h2>
                    <div className="cards-home-field text-center">

                        <Card border="dark rounded-3" className=" p-3 mb-5 bg-body-tertiary rounded card-home" style={{ width: '18rem', minHeight: '480px' }}>
                            <Card.Body>
                                <img src={Acess} className="icon-card-home mt-3" />
                                <Card.Title className="mb-3 mt-2">Acesso remoto</Card.Title>
                                <Card.Text>
                                    Acesse onde estiver e quando quiser! Nosso aplicativo via web permite que o controle das finanças seja feito em qualquer lugar, a qualquer hora.
                                    Dessa forma, você consegue acompanhar suas finanças de forma constante e não precisa ficar preso a um único dispositivo.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark rounded-3" className=" p-3 mb-5 bg-body-tertiary rounded card-home" style={{ width: '18rem', minHeight: '480px' }}>

                            <Card.Body>
                                <img src={Control} className="icon-card-home" />
                                <Card.Title className="mb-3">Controle</Card.Title>
                                <Card.Text>
                                    Com um SYM, é fácil acompanhar seus gastos e receitas ao longo do tempo.
                                    Trabalhamos para ajudá-lo a entender onde seu dinheiro está indo e a identificar áreas onde você pode economizar.
                                    O que ajuda a manter o controle sobre suas finanças e a tomar decisões mais seguras.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark rounded-3" className=" p-3 mb-5 bg-body-tertiary rounded card-home" style={{ width: '18rem', minHeight: '480px' }}>

                            <Card.Body>
                                <img src={Analisys} className="icon-card-home" />
                                <Card.Title className="mb-3">Facilidade na análise financeira</Card.Title>
                                <Card.Text>
                                    Com o SYM, é possível gerar relatórios e gráficos que permitem uma análise detalhada das suas finanças.
                                    É possível identificar tendências, comparar receitas e despesas de diferentes períodos e tomar decisões financeiras mais informadas.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="dark rounded-3" className="p-3 mb-5 bg-body-tertiary rounded card-home" style={{ width: '18rem', minHeight: '480px' }}>

                            <Card.Body>
                                <img src={Security} className="icon-card-home" />
                                <Card.Title className="mb-3">Segurança</Card.Title>
                                <Card.Text>
                                    Nosso aplicativo prioriza as suas informações financeiras.
                                    Por isso trabalhamos com recursos de segurança avançados para dua proteção,
                                    isso inclui criptografia de dados e outras medidas de segurança para garantir que suas informações sejam mantidas em sigilo.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>




                </div>




            </main>
        </div>



    )

}

export default Home