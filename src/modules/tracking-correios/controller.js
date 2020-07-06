const TrackingCorreios = require('tracking-correios')

module.exports = {
    /**
     * GET Tracking Correios
     * ===================================================================================
     */
    async getTracking(req, res){
        const { code } = req.params;

        if(!code){
            res.status(404).send({
                success: false,
                message: 'Code not found'
            })
        } else {
            TrackingCorreios.track( code )
            .then(result => {

                const track = {
                    numero:     result[0].numero,
                    sigla:      result[0].sigla, 
                    nome:       result[0].nome,
                    categoria:  result[0].categoria,
                    tipo:       result[0].evento[0].tipo,
                    status:     result[0].evento[0].status,
                    data:       result[0].evento[0].data,
                    hora:       result[0].evento[0].hora,
                    descricao:  result[0].evento[0].descricao,
                    local:      result[0].evento[0].local,
                    codigoLocal: result[0].evento[0].codigo,
                    cidade:     result[0].evento[0].cidade,
                    uf:         result[0].evento[0].uf
                };

                res.send({
                    success: true,
                    track
                });
            })
            .catch(err => {
                res.status(500).send({
                    success: false,
                    error: err.message
                });
            });
        }

    },
    
};