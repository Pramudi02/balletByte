import React from 'react';
import { 
  FaUsers, FaStar, FaCalendarAlt, FaExchangeAlt, 
  FaChartLine, FaChartBar, FaChartPie, FaMoneyBillWave
} from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="admin-page-title">Dashboard</h1>
      <div className="admin-dashboard-greeting">
        <div>
          <h2>Welcome back, Admin</h2>
          <p className="admin-dashboard-date">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
        <button className="admin-dashboard-refresh-btn">Refresh Dashboard</button>
      </div>
      
      <div className="admin-stats-container">
        <div className="admin-stat-card">
          <div className="admin-stat-icon user-icon">
            <FaUsers />
          </div>
          <div className="admin-stat-content">
            <h3>Total Users</h3>
            <p className="admin-stat-number">2,845</p>
            <p className="admin-stat-change positive">+12% <span>this week</span></p>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon celeb-icon">
            <FaStar />
          </div>
          <div className="admin-stat-content">
            <h3>Active Celebrities</h3>
            <p className="admin-stat-number">156</p>
            <p className="admin-stat-change positive">+5% <span>this week</span></p>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon event-icon">
            <FaCalendarAlt />
          </div>
          <div className="admin-stat-content">
            <h3>Upcoming Events</h3>
            <p className="admin-stat-number">48</p>
            <p className="admin-stat-change positive">+20% <span>this month</span></p>
          </div>
        </div>
        <div className="admin-stat-card">
          <div className="admin-stat-icon revenue-icon">
            <FaMoneyBillWave />
          </div>
          <div className="admin-stat-content">
            <h3>Total Revenue</h3>
            <p className="admin-stat-number">$184,320</p>
            <p className="admin-stat-change positive">+8% <span>this month</span></p>
          </div>
        </div>
      </div>

      <div className="admin-dashboard-grid">
        <div className="admin-dashboard-card admin-chart-container">
          <div className="admin-card-header">
            <h3>User Growth</h3>
            <div className="admin-card-actions">
              <select className="admin-select">
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
              </select>
            </div>
          </div>
          <div className="admin-chart">
            {/* Chart placeholder - in a real app, you would use a charting library like Chart.js or Recharts */}
            <div className="admin-chart-placeholder">
              <FaChartLine className="admin-chart-icon" />
              <p>User growth analytics chart</p>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <h3>Recent Activities</h3>
            <div className="admin-card-actions">
              <button className="admin-card-action-btn">View All</button>
            </div>
          </div>
          <div className="admin-activity-list">
            <div className="admin-activity-item">
              <div className="admin-activity-icon user-activity">
                <FaUsers />
              </div>
              <div className="admin-activity-content">
                <p><strong>Emma Stone</strong> registered as a new user</p>
                <span className="admin-activity-time">10 minutes ago</span>
              </div>
            </div>
            <div className="admin-activity-item">
              <div className="admin-activity-icon celeb-activity">
                <FaStar />
              </div>
              <div className="admin-activity-content">
                <p><strong>John Doe</strong> requested celebrity verification</p>
                <span className="admin-activity-time">1 hour ago</span>
              </div>
            </div>
            <div className="admin-activity-item">
              <div className="admin-activity-icon event-activity">
                <FaCalendarAlt />
              </div>
              <div className="admin-activity-content">
                <p>New event <strong>"Meet & Greet with Emma Watson"</strong> created</p>
                <span className="admin-activity-time">3 hours ago</span>
              </div>
            </div>
            <div className="admin-activity-item">
              <div className="admin-activity-icon transaction-activity">
                <FaExchangeAlt />
              </div>
              <div className="admin-activity-content">
                <p><strong>$2,500</strong> payment processed for <strong>Brad Pitt's</strong> event</p>
                <span className="admin-activity-time">5 hours ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <h3>User Demographics</h3>
          </div>
          <div className="admin-chart">
            <div className="admin-chart-placeholder">
              <FaChartPie className="admin-chart-icon" />
              <p>User demographics pie chart</p>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <h3>Popular Events</h3>
            <div className="admin-card-actions">
              <button className="admin-card-action-btn">View All</button>
            </div>
          </div>
          <div className="admin-popular-events">
            <div className="admin-popular-event">
              <div className="admin-event-details">
                <h4>Meet & Greet with Emma Watson</h4>
                <p>Virtual • Sept 15, 2023 • 300 attendees</p>
              </div>
              <div className="admin-event-stats">
                <span className="admin-event-popularity">95%</span>
              </div>
            </div>
            <div className="admin-popular-event">
              <div className="admin-event-details">
                <h4>Q&A Session with Brad Pitt</h4>
                <p>Virtual • Sept 18, 2023 • 280 attendees</p>
              </div>
              <div className="admin-event-stats">
                <span className="admin-event-popularity">90%</span>
              </div>
            </div>
            <div className="admin-popular-event">
              <div className="admin-event-details">
                <h4>Book Signing with J.K. Rowling</h4>
                <p>New York • Sept 20, 2023 • 250 attendees</p>
              </div>
              <div className="admin-event-stats">
                <span className="admin-event-popularity">85%</span>
              </div>
            </div>
            <div className="admin-popular-event">
              <div className="admin-event-details">
                <h4>Charity Dinner with Leonardo DiCaprio</h4>
                <p>Los Angeles • Sept 25, 2023 • 200 attendees</p>
              </div>
              <div className="admin-event-stats">
                <span className="admin-event-popularity">80%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <h3>Revenue Breakdown</h3>
            <div className="admin-card-actions">
              <select className="admin-select">
                <option value="month">This Month</option>
                <option value="quarter">This Quarter</option>
                <option value="year">This Year</option>
              </select>
            </div>
          </div>
          <div className="admin-chart">
            <div className="admin-chart-placeholder">
              <FaChartBar className="admin-chart-icon" />
              <p>Revenue breakdown bar chart</p>
            </div>
          </div>
        </div>

        <div className="admin-dashboard-card">
          <div className="admin-card-header">
            <h3>Pending Approvals</h3>
            <div className="admin-card-actions">
              <button className="admin-card-action-btn">View All</button>
            </div>
          </div>
          <div className="admin-pending-list">
            <div className="admin-pending-item">
              <div className="admin-pending-content">
                <p><strong>Celebrity Verification:</strong> John Doe</p>
                <span className="admin-pending-time">Submitted: 2 hours ago</span>
              </div>
              <div className="admin-pending-actions">
                <button className="admin-approve-btn">Approve</button>
                <button className="admin-reject-btn">Reject</button>
              </div>
            </div>
            <div className="admin-pending-item">
              <div className="admin-pending-content">
                <p><strong>Event Approval:</strong> Charity Gala with Angelina Jolie</p>
                <span className="admin-pending-time">Submitted: 5 hours ago</span>
              </div>
              <div className="admin-pending-actions">
                <button className="admin-approve-btn">Approve</button>
                <button className="admin-reject-btn">Reject</button>
              </div>
            </div>
            <div className="admin-pending-item">
              <div className="admin-pending-content">
                <p><strong>Content Review:</strong> Blog post by Ryan Reynolds</p>
                <span className="admin-pending-time">Submitted: 1 day ago</span>
              </div>
              <div className="admin-pending-actions">
                <button className="admin-approve-btn">Approve</button>
                <button className="admin-reject-btn">Reject</button>
              </div>
            </div>
            <div className="admin-pending-item">
              <div className="admin-pending-content">
                <p><strong>Payout Request:</strong> Taylor Swift ($3,500)</p>
                <span className="admin-pending-time">Submitted: 2 days ago</span>
              </div>
              <div className="admin-pending-actions">
                <button className="admin-approve-btn">Approve</button>
                <button className="admin-reject-btn">Reject</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
