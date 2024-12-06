const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from the Backend!');
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // Exporta la aplicación para pruebas
