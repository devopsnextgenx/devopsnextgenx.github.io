# --- Build stage -----------------------------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (use package-lock when present for reproducible builds)
COPY package.json package-lock.json* ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build --silent

# --- Production stage ------------------------------------------------------
FROM nginx:stable-alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config to enable SPA fallback routing
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
