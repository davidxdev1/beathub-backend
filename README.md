

Music Database Project
This project is a Node.js + Express + MongoDB application designed to manage Artists, Albums, Songs, Users, and Playlists. It includes a seed script to populate the database with sample data for testing and development.
How to Run the Seed Script
- Install dependencies
Run the following command in your project root:
npm install
- Set up environment variables
Create a .env file in the project root.
Add your MongoDB connection string, for example:
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority
- Run the seed script
Execute:
node seed.js
- Verify the data
Open MongoDB Atlas or your local MongoDB client.
Check that the collections (Artist, Album, Song, User, Playlist) have been populated.
