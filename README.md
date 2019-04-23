# Pick a Color, any Color

In this assignment, you'll create an HSL(a) color picker.

### First, a _little_ bit of color theory...

On the web, and computers in general, we often think of colors using the [**RGB**](https://en.wikipedia.org/wiki/RGB_color_model) color model. In HTML and CSS, we often use [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) triplets to describe colors in RGB. For example, `#76BCBB` represents a nice shade of blue: <span style="display: inline-block; background-color: #76BCBB; width: 1em; height: 1em; border-radius: 0.5em"></span>. `76` is the red component, `BC` for green, and `BB` for blue. Those hexadecimal numbers translate, respectively, to `118`, `188`, `187` in decimal. The range for each color is `0` through `255`.

In this model, the three _additive_ primary colors (red, green, and blue) are combined to create colors. The absence of these colors creates black, while all three colors at full strength combine to create white. In hexadecimal, `FF` represent the decimal value `255`. This helps to explain why `#FFFFFF` represents white. We can also use other notations in CSS to specify colors, such as `rgb(118, 188, 187)`, where the decimal values are given.

RGB isn't the only way we can use numbers to represent colors; there exists _many_ color models, some with specialized purposes, such as [**CMYK**](https://en.wikipedia.org/wiki/CMYK_color_model) a _subtractive_ model used in printing. In many color models the relationship between the color components isn't always evident in any meaningful way, especially if you're trying to combine them to find a specific color. Try looking for that perfect shade of blue on an RGB color picker, you will probably find it to be a little counter-intuitive. Some color models are easy to reason about, such as [**HSL**](https://en.wikipedia.org/wiki/HSL_and_HSV) (hue, saturation, lightness) and **HSB** (hue, saturation, brightness). Like RGB, CSS supports defining colors in HSL:

`hsl(50,8%,20%)`

The first value `hue` is given as a degrees (around a color wheel), the second value is a percentage of saturation (0% being grey, 100% fully saturated), and the third value, a percentage of lightness (0% black, 100% white).

You can also read [this short guide to HSL](https://www.nixsensor.com/what-is-hsl-color/)

## Objectives

- Respond to user events
- Use controlled inputs
- Understand RGB vs HSL color models


## Requirements

Use `range` type `input` elements to drive a color display. You'll end up with something like this:

[ColorPicker](https://raw.githubusercontent.com/lizthrilla/color-picker/master/color_picker.png)

### Explorer Mode

- [ ] Represent the three values, `hue`, `saturation`, and `lightness`.
- [ ] Add three sliders that update their respective values (`hue`, `saturation`, and `lightness`) when changed.
- [ ] Display the color on the screen, in both text (i.e. `hsl(50, 8%, 20%)`) and the actual color as a background color on an element.
- [ ] Initialize a random color when the page is loaded.
- [ ] Add a button that picks a new random color.

### Adventure Mode

- [ ] Add a fourth slider for `alpha`, be sure to put some kind of pattern behind your color so the user can see the transparency effect.
- [ ] Add a section that displays a css class that applies the current background color to an element, just like [https://cssgradient.io/](https://cssgradient.io/)
- [ ] Only display the output color text in `hsla()` if the alpha value is less than `1`.

In both cases, the sliders should be in the correct positions to represent this random color.

## Additional Resources

- [HSL Color Picker](http://hslpicker.com/)
- [`hsl()` and `hsla()`][1] on MDN

[1]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl()_and_hsla()