const personajes = [
    { nombre: "Izuku Midoriya", img: "../assets/cards/midoriya.jpg", score: 270 },
    { nombre: "Katsuki Bakugo", img: "../assets/cards/bakugo.jpg", score: 240 },
    { nombre: "Shoto Todoroki", img: "../assets/cards/shoto.jpg", score: 240 },
    { nombre: "All Might", img: "../assets/cards/allmight.jpg", score: 100 },
    { nombre: "Tomura Shigaraki", img: "../assets/personajes/tomurashigaraki.jpg", score: 150 },
    { nombre: "Ochaco Uraraka", img: "../assets/cards/uraraka.jpg", score: 150 },
    { nombre: "Endeavor", img: "../assets/personajes/endeavor.jpg", score: 90 },
    { nombre: "Hawks", img: "../assets/personajes/hawks.jpg", score: 90 },
    { nombre: "Dabi", img: "../assets/personajes/dabi.jpg", score: 90 },
    { nombre: "Shota Aizawa", img: "../assets/personajes/aisawa.jpg", score: 150 }
];

const rankingList = document.getElementById("rankingList");

const MAX_SCORE = 300;

function renderRanking() {
    personajes.sort((a, b) => b.score - a.score);

    rankingList.innerHTML = "";

    personajes.forEach((personaje, index) => {
        const percentage = Math.min(((personaje.score / MAX_SCORE) * 100), 100).toFixed(1);

        const li = document.createElement("li");
        li.className = "ranking__item animate__animated animate__fadeInUp";

        li.innerHTML = `
            <span class="ranking__position">#${index + 1}</span>
            <img src="${personaje.img}" alt="${personaje.nombre}" class="ranking__img">
            <span class="ranking__name">${personaje.nombre}</span>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${percentage}%" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <button class="btn btn-warning btn-sm vote-btn">Votar</button>
        `;

        li.querySelector(".vote-btn").addEventListener("click", () => {
            Swal.fire({
                title: `¿Quieres votar por ${personaje.nombre}?`,
                text: "Tu voto sumará +1 punto a su ranking.",
                showCancelButton: true,
                confirmButtonText: "¡Sí, votar!",
                cancelButtonText: "Cancelar",
                confirmButtonColor: "#28a745",
                cancelButtonColor: "#dc3545"
            }).then((result) => {
                if (result.isConfirmed) {
                    personaje.score += 1;
                    renderRanking();
                    Swal.fire({
                        icon: "success",
                        title: "¡Voto registrado!",
                        text: `${personaje.nombre} ahora tiene ${personaje.score} puntos.`,
                        timer: 2000,
                        showConfirmButton: false
                    });
                }
            });
        });

        rankingList.appendChild(li);
    });
}

renderRanking();