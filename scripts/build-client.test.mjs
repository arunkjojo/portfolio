import { describe, expect, it } from 'vitest'
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { buildClientEntry } from './build-client.mjs'

describe('buildClientEntry', () => {
  it('rewrites the root HTML to use generated assets', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'portfolio-build-'))
    const distDir = join(tempDir, 'dist', 'client')
    mkdirSync(distDir, { recursive: true })
    mkdirSync(join(distDir, 'assets'), { recursive: true })

    writeFileSync(join(tempDir, 'index.html'), '<!doctype html><body><script type="module" src="/src/main.tsx"></script></body></html>', 'utf8')
    writeFileSync(join(distDir, 'assets', 'index-abc123.js'), 'console.log("ok")', 'utf8')
    writeFileSync(join(distDir, 'assets', 'styles-xyz.css'), 'body { color: red; }', 'utf8')

    const outputPath = buildClientEntry(tempDir)
    const html = readFileSync(outputPath, 'utf8')

    expect(html).toContain('/assets/index-abc123.js')
    expect(html).toContain('/assets/styles-xyz.css')
    expect(html).not.toContain('/src/main.tsx')

    rmSync(tempDir, { recursive: true, force: true })
  })
})
