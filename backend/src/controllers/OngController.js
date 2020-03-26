const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });

    }
};


//return response.send('Hello World!');

        //const query = request.query;
        //const id = request.params;

        //desestruturação


/* return response.json({
 evento: 'Semana OmniStack 11.0',
 aluno: 'Matheus Ribeiro'
}); */