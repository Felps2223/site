# Use the official Node.js image as the base image for the frontend
FROM node:20-alpine as frontend

# Define the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend application code to the container
COPY . .

# Build the React app
RUN npm run build

# Final image for the frontend
FROM nginx:alpine

# Copy the build output from the previous stage to the nginx directory
COPY --from=frontend /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
