const axios = require('axios');

async function consultacep(cep) {
    // Limpa o CNPJ para conter somente numeros, removendo traços e pontos
    cep = cep.replace(/\D/g, '');
  
    // Define Axios Timeout
    axios.defaults.timeout = 8000;
    try {
      // Consulta o CNPJ na ReceitaWS
      return await axios.get(
        `https://viacep.com.br/ws/${encodeURI(cep)}/json/`
      );
    } catch (err) {
      return null;
    }
  }

module.exports = {
    async consultacep(req, res){
        const { cep } = req.params;

        if (!cep) {
        return res.sendStatus(404);
        } else {
            const result = await consultacep(cep);
            return res.json(result.data);
        }
    }

}