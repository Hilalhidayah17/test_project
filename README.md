# Test Project

This is a sample Next.js project with a user dashboard and login functionality. The project uses Tailwind CSS for styling and React for building the UI components. It also includes dark mode functionality and user authentication.

## Table of Contents

- [Technologies](#technologies)
- [Setup](#setup)
- [Dependencies](#dependencies)
- [Running the Project](#running-the-project)

## Technologies / Dependencies

- **Next.js** - A React framework for building server-side rendered web applications.
- **Tailwind CSS** - A utility-first CSS framework for creating modern UIs.
- **React** - A JavaScript library for building user interfaces.
- **React Icons** - A library of popular icons for React applications.
- **React Toastify** - For showing toast notifications. -**JWT With Jose** - JWT for authentication and session (token inside cookies) and jose is needed for JWT can run in edge runtime (since there is no backend)
  **shadcn** - For component and dark mode

## Setup

To set up the project locally, follow these steps:

1. **Clone the Repository**

   Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/Hilalhidayah17/test_project.git

   ```

2. **Install Dependencies**
   Navigate to the project folder and install the required dependencies:

   cd test_project
   npm install

3. **Configure Environment Variables**
   Make sure to configure any necessary environment variables. If you are using authentication, you may need to configure API keys or tokens in .env.local.

   JWT_SECRET=supersecretdevkey123

4. **Run**
   npm run dev
