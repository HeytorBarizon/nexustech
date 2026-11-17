/**
 * NEXUS TECH - E-commerce SPA Engine (ES6+)
 * Arquitetura modular sem dependências externas.
 */

'use strict';

/* ==========================================================================
   1. BASE DE DADOS EM MEMÓRIA (PRODUTOS & PÁGINAS INSTITUCIONAIS)
   ========================================================================== */
const PRODUCTS = [
  // HARDWARE
  {
    id: 'hw-01',
    category: 'hardware',
    categoryLabel: 'Hardware',
    badge: 'Lançamento',
    title: 'Placa de Vídeo NVIDIA GeForce RTX 4080 Super 16GB',
    specs: 'GDDR6X 256-bit • DLSS 3.5 • Ray Tracing • Triple Fan OC',
    oldPrice: 8499.90,
    price: 7299.90,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'hw-02',
    category: 'hardware',
    categoryLabel: 'Hardware',
    badge: 'Top Performance',
    title: 'Processador AMD Ryzen 9 7950X3D 16-Core',
    specs: '5.7GHz Max Boost • 144MB Cache 3D V-Cache • Socket AM5',
    oldPrice: 4599.00,
    price: 3899.90,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'hw-03',
    category: 'hardware',
    categoryLabel: 'Hardware',
    badge: 'DDR5 6400MHz',
    title: 'Memória RAM Corsair Dominator Titanium 32GB (2x16GB)',
    specs: 'DDR5 6400MHz CL32 • Dissipador em Alumínio Forjado • RGB',
    oldPrice: 1499.00,
    price: 1189.90,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'hw-04',
    category: 'hardware',
    categoryLabel: 'Hardware',
    badge: 'PCIe 5.0',
    title: 'Placa-Mãe ASUS ROG Strix X670E-E Gaming WiFi',
    specs: 'Socket AM5 • DDR5 • 4x Slots M.2 NVMe • Wi-Fi 6E & LAN 2.5G',
    oldPrice: 3699.00,
    price: 3149.90,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // PERIFÉRICOS
  {
    id: 'pr-01',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    badge: '240Hz OLED',
    title: 'Monitor Gamer LG UltraGear 27" QHD OLED 240Hz',
    specs: '0.03ms (GtG) • HDR10 • G-SYNC Compatible • 98.5% DCI-P3',
    oldPrice: 6299.00,
    price: 5399.90,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'pr-02',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    badge: 'Hot-Swappable',
    title: 'Teclado Mecânico Custom Keychron Q1 Pro Wireless',
    specs: 'Corpo Full Alumínio CNC • Switches Mecânicos • Bluetooth/USB-C',
    oldPrice: 1399.00,
    price: 1149.90,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'pr-03',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    badge: '60g Ultra-Leve',
    title: 'Mouse Gamer Logitech G Pro X Superlight 2 Wireless',
    specs: 'Sensor HERO 2 32K DPI • Switches Híbridos Lightforce • 95h Bateria',
    oldPrice: 1099.00,
    price: 879.90,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'pr-04',
    category: 'perifericos',
    categoryLabel: 'Periféricos',
    badge: 'Áudio Espacial',
    title: 'Headset Sem Fio SteelSeries Arctis Nova Pro Wireless',
    specs: 'Cancelamento Ativo de Ruído • DAC Dual System • Bateria Infinita',
    oldPrice: 2499.00,
    price: 2099.90,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80',
    featured: false
  },

  // COMPUTADORES & NOTEBOOKS
  {
    id: 'pc-01',
    category: 'computadores',
    categoryLabel: 'Computadores & Notebooks',
    badge: 'Water Cooler 360mm',
    title: 'PC Gamer Nexus Apex — RTX 4080 + Ryzen 9 + 32GB DDR5',
    specs: 'SSD NVMe 2TB Gen4 • Fonte 850W Platinum • Gabinete Vidro Temperado',
    oldPrice: 16999.00,
    price: 14899.90,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'pc-02',
    category: 'computadores',
    categoryLabel: 'Computadores & Notebooks',
    badge: 'Mini-LED 240Hz',
    title: 'Notebook ASUS ROG Zephyrus G16 (2025) RTX 4070',
    specs: 'Intel Core Ultra 9 • 32GB LPDDR5X • Tela 16" 2.5K • Chassis Alumínio',
    oldPrice: 15499.00,
    price: 13599.90,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'pc-03',
    category: 'computadores',
    categoryLabel: 'Computadores & Notebooks',
    badge: 'Workstation Pro',
    title: 'MacBook Pro 16" Chip M3 Max 36GB RAM 1TB SSD',
    specs: 'CPU 14 Núcleos • GPU 30 Núcleos • Tela Liquid Retina XDR • Preto Espacial',
    oldPrice: 24999.00,
    price: 22499.90,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'pc-04',
    category: 'computadores',
    categoryLabel: 'Computadores & Notebooks',
    badge: 'Custo-Benefício',
    title: 'PC Gamer Nexus Pulse — RTX 4060 Ti + Core i5-14600KF',
    specs: '16GB DDR5 • SSD NVMe 1TB • Air Cooler Dual Tower • Wi-Fi Integrado',
    oldPrice: 7899.00,
    price: 6799.90,
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

const INSTITUTIONAL_PAGES = {
  sobre: {
    title: 'Sobre a NEXUS TECH',
    meta: 'Fundada em 2018 • Referência em Hardware Enthusiast',
    html: `
      <p>A <strong>NEXUS TECH</strong> nasceu com o propósito de conectar entusiastas de tecnologia, criadores de conteúdo, engenheiros e jogadores competitivos aos componentes mais avançados do mercado global.</p>
      <h3>Nossa Engenharia e Curadoria</h3>
      <p>Diferente de varejistas genéricos, cada componente listado em nosso catálogo passa por validação técnica rigorosa de compatibilidade térmica, entrega de energia e desempenho real. Nossas máquinas montadas são submetidas a 24 horas de testes de estresse antes do despacho.</p>
      <h3>Compromisso com o Cliente</h3>
      <ul>
        <li>Produtos 100% lacrados, com nota fiscal eletrônica e garantia oficial no Brasil.</li>
        <li>Embalagem antiestática reforçada com proteção contra impactos severos no transporte.</li>
        <li>Suporte técnico especializado formado por engenheiros de hardware.</li>
      </ul>
    `
  },
  privacidade: {
    title: 'Política de Privacidade (LGPD)',
    meta: 'Última atualização: Janeiro de 2026 • Conformidade Lei nº 13.709/2018',
    html: `
      <p>A NEXUS TECH respeita rigorosamente a privacidade e a segurança dos dados pessoais de seus clientes e visitantes, operando em total conformidade com a Lei Geral de Proteção de Dados (LGPD).</p>
      <h3>1. Coleta e Finalidade dos Dados</h3>
      <p>Coletamos apenas informações estritamente necessárias para o processamento de pedidos, emissão de Nota Fiscal e entrega logística (nome completo, CPF/CNPJ, endereço e contato). Nenhum dado de cartão de crédito é armazenado em nossos servidores.</p>
      <h3>2. Segurança da Informação</h3>
      <p>Todo o tráfego de dados é criptografado via protocolo TLS 1.3 / SSL de 256 bits. Utilize nossos canais oficiais a qualquer momento para solicitar a consulta, retificação ou exclusão dos seus registros.</p>
    `
  },
  termos: {
    title: 'Termos e Condições de Uso',
    meta: 'Regulamento Geral de Compras e Navegação',
    html: `
      <p>Ao acessar e realizar compras na plataforma <strong>NEXUS TECH</strong>, o usuário concorda com as diretrizes estabelecidas neste documento.</p>
      <h3>1. Disponibilidade e Preços</h3>
      <p>Os preços exibidos são válidos para compras efetuadas no momento da visualização, podendo sofrer alterações conforme variação cambial e disponibilidade de lote junto aos distribuidores oficiais.</p>
      <h3>2. Prazos de Envio e Montagem</h3>
      <p>Produtos em estoque têm despacho realizado em até 24 horas úteis após a confirmação do pagamento. Computadores personalizados possuem prazo adicional de 2 a 3 dias úteis para montagem técnica, cable management e bateria de testes.</p>
    `
  },
  trocas: {
    title: 'Política de Trocas, Devoluções e RMA',
    meta: 'Garantia Legal e Suporte Técnico Dedicado',
    html: `
      <p>Queremos garantir total tranquilidade na sua experiência de compra. Nossa política segue integralmente o Código de Defesa do Consumidor.</p>
      <h3>1. Direito de Arrependimento (7 Dias)</h3>
      <p>Conforme o Art. 49 do CDC, o cliente pode solicitar a devolução por arrependimento em até <strong>7 (sete) dias corridos</strong> após o recebimento, desde que o produto esteja sem sinais de mau uso, com lacres intactos e acompanhado de todos os acessórios e manuais originais.</p>
      <h3>2. Defeito Técnico e Garantia</h3>
      <p>Em caso de falha técnica dentro dos primeiros 30 dias, realizamos a troca imediata após análise da nossa bancada de RMA. Após esse período, o acionamento ocorre diretamente pela garantia estendida do fabricante (de 1 a 5 anos, conforme o componente).</p>
    `
  }
};

/* ==========================================================================
   2. ESTADO DA APLICAÇÃO & PERSISTÊNCIA (LOCALSTORAGE)
   ========================================================================== */
const STORAGE_KEY = 'nexustech_cart_v1';

const state = {
  currentRoute: 'home',
  cart: loadCartFromStorage(),
  searchQuery: '',
  sortOrder: 'default'
};

function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveCartToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  updateCartBadge();
}

/* ==========================================================================
   3. UTILITÁRIOS DE FORMATAÇÃO E UI
   ========================================================================== */
function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 260);
  }, 2800);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  const totalItems = state.cart.reduce((acc, item) => acc + item.qty, 0);
  badge.textContent = totalItems;
  badge.classList.remove('cart-btn__badge--bump');
  void badge.offsetWidth; // força reflow para reiniciar animação
  badge.classList.add('cart-btn__badge--bump');
}

