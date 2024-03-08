var body = document.body
var button = document.querySelector('input.toggle')
var container = document.querySelector('section.container')
var header = document.querySelector('header.header')
var products = document.querySelector('ol.products')
var submit = document.querySelector('button.input-submit')

button.addEventListener("click", function(){
    if(button.checked){
        body.classList = 'body_whiteTheme'
        container.classList = 'container_whiteTheme'
        header.classList = 'header_whiteTheme'
        products.classList = 'products_whiteTheme'
        submit.classList = 'input-submit_whiteTheme'
    }
    else{
        body.classList = 'body'
        container.classList = 'container'
        header.classList = 'header'
        products.classList = 'products'
        submit.classList = 'input-submit'
    }
})