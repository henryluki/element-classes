# element-classes
A light weight way to add or remove classes on a HTML element

### How to use
```
import ElementClasses from './elementClasses'

// get an instance
let elem = new ElementClasses(element)

```

### Methods

add class for this element if this element does not has this className

- `addClass(className)`

remove class from this element if this element has this className

- `removeClass(className)`

if this className does not exit, add this className, otherwise remove this className

- `toggleClass(className)`

check this className eixts or not

- `hasClass(className)`

### Plus

- Chain

` elem.addClass("hidden").addClass("disappear")...`


