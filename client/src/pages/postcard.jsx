import React, { useState } from 'react';
import './postcard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const PostCard = ({ author, date, content }) => {
    const [comment, setComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const submitComment = () => {
        // Logique pour soumettre le commentaire
        console.log('Comment submitted:', comment);
        // Réinitialiser le commentaire après la soumission
        setComment('');
    };

    return (
        <div className="post-card">
            <div className="post-card-header">
                <div className="post-card-author">
                    <img src={author.profilePic} alt={`${author.name} profile`} className="post-card-profile-pic" />
                    <div>
                        <p className="post-card-author-name">{author.name}</p>
                        <p className="post-card-date">{date}</p>
                    </div>
                </div>
                <div className="post-card-options">...</div>
            </div>
            <div className="post-card-content">
                <p>{content}</p>
            </div>
            <div className="post-card-footer">
                <input
                    type="text"
                    className="post-card-comment-input"
                    placeholder="Ajouter un commentaire au cours..."
                    value={comment}
                    onChange={handleCommentChange}
                />
                <button onClick={submitComment}>
    <FontAwesomeIcon icon={faArrowRight} />
</button>
            </div>
        </div>
    );
};

export default PostCard;
