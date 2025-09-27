# BalletByte

BalletByte is a comprehensive web platform that connects users with celebrities, enabling seamless interactions through chat, events, galleries, and personalized profiles. The platform includes an admin panel for managing users, celebrities, events, and generating reports.

## Features

- **[User] Home**: Personalized dashboard for users
- **[User] Explore**: Discover celebrities and content
- **[User] Events**: Browse and participate in celebrity events
- **[User] Chat**: Direct messaging with celebrities
- **[User] Favorites**: Save favorite celebrities and content
- **[User] Notifications**: Stay updated with latest activities
- **[User] Profile**: Manage personal profile and preferences
- **[Celebrity] Home**: Celebrity dashboard with unique branding
- **[Celebrity] Profile**: Showcase personal information and achievements
- **[Celebrity] My Profile**: Edit and manage celebrity profile
- **[Celebrity] Events**: Manage and promote events
- **[Celebrity] Gallery**: Share photos and media content
- **[Celebrity] Chat**: Communicate with fans and users
- **[Admin] Dashboard**: Overview of platform statistics
- **[Admin] Manage Users**: Administer user accounts and permissions
- **[Admin] Manage Celebrities**: Oversee celebrity profiles and content
- **[Admin] Events**: Create and manage platform events
- **[Admin] Reports**: Generate analytics and reports
- **[Admin] Settings**: Configure platform settings

### Authentication
- User registration and login
- Password recovery (forgot password)
- Role-based access (User, Celebrity, Admin)
- User registration and login
- Password recovery (forgot password)
- Role-based access (User, Celebrity, Admin)

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **React Router**: Declarative routing for React
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Popular icon library
- **ESLint**: Linting utility for JavaScript and JSX

### Backend
- **Ballerina**: Cloud-native programming language for microservices

### Development Tools
- **Vite**: Development server and build tool
- **PostCSS**: CSS processing tool
- **Autoprefixer**: CSS vendor prefixing tool

## Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- Ballerina (for backend)

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Ensure Ballerina is installed and run the backend service (refer to Ballerina documentation for specific commands)

## Usage

### Development
- Run `npm run dev` in the frontend directory to start the development server
- Make changes to the code and see live updates

### Building for Production
- Run `npm run build` in the frontend directory to create a production build
- Run `npm run serve` to preview the production build locally

## Project Structure

```
balletByte/
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── admin/       # Admin panel components and pages
│   │   ├── auth/        # Authentication components
│   │   ├── celebrities/ # Celebrity-specific features
│   │   ├── users/       # User-specific features
│   │   ├── App.jsx      # Main app component
│   │   ├── main.jsx     # App entry point
│   │   └── index.css    # Global styles
│   ├── package.json     # Frontend dependencies
│   ├── vite.config.js   # Vite configuration
│   └── tailwind.config.js # Tailwind CSS configuration
├── backend/
│   ├── main.bal         # Ballerina main file
│   ├── Ballerina.toml   # Ballerina project configuration
│   └── target/          # Build artifacts
└── README.md            # This file
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the development team.

---

**Note**: This project is currently in development. Features and documentation may be updated as the project evolves.