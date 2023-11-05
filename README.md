# Food-Off *(In development)*

Link to project: https://food-off.onrender.com/ (May take some time to load) <br>

**Demo user** <br>
User: test1@email.com <br>
Password: test1 <br>

A full stack MERN app to help you decide what to eat! Users can create their own personal database of eateries. A budget is chosen, and two eateries are pit against each other. Choose which eatery you'd rather eat at until a final winner is chosen. 

## How It's Made:

**Tech used:** React, JavaScript, Node.js, Express, MongoDB

The frontend was made using React with some custom CSS. The backend uses Node.js with Express, and MongoDB is used for the database and schema.

# Optimizations

The ability to upload images for each eatery still needs to be done, and some finishing touches on the frontend will be added.

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server

# Things to add

- Create a `.env` file in the config folder and add the following
  - NODE_ENV = development
  - PORT = 5000
  - MONGO_URI = mongodb+srv://YOURMONGOURI
  - JWT_SECRET = abc123
