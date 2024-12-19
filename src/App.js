import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const App = () => {
  const [timeTogether, setTimeTogether] = useState({ years: 0, days: 0 });

  useEffect(() => {
    const startDate = new Date('2020-08-11');

    const calculateTime = () => {
      const now = new Date();
      const diffTime = Math.abs(now - startDate);
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const years = Math.floor(diffDays / 365);
      const days = diffDays % 365;
      setTimeTogether({ years, days });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 24 * 60 * 60 * 1000); // Atualiza a cada dia

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <header className="header">
        <h1>Partilhando uma Vida de Amor e Memórias</h1>
      </header>

      {/* Carrossel de Fotos */}
      <section className="carousel">
        <Swiper
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          <SwiperSlide>
            <img src="/images/foto1.jpg" alt="Memória 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/foto2.jpg" alt="Memória 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/foto4.jpg" alt="Memória 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/foto3.jpg" alt="Memória 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/foto5.jpg" alt="Memória 5" />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Contador de Tempo */}
      <section className="counter">
        <h2>
          Estamos juntos há {timeTogether.years} anos e {timeTogether.days} dias 💕
        </h2>
      </section>

      <section>
        <p>Nosso amor construiu pontes indestrutíveis, e foi graças a esse amor que eu tive um sonho realizado: uma criança com o seu olhar.</p>
          <p>Eu vou estar para sempre ao seu lado, você me traz paz... e raiva, kkk.</p>
          <p>Eu não preciso sair para encontrar o amor, porque o que eu esperava há tanto tempo, eu já encontrei.</p>
          <p>Te amo hoje e sempre.
          </p>

          <p>Ass: Lulu Scofield</p>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <h4>Com todo meu amor, para nós. ❤️</h4>
      </footer>
    </div>
  );
};

export default App;