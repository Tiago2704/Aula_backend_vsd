import fastify from 'fastify'

import "dotenv/config"

const app = fastify()

function calcularidade(ano: number) {
  const anoAtual = new Date().getFullYear()
  const idade = anoAtual - ano
  return idade
}

app.get('/hello', async (request, reply) => {
  // Pega o 'age' vindo da URL (?age=1998)
  const { age } = request.query as { age?: string }

  // Se passou o 'age', chama a função calcularidade
  const idadeCalculada = age ? calcularidade(Number(age)) : null

  return {
    message: 'Hello World',
    anoNascimento: age ? Number(age) : null,
    idade: idadeCalculada
  }
})

// Iniciar o servidor
app.listen({ port: Number(process.env.port)}).then(() => {
  console.log('HTTP Server Running!')
})