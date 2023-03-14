import { it, expect, describe } from 'vitest'
import request from 'supertest'
import app from '../../src/app'
import prismaClient from '../../src/database/prismaClient'

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const user = await prismaClient.users.create({
      data: {
        email: 'leandersilveira@hotmail.com',
        name: 'leander',
        password: '123456',
      },
    })

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: user.password,
    })

    expect(response.status).toBe(200)
  })

  it('should not authenticate with invalid credentials', async () => {
    const user = await prismaClient.users.create({
      data: {
        email: 'leandersilveira@hotmail.com',
        name: 'leander',
        password: '123456',
      },
    })

    const response = await request(app).post('/sessions').send({
      email: user.email,
      password: user.password,
    })

    expect(response.status).toBe(401)
  })
  // it('should receive JWT token when authenticated with valid credentials', async () => {
  //   const user = await prismaClient.users.create({
  //     data: {
  //       email: 'leandersilveira@hotmail.com',
  //       name: 'leander',
  //       password: '123456',
  //     },
  //   })
  //   expect(user.email).toBe('leandersilveira@hotmail.com')
  // })
})
