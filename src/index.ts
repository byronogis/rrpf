/* eslint-disable curly */
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

/**
 * @param target relative path of the file in your project
 * @returns absolute path of the file whenever
 */
const path = (target: string) => {
  let path
  try {
    throw new Error(target)
  }
  catch (err: any) {
    const source = err.stack?.split(' at ')[2]?.trim()
    let sourcePath = source
    if (['(', ')'].every(i => sourcePath.includes(i))) {
      sourcePath = source.match(/\((.*)\)/)[1]
    }
    if (sourcePath.startsWith?.('file://')) {
      sourcePath = fileURLToPath(sourcePath)
    }
    path = resolve(sourcePath, '../', target)
  }
  return path
}

export default path
