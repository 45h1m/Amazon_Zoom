let hoverBox = document.getElementsByClassName('box')[0];
let staticImage = document.getElementsByClassName('static')[0];
let zoomImage = document.getElementsByClassName('zoom')[0];
let zoomX = 0; 
let zoomY = 0;

staticImage.onmousemove = imgZoom;

function imgZoom(event) {

    let imgWidth = staticImage.getBoundingClientRect().width;
    let imgHeight = staticImage.getBoundingClientRect().height;
    let imgX = staticImage.getBoundingClientRect().x;
    let imgY = staticImage.getBoundingClientRect().y;

    let boxWidth = hoverBox.getBoundingClientRect().width;
    let boxHeight = hoverBox.getBoundingClientRect().height;

    let l = event.clientX;
    let t = event.clientY;

    if((l >= imgX + (boxWidth/2)) && l <= ((imgX + imgWidth) - (boxWidth/2))) {

        hoverBox.style.left = l -(boxWidth/2);
        zoomX = (l - (boxWidth/2) - imgX);
        zoomX = ((zoomX / (imgWidth - boxWidth)) * 100);

        zoomImage.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
    }
    
    if((t >= imgY + (boxHeight/2)) && t <= ((imgY + imgHeight) - (boxWidth/2))) {
        
        hoverBox.style.top = t  -(boxHeight/2);
        zoomY = t - (boxWidth/2) - imgY;
        zoomY = ((zoomY / (imgHeight - boxHeight)) * 100);
        
        zoomImage.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
    }
}

//  ASHIM-DAS-JUNE-2021