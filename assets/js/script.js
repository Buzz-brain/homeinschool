'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 100 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

let propertyArray = [
    {
        lodgeImg: "./assets/images/herobanner4.png",
        address: 'Ihiagwa',
        duration: 'Year',
        price: '#120,000',
        title: "New built lodge in Ihiagwa",
        description: "I can choose to write on the property",
        location: "Owerri, Imo, Nigera",
        purpose: 'Rent',
        bathroom: "1",
        bedroom: "5",
        balcony: "1",
        agentName: "Buzz brain",
        pictureCount: "8",
        videoCount: "5"
    },
    {
        lodgeImg: "./assets/images/herobanner2.png",
        address: 'Eziobodo',
        duration: 'Month',
        price: '#120,000',
        title: "Lodge in Eziobodo, Close to BJ services",
        description: "I can choose to write on the property",
        location: "Owerri, Imo, Nigera",
        purpose: 'Rent',
        bathroom: "1",
        bedroom: "3",
        balcony: "1",
        agentName: "Sir Bello",
        pictureCount: "2",
        videoCount: "4"
    },
    {
        lodgeImg: "./assets/images/herobanner3.png",
        address: 'Umuchima',
        duration: 'Year',
        price: '#120,000',
        title: "Umuchima Lodge, Close to Hostel A",
        description: "I can choose to write on the property",
        location: "Owerri, Imo, Nigera",
        purpose: 'Rent',
        bathroom: "1",
        bedroom: "1",
        balcony: "1",
        agentName: "Mr. Onos",
        pictureCount: "6",
        videoCount: "5"
    },
    {
        lodgeImg: "./assets/images/herobanner4.png",
        address: 'Ihiagwa',
        duration: 'Year',
        price: '#120,000',
        title: "New built lodge in Ihiagwa",
        description: "I can choose to write on the property",
        location: "Owerri, Imo, Nigera",
        purpose: 'Rent',
        bathroom: "1",
        bedroom: "5",
        balcony: "1",
        agentName: "Buzz brain",
        pictureCount: "8",
        videoCount: "5"
    },
    {
        lodgeImg: "./assets/images/herobanner3.png",
        address: 'Umuchima',
        duration: 'Year',
        price: '#120,000',
        title: "Umuchima Lodge, Close to Hostel A",
        description: "I can choose to write on the property",
        location: "Owerri, Imo, Nigera",
        purpose: 'Rent',
        bathroom: "1",
        bedroom: "1",
        balcony: "1",
        agentName: "Mr. Onos",
        pictureCount: "6",
        videoCount: "5"
    },
    {
        lodgeImg: "./assets/images/herobanner2.png",
        address: 'Eziobodo',
        duration: 'Month',
        price: '#120,000',
        title: "Lodge in Eziobodo, Close to BJ services",
        description: "I can choose to write on the property",
        location: "Owerri, Imo, Nigera",
        purpose: 'Rent',
        bathroom: "1",
        bedroom: "3",
        balcony: "1",
        agentName: "Sir Bello",
        pictureCount: "2",
        videoCount: "4"
    },

]

let propertyList = document.getElementsByClassName("property-list")[0]

