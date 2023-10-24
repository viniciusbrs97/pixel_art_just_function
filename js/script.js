
function create_grid(){
    const whiteOne = document.createElement("div")
    whiteOne.className = 'color0'
    whiteOne.addEventListener('click',get_element_color)
    const flexContainer = document.getElementsByClassName("changeColorContainer")
    flexContainer[0].appendChild(whiteOne)
    
    for(let i = 1; i<=4;i++){
        const colorPixel = document.createElement("div")
        colorPixel.className = 'color' + i
        color_pixel(colorPixel)
        const element = document.getElementsByClassName("color-generator")
        colorPixel.addEventListener('click',get_element_color)
        element[0].appendChild(colorPixel)
    }
    for(let i = 1; i<=64;i++){
    const pixel = document.createElement("div")
    pixel.className = 'pixel' + i
    pixel.addEventListener('click',paint)
    const element = document.getElementsByClassName("pixel-grid")
    element[0].appendChild(pixel)
    }
   
}





function color_pixel(element){
    const red = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
   element.style.backgroundColor = 'rgb(' + red +","+ green +","+ blue +")"  
}

function attColors(e){
for(let i = 1; i<=4;i++){
    const colorPixel = document.getElementsByClassName('color' + i)[0]
    color_pixel(colorPixel)

    }
}







function get_element_color(e){
    const class_name = e.target.className

    for (let i= 0;i<=63;i++){
      document.querySelectorAll('.pixel-grid> div')[i].className = class_name  + 'pixel' + i
      console.log(document.querySelectorAll('.pixel-grid> div')[i].className)  
   }
}


function paint (e){
    const elementClassName = e.target.className

    for(let i = 0; i<=4;i++){
        if (elementClassName.startsWith('color'+ i )){
            e.target.style.backgroundColor = document.getElementsByClassName('color'+i)[0].style.backgroundColor
        }

    }
}


function BlackAndWhite(){
    let button = document.getElementsByClassName('changeColorButton')[0].children[0]
    console.log(button)

    if (button.innerHTML == 'PRETO'){
        button.innerHTML = 'BRANCO'
        document.getElementsByClassName('color0')[0].style.backgroundColor='black'
    }
    else{
        button.innerHTML = 'PRETO'
        document.getElementsByClassName('color0')[0].style.backgroundColor='white'
    }


}
create_grid()