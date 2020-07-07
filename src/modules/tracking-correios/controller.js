const { rastro } = require('rastrojs');

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
            const result = await rastro.track( code );
            if(result){
                res.send({
                    sucess: true,
                    result
                });
            }
        }
    },
    
};