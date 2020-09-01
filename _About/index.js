import React from 'react';
import './styles.css'

import imgAbout from '../../../assets/imgs/imgAbout.jpg'

function About() {
  return (
    <>
        <div className="container-about">         
         <div className="container-text">
         <h1 id="title-page-about">Sobre</h1>
         <br/>    
           <p id="desc-page-about"> O Hemoliga é um app gratuito para Android, 
           iOS, Windows Phone e plataforma Web, que tem como objetivo incentivar
           a doação de sangue. O serviço conecta potenciais doadores com os 
           hemocentros mais próximos a ele e explica todas as informações 
           necessárias para quem tem interesse em doar sangue.
           </p>
           </div>             
          <img id="img-about" src={imgAbout} alt="Imagem About"/>
        </div>
    </>
  );
}
export default About;