document.addEventListener("DOMContentLoaded", () => {
    const personajes = [
        {
            nombre: "All Might",
            rol: "heroe",
            descripcion: "Símbolo de la Paz con el One For All al 100%.",
            poder: 100,
            gif: "../assets/gifs/allmight.gif"
        },
        {
            nombre: "Izuku Midoriya",
            rol: "heroe",
            descripcion: "One For All en desarrollo con múltiples quirks.",
            poder: 88,
            gif: "../assets/gifs/deku-oneforall.gif"
        },
        {
            nombre: "Shoto Todoroki",
            rol: "heroe",
            descripcion: "Dominio de hielo y fuego, versatilidad absoluta.",
            poder: 85,
            gif: "../assets/gifs/shoto-todoroki.gif"
        },
        {
            nombre: "Katsuki Bakugo",
            rol: "heroe",
            descripcion: "Explosión bruta y mente estratégica.",
            poder: 84,
            gif: "../assets/gifs/bakugo.gif"
        },
        {
            nombre: "Endeavor",
            rol: "heroe",
            descripcion: "Actual héroe #1 con fuego letal: Hellflame.",
            poder: 90,
            gif: "../assets/gifs/endeavor.gif"
        },
        {
            nombre: "Tomura Shigaraki",
            rol: "villano",
            descripcion: "Decaimiento + quirks robados. Peligro total.",
            poder: 96,
            gif: "../assets/gifs/shigaraki.gif"
        },
        {
            nombre: "All For One",
            rol: "villano",
            descripcion: "Villano legendario. Maestro del robo de quirks.",
            poder: 97,
            gif: "../assets/gifs/allforone.gif"
        },
        {
            nombre: "Dabi",
            rol: "villano",
            descripcion: "Llama Azul destructiva y pasado oscuro.",
            poder: 80,
            gif: "../assets/gifs/dabi.gif"
        },
        {
            nombre: "Hawks",
            rol: "heroe",
            descripcion: "Feroz y veloz con control aéreo total.",
            poder: 82,
            gif: "../assets/gifs/hawks.gif"
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
            <img src="${personaje.gif}" alt="${personaje.nombre} Power" class="ranking__gif" />
            <div class="ranking__body">
            <span class="roles ${personaje.rol}">${personaje.rol === "heroe" ? "Héroe" : "Villano"}</span>
            <h3>${personaje.nombre}</h3>
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