import { Router } from 'express'
import sessionController from './App/controllers/SessionController'

const routes = Router()

routes.post('/sessions', sessionController.store)

export default routes
