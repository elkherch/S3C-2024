/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './acceil.css';


const Navbar = () => (
    <nav className="navbar">
        <div className="logo-container">
            <img src='https://z-p3-scontent.fnkc1-1.fna.fbcdn.net/v/t39.30808-6/272859844_106161358642329_679821423659054157_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHnJ1X4gnaKD_sQUt5pSvICl8jn3QeNjVCXyOfdB42NUHhnDylvLdv6f8c2076jANNDvtGd_1oHm91EDknehYIk&_nc_ohc=lV79L-EJD7oAb5ctBbn&_nc_pt=1&_nc_zt=23&_nc_ht=z-p3-scontent.fnkc1-1.fna&oh=00_AfBJJ2Hh9V3bd2RK5_c3JCXFAcs2iYNP9Z1MutCNrz1TzA&oe=66213A8F' alt="PRMT Logo" className="logo sc" />
            <div className="scc">
                <p className='s1'>SC3'2024</p>
                <p className='s2'>Plateforme développée par <b>SUPNUM</b></p>
            </div>
        </div>
        <div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link home"><i className="fas fa-house"></i>Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link to="/formulaire" className="nav-link home"><i className="fas fa-pencil-alt"></i>Formulaire de participation</Link>
                </li>
                <li className="nav-item">
                    <Link to="/classement" className="nav-link home"><i className="fas fa-trophy"></i>Classement</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link home"><i className="fas fa-info-circle"></i>À propos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link home"><i className="fa-solid fa-right-to-bracket"></i>Connexion</Link>
                </li>
            </ul>
        </div>
    </nav>
);



const Countdown = ({ date }) => {
    useEffect(() => {
        const countDownDate = new Date(date).getTime();
        const x = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const countdownText = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
            document.getElementById("demo").innerHTML = `<p class='mb-0 font-weight-bold text-uppercase'>${countdownText}</p>`;
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "Vous ne pouvez plus soumettre un dossier !";
            }
        }, 1000);
        return () => clearInterval(x);
    }, [date]);

    return (
        <div className="rounded bg-gradient-4 text-white shadow p-5 text-center mb-5">
            <p className="p2">Clôture de soumission des dossiers le {new Date(date).toLocaleDateString()}</p>
            <div id="clock-c" className="countdown py-4"></div>
            <p id="demo"></p>
        </div>
    );
};

const TextContainer = () => (
    <div className="text-container">
        <div>
            <h1 id="typed-text"></h1>
            {/* <p>SupNum 3C Rejoignez la compétition incontoumable du mois 
                de Ramadan dédiée aux<br/> étudiants de L2 et 3 en informatique.
             Préparez-vous pour une série de défis couvrant différents domaines tels que le développement web et mobile,
             <br/> les bases de données, la complexité et la structure de données, la sécurité, la conception et le design, etc..</p>
            <a href="#">Cliquez ici pour Participer</a> */}
        </div>
        
    </div>
);

const Footer = () => (
    <footer className="main-footer">
        <strong>Supnum</strong> &copy; 2021-2023. Tous droits réservés.
        <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0
        </div>
    </footer>
);

const LaodingPage = () => {
    useEffect(() => {
        const typed = new Typed('#typed-text', {
            strings: ["Bienvenue<br>Sur la Plateforme Supnum 3C"],
            typeSpeed: 65,
            backSpeed: 65,
            loop: true,
            smartBackspace: true,
            onComplete: function (self) {
                self.cursor.remove();
            }
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="container center-content">
            <Navbar /> {/* Utilisez simplement Navbar ici */}
            <div className="card-body">
                <Countdown date="2023-12-31" />
            </div>
            <TextContainer />
        </div>
    );
};

export default LaodingPage;