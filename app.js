const articles = [
    {
        id: 0,
        slug: "machado-de-assis",
        url: "artigos/machado-de-assis.html",
        shortTitle: "Machado de Assis",
        subtitle: "Ironia, narrador não-confiável e a anatomia das máscaras sociais",
        excerpt: "Uma análise profunda da obra de Machado de Assis e por que seu legado permanece mais relevante do que nunca no século XXI.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "15 Jul 2026",
        words: 1150,
        readTime: "6 min de leitura",
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 1,
        slug: "10-livros-essenciais",
        url: "artigos/10-livros-essenciais.html",
        shortTitle: "10 Livros",
        subtitle: "As obras essenciais que todo amante de literatura deveria ler",
        excerpt: "Uma lista curada dos livros essenciais que moldam a forma como enxergamos o mundo, a literatura e a nós mesmos.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "12 Jul 2026",
        words: 1180,
        readTime: "6 min de leitura",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 2,
        slug: "clarice-lispector",
        url: "artigos/clarice-lispector.html",
        shortTitle: "Clarice Lispector",
        subtitle: "A escritora que transformou palavras em existência, a epifania e a busca pelo mistério do ser",
        excerpt: "Uma homenagem à obra de Clarice Lispector e à sua capacidade única de penetrar nas camadas mais profundas da consciência humana.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "10 Jul 2026",
        words: 1120,
        readTime: "6 min de leitura",
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 3,
        slug: "a-arte-de-ler",
        url: "artigos/a-arte-de-ler.html",
        shortTitle: "A Arte de Ler",
        subtitle: "Como a leitura profunda pode transformar sua vida e sua atenção",
        excerpt: "Em tempos de distração digital, descubra por que a leitura profunda é mais importante do que nunca e como desenvolver esse hábito.",
        category: "comportamento",
        categoryName: "Comportamento",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "8 Jul 2026",
        words: 1100,
        readTime: "6 min de leitura",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        slug: "itamar-vieira-junior",
        url: "artigos/itamar-vieira-junior.html",
        shortTitle: "Itamar Vieira Jr.",
        subtitle: "Torto Arado, o processo criativo e a escrita como ato de justiça",
        excerpt: "O autor de Torto Arado fala sobre sua trajetória, o processo criativo e o papel da literatura na luta por justiça social.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "5 Jul 2026",
        words: 1150,
        readTime: "6 min de leitura",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        slug: "garcia-marquez",
        url: "artigos/garcia-marquez.html",
        shortTitle: "García Márquez",
        subtitle: "O realismo mágico em Cem Anos de Solidão que encantou o mundo",
        excerpt: "Uma análise de como o autor colombiano revolucionou a literatura mundial com sua mistura única de realismo e fantasia.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "3 Jul 2026",
        words: 1100,
        readTime: "6 min de leitura",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        slug: "guimaraes-rosa",
        url: "artigos/guimaraes-rosa.html",
        shortTitle: "Guimarães Rosa",
        subtitle: "Sertão, linguagem e a metafísica em Grande Sertão: Veredas",
        excerpt: "Uma imersão no universo de Guimarães Rosa e a travessia filosófica de Riobaldo.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "1 Jul 2026",
        words: 1200,
        readTime: "6 min de leitura",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        slug: "candido-direito-a-literatura",
        url: "artigos/candido-direito-a-literatura.html",
        shortTitle: "A Literatura é um Direito?",
        subtitle: "Por que Antonio Candido ainda importa: a fabulação como necessidade humana na era da distração",
        excerpt: "Por que ler ficção não é luxo nem passatempo, mas necessidade humana? Antonio Candido, em 'O Direito à Literatura', trata a fabulação como direito fundamental — e sua leitura nunca foi tão contemporânea.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Pedro Morollo",
        authorInitial: "P",
        date: "12 Ago 2026",
        words: 1050,
        readTime: "5 min de leitura",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        slug: "por-que-macabea-continua-invisivel",
        url: "artigos/por-que-macabea-continua-invisivel.html",
        shortTitle: "Por que Macabéa continua invisível?",
        subtitle: "A linguagem do silêncio e o problema de narrar o outro em A Hora da Estrela",
        excerpt: "Como Clarice Lispector transforma silêncio, pobreza e mediação narrativa em uma pergunta sobre quem tem o direito de contar a vida do outro.",
        category: "literatura",
        categoryName: "Literatura",
        author: "Página Virada",
        authorInitial: "PV",
        date: "13 Set 2026",
        publishedAt: "2026-09-13",
        featured: true,
        words: 1100,
        readTime: "6 min de leitura",
        image: "assets/images/macabea-cidade.webp",
        thumb: "assets/images/macabea-cidade-thumb.webp"
    }
];

let currentCategory = 'todos';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderHero();
    renderGrid();
    renderPopular();

    document.querySelectorAll('#mainNav a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function getFeaturedArticle() {
    return articles.find(article => article.featured) || articles[articles.length - 1];
}

