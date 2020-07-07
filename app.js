const express       = require("express");
const routes        = require('./src/routes');
const bodyParser    = require("body-parser");
const cors          = require('cors');
const dotenv        = require('dotenv');

const app = express();

// Usar Model que permite configurar os acessos externos a API
// Deixando vazio, permite todo o tipo de acesso externo
app.use(cors());

dotenv.config();

app.use(express.json());
app.use(routes);

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Iniciando o servidor
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => { 
    console.log(" > Server is runnig in: ", PORT);
});