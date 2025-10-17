const modal = document.getElementById('serviceModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.modal-close');
const whatsappLink = document.getElementById('whatsappLink');

const serviceData = {
    1: {
        title: "Work-over",
        content: `
            <strong>Full Services</strong> ofrece a la industria petrolera, dentro y fuera de Colombia, especializados servicios de <strong>Workover</strong> y complementarios.<br>
            Contamos con amplia experiencia y una flota de equipos modernos para garantizar operaciones <strong>rápidas y seguras</strong> en los campos asignados.<br>
            Nuestras unidades principales tienen potencias de <strong>350 hp</strong> a <strong>650 hp</strong>, e incluyen subestructuras con rotaria y power swivel, junto con <strong>bombas triplex de 5000 psi</strong> y alto caudal.<br>
            Además, complementamos la producción con servicios de WELL TESTING para una precisa caracterización de pozos, y herramientas de <strong>WIRE LINE y SLICK LINE</strong> para monitoreo y mantenimiento de pozos en producción.
        `,
        videos: ["https://youtu.be/BWEsYqKLD7U"],
        whatsapp: "https://wa.link/mi5n03"
    },
    2: {
        title: "Servicios Industriales",
        content: `
            Contamos con un taller completo para la aplicación de soldaduras especiales, mantenimiento, tendido de construcción de líneas de flujo para crudo, gas y agua.
            Construcción de facilidades para cabezales y de estructuras metálicas, suministro de carros talleres con equipos diesel y soldadores con competencia API y ASME.
        `,
        images: ["Static/Images/FULL-SI.jpg", "Static/Images/FULL-SI1.jpg"],
        whatsapp: "https://wa.link/mi5n03"
    },
    3: {
        title: "Obras Civiles",
        content: `
            Contamos con maquinaria personal competente para la construcción de locaciones petroleras, movimientos de tierra, suministro de materiales granulares seleccionados, mejoramiento y estabilización de suelos con métodos tradicionales y de avanzada, impermeabilizaciones, construcción de infraestructura para el tratamiento evacuación de agua residual, contrapozos y placas, construcción de obras complementarias como cerramientos, casetas, alcantarillados.
        `,
        images: ["Static/Images/FULL-OBRAS.jpg", "Static/Images/FULL-OBRAS4.jpg"],
        whatsapp: "https://wa.link/94tqjk"
    },
    4: {
        title: "Arquitectura",
        content: `
            Ofrecemos soluciones arquitectónicas sostenibles e innovadoras, abarcando diseño, planificación y ejecución integral de proyectos con identidad y tecnología.
        `,
        images: ["Static/Images/FULL-IMG1-CARRUSEL.png", "Static/Images/FULL-IMG3-CARRUSEL.jpg"],
        whatsapp: "https://wa.link/94tqjk"
    },
    5: {
        title: "Transporte",
        content: `
            Disponemos de una gran variedad de equipos de transporte y que a la vez brindan otros servicios como son: Grúas de 40 hasta 110 Ton, cargadores de 4 hasta 12 ton, carro machos, brazos articulados, tractomulas, cama bajas, camiones de 2 hasta 12 Ton, entre otros.
        `,
        images: ["Static/Images/FULL-TRANSPORTE1.jpg", "Static/Images/FULL-TRANSPORTE2.jpg"],
        whatsapp: "https://wa.link/mi5n03"
    },
    6: {
        title: "Trailers",
        content: `
            ¡Somos fabricantes de carrocerías con capacidad de 30 o 35 Toneladas, con dimensiones exteriores hasta de Largo: 12,50 m, Ancho: 2,60 m. Toda la estructura cuenta con su respetivo conector 7 vías, luces LED, sistema 12v y acabado en pintura poliuretano. Certificaciones ISO9001, ISO14001 e ISO45001.
        `,
        images: [
            { src: "Static/Images/Trailers/1.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers1.html" },
            { src: "Static/Images/Trailers/2.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers2.html" },
            { src: "Static/Images/Trailers/3.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers3.html" },
            /*{ src: "../../Static/Images/Trailers/4.jpg", link: "../../Templates/Servicios/Trailers4.html" },*/
            { src: "Static/Images/Trailers/5.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers5.html" },
            { src: "Static/Images/Trailers/6.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers6.html" },
            { src: "Static/Images/Trailers/7.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers7.html" },
            { src: "Static/Images/Trailers/8.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers8.html" },
            { src: "Static/Images/Trailers/9.jpg", link: "FULL-SERVICES/Templates/Servicios/Trailers9.html" }
        ],
        whatsapp: "https://wa.link/2ogans"
    }
};

// Mostrar modal
document.querySelectorAll('.btn-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-service');
        const data = serviceData[id];

        if (data) {
            let mediaHTML = "";

            // Caso especial: Trailers (collage con enlaces)
            if (id === "6") {
                mediaHTML = `
                    <div class="special-collage">
                        ${data.images.map(img => `
                            <a href="${img.link}" class="collage-item" target="_blank">
                                <img src="${img.src}" alt="${data.title}">
                                <div class="collage-overlay">
                                    <span>Ver más</span>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                `;
            }
            // Si tiene imágenes (solo si no es Trailers)
            else if (data.images && data.images.length > 0) {
                mediaHTML = `
                    <div class="modal-gallery collage">
                        ${data.images.map(img => `<img src="${img}" alt="${data.title}" class="modal-image">`).join('')}
                    </div>
                `;
            }
            // Si tiene video
            else if (data.videos && data.videos.length > 0) {
                mediaHTML = `
                    <div class="modal-gallery video">
                        <video class="modal-video" controls preload="metadata">
                            <source src="${data.videos[0]}" type="video/mp4">
                            Tu navegador no soporta videos.
                        </video>
                    </div>
                `;
            }

            // Contenido final del modal
            modalBody.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.content}</p>
                ${mediaHTML}
            `;

            // Link de WhatsApp
            whatsappLink.href = data.whatsapp;

            modal.style.display = 'flex';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
