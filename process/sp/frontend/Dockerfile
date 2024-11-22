# Use Node.js as base image
FROM node:20-slim

# Set working directory
WORKDIR /code

# Install Express server dependencies
COPY frontend/ /code/frontend/ 
WORKDIR /code/frontend
RUN npm install

# Install React client dependencies
COPY frontend/client/ ./frontend/client/
WORKDIR /code/frontend/client
RUN npm install


# Build React client
COPY frontend/ /code/frontend/
WORKDIR /code/frontend/client
RUN npm run build

# Set working directory back to root for flexibility
WORKDIR /code