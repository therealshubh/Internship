**📦 How to Run the Application**
Follow these steps to set up and run the application on your local machine:

**✅ Step 1: Clone the Repository**
  Clone the project directory from GitHub to your local system using the following command:
    *git clone <repository-url>*
    *Replace <repository-url> with the actual link to the repository.

**✅ Step 2: Install MongoDB**
  Download and install the following MongoDB tools:
  **MongoDB Community Server** – to host the local database
  **MongoDB Shell** (mongosh) – to interact with the database via the command line
  **MongoDB Compass** (optional but recommended) – for a GUI-based view of your databases and collections
  You can download them from the official website:
    👉 https://www.mongodb.com/try/download/community

**✅ Step 3: Set Up Environment Variables**
  After installation:
  Go to **System Properties > Environment Variables**
  Under **System variables**, find the Path variable and click **Edit**
  Add the following path (adjust it based on your installation version and location):
    *C:\Program Files\MongoDB\Server\8.0\bin*

**✅ Step 4: Verify MongoDB Installation**
   Open Command Prompt and run:
    *mongosh*
    *If you see the MongoDB shell prompt, your setup is successful.

**✅ Step 5: Create the Database and Collections**
1. In the shell, run the following command to create the database:
   *use gallerydb*
2. Then create the required collections:
   *db.createCollection("users")
    db.createCollection("events")*


