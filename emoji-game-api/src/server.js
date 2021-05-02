const fastify = require('fastify')({ logger: true })
const path = require('path')

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '/../static')
})

fastify.get('/api/cats', async (req, res) => {
    return {
        cats: [
            {
                "name": "Bob",
                "color": "black",
                "gender": "male"
            },
            {
                "name": "Fluff",
                "color": "white",
                "gender": "female"
            },
        ]   
    }
})

fastify.rou

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()