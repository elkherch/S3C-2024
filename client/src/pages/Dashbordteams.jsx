import React from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/badge/Badge'
import photo from '../assets/images/per.png'
import PostCard from './postcard';

import './Dashbordteam.css'
const Navbar = () => (
    <nav className="navbar1">
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
                    <Link to="/formulaire" className="nav-link home"><i className="fas fa-pencil-alt"></i>traveuu et devoir</Link>
                </li>
                <li className="nav-item">
                    <Link to="/classement" className="nav-link home"><i className="fas fa-trophy"></i>personne</Link>
                </li>
            </ul>
        </div>
    </nav>
);
const ChallengesDashboard = () => {
    const posts = [
        {
            id: 1,
            author: {
                name: "Meya Haroune",
                profilePic: photo // Remplacez par le chemin d'accès de l'image
            },
            date: "13 avr.",
            content: "Salam à tous, Je vous informe que l’application doit être développée entièrement en JavaScript."
        },
        {
            id: 2,
            author: {
                name: "Meya Haroune",
                profilePic: photo // Remplacez par le chemin d'accès de l'image
            },
            date: "15 avr.",
            content: "Salam à tgh gjngfxgf yfg bguh gvfybj ggfncg   yufyf b bjhfhj vjmf hmftnh mjfghgf nfnrtf."
        },
        // ... Autres posts
    ];
    
    const ChallengeCard = ({ challenge }) => {
        return (
            <div className="card">
                <div className="card__body">
                <p>{challenge.profileUrl && <img src={challenge.profileUrl} alt={`${challenge.name} profile`} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '50%' }} />}
                     {challenge.email}</p>
                    <h4>{challenge.name}</h4>
                    <p>{challenge.description}</p>
                    
                    <p><strong>Date:</strong> {challenge.date}</p>
                    <Badge type={challenge.status === "Completed" ? "success" : "warning"} content={challenge.status} />
                </div>
            </div>
        );
    };
    
    
    return (
        <div>
            <Navbar/>
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    author={post.author}
                    date={post.date}
                    content={post.content}
                />
            ))}
        </div>
    );
};

export default ChallengesDashboard;
