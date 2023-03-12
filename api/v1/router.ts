import express from 'express'
import * as controller from './controller'

const router = express.Router()

router
  .route('/hello')
  .get(controller.helloWorld)

export default router
