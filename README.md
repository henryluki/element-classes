# element-classes
A light weight way to add or remove classes on a HTML element

## How to use
```
import ElementClasses from './elementClasses'

// get an instance
let elem = new ElementClasses(element)

```

## Methods

### addClass(className)

Add class for this element if this element does not has this className

### removeClass(className)

Remove class from this element if this element has this className

### toggleClass(className)

If this className does not exit, add this className, otherwise remove this className

### hasClass(className)

Check this className exits or not


## Plus

- Chain

` elem.addClass("hidden").addClass("disappear")...`



