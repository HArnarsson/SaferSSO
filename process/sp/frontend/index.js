const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('client/build'));
app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})

const PORT = process.env.PORT || 8002;

app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));