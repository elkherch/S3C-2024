/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect ,useState} from "react";
import Typed from "typed.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Button,Form, Row, Col,Table, Card } from "react-bootstrap";
import axios from "axios";
import logo from "../../assets/images/logo.png";
import "./acceil.css";

const scrollToId = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img
        src="https://z-p3-scontent.fnkc1-1.fna.fbcdn.net/v/t39.30808-6/272859844_106161358642329_679821423659054157_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHnJ1X4gnaKD_sQUt5pSvICl8jn3QeNjVCXyOfdB42NUHhnDylvLdv6f8c2076jANNDvtGd_1oHm91EDknehYIk&_nc_ohc=lV79L-EJD7oAb5ctBbn&_nc_pt=1&_nc_zt=23&_nc_ht=z-p3-scontent.fnkc1-1.fna&oh=00_AfBJJ2Hh9V3bd2RK5_c3JCXFAcs2iYNP9Z1MutCNrz1TzA&oe=66213A8F"
        alt="PRMT Logo"
        className="logo sc"
      />
      <div className="scc">
        <p className="s1">SC3'2024</p>
        <p className="s2">
          Plateforme développée par <b>SUPNUM</b>
        </p>
      </div>
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a
          onClick={() => scrollToId("home")}
          className="nav-link home"
          href="#home"
        >
          <i className="fas fa-house"></i>Accueil
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => scrollToId("formulaire")}
          className="nav-link home"
          href="#formulaire"
        >
          <i className="fas fa-pencil-alt"></i>Formulaire de participation
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => scrollToId("classement")}
          className="nav-link home"
          href="#classement"
        >
          <i className="fas fa-trophy"></i>Classement
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => scrollToId("about")}
          className="nav-link home"
          href="#about"
        >
          <i className="fas fa-info-circle"></i>À propos
        </a>
      </li>
      <li className="nav-item">
        <a
          onClick={() => scrollToId("contact")}
          className="nav-link home"
          href="#contact"
        >
          <i className="fas fa-envelope"></i>Contacter-nous
        </a>
      </li>

      <li className="nav-item">
        <Link to="/login" className="nav-link home">
          <i className="fa-solid fa-right-to-bracket"></i>Connexion
        </Link>
      </li>
    </ul>
  </nav>
);

const Countdown = ({ date }) => {
  useEffect(() => {
    const countDownDate = new Date(date).getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const countdownText = `${days} jours ${hours} heures ${minutes} minutes ${seconds} secondes`;
      document.getElementById(
        "demo"
      ).innerHTML = `<p class='mb-0 font-weight-bold text-uppercase'>${countdownText}</p>`;
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML =
          "Vous ne pouvez plus soumettre un dossier !";
      }
    }, 1000);
    return () => clearInterval(x);
  }, [date]);

  return (
    <div className="rounded bg-gradient-4 text-white shadow p-5 text-center mb-5">
      <p className="p2">
        Clôture de soumission des dossiers le{" "}
        {new Date(date).toLocaleDateString()}
      </p>
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
    <strong>Supnum</strong> &copy; 2021-2024. Tous droits réservés.
    <div className="float-right d-none d-sm-inline-block">
      <b>Version</b> 1.0
    </div>
  </footer>
);
const ImageSection = () => (
  <section className="image text-center">
    <Container>
      <div className="flex-container">
        <div className="text1-container">
          <div className="text-title">
            <p>
              SupNum 3C Rejoignez la compétition incontoumable du mois de
              Ramadan dédiée aux étudiants de L2 et 3 en informatique.
              Préparez-vous pour une série de défis couvrant différents domaines
              tels que le développement web et mobile, les bases de données, la
              complexité et la structure de données, la sécurité, la conception
              et le design, etc..
            </p>
            <a
          onClick={() => scrollToId("formulaire")}
          className="nav-link home"
          href="#formulaire"
        >Cliquez ici pour Participer</a>
          </div>
        </div>
        <div className="form-container">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </Container>
  </section>
);

const LaodingPage = () => {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [
        "Comité d’organisation du championnat SupNum <br>Coding Challenge Championship’2024 (S3C’2024)",
      ],
      typeSpeed: 65,
      backSpeed: 65,
      loop: true,
      smartBackspace: true,
      onComplete: function (self) {
        self.cursor.remove();
      },
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container center-content landing-page">
      <Navbar />
      <div className="card-body">
        <Countdown date="2023-12-31" />
      </div>
      <TextContainer />
      <ImageSection />
      <FormSection />
      <RankingSection />
      <AboutSection />
      <ContactSection />
      <section className="video">
        <h2>Vidéo promotionnelle</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/AmdIUZ_fTBs"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};
const FormSection = () => {
  const [logo, setLogo] = useState(null);

  const [teamData, setTeamData] = useState({
    team_name: '',
    slogan: '',
    leader_email: '',
    co_leader_email: '',
    member_emails: Array(6).fill(''),
  });

  const handleInputChange = (key, value, index = -1) => {
    if (index >= 0) { // Handle the array of emails
      const updatedMembers = [...teamData.member_emails];
      updatedMembers[index] = value;
      setTeamData({ ...teamData, member_emails: updatedMembers });
    } else { // Handle other inputs
      setTeamData({ ...teamData, [key]: value });
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('team_name', teamData.team_name);
    formData.append('slogan', teamData.slogan);
    formData.append('leader_email', teamData.leader_email);
    formData.append('co_leader_email', teamData.co_leader_email);
    formData.append('logo', logo);  
    teamData.member_emails.forEach((email, index) => {
        formData.append(`member_emails[${index}]`, email);
    });

    try {
        const response = await axios.post('http://localhost:3000/teams/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (response.status === 201 || response.status === 200) {
            console.log('Team added:', response.data);
        } else {
            console.error("Failed to add team:", response.statusText);
        }
    } catch (error) {
        console.error("Error adding team:", error);
    }
  };
  return (
    <section id="formulaire" className="form-section">
    <Container>
      <Row className="align-items-center">
        <Col md={6}>
          <div className="text-container">
            {/* <h2>Rejoignez notre compétition</h2> */}
            <p>Remplissez le formulaire de participation et préparez-vous à relever le défi!</p>
          </div>
        </Col>
        <Col md={6}>
          <Form onSubmit={handleSave}>
          <Form.Group className="mb-3">
              <Form.Label>Nom D'equipe</Form.Label>
              <Form.Control type="text"
               value={teamData.team_name}
               onChange={(e) => setTeamData({ ...teamData, team_name: e.target.value })}
                placeholder="Entrez Le Nom De Votre Equipe" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Devise</Form.Label>
              <Form.Control type="text"
              value={teamData.slogan}
              onChange={(e) => setTeamData({ ...teamData, slogan: e.target.value })}
              placeholder="Entrez votre devise" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Logo</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={(e) => setLogo(e.target.files[0])}/>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Chef d'équipe</Form.Label>
              <Form.Control type="text"
              value={teamData.leader_email}
              onChange={(e) => setTeamData({ ...teamData, leader_email: e.target.value })}
               placeholder="Mail du chef d'équipe" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Co-chef d'équipe</Form.Label>
              <Form.Control type="text"
              value={teamData.co_leader_email}
              onChange={(e) => setTeamData({ ...teamData, co_leader_email: e.target.value })}
               placeholder="Mail du co-chef d'équipe" required />
            </Form.Group>

            {teamData.member_emails.map((email, index) => (
                <Form.Group className="mb-3" key={index}>
                  <Form.Label>Membre {index + 1}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={`Mail du membre ${index + 1}`}
                    required={index < 4}  // Assuming the first 4 are required
                    value={email}
                    onChange={(e) => handleInputChange('member_emails', e.target.value, index)}
                  />
                </Form.Group>
              ))}

              <Button variant="primary" type="submit">
                S'inscrire maintenant
              </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </section>);
};
const RankingSection = () => (
    <section id="classement" className="ranking-section text-center">
      <Container>
        <div className="flex-container">
          <div className="text1-container">
            <h2>Classement Actuel</h2>
            <p>
              Consultez les classements actuels et voyez où vous vous situez parmi les concurrents.
            </p>
          </div>
          <div className="ranking-container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Club</th>
                  <th>Note</th>
                  <th>Médaille</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>404</td>
                  <td>98/100</td>
                  <td>🥇</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Hamas</td>
                  <td>95/100</td>
                  <td>🥈</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Let's Code</td>
                  <td>92/100</td>
                  <td>🥉</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
  
  const AboutSection = () => (
    <section id="about" className="about-section text-center">
      <Container>
        <div className="flex-container">
          <div className="text1-container">
            <div className="text-title">
              <h2>Découvrez SUPNUM</h2>
              <p>
                L'Institut Supérieur du Numérique (SUPNUM) est une institution de premier plan
                dédiée à l'enseignement des disciplines informatiques. Chez SUPNUM, nous offrons
                une formation approfondie dans des domaines de pointe tels que l'intelligence
                artificielle, l'apprentissage automatique, et plus encore. Nos programmes sont
                structurés autour de trois spécialités principales : Réseaux  Systèmes et
                Sécurité, Communications et Multimédia, et Développement de Systèmes Informatiques.
                Nous nous engageons à soutenir notre communauté en fournissant les compétences
                nécessaires pour exceller dans le monde numérique rapide d'aujourd'hui. Nos
                efforts sont dédiés à préparer les étudiants à devenir les leaders technologiques
                de demain.
              </p>
              <a href="#">En savoir plus</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
  
  const ContactSection = () => (
    <section id="contact" className="contact-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="contact-info">
            <h2>Contactez-Nous</h2>
            <p>Vous avez des questions ou avez besoin d'assistance ? Contactez-nous dès maintenant !</p>
          </Col>
          <Col md={6} className="contact-form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre nom" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Votre message" />
              </Form.Group>
              <Button variant="primary" type="submit">Envoyer</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
  

export default LaodingPage;
