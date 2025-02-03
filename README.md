# Chap application website
** Description **: This is a website for users to chat online with their friends using socket.

## 🚀 Main Functions
- Chat online
- Send add friend request
- Authentication

## 🛠 Technologies
- Frontend: ReactJS + JavaScript
- Backend: NodeJS + JavaScript
- Database: MongoDB

## ⚙️ Setup and Used

### Requirements:
- Node.js >= 20.x
- NPM >= 7.x or Yarn
- MongDB server
- IDE (Integrated Development Environment)
1. Clone repository:
** Create a new folder and open that folder on terminal **
     ```bash
     `git clone https://github.com/ttkien2004/fullstact-project.git`
     git fetch
     git branch -M chat-app-mern
     git pull origin chat-app-mern
     code .     
3. Set up dependencies:
   - Frontend:
       1. cd frontend
       2. npm i or npm install
       3. npm run dev
       
   - Backend
       1. cd backend
       2. npm i or npm install
       3. npm run start:dev
4. Set up .env file
- Create a .env file in backend folder
- On MongoDB, create a new database and a new cluster, then copy your MONGO_URI of your database that you have created.
- Add these lines:
  ``` bash
  PORT=3000
  MONGO_URI=mongodb+srv://<your_account_on_mongodb>:<your_database_password>@blog-mern.asxbd.mongodb.net/?retryWrites=true&w=majority&appName=Blog-mern&ssl=true
  SECRET=treconsamactruyentainhaubaidongdaosdffasdasddasda
