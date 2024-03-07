# Social Media Clone

This project is a social media platform that aims to replicate and enhance the user experience of popular social media sites like Facebook. It provides users with features for creating posts, sharing content, connecting with friends, and engaging with others in a familiar and user-friendly environment.

## Tech Stack

### Frontend:

- **React:** A powerful JavaScript library for building interactive user interfaces.
- **React Router:** A declarative routing library for React applications, ensuring seamless navigation.
- **@emotion/react and @emotion/styled:** Libraries for writing CSS styles with JavaScript, offering a flexible and efficient styling solution.
- **Material-UI:** A React UI framework based on Material Design, providing a set of pre-designed components for consistent and responsive UI development.

### Backend:

- **Express:** A fast, minimalist web framework for Node.js, facilitating the creation of robust backend applications.
- **Sequelize:** A promise-based Node.js ORM for MySQL, simplifying database interactions with easy-to-use models and migrations.
- **bcryptjs:** A library for securely hashing passwords, ensuring the protection of user credentials.
- **jsonwebtoken:** A library for implementing JSON Web Tokens (JWT), allowing for secure user authentication and authorization.
- **Axios:** A promise-based HTTP client for making API requests from both the frontend and backend.

## Features

- **User Authentication:** Secure user registration and login using bcrypt for password hashing and JWT for token-based authentication.
- **News Feed:** A personalized feed where users can create, share, and interact with posts from friends.
- **Friendship Management:** Users can connect with others, view friend lists, and manage friend requests.
- **Likes and Comments:** Interactive features for expressing engagement with posts through likes and comments.
- **Profile Customization:** Users can personalize their profiles with cover and profile pictures, city, website, and more.
- **Responsive Design:** A mobile-friendly and responsive user interface, ensuring a seamless experience across devices.

## Setup

### Frontend Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/social-media-clone.git
cd social-media-clone/frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd ../backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up your MySQL database and update the `config/config.js` file with your database details.

4. Run migrations to create database tables:

```bash
npx sequelize-cli db:migrate
```

5. Start the backend server:

```bash
npm start
```

## Usage

Create an account, connect with friends, share posts, and explore the social media experience.

## Contributing

Feel free to contribute by opening issues, providing feedback, or submitting pull requests.

