
const http = require('http')

const PORT = 5000

const server = http.createServer((request, response) => {
    console.log('Server request')
    console.log(request.url, request.method)

    response.setHeader('Content-type', 'application/json')

    const categories = JSON.stringify([
        {
          id: 3,
          name: "PHRASES",
          path: "/phrases_1",
          subCategories: [
            { id: 1, title: "Phrases", path: "/phrases" },
            { id: 2, title: "Questions", path: "/questions" },
            { id: 3, title: "Etiquette", path: "/etiquette" }
          ],
        },
        {
          id: 6,
          name: "THEMATIC",
          path: "/thematic",
          subCategories: [
            { id: 1, title: "Booze", path: "/booze" },
            { id: 2, title: "Drugs", path: "/drugs" },
            { id: 3, title: "Money", path: "/money" }
          ],
        },
      ])

    response.end(categories)
})

server.listen(PORT, 'localhost', (error) => {
    if (error) {
        console.log('Error!: ', error)
    } else {
        console.log(`Server has been started on ${PORT} port...`)
    }
})
