# 1. Node.js base image for production
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Copy package files first for dependency installation
COPY package.json package-lock.json ./

# 4. Install dependencies
RUN npm ci

# 5. Copy the rest of the project files
COPY . .

# 6. Build Next.js application
RUN npm run build

# 7. Use a smaller base image for running the app in production
FROM node:18-alpine AS runner

# 8. Set working directory in runner
WORKDIR /app

# 9. Copy built application and dependencies from builder stage
COPY --from=builder /app . 

# 10. Expose port
EXPOSE 3000

# 11. Start the application
CMD ["npm", "run", "start"]
