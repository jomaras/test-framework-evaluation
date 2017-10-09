const mainSliderImage = document.querySelector("#main-slider .main-slider-image");
const thumbnails = document.querySelectorAll("#main-slider .thumbnail");

thumbnails.forEach(thumbnail => {
    const dataLargeImageSrc = thumbnail.getAttribute("data-large-image-src");
    if(dataLargeImageSrc){
        const image = new Image();
        image.src = dataLargeImageSrc;
    }

    thumbnail.addEventListener("click", e => {
        const clickedOnThumbnail = e.currentTarget;
        
        mainSliderImage.src = clickedOnThumbnail.getAttribute("data-large-image-src");

        const currentlySelectedThumbnail = document.querySelector("#main-slider .thumbnail.selected");
        if(currentlySelectedThumbnail){
            currentlySelectedThumbnail.classList.remove("selected");
        }

        clickedOnThumbnail.classList.add("selected");
    });
});