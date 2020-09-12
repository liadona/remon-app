const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

//midlewere
app.use(express.json({extended: false}));

//test router index
app.get('/', (req, res) => res.json('API is Works!'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//call connectDB



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));