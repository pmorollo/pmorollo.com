const articles = [
    {
        id: 0,
        slug: "o-poder-transformador-da-leitura",
        url: "artigos/o-poder-transformador-da-leitura.html",
        title: "O Poder Transformador da Leitura: Como os Livros Moldam a Percepção e a Psique Humana",
        excerpt: "Uma análise profunda de como a leitura transformadora atua no desenvolvimento pessoal, na expansão da consciência e nos arquétipos universais.",
        category: "comportamento",
        categoryName: "Comportamento e Cultura",
        author: "Página Virada",
        authorInitial: "P",
        date: "29 Jul 2026",
        readTime: "9 min de leitura",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 1,
        slug: "arquetipos-de-jung-na-literatura",
        url: "artigos/arquetipos-de-jung-na-literatura.html",
        title: "Arquétipos de Jung na Literatura: Das Sombras de Dostoiévski ao Herói de Cervantes",
        excerpt: "Como a psicologia analítica nos ajuda a compreender a presença dos símbolos primordiais e a psique humana nas grandes narrativas.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "28 Jul 2026",
        readTime: "10 min de leitura",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 2,
        slug: "machado-de-assis-e-a-paranoia",
        url: "artigos/machado-de-assis-e-a-paranoia.html",
        title: "Machado de Assis e a Anatomia da Paranoia: O Inconsciente Coletivo em Dom Casmurro",
        excerpt: "Uma análise psicanalítica da narratividade não-confiável e do ciúme arquetípico na literatura brasileira.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "27 Jul 2026",
        readTime: "11 min de leitura",
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 3,
        slug: "a-jornada-do-heroi-no-cinema",
        url: "artigos/a-jornada-do-heroi-no-cinema.html",
        title: "A Jornada do Herói no Cinema Moderno: Como as Narrativas Ancestrais se Repetem na Pop Culture",
        excerpt: "De Joseph Campbell a Christopher Nolan e Star Wars: a estrutura dos mitos clássicos na tela do cinema contemporâneo.",
        category: "fatos",
        categoryName: "Fatos Atuais",
        author: "Página Virada",
        authorInitial: "P",
        date: "26 Jul 2026",
        readTime: "8 min de leitura",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop",
        popular: true
    },
    {
        id: 4,
        slug: "a-leitura-profunda-como-antidoto",
        url: "artigos/a-leitura-profunda-como-antidoto.html",
        title: "A Leitura Profunda como Antídoto à Fragmentação da Atenção Contemporânea",
        excerpt: "Como o foco contínuo e a imersão nos livros clássicos curam o cérebro hiperestimulado pela tecnologia.",
        category: "comportamento",
        categoryName: "Comportamento e Cultura",
        author: "Página Virada",
        authorInitial: "P",
        date: "25 Jul 2026",
        readTime: "9 min de leitura",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        slug: "clarice-lispector-e-a-epifania",
        url: "artigos/clarice-lispector-e-a-epifania.html",
        title: "Clarice Lispector e o Abrir dos Olhos: A Epifania como Expansão da Consciência",
        excerpt: "A prosa existencial de Clarice e a capacidade de revelar o mistério do ser através do cotidiano.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "24 Jul 2026",
        readTime: "10 min de leitura",
        image: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=400&h=300&fit=crop"
    },
    {
        id: 6,
        slug: "distopias-literarias-orwell-huxley",
        url: "artigos/distopias-literarias-orwell-huxley.html",
        title: "Distopias Literárias e a Realidade Atual: Orwell e Huxley Decifrando o Século XXI",
        excerpt: "Entre a vigilância (1984) e a anestesia (Admirável Mundo Novo): o espelho da sociedade digital.",
        category: "fatos",
        categoryName: "Fatos Atuais",
        author: "Página Virada",
        authorInitial: "P",
        date: "23 Jul 2026",
        readTime: "11 min de leitura",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop"
    },
    {
        id: 7,
        slug: "arquetipo-da-sombra-nas-redes-sociais",
        url: "artigos/arquetipo-da-sombra-nas-redes-sociais.html",
        title: "O Arquétipo da Sombra na Comunicação e nas Redes Sociais",
        excerpt: "Como a projeção inconsciente da Sombra junguiana explica o cancelamento e a polarização digital.",
        category: "comportamento",
        categoryName: "Comportamento e Cultura",
        author: "Página Virada",
        authorInitial: "P",
        date: "22 Jul 2026",
        readTime: "9 min de leitura",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
        id: 8,
        slug: "kafka-e-a-alienacao-do-homem-moderno",
        url: "artigos/kafka-e-a-alienacao-do-homem-moderno.html",
        title: "Franz Kafka e a Burocracia da Alma: A Alienação do Homem Moderno",
        excerpt: "Como a obra de Kafka antecipou o sentimento de desumanização no ambiente corporativo contemporâneo.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "21 Jul 2026",
        readTime: "10 min de leitura",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
    },
    {
        id: 9,
        slug: "dostoievski-e-a-psicologia-da-culpa",
        url: "artigos/dostoievski-e-a-psicologia-da-culpa.html",
        title: "Dostoiévski e a Psicologia da Culpa e Redenção",
        excerpt: "Análise profunda das dinâmicas morais em Crime e Castigo e Os Irmãos Karamázov.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "20 Jul 2026",
        readTime: "12 min de leitura",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=300&fit=crop"
    },
    {
        id: 10,
        slug: "funcao-simbolica-da-literatura-e-empatia",
        url: "artigos/funcao-simbolica-da-literatura-e-empatia.html",
        title: "A Função Simbólica da Literatura no Desenvolvimento da Empatia",
        excerpt: "Como a vivência da perspectiva alheia através dos livros expande nossa inteligência emocional.",
        category: "comportamento",
        categoryName: "Comportamento e Cultura",
        author: "Página Virada",
        authorInitial: "P",
        date: "19 Jul 2026",
        readTime: "8 min de leitura",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop"
    },
    {
        id: 11,
        slug: "de-homero-a-christopher-nolan-mitos",
        url: "artigos/de-homero-a-christopher-nolan-mitos.html",
        title: "De Homero a Christopher Nolan: A Permanência dos Mitos na Narrativa Audiovisual",
        excerpt: "O tempo, o sacrifício e os mitos gregos reimaginados no cinema de grande porte.",
        category: "fatos",
        categoryName: "Fatos Atuais",
        author: "Página Virada",
        authorInitial: "P",
        date: "18 Jul 2026",
        readTime: "10 min de leitura",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=300&fit=crop"
    },
    {
        id: 12,
        slug: "guimaraes-rosa-e-o-sertao-da-mente",
        url: "artigos/guimaraes-rosa-e-o-sertao-da-mente.html",
        title: "Guimarães Rosa e o Sertão da Mente: Onde o Regional se Torna Universal",
        excerpt: "A busca metafísica de Riobaldo e as batalhas espirituais na grande obra brasileira.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "17 Jul 2026",
        readTime: "12 min de leitura",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
        id: 13,
        slug: "a-literatura-e-o-inconsciente-coletivo",
        url: "artigos/a-literatura-e-o-inconsciente-coletivo.html",
        title: "A Literatura e o Inconsciente Coletivo: Como os Grandes Livros Capturam a Sua Época",
        excerpt: "O escritor como sismógrafo das angústias e sonhos subterrâneos da civilização.",
        category: "analise",
        categoryName: "Análise Literária",
        author: "Página Virada",
        authorInitial: "P",
        date: "16 Jul 2026",
        readTime: "9 min de leitura",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop"
    },
    {
        id: 14,
        slug: "o-mito-da-caverna-de-platao-na-era-digital",
        url: "artigos/o-mito-da-caverna-de-platao-na-era-digital.html",
        title: "O Mito da Caverna de Platão na Era Digital: Ilusão e Percepção",
        excerpt: "Algoritmos, feeds e sombras digitais: a profecia de Platão sobre a ilusão contemporânea.",
        category: "fatos",
        categoryName: "Fatos Atuais",
        author: "Página Virada",
        authorInitial: "P",
        date: "15 Jul 2026",
        readTime: "10 min de leitura",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
        id: 15,
        slug: "viver-varias-vidas-em-uma",
        url: "artigos/viver-varias-vidas-em-uma.html",
        title: "Viver Várias Vidas em Uma: A Leitura como Experiência de Transformação Pessoal",
        excerpt: "Por que ler livros densos é a maneira mais autêntica de multiplicar a sabedoria de uma vida.",
        category: "comportamento",
        categoryName: "Comportamento e Cultura",
        author: "Página Virada",
        authorInitial: "P",
        date: "14 Jul 2026",
        readTime: "8 min de leitura",
        image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&h=500&fit=crop",
        thumb: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=300&fit=crop"
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
    document.getElementById('hero-title').textContent = heroArticle.title;
    document.getElementById('hero-excerpt').textContent = heroArticle.excerpt;
    document.getElementById('hero-author').textContent = heroArticle.author;
    document.getElementById('hero-date').textContent = heroArticle.date;
    document.getElementById('hero-readtime').textContent = heroArticle.readTime;
    
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
            a.title.toLowerCase().includes(query) || 
            a.excerpt.toLowerCase().includes(query)
        );
    }

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="no-results">Nenhum artigo encontrado para essa busca.</p>';
        return;
    }

    grid.innerHTML = filtered.map(a => `
        <article class="article-card">
            <a href="${a.url}" class="card-image-link">
                <div class="card-image" style="background-image: url('${a.thumb}')"></div>
            </a>
            <div class="card-content">
                <span class="card-category">${a.categoryName}</span>
                <h3 class="card-title">
                    <a href="${a.url}">${a.title}</a>
                </h3>
                <p class="card-excerpt">${a.excerpt}</p>
                <div class="card-meta">
                    <span class="author-name">${a.author}</span>
                    <span class="separator">·</span>
                    <span class="article-date">${a.date}</span>
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
            <a href="${a.url}" class="popular-title">${a.title}</a>
            <span class="popular-date">${a.date}</span>
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
