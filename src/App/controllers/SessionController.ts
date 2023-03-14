import { Request, Response } from 'express'
class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await 
    return res.status(200).send()
  }
}
export default new SessionController()
