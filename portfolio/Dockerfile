# —- Build Stage —-
FROM node:20.10.0 AS builder

# Specify the working directory
WORKDIR /app

# Copy package.json and package-lock.json for utilising Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy local files to the app folder
COPY . .

# Build app
RUN npm run build

# —- Production Stage —-
FROM nginx:1.25.4-alpine-slim AS production

# Copy build folder from build stage to nginx
COPY -from=builder /app/public /usr/share/nginx/html/

# Expose port 80
EXPOSE 10408

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]