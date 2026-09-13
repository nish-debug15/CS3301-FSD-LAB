import React from 'react';
import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  // Array of data to pass as props to our components
  const teamMembers = [
    { id: 1, name: "Alice Johnson", role: "Frontend Developer", initialLikes: 0 },
    { id: 2, name: "Bob Smith", role: "Backend Developer", initialLikes: 5 },
    { id: 3, name: "Charlie Davis", role: "UI/UX Designer", initialLikes: 2 },
  ];

  return (
    <div className="app-container">
      <h1>Team Profile Gallery</h1>
      <p className="subtitle">Built with React Components, Props, and State</p>
      
      <div className="gallery">
        {/* We map over the array and reuse the ProfileCard component, passing data via props */}
        {teamMembers.map(member => (
          <ProfileCard 
            key={member.id} 
            name={member.name} 
            role={member.role} 
            initialLikes={member.initialLikes} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
