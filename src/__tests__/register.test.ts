import supertest from 'supertest'
import server from '../index'
import { store } from '../auth/signup.service'

const request = supertest(server)

jest.mock('../auth/signup.service')

beforeEach(() => {
  store.mockReset()
})

describe('POST in api/signup', () => {
  it.skip('deberia registrar un usuario', async () => {
    const response = await request.post('/api/signup').send({
      email: 'username@mail.com',
      password: 'pass%2022',
      passwordConfirmation: 'pass%2022',
    })
    expect(response.status).toBe(201)
  })

  it.skip('deberia devolver 400 si el email no esta presente', async () => {
    const response = await request.post('/api/signup').send({
      password: 'pass%2022',
      passwordConfirmation: 'pass%2022',
    })

    expect(response.status).toBe(400)
    expect(response.body.message).toBe('"email" es un dato requerido')
  })

  it.skip('deberia devolver 400 si el password no esta presente', async () => {
    const response = await request.post('/api/signup').send({
      email: 'username@mail.com',
      passwordConfirmation: 'pass%2022',
    })
    expect(response.status).toBe(400)
    expect(response.body.message).toBe('"password" es un dato requerido')
  })

  it.skip('deberia devolver 400 si la confirmacion del password no esta presente', async () => {
    const response = await request.post('/api/signup').send({
      email: 'username@mail.com',
      password: 'pass%2022',
    })
    expect(response.status).toBe(400)
    expect(response.body.message).toBe('"passwordConfirmation" es un dato requerido')
  })

  it.skip('deberia devolver 400 si el password y la confirmacion del password no son iguales', async () => {
    const response = await request.post('/api/signup').send({
      email: 'username@mail.com',
      password: 'pass%2021',
      passwordConfirmation: 'pass%2022',
    })
    expect(response.status).toBe(400)
    expect(response.body.message).toBe('"password" y "passwordConfirmation" deben ser iguales')
  })

  it.skip('deberia devolver 400 si el campo del email no es una direccion de correo valida', async () => {
    const response = await request.post('/api/signup').send({
      email: 'usernamemail.com',
      password: 'pass%2022',
      passwordConfirmation: 'pass%2022',
    })
    expect(response.status).toBe(400)
  })

  it('deberia devolver 403 si el mail provisto ya se encuenta en uso', async () => {
    // Mock de la base de datos
  })
})
