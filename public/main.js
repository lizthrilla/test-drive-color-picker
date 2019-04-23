let hue = 290
let sat = 55
let light = 55

const getHSL = () => {
  return `hsl(${hue}, ${sat}, ${light})`
}

const setColor = () => {
  document.querySelector('.colorName').textContent = getHSL()

  console.log(getHSL())

  const swatch = document.querySelector('div.swatch')
  swatch.style.backgroundColor = getHSL()
  // console.log(swatch)
}

const main = () => {
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    setColor()
  })

  const satInput = document.querySelector('input[name=sat]')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    setColor()
  })


  setColor()
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Color Picker'
  }
}

document.addEventListener('DOMContentLoaded', main)
