# Use Node.js as base image
FROM node:20-slim

# Set working directory
WORKDIR /code

# Install Express server dependencies
COPY frontend/package*.json ./frontend/
WORKDIR /code/frontend
RUN npm install

# Install React client dependencies
COPY frontend/client/package*.json ./frontend/client/
WORKDIR /code/frontend/client
RUN npm install

# Copy all frontend code before building
# This is crucial - we need the source files to build
COPY frontend/ /code/frontend/

# Build React client
WORKDIR /code/frontend/client
RUN npm run build

# Set working directory back to root for flexibility
WORKDIR /code