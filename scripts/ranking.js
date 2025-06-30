document.addEventListener("DOMContentLoaded", () => {
    const personajes = [
        {
            nombre: "All Might",
            rol: "heroe",
            descripcion: "Símbolo de la Paz con el One For All al 100%.",
            poder: 100,
            gif: "../assets/ranking/allmight.gif",
            title: "All Might"
        },
        {
            nombre: "All For One",
            rol: "villano",
            descripcion: "Villano legendario. Maestro del robo de quirks.",
            poder: 97,
            gif: "../assets/ranking/allforone.gif",
            title: "All For One"
        },
        {
            nombre: "Shigaraki",
            rol: "villano",
            descripcion: "Decaimiento + quirks robados. Peligro total.",
            poder: 96,
            gif: "../assets/ranking/tomura.gif",
            title: "Tomura Shigaraki"
        },
        {
            nombre: "Izuku Midoriya",
            rol: "heroe",
            descripcion: "One For All en desarrollo con múltiples quirks.",
            poder: 93,
            gif: "../assets/ranking/deku.gif",
            title: "Izuku Midoriya"
        },
        {
            nombre: "Endeavor",
            rol: "heroe",
            descripcion: "Actual héroe #1 con fuego letal: Hellflame.",
            poder: 90,
            gif: "../assets/ranking/endeavor.gif",
            title: "Endeavor"
        },
        {
            nombre: "Katsuki Bakugo",
            rol: "heroe",
            descripcion: "Explosión bruta y mente estratégica.",
            poder: 88,
            gif: "../assets/ranking/bakugo.gif",
            title: "Katsuki Bakugo"
        },
        {
            nombre: "Shoto Todoroki",
            rol: "heroe",
            descripcion: "Dominio de hielo y fuego, versatilidad absoluta.",
            poder: 86,
            gif: "../assets/ranking/shoto.gif",
            title: "Shoto Todoroki"
        },
        {
            nombre: "Dabi",
            rol: "villano",
            descripcion: "Llama Azul destructiva y pasado oscuro.",
            poder: 82,
            gif: "../assets/ranking/dabi.gif",
            title: "Dabi"
        },
        {
            nombre: "Hawks",
            rol: "heroe",
            descripcion: "Feroz y veloz con control aéreo total.",
            poder: 82,
            gif: "../assets/ranking/hawks.gif",
            title: "Hawks"
        }
    ];

    const main = document.querySelector("main");

    const section = document.createElement("section");
    section.className = "ranking__section";

    const list = document.querySelector("#ranking-list");

    personajes.forEach((personaje) => {
        const card = document.createElement("div");
        card.className = "ranking__card animate__animated animate__fadeInUp";

        card.innerHTML = `
            <img src="${personaje.gif}" alt="${personaje.nombre} Power" class="ranking__gif" title="${personaje.title}" />
            <div class="ranking__body">
            <span class="roles ${personaje.rol}">${personaje.rol === "heroe" ? "Héroe" : "Villano"}</span>
            <h2>${personaje.nombre}</h2>
            <p class="ranking__desc">${personaje.descripcion}</p>
            <div class="power__bar">
            <div class="power__bar-inner" style="width: ${personaje.poder}%;">${personaje.poder}/100</div>
            </div>
            </div>
            `;
        list.appendChild(card);
    });

    section.appendChild(list);
    main.appendChild(section);
});