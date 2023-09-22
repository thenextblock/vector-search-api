#!/bin/bash

# Variables
REMOTE_PATH=/home/ubuntu/api
REMOTE_NODE_MODULES=$REMOTE_PATH/node_modules
REMOTE_SSH=vector

echo "Starting the PRODUCTUON deployment script..."


# Step 1: Build TypeScript project
echo "[1/6] Building TypeScript project..."
tsc || { echo "Building TypeScript project failed! Exiting..."; exit 1; }

# Step 2: Copy ./build directory to the remote server directory
echo "[2/6] Copying ./build directory to the remote server directory..."
rsync -r ./build $REMOTE_SSH:$REMOTE_PATH/ || { echo "Copying ./build directory failed! Exiting..."; exit 1; }

# Step 3: Copy package.json file to the remote server directory

echo "[3/6] Copying package.json file to the remote server directory..."
rsync ./package.json $REMOTE_SSH:$REMOTE_PATH/ || { echo "Copying package.json file failed! Exiting..."; exit 1; }

# Step 4: Delete $REMOTE_NODE_MODULES folder on the remote server

echo "[4/6] Deleting $REMOTE_NODE_MODULES folder on the remote server..."
ssh $REMOTE_SSH "rm -rf $REMOTE_NODE_MODULES" || { echo "Deleting $REMOTE_NODE_MODULES folder failed! Exiting..."; exit 1; }

# Step 5: On the remote server run npm install

echo "[5/6] Running npm install on the remote server..."
ssh $REMOTE_SSH "cd $REMOTE_PATH && npm install" || { echo "Running npm install failed! Exiting..."; }

echo "[6/6] Resstart PM2 ..."
ssh $REMOTE_SSH "cd $REMOTE_PATH && sudo pm2 restart 0" || { echo "PM2 resstart failed! Exiting..."; }

echo "-----------------------------"
echo "Deployment OF Production Server completed successfully. SUCCESS!"