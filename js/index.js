



// hero section
let heroSection = document.querySelector(".hero");
heroSection.innerHTML = `
    <img src="${hero.image}" alt="Hero Image">
    <div class="hero__content">
        <section class="hero__section">
            <h1>${hero.headline.replace("save your time", '<span class="highlight">save your time</span>')}</h1>
            <p>${hero.copy}</p>
            <button class="hero__bttn">
                <img class="hero__bttn-icon" src="${hero.icon}" alt="Hero Icon"> Explore
            </button>
        </section>
    </div>
    `;

// services section
let servicesContainer = document.querySelector(".services");

servicesContainer.innerHTML = services.map(service => `
    <article class="service__cards">
    <img src="${service.illustration}" alt="Service Illustration">
    <h3 class="service__heading">${service.headline}</h3>
    <p class="service__txt">${service.text}</p>
    <a href="#" class="service__linktxt">${service.linktext}</a>
    </article>
    `).join("");


// facilities section
let facilitiesBox = document.querySelector(".facilities");


facilitiesBox.innerHTML = `<h2>${facilities.headline}</h2>`;


facilitiesBox.innerHTML += facilities.options.map(option => `
    <div class="facility">
    <img src="${option.icon}" alt="${option.headline}">
    <h3>${option.headline}</h3>
    <p>${option.text}</p>
    </div>
    `).join("");
    
    // sites section
    let sitesContainer = document.querySelector(".sites");
    
    
    sitesContainer.innerHTML = `
    <h2>${sites.headline}</h2>
    <p>${sites.text}</p>
    <button class="explore-btn">
        Explore <img src="${sites.btnicon}" alt="Arrow Icon">
    </button>
    <div class="places-container">
        ${sites.places.map(place => `
            <div class="place">
                <img src="${place.img}" alt="${place.name}">
                <h3>${place.name}</h3>
                <p>${place.city}</p>
                </div>
                `).join("")}
    </div>
    `;
// advantages section

let advantagesContainer = document.querySelector(".advantages");

advantagesContainer.innerHTML = advantages.map(advantage => `
    <div class="advantage">
    <img src="${advantage.icon}" alt="${advantage.headline}">
    <h3>${advantage.headline}</h3>
    <p>${advantage.text}</p>
    </div>
    `).join("");
        
        
        
    let headerSection = document.querySelector(".header");
    headerSection.innerHTML = `
        <div class="header__container">
            <a href="#" class="header__logo">
                ${header.logo}
            </a>
            <button class="header__button">
                <i class="${header.button.icon}"></i>
            </button>
        </div>
    `;
        // fontawesome        
        let fontAwesome = document.createElement("link");
        fontAwesome.rel = "stylesheet";
        fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
        document.head.appendChild(fontAwesome);

        
        //eksempel på at udskrive alle overskrifter i services i konsollen:
        services.forEach(service => console.log(service.headline))