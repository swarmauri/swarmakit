# Stage 1: Build the Storybook
FROM node:18 as build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json from the my-storybook-app directory
COPY app/package.json app/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application from the app directory into the container
COPY app/ ./
COPY app/.storybook ./app/.storybook

# Build Storybook to generate static files
# RUN npm run build-storybook

RUN ls /app

EXPOSE 80

CMD ["npm", "run", "storybook"]

