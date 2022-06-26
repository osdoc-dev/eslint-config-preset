const fs = require('fs')
const path = require('path')
const fsGlob = require('fast-glob')

const isTsPro = async (dir = 'src') => {
  const tsFiles = await fsGlob(`${dir}/**/*.{ts,tsx}`, { deep: 2 })
  return tsFiles.length > 0
}

const TS_PATH = path.join(process.cwd() || '.', './tsconfig.json')

exports.checkTs = () => {
  if (!isTsPro()) return

  if (!fs.existsSync(TS_PATH))
    console.warn('当前项目中存在 typescript 文件，但是没有 tsconfig.json 文件。可能会出问题~')
}
