const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde vpspro en Google Cloud Run!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
