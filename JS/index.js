const windowInnerWidth = window.innerWidth 
const windowInnerHeight = window.innerHeight
const btn = document.querySelector('.buttonClick')

btn.addEventListener('click', () =>{
    let width = windowInnerWidth
    let height = windowInnerHeight
    alert(`Your screen width: ${width}px. \n Your screen height: ${height}px`)
})