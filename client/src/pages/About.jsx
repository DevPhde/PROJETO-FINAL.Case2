import '../style/home.css'
import '../style/about.css'
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Security from '../images/security.png'
import Acess from '../images/access.png'
import Analisys from '../images/analisys.png'
import Control from '../images/control.png'
import { Link } from "react-router-dom";
import WhatIsIt from '../components/WhatIsAnimation';
import Lion from '../images/leaodareceita.png'
import Simple from '../images/simples.png'
import Dinamic from '../images/dinamico.png'
import Intuitive from '../images/intuitivo.png'
import Practical from '../images/funcional.png'
import Versatile from '../images/versatil.png'
import Informative from '../images/informativo.png'





function About() {

    


    return (

        <div className="background">





            <main className="main-home">
                <div className="about-first-part">

                    <div className="home-sp-text-field ">

                        <h2 className="mb-5 pb-2  fw-bolder title-about " >Afinal, o que é o SYM?</h2>

                        <p className=" text-about ">O SYM(Save Your Money) é uma aplicação web de gerenciamento de finanças. Nele você consegue acompanhar suas finanças de perto e em tempo real. No SYM você consegue adicionar, editar e excluir despesas e receitas de forma rápida e sem complicação.
                            <br/>Nossa aplicação conta com uma interface simplificada, dinâmica e intuitiva. Através dos gráficos apresentados no dashboard, você consegue fazer uma análise mais assertiva de seus ganhos e suas perdas,
                            permitindo que o usuário possa identificar. com mais clareza oportunidades de economizar dinheiro.


                        </p>

                    </div>


                    <div className="img-about"><WhatIsIt /></div>




                </div>
                <div className="about-second-part">



                    < div className="img-home-sp">

                        <img src={Lion} className="img-lion" />
                    </div>



                    <div className="home-sp-text-field ">

                        <p className="text-about">

                            Além disso, o SYM também conta com um sistema de alerta sobre o Imposto de Renda, para que você não se esqueça e tenha problemas com o leão. Sempre que o usuário alcançar a receita mínima para a declaração IR, nossa aplicação o informará dessa necessidade, assim como a alíquota para dedução.<br />
                            Finalmente, o SYM existe para lhe ajudar no controle de orçamento pessoal. Nosso objetivo é reduzir o seu estresse financeiro ao mesmo tempo em que lhe proporcionamos meios para você tenha um controle claro e preciso das suas finanças, para que possa tomar decisões financeiras com segurança, e assim, alcançar suas metas e sonhos.
                        </p>

                    </div>





                </div>

                <div className="home-third-part">

                    <h1 className="text-center fw-bolder" style={{ color: "#048A78", fontSize: "clamp(35px,5vw,45px)" }}> Um pouco mais sobre o SYM</h1>
                    <h2 className="text-center fw-medium">Conheça um pouco de nossas principais características</h2>
                  
                    <div className="cards-about-field text-center">
                        <div className="cards-one">
                        <Card className="mb-3 c-about two-line">
                            <Card.Body className="card-about">
                                <img src={Simple} className="icon-about" />
                                <div>
                                <Card.Title className="text-card-about">Simples</Card.Title>
                                <Card.Text  className="text-card-about">
                                Apresenta uma interface simples e limpa, para que todo e qualquer usuário consiga entender sem dificuldades e gerenciar suas finanças com extrema facilidade.
                                </Card.Text>
                                </div>

                                
                            </Card.Body>
                        </Card>
                        <Card className='mb-3 c-about'>
                            <Card.Body className="card-about">
                                <img src={Dinamic} className="icon-about" />
                                <div>
                                <Card.Title className="text-card-about">Dinâmico</Card.Title>
                                <Card.Text  className="text-card-about">
                                Os gráficos presentes na dashboard são atualizados em tempo real! Quando alteração é realizada, é possível visualiza-la instantaneamente no dashboard!

                                </Card.Text>
                                </div>

                                
                            </Card.Body>
                        </Card >
                        <Card className='mb-3 c-about three-line'>
                            <Card.Body className="card-about">
                                <img src={Intuitive} className="icon-about" />
                                <div>
                                <Card.Title className="text-card-about">Intuitivo</Card.Title>
                                <Card.Text  className="text-card-about">
                                Nossa aplicação conta com uma navegação fácil e natural, com o uso de ícones e rótulos descritivos para ajudar os usuários a entender o que cada função faz.
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        </div>
                        <div className="cards-two ">
                        <Card className='mb-3 c-about three-line'>
                            <Card.Body className="card-about">
                                <img src={Practical} className="icon-about" />
                                <div>
                                <Card.Title className="text-card-about">Prático</Card.Title>
                                <Card.Text  className="text-card-about">
                                No SYM você consegue gerenciar suas despesas de forma rápida e segura, para que você gaste menos tempo preenchendo planilha, e mais tempo vivendo.  

                                </Card.Text>
                                </div>

                                
                            </Card.Body>
                        </Card>
                        <Card className='mb-3 c-about three-line'>
                            <Card.Body className="card-about">
                                <img src={Versatile} className="icon-about" />
                                <div>
                                <Card.Title className="text-card-about">Versátil</Card.Title>
                                <Card.Text  className="text-card-about">
                                Sendo uma aplicação para web, você consegue acessar o SYM através de qualquer aplicativo com acesso a internet, 
                                assim você não precisa ficar preso a um único dispositivo.
                                </Card.Text>
                                </div>

                                
                            </Card.Body>
                        </Card >
                        <Card className='mb-3 c-about two-line'>
                            <Card.Body className="card-about">
                                <img src={Informative} className="icon-about" />
                                <div>
                                <Card.Title className="text-card-about">Informativo</Card.Title>
                                <Card.Text  className="text-card-about">
                                A nossa dashboard foi projetada pensando na experiência do usuário, com gráficos fáceis e intrutivos para torná-la o mais informativa e didática possível.
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                        </div>



                          
                    </div>




                </div>




            </main>
        </div>



    )

}

export default About