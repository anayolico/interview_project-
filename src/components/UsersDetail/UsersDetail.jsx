import React from 'react';
import './UsersDetail.css';

/**
 * PROPS:
 * 'user' is the person we are currently looking at (passed from App.jsx).
 */
const UsersDetail = ({ user }) => {
  // If no user is selected yet, show a message
  if (!user) return <div className="no-selection">Select a team member to view details</div>;

  return (
    <div className="detail-container">
      {/* 1. Header section: Profile pic, name, and download button */}
      <div className="detail-header">
        <div className="header-left">
          <img src={user.avatar} alt={user.name} className="large-avatar" />
          <div>
            <h2 className="detail-name">{user.name}</h2>
            <p className="location">📍 Lagos, Nigeria</p>
          </div>
        </div>
        <button className="btn-download">
          <span className="icon">📥</span> Download Report
        </button>
      </div>

      {/* 2. Quick Tags (Rating and Email) */}
      <div className="detail-tags">
        <div className="tag rating">⭐ {user.rating} <span className="trend">+0.3% From last cycle</span></div>
        <div className="tag email">📧 {user.name.toLowerCase().replace(' ', '.')}@fowgate.com</div>
      </div>

      {/* 3. Info Grid: Showing Role, Dept, and Manager */}
      <div className="info-grid">
        <div className="info-item">
          <label>Role</label>
          <p>{user.role}</p>
        </div>
        <div className="info-item">
          <label>Department</label>
          <p>Marketing</p>
        </div>
        <div className="info-item">
          <label>Reporting Manager</label>
          <p>Noah Jenkins</p>
        </div>
      </div>

      {/* 4. Self Appraisal Section (The Radio buttons) */}
      <div className="appraisal-section">
        <div className="section-title">
          <h3>Self Appraisal</h3>
          <div className="badge-group">
            <span className="date-badge">24 Dec, 2024 - Q3</span>
            <span className="rating-badge">Rating 4.0</span>
          </div>
        </div>

        {/* Question Item */}
        <div className="question-row">
          <p className="question-text">Improvement in certain areas</p>
          <div className="radio-group">
            {[5, 4, 3, 2, 1].map(num => (
              <label key={num} className="radio-label">
                <input type="radio" name="q1" defaultChecked={num === 4} />
                <span className="num">{num}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question Item */}
        <div className="question-row">
          <p className="question-text">Understanding of the role</p>
          <div className="radio-group">
            {[5, 4, 3, 2, 1].map(num => (
              <label key={num} className="radio-label">
                <input type="radio" name="q2" defaultChecked={num === 3} />
                <span className="num">{num}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Question Item */}
        <div className="question-row">
          <p className="question-text">Performance goals achievement</p>
          <div className="radio-group">
            {[5, 4, 3, 2, 1].map(num => (
              <label key={num} className="radio-label">
                <input type="radio" name="q3" defaultChecked={num === 5} />
                <span className="num">{num}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Submit Button */}
      <div className="footer-actions">
        <button className="btn-submit">Submit Appraisal</button>
      </div>
    </div>
  );
};

export default UsersDetail;
