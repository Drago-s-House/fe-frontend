import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Branding from '../components/branding'
import FeatureCard2 from '../components/feature-card2'
import FeatureCard22 from '../components/feature-card22'
import FeatureCard21 from '../components/feature-card21'
import FeatureCard23 from '../components/feature-card23'
import FeatureCard24 from '../components/feature-card24'
import FeatureCard25 from '../components/feature-card25'
import FeatureCard27 from '../components/feature-card27'
import FeatureCard28 from '../components/feature-card28'
import IconContainer from '../components/icon-container'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Fundación Guissell Eusebio</title>
          <meta property="og:title" content="Fundación Guissell Eusebio" />
        </Head>
        <section className="home-hero">
          <div className="home-main">
            <div className="home-content">
              <header data-thq="thq-navbar" className="home-navbar-interactive">
                <Branding rootClassName="branding-root-class-name1"></Branding>
                <div
                  data-thq="thq-navbar-nav"
                  data-role="Nav"
                  className="home-desktop-menu"
                >
                  <div className="home-links">
                    <a href="#nosotros" className="home-link navLink">
                      Sobre nosotros
                    </a>
                    <a href="#como-ayudar" className="home-link01 navLink">
                      Como ayudar
                    </a>
                    <a href="#oportunidades" className="home-link02 navLink">
                      Encuentra Oportunidades
                    </a>
                    <a href="#contacto" className="home-link03 navLink">
                      Contacto
                    </a>
                  </div>
                </div>
                <div data-thq="thq-burger-menu" className="home-burger-menu">
                  <button className="button">
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </button>
                </div>
                <div data-thq="thq-mobile-menu" className="home-mobile-menu">
                  <div
                    data-thq="thq-mobile-menu-nav"
                    data-role="Nav"
                    className="home-nav"
                  >
                    <div className="home-container01">
                      <Branding rootClassName="branding-root-class-name"></Branding>
                      <div
                        data-thq="thq-close-menu"
                        className="home-menu-close"
                      >
                        <svg viewBox="0 0 1024 1024" className="home-icon02">
                          <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="home-links1">
                      <Link href="/">
                        <a className="home-link05 navLink">Mission</a>
                      </Link>
                      <Link href="/">
                        <a className="home-link07 navLink">Take Action</a>
                      </Link>
                      <Link href="/">
                        <a className="home-link09 navLink">News</a>
                      </Link>
                      <Link href="/">
                        <a className="home-link11 navLink">Contact</a>
                      </Link>
                    </div>
                    <div className="home-icon-group">
                      <svg
                        viewBox="0 0 950.8571428571428 1024"
                        className="home-icon04"
                      >
                        <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 877.7142857142857 1024"
                        className="home-icon06"
                      >
                        <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 602.2582857142856 1024"
                        className="home-icon08"
                      >
                        <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </header>
              <div className="home-hero-section">
                <div className="home-header">
                  <h1 className="home-heading">
                    {' '}
                    Habilitando oportunidades para una inclusión social plena
                  </h1>
                  <p className="home-caption">
                    En la Fundación Gissell Eusebio, nos dedicamos a construir
                    oportunidades para personas con diversas habilidades.
                    Nuestra misión es brindar igualdad de oportunidades
                    laborales y promover la inclusión en el ámbito profesional.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </p>
                </div>
                <div className="home-buttons">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScU3_18tO3-nJ9mh5aPd9-lK1EgwWsVmLbYkqF3GG0jnEhwSQ/viewform"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link12 button"
                  >
                    <span>Descubre oportunidades</span>
                  </a>
                  <a
                    href="https://forms.gle/6JGB2TKrF2ZheaG7A"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-link13 button"
                  >
                    <span>Se parte de la inclusión</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="home-image">
              <a
                href="https://forms.gle/6JGB2TKrF2ZheaG7A"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link14 button"
              >
                ¡Quiero contratar!
              </a>
            </div>
          </div>
          <div className="home-details-container">
            <div className="home-details">
              <div className="home-category">
                <img alt="image" src="/details-1.svg" className="home-image1" />
                <p className="home-text02">
                  Fomento de la inclusión y la igualdad
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-category1">
                <img alt="image" src="/details-2.svg" className="home-image2" />
                <p className="home-text03">
                  Fortalecimiento de la cohesión social
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-category2">
                <img alt="image" src="/details-3.svg" className="home-image3" />
                <p className="home-text04">
                  Impulso de la sensibilización y la educación
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="home-mission">
          <div className="home-content01">
            <div className="home-main1">
              <span className="home-title">Acerca de la fundación:</span>
              <div className="home-header01">
                <h2 id="nosotros" className="home-heading1">
                  Empoderando habilidades, transformando vidas
                </h2>
                <p className="home-caption1">
                  <span>
                    En nuestra Fundación, nos apasiona el empoderamiento de las
                    personas con discapacidad. Desde 2014, hemos impulsado la
                    iniciativa
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text06">
                    COACHING PARA + MAS CAPACITADOS
                  </span>
                  <span>
                    , enfocándonos en fortalezas en lugar de vulnerabilidades. A
                    través de nuestro programa de coaching, transformamos vidas
                    al desarrollar habilidades blandas, promover el éxito
                    laboral y potenciar la confianza y autonomía de las personas
                    con discapacidades físicas. Creemos en un mundo inclusivo
                    donde todos puedan alcanzar su máximo potencial y contribuir
                    plenamente a la sociedad.
                  </span>
                </p>
              </div>
            </div>
            <div className="home-highlights">
              <div className="home-highlight">
                <h3 className="home-title1">Acción</h3>
                <p className="home-description">
                  ¡Unidos por la inclusión! Trabajamos para derribar barreras y
                  promover la igualdad de oportunidades para personas con
                  capacidades diversas.
                </p>
              </div>
              <div className="home-highlight1">
                <h3 className="home-title2">Ayuda</h3>
                <p className="home-description1">
                  ¡Juntos hacia el empoderamiento! Nuestro programa de coaching
                  transforma vidas, desarrollando habilidades y fortaleciendo la
                  confianza de las personas con habilidades únicas.
                </p>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-row">
              <img
                alt="image"
                src="/screenshot%202023-06-20%2011.52.33-400w.png"
                className="home-image4"
              />
              <img
                alt="image"
                src="/screenshot%202023-06-20%2011.55.23-400w.png"
                className="home-image5"
              />
            </div>
          </div>
        </section>
        <section className="home-petitions">
          <div className="home-images1">
            <img
              alt="image"
              src="/sin%20t%C3%A3%C2%ADtulo%20(1920%C3%A2%C2%A0%C3%A3%C2%97%C3%A2%C2%A01278%C3%A2%C2%A0px)-1400w.png"
              className="home-image6"
            />
          </div>
          <div className="home-content02">
            <div className="home-main2">
              <div className="home-header02">
                <h2 className="home-heading2">Misión</h2>
                <p className="home-caption2">
                  Ser una organización con posicionamiento nacional y alcance
                  internacional que Impulse y promueva el desarrollo y la
                  autonomía personal, empoderando a grupos socialmente
                  vulnerables (personas con discapacidad) para que logren sus
                  metas, eliminando la auto discriminación y la victimización,
                  alcanzando la inserción social, cultural, escolar y laboral,
                  para que exhiban la mejor versión de sí mismo.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <div className="home-header03">
                <h2 className="home-heading3">Visión</h2>
                <p className="home-caption3">
                  {' '}
                  Alcanzar un liderazgo nacional entre las instituciones que
                  trabajan potenciando el desarrollo de grupos socialmente
                  vulnerables, con una activa participación internacional,
                  presentando indicadores de efectividad en la transformación de
                  la calidad de vida de los grupos intervenidos (personas con
                  discapacidad)
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
            </div>
            <div className="home-button1"></div>
          </div>
        </section>
        <section className="home-steps">
          <div className="home-content03">
            <div className="home-information">
              <div className="home-main3">
                <div className="home-header04">
                  <h2 id="oportunidades" className="home-heading4">
                    Superando barreras para la inclusión laboral
                  </h2>
                  <p className="home-caption4">
                    Enfrentando desafíos significativos, más de mil millones de
                    personas con discapacidad en todo el mundo luchan por su
                    inclusión laboral. En la República Dominicana, el acceso al
                    empleo se ve obstaculizado para el 80% de las personas con
                    discapacidad. Exploraremos las barreras y consecuencias de
                    esta exclusión, así como la importancia de superarlas para
                    lograr un desarrollo humano y socioeconómico equitativo.
                  </p>
                </div>
              </div>
              <div className="home-button2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScU3_18tO3-nJ9mh5aPd9-lK1EgwWsVmLbYkqF3GG0jnEhwSQ/viewform"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15 button"
                >
                  <span className="home-text08">¡Quiero trabajar!</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-features">
          <h1 className="home-text09">Servicios para empresas</h1>
          <div className="home-container02">
            <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
            <FeatureCard22></FeatureCard22>
            <FeatureCard21></FeatureCard21>
            <FeatureCard23></FeatureCard23>
          </div>
        </div>
        <div className="home-features1">
          <h1 className="home-text10">Servicios para personas</h1>
          <div className="home-container03">
            <FeatureCard24></FeatureCard24>
            <FeatureCard25></FeatureCard25>
            <FeatureCard27></FeatureCard27>
            <FeatureCard28></FeatureCard28>
          </div>
        </div>
        <div className="home-donate">
          <div className="home-content04">
            <div className="home-steps1">
              <h1 className="home-text11">
                ¿Cuál es el proceso de contratación?
              </h1>
              <div className="home-container04">
                <div className="home-step">
                  <div className="home-container05">
                    <div className="home-line"></div>
                    <div className="home-container06">
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M634 558q92-64 92-174 0-88-63-151t-151-63-151 63-63 151q0 46 27 96t65 78l36 26v98h172v-98zM512 86q124 0 211 87t87 211q0 156-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
                      </svg>
                    </div>
                    <div className="home-line1"></div>
                  </div>
                  <div className="home-container07">
                    <h1 className="home-text12">Identificación</h1>
                  </div>
                </div>
                <div className="home-step1">
                  <div className="home-container08">
                    <div className="home-line2"></div>
                    <div className="home-container09">
                      <svg viewBox="0 0 1024 1024" className="home-icon12">
                        <path d="M746 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM618 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM406 342q26 0 45-19t19-45-19-45-45-19-45 19-19 45 19 45 45 19zM278 512q26 0 45-18t19-46-19-46-45-18-45 18-19 46 19 46 45 18zM512 128q158 0 271 100t113 242q0 88-63 150t-151 62h-74q-28 0-46 19t-18 45q0 22 16 42t16 44q0 28-18 46t-46 18q-160 0-272-112t-112-272 112-272 272-112z"></path>
                      </svg>
                    </div>
                    <div className="home-line3"></div>
                  </div>
                  <div className="home-container10">
                    <h1 className="home-text13">Solicitud</h1>
                  </div>
                </div>
                <div className="home-step2">
                  <div className="home-container11">
                    <div className="home-line4"></div>
                    <div className="home-container12">
                      <svg viewBox="0 0 1024 1024" className="home-icon14">
                        <path d="M576 736l96 96 320-320-320-320-96 96 224 224z"></path>
                        <path d="M448 288l-96-96-320 320 320 320 96-96-224-224z"></path>
                      </svg>
                    </div>
                    <div className="home-line5"></div>
                  </div>
                  <div className="home-container13">
                    <h1 className="home-text14">Recepción de cantidatos</h1>
                  </div>
                </div>
                <div className="home-step3">
                  <div className="home-container14">
                    <div className="home-line6"></div>
                    <div className="home-container15">
                      <svg viewBox="0 0 1024 1024" className="home-icon17">
                        <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                      </svg>
                    </div>
                    <div className="home-line7"></div>
                  </div>
                  <div className="home-container16">
                    <h1 className="home-text15">Ajustes adicionales</h1>
                  </div>
                </div>
              </div>
              <span className="home-text16">
                Nuestro servicio de reclutamiento y selección para personas con
                habilidades diversas sigue un proceso claro y eficiente. La
                empresa nos proporciona los perfiles de las posiciones,
                sostenemos una reunión virtual para aclarar detalles, se firma
                un documento de acuerdo, y procedemos a buscar candidatos.
                Brindamos asistencia durante el proceso de contratación y
                ofrecemos servicios adicionales, como descripciones de puestos
                adaptados y recomendaciones sobre ajustes razonables. Nuestro
                objetivo es facilitar el encuentro entre talento diverso y
                empresas inclusivas.
              </span>
            </div>
          </div>
        </div>
        <section className="home-donation-use">
          <div className="home-header05">
            <h2 id="como-ayudar" className="home-heading5">
              ¿Cómo las empresas pueden colaborar?
            </h2>
            <p className="home-caption5">
              Descubre cómo puedes marcar la diferencia y fomentar la inclusión
              al unirte a nuestra iniciativa. A través de patrocinios,
              contratación de servicios, participación en eventos benéficos y
              apadrinamiento de programas, puedes contribuir activamente a la
              integración laboral y al desarrollo personal de personas con
              habilidades diversas. Además, al utilizar nuestro centro de
              reclutamiento, tendrás la oportunidad de encontrar talento diverso
              y brindar oportunidades laborales inclusivas.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion-element home-element"
            >
              <div className="home-header06">
                <h3 className="home-text17">
                  1. Patrocina la Inclusión: Centro de Reclutamiento y Selección
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name4"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text18">
                  Haz la diferencia al patrocinar nuestro Centro de
                  Reclutamiento y Selección, brindando oportunidades laborales a
                  personas con habilidades diversas. Impulsa la inclusión y
                  construye un equipo diverso y talentoso.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element1"
            >
              <div className="home-header07">
                <h3 className="home-text19">
                  2. Transformación Empresarial: Servicios para Empresas
                  Inclusivas
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name5"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text20">
                  Descubre los servicios que ofrecemos para transformar y
                  desarrollar empresas inclusivas. Nuestro enfoque especializado
                  te guiará hacia la inclusión laboral, creando un entorno de
                  trabajo diverso, equitativo y productivo.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element2"
            >
              <div className="home-header08">
                <h3 className="home-text21">
                  3. Uniendo Fuerzas: Eventos Benéficos para la Inclusión
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name6"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text22">
                  Descubre los servicios que ofrecemos para transformar y
                  desarrollar empresas inclusivas. Nuestro enfoque especializado
                  te guiará hacia la inclusión laboral, creando un entorno de
                  trabajo diverso, equitativo y productivo.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element3"
            >
              <div className="home-header09">
                <h3 className="home-text23">
                  4. Apadrina el Empoderamiento: Programa Coaching Para Más
                  Capacitados
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name7"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text24">
                  Haz una contribución significativa al apadrinar nuestro
                  programa Coaching Para Más Capacitados y a sus beneficiarios.
                  Impulsa el empoderamiento y el desarrollo personal de personas
                  con habilidades diversas, brindándoles las herramientas para
                  alcanzar su máximo potencial.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element4"
            >
              <div className="home-header10">
                <h3 className="home-text25">
                  5. Vacantes Inclusivas: Centro de Búsqueda y Contratación
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name8"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text26">
                  Encuentra talento diverso y promueve la inclusión laboral al
                  colocar tus posiciones vacantes en nuestro Centro de Búsqueda
                  y Contratación. Descubre el potencial de personas con
                  habilidades diversas y construye un equipo inclusivo y
                  talentoso.
                </p>
              </div>
            </div>
            <div>
              <Script
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></Script>
            </div>
          </div>
        </section>
        <section className="home-updates"></section>
        <footer className="home-footer">
          <div className="home-top">
            <nav className="home-navigation-links">
              <a
                href="#como-ayudar"
                id="Contratar"
                className="home-link16 navLink"
              >
                Contratar
              </a>
              <a href="#oportunidades" className="home-link17 navLink">
                Buscar Empleo
              </a>
            </nav>
          </div>
          <div className="home-middle">
            <span id="contacto" className="home-text27">
              <span>
                809-740-7560
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text29">
                gissell.eusebiolifetransformer@gmail.com
              </span>
            </span>
            <span className="home-text30">
              Calle Eduardo Vicioso # 82, Edif. Isabel Michell 1, apto 3,
              Ensanche Bella Vista, Santo Domingo, Distrito Nacional, Republica
              Dominicana.
            </span>
          </div>
          <div className="home-bottom">
            <span className="home-copyright">
              Donado por Drago&apos;s House
            </span>
          </div>
        </footer>
        <div>
          <Script
            html={`<script>
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('slide-active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('slide-active');
}

const previousSlideButton = document.querySelector('#previous-slide');
previousSlideButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

const nextSlideButton = document.querySelector('#next-slide');
nextSlideButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});
</script>`}
          ></Script>
        </div>
        <div>
          <Script
            html={`<script>
function setCookie(name, value, days) {
  // Set the cookie with the given name, value, and expiration time (in days)
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  // Get the value of the cookie with the given name
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function removeCookie(name) {
  // Remove the cookie with the given name
  setCookie(name, "", -1); // Set the cookie with an expiration time of -1 days
}

document.getElementById("close").addEventListener("click", function(){
  // Get the persistence value
  let persistence = document.getElementById("banner").getAttribute("data-persistence");
  if (persistence === "true") {
    // If persistence is enabled, set a cookie to remember that the banner is closed
    setCookie("bannerClosed", "true", 1); // Set the cookie with an expiration time of 1 day
  } else {
    removeCookie("bannerClosed")
  }
  document.getElementById("banner").style.display = "none"; // Hide the banner
});

window.addEventListener("load", function() {
  // Check if the banner should be displayed or not
  let bannerClosed = getCookie("bannerClosed");
  if (bannerClosed === "true") {
    // If the bannerClosed cookie is set, hide the banner
    document.getElementById("banner").style.display = "none";
  }
});
</script>`}
          ></Script>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-hero {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-size: auto;
            justify-content: flex-start;
            background-image: url('/sin%20t%C3%A3%C2%ADtulo%20(1920%C3%A2%C2%A0%C3%A3%C2%97%C3%A2%C2%A0905%C3%A2%C2%A0px');
            background-repeat: repeat-x;
            background-position: top;
          }
          .home-main {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            height: 646px;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .home-navbar-interactive {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: center;
          }
          .home-desktop-menu {
            display: flex;
            position: relative;
          }
          .home-links {
            gap: var(--dl-space-space-twounits);
            width: 408px;
            height: 8px;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-link {
            text-decoration: none;
          }
          .home-link01 {
            text-decoration: none;
          }
          .home-link02 {
            text-decoration: none;
          }
          .home-link03 {
            text-decoration: none;
          }
          .home-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-links1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-direction: column;
          }
          .home-link05 {
            text-decoration: none;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-link09 {
            text-decoration: none;
          }
          .home-link11 {
            text-decoration: none;
          }
          .home-icon-group {
            display: flex;
          }
          .home-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-hero-section {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(34, 34, 35);
            font-size: 60px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 700;
          }
          .home-caption {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 30px;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link12 {
            text-decoration: none;
            background-color: #e8a736;
          }
          .home-link13 {
            color: #f6f5ed;
            text-decoration: none;
            background-color: #0075bc;
          }
          .home-image {
            flex: 1;
            height: 100%;
            display: flex;
            overflow: hidden;
            align-items: flex-end;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/amigos-divirtiendose-juntos-1400w.jpg');
          }
          .home-link14 {
            color: rgb(255, 255, 255);
            align-self: flex-end;
            margin-top: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
            background-color: rgb(0, 117, 188);
          }
          .home-details-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
            background-color: #e9a837;
          }
          .home-details {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-category {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image1 {
            width: 32px;
            object-fit: cover;
          }
          .home-text02 {
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-category1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image2 {
            width: 32px;
            object-fit: cover;
          }
          .home-text03 {
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-category2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image3 {
            width: 32px;
            object-fit: cover;
          }
          .home-text04 {
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-mission {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: center;
          }
          .home-content01 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
          }
          .home-header01 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading1 {
            color: rgb(34, 34, 35);
            font-size: 50px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption1 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-text06 {
            font-weight: 700;
          }
          .home-highlights {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-highlight {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: 248px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title1 {
            color: rgb(34, 34, 35);
            font-size: 45px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-highlight1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            max-width: var(--dl-size-size-xxlarge);
            align-items: flex-start;
            flex-direction: column;
          }
          .home-title2 {
            color: rgb(34, 34, 35);
            font-size: 45px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 500;
            line-height: 52px;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-left-width: 1px;
          }
          .home-description1 {
            color: rgb(34, 34, 35);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-images {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-row {
            display: flex;
            align-self: center;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image4 {
            width: 367px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-image5 {
            top: 150px;
            right: 0px;
            width: 333px;
            z-index: 100;
            position: absolute;
            object-fit: cover;
          }
          .home-petitions {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-images1 {
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-end;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image6 {
            width: 641px;
            object-fit: cover;
          }
          .home-content02 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading2 {
            color: rgb(34, 34, 35);
            font-size: 45px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption2 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header03 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading3 {
            color: rgb(34, 34, 35);
            font-size: 45px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 500;
            line-height: 52px;
          }
          .home-caption3 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button1 {
            gap: var(--dl-space-space-twounits);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-steps {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #e9a837;
          }
          .home-content03 {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: 120px;
            justify-content: space-between;
          }
          .home-information {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 800px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-right: 4px;
            flex-direction: column;
          }
          .home-header04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading4 {
            color: rgb(34, 34, 35);
            font-size: 60px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 700;
            line-height: 52px;
          }
          .home-caption4 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-button2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-link15 {
            text-decoration: none;
            background-color: #0075bc;
          }
          .home-text08 {
            color: rgb(255, 255, 255);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text09 {
            font-size: 4rem;
            font-family: Tangerine;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container02 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-features1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: column;
            background-color: #e8e6da;
          }
          .home-text10 {
            font-size: 4rem;
            font-family: Tangerine;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container03 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .home-donate {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #e9a837;
          }
          .home-content04 {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
          }
          .home-steps1 {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .home-text11 {
            color: var(--dl-color-gray-black);
            font-size: 3rem;
            font-family: Tangerine;
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .home-step {
            width: 200px;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: column;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon10 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .home-line1 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container07 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text12 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: Tangerine;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-step1 {
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line2 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon12 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .home-line3 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container10 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text13 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: Tangerine;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-step2 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line4 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container12 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon14 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .home-line5 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container13 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: Tangerine;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-step3 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: 2px;
            padding-right: 2px;
            flex-direction: row;
            justify-content: center;
          }
          .home-line6 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .home-icon17 {
            fill: var(--dl-color-gray-500);
            width: 24px;
            height: 24px;
          }
          .home-line7 {
            flex: 1;
            height: 0px;
            display: flex;
            align-items: flex-start;
            border-color: transparent;
            border-style: dashed;
            border-width: 2px;
            flex-direction: row;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .home-container16 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            font-size: 30px;
            font-style: normal;
            text-align: center;
            font-family: Tangerine;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text16 {
            text-align: center;
          }
          .home-donation-use {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .home-header05 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 560px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-heading5 {
            color: rgb(34, 34, 35);
            font-size: 50px;
            font-style: normal;
            font-family: Tangerine;
            font-weight: 700;
            line-height: 52px;
          }
          .home-caption5 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-accordion {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header06 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text17 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Karla;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text18 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header07 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text19 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Karla;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header08 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text21 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Karla;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text22 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header09 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text23 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Karla;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text24 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-header10 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-text25 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Karla;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text26 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-updates {
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #e8e6da;
          }
          .home-footer {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: #e9a837;
          }
          .home-top {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            border-color: #222223;
            border-style: dashed;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-navigation-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: row;
          }
          .home-link16 {
            text-decoration: none;
          }
          .home-link17 {
            text-decoration: none;
          }
          .home-middle {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 400px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text27 {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text29 {
            font-size: 18px;
          }
          .home-text30 {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 36px;
          }
          .home-bottom {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 640px;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #222223;
            border-style: dashed;
            flex-direction: column;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-copyright {
            color: rgba(0, 0, 0, 0.3);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 18px;
          }
          @media (max-width: 991px) {
            .home-main {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-navbar-interactive {
              gap: 0;
              justify-content: space-between;
            }
            .home-links {
              display: none;
            }
            .home-heading {
              font-size: 36px;
              line-height: 46px;
            }
            .home-caption {
              font-size: 16px;
              line-height: 24px;
            }
            .home-buttons {
              flex-direction: column;
            }
            .home-link14 {
              display: none;
            }
            .home-details {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category1 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-category2 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-mission {
              gap: var(--dl-space-space-twounits);
            }
            .home-petitions {
              padding-top: 0px;
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-images1 {
              width: 100%;
            }
            .home-image6 {
              flex: 1;
              width: 100%;
            }
            .home-content02 {
              max-width: 100%;
            }
            .home-button1 {
              width: 100%;
            }
            .home-content03 {
              gap: var(--dl-space-space-fourunits);
              align-items: flex-start;
              padding-top: var(--dl-space-space-sixunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-sixunits);
              justify-content: flex-start;
            }
            .home-button2 {
              width: 100%;
            }
            .home-content04 {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-text11 {
              text-align: center;
            }
            .home-donation-use {
              padding-top: var(--dl-space-space-sixunits);
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-footer {
              width: 100%;
              padding-top: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 767px) {
            .home-main {
              gap: var(--dl-space-space-threeunits);
              height: 800px;
              position: relative;
              padding-left: 0px;
              flex-direction: column;
            }
            .home-content {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-navbar-interactive {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-link13 {
              display: none;
            }
            .home-image {
              width: 100%;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              background-position: center;
            }
            .home-details {
              gap: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-category {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text02 {
              max-width: 100%;
            }
            .home-category1 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text03 {
              max-width: 100%;
            }
            .home-category2 {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-text04 {
              max-width: 100%;
            }
            .home-mission {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-sixunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-content01 {
              max-width: 100%;
            }
            .home-images {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-row {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-end;
            }
            .home-image5 {
              bottom: var(--dl-space-space-halfunit);
              position: static;
            }
            .home-petitions {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-content03 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container02 {
              grid-template-columns: 1fr;
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container03 {
              grid-template-columns: 1fr;
            }
            .home-content04 {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-steps1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container04 {
              align-items: flex-start;
              padding-left: var(--dl-space-space-fiveunits);
              flex-direction: column;
            }
            .home-step {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container05 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line1 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container07 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text12 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-step1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container08 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line2 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line3 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container10 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text13 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-step2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container11 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line4 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line5 {
              border-color: var(--dl-color-gray-900);
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container13 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text14 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-step3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .home-container14 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: space-between;
            }
            .home-line6 {
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-line7 {
              border-color: transparent;
              border-style: dashed;
              border-top-width: 0px;
              border-left-width: 2px;
            }
            .home-container16 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text15 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-donation-use {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-header05 {
              max-width: 100%;
            }
            .home-accordion {
              width: 100%;
            }
            .home-footer {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .home-content {
              gap: var(--dl-space-space-threeunits);
            }
            .home-navbar-interactive {
              padding: var(--dl-space-space-halfunit);
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
            }
            .home-mobile-menu {
              padding: 16px;
            }
            .home-mission {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-title {
              font-size: 12px;
            }
            .home-header01 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading1 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption1 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-highlights {
              gap: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-highlight {
              gap: var(--dl-space-space-unit);
            }
            .home-title1 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-highlight1 {
              gap: var(--dl-space-space-unit);
            }
            .home-title2 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-image4 {
              width: 200px;
            }
            .home-image5 {
              width: 200px;
            }
            .home-petitions {
              gap: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading2 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption2 {
              color: rgb(34, 34, 35);
              line-height: 24px;
            }
            .home-heading3 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption3 {
              color: rgb(34, 34, 35);
              line-height: 24px;
            }
            .home-content03 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading4 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption4 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-features1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-content04 {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-steps1 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container04 {
              padding-left: 0px;
            }
            .home-container07 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text12 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container10 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text13 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container13 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text14 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container16 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text15 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-donation-use {
              padding-top: var(--dl-space-space-threeunits);
              padding-bottom: var(--dl-space-space-threeunits);
            }
            .home-heading5 {
              font-size: 30px;
              line-height: 40px;
            }
            .home-caption5 {
              font-size: 16px;
              line-height: 24px;
            }
            .home-element {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text17 {
              font-size: 16px;
            }
            .home-text18 {
              line-height: 24px;
            }
            .home-element1 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text19 {
              font-size: 16px;
            }
            .home-text20 {
              line-height: 24px;
            }
            .home-element2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text21 {
              font-size: 16px;
            }
            .home-text22 {
              line-height: 24px;
            }
            .home-element3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text23 {
              font-size: 16px;
            }
            .home-text24 {
              line-height: 24px;
            }
            .home-element4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text25 {
              font-size: 16px;
            }
            .home-text26 {
              line-height: 24px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-navigation-links {
              flex-direction: column;
            }
            .home-text27 {
              font-size: 18px;
              line-height: 40px;
            }
            .home-text30 {
              font-size: 18px;
              line-height: 40px;
            }
            .home-bottom {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-copyright {
              font-size: 10px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