function isNewArticle(article) {
    if (!article.publishedAt) return false;
    const published = new Date(`${article.publishedAt}T00:00:00`);
    const ageInDays = (Date.now() - published.getTime()) / 86400000;
    return ageInDays >= 0 && ageInDays < 15;
}

function renderHero() {
    const hero = getFeaturedArticle();
    if (!hero) return;

    const heroTitle = document.getElementById('hero-title');
    const heroExcerpt = document.getElementById('hero-excerpt');
    const heroAuthor = document.getElementById('hero-author');
    const heroDate = document.getElementById('hero-date');
    const heroReadtime = document.getElementById('hero-readtime');
    const heroImg = document.getElementById('hero-image');

    if (heroTitle) {
        heroTitle.innerHTML = '';
        const titleLink = document.createElement('a');
        titleLink.href = hero.url;
        titleLink.textContent = `${hero.shortTitle}: ${hero.subtitle}`;
        titleLink.style.cssText = 'color: inherit; text-decoration: none;';
        heroTitle.appendChild(titleLink);
    }
    if (heroExcerpt) heroExcerpt.textContent = hero.excerpt;
    if (heroAuthor) heroAuthor.textContent = hero.author;
    if (heroDate) heroDate.textContent = hero.date;
    if (heroReadtime) heroReadtime.textContent = hero.readTime;
    if (heroImg) {
        heroImg.href = hero.url;
        heroImg.setAttribute('aria-label', `Ler o ensaio ${hero.shortTitle}`);
        heroImg.style.backgroundImage = `url('${hero.image}')`;
    }
}

function renderGrid() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;

    const featured = getFeaturedArticle();
    let filtered = currentSearch.trim() === ''
        ? articles.filter(article => article.id !== featured.id)
        : articles;

    if (currentCategory !== 'todos') {
        filtered = filtered.filter(a => a.category === currentCategory);
    }

    if (currentSearch.trim() !== '') {
        const query = currentSearch.toLowerCase();
        filtered = filtered.filter(a => 
            a.shortTitle.toLowerCase().includes(query) ||
            a.subtitle.toLowerCase().includes(query) ||
            a.excerpt.toLowerCase().includes(query)
        );
    }

    grid.innerHTML = '';

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">Nenhum artigo encontrado.</div>`;
        return;
    }

    filtered.forEach(art => {
        const card = document.createElement('article');
        card.className = 'article-card';
        card.onclick = () => window.location.href = art.url;

        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${art.thumb}" alt="${art.shortTitle}" loading="lazy">
                <span class="card-badge">${isNewArticle(art) ? 'Novo · ' : ''}${art.categoryName}</span>
            </div>
            <div class="card-content">
                <h3 class="article-card-short-title">${art.shortTitle}</h3>
                <p class="article-card-subtitle">${art.subtitle}</p>
                <div class="card-meta">
                    <span>${art.date}</span>
                    <span>•</span>
                    <span>${art.readTime}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderPopular() {
    const popularContainer = document.getElementById('popular-articles');
    if (!popularContainer) return;

    const popularList = articles.filter(a => a.popular);
    popularContainer.innerHTML = '';

    popularList.forEach((art, idx) => {
        const item = document.createElement('div');
        item.className = 'popular-item';
        item.onclick = () => window.location.href = art.url;

        item.innerHTML = `
            <span class="popular-number">0${idx + 1}</span>
            <div class="popular-info">
                <h4>${art.shortTitle}</h4>
                <p>${art.readTime}</p>
            </div>
        `;
        popularContainer.appendChild(item);
    });
}

function filterCategory(cat) {
    currentCategory = cat;

    // Update Nav links
    document.querySelectorAll('.main-nav .nav-link').forEach(link => {
        if (link.getAttribute('data-category') === cat) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update Category Chips
    document.querySelectorAll('.category-chip').forEach(chip => {
        if (chip.getAttribute('data-cat') === cat) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });

    renderGrid();
}

function handleSearch(val) {
    currentSearch = val;
    renderGrid();
}

function toggleSearch() {
    const bar = document.getElementById('searchBar');
    if (bar) {
        bar.classList.toggle('open');
        if (bar.classList.contains('open')) {
            document.getElementById('searchInput').focus();
        }
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function toggleMenu() {
    const nav = document.getElementById('mainNav');
    const button = document.querySelector('.menu-toggle');
    if (!nav) return;
    const isOpen = nav.classList.toggle('open');
    if (button) button.setAttribute('aria-expanded', String(isOpen));
}

function closeMenu() {
    const nav = document.getElementById('mainNav');
    const button = document.querySelector('.menu-toggle');
    if (nav) nav.classList.remove('open');
    if (button) button.setAttribute('aria-expanded', 'false');
}
