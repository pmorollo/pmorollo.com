const articles = [
    {
        id: 0,
        slug: "machado-de-assis",
        url: "artigos/machado-de-assis.html",
        shortTitle: "Machado de Assis",
        subtitle: "A genialidade de Dom Casmurro, Memórias Póstumas e a relevância contemporânea",
        excerpt: "Uma análise profunda da obra de Machado de Assis e por que seu legado permanece mais relevante do que nunca no século XXI.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
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
        category: "comportamento",
        categoryName: "Comportamento e Cultura",
        author: "Página Virada",
        authorInitial: "P",
        date: "12 Jul 2026",
        words: 465,
        readTime: "3 min de leitura",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 2,
        slug: "clarice-lispector",
        url: "artigos/clarice-lispector.html",
        shortTitle: "Clarice Lispector",
        subtitle: "A escritora que transformou palavras em existência e a paixão no cotidiano",
        excerpt: "Uma homenagem à obra de Clarice Lispector e à sua capacidade única de penetrar nas camadas mais profundas da consciência humana.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "10 Jul 2026",
        words: 255,
        readTime: "2 min de leitura",
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
        categoryName: "Comportamento e Cultura",
        author: "Página Virada",
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
        category: "fatos",
        categoryName: "Fatos Atuais",
        author: "Página Virada",
        authorInitial: "P",
        date: "5 Jul 2026",
        words: 225,
        readTime: "2 min de leitura",
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
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "3 Jul 2026",
        words: 125,
        readTime: "1 min de leitura",
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
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "1 Jul 2026",
        words: 135,
        readTime: "1 min de leitura",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    }
];

let currentCategory = 'todos';
let currentSearch = '';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderHero();
    renderArticles();
    renderPopular();
    setupEventListeners();
}

function renderHero() {
    const heroArticle = articles[0];
    const heroTag = document.querySelector('.hero-tag');
    if (heroTag) heroTag.textContent = heroArticle.categoryName;
    document.getElementById('hero-title').innerHTML = `
        <span style="font-family: 'Playfair Display', serif; font-size: 42px; display: block; margin-bottom: 8px;">${heroArticle.shortTitle}</span>
        <span style="font-family: 'Inter', sans-serif; font-weight: 600; font-size: 20px; color: var(--text-primary); display: block; line-height: 1.4;">${heroArticle.subtitle}</span>
    `;
    document.getElementById('hero-excerpt').textContent = heroArticle.excerpt;
    document.getElementById('hero-author').textContent = heroArticle.author;
    document.getElementById('hero-date').textContent = heroArticle.date;
    document.getElementById('hero-readtime').textContent = `${heroArticle.words} palavras · ${heroArticle.readTime}`;
    
    const heroBtn = document.getElementById('hero-btn');
    if (heroBtn) {
        heroBtn.onclick = () => window.location.href = heroArticle.url;
    }

    const heroImg = document.getElementById('hero-image');
    if (heroImg) {
        heroImg.style.backgroundImage = `url('${heroArticle.image}')`;
    }
}

function renderArticles() {
    const grid = document.getElementById('articles-grid');
    if (!grid) return;
    
    let filtered = articles;
    if (currentCategory !== 'todos') {
        filtered = filtered.filter(a => a.category === currentCategory);
    }
    if (currentSearch) {
        const query = currentSearch.toLowerCase();
        filtered = filtered.filter(a => 
            a.shortTitle.toLowerCase().includes(query) ||
            a.subtitle.toLowerCase().includes(query) ||
            a.excerpt.toLowerCase().includes(query)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-results">Nenhum artigo encontrado para essa busca.</p>';
        return;
    }

    grid.innerHTML = filtered.map(a => `
        <article class="article-card" onclick="window.location.href='${a.url}'">
            <a href="${a.url}" class="card-image-link" onclick="event.stopPropagation()">
                <div class="card-image article-card-image" style="background-image: url('${a.thumb}')">
                    <span class="article-card-category">${a.categoryName}</span>
                </div>
            </a>
            <div class="article-card-body">
                <h3 class="article-card-short-title">${a.shortTitle}</h3>
                <div class="article-card-subtitle">${a.subtitle}</div>
                <p class="article-card-excerpt">${a.excerpt}</p>
                <div class="article-card-footer">
                    <div class="article-card-meta">
                        <span class="author-name">${a.author}</span>
                        <span class="separator">·</span>
                        <span class="meta-details">${a.words} palavras (${a.readTime})</span>
                    </div>
                </div>
            </div>
        </article>
    `).join('');
}

function renderPopular() {
    const popularContainer = document.getElementById('popular-articles');
    if (!popularContainer) return;

    const popular = articles.filter(a => a.popular);
    popularContainer.innerHTML = popular.map(a => `
        <div class="popular-item">
            <a href="${a.url}" class="popular-title" style="font-weight: 600;">
                <span style="font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; display: block;">${a.shortTitle}</span>
                <span style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: var(--text-secondary);">${a.subtitle}</span>
                <span style="font-size: 11px; color: var(--text-muted); display: block; margin-top: 2px;">${a.words} palavras · ${a.readTime}</span>
            </a>
        </div>
    `).join('');
}

function filterCategory(cat) {
    currentCategory = cat;
    document.querySelectorAll('.category-chip, .nav-link').forEach(el => {
        if (el.dataset.category === cat || el.dataset.cat === cat) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
    renderArticles();
}

function handleSearch(query) {
    currentSearch = query;
    renderArticles();
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            document.getElementById('searchInput').focus();
        }
    }
}

function toggleMenu() {
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        mainNav.classList.toggle('active');
    }
}

function setupEventListeners() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}
