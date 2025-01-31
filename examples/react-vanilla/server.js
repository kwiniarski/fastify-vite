import Fastify from 'fastify'
import FastifyVite from '@fastify/vite'
import { renderToString } from 'react-dom/server'

export async function main (dev) {
  const server = Fastify()

  await server.register(FastifyVite, { 
    root: import.meta.url,
    dev: dev || process.argv.includes('--dev'),
    createRenderFunction ({ createApp }) {
      return () => {
        return {
          element: renderToString(createApp())
        }
      }
    }
  })

  server.get('/', (req, reply) => {
    reply.html(reply.render())
  })

  await server.vite.ready()
  return server
}

if (process.argv[1] === new URL(import.meta.url).pathname) {
  const server = await main()
  await server.listen({ port: 3000 })
}
