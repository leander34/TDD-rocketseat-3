import { describe, expect, it } from 'vitest'
import User from '../../src/domain/Entities/User/User'
import bcryptjs from 'bcryptjs'

describe('', () => {
  it('', async () => {
    const user = new User('leander', 'leander@hotmail.com', '123456')
    const samePassword = await bcryptjs.compare('123456', user.password)
    expect(samePassword).toBeTruthy()
  })
})
