class AddToast {
    constructor() {
        this.template = `
        <div class="toast">
            <div class="message"></div>
            <div class="close" data-close-div>X</div>
        </div>
        `
    }
    displayToasts() {
    document.querySelectorAll('.toast').forEach((element) => {
        element.style.opacity = 1

        // addEventCloseToast(element, element.querySelector('.close'))
        // closeToast(element)
    })
}

}