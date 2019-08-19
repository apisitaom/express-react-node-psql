const jwt = require('jsonwebtoken')
const con = require('../configdb/condig')

const auth = {
    async verifyToken(req,res,next){
        const token = req.headers['x-access-token'];
        if(!token){
            return res.status(400).send({'message':'token invalid'})
        }
        try{
            const decode = await jwt.verify(token,process.env.SECRET || 'Apisit0857646956')
            const sql = 'select * from admin where id = $1';
            const { rows } = await con.pool.query(sql,[decode.adminId])
            if(!rows[0]){
                return res.status(400).send({'message':'the token your provided is invalid'})
            }
            req.admin = {id : decode.adminId}
            
            next()

        }catch(error){
            return res.status(400).send(error);
        }
    }
}

exports.auth = auth