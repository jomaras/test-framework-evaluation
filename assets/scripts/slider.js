const mainSliderImage = document.querySelector("#main-slider .main-slider-image");
const thumbnails = document.querySelectorAll("#main-slider .thumbnail");

thumbnails.forEach(thumbnail => {
    const dataLargeImageSrc = thumbnail.getAttribute("data-large-image-src");
    if(dataLargeImageSrc){
        const image = new Image();
        image.src = dataLargeImageSrc;
    }

    thumbnail.addEventListener("click", e => selectThumbnail(e.currentTarget));
});

document.querySelector("#main-slider .slider-arrow-left").addEventListener("click", () => {
    let index = getSelectedThumbnailIndex();

    index--;

    if(index < 0){ index = thumbnails.length - 1; }

    selectThumbnail(thumbnails[index]);
});

document.querySelector("#main-slider .slider-arrow-right").addEventListener("click", () => {
    let index = getSelectedThumbnailIndex();
    
    index++;

    if(index >= thumbnails.length){ index = 0; }

    selectThumbnail(thumbnails[index]);
});

function getSelectedThumbnailIndex(){
    const thumbnails = document.querySelectorAll("#main-slider .thumbnail");
    const currentlySelectedThumbnail = document.querySelector("#main-slider .thumbnail.selected");
    
    for(let i = 0; i < thumbnails.length; i++){
        if(thumbnails[i] == currentlySelectedThumbnail){
            return i;
        }
    }

    return -1;
}

function selectThumbnail(thumbnail){
    if(thumbnail == null) { return; }

    mainSliderImage.src = thumbnail.getAttribute("data-large-image-src");
    
    const currentlySelectedThumbnail = document.querySelector("#main-slider .thumbnail.selected");
    if(currentlySelectedThumbnail){
        currentlySelectedThumbnail.classList.remove("selected");
    }

    thumbnail.classList.add("selected");
}