for (let i = 0; i<propertyArray.length; i++) {
    let property = document.createElement("li");
    property.innerHTML = `
                <div class="property-card">
                    <figure class="card-banner">
                    <a href="#"><img src="${propertyArray[i].lodgeImg}" alt="New Apartment Nice View" class="w-100"></a>
                    <button class=" fav">
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>
                    <div class="card-badge green">For ${propertyArray[i].purpose}</div>
                    
                    <div class="banner-actions">
                        <button class="banner-actions-btn">
                        <ion-icon name="location"></ion-icon>
                        <address>${propertyArray[i].address}</address>
                        </button>

                        <button class="banner-actions-btn"> <ion-icon name="camera"></ion-icon>
                        <span>${propertyArray[i].pictureCount}</span>
                        </button>

                        <button class="banner-actions-btn">
                        <ion-icon name="film"></ion-icon> <span>${propertyArray[i].videoCount}</span>
                        </button>
                    </div>
                    </figure>

                    <div class="card-content">
                    <div class="card-price color">
                        <strong>${propertyArray[i].price}</strong>/${propertyArray[i].duration}
                    </div>

                    <h3 class="h3 card-title">
                        <a href="#">${propertyArray[i].title}</a>
                    </h3>

                    <p class="card-text" style="display: none;">
                        ${propertyArray[i].description}
                    </p>

                    <p class="location">
                        ${propertyArray[i].location}
                    </p>

                    <ul class="card-list">
                        <li class="card-item">
                        <strong>${propertyArray[i].bedroom}</strong>
                        <ion-icon name="bed-outline"></ion-icon>
                        <span>${propertyArray[i].bedroom == '1' ? "Bedroom" : "Bedrooms"}</span>
                        </li>

                        <li class="card-item">
                        <strong>${propertyArray[i].bathroom}</strong>
                        <ion-icon name="man-outline"></ion-icon>
                        <span>${propertyArray[i].bathroom == '1' ? "Bathroom" : "Bathrooms"}</span>
                        </li>

                        <li class="card-item">
                        <strong>${propertyArray[i].balcony}</strong>
                        <ion-icon name="square-outline"></ion-icon>
                        <span>${propertyArray[i].balcony == '1' ? "Balcony" : "Balconys"}</span>
                        </li>

                    </ul>

                    </div>

                    <div class="card-footer">

                    <div class="card-author">

                        <figure class="author-avatar">
                        <img src="./assets/images/agent.png" alt="William Seklo" class="w-100">
                        </figure>

                        <div>
                        <p class="author-name">
                            <a href="#">${propertyArray[i].agentName}</a>
                        </p>
                        <p class="author-title">Agent</p>
                        </div>
                    </div>

                    

                    </div>

                </div>
             `
    propertyList.append(property)
}  

let propertyMostViewed = document.getElementsByClassName("property-most-viewed")[0]

for (let i = 0; i<propertyArray.length; i++) {
    let property = document.createElement("li");
    property.innerHTML = `
                <div class="property-card">
                    <figure class="card-banner">
                    <a href="#"><img src="${propertyArray[i].lodgeImg}" alt="New Apartment Nice View" class="w-100"></a>
                    <button class=" fav">
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>
                    <div class="card-badge green">For ${propertyArray[i].purpose}</div>
                    
                    <div class="banner-actions">
                        <button class="banner-actions-btn">
                        <ion-icon name="location"></ion-icon>
                        <address>${propertyArray[i].address}</address>
                        </button>

                        <button class="banner-actions-btn"> <ion-icon name="camera"></ion-icon>
                        <span>${propertyArray[i].pictureCount}</span>
                        </button>

                        <button class="banner-actions-btn">
                        <ion-icon name="film"></ion-icon> <span>${propertyArray[i].videoCount}</span>
                        </button>
                    </div>
                    </figure>

                    <div class="card-content">
                    <div class="card-price color">
                        <strong>${propertyArray[i].price}</strong>/${propertyArray[i].duration}
                    </div>

                    <h3 class="h3 card-title">
                        <a href="#">${propertyArray[i].title}</a>
                    </h3>

                    <p class="card-text" style="display: none;">
                        ${propertyArray[i].description}
                    </p>

                    <p class="location">
                        ${propertyArray[i].location}
                    </p>

                    <ul class="card-list">
                        <li class="card-item">
                        <strong>${propertyArray[i].bedroom}</strong>
                        <ion-icon name="bed-outline"></ion-icon>
                        <span>${propertyArray[i].bedroom == '1' ? "Bedroom" : "Bedrooms"}</span>
                        </li>

                        <li class="card-item">
                        <strong>${propertyArray[i].bathroom}</strong>
                        <ion-icon name="man-outline"></ion-icon>
                        <span>${propertyArray[i].bathroom == '1' ? "Bathroom" : "Bathrooms"}</span>
                        </li>

                        <li class="card-item">
                        <strong>${propertyArray[i].balcony}</strong>
                        <ion-icon name="square-outline"></ion-icon>
                        <span>${propertyArray[i].balcony == '1' ? "Balcony" : "Balconys"}</span>
                        </li>

                    </ul>

                    </div>

                    <div class="card-footer">

                    <div class="card-author">

                        <figure class="author-avatar">
                        <img src="./assets/images/agent.png" alt="William Seklo" class="w-100">
                        </figure>

                        <div>
                        <p class="author-name">
                            <a href="#">${propertyArray[i].agentName}</a>
                        </p>
                        <p class="author-title">Agent</p>
                        </div>
                    </div>

                    

                    </div>

                </div>
             `
    propertyMostViewed.append(property)
}  