import React from 'react';
import { X, Star, ChevronDown } from 'lucide-react';
import './UserModal.css';

const UserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose}></div>
      
      {/* Slide-in Modal */}
      <div className={`modal-container ${isOpen ? 'open' : ''}`}>
        
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-left">
            <img src={user.avatar} alt={user.name} className="modal-avatar" />
            <h2 className="modal-title">My Appraisal Report</h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="modal-content">
          
          <div className="date-filter">
            <span className="date-text">24 Dec, 2024 - <span className="highlight-q3">Q3</span></span>
            <ChevronDown size={14} className="dropdown-icon" />
          </div>

          {/* Team Appraisal Section */}
          <div className="appraisal-section">
            <div className="section-header">
              <h3>Team Appraisal</h3>
              <div className="rating-badge blue-badge">
                <span className="rating-label">Rating</span>
                <span className="rating-value">4.0</span>
              </div>
            </div>
            <div className="section-body">
              <div className="rating-row">
                <span className="rating-desc">Takes responsibility of his actions</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>3.0</span>
                </div>
              </div>
              <div className="rating-row">
                <span className="rating-desc">Listens to colleagues and accepts other's ideas</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>4.0</span>
                </div>
              </div>
              <div className="rating-row">
                <span className="rating-desc">Takes ownership of tasks</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Line Manager's Appraisal Section */}
          <div className="appraisal-section">
            <div className="section-header">
              <h3>Line Manager's Appraisal</h3>
              <div className="rating-badge blue-badge">
                <span className="rating-label">Rating</span>
                <span className="rating-value">4.0</span>
              </div>
            </div>
            <div className="section-body">
              <div className="rating-row">
                <span className="rating-desc">Follows company rules, regulation and procedures</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>4.0</span>
                </div>
              </div>
              <div className="rating-row">
                <span className="rating-desc">Communicates precisely and gets what is needed</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>3.0</span>
                </div>
              </div>
              <div className="rating-row">
                <span className="rating-desc">Has good work ethics</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>4.0</span>
                </div>
              </div>
              <div className="rating-row">
                <span className="rating-desc">Helps colleagues whenever needed</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Self Appraisal Section */}
          <div className="appraisal-section">
            <div className="section-header">
              <h3>Self Appraisal</h3>
              <div className="rating-badge blue-badge">
                <span className="rating-label">Rating</span>
                <span className="rating-value">4.5</span>
              </div>
            </div>
            <div className="section-body">
              <div className="rating-row">
                <span className="rating-desc">Improvement in certain areas</span>
                <div className="rating-score">
                  <Star size={14} className="star-icon filled" /> <span>5.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="footer-close-btn" onClick={onClose}>Close</button>
        </div>

      </div>
    </>
  );
};

export default UserModal;
