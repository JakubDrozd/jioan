import './App.css';
import { useState, useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    const targets = document.querySelectorAll('.animate-on-scroll');
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  const photos = [
    {
      embedUrl:
        'https://drive.google.com/file/d/1LTt3cA388zWVhKO9PS7jOvkSotDJA9NI/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1xOLXOijHGLWhDgBD7p5N6YHjDZ0XG9_W/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1KQdFki-8xv8xK99UAnXIkZdcBr82bDo-/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/14wwd5gDNfogoRxklCtLaNLVsjIRu7jPO/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1jniTZmL4diw-rKny6oNJtiV-upnoJQ-_/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1DYEWq8oUDpP1SFdGIIXfrm-a28J_9tFt/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1LEPVi9SoPb0bNOczIKVunw2BDpGq-Z5l/preview',

    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1BG853LgibHLPuw6goklzcALS1OaUQJBh/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/110gKgCc9zb2lXvPE1NIcI7Y-IuiZW2vk/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1T7x2HOgRqDn2aduOQikSZy8y2hOcBNN_/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1VxoI8wivKidh6buGf02dPWkKLBOXgxDK/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1cItjfeyhYTffJHVRPLanVCO3OB6SoTR6/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1pDuQfGuMVkG9PduplUpDd2cPnRIge44p/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/17jlT3ZM1L9GHDeFnc2AbZs6Rcq9DGm2x/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1Q-o7fkSOpWT6OKlojqU4WgaXaySIQ8VT/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1d4UHpPS_Z9XZrPYwMki9x0Iw2EPoh2KN/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/17ucJy_e0vKZPrpREC_R3IHNH89ets3Al/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1zYB6WhRvMVSr1SVdVni5uQ5pe2F5CgUh/preview',
    },
    {
      embedUrl:
        'https://drive.google.com/file/d/1TiXpvvq2eFtxviln54divGvUWOA5CZZA/preview',
    },
    {embedUrl:'https://drive.google.com/file/d/1FJqp9rjthP7c2xyhFgHxyAl6iglzyMxr/preview',},
    {embedUrl:'https://drive.google.com/file/d/1gRhMg_AVggvACPFBBRk-yn-u4hQzViSE/preview',},
    {embedUrl:'https://drive.google.com/file/d/1xvD2R-iAk9tnVIDmpaGKwh2UsyhM8c-n/preview',},
    {embedUrl:'https://drive.google.com/file/d/1vlU5ZjlHHOrdzO8lV4_ZUGtMegCphkwd/preview',},
    {embedUrl:'https://drive.google.com/file/d/17TK9yybWRIbPHeNDAiKK7uOL1ouesoC0/preview',},
    {embedUrl:'https://drive.google.com/file/d/1xqys-Z6yvDZsnsBgNp2Epg1UKt-yMuFi/preview',},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const startDate = new Date('2024-06-09T19:48:34'); // Data początkowa
    const updateElapsedTime = () => {
      const now = new Date();
      const elapsed = now - startDate;

      const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
      const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
      const seconds = Math.floor((elapsed / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    const timer = setInterval(updateElapsedTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Sekcja powitalna */}
      <section className="hero"  id="hero">
        <div className="hero-content">
          <h1 className="animate-on-scroll" style={{ color: 'white' }}>
            Hejka! ^^
          </h1>
        </div>
        <button className="scroll-button scroll-down" onClick={() => scrollToSection('explanation')}>
         ↓ 
        </button>
      </section>

      {/* Sekcja wyjaśniająca */}
      <section className="explanation" id="explanation">
      <button className="scroll-button scroll-up" onClick={() => scrollToSection('hero')}>
    ↑ 
  </button>
        <div className="explanation-content animate-on-scroll">
          <h1 style={{color: "#333"}}>Z racji tego, że rok 2024 jest bliski końca...</h1>
          <h2 style={{color: "#333"}}>Stworzyłem stronę, która ma upamiętnić nasze niektóre chwile razem 🎉</h2>
        </div>
        <button className="scroll-button scroll-down" onClick={() => scrollToSection('carousel')}>
        ↓ 
        </button>
      </section>

      {/* Sekcja z karuzelą */}
      <section className="carousel-section" id="carousel">
      <button className="scroll-button scroll-up" onClick={() => scrollToSection('explanation')}>
    ↑ 
  </button>
        <h1 className="animate-on-scroll section-title">Oto i one 🥰</h1>
        <div className="carousel">
          <button className="carousel-button" onClick={handlePrev}>
            &#10094;
          </button>
          <div className="carousel-content">
            <iframe
              src={photos[currentIndex].embedUrl}
              width="640"
              height="480"
              allow="autoplay"
              title="Nasze wspomnienia"
            ></iframe>
          </div>
          <button className="carousel-button" onClick={handleNext}>
            &#10095;
          </button>
        </div>
        <button className="scroll-button scroll-down" onClick={() => scrollToSection('memories')}>
        ↓ 
        </button>
      </section>

      {/* Sekcja wspomnień */}
      <section className="memories" id="memories">
      <button className="scroll-button scroll-up" onClick={() => scrollToSection('carousel')}>
    ↑ 
  </button>
        <div className="explanation-content animate-on-scroll">
          <h2>Oczywiście, to jedynie malutki ułamek tego wszystkiego</h2>
          <p>w końcu jesteśmy razem już</p>
        <h1 className='timer' style={{color: "#333"}}>
          {timeElapsed.days} dni<br />
          {timeElapsed.hours} godziny! <br />
          {timeElapsed.minutes} minuty{' '} <br />
          {timeElapsed.seconds} sekund
        </h1>
        <p>i było tego o wieeeele więcej!</p>
        </div>
        <button className="scroll-button scroll-down" onClick={() => scrollToSection('thanks')}>
        ↓ 
        </button>
      </section>

      {/* Sekcja podziękowań */}
      <section className="thanks" id="thanks">
      <button className="scroll-button scroll-up" onClick={() => scrollToSection('memories')}>
    ↑ 
  </button>
        <div className="explanation-content animate-on-scroll">
          <h2>Dziękuję za wszystkie wspólne chwile ❤️</h2>
          <p>Jesteś wspaniałą osobą i cieszę się że mogłem kogoś takiego poznać</p>
          <p>Mam nadzieje, że poznam Cię jeszcze i jeszcze bardziej!</p>
          <p>Słowa nie wyrażą w pełni tegop</p>
          <p>co chce przekazać</p>
          <p>dlatego stworzyłem te stronę.</p>
          <p>Nie jest to wiele, ale mam nadzieje, że Ci się spodoba!</p>
          <p style={{fontStyle: 'italic', fontSize: "2rem"}}>~Kuba</p>
        </div>
      </section>
    </>
  );
}

export default App;
