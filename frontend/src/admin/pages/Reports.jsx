import React, { useState } from 'react';
import { 
  FaChartBar, FaChartLine, FaChartPie, FaDownload, 
  FaArrowUp, FaArrowDown, FaMinus, FaCalendarAlt,
  FaUsers, FaStar, FaMoneyBillWave, FaCalendarCheck
} from 'react-icons/fa';
import './Reports.css';

const Reports = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [userReport, setUserReport] = useState('all');
  
  // Mock data - In a real app, this would come from your API
  const revenueData = [
    { month: 'Jan', earnings: 12500 },
    { month: 'Feb', earnings: 15300 },
    { month: 'Mar', earnings: 14700 },
    { month: 'Apr', earnings: 16800 },
    { month: 'May', earnings: 19200 },
    { month: 'Jun', earnings: 17500 },
    { month: 'Jul', earnings: 21000 },
    { month: 'Aug', earnings: 23400 }
  ];

  const topUsers = [
    { id: 1, name: 'Emma Watson', eventsJoined: 15, spending: 2500, lastActivity: '3 hours ago' },
    { id: 2, name: 'John Smith', eventsJoined: 12, spending: 1800, lastActivity: '1 day ago' },
    { id: 3, name: 'Sarah Johnson', eventsJoined: 10, spending: 1600, lastActivity: '2 days ago' },
    { id: 4, name: 'Michael Brown', eventsJoined: 8, spending: 1200, lastActivity: '5 hours ago' },
    { id: 5, name: 'Jennifer Davis', eventsJoined: 7, spending: 950, lastActivity: '12 hours ago' }
  ];

  const topCelebrities = [
    { id: 1, name: 'Brad Pitt', eventsHosted: 8, earnings: 35000, followers: 12500 },
    { id: 2, name: 'Taylor Swift', eventsHosted: 6, earnings: 28000, followers: 18900 },
    { id: 3, name: 'Leonardo DiCaprio', eventsHosted: 5, earnings: 22000, followers: 9700 },
    { id: 4, name: 'Angelina Jolie', eventsHosted: 4, earnings: 18000, followers: 8500 },
    { id: 5, name: 'Dwayne Johnson', eventsHosted: 4, earnings: 16500, followers: 11200 }
  ];

  const handleExport = (reportType) => {
    console.log(`Exporting ${reportType} report...`);
    // In a real app, you would generate and download a report here
    alert(`${reportType} report will be downloaded as CSV.`);
  };

  return (
    <div className="admin-reports-page">
      <h1 className="admin-page-title">Reports & Analytics</h1>
      
      <div className="admin-reports-header">
        <div className="admin-reports-filter">
          <span className="admin-reports-filter-label">Time Range:</span>
          <select 
            className="admin-reports-filter-select"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last 3 Months</option>
            <option value="year">Last 12 Months</option>
          </select>
        </div>
        
        <div className="admin-reports-actions">
          <button 
            className="admin-reports-export-btn"
            onClick={() => handleExport('Complete')}
          >
            <FaDownload /> Export All Data
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="admin-reports-stats">
        <div className="admin-report-stat-card">
          <h3 className="admin-report-stat-title">Total Revenue</h3>
          <div className="admin-report-stat-value">$184,320</div>
          <div className="admin-report-stat-change increase">
            <FaArrowUp className="trend-icon" /> 8.5% from last period
          </div>
        </div>
        
        <div className="admin-report-stat-card">
          <h3 className="admin-report-stat-title">Active Users</h3>
          <div className="admin-report-stat-value">2,845</div>
          <div className="admin-report-stat-change increase">
            <FaArrowUp className="trend-icon" /> 12.3% from last period
          </div>
        </div>
        
        <div className="admin-report-stat-card">
          <h3 className="admin-report-stat-title">Event Bookings</h3>
          <div className="admin-report-stat-value">756</div>
          <div className="admin-report-stat-change increase">
            <FaArrowUp className="trend-icon" /> 5.7% from last period
          </div>
        </div>
        
        <div className="admin-report-stat-card">
          <h3 className="admin-report-stat-title">Avg. Engagement Rate</h3>
          <div className="admin-report-stat-value">68.2%</div>
          <div className="admin-report-stat-change decrease">
            <FaArrowDown className="trend-icon" /> 2.1% from last period
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="admin-reports-charts-grid">
        <div className="admin-reports-chart-container">
          <div className="admin-chart-header">
            <h3 className="admin-chart-title">Monthly Revenue</h3>
            <div className="admin-chart-actions">
              <select className="admin-chart-period">
                <option>This Year</option>
                <option>Last Year</option>
                <option>All Time</option>
              </select>
              <button 
                className="admin-reports-export-btn"
                onClick={() => handleExport('Revenue')}
              >
                <FaDownload />
              </button>
            </div>
          </div>
          
          <div className="admin-chart-placeholder">
            <FaChartBar className="admin-chart-icon" />
            <p>Monthly revenue chart would display here</p>
            <p style={{ fontSize: '12px', color: '#666' }}>
              {revenueData.map(item => `${item.month}: $${item.earnings}`).join(' | ')}
            </p>
          </div>
        </div>
        
        <div className="admin-reports-chart-container">
          <div className="admin-chart-header">
            <h3 className="admin-chart-title">User Demographics</h3>
            <div className="admin-chart-actions">
              <button 
                className="admin-reports-export-btn"
                onClick={() => handleExport('Demographics')}
              >
                <FaDownload />
              </button>
            </div>
          </div>
          
          <div className="admin-chart-placeholder">
            <FaChartPie className="admin-chart-icon" />
            <p>User demographics pie chart would display here</p>
          </div>
        </div>
      </div>

      {/* User Reports */}
      <div className="admin-reports-tables-section">
        <div className="admin-chart-header">
          <h3 className="admin-chart-title">Top Users</h3>
          <div className="admin-chart-actions">
            <select 
              className="admin-chart-period"
              value={userReport}
              onChange={(e) => setUserReport(e.target.value)}
            >
              <option value="all">All Users</option>
              <option value="new">New Users</option>
              <option value="active">Most Active</option>
              <option value="spending">Top Spenders</option>
            </select>
            <button 
              className="admin-reports-export-btn"
              onClick={() => handleExport('Users')}
            >
              <FaDownload />
            </button>
          </div>
        </div>
        
        <div className="admin-reports-table-container">
          <table className="admin-reports-table">
            <thead>
              <tr>
                <th>User</th>
                <th>Events Joined</th>
                <th>Total Spending</th>
                <th>Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {topUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.eventsJoined}</td>
                  <td>${user.spending}</td>
                  <td>{user.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="admin-table-footer">
            <div className="admin-table-footer-info">
              Showing top 5 of 2,845 users
            </div>
            <div className="admin-table-pagination">
              <button className="admin-table-pagination-btn">1</button>
              <button className="admin-table-pagination-btn">2</button>
              <button className="admin-table-pagination-btn">3</button>
              <button className="admin-table-pagination-btn">...</button>
              <button className="admin-table-pagination-btn">57</button>
            </div>
          </div>
        </div>
      </div>

      {/* Celebrities Report */}
      <div className="admin-reports-tables-section">
        <div className="admin-chart-header">
          <h3 className="admin-chart-title">Top Celebrities</h3>
          <div className="admin-chart-actions">
            <select className="admin-chart-period">
              <option>By Earnings</option>
              <option>By Events Hosted</option>
              <option>By Followers</option>
            </select>
            <button 
              className="admin-reports-export-btn"
              onClick={() => handleExport('Celebrities')}
            >
              <FaDownload />
            </button>
          </div>
        </div>
        
        <div className="admin-reports-table-container">
          <table className="admin-reports-table">
            <thead>
              <tr>
                <th>Celebrity</th>
                <th>Events Hosted</th>
                <th>Total Earnings</th>
                <th>Followers</th>
              </tr>
            </thead>
            <tbody>
              {topCelebrities.map(celebrity => (
                <tr key={celebrity.id}>
                  <td>{celebrity.name}</td>
                  <td>{celebrity.eventsHosted}</td>
                  <td>${celebrity.earnings}</td>
                  <td>{celebrity.followers.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="admin-table-footer">
            <div className="admin-table-footer-info">
              Showing top 5 of 156 celebrities
            </div>
            <div className="admin-table-pagination">
              <button className="admin-table-pagination-btn">1</button>
              <button className="admin-table-pagination-btn">2</button>
              <button className="admin-table-pagination-btn">3</button>
              <button className="admin-table-pagination-btn">...</button>
              <button className="admin-table-pagination-btn">32</button>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Metrics */}
      <div className="admin-reports-charts-grid">
        <div className="admin-reports-chart-container">
          <div className="admin-chart-header">
            <h3 className="admin-chart-title">Event Types Distribution</h3>
            <div className="admin-chart-actions">
              <button 
                className="admin-reports-export-btn"
                onClick={() => handleExport('EventTypes')}
              >
                <FaDownload />
              </button>
            </div>
          </div>
          
          <div className="admin-chart-placeholder">
            <FaChartPie className="admin-chart-icon" />
            <p>Event types distribution chart would display here</p>
            <p style={{ fontSize: '12px', color: '#666' }}>
              Meet & Greet: 45% | Q&A Sessions: 25% | Performances: 15% | Charity: 10% | Other: 5%
            </p>
          </div>
        </div>
        
        <div className="admin-reports-chart-container">
          <div className="admin-chart-header">
            <h3 className="admin-chart-title">User Growth Trend</h3>
            <div className="admin-chart-actions">
              <button 
                className="admin-reports-export-btn"
                onClick={() => handleExport('UserGrowth')}
              >
                <FaDownload />
              </button>
            </div>
          </div>
          
          <div className="admin-chart-placeholder">
            <FaChartLine className="admin-chart-icon" />
            <p>User growth trend line chart would display here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
