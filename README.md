# Dynamic Resume Generator

A React-based resume generator application with authentication and dynamic data fetching capabilities.

## Features

- **Authentication System**: Secure login with JWT tokens
- **Dynamic Resume Generation**: Fetches resume data from API and renders it dynamically
- **Responsive Design**: Modern UI built with Tailwind CSS
- **State Management**: Uses Redux Toolkit for authentication state only
- **Data Fetching**: Implements TanStack Query (React Query) for efficient API calls with caching
- **Routing**: Protected routes with React Router
- **Token Management**: Automatic token handling with Axios interceptors

## Test Credentials

- **Email**: testuser1@revampinsights.com
- **Password**: R3v@mp!nsight5-2025

## API Endpoints

- **Login**: `POST https://api.revampinsights.com/auth/login`
- **Get All Resumes**: `GET https://api.revampinsights.com/legacy/resume?page=${page}&limit=${limit}`
- **Get Resume by ID**: `GET https://api.revampinsights.com/legacy/resume/:id`

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the application
4. Use the test credentials to log in
5. View your dynamically generated resume

## Project Structure

```
src/
├── components/          # React components
│   ├── ProtectedRoute.tsx # Route protection component
│   └── Resume.tsx      # Resume display component
├── pages/               # Page components
│   ├── LoginPage.tsx   # Login page
│   └── ResumePage.tsx  # Resume display page
├── store/               # Redux store configuration (auth only)
│   ├── index.ts        # Store setup and configuration
│   ├── hooks.ts        # Typed Redux hooks
│   └── slices/         # Redux slices
│       └── authSlice.ts     # Authentication state management
├── hooks/               # Custom hooks
│   └── useResumeData.ts # TanStack Query hook for resume data
├── services/            # API services
│   └── api.ts          # Axios configuration and API calls
├── types/               # TypeScript type definitions
│   ├── auth.ts         # Authentication types
│   └── resume.ts       # Resume data types
├── utils/               # Utility functions
│   └── dataTransform.ts # Data transformation utilities
└── App.tsx             # Main application component with routing
```

## Architecture

### **State Management**
- **Redux Toolkit**: Used only for authentication state (user, tokens, login/logout)
- **TanStack Query**: Handles all resume data fetching, caching, and state management

### **Data Flow**
1. **Authentication**: User logs in → Redux stores auth state → TanStack Query uses stored token
2. **Resume Data**: TanStack Query fetches resumes → Gets first resume ID → Fetches detailed resume data
3. **Caching**: TanStack Query provides automatic caching, background updates, and error handling

### **Routing**
- **`/login`**: Public route for authentication
- **`/resume`**: Protected route requiring authentication
- **`/`**: Redirects to appropriate route based on auth state

## Authentication Flow

1. User enters credentials on the login page
2. Credentials are sent to the authentication API
3. Upon successful login, JWT token is stored in localStorage and Redux state
4. User is redirected to the resume page
5. Resume data is fetched using the authenticated API calls
6. Token is automatically included in subsequent API requests via Axios interceptors

## Data Fetching Flow

1. After authentication, TanStack Query fetches all available resumes
2. Selects the first resume from the list
3. Fetches detailed resume data by ID
4. Transforms the API response to match the Resume component's expected format
5. Renders the resume with dynamic data
6. Provides automatic caching and background updates

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Redux Toolkit** - Authentication state management
- **React Redux** - Redux bindings for React
- **TanStack Query** - Data fetching, caching, and state management
- **React Router** - Client-side routing with protected routes
- **Axios** - HTTP client with interceptors
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Security Features

- **Protected Routes**: Resume page requires authentication
- **Token Interceptors**: Automatic token inclusion in API requests
- **401 Handling**: Automatic logout and redirect on token expiration
- **Route Guards**: Prevents access to protected routes without authentication

## Development

- The application automatically handles token expiration
- Failed API calls due to expired tokens trigger automatic logout
- TanStack Query provides caching and background updates
- All API calls include proper error handling and loading states
- Redux Toolkit provides efficient authentication state management
- React Router handles navigation and route protection
