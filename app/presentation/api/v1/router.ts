import express from 'express'
import * as controller from './controller'

const router = express.Router()

router
  .route('/hello')
  .get(controller.helloWorld)

router
  .route('/user/:id')
  .get(controller.getUser)

export default router
