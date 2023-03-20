const handleHome = (req, res, knex) => {
    knex.select('*').from('reactusers')
        .then(users => {
            res.send(users);
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('An error occurred');
        });
}

module.exports = {
    handleHome: handleHome
}