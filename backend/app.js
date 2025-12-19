const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const studentRoutes = require('./routes/students');
const requestRoutes = require('./routes/requests');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/requests', requestRoutes);

app.get('/', (req, res) => {
    res.send('eCOR Backend Running!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