/* ==========================================================================
   4. GERENCIAMENTO DO CARRINHO
   ========================================================================== */
function addToCart(productId, triggerButton = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({ id: product.id, qty: 1 });
  }

  saveCartToStorage();
  showToast(`"${product.title}" adicionado ao carrinho.`);

  if (triggerButton) {
    const originalHTML = triggerButton.innerHTML;
    triggerButton.classList.add('product-card__btn--added');
    triggerButton.innerHTML = '&#10003; Adicionado!';
    setTimeout(() => {
      triggerButton.classList.remove('product-card__btn--added');
      triggerButton.innerHTML = originalHTML;
    }, 900);
  }
}

function updateCartItemQty(productId, delta) {
  const index = state.cart.findIndex(item => item.id === productId);
  if (index === -1) return;

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }

  saveCartToStorage();
  renderCurrentView();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCartToStorage();
  showToast('Item removido do carrinho.');
  renderCurrentView();
}

/* ==========================================================================
   5. COMPONENTES DE RENDERIZAÇÃO (HTML TEMPLATES)
   ========================================================================== */
function createProductCardHTML(product) {
  const pixPrice = product.price * 0.9;
  return `
    <article class="product-card">
      <div class="product-card__media">
        <span class="product-card__badge">${product.badge}</span>
        <img src="${product.image}" alt="${product.title}" class="product-card__img" loading="lazy">
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${product.categoryLabel}</span>
        <h3 class="product-card__title">${product.title}</h3>
        <p class="product-card__specs">${product.specs}</p>
        <div class="product-card__footer">
          <div class="product-card__price-box">
            <span class="product-card__old-price">De ${formatBRL(product.oldPrice)}</span>
            <span class="product-card__price">${formatBRL(product.price)}</span>
            <span class="product-card__pix"><strong>${formatBRL(pixPrice)}</strong> à vista no PIX (10% OFF)</span>
          </div>
          <button type="button" class="product-card__btn" data-add-cart="${product.id}">
            <span>+ Adicionar ao Carrinho</span>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderHomeView() {
  const hardwareList = PRODUCTS.filter(p => p.category === 'hardware').slice(0, 4);
  const perifericosList = PRODUCTS.filter(p => p.category === 'perifericos').slice(0, 4);
  const computadoresList = PRODUCTS.filter(p => p.category === 'computadores').slice(0, 4);

  return `
    <div class="view-fade">
      <!-- Hero Banner -->
      <section class="hero">
        <div class="container hero__grid">
          <div>
            <span class="hero__tag">&#9889; Linha 2026 Disponível</span>
            <h1 class="hero__title">
              Potência Extrema para <span class="hero__title-highlight">Setup &amp; Engenharia.</span>
            </h1>
            <p class="hero__subtitle">
              Placas de vídeo de última geração, processadores desbloqueados, monitores OLED 240Hz e estações de trabalho montadas sob rigoroso padrão térmico.
            </p>
            <div class="hero__cta-group">
              <a href="#hardware" class="btn btn--primary" data-route="hardware">Explorar Hardware</a>
              <a href="#computadores" class="btn btn--outline" data-route="computadores">Ver PCs &amp; Notebooks</a>
            </div>
          </div>

          <div class="hero__visual">
            <img src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&w=1000&q=85" alt="Setup Gamer e Workstation iluminado" class="hero__image">
            <div class="hero__stats">
              <div>
                <span class="hero__stat-value">10% OFF</span>
                <span class="hero__stat-label">Pagamento via PIX</span>
              </div>
              <div>
                <span class="hero__stat-value">12x S/ Juros</span>
                <span class="hero__stat-label">Nos principais cartões</span>
              </div>
              <div>
                <span class="hero__stat-value">24 Horas</span>
                <span class="hero__stat-label">Despacho Expresso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Categoria 1: Hardware -->
      <section class="section">
        <div class="container">
          <div class="section__header">
            <div>
              <span class="section__eyebrow">// Componentes Internos</span>
              <h2 class="section__title">Hardware de Alta Performance</h2>
              <p class="section__subtitle">GPUs, CPUs, placas-mãe e memórias DDR5 selecionadas para máximo FPS e renderização.</p>
            </div>
            <a href="#hardware" class="btn btn--outline" data-route="hardware">Ver Todo Hardware &rarr;</a>
          </div>
          <div class="products-grid">
            ${hardwareList.map(createProductCardHTML).join('')}
          </div>
        </div>
      </section>

      <!-- Categoria 2: Periféricos -->
      <section class="section section--alt">
        <div class="container">
          <div class="section__header">
            <div>
              <span class="section__eyebrow">// Precisão &amp; Imersão</span>
              <h2 class="section__title">Periféricos Gamer &amp; Profissionais</h2>
              <p class="section__subtitle">Monitores OLED de alta taxa de atualização, teclados custom e mouses ultraleves.</p>
            </div>
            <a href="#perifericos" class="btn btn--outline" data-route="perifericos">Ver Todos Periféricos &rarr;</a>
          </div>
          <div class="products-grid">
            ${perifericosList.map(createProductCardHTML).join('')}
          </div>
        </div>
      </section>

      <!-- Categoria 3: Computadores & Notebooks -->
      <section class="section">
        <div class="container">
          <div class="section__header">
            <div>
              <span class="section__eyebrow">// Prontos para Batalha</span>
              <h2 class="section__title">Workstations, PCs &amp; Notebooks</h2>
              <p class="section__subtitle">Máquinas testadas em bancada e notebooks ultrafinos de alto desempenho.</p>
            </div>
            <a href="#computadores" class="btn btn--outline" data-route="computadores">Ver Toda Linha &rarr;</a>
          </div>
          <div class="products-grid">
            ${computadoresList.map(createProductCardHTML).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderCategoryView(categoryKey, title, subtitle) {
  let items = PRODUCTS.filter(p => p.category === categoryKey);

  if (state.searchQuery.trim() !== '') {
    const q = state.searchQuery.toLowerCase();
    items = items.filter(p =>
      p.title.toLowerCase().includes(q) || p.specs.toLowerCase().includes(q)
    );
  }

  if (state.sortOrder === 'price-asc') {
    items = [...items].sort((a, b) => a.price - b.price);
  } else if (state.sortOrder === 'price-desc') {
    items = [...items].sort((a, b) => b.price - a.price);
  }

  return `
    <div class="view-fade">
      <section class="section">
        <div class="container">
          <div class="section__header">
            <div>
              <span class="section__eyebrow">// Catálogo Oficial</span>
              <h1 class="section__title">${title}</h1>
              <p class="section__subtitle">${subtitle}</p>
            </div>
          </div>

          <div class="catalog-toolbar">
            <input
              type="search"
              id="catalog-search"
              class="catalog-toolbar__search"
              placeholder="Filtrar por modelo, chipset ou especificação..."
              value="${state.searchQuery}"
              aria-label="Filtrar produtos nesta categoria"
            >
            <select id="catalog-sort" class="catalog-toolbar__select" aria-label="Ordenar produtos">
              <option value="default" ${state.sortOrder === 'default' ? 'selected' : ''}>Ordenar: Relevância</option>
              <option value="price-asc" ${state.sortOrder === 'price-asc' ? 'selected' : ''}>Menor Preço</option>
              <option value="price-desc" ${state.sortOrder === 'price-desc' ? 'selected' : ''}>Maior Preço</option>
            </select>
          </div>

          ${
            items.length > 0
              ? `<div class="products-grid">${items.map(createProductCardHTML).join('')}</div>`
              : `<div class="empty-state">
                  <h2 class="empty-state__title">Nenhum produto encontrado</h2>
                  <p class="empty-state__desc">Tente ajustar os termos da sua busca para ver os itens disponíveis.</p>
                  <button type="button" class="btn btn--outline" id="clear-filter-btn">Limpar Filtro</button>
                </div>`
          }
        </div>
      </section>
    </div>
  `;
}

function renderCartView() {
  if (state.cart.length === 0) {
    return `
      <div class="view-fade">
        <section class="section">
          <div class="container">
            <div class="empty-state">
              <h1 class="empty-state__title">Seu carrinho está vazio</h1>
              <p class="empty-state__desc">Explore nosso catálogo de hardware, periféricos e computadores para montar seu setup.</p>
              <a href="#home" class="btn btn--primary" data-route="home">Continuar Comprando</a>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  let subtotal = 0;
  const itemsHTML = state.cart
    .map(cartItem => {
      const product = PRODUCTS.find(p => p.id === cartItem.id);
      if (!product) return '';
      const itemTotal = product.price * cartItem.qty;
      subtotal += itemTotal;

      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.title}" class="cart-item__img">
          <div>
            <h3 class="cart-item__title">${product.title}</h3>
            <span class="cart-item__unit-price">Unitário: ${formatBRL(product.price)}</span>
          </div>
          <div class="cart-item__qty" aria-label="Controle de quantidade">
            <button type="button" class="cart-item__qty-btn" data-qty-delta="-1" data-id="${product.id}" aria-label="Diminuir quantidade">-</button>
            <span class="cart-item__qty-val">${cartItem.qty}</span>
            <button type="button" class="cart-item__qty-btn" data-qty-delta="1" data-id="${product.id}" aria-label="Aumentar quantidade">+</button>
          </div>
          <div class="cart-item__subtotal">
            <span class="cart-item__total-price">${formatBRL(itemTotal)}</span>
            <button type="button" class="cart-item__remove" data-remove-id="${product.id}">Remover</button>
          </div>
        </article>
      `;
    })
    .join('');

  const shipping = subtotal >= 500 ? 0 : 39.90;
  const total = subtotal + shipping;
  const pixTotal = total * 0.9;

  return `
    <div class="view-fade">
      <section class="section">
        <div class="container">
          <div class="section__header">
            <div>
              <span class="section__eyebrow">// Finalização Segura</span>
              <h1 class="section__title">Carrinho &amp; Checkout</h1>
            </div>
            <a href="#home" class="btn btn--outline" data-route="home">&larr; Continuar Comprando</a>
          </div>

          <div class="cart-layout">
            <div class="cart-list">
              ${itemsHTML}
            </div>

            <aside class="checkout-card">
              <h2 class="checkout-card__title">Resumo do Pedido</h2>
              <div class="checkout-card__row">
                <span>Subtotal</span>
                <span>${formatBRL(subtotal)}</span>
              </div>
              <div class="checkout-card__row">
                <span>Frete Segurado</span>
                <span>${shipping === 0 ? '<strong style="color:var(--success)">GRÁTIS</strong>' : formatBRL(shipping)}</span>
              </div>
              <div class="checkout-card__row checkout-card__row--total">
                <span>Total (Cartão até 12x)</span>
                <span class="checkout-card__total-val">${formatBRL(total)}</span>
              </div>
              <div class="checkout-card__row" style="color: var(--success); font-size: 0.88rem;">
                <span>Ou no PIX (10% OFF):</span>
                <strong>${formatBRL(pixTotal)}</strong>
              </div>

              <form class="checkout-form" id="checkout-form">
                <div class="form-group">
                  <label for="customer-name">Nome Completo</label>
                  <input type="text" id="customer-name" class="form-control" required placeholder="Ex: Lucas Andrade">
                </div>
                <div class="form-group">
                  <label for="customer-email">E-mail para Nota Fiscal</label>
                  <input type="email" id="customer-email" class="form-control" required placeholder="lucas@exemplo.com.br">
                </div>
                <div class="form-group">
                  <label for="payment-method">Forma de Pagamento</label>
                  <select id="payment-method" class="form-control">
                    <option value="pix">PIX Instantâneo (10% de Desconto)</option>
                    <option value="card">Cartão de Crédito (12x sem juros)</option>
                    <option value="boleto">Boleto Bancário</option>
                  </select>
                </div>
                <button type="submit" class="btn btn--primary" style="width: 100%; margin-top: 0.5rem;">
                  Finalizar Pedido Simulado
                </button>
              </form>
            </aside>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderInstitutionalView(pageKey) {
  if (pageKey === 'contato') {
    return `
      <div class="view-fade">
        <section class="section">
          <div class="container">
            <div class="institutional-box">
              <div class="institutional-box__header">
                <h1 class="institutional-box__title">Fale Conosco</h1>
                <span class="institutional-box__meta">Suporte Técnico &amp; Atendimento Comercial</span>
              </div>
              <div class="institutional-box__content">
                <p>Precisa de auxílio para validar a compatibilidade de peças do seu setup ou acompanhar um pedido? Preencha o formulário abaixo e nossa equipe responderá em até 2 horas úteis.</p>
                <form id="contact-form" class="checkout-form">
                  <div class="form-group">
                    <label for="contact-name">Seu Nome</label>
                    <input type="text" id="contact-name" class="form-control" required placeholder="Digite seu nome">
                  </div>
                  <div class="form-group">
                    <label for="contact-email">Seu E-mail</label>
                    <input type="email" id="contact-email" class="form-control" required placeholder="seu@email.com">
                  </div>
                  <div class="form-group">
                    <label for="contact-subject">Assunto</label>
                    <select id="contact-subject" class="form-control">
                      <option>Consultoria de Compatibilidade de Hardware</option>
                      <option>Status de Pedido / Rastreamento</option>
                      <option>Garantia / RMA</option>
                      <option>Vendas Corporativas (B2B)</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="contact-message">Mensagem</label>
                    <textarea id="contact-message" rows="4" class="form-control" required placeholder="Descreva sua dúvida ou configuração..."></textarea>
                  </div>
                  <button type="submit" class="btn btn--primary">Enviar Mensagem</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  const page = INSTITUTIONAL_PAGES[pageKey] || INSTITUTIONAL_PAGES.sobre;
  return `
    <div class="view-fade">
      <section class="section">
        <div class="container">
          <div class="institutional-box">
            <div class="institutional-box__header">
              <h1 class="institutional-box__title">${page.title}</h1>
              <span class="institutional-box__meta">${page.meta}</span>
            </div>
            <div class="institutional-box__content">
              ${page.html}
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

/* ==========================================================================
   6. ROTEADOR SPA & CONTROLE DE NAVEGAÇÃO
   ========================================================================== */
function navigateTo(route) {
  if (state.currentRoute !== route) {
    state.searchQuery = '';
    state.sortOrder = 'default';
  }
  state.currentRoute = route;
  window.history.replaceState(null, '', `#${route}`);

  updateActiveNavLinks(route);
  closeMobileMenu();
  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateActiveNavLinks(route) {
  document.querySelectorAll('.nav__link').forEach(link => {
    const isMatch = link.dataset.route === route;
    link.classList.toggle('nav__link--active', isMatch);
  });

  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.classList.toggle('cart-btn--active', route === 'carrinho');
  }
}

function renderCurrentView() {
  const root = document.getElementById('app-root');

  switch (state.currentRoute) {
    case 'home':
      root.innerHTML = renderHomeView();
      break;
    case 'hardware':
      root.innerHTML = renderCategoryView(
        'hardware',
        'Hardware de Alta Performance',
        'Placas de vídeo, processadores, memórias DDR5 e placas-mãe de última geração.'
      );
      break;
    case 'perifericos':
      root.innerHTML = renderCategoryView(
        'perifericos',
        'Periféricos Gamer & Precisão',
        'Monitores OLED, teclados mecânicos, mouses competitivos e headsets wireless.'
      );
      break;
    case 'computadores':
      root.innerHTML = renderCategoryView(
        'computadores',
        'Computadores & Notebooks',
        'Workstations montadas e notebooks de alto rendimento prontos para uso.'
      );
      break;
    case 'carrinho':
      root.innerHTML = renderCartView();
      break;
    case 'sobre':
    case 'privacidade':
    case 'termos':
    case 'trocas':
    case 'contato':
      root.innerHTML = renderInstitutionalView(state.currentRoute);
      break;
    default:
      root.innerHTML = renderHomeView();
  }
}

/* ==========================================================================
   7. MENU MOBILE & DELEGAÇÃO GLOBAL DE EVENTOS
   ========================================================================== */
function toggleMobileMenu() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  const isOpen = nav.classList.toggle('nav--open');
  btn.classList.toggle('hamburger--open', isOpen);
  btn.setAttribute('aria-expanded', String(isOpen));
}

