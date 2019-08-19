const db = require('../configdb/config')

const seller = {
    async getdataall(req,res){
        const sql = 'SELECT * FROM seller'
        
        try{
            const { rows } = await db.pool.query(sql)
            return res.status(200).send({rows})
        }catch(error){
            return res.status(400).send({'message':'error'})
        }
    }
    
}

module.exports = {seller}