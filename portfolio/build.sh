#!/bin/bash
echo "Starting custom build script..."
echo "Installing dependencies..."
npm install
echo "Running react-scripts build..."
npx react-scripts build
echo "Build completed!" 