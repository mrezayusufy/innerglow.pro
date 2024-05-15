# Use an official Node.js image as a base image
FROM node:18-alpine

# Install Bun
RUN mkdir /bun && \
    curl -fsSL https://bun.sh/install | bash && \
    mv /root/.bun/bin/bun /usr/local/bin/bun

# Set the working directory
WORKDIR /app

# Copy package.json and bun.lockb
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN bun run build

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js app
CMD ["bun", "run", "start"]
