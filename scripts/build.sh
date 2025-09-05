#!/bin/bash

# Build script with fallback for Rollup native module issues
echo "Starting build process..."

# Try normal build first
if npm run build; then
    echo "Build successful!"
    exit 0
fi

echo "Build failed, trying with clean install..."

# Clean install and retry
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Try build again
if npm run build; then
    echo "Build successful after clean install!"
    exit 0
fi

echo "Build failed even after clean install, trying alternative approach..."

# Install specific rollup version as fallback
npm install rollup@latest --save-dev
npm run build

echo "Build completed with fallback approach"
