const modal = document.getElementById('serviceModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.modal-close');
const whatsappLink = document.getElementById('whatsappLink');

const serviceData = {
    1: {
        title: "Work-over",
        content: `
            <strong>Full Services</strong> offers the oil industry, both inside and outside Colombia, specialized <strong>Workover</strong> and complementary services.<br>
            We have extensive experience and a modern fleet of equipment to ensure <strong>fast and safe</strong> operations in the assigned fields.<br>
            Our main units have power ranging from <strong>350 hp</strong> to <strong>650 hp</strong>, and include substructures with rotary and power swivel, along with <strong>5000 psi triplex pumps</strong> and high flow rate.<br>
            In addition, we complement production with WELL TESTING services for accurate well characterization, and <strong>WIRE LINE and SLICK LINE</strong> tools for monitoring and maintenance of producing wells.
        `,
        videos: ["Static/Videos/Servicios de Workover.mp4"],
        whatsapp: "https://wa.link/mi5n03"
    },
    2: {
        title: "Industrial Services",
        content: `
            We have a fully equipped workshop for the application of special welding, maintenance, and the laying and construction of flow lines for oil, gas, and water.
            We also carry out the construction of facilities for wellheads and metallic structures, as well as supply workshop trucks equipped with diesel systems and welders certified under API and ASME standards.
        `,
        images: ["Static/Images/FULL-SI.jpg", "Static/Images/FULL-SI1.jpg"],
        whatsapp: "https://wa.link/mi5n03"
    },
    3: {
        title: "Civil Works",
        content: `
            We have competent personnel and machinery for the construction of oilfield locations, earthworks, supply of selected granular materials, soil improvement and stabilization using both traditional and advanced methods, waterproofing, construction of infrastructure for wastewater treatment and disposal, sumps, slabs, and complementary works such as fencing, sheds, and sewer systems.
        `,
        images: ["Static/Images/FULL-OBRAS.jpg", "Static/Images/FULL-OBRAS4.jpg"],
        whatsapp: "https://wa.link/94tqjk"
    },
    4: {
        title: "Architecture",
        content: `
            We provide sustainable and innovative architectural solutions, covering the design, planning, and complete execution of projects with identity and cutting-edge technology.
        `,
        images: ["Static/Images/FULL-ARQ1.jpg", "Static/Images/FULL-ARQ2.jpg"],
        whatsapp: "https://wa.link/94tqjk"
    },
    5: {
        title: "Transportation",
        content: `
            We offer a wide variety of transportation equipment and complementary services such as cranes ranging from 40 to 110 tons, loaders from 4 to 12 tons, heavy-duty trucks, articulated booms, tractor-trailers, lowboys, and trucks from 2 to 12 tons, among others.
        `,
        images: ["Static/Images/FULL-TRANSPORTE1.jpg", "Static/Images/FULL-TRANSPORTE2.jpg"],
        whatsapp: "https://wa.link/9po59q"
    },
    6: {
        title: "Trailers",
        content: `
            We are manufacturers of trailer bodies with a capacity of 30 or 35 tons, and exterior dimensions up to Length: 12.50 m, Width: 2.60 m. The entire structure includes a 7-way connector, LED lighting system, 12v power system, and polyurethane paint finish. Certified under ISO9001, ISO14001, and ISO45001 standards.
        `,
        images: [
            { src: "../../../../Static/Images/Trailers/1.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio1.html" },
            { src: "../../../../Static/Images/Trailers/2.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio2.html" },
            { src: "../../../../Static/Images/Trailers/3.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio3.html" },
            /*{ src: "Static/Images/Trailers/4.jpg", link: "/Translate/Servicios/enServicio4.html" },*/
            { src: "../../../../Static/Images/Trailers/5.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio5.html" },
            { src: "../../../../Static/Images/Trailers/6.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio6.html" },
            { src: "../../../../Static/Images/Trailers/7.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio7.html" },
            { src: "../../../../Static/Images/Trailers/8.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio8.html" },
            { src: "../../../../Static/Images/Trailers/9.jpg", link: "https://jacobo-forero.github.io/FULL-SERVICES/Translate/Servicios/enServicio9.html" }
        ],
        whatsapp: "https://wa.link/mi5n03"
    }
};

document.querySelectorAll('.btn-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-service');
        const data = serviceData[id];

        if (data) {
            let mediaHTML = "";

            if (id === "6") {
                mediaHTML = `
                    <div class="special-collage">
                        ${data.images.map(img => `
                            <a href="${img.link}" class="collage-item" target="_blank">
                                <img src="${img.src}" alt="${data.title}">
                                <div class="collage-overlay">
                                    <span>View more</span>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                `;
            }
            else if (data.images && data.images.length > 0) {
                mediaHTML = `
                    <div class="modal-gallery collage">
                        ${data.images.map(img => `<img src="${img}" alt="${data.title}" class="modal-image">`).join('')}
                    </div>
                `;
            }
            else if (data.videos && data.videos.length > 0) {
                mediaHTML = `
                    <div class="modal-gallery video">
                        <video class="modal-video" controls preload="metadata">
                            <source src="${data.videos[0]}" type="video/mp4">
                            Your browser does not support videos.
                        </video>
                    </div>
                `;
            }

            modalBody.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.content}</p>
                ${mediaHTML}
            `;

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
