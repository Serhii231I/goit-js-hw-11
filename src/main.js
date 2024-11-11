
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { serverRequest } from "./js/pixabay-api";
import { renderMarkup } from "./js/render-functions";

const BASE_URL = "https://pixabay.com/api/"
const MY_API_KEY = "46875254-682524027d328dbaad660da8e";

const loader = document.querySelector(".loader")

const form = document.querySelector(".search-form")
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const query = document.querySelector(".search-input").value.trim();
    if (query === "") {
        return;
    }
    loader.textContent = "Loading images, please wait..."
    form.reset()
    
    const params = new URLSearchParams({
    key: MY_API_KEY,
    q: query,
    image_type: "photo",
    orientation:"horizontal",
    safesearch:"true"
})

    const list = document.querySelector(".gallery-list")
    list.innerHTML = "";

serverRequest(`${BASE_URL}?${params}`)
    .then(data => {
        if (data.hits.length===0) {
                iziToast.warning({
                title: 'Caution',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
        }
        list.insertAdjacentHTML("beforeend", renderMarkup(data.hits))
      const simpleLightBox = new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
    captionDelay: 250,
})
    })
    .catch(error => {
        console.log(error);
        
    })
    .finally(() => {
loader.textContent = ""
    })
}


  