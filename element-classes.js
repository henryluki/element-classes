export default class ElementClasses {
    constructor(elem) {
        this.elem = elem
    }

    _addClass(className){
        if (this.elem && this.elem.className) {
            this.elem.className += ` ${className}`
        }
        return this
    }

    _removeClass(className){
        if (this.elem && this.elem.className) {
            this.elem.className = this.elem.className.replace(` ${className}`, "")
        }
        return this
    }

    hasClass(className){
        const reg = new RegExp(`${className}`)
        return this.elem && this.elem.className ? reg.test(this.elem.className) : false
    }

    toggleClass(className, action=""){
        if (!className || typeof className !== "string") { return }
        const isHasClass = this.hasClass(className)
        if (action) {
            if (action === "add") {
                if (!isHasClass) {
                    return this._addClass(className)
                } else {
                    return this
                }
            } else if (action == "remove"){
               return this._removeClass(className)
            }
        } else {
            if (!isHasClass) {
                return this._addClass(className)
            } else {
                return this._removeClass(className)
            }
        }
    }

    addClass(className){
        return this.toggleClass(className, "add")
    }

    removeClass(className){
        return this.toggleClass(className, "remove")
    }
}
