const data = [
    {
        id: "1",
        name: "Redes",
        image: "../img/cursos/redes.jpg",
        description: "4 meses, 2 clases semanales de 2 hs",
        price: 32000
    },

    {
        id: "2",
        name: "Diseño UI/UX",
        image: "../img/cursos/disenoui.jpg",
        description: "4 meses, 2 clases semanales de 2 hs",
        price: 50000
    },

    {
        id: "3",
        name: "Android",
        image: "../img/cursos/android.jpg",
        description: "3 meses, 2 clases semanales de 2 hs",
        price: 36000
    },

    {
        id: "4",
        name: "Desarrollo Frontend",
        image: "../img/cursos/frontend.jpg",
        description: "6 meses, 2 clases semanales de 2 hs",
        price: 110000
    },

    {
        id: "5",
        name: "Edición de video",
        image: "../img/cursos/video.jpg",
        description: "4 meses, 2 clases semanales de 2 hs",
        price: 80000
    },

    {
        id: "6",
        name: "Fotografía digital",
        image: "../img/cursos/fotografia.jpg",
        description: "4 meses, 2 clases semanales de 2 hs",
        price: 70000
    },

    {
        id: "7",
        name: "Python",
        image: "../img/cursos/python.jpg",
        description: "3 meses, 2 clases semanales de 2 hs",
        price: 75000
    },

    {
        id: "8",
        name: "Programación full stack",
        image: "../img/cursos/fullstack.jpg",
        description: "12 meses, 2 clases semanales de 2 hs",
        price: 185000
    },

    {
        id: "9",
        name: "Blockchain",
        image: "../img/cursos/blockchain.jpg",
        description: "5 meses, 2 clases semanales de 2 hs",
        price: 75000
    },

    {
        id: "10",
        name: "Angular",
        image: "../img/cursos/angular.jpg",
        description: "3 meses, 2 clases semanales de 2 hs",
        price: 75000
    },

    {
        id: "11",
        name: "SQL",
        image: "../img/cursos/sql.jpg",
        description: "4 meses, 2 clases semanales de 2 hs",
        price: 80000
    },

    {
        id: "12",
        name: "Ciberseguridad",
        image: "../img/cursos/ciberseguridad.jpg",
        description: "6 meses, 2 clases semanales de 2 hs",
        price: 95000
    }

]

const contenedor_cursos = document.querySelector("#container-courses");


data.forEach(cursos => {
    const { id, name, price, image, description } = cursos
    if (contenedor_cursos) {
        contenedor_cursos.innerHTML += `
                <div class="box-courses">
                    <img class="course-image" src="${image}" alt="${name}">
                    <h3 class="course-name">${name}</h3>
                    <p class="course-price">Costo total: $${price}</p>
                    <p class="course-description">${description}</p>
                    <button class="course-inscription" ><a href="https://api.whatsapp.com/send?phone=114779865&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre:%20 ${name} "
                    target="_blank" class="btn-course">Inscribirse</a></button>
                </div>       
            `;

    }
})


