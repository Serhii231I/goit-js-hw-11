import{i as u,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(s){return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(s){return s.map(({webformatURL:r,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:l})=>`
       <li class="gallery-item">
       <a href="${o}">
        <img
        class = "gallery-image"
        src = "${r}"
        data-source = "${o}"
        alt = "${i}"
        width= 360;
        height= 200;
        />
        </a>
        <div class="main-review-container">
         <div class="review-container">
         <h3 class="review-header">Likes</h3>
         <p class="review-text">${e}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Views</h3>
         <p class="review-text">${t}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Comments</h3>
         <p class="review-text">${n}</p>
         </div>
         <div class="review-container">
         <h3 class="review-header">Downloads</h3>
         <p class="review-text">${l}</p>
         </div>
          </div>
        </li>
        
        `).join("")}const m="https://pixabay.com/api/",p="46875254-682524027d328dbaad660da8e",a=document.querySelector(".loader"),c=document.querySelector(".search-form");c.addEventListener("submit",v);function v(s){s.preventDefault();const r=document.querySelector(".search-input").value.trim();if(r==="")return;a.textContent="Loading images, please wait...",c.reset();const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=document.querySelector(".gallery-list");i.innerHTML="",h(`${m}?${o}`).then(e=>{e.hits.length===0&&u.warning({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!"}),i.insertAdjacentHTML("beforeend",f(e.hits)),new d(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(e=>{console.log(e)}).finally(()=>{a.textContent=""})}
//# sourceMappingURL=index.js.map
