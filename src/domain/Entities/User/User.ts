import bcryptjs from 'bcryptjs'

class User {
  constructor(public name: string, public email: string) {}

  createUser(password: string) {
    this.password = bcryptjs.hashSync(password, 8)
  }

  comparePassword(password: string): Promise<boolean> {
    return
  }

  validateEmail() {}
  validateCpf() {}
}

export default User
