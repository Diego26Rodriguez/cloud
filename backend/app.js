const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const userRouter = require('./routers/usersRouter')
const winerieRouter = require('./routers/bodegasRouter')
const thirdRouter = require('./routers/tercerosRouter')
const productRouter = require('./routers/productosRouter')
const facturaRouter = require('./routers/facturasRouter')

const app = express()
app.use(bodyParser.json())

app.use('/usuarios', userRouter);
app.use('/bodegas', winerieRouter);
app.use('/terceros', thirdRouter);
app.use('/productos', productRouter);
app.use('/facturas', facturaRouter);

const puerto = 3333;
const direccionIP = '18.212.242.25';  // Reemplaza con tu dirección IP pública

app.listen(puerto, direccionIP, () => {
  console.log(`Servidor escuchando en http://${direccionIP}:${puerto}`);
});
