import env from '@robireton/environment'

const config = {
  production: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV === 'debug',
  http: {
    port: env.parseInt('HTTP_PORT', process.env.NODE_ENV === 'production' ? 80 : 8080),
    host: process.env.HTTP_HOST || (process.env.NODE_ENV === 'production' ? undefined : 'localhost')
  },
  log: {
    stamp: env.parseBool('LOG_STAMP'),
    method: env.parseBool('LOG_METHOD'),
    path: env.parseBool('LOG_PATH'),
    user: env.parseBool('LOG_USER'),
    ip: env.parseBool('LOG_IP'),
    ua: env.parseBool('LOG_UA')
  }
}

config.debug && console.debug(config)

export default config
