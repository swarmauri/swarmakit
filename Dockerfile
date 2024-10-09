# Stage 1: Build the Storybook
FROM node:18-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json from the my-storybook-app directory
COPY app/package.json app/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application from the my-storybook-app directory into the container
COPY app/ ./

# Build Storybook to generate static files
RUN npm run build-storybook

# Stage 2: Serve the Storybook with Nginx
FROM nginx:alpine

# Remove default Nginx website files
RUN rm -rf /usr/share/nginx/html/*

# Copy the Storybook static build from the previous stage to the Nginx public directory
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Change ownership of the files to the nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx to serve Storybook
CMD ["nginx", "-g", "daemon off;"]
