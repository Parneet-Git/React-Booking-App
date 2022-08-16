import React from 'react'
import './LandingPage.css'
import $ from 'jquery'

$(function () {
  $('.services-carousel-item').eq(0).addClass('active');
  var total = $('.services-carousel-item').length;
  var current = 0;
  $('#moveRight').on('click', function () {
    var next = current;
    current = current + 1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function () {
    var prev = current;
    current = current - 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next) {
    var slide = current;
    if (next > total - 1) {
      slide = 0;
      current = 0;
    }
    if (next < 0) {
      slide = total - 1;
      current = total - 1;
    }
    $('.services-carousel-item').eq(prev).removeClass('active');
    $('.services-carousel-item').eq(slide).addClass('active');
  }
});

export default function LandingPage() {

  return (
    <div>
      <section className="header">
        <h1 className="heading">
            Let's plan your trip right now, right here!!!
        </h1>

        <p className='heading-para'>Your comfort is our priority</p>

        <div className="buttons">
          <a href="">
          <button className="blob-btn">
            Get rooms
            <span className="blob-btn__inner">
              <span className="blob-btn__blobs">
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
                <span className="blob-btn__blob"></span>
              </span>
            </span>
          </button>
          </a>

          <a href="#services">
            <button className="blob-btn">
              Know More
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </a>
          <br />

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
      </section>

      <section id="services" className="services">

        <h1 className="heading">Services We Provide</h1>

        <div className="services-carousel">
          <div className="carousel__nav">
            <span id="moveLeft" className="carousel__arrow">
              <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
              </svg>
            </span>
            <span id="moveRight" className="carousel__arrow" >
              <svg className="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
              </svg>
            </span>
          </div>
          <div className="services-carousel-item carousel-item--1">
            <div className="carousel-item__image"></div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">The grand moment </h2>
                <h1 className="carousel-item__title">Le tour</h1>
                <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <a href="#" className="carousel-item__btn">Explore the tour</a>
              </div>
            </div>
          </div>
          <div className="services-carousel-item carousel-item--2">
            <div className="carousel-item__image"></div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">The big window </h2>
                <h1 className="carousel-item__title">Minimal window</h1>
                <p className="carousel-item__description">Clear Glass Window With Brown and White Wooden Frame iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                <a href="#" className="carousel-item__btn">Read the article</a>
              </div>
            </div>
          </div>
          <div className="services-carousel-item carousel-item--3">
            <div className="carousel-item__image"></div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">Tropical palms </h2>
                <h1 className="carousel-item__title">Palms</h1>
                <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <a href="#" className="carousel-item__btn">Explore the palms</a>
              </div>
            </div>
          </div>

          <div className="services-carousel-item carousel-item--4">
            <div className="carousel-item__image"></div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">Beach </h2>
                <h1 className="carousel-item__title">The beach </h1>
                <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <a href="#" className="carousel-item__btn">Explore the beach</a>
              </div>
            </div>
          </div>

          <div className="services-carousel-item carousel-item--5">
            <div className="carousel-item__image"></div>
            <div className="carousel-item__info">
              <div className="carousel-item__container">
                <h2 className="carousel-item__subtitle">The white building </h2>
                <h1 className="carousel-item__title">White building</h1>
                <p className="carousel-item__description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <a href="#" className="carousel-item__btn">Read the article</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
