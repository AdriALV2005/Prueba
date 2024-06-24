import img1 from '../../../public/images/slider/fondo1.webp';
import img2 from '../../../public/images/slider/slider-2.jpg';
import img3 from '../../../public/images/slider/fondo2.avif';

const Slider = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100 carousel-img" alt="Primera diapositiva" />
                        <div className="carousel-caption">
                            <h5>Título 1</h5>
                            <p>Descripción breve de la imagen 1.</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={img2} className="d-block w-100 carousel-img" alt="Segunda diapositiva" />
                        <div className="carousel-caption">
                            <h5>Título 2</h5>
                            <p>Descripción breve de la imagen 2.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 carousel-img" alt="Tercera diapositiva" />
                        <div className="carousel-caption">
                            <h5>Título 3</h5>
                            <p>Descripción breve de la imagen 3.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </>
    );
};

export default Slider;