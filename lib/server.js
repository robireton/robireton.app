import { timestamp } from '@robireton/chrono'
import config from './config.js'
import framework from './framework.js'

const server = framework.listen(config.http, () => {
  const addr = server.address()
  console.log('%srobireton.app listening on %s:%s', config.log.stamp ? `${timestamp()}\t` : '', addr.address, addr.port)
})

server.on('close', () => console.log('%sServer closed', config.log.stamp ? `${timestamp()}\t` : ''))
process.on('exit', code => console.log('%sExit with code %s', config.log.stamp ? `${timestamp()}\t` : '', code))
for (const signal of ['SIGUSR2', 'SIGINT', 'SIGTERM']) {
  process.on(signal, s => {
    console.log('%sSignal: %s', config.log.stamp ? `${timestamp()}\t` : '', s)
    server.close(err => {
      err && console.error('%sError %s while closing server', config.log.stamp ? `${timestamp()}\t` : '', err)
      process.exit()
    })
  })
}
