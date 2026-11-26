const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navlists');
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/800x500/aba-nigeria-temple-lds-248708-high-res-print.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/800x500/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/800x450/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/800x500/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/800x500/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/800x500/lima-peru-mormon-temple-911889-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/800x500/mexico-city-temple-exterior-1518357-wallpaper.jpg"
    },

    {
        templeName: "Rome Italy",
        location: "Rome Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/4-Rome-Temple-2160935.jpg"
    },

    {
        templeName: "Apia Samoa",
        location: "Apia Samoa",
        dedicated: "1983, August, 7",
        area: 18691,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/800x500/apia-samoa-temple-lds-460475-wallpaper.jpg"
    },

    {
        templeName: "Madrid Spain",
        location: "Madrid Spain",
        dedicated: "1999, March 19",
        area: 45800,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/800x500/madrid-spain-mormon-temple-954942-wallpaper.jpg"
    },
];



function createTempleCard(templeList) {

    const container = document.querySelector(".container");

    // Clear the previous temple cards
    container.innerHTML = "";

    templeList.forEach(temple => {

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Size:</span> ${temple.area} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        container.appendChild(card);

    });
}


const navLinks = document.querySelectorAll(".navlists a");

navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);
    });
});


function filterTemples(filter) {

    let filteredTemples = [];

    if (filter === "old") {
        filteredTemples = temples.filter(temple =>
            parseInt(temple.dedicated) < 1900
        );
    }

    else if (filter === "new") {
        filteredTemples = temples.filter(temple =>
            parseInt(temple.dedicated) > 2000
        );
    }

    else if (filter === "large") {
        filteredTemples = temples.filter(temple =>
            temple.area > 90000
        );
    }

    else if (filter === "small") {
        filteredTemples = temples.filter(temple =>
            temple.area < 10000
        );
    }

    else {
        filteredTemples = temples;
    }

    createTempleCard(filteredTemples);
}

createTempleCard(temples);