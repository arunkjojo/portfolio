import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

export function buildClientEntry(rootDir = process.cwd()) {
  const distDir = join(rootDir, 'dist', 'client')
  const rootHtmlPath = join(rootDir, 'index.html')

  if (!existsSync(rootHtmlPath)) {
    throw new Error(`Expected source HTML at ${rootHtmlPath}`)
  }

  mkdirSync(distDir, { recursive: true })

  const rootHtml = readFileSync(rootHtmlPath, 'utf8')
  const assetsDir = join(distDir, 'assets')
  const assetFiles = existsSync(assetsDir) ? readdirSync(assetsDir) : []
  const entryJs = assetFiles.find((name) => /^index-.*\.js$/.test(name))
  const stylesCss = assetFiles.find((name) => /^styles-.*\.css$/.test(name))

  if (!entryJs) {
    throw new Error(`No built entry JavaScript bundle was found in ${assetsDir}`)
  }

  const assetTags = []
  if (stylesCss) {
    assetTags.push(`<link rel="stylesheet" href="/assets/${stylesCss}">`)
  }
  assetTags.push(`<script type="module" crossorigin src="/assets/${entryJs}"></script>`)

  const builtHtml = rootHtml.replace(
    /<script type="module"[^>]*src="\/src\/main\.tsx"[^>]*><\/script>/,
    assetTags.join('\n    '),
  )

  const outputPath = join(distDir, 'index.html')
  writeFileSync(outputPath, builtHtml, 'utf8')
  return outputPath
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const outputPath = buildClientEntry(process.cwd())
  console.log(`Wrote ${outputPath}`)
}
