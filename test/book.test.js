const {request} = require('./config/app')
const { cleanUpDatabase, createBook,createBookSampleDb  } = require('./config/db')
const { expect } = require('./config/chai')

describe('POST /book - Create book', async () => {
    beforeEach(cleanUpDatabase)

    it('Should return 200 and create new book',async () => {
        const response = await request.post('/book').send({
            "title": "My sample book"
          })
        expect(response).to.have.status(200)
        expect(response.body).to.have.property('title')
    })

    it('Should return 500 for empty request body',async () => {
        const response = await request.post('/book')
        expect(response).to.have.status(500)
    })
    
})

describe('GET /book/count - get total books count', async () => {
    beforeEach(cleanUpDatabase)

    it('Should return 200 and count=0',async () => {
        const response = await request.get('/book/count')
        expect(response).to.have.status(200)
        expect(response.body).to.deep.equal({count: 0})
    })

    it('Should return 200 and count=4',async () => {
        await Promise.all([
            createBook({"title": "Helloworld1"}),
            createBook({"title": "Helloworld2"}),
            createBook({"title": "Helloworld3"}),
            createBook({"title": "Helloworld4"})

        ])
        const response = await request.get('/book/count')
        expect(response).to.have.status(200)
        expect(response.body).to.deep.equal({count: 4})
    })

    
})