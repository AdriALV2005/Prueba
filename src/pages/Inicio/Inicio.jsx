import React from 'react'


const Inicio = () =>{
  return (
 
  <> 
    {/* Banner Section */}
    <section className="banner-section style-three">
      <div className="banner-carousel owl-carousel">
        <div className="slide-item one">
          <div className="image-layer" style={{ backgroundImage: "url('../../assets/images/slider/fondo1.webp')" }}></div>
          <div className="container">
            <div className="slider-content style-two three wow animate__slideInLeft">
              <div className="slider-sub-title">
                <h4>7 años en el mercado</h4>
              </div>
              <div className="slider-main-title">
                <h1>Precisíon, innovación y compromiso</h1>
              </div>
              <div className="slider-discripton">
                <p>7 años de experiencia en el ámbito de la topografía urbana y rústica, peritaje de lindes, escaneos y mapeados en tres dimensiones, seguimiento de obras e inspección de drones.</p>
              </div>
              <div className="eulding-btn">
                <a href="#">mas info <i className="bi bi-arrow-up-right-circle-fill"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="slide-item two">
          <div className="image-layer" style={{ backgroundImage: "url('../../assets/images/slider/fondo2.avif')" }}></div>
          <div className="container">
            <div className="slider-content style-two three wow animate__slideInLeft">
              <div className="slider-sub-title">
                <h4>Servicios de Topografía Profesionales</h4>
              </div>
              <div className="slider-main-title">
                <h1>La Mejor Solución</h1>
                <h1>Para Tus Necesidades de Topografía</h1>
              </div>
              <div className="slider-discripton">
                <p>Ofrecemos servicios de topografía de alta calidad que se ajustan a tu presupuesto. Con los mejores paquetes de servicios, hacemos realidad tus proyectos con precisión y eficiencia.</p>
              </div>
              <div className="eulding-btn">
                <a href="#">Leer Más <i className="bi bi-arrow-up-right-circle-fill"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* About Area */}
    <div className="about-area style-three wow animate__slideInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-thumb wow animate__slideInUp">
              <img src="assets/images/about/imagen1.webp" alt="Imagen de topografía" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="section-title">
              <div className="section-sub-title">
                <h4>Servicios de Topografía Superiores</h4>
              </div>
              <div className="section-main-title about">
                <h2>Realizamos la Mejor Topografía</h2>
                <h2>Con Gran Pasión</h2>
              </div>
            </div>
            <div className="about-content wow animate__slideInUp">
              <div className="about-discribtion">
                <p>Ofrecemos servicios de topografía de alta calidad. Nuestro equipo de expertos está comprometido con la satisfacción del cliente y la precisión en cada proyecto.</p>
              </div>
              <div className="about-list">
                <ul>
                  <li><i className="bi bi-check2-circle"></i> Gestión de Proyectos de Topografía</li>
                  <li><i className="bi bi-check2-circle"></i> Expertos en Topografía</li>
                  <li><i className="bi bi-check2-circle"></i> Garantía de Satisfacción 100%</li>
                  <li><i className="bi bi-check2-circle"></i> Compromiso con los Clientes</li>
                  <li><i className="bi bi-check2-circle"></i> Topografía y Cartografía</li>
                </ul>
              </div>
              <div className="about-bottom">
                <div className="eulding-btn about">
                  <a href="#">Ver más información <i className="bi bi-arrow-up-right-circle-fill"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action Area */}
    <div className="call-do-action-area style-two wow animate__slideInUp">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="call-do-title style-two">
              <h2 className="negrita">Grupo Wasichay</h2>
              <h2 className="negrita">tu mejor aliado</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="single-video style-three text-center">
              <div className="video-icon style-three">
                <a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://www.youtube.com/watch?v=LBw8Wov7f6A"><i className="bi bi-play"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Service Area */}
    <div className="service-area style-three animate__slideInUp">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="section-sub-title">
                <h4>Nuestros Servicios de Topografía</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-items-box-two wow animate__slideInUp">
              <div className="service-items-title">
                <h4><a href="service-details.html">Levantamiento Topográfico</a></h4>
              </div>
              <div className="service-items-content-two">
                <p>Realizamos levantamientos topográficos precisos para diversos proyectos de construcción.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-items-box-two wow animate__slideInUp">
              <div className="service-items-title">
                <h4><a href="service-details.html">Cartografía y <br /> GIS</a></h4>
              </div>
              <div className="service-items-content-two">
                <p>Elaboramos mapas detallados y utilizamos sistemas de información geográfica (GIS) para análisis.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-items-box-two wow animate__slideInUp">
              <div className="service-items-title">
                <h4><a href="service-details.html">Servicio de <br />Geodesia</a></h4>
              </div>
              <div className="service-items-content-two">
                <p>Servicios geodésicos que incluyen la medición y representación de la tierra y sus fenómenos.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-items-box-two wow animate__slideInUp">
              <div className="service-items-title">
                <h4><a href="service-details.html">Fotogrametría</a></h4>
              </div>
              <div className="service-items-content-two">
                <p>Utilizamos técnicas de fotogrametría para obtener mapas y planos a partir de fotografías aéreas y terrestres.</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="eulding-btn text-center">
            <div className="eulding-btn service">
              <a href="#">Descubre más servicios</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Clientes Section */}
    <div className="col-lg-12">
      <div className="section-title text-center">
        <div className="section-sub-title">
          <h4>Nuestros Clientes</h4>
        </div>
      </div>
    </div>

    <div className="brand-area wow animate__slideInUp">
      <div className="container-fluid">
        <div className="row">
          <div className="brand_list owl-carousel">
            <div className="col-lg-12">
              <div className="brand-thumb">
                <a href="#"><img src="assets/images/clientes/los olivos.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="brand-thumb">
                <a href="#"><img src="assets/images/clientes/file.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="brand-thumb">
                <a href="#"><img src="https://seeklogo.com/images/M/municipalidad-san-martin-de-porres-logo-E510E1ABA6-seeklogo.com.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="brand-thumb">
                <a href="#"><img src="assets/images/brand/brand4.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="brand-thumb">
                <a href="#"><img src="assets/images/brand/brand5.png" alt="" /></a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="brand-thumb">
                <a href="#"><img src="assets/images/brand/brand6.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Inicio