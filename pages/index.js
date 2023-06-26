import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Branding from '../components/branding'
import FeatureCard22 from '../components/feature-card22'
import FeatureCard21 from '../components/feature-card21'
import FeatureCard23 from '../components/feature-card23'
import FeatureCard231 from '../components/feature-card231'
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
                    href="https://forms.gle/3rHp8hi9LSFAryGZ9"
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
                href="https://forms.gle/3rHp8hi9LSFAryGZ9"
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
                <img
                  alt="image"
                  src="/disabled-200h.png"
                  className="home-image01"
                />
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
                <img alt="image" src="/job-200h.png" className="home-image02" />
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
                <img
                  alt="image"
                  src="/assistance-200h.png"
                  className="home-image03"
                />
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
        <div className="home-container02">
          <iframe
            src="https://www.youtube.com/embed/yxQWzpKC-JM"
            className="home-iframe"
          ></iframe>
          <iframe
            src="https://www.youtube.com/embed/90ky8sUA330"
            className="home-iframe1"
          ></iframe>
        </div>
        <section className="home-mission">
          <div className="home-content01">
            <div className="home-main1">
              <span className="home-title">Acerca de la fundación:</span>
              <div className="home-header01">
                <h2 id="nosotros" className="home-heading1">
                  Empoderando habilidades, transformando vidas
                </h2>
                <p className="home-caption1">
                  En nuestra Fundación, nos apasiona el empoderamiento de las
                  personas con discapacidad. Desde 2014, hemos impulsado la
                  iniciativa COACHING PARA + MAS CAPACITADOS, enfocándonos en
                  fortalezas en lugar de vulnerabilidades. A través de nuestro
                  programa de coaching, transformamos vidas al desarrollar
                  habilidades blandas, promover el éxito laboral y potenciar la
                  confianza y autonomía de las personas con discapacidades.
                  Creemos en un mundo inclusivo donde todos puedan alcanzar su
                  máximo potencial y contribuir plenamente a la sociedad.
                </p>
              </div>
            </div>
            <div className="home-highlights">
              <div className="home-highlight">
                <h3 className="home-title1">Acción</h3>
                <p className="home-description">
                  ¡Unidos por la inclusión! Trabajamos para mitigar y/o derribar
                  barreras y promover la igualdad de oportunidades para personas
                  con discapacidad.
                </p>
              </div>
              <div className="home-highlight1">
                <h3 className="home-title2">Transformar</h3>
                <p className="home-description1">
                  ¡Juntos hacia el empoderamiento! Nuestro programa de coaching
                  transforma vidas, desarrollando habilidades y fortaleciendo la
                  confianza de las personas con discapacidad.
                </p>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-row">
              <img
                alt="image"
                src="/screenshot%202023-06-20%2011.52.33-400w.png"
                className="home-image04"
              />
              <img
                alt="image"
                src="/screenshot%202023-06-20%2011.55.23-400w.png"
                className="home-image05"
              />
            </div>
          </div>
        </section>
        <section className="home-petitions">
          <div className="home-images1">
            <img
              alt="image"
              src="/graduacion%20en%20funglode%20(1)-1400w.png"
              className="home-image06"
            />
          </div>
          <div className="home-content02">
            <div className="home-main2">
              <div className="home-header02">
                <h2 className="home-heading2">Misión</h2>
                <p className="home-caption2">
                  Somos una organización que se dedica a impulsar y potenciar el
                  desarrollo humano y fomentamos el empoderamiento de las
                  personas en condición de discapacidad para lograr su inclusión
                  efectiva en el mercado laboral, orientados en sus capacidades
                  y habilidades.
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
                  Ser líder nacional con miras a posicionamiento internacional,
                  como la organización que trabaja potenciando el desarrollo de
                  las personas en condición de discapacidad y su empoderamiento,
                  para el logro efectivo de su inclusión en el mercado laboral,
                  desde un enfoque de derechos y en igualdad de oportunidades.
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
                  <span className="home-text05">¡Quiero trabajar!</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-features">
          <h1 className="home-text06">Servicios para empresas</h1>
          <div className="home-container03">
            <FeatureCard22></FeatureCard22>
            <FeatureCard21></FeatureCard21>
            <FeatureCard23></FeatureCard23>
            <FeatureCard231></FeatureCard231>
          </div>
        </div>
        <div className="home-features1">
          <h1 className="home-text07">Servicios para personas</h1>
          <div className="home-container04">
            <FeatureCard24></FeatureCard24>
            <FeatureCard25></FeatureCard25>
            <FeatureCard27></FeatureCard27>
            <FeatureCard28></FeatureCard28>
          </div>
        </div>
        <div className="home-donate">
          <div className="home-content04">
            <div className="home-steps1">
              <h1 className="home-text08">
                ¿Cuál es el proceso de contratación?
              </h1>
              <div className="home-container05">
                <div className="home-step">
                  <div className="home-container06">
                    <div className="home-line"></div>
                    <div className="home-container07">
                      <img
                        src="/selection-200h.png"
                        alt="image"
                        className="home-image07"
                      />
                    </div>
                    <div className="home-line1"></div>
                  </div>
                  <div className="home-container08">
                    <h1 className="home-text09">Identificación</h1>
                  </div>
                </div>
                <div className="home-step1">
                  <div className="home-container09">
                    <div className="home-line2"></div>
                    <div className="home-container10">
                      <img
                        src="/hired-200h.png"
                        alt="image"
                        className="home-image08"
                      />
                    </div>
                    <div className="home-line3"></div>
                  </div>
                  <div className="home-container11">
                    <h1 className="home-text10">Solicitud</h1>
                  </div>
                </div>
                <div className="home-step2">
                  <div className="home-container12">
                    <div className="home-line4"></div>
                    <div className="home-container13">
                      <img
                        src="/training-200h.png"
                        alt="image"
                        className="home-image09"
                      />
                    </div>
                    <div className="home-line5"></div>
                  </div>
                  <div className="home-container14">
                    <h1 className="home-text11">Recepción de cantidatos</h1>
                  </div>
                </div>
                <div className="home-step3">
                  <div className="home-container15">
                    <div className="home-line6"></div>
                    <div className="home-container16">
                      <img
                        src="/skills-200h.png"
                        alt="image"
                        className="home-image10"
                      />
                    </div>
                    <div className="home-line7"></div>
                  </div>
                  <div className="home-container17">
                    <h1 className="home-text12">Ajustes adicionales</h1>
                  </div>
                </div>
              </div>
              <span className="home-text13">
                Nuestro servicio de reclutamiento y selección para personas en
                condición de discapacidad sigue un proceso claro y eficiente. La
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
          <div className="home-container18">
            <div className="home-header05">
              <h2 id="como-ayudar" className="home-heading5">
                ¿Cómo las empresas pueden colaborar?
              </h2>
              <p className="home-caption5">
                Descubre cómo puedes marcar la diferencia y fomentar la
                inclusión al unirte a nuestra iniciativa. A través de
                patrocinios, contratación de servicios, participación en eventos
                benéficos y apadrinamiento de programas, puedes contribuir
                activamente a la integración laboral y al desarrollo personal de
                personas en condición de discapacidad. Además, al utilizar
                nuestro centro de reclutamiento, tendrás la oportunidad de
                encontrar talento diverso y brindar oportunidades laborales
                inclusivas.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div className="home-container19">
                <img
                  src="/thumbnail_erika%20rdfw-300h.jpg"
                  alt="image"
                  className="home-image11"
                />
                <img
                  src="/thumbnail_vicente%20rdfw-300h.jpg"
                  alt="image"
                  className="home-image12"
                />
              </div>
            </div>
          </div>
          <div className="home-accordion">
            <div
              data-role="accordion-container"
              className="accordion-element home-element"
            >
              <div className="home-header06">
                <h3 className="home-text14">
                  1. Patrocina la Inclusión: Centro de Reclutamiento y Selección
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name4"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text15">
                  Haz la diferencia al patrocinar nuestro Centro de
                  Reclutamiento y Selección, brindando oportunidades laborales a
                  personas en condición de discapacidad. Impulsa la inclusión y
                  construye un equipo diverso y talentoso.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element1"
            >
              <div className="home-header07">
                <h3 className="home-text16">
                  2. Transformación Empresarial: Servicios para Empresas
                  Inclusivas
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name5"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text17">
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
                <h3 className="home-text18">
                  3. Uniendo Fuerzas: Eventos Benéficos para la Inclusión
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name6"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text19">
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
                <h3 className="home-text20">
                  4. Apadrina el Empoderamiento: Programa Coaching Para Más
                  Capacitados
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name7"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text21">
                  Haz una contribución significativa al apadrinar nuestro
                  programa Coaching Para Más Capacitados y a sus beneficiarios.
                  Impulsa el empoderamiento y el desarrollo humano de personas
                  en condición de discapacidad, brindándoles las herramientas
                  para alcanzar su máximo potencial.
                </p>
              </div>
            </div>
            <div
              data-role="accordion-container"
              className="accordion-element home-element4"
            >
              <div className="home-header10">
                <h3 className="home-text22">
                  5. Vacantes Inclusivas: Centro de Búsqueda y Contratación
                </h3>
                <IconContainer rootClassName="icon-container-root-class-name8"></IconContainer>
              </div>
              <div data-role="accordion-content" className="accordion-content">
                <p className="home-text23">
                  Encuentra talento diverso y promueve la inclusión laboral al
                  colocar tus posiciones vacantes en nuestro Centro de Búsqueda
                  y Contratación. Descubre el potencial de personas en condición
                  de discapacidad y construye un equipo inclusivo y talentoso.
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
            <span id="contacto" className="home-text24">
              <span>
                809-740-7560
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text26">
                gissell.eusebiolifetransformer@gmail.com
              </span>
            </span>
            <span className="home-text27">
              Calle Eduardo Vicioso # 82, Edif. Isabel Michell 1, apto 3,
              Ensanche Bella Vista, Santo Domingo, Distrito Nacional, Republica
              Dominicana.
            </span>
          </div>
          <div className="home-bottom">
            <a
              href="https://dragoshosue.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-copyright"
            >
              Donated from all our ❤️… Drago’s House.
            </a>
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
            font-size: 36px;
            font-style: normal;
            font-family: Tahoma;
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
            background-image: url('https://storage-dragoshouse.b-cdn.net/foto%203era%20graduacion%20(1).jpeg');
            background-position: center;
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
            flex: 1;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: space-between;
          }
          .home-category {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image01 {
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
          .home-image02 {
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
            justify-content: flex-start;
          }
          .home-image03 {
            width: 32px;
            object-fit: cover;
          }
          .home-text04 {
            max-width: 282px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: var(--dl-size-size-maxwidth);
            height: var(--dl-size-size-xxlarge);
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-iframe {
            width: 400px;
            height: 200px;
            margin: var(--dl-space-space-oneandhalfunits);
          }
          .home-iframe1 {
            width: 400px;
            height: 200px;
            margin: var(--dl-space-space-oneandhalfunits);
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
            font-size: 36px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            line-height: 52px;
          }
          .home-caption1 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
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
            font-size: 28px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
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
            font-size: 28px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
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
          .home-image04 {
            width: 367px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .home-image05 {
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
          .home-image06 {
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
            font-size: 30px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
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
            font-size: 30px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
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
            background-color: #0075bc;
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
            color: var(--dl-color-gray-white);
            font-size: 45px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            line-height: 52px;
          }
          .home-caption4 {
            color: var(--dl-color-gray-white);
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
            background-color: #f47421;
          }
          .home-text05 {
            color: rgb(255, 255, 255);
          }
          .home-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .home-text06 {
            font-size: 28px;
            font-family: Tahoma;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container03 {
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
          }
          .home-text07 {
            font-size: 28px;
            font-family: Tahoma;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-container04 {
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
          .home-text08 {
            color: var(--dl-color-gray-black);
            font-size: 25px;
            font-family: Tahoma;
          }
          .home-container05 {
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
          .home-container06 {
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
          .home-container07 {
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
          .home-image07 {
            width: 25px;
            object-fit: cover;
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
          .home-container08 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text09 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Tahoma;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-step1 {
            width: 200px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container09 {
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
          .home-container10 {
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
          .home-image08 {
            width: 25px;
            object-fit: cover;
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
          .home-container11 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text10 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Tahoma;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-step2 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container12 {
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
          .home-container13 {
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
          .home-image09 {
            width: 25px;
            object-fit: cover;
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
          .home-container14 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Tahoma;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-step3 {
            width: 300px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-container15 {
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
          .home-container16 {
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
          .home-image10 {
            width: 25px;
            object-fit: cover;
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
          .home-container17 {
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .home-text12 {
            font-size: 18px;
            font-style: normal;
            text-align: center;
            font-family: Tahoma;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text13 {
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
          .home-container18 {
            width: 557px;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
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
            font-size: 24px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            line-height: 52px;
          }
          .home-caption5 {
            color: rgb(34, 34, 35);
            font-size: 18px;
            line-height: 27px;
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: center;
            align-items: center;
            justify-content: center;
          }
          .home-image11 {
            width: auto;
            height: var(--dl-size-size-xxlarge);
            margin: var(--dl-space-space-unit);
            object-fit: cover;
          }
          .home-image12 {
            width: auto;
            height: var(--dl-size-size-xxlarge);
            margin: var(--dl-space-space-unit);
            object-fit: cover;
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
          .home-text14 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text15 {
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
          .home-text16 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text17 {
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
          .home-text18 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text19 {
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
          .home-text20 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text21 {
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
          .home-text22 {
            color: rgb(34, 34, 35);
            font-size: 19px;
            font-style: normal;
            font-family: Tahoma;
            font-weight: 700;
            padding-right: var(--dl-space-space-unit);
          }
          .home-text23 {
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
            height: 687px;
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
          .home-text24 {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-family: Lora;
            font-weight: 500;
            line-height: 36px;
          }
          .home-text26 {
            font-size: 18px;
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
            color: var(--dl-color-gray-black);
            width: 100%;
            font-size: 12px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            line-height: 18px;
            text-decoration: none;
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
            .home-image06 {
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
            .home-text08 {
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
            .home-image05 {
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
            .home-container03 {
              grid-template-columns: 1fr;
            }
            .home-features1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container04 {
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
            .home-container05 {
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
            .home-container06 {
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
            .home-container08 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text09 {
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
            .home-container09 {
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
            .home-container11 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text10 {
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
            .home-container12 {
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
            .home-container14 {
              width: 100%;
              align-items: flex-start;
              padding-top: var(--dl-space-space-twounits);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-twounits);
              justify-content: space-between;
            }
            .home-text11 {
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
            .home-container15 {
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
            .home-container17 {
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
            .home-image04 {
              width: 200px;
            }
            .home-image05 {
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
            .home-container05 {
              padding-left: 0px;
            }
            .home-container08 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text09 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container11 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text10 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container14 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text11 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .home-container17 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-text12 {
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
            .home-text14 {
              font-size: 16px;
            }
            .home-text15 {
              line-height: 24px;
            }
            .home-element1 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text16 {
              font-size: 16px;
            }
            .home-text17 {
              line-height: 24px;
            }
            .home-element2 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text18 {
              font-size: 16px;
            }
            .home-text19 {
              line-height: 24px;
            }
            .home-element3 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text20 {
              font-size: 16px;
            }
            .home-text21 {
              line-height: 24px;
            }
            .home-element4 {
              gap: var(--dl-space-space-halfunit);
            }
            .home-text22 {
              font-size: 16px;
            }
            .home-text23 {
              line-height: 24px;
            }
            .home-footer {
              padding-top: var(--dl-space-space-threeunits);
            }
            .home-navigation-links {
              flex-direction: column;
            }
            .home-text24 {
              font-size: 18px;
              line-height: 40px;
            }
            .home-text27 {
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
