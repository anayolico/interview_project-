import React from 'react';
import './UserCard.css';

/**
 
 * 'user' is an object containing name, role, rating, etc.
 * 'isSelected' is a true/false value to show the blue highlight.
 * 'onClick' is a function passed from App.jsx to handle clicking.
 */
const UserCard = ({ user, isSelected, onClick }) => {
  return (
    <div 
      className={`user-card ${isSelected ? 'selected' : ''}`} 
      onClick={() => onClick(user)}
    >
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <div className="user-info">
        <h4 className="user-name">{user.name}</h4>
        <p className="user-role">{user.role}</p>
        <div className="user-rating">
          {/* Simple star display based on rating */}
          {"⭐".repeat(Math.floor(user.rating))} 
          <span className="rating-num">{user.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
