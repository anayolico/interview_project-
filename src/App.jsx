import React, { useState } from 'react';
import { 
  LayoutGrid, User, MessageSquare, Briefcase, 
  CheckCircle, Calendar, UserPlus, Users, 
  Calculator, CalendarDays, ShieldCheck, 
  BarChart2, Settings, FileText, PieChart, Menu, X, ArrowLeft, Search
} from 'lucide-react';
import './App.css';
import UserCard from './components/UserCard/UserCard';
import UsersDetail from './components/UsersDetail/UsersDetail';
import UserModal from './components/UserModal/UserModal';

// MOCK DATA: This is our source of truth for the list of team members
const TEAM_MEMBERS = [
  { id: 1, name: 'Jane Smith', role: 'Marketing Manager', rating: 4.5, avatar: 'https://i.pravatar.cc/150?u=jane' },
  { id: 2, name: 'Samuel Adeyemi', role: 'Chief Marketing Officer', rating: 4.1, avatar: 'https://i.pravatar.cc/150?u=sam' },
  { id: 3, name: 'Grace Nwosu', role: 'Marketing Manager', rating: 4.5, avatar: 'https://i.pravatar.cc/150?u=grace' },
  { id: 4, name: 'Scott Pippen', role: 'Marketing Director', rating: 4.5, avatar: 'https://i.pravatar.cc/150?u=scott' },
  { id: 5, name: 'Mary Adkins', role: 'Brand Manager', rating: 4.5, avatar: 'https://i.pravatar.cc/150?u=mary' },
  { id: 6, name: 'Olawale Michael', role: 'Sales Marketer', rating: 3.5, avatar: 'https://i.pravatar.cc/150?u=ola' },
];

function App() {
  const [selectedUser, setSelectedUser] = useState(TEAM_MEMBERS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMobileDetail, setShowMobileDetail] = useState(false);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setShowMobileDetail(true);
  };

  return (
    <div className="dashboard-layout">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* 1. LEFT SIDEBAR */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="logo-section">
          <div className="logo-box">Fowgate</div>
        </div>
        
        <div className="sidebar-group">
          <p className="group-label">GENERAL</p>
          <div className="nav-item">
            <LayoutGrid className="nav-icon" /> Dashboard
          </div>
          <div className="nav-item active">
            <User className="nav-icon" /> My Account
          </div>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-group">
          <p className="group-label">COLLABORATION</p>
          <div className="nav-item">
            <MessageSquare className="nav-icon" /> Messages
          </div>
          <div className="nav-item">
            <Briefcase className="nav-icon" /> Projects
          </div>
          <div className="nav-item">
            <CheckCircle className="nav-icon" /> Approvals
          </div>
          <div className="nav-item">
            <Calendar className="nav-icon" /> Calendar
          </div>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-group">
          <p className="group-label">HCM</p>
          <div className="nav-item">
            <UserPlus className="nav-icon" /> ATS
          </div>
          <div className="nav-item">
            <Users className="nav-icon" /> Teams
          </div>
          <div className="nav-item">
            <Calculator className="nav-icon" /> Payroll
          </div>
          <div className="nav-item">
            <CalendarDays className="nav-icon" /> Company Calendar
          </div>
          <div className="nav-item">
            <ShieldCheck className="nav-icon" /> Compliance Management
          </div>
          <div className="nav-item">
            <BarChart2 className="nav-icon" /> Analysis & Reporting
          </div>
          <div className="nav-item">
            <Settings className="nav-icon" /> Settings
          </div>
        </div>

        <div className="sidebar-divider"></div>

        <div className="sidebar-group">
          <p className="group-label">OPERATIONS</p>
          <div className="nav-item">
            <FileText className="nav-icon" /> Business Entities
          </div>
          <div className="nav-item">
            <PieChart className="nav-icon" /> Reports
          </div>
        </div>
      </aside>

      {/* 2. MAIN CONTENT */}
      <main className="main-content">
        
        {/* Top Header */}
        <header className="header-top">
          <div className="header-left-mobile">
            <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="page-title">My Account</h1>
          </div>
          <div className="header-right">
            <div className="search-container">
              <input type="text" placeholder="Search here..." className="search-input" />
              <button className="mobile-search-btn">
                <Search size={20} />
              </button>
            </div>
            <div className="profile-pill">
              <img src="https://i.pravatar.cc/150?u=admin" alt="Admin" className="admin-avatar" />
              <span className="arrow">▼</span>
            </div>
          </div>
        </header>

        {/* Sub Navigation Bar */}
        <nav className="sub-nav">
          <span className="nav-link">My Profile</span>
          <span className="nav-link">Memo</span>
          <span className="nav-link">Calendar</span>
          <span className="nav-link">Leave Applications</span>
          <span className="nav-link">Paystub</span>
          <span className="nav-link">Timesheet</span>
          <span className="nav-link">Earnings</span>
          <span className="nav-link active">Appraisals</span>
          <span className="nav-link">Expense Claims</span>
          <span className="nav-link">Loans & Advances</span>
          <span className="nav-link">Files</span>
          <span className="nav-link">Cases</span>
        </nav>

        {/* Content Title Area */}
        <div className="content-title-bar">
          <h2>Appraisal Task</h2>
          <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>My Appraisal Report</button>
        </div>

        {/* The 2-Column Grid for Team List and Detail View */}
        <div className="appraisal-grid">
          
          {/* Left Column: Team List */}
          <div className={`list-column ${showMobileDetail ? 'hidden-on-mobile' : ''}`}>
            <div className="search-box">
              <input type="text" placeholder="Search name, department..." />
            </div>
            
            <div className="scroll-area">
              <p className="list-label">SELF APPRAISAL</p>
              <UserCard 
                user={TEAM_MEMBERS[0]} 
                isSelected={selectedUser.id === 1} 
                onClick={handleUserSelect} 
              />

              <p className="list-label">TEAM MEMBERS</p>
              {TEAM_MEMBERS.slice(1).map(member => (
                <UserCard 
                  key={member.id} 
                  user={member} 
                  isSelected={selectedUser.id === member.id}
                  onClick={handleUserSelect} 
                />
              ))}
            </div>
          </div>

          {/* Right Column: Detailed View */}
          <div className={`detail-column ${!showMobileDetail ? 'hidden-on-mobile' : ''}`}>
             <button className="mobile-back-btn" onClick={() => setShowMobileDetail(false)}>
               <ArrowLeft size={16} /> Back to List
             </button>
             <UsersDetail user={selectedUser} />
          </div>

        </div>
      </main>

      {/* Slide-in Modal */}
      <UserModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={selectedUser} 
      />
    </div>
  );
}

export default App;
