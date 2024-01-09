import React, { useEffect } from 'react'
import "./About.css"
const About = () => {
  useEffect(() => {
    const slides = document.querySelector('.slides');
    const slideWidth = document.querySelector('.slide').clientWidth;
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let slideIndex = 0;
    console.log(slideWidth);

    function showSlide(index) {
      slides.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    console.log(slides.children.length);
    function nextSlide() {
      if (slideIndex < slides.children.length - 1) {
        slideIndex++;
        showSlide(slideIndex);
      }
      //else slideIndex = 0;
    }

    function prevSlide() {
      if (slideIndex > 0) {
        slideIndex--;
        showSlide(slideIndex);
      }
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Automatic slide change after 5 seconds
    setInterval(() => {
      nextSlide();
    }, 1000);

  }, []);
  return (
    <div className='border-2 border-red-500 h-full w-full' class="slider">
      <h1 className='text-6xl border-2 border-red-500 text-center m-5'>Abouts</h1>
      <div className='p-6 text-1xl border-2 border-red-500 m-5 text-center' class="slides">
        <div class="slide" className='border-2 border-red-500'><p>ProfNITT is the official Finance and Investment club of NIT Trichy. We are a close-knit community of finance enthusiasts from diverse backgrounds who take an interest in finance, stock market, options, and quants to spread the elegance of finance among the student community of NIT Trichy. </p></div>
        <div class="slide"><p>Being one of the pioneer fintech clubs of the institute, established in 2018, the melange of projects and domains that we, as Profnitt, delve into has always been ever-expanding. With the vision to  inculcate healthy and fruitful discussions on markets and the economical state of the world and provides an opportunity to students to get practical experience in the markets.
        </p></div>
        <div class="slide"><p> We also take part in competitions, fintech hackathons and symposiums in addition to conducting workshops and events to further the spirit of learning and growth among all.
        </p></div>
      </div>
        <button class="prev">◀</button> 
        <button class="next">▶</button> 
    </div>
  )
}

export default About