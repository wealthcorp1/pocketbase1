# Use Alpine Linux as base image
FROM alpine:latest

# Install dependencies
RUN apk add --no-cache curl unzip

# Set the correct PocketBase version
ENV PB_VERSION="v0.25.9"

# Download PocketBase binary
RUN curl -fsSL -o /pocketbase.zip "https://github.com/pocketbase/pocketbase/releases/download/v0.25.9/pocketbase_0.25.9_linux_amd64.zip" && \
    unzip /pocketbase.zip -d /app && rm /pocketbase.zip



# Set working directory
WORKDIR /app

# Expose PocketBase default port
EXPOSE 8090

# Start PocketBase
CMD ["./pocketbase", "serve", "--http", "0.0.0.0:8090"]
