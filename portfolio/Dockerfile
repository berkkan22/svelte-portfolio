# Use the official Node.js image as the base image for building the website
FROM node:20 AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code to the container
COPY . .

# Build the website
RUN npm run build

# Use the official Nginx image as the base image
FROM nginx:1.25.2-alpine

# Copy the built website from the previous stage to the default Nginx public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]