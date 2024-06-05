import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home = () => {
  const [isLight, setIsLight] = useState(false);

  const toggleMode = () => {
    setIsLight(!isLight);
  };

  useEffect(() => {
    if (isLight) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLight]);

  return (
    <div className={isLight ? 'light' : ''}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
        <title>Joao Paulo Santos</title>
      </Head>
      <div id="container">
        <div id="profile">
          <img src={isLight ? '/assets/perfil-light.png' : '/assets/perfil.png'} alt={isLight ? "Avatar Light de Joao Paulo Santos" : "Avatar Dark de Joao Paulo Santos"} />
          <p>Joao Paulo Santos</p>
        </div>
        <div id="switch" onClick={toggleMode}>
          <button></button>
          <span></span>
        </div>
        <ul>
          <li>
            <a href="#" target="_blank">1 Opç</a>
          </li>
          <li>
            <a href="#">2 Opç</a>
          </li>
          <li>
            <a href="#">3 Opç</a>
          </li>
          <li>
            <a href="https://wa.me/5534991870072" target="_blank">Fale comigo (WhatsApp)</a>
          </li>
        </ul>
        <div id="social-links">
          <a href="https://www.facebook.com/profile.php?id=100002394657349" target="_blank">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a href="https://www.instagram.com/jooao_paullo98/" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BMVPg1GqpS9eQjdl2xk7lug%3D%3D" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://github.com/joaopaulotap" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <footer>
          Feito por <a href="#">Joao Paulo Santos.</a>
        </footer>
      </div>
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default Home;