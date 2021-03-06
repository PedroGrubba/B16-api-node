const axios = require('axios');

async function consultaCNPJ(cnpj) {
    // Limpa o CNPJ para conter somente numeros, removendo traços e pontos
    cnpj = cnpj.replace(/\D/g, '');
  
    // Define Axios Timeout
    axios.defaults.timeout = 8000;
    try {
      // Consulta o CNPJ na ReceitaWS
      return await axios.get(
        `https://www.receitaws.com.br/v1/cnpj/${encodeURI(cnpj)}`
      );
    } catch (err) {
      return null;
    }
  }

module.exports = {
    async consultaCNPJ(req, res){
        const { cnpj } = req.params;

        if (!cnpj) {
        return res.sendStatus(404);
        } else {
            const result = await consultaCNPJ(cnpj);
            return res.json(result.data);
        }
    }

}