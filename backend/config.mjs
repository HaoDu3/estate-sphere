

import SES from 'aws-sdk/clients/ses.js';
import S3 from 'aws-sdk/clients/s3.js';
import NodeGeocoder from 'node-geocoder';

// Import dotenv to read the environment variables from the .env file
import { config } from 'dotenv';
config();

export const database = 'mongodb://localhost:27017/EstateShpere';

// Use environment variables for sensitive data
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

export const EMAIL_FROM = process.env.EMAIL_FROM;
export const EMAIL_TO = process.env.EMAIL_TO;

// AWS SES configuration
const awsConfig = {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: 'us-east-2',
    apiVersion: '2010-12-01'
}

export const CLIENT_URL = 'http://localhost:3000';
export const JWT_SECRET = process.env.JWT_SECRET;

// Create an instance of the SES class with the awsConfig
export const AWS_SES = new SES(awsConfig);
export const AWS3 = new S3(awsConfig);

const options = {
    provider: 'google',
    apiKey: process.env.GOOGLE_API_KEY, // Use environment variable for API key
    formatter: null // 'gpx', 'string', ...
};

export const GOOGLE_GEOCODER = NodeGeocoder(options);
