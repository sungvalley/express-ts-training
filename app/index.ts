import express from 'express'
import v1 from './presentation/api/v1/router'

const app: express.Express = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('http://localhost:3000')
})

app.use('/api/v1', v1)