function closeMobileMenu() {
  const nav = document.getElementById('main-nav');
  const btn = document.getElementById('hamburger-btn');
  nav.classList.remove('nav--open');
  btn.classList.remove('hamburger--open');
  btn.setAttribute('aria-expanded', 'false');
}

function bindGlobalEvents() {
  // Menu hambúrguer
  document.getElementById('hamburger-btn').addEventListener('click', toggleMobileMenu);

  // Delegação de cliques em todo o documento
  document.addEventListener('click', event => {
    // 1. Links de navegação SPA ([data-route])
    const routeEl = event.target.closest('[data-route]');
    if (routeEl) {
      event.preventDefault();
      navigateTo(routeEl.dataset.route);
      return;
    }

    // 2. Adicionar produto ao carrinho
    const addCartBtn = event.target.closest('[data-add-cart]');
    if (addCartBtn) {
      addToCart(addCartBtn.dataset.addCart, addCartBtn);
      return;
    }

    // 3. Alterar quantidade no carrinho
    const qtyBtn = event.target.closest('[data-qty-delta]');
    if (qtyBtn) {
      const delta = Number(qtyBtn.dataset.qtyDelta);
      updateCartItemQty(qtyBtn.dataset.id, delta);
      return;
    }

    // 4. Remover item do carrinho
    const removeBtn = event.target.closest('[data-remove-id]');
    if (removeBtn) {
      removeFromCart(removeBtn.dataset.removeId);
      return;
    }

    // 5. Limpar filtro de busca
    if (event.target.id === 'clear-filter-btn') {
      state.searchQuery = '';
      renderCurrentView();
    }
  });

  // Delegação de inputs (busca e ordenação nas páginas de categoria)
  document.addEventListener('input', event => {
    if (event.target.id === 'catalog-search') {
      state.searchQuery = event.target.value;
      const cursorPos = event.target.selectionStart;
      renderCurrentView();
      const newInput = document.getElementById('catalog-search');
      if (newInput) {
        newInput.focus();
        newInput.setSelectionRange(cursorPos, cursorPos);
      }
    }
  });

  document.addEventListener('change', event => {
    if (event.target.id === 'catalog-sort') {
      state.sortOrder = event.target.value;
      renderCurrentView();
    }
  });

  // Delegação de envio de formulários (Checkout & Contato)
  document.addEventListener('submit', event => {
    if (event.target.id === 'checkout-form') {
      event.preventDefault();
      const customerName = document.getElementById('customer-name').value;
      const orderNumber = Math.floor(100000 + Math.random() * 900000);

      state.cart = [];
      saveCartToStorage();

      const root = document.getElementById('app-root');
      root.innerHTML = `
        <div class="view-fade">
          <section class="section">
            <div class="container">
              <div class="institutional-box" style="text-align: center;">
                <span class="hero__tag" style="margin-bottom: 1rem;">&#10003; Pedido Confirmado</span>
                <h1 class="institutional-box__title">Obrigado pela sua compra, ${customerName}!</h1>
                <p style="color: var(--text-secondary); margin: 1rem 0 1.5rem;">
                  Seu pedido simulado <strong>#NX-${orderNumber}</strong> foi registrado com sucesso. Os detalhes e o código de rastreamento foram enviados para o e-mail informado.
                </p>
                <a href="#home" class="btn btn--primary" data-route="home">Voltar à Loja</a>
              </div>
            </div>
          </section>
        </div>
      `;
      showToast(`Pedido #NX-${orderNumber} finalizado com sucesso!`);
    }

    if (event.target.id === 'contact-form') {
      event.preventDefault();
      event.target.reset();
      showToast('Mensagem enviada! Nossa equipe responderá em breve.');
    }
  });
}

/* ==========================================================================
   8. INICIALIZAÇÃO DA APLICAÇÃO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const initialHash = window.location.hash.replace('#', '');
  const validRoutes = [
    'home', 'hardware', 'perifericos', 'computadores', 'carrinho',
    'sobre', 'privacidade', 'termos', 'trocas', 'contato'
  ];

  state.currentRoute = validRoutes.includes(initialHash) ? initialHash : 'home';

  updateCartBadge();
  updateActiveNavLinks(state.currentRoute);
  renderCurrentView();
  bindGlobalEvents();
});