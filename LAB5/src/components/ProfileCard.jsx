import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ name, role, initialLikes, imageUrl }) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div className="profile-card">
      <div className="card-header">
        <img src={imageUrl} alt={`${name}'s avatar`} className="avatar-img" />
      </div>
      <div className="card-body">
        <h2>{name}</h2>
        <p className="role">{role}</p>
      </div>
      <div className="interaction-section">
        <div className="likes-count">
          <span className="heart-icon">❤️</span> {likes}
        </div>
        <button 
          onClick={handleLike} 
          className={`like-btn ${liked ? 'liked' : ''}`}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
