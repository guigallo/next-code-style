import fs from 'fs'
import path from 'path'
import marked from 'marked'

function readMarkdown(lang, fileName) {
  const file = fs.readFileSync(
    path.join('public', 'locales', lang, fileName),
    'utf8'
  )

  return marked(file)
}

export default readMarkdown
