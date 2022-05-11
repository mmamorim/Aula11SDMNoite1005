import jwt from "jsonwebtoken"

const auth = {
    username: "admin",
    password: "1234",
    secret: "MINHA APLICAÇÃO SERVER API",

    generateToken() {
        let token = jwt.sign({ id: auth.username }, auth.secret, { expiresIn: 3600})    
        return token;
    },

    async middlewareAuth(req,res,next) {
        const authHeader = req.headers.authorization
        if(!authHeader) {
            return res.status(400).json({ error: "Token not found!" })
        }
        const parts = authHeader.split(' ')
        if(parts.length !== 2) {
            return res.status(401).send({error:"Token error"})
        }
        const [ scheme, token ] = parts
        if(!(/^Bearer$/i).test(scheme)) {
            return res.status(401).send({error:"Token malformatted"})
        }
        jwt.verify(token, auth.secret, (err,tokenDecoded) => {
            if(err) {
                return res.status(400).json({ error: "Token invalid!" })
            } else {
                req.id = tokenDecoded.id
                return next()
            }
        })
    }

}

export default auth