PROJECT_DIR="frontend/kidnxtdoordotcom"

# 1. Navigate to the correct directory
echo "Navigating to $PROJECT_DIR..."
cd "$PROJECT_DIR" || { echo "Error: Directory not found. Exiting."; exit 1; }

# 2. Run the ng build command
echo "Running ng build..."
ng build --configuration=production

# 3. Go back to root and deploy
echo "Going back to root directory..."
cd ../..

echo "Deploying to Firebase..."
firebase deploy --only hosting