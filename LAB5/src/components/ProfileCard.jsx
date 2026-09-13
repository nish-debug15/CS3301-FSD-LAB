import React, { useState } from 'react';
import './ProfileCard.css';

// The component accepts 'props' (name, role, initialLikes) from the parent
function ProfileCard({ name, role, initialLikes }) {
  // Using React state to manage the likes count
  const [likes, setLikes] = useState(initialLikes);

  // Event handler for button click
  const handleLike = () => {
    // Updates state, which automatically triggers a re-render of this specific component
    setLikes(likes + 1);
  };

  return (
    <div className="profile-card">
      <div className="avatar">👤</div>
      <h2>{name}</h2>
      <p className="role">{role}</p>
      
      <div className="interaction-section">
        <p>Likes: <strong>{likes}</strong></p>
        <button onClick={handleLike} className="like-btn">
          👍 Like
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
