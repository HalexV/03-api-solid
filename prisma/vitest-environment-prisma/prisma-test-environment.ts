import { Environment } from 'vitest'

// Vai executar antes de cada arquivo de testes

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Executou')

    return {
      teardown() {},
    }
  },
}
