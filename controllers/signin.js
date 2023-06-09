const handleSignin = (req, res, knex, bcrypt) => {
    const {email, password} = req.body;
    //Create security validation
    if(!password || !email){
        return res.status(400).json('incorrect form submission');
    }
    knex.select('email', 'hash').from('reactlogin')
        .where('email', '=', email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if (isValid) {
                return knex.select('*')
                    .from('reactusers')
                    .where('email', '=', email)
                    .then(user => {
                        res.json(user[0])
                    })
                    .catch(err => res.status(400).json('unable to get user'))
            } else {
                res.status(400).json('wrong credentials')
            }
        })
        .catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
    handleSignin: handleSignin
}