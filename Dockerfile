# Stage 1: Build the Storybook
FROM node:18-alpine as build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build Storybook to generate static files
RUN npm run build-storybook

# Stage 2: Serve the Storybook
FROM nginx:alpine

# Copy the Storybook static build from the previous stage to the nginx public directory
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Expose port 80 to serve the Storybook
EXPOSE 80

# Start nginx to serve the static Storybook
CMD ["nginx", "-g", "daemon off;"]
