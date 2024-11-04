
# Use Node.js base image
FROM node:20



# Install PNPM globally
RUN npm install -g pnpm

# Define the library to build (passed as a build argument)
ARG LIBRARY

COPY swarmakit-master /app/data/

# Set the root working directory for the repository root
WORKDIR /app/data/

# Output the contents of the main directory for debugging
RUN ls -la /app/data

# Output the contents of the libs directory for debugging
RUN ls -la /app/data/libs

# Move to the specific library's directory (temporarily hardcoded to `vue` for testing)
WORKDIR /app/data/libs/vue

# Output the contents of the specific library directory for debugging
RUN ls -la /app/data/libs/vue

# Check that package.json exists in the target directory before proceeding
RUN test -f package.json || (echo "No package.json found in vue directory" && exit 1)

# Install the library's dependencies
RUN pnpm install

# Expose port 80
EXPOSE 80

# Run Storybook directly on port 80
CMD ["npx", "storybook", "dev", "-p", "80", "--ci"]

