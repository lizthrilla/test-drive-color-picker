let hue = 170
let sat = 100
let light = `55%`
let alpha = 1

const getHSL = () => {
  return `hsla(${hue}, ${sat}%, ${light}, ${alpha})`
}

const setColor = () => {
  document.querySelector('.colorName').textContent = getHSL()
  const swatch = document.querySelector('div.swatch')
  swatch.style.backgroundColor = getHSL()
  // document.querySelector('.satcolor').style.backgroundColor = getHSL()
}

const main = () => {
  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    console.log(getHSL())
    setColor()
  })

  const satInput = document.querySelector('input[name=sat]')
  satInput.addEventListener('input', () => {
    sat = satInput.value
    console.log(getHSL())
    setColor()
  })

  const lightInput = document.querySelector('input[name=light]')
  lightInput.addEventListener('input', () => {
    light = lightInput.value
    console.log(getHSL())
    setColor()
  })

  // const alphaInput = document.querySelector('input[name=alpha]')
  // alphaInput.addEventListener('input', () => {
  //   alpha = alphaInput.value
  //   console.log(getHSL())
  //   colorChange()
  // })

  setColor()
}

document.addEventListener('DOMContentLoaded', main)
