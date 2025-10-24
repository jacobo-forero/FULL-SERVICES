const postsData = [
    {
    id: 1,
    title: "We are celebrating 30 years of success!",
    author: "Full Services",
    content:
        "Full Services cumple tres décadas de crecimiento, compromiso y excelencia. Gracias a nuestros colaboradores y clientes por ser parte de esta historia. ¡Vamos por muchos años más de logros y servicio!",
    category: "Succeses",
    date: "1995-05-25",
    image: "Static/Images/FULL-BLOG.jpg",
    },
    {
    id: 2,
    title: "Stretching techniques",
    author: "Full Services",
    content:
        "The health of our employees is important to us, and we are confident that these techniques will be beneficial to your company and team.",
    category: "News",
    date: "2023-06-30",
    image: ["Static/Images/noticia1.jpg",
        "Static/Images/noticia2.jpg",
        "Static/Images/noticia3.jpg",
        "Static/Images/noticia4.jpg",
        "Static/Images/noticia5.jpg",
        "Static/Images/noticia6.jpg",
        "Static/Images/noticia7.jpg",
        "Static/Images/noticia8.jpg",
        "Static/Images/noticia9.jpg",
        "Static/Images/noticia10.jpg"]
    },
    {
    id: 3,
    title: "We conducted an emergency drill.",
    author: "HSEQ",
    content:
        "The emergency drill was carried out successfully, demonstrating good coordination and commitment on the part of all employees. The evacuation was orderly and allowed us to verify the effectiveness of our safety protocols.ió comprobar la efectividad de nuestros protocolos de seguridad.",
    category: "Events",
    date: "2025-10-24",
    image: "Static/Images/hse.jpg",
    },
];

let currentFilter = "all";
let displayedPosts = 6;

document.addEventListener("DOMContentLoaded", () => {
    renderPosts();
    initializeFilters();
    initializeLoadMore();
    setTimeout(() => initializePostCarousels(), 300);
});

function renderPosts() {
    const postsContainer = document.getElementById("blog-posts-container");
    if (!postsContainer) return;

    const filteredPosts =
    currentFilter === "all"
        ? postsData
        : postsData.filter((post) => post.category === currentFilter);

    const postsToShow = filteredPosts.slice(0, displayedPosts);

    postsContainer.innerHTML = postsToShow.map((post) => createPostCard(post)).join("");
    initializePostCarousels();
    updateLoadMoreButton(filteredPosts.length);
}

function createPostCard(post) {
    const images = Array.isArray(post.image)
    ? post.image
    : [post.image];

        return `
        <article class="blog-post-card" data-category="${post.category}">
        <div class="blog-post-header">
        <div class="blog-post-avatar">
            <img src="Static/Images/full.jpg" alt="logo" />
        </div>
        <div class="blog-post-info">
            <h3>${post.author}</h3>
            <div class="blog-post-meta">
            <span class="blog-post-category">${getCategoryName(post.category)}</span>
            <span>•</span>
            <span>${formatDate(post.date)}</span>
            </div>
        </div>
        </div>

        <div class="blog-post-carousel" data-id="${post.id}">
        <button class="blog-carousel-btn prev" aria-label="Anterior">&#10094;</button>

        <div class="blog-carousel-track">
            ${images
            .map(
                (img) => `
                <img src="${img}" class="blog-carousel-image" alt="${escapeHtml(post.title)}" />
            `
            )
            .join("")}
        </div>

        <button class="blog-carousel-btn next" aria-label="Siguiente">&#10095;</button>
        </div>

        <div class="blog-post-content">
        <h4>${escapeHtml(post.title)}</h4>
        <p>${escapeHtml(post.content)}</p>
        </div>
    </article>
    `;
}

function initializeFilters() {
    const filterButtons = document.querySelectorAll(".blog-filter-btn");

    filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");

        currentFilter = button.dataset.filter || "all";
        displayedPosts = 6;
        renderPosts();
    });
    });
}

function initializeLoadMore() {
    const loadMoreBtn = document.getElementById("load-more");
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener("click", () => {
    displayedPosts += 3;
    renderPosts();
    });
}

function updateLoadMoreButton(totalPosts) {
    const loadMoreBtn = document.getElementById("load-more");
    if (!loadMoreBtn) return;

    if (displayedPosts >= totalPosts) {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "There are no further publications.";
    } else {
    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = "Load more posts";
    }
}

function initializePostCarousels() {
    document.querySelectorAll(".blog-post-carousel").forEach((carousel) => {
    const track = carousel.querySelector(".blog-carousel-track");
    const slides = carousel.querySelectorAll(".blog-carousel-image");
    const prevBtn = carousel.querySelector(".blog-carousel-btn.prev");
    const nextBtn = carousel.querySelector(".blog-carousel-btn.next");
    let index = 0;

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        index = (index > 0) ? index - 1 : slides.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        index = (index < slides.length - 1) ? index + 1 : 0;
        updateCarousel();
    });
    });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    });
}

function getCategoryName(category) {
    const categories = { noticias: "News", eventos: "Events", logros: "Succeses" };
    return categories[category] || category;
}

function escapeHtml(str) {
    if (!str) return "";
    return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function animateStats() {

}
