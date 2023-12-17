import React from 'react'
import Header from './Header'
import student from '../assets/student.png'
import { FaWhatsapp } from "react-icons/fa";
import  examen  from '../assets/examen.jpg';

const Home = () => {
  return (
    <>
      <Header/>
      <section className="home">
        <div className="home-container">
          <div className="home-container-background">
            <img src={examen} alt="" />
          </div>
          <div className='home-container-up'>
            <div className="home-container-img">
              <img src= {student} alt="" />
            </div>
            <div className="home-container-cont">
              <span>
                INGRESA A LAS<br /> 
                ESCUELAS DE LAS<br />
                FF.AA & PNP<br />
                IESTPFFAA
              </span>
              <button className='home-container-register'>
                INSCRIBIRME
              </button>
              <div className='home-container-contact'>
                <span>
                  Escribenos <FaWhatsapp style={{margin:"0 10px", position:'relative', top:'4px'}}/> +51 937 281 688
                </span>
              </div>
            </div>
          </div>
          <div className="home-container-down">
            <div className="home-text-more">
              +
            </div>
            <div className="home-text-anios">
              <span>7 AÑOS</span>
              <span>PREPARANDO</span>
            </div>
            <div className="home-text-div">
              |
            </div>
            <div className='home-text-right'>
              <div>
                3
                <span>
                  DE<br/>CADA
                </span>
                4
              </div>
              <span>
                alumnos INGRESA
              </span>
            </div>
          </div>   
        </div>   
      </section>
    </>
  )
}

export default Home