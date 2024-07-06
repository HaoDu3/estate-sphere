# Comprehensive Real Estate Platform App

A full-featured real estate platform that provides secure user authentication, dynamic user interfaces, and robust data management. The platform supports property searches based on location, transaction history, and property value estimates.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

### Prerequisites

- Node.js
- MongoDB
- AWS account with SES and S3 configured
- Google API key for Geo-location Service

### Backend

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/real-estate-platform.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd real-estate-platform/backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the backend directory and add your environment variables:
    ```env
    PORT=5000
    DB_URI=your_database_uri
    JWT_SECRET=your_jwt_secret
    AWS_ACCESS_KEY_ID=your_aws_access_key
    AWS_SECRET_ACCESS_KEY=your_aws_secret_key
    AWS_SES_REGION=your_ses_region
    S3_BUCKET_NAME=your_s3_bucket_name
    GOOGLE_API_KEY=your_google_api_key
    ```

5. Start the backend server:
    ```bash
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```

## Usage

Once the servers are running, you can access the platform via `http://localhost:3000`. Register or log in to start using the features of the application.

## Features

- JWT-based authentication and authorization with refresh tokens
- Email services using AWS SES
- Dynamic and responsive user interface with React.js and Material UI
- RESTful APIs for CRUD operations
- Image storage with AWS S3
- Geo-location based property searches with Google Geo-location Service
- Transaction history and property value estimates using Realtor APIs

## Project Structure

```plaintext
real-estate-platform/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── README.md
└── package.json
