const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const edge = require('edge');
//Routes
const wgRoutes = require('./routes/webgrabberRoute');

app.get('/', (req, res) => {
    console.log("reached home");
  res.send('Home')  
});

app.use('/wg', wgRoutes);



app.listen(PORT, () => {
    console.log("Server is listening to port:", "\x1b[33m", +PORT, '\x1b[0m')
})