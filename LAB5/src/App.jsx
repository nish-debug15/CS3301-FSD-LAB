import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  const teamMembers = [
    { id: 1, name: "Alice Johnson", role: "Frontend Developer", initialLikes: 12, imageUrl: "https://i.pravatar.cc/150?img=1" },
    { id: 2, name: "Bob Smith", role: "Backend Developer", initialLikes: 5, imageUrl: "https://i.pravatar.cc/150?img=11" },
    { id: 3, name: "Charlie Davis", role: "UI/UX Designer", initialLikes: 24, imageUrl: "https://i.pravatar.cc/150?img=33" },
  ];

  return (
    <div className="app-container">
      <header className="hero-header">
        <h1>Team Profile Gallery</h1>
        <p className="subtitle">Built with React Components, Props, and State</p>
      </header>
      
      <div className="gallery">
        {teamMembers.map(member => (
          <ProfileCard 
            key={member.id} 
            name={member.name} 
            role={member.role} 
            initialLikes={member.initialLikes}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
