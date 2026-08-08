import { CanvasTexture, Shape, ShapeGeometry, SRGBColorSpace } from 'three'

export function supportsWebGL() {
  const canvas = document.createElement('canvas')
  return !!(canvas.getContext('webgl2') || canvas.getContext('webgl'))
}

export function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ')
  let line = ''
  let cursorY = y

  words.forEach((word, index) => {
    const candidate = `${line}${word} `
    if (ctx.measureText(candidate).width > maxWidth && index > 0) {
      ctx.fillText(line, x, cursorY)
      line = `${word} `
      cursorY += lineHeight
    } else {
      line = candidate
    }
  })

  ctx.fillText(line, x, cursorY)
}

// Draws a metric card (big value + wrapped label + accent spine) onto a 2D canvas
// that is then used as the texture for a plane in the 3D ring.
export function makeCardTexture(value, label, accent) {
  const canvas = document.createElement('canvas')
  canvas.width = 768
  canvas.height = 448

  const ctx = canvas.getContext('2d')
  if (!ctx) return new CanvasTexture(canvas)

  ctx.fillStyle = '#f7f7f2'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.strokeStyle = '#160008'
  ctx.lineWidth = 10
  ctx.strokeRect(22, 22, canvas.width - 44, canvas.height - 44)
  ctx.fillStyle = accent
  ctx.fillRect(22, 22, 96, canvas.height - 44)
  ctx.fillStyle = '#160008'
  ctx.font = '700 74px ui-monospace, SFMono-Regular, Menlo, monospace'
  ctx.fillText(value, 152, 184)
  ctx.font = '500 36px Inter, Arial, sans-serif'
  wrapText(ctx, label, 154, 252, 540, 45)

  const texture = new CanvasTexture(canvas)
  texture.colorSpace = SRGBColorSpace
  texture.anisotropy = 8
  return texture
}

export function makeStarGeometry() {
  const shape = new Shape()
  const points = 8

  for (let i = 0; i < points * 2; i += 1) {
    const radius = i % 2 === 0 ? 0.5 : 0.11
    const angle = (i / (points * 2)) * Math.PI * 2
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }

  shape.closePath()
  return new ShapeGeometry(shape)
}
