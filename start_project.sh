#!/bin/bash

# Define the target directory and Node version
PROJECT_DIR="frontend/kidnxtdoordotcom"
NODE_VERSION="22.12"

# 1. Navigate to the correct directory
echo "Navigating to $PROJECT_DIR..."
cd "$PROJECT_DIR" || { echo "Error: Directory not found. Exiting."; exit 1; }

# # 2. Set the Node version using nvm
echo "Switching to Node version $NODE_VERSION..."
# Source nvm so it's available in this script's environment
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm

if nvm use "$NODE_VERSION"; then
    echo "Switched successfully."
else
    echo "Error: Could not switch Node version. Is version $NODE_VERSION installed via nvm?"
    exit 1
fi

# 3. Run the ng serve command
echo "Running ng serve..."
ng serve --open