'use strict';

/* ================= CONFIGURATION MAGASIN ================= */
const STORE = {
    nom: 'AE',
    adresse: 'Magasin Casablanca',
    ville: 'Casablanca',
    tel: '05 XX XX XX XX',
    ice: '000000000000000',
    if: '00000000',
    rc: '00000',
    caisse: 'Caisse 01',
    caissier: 'Caissier',
    messageFin: 'Merci de votre visite !\nÀ bientôt',
    devise: 'DH'
};

/* ================= CATÉGORIES ================= */
const CATEGORIES = [
    'Boissons',
    'Épicerie',
    'Frais',
    'Fruits & Légumes',
    'Boulangerie',
    'Hygiène',
    'Entretien',
    'Bébé'
];

const CAT_COLORS = {
    'Boissons':          '#2563eb',
    'Épicerie':          '#f59e0b',
    'Frais':             '#10b981',
    'Fruits & Légumes':  '#84cc16',
    'Boulangerie':       '#a16207',
    'Hygiène':           '#8b5cf6',
    'Entretien':         '#ec4899',
    'Bébé':              '#06b6d4'
};

const CAT_EMOJI = {
    'Boissons':          '🥤',
    'Épicerie':          '🍝',
    'Frais':             '🧀',
    'Fruits & Légumes':  '🥬',
    'Boulangerie':       '🥖',
    'Hygiène':           '🧼',
    'Entretien':         '🧹',
    'Bébé':              '👶'
};

/* ================= CATALOGUE (prix TTC en DH) ================= */
const CATALOG = [
    /* ============ 🥤 BOISSONS ============ */
    { code: '6111000000011', nom: 'Coca-Cola 1L',               prix: 9.50,  categorie: 'Boissons', tva: 20, stock: 48,  emoji: '🥤' },
    { code: '6111000000028', nom: 'Coca-Cola 33cl',             prix: 4.50,  categorie: 'Boissons', tva: 20, stock: 72,  emoji: '🥤' },
    { code: '6111000000035', nom: 'Coca Zero 1L',               prix: 9.50,  categorie: 'Boissons', tva: 20, stock: 36,  emoji: '🥤' },
    { code: '6111000000042', nom: 'Pepsi 1.5L',                 prix: 10.50, categorie: 'Boissons', tva: 20, stock: 30,  emoji: '🥤' },
    { code: '6111000000059', nom: 'Fanta Orange 1L',            prix: 9.00,  categorie: 'Boissons', tva: 20, stock: 40,  emoji: '🍊' },
    { code: '6111000000066', nom: 'Sprite 1L',                  prix: 9.00,  categorie: 'Boissons', tva: 20, stock: 35,  emoji: '🥤' },
    { code: '6111000000073', nom: 'Eau minérale Sidi Ali 1.5L', prix: 5.00,  categorie: 'Boissons', tva: 7,  stock: 120, emoji: '💧' },
    { code: '6111000000080', nom: 'Eau Aïn Saïss 1.5L',         prix: 4.50,  categorie: 'Boissons', tva: 7,  stock: 100, emoji: '💧' },
    { code: '6111000000097', nom: 'Eau gazeuse Bahia 1L',       prix: 6.00,  categorie: 'Boissons', tva: 7,  stock: 25,  emoji: '💧' },
    { code: '6111000000103', nom: 'Jus d\'orange Marrakech 1L', prix: 12.90, categorie: 'Boissons', tva: 20, stock: 30,  emoji: '🍊' },
    { code: '6111000000110', nom: 'Jus Ramy 1L',                prix: 13.50, categorie: 'Boissons', tva: 20, stock: 24,  emoji: '🧃' },
    { code: '6111000000127', nom: 'Red Bull 25cl',              prix: 15.00, categorie: 'Boissons', tva: 20, stock: 18,  emoji: '⚡' },
    { code: '6111000000134', nom: 'Thé vert Sultan 200g',       prix: 22.00, categorie: 'Boissons', tva: 20, stock: 30,  emoji: '🍵' },
    { code: '6111000000141', nom: 'Café moulu Black 250g',      prix: 27.50, categorie: 'Boissons', tva: 20, stock: 20,  emoji: '☕' },
    { code: '6111000000158', nom: 'Nescafé 100g',               prix: 45.00, categorie: 'Boissons', tva: 20, stock: 12,  emoji: '☕' },

    /* ============ 🍝 ÉPICERIE ============ */
    { code: '6111000000202', nom: 'Riz Taous 1kg',              prix: 15.00, categorie: 'Épicerie', tva: 10, stock: 55,  emoji: '🍚' },
    { code: '6111000000219', nom: 'Riz Uncle Ben\'s 1kg',       prix: 22.00, categorie: 'Épicerie', tva: 10, stock: 25,  emoji: '🍚' },
    { code: '6111000000226', nom: 'Pâtes spaghetti Mina 500g',  prix: 7.20,  categorie: 'Épicerie', tva: 10, stock: 80,  emoji: '🍝' },
    { code: '6111000000233', nom: 'Pâtes coudes 500g',          prix: 7.00,  categorie: 'Épicerie', tva: 10, stock: 60,  emoji: '🍝' },
    { code: '6111000000240', nom: 'Huile d\'olive Aicha 1L',    prix: 69.00, categorie: 'Épicerie', tva: 10, stock: 22,  emoji: '🫒' },
    { code: '6111000000257', nom: 'Huile de table Lesieur 1L',  prix: 18.00, categorie: 'Épicerie', tva: 10, stock: 40,  emoji: '🫗' },
    { code: '6111000000264', nom: 'Sucre blanc 1kg',            prix: 8.90,  categorie: 'Épicerie', tva: 10, stock: 70,  emoji: '🧂' },
    { code: '6111000000271', nom: 'Farine tout usage 1kg',      prix: 6.50,  categorie: 'Épicerie', tva: 10, stock: 45,  emoji: '🌾' },
    { code: '6111000000288', nom: 'Sel fin 500g',               prix: 3.00,  categorie: 'Épicerie', tva: 10, stock: 60,  emoji: '🧂' },
    { code: '6111000000295', nom: 'Harissa 190g',               prix: 6.00,  categorie: 'Épicerie', tva: 10, stock: 0,   emoji: '🌶️' },
    { code: '6111000000301', nom: 'Concentré tomate 400g',      prix: 8.50,  categorie: 'Épicerie', tva: 10, stock: 38,  emoji: '🍅' },
    { code: '6111000000318', nom: 'Thon en boîte 200g',         prix: 15.00, categorie: 'Épicerie', tva: 20, stock: 44,  emoji: '🐟' },
    { code: '6111000000325', nom: 'Sardines en boîte 125g',     prix: 7.50,  categorie: 'Épicerie', tva: 20, stock: 52,  emoji: '🐟' },
    { code: '6111000000332', nom: 'Chips Lay\'s 100g',          prix: 12.00, categorie: 'Épicerie', tva: 20, stock: 40,  emoji: '🥔' },
    { code: '6111000000349', nom: 'Chips nature 100g',          prix: 6.50,  categorie: 'Épicerie', tva: 20, stock: 60,  emoji: '🥔' },
    { code: '6111000000356', nom: 'Biscuits Prince Chocolat',   prix: 11.00, categorie: 'Épicerie', tva: 20, stock: 35,  emoji: '🍪' },
    { code: '6111000000363', nom: 'Biscuits Lu Petit Beurre',   prix: 8.00,  categorie: 'Épicerie', tva: 20, stock: 42,  emoji: '🍪' },
    { code: '6111000000370', nom: 'Céréales Chocapic 375g',     prix: 32.00, categorie: 'Épicerie', tva: 20, stock: 18,  emoji: '🥣' },
    { code: '6111000000387', nom: 'Confiture Aicha 400g',       prix: 18.00, categorie: 'Épicerie', tva: 20, stock: 22,  emoji: '🍓' },
    { code: '6111000000394', nom: 'Miel naturel 250g',          prix: 45.00, categorie: 'Épicerie', tva: 20, stock: 14,  emoji: '🍯' },
    { code: '6111000000400', nom: 'Vinaigre blanc 1L',          prix: 8.00,  categorie: 'Épicerie', tva: 10, stock: 30,  emoji: '🧴' },
    { code: '6111000000417', nom: 'Mayonnaise Calvé 400g',      prix: 22.00, categorie: 'Épicerie', tva: 20, stock: 20,  emoji: '🥫' },
    { code: '6111000000424', nom: 'Ketchup Heinz 400g',         prix: 25.00, categorie: 'Épicerie', tva: 20, stock: 18,  emoji: '🥫' },

    /* ============ 🧀 FRAIS ============ */
    { code: '6111000000500', nom: 'Lait Centrale 1L',           prix: 8.00,  categorie: 'Frais', tva: 7, stock: 90,  emoji: '🥛' },
    { code: '6111000000517', nom: 'Lait Jaouda 1L',             prix: 7.50,  categorie: 'Frais', tva: 7, stock: 85,  emoji: '🥛' },
    { code: '6111000000524', nom: 'Lait chocolaté 1L',          prix: 12.00, categorie: 'Frais', tva: 7, stock: 40,  emoji: '🍫' },
    { code: '6111000000531', nom: 'Yaourt nature x4',           prix: 10.50, categorie: 'Frais', tva: 7, stock: 35,  emoji: '🍦' },
    { code: '6111000000548', nom: 'Yaourt fruit x4',            prix: 12.00, categorie: 'Frais', tva: 7, stock: 28,  emoji: '🍓' },
    { code: '6111000000555', nom: 'La Vache qui Rit x8',        prix: 18.00, categorie: 'Frais', tva: 7, stock: 40,  emoji: '🧀' },
    { code: '6111000000562', nom: 'Fromage Président portions', prix: 16.50, categorie: 'Frais', tva: 7, stock: 33,  emoji: '🧀' },
    { code: '6111000000579', nom: 'Beurre Président 250g',      prix: 22.00, categorie: 'Frais', tva: 7, stock: 3,   emoji: '🧈' },
    { code: '6111000000586', nom: 'Œufs x12',                   prix: 21.00, categorie: 'Frais', tva: 7, stock: 20,  emoji: '🥚' },
    { code: '6111000000593', nom: 'Œufs x6',                    prix: 12.00, categorie: 'Frais', tva: 7, stock: 30,  emoji: '🥚' },
    { code: '6111000000600', nom: 'Pain de mie Harrys',         prix: 9.00,  categorie: 'Frais', tva: 7, stock: 28,  emoji: '🍞' },
    { code: '6111000000617', nom: 'Viande hachée 500g',         prix: 45.00, categorie: 'Frais', tva: 20, stock: 15,  emoji: '🥩' },
    { code: '6111000000624', nom: 'Poulet entier 1kg',          prix: 35.00, categorie: 'Frais', tva: 20, stock: 18,  emoji: '🍗' },
    { code: '6111000000631', nom: 'Merguez 500g',               prix: 38.00, categorie: 'Frais', tva: 20, stock: 12,  emoji: '🌭' },
    { code: '6111000000648', nom: 'Jambon de dinde 200g',       prix: 25.00, categorie: 'Frais', tva: 20, stock: 10,  emoji: '🥓' },

    /* ============ 🥬 FRUITS & LÉGUMES ============ */
    { code: '6111000000700', nom: 'Bananes 1kg',                prix: 12.00, categorie: 'Fruits & Légumes', tva: 7, stock: 40, emoji: '🍌' },
    { code: '6111000000717', nom: 'Pommes 1kg',                 prix: 15.00, categorie: 'Fruits & Légumes', tva: 7, stock: 35, emoji: '🍎' },
    { code: '6111000000724', nom: 'Oranges 1kg',                prix: 8.00,  categorie: 'Fruits & Légumes', tva: 7, stock: 50, emoji: '🍊' },
    { code: '6111000000731', nom: 'Fraises 500g',               prix: 18.00, categorie: 'Fruits & Légumes', tva: 7, stock: 15, emoji: '🍓' },
    { code: '6111000000748', nom: 'Citrons 1kg',                prix: 9.00,  categorie: 'Fruits & Légumes', tva: 7, stock: 25, emoji: '🍋' },
    { code: '6111000000755', nom: 'Tomates 1kg',                prix: 7.00,  categorie: 'Fruits & Légumes', tva: 7, stock: 45, emoji: '🍅' },
    { code: '6111000000762', nom: 'Pommes de terre 1kg',        prix: 5.50,  categorie: 'Fruits & Légumes', tva: 7, stock: 60, emoji: '🥔' },
    { code: '6111000000779', nom: 'Oignons 1kg',                prix: 6.00,  categorie: 'Fruits & Légumes', tva: 7, stock: 55, emoji: '🧅' },
    { code: '6111000000786', nom: 'Carottes 1kg',               prix: 5.00,  categorie: 'Fruits & Légumes', tva: 7, stock: 40, emoji: '🥕' },
    { code: '6111000000793', nom: 'Salade verte',               prix: 4.50,  categorie: 'Fruits & Légumes', tva: 7, stock: 20, emoji: '🥬' },
    { code: '6111000000800', nom: 'Concombre',                  prix: 3.50,  categorie: 'Fruits & Légumes', tva: 7, stock: 30, emoji: '🥒' },
    { code: '6111000000817', nom: 'Poivrons 1kg',               prix: 10.00, categorie: 'Fruits & Légumes', tva: 7, stock: 22, emoji: '🫑' },

    /* ============ 🥖 BOULANGERIE ============ */
    { code: '6111000000900', nom: 'Baguette',                   prix: 2.50,  categorie: 'Boulangerie', tva: 7, stock: 50, emoji: '🥖' },
    { code: '6111000000917', nom: 'Pain complet',               prix: 4.00,  categorie: 'Boulangerie', tva: 7, stock: 30, emoji: '🍞' },
    { code: '6111000000924', nom: 'Croissant',                  prix: 3.50,  categorie: 'Boulangerie', tva: 7, stock: 40, emoji: '🥐' },
    { code: '6111000000931', nom: 'Msemen x4',                  prix: 8.00,  categorie: 'Boulangerie', tva: 7, stock: 25, emoji: '🫓' },
    { code: '6111000000948', nom: 'Harcha',                     prix: 5.00,  categorie: 'Boulangerie', tva: 7, stock: 20, emoji: '🫓' },
    { code: '6111000000955', nom: 'Pain au chocolat',           prix: 4.00,  categorie: 'Boulangerie', tva: 7, stock: 30, emoji: '🥐' },

    /* ============ 🧼 HYGIÈNE ============ */
    { code: '6111000001000', nom: 'Savon Dove 100g',            prix: 12.00, categorie: 'Hygiène', tva: 20, stock: 44, emoji: '🧼' },
    { code: '6111000001017', nom: 'Savon liquide Palmolive 500ml', prix: 19.90, categorie: 'Hygiène', tva: 20, stock: 26, emoji: '🧴' },
    { code: '6111000001024', nom: 'Gel douche Sanex 500ml',     prix: 28.00, categorie: 'Hygiène', tva: 20, stock: 22, emoji: '🧴' },
    { code: '6111000001031', nom: 'Shampoing Head&Shoulders 400ml', prix: 42.00, categorie: 'Hygiène', tva: 20, stock: 18, emoji: '🧴' },
    { code: '6111000001048', nom: 'Dentifrice Signal 100ml',    prix: 17.00, categorie: 'Hygiène', tva: 20, stock: 38, emoji: '🪥' },
    { code: '6111000001055', nom: 'Brosse à dents Colgate',     prix: 15.00, categorie: 'Hygiène', tva: 20, stock: 30, emoji: '🪥' },
    { code: '6111000001062', nom: 'Déodorant Rexona',           prix: 25.00, categorie: 'Hygiène', tva: 20, stock: 20, emoji: '🧴' },
    { code: '6111000001079', nom: 'Papier toilette x12',        prix: 35.00, categorie: 'Hygiène', tva: 20, stock: 50, emoji: '🧻' },
    { code: '6111000001086', nom: 'Mouchoirs x10',              prix: 12.00, categorie: 'Hygiène', tva: 20, stock: 40, emoji: '🤧' },
    { code: '6111000001093', nom: 'Rasoirs Gillette x5',        prix: 35.00, categorie: 'Hygiène', tva: 20, stock: 15, emoji: '🪒' },
    { code: '6111000001100', nom: 'Crème Nivea 200ml',          prix: 32.00, categorie: 'Hygiène', tva: 20, stock: 18, emoji: '🧴' },

    /* ============ 🧹 ENTRETIEN ============ */
    { code: '6111000001200', nom: 'Lessive Tide 2L',            prix: 49.00, categorie: 'Entretien', tva: 20, stock: 15, emoji: '🧺' },
    { code: '6111000001217', nom: 'Lessive Ariel 3L',           prix: 65.00, categorie: 'Entretien', tva: 20, stock: 12, emoji: '🧺' },
    { code: '6111000001224', nom: 'Adoucissant Soupline 2L',    prix: 32.00, categorie: 'Entretien', tva: 20, stock: 20, emoji: '🧴' },
    { code: '6111000001231', nom: 'Liquide vaisselle Paic 750ml', prix: 18.00, categorie: 'Entretien', tva: 20, stock: 32, emoji: '🧴' },
    { code: '6111000001248', nom: 'Javel 2L',                   prix: 12.00, categorie: 'Entretien', tva: 20, stock: 40, emoji: '🧴' },
    { code: '6111000001255', nom: 'Éponges x5',                 prix: 8.00,  categorie: 'Entretien', tva: 20, stock: 45, emoji: '🧽' },
    { code: '6111000001262', nom: 'Sac poubelle x20',           prix: 13.50, categorie: 'Entretien', tva: 20, stock: 44, emoji: '🗑️' },
    { code: '6111000001279', nom: 'Nettoyant WC 750ml',         prix: 22.00, categorie: 'Entretien', tva: 20, stock: 25, emoji: '🧴' },
    { code: '6111000001286', nom: 'Nettoyant sol Ajax 1L',      prix: 25.00, categorie: 'Entretien', tva: 20, stock: 22, emoji: '🧴' },
    { code: '6111000001293', nom: 'Papier aluminium',           prix: 15.00, categorie: 'Entretien', tva: 20, stock: 30, emoji: '📦' },
    { code: '6111000001300', nom: 'Film plastique',             prix: 18.00, categorie: 'Entretien', tva: 20, stock: 28, emoji: '📦' },

    /* ============ 👶 BÉBÉ ============ */
    { code: '6111000001400', nom: 'Couches Pampers x30',        prix: 85.00, categorie: 'Bébé', tva: 20, stock: 20, emoji: '👶' },
    { code: '6111000001417', nom: 'Couches Huggies x30',        prix: 75.00, categorie: 'Bébé', tva: 20, stock: 18, emoji: '👶' },
    { code: '6111000001424', nom: 'Lait infantile Nidal 400g',  prix: 85.00, categorie: 'Bébé', tva: 7,  stock: 15, emoji: '🍼' },
    { code: '6111000001431', nom: 'Lait infantile Guigoz 400g', prix: 95.00, categorie: 'Bébé', tva: 7,  stock: 12, emoji: '🍼' },
    { code: '6111000001448', nom: 'Lingettes bébé x72',         prix: 22.00, categorie: 'Bébé', tva: 20, stock: 30, emoji: '🧻' },
    { code: '6111000001455', nom: 'Petit pot bébé 130g',        prix: 12.00, categorie: 'Bébé', tva: 7,  stock: 25, emoji: '🍲' }
];

/* ================= API (MOCK -> à brancher sur Django) ================= */
const API = {
    getProduits: async () => CATALOG.map(p => ({ ...p })),
    validerVente: async (payload) => { console.log('POST /api/ventes/', payload); return { ok: true }; }
};

/* ================= PERSISTANCE ================= */
const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } }
};

const newSession = () => ({ fdc: 0, startedAt: new Date().toISOString(), prelevements: [], cashier: STORE.caissier });
const session = LS.get('pos_session', null) || newSession();
const saveSession = () => LS.set('pos_session', session);

/* ================= ÉTAT ================= */
const state = {
    products: [],
    cart: [],
    activeIndex: null,
    numpadBuffer: '',
    discount: { type: 'percent', value: 0 },
    client: null,
    held: LS.get('pos_held', []),
    history: LS.get('pos_history', []),
    counter: LS.get('pos_counter', 0),
    stock: LS.get('pos_stock', {})
};

/* ================= OUTILS ================= */
const $ = (id) => document.getElementById(id);
const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
const fmt = (n) => round2(n).toFixed(2) + ' ' + STORE.devise;
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const pad = (n, l) => String(n).padStart(l, '0');
const MODES = { CASH: 'Espèces', CARD: 'Carte bancaire', MOBILE: 'Mobile' };
const stockOf = (p) => state.stock[p.code] !== undefined ? state.stock[p.code] : p.stock;
const inCart = (code) => (state.cart.find(i => i.code === code) || { qte: 0 }).qte;

const els = {
    scan: $('scan-input'), ticketList: $('ticket-list'), ticketNumber: $('ticket-number'), ticketClient: $('ticket-client'),
    nb: $('nb-articles'), sub: $('subtotal'), total: $('total-price'),
    discLine: $('discount-line'), discLabel: $('discount-label'), discAmount: $('discount-amount'),
    numpad: $('numpad-display'), photo: $('photo-box')
};

function toast(msg, type = '') {
    const t = document.createElement('div');
    t.className = 'toast ' + type;
    t.textContent = msg;
    $('toast-container').appendChild(t);
    setTimeout(() => t.remove(), 2600);
}

/* ---------- Système de modales ---------- */
const anyModalOpen = () => $('modal-root').children.length > 0 || !$('lock-screen').hidden;

function modal({ title = '', body = '', width = 460, cls = '', buttons = [{ label: 'Fermer' }], onOpen, onClose }) {
    const ov = document.createElement('div');
    ov.className = 'modal-overlay';
    ov.innerHTML = `<div class="modal-content ${cls}" style="width:${width}px">${title ? `<h2>${esc(title)}</h2>` : ''}<div class="modal-body">${body}</div><div class="modal-actions"></div></div>`;
    const ctx = { el: ov, btns: {} };
    ctx.close = () => { if (!ov.isConnected) return; ov.remove(); if (onClose) onClose(); if (!anyModalOpen()) els.scan.focus(); };
    ov._ctx = ctx;
    const actions = ov.querySelector('.modal-actions');
    buttons.forEach(b => {
        const btn = document.createElement('button');
        btn.className = b.cls || 'btn-cancel';
        btn.textContent = b.label;
        btn.onclick = async () => {
            if (b.onClick) { const r = await b.onClick(ctx); if (r === false) return; }
            ctx.close();
        };
        actions.appendChild(btn);
        ctx.btns[b.label] = btn;
    });
    ov.addEventListener('mousedown', (e) => { if (e.target === ov) ctx.close(); });
    $('modal-root').appendChild(ov);
    if (onOpen) onOpen(ctx);
    return ctx;
}

function ask({ title, fields, ok = 'Valider', width = 420 }) {
    return new Promise(resolve => {
        const body = fields.map(f => `<label class="f-label" for="fld-${f.id}">${esc(f.label)}</label>
            <input class="f-input" id="fld-${f.id}" type="${f.type || 'text'}" ${f.step ? `step="${f.step}"` : ''} ${f.min !== undefined ? `min="${f.min}"` : ''} value="${esc(f.value ?? '')}" placeholder="${esc(f.placeholder || '')}">`).join('');
        modal({
            title, body, width,
            buttons: [
                { label: 'Annuler' },
                { label: ok, cls: 'btn-confirm', onClick: (c) => { const v = {}; fields.forEach(f => v[f.id] = c.el.querySelector('#fld-' + f.id).value.trim()); resolve(v); } }
            ],
            onClose: () => resolve(null),
            onOpen: (c) => {
                const first = c.el.querySelector('input'); first.focus(); first.select();
                c.el.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); c.btns[ok].click(); } });
            }
        });
    });
}

function showReceiptHTML(html) {
    return modal({
        cls: 'receipt-modal', width: 380,
        body: `<div class="receipt-paper">${html}</div>`,
        buttons: [{ label: 'Fermer' }, { label: 'Imprimer', cls: 'btn-confirm', onClick: () => { window.print(); return false; } }]
    });
}
const showReceipt = (t, opts) => showReceiptHTML(genererTicketHTML(t, opts));

/* ================= CALCULS ================= */
function computeTotals(cart = state.cart, discount = state.discount) {
    const sub = round2(cart.reduce((s, l) => s + l.prix * l.qte, 0));
    let remise = discount.type === 'percent' ? sub * discount.value / 100 : discount.value;
    remise = round2(Math.min(Math.max(remise || 0, 0), sub));
    const total = round2(sub - remise);
    const ratio = sub > 0 ? total / sub : 1;
    const map = {};
    cart.forEach(l => { map[l.tva] = (map[l.tva] || 0) + l.prix * l.qte * ratio; });
    const tva = Object.entries(map).map(([t, ttc]) => {
        const taux = Number(t), ht = ttc / (1 + taux / 100);
        return { taux, ht: round2(ht), tva: round2(ttc - ht), ttc: round2(ttc) };
    }).sort((a, b) => a.taux - b.taux);
    return { sub, remise, total, tva, count: cart.reduce((s, l) => s + l.qte, 0) };
}

/* ================= RENDU ================= */
function renderTicket() {
    const T = computeTotals();
    els.ticketList.innerHTML = '';
    if (!state.cart.length) {
        els.ticketList.innerHTML = '<div class="ticket-empty">Le ticket est vide.<br>Scannez un article ou ouvrez le catalogue.</div>';
    } else {
        state.cart.forEach((l, i) => {
            const d = document.createElement('div');
            d.className = 'ticket-item' + (i === state.activeIndex ? ' active' : '');
            d.dataset.index = i;
            d.innerHTML = `<span class="t-name">${esc(l.nom)}</span><span class="t-total">${fmt(l.prix * l.qte)}</span>
                <button class="btn-delete" data-action="del" aria-label="Supprimer">×</button>
                <span class="t-detail">${l.qte} × ${fmt(l.prix)}</span>`;
            els.ticketList.appendChild(d);
        });
        const a = els.ticketList.querySelector('.active') || els.ticketList.lastElementChild;
        if (a) a.scrollIntoView({ block: 'nearest' });
    }
    els.ticketNumber.textContent = '#' + pad(state.counter + 1, 4);
    els.ticketClient.textContent = state.client ? '👤 ' + (state.client.nom || state.client.carte) : '';
    els.nb.textContent = T.count;
    els.sub.textContent = fmt(T.sub);
    els.discLine.hidden = T.remise <= 0;
    els.discLabel.textContent = state.discount.type === 'percent' ? `(${state.discount.value}%)` : '';
    els.discAmount.textContent = '-' + fmt(T.remise);
    els.total.textContent = fmt(T.total);
    $('disp-net').textContent = fmt(T.total);
    if ($('fn-pay')) $('fn-pay').disabled = !state.cart.length;
    const badge = $('fn-reprise')?.querySelector('.fn-badge');
    if (badge) { badge.hidden = !state.held.length; badge.textContent = state.held.length; }
}

function renderDisplay() {
    const l = state.cart[state.activeIndex] || state.cart[state.cart.length - 1];
    $('disp-lib').textContent = l ? l.nom : 'Libellé de l\'article';
    $('disp-qte').textContent = l ? l.qte : '0';
    $('disp-pu').textContent = l ? l.prix.toFixed(2) : '0.00';
    $('disp-total').textContent = l ? (l.prix * l.qte).toFixed(2) : '0.00';
    els.numpad.textContent = state.numpadBuffer || (state.cart[state.activeIndex] ? state.cart[state.activeIndex].qte : '0');
}

/* ---------- Panneau central : catégories + produits filtrés ---------- */
let currentCategory = null;

function renderProductPanel() {
    const grid = $('panel-grid');
    if (!grid) return;

    const q = els.scan.value.replace(/^\d+\*/, '').trim().toLowerCase();

    if (q) {
        const list = state.products.filter(p =>
            p.nom.toLowerCase().includes(q) || p.code.includes(q));
        grid.innerHTML = '';
        if (!list.length) {
            grid.innerHTML = '<div class="empty">Aucun produit trouvé.</div>';
            return;
        }
        list.forEach(p => grid.appendChild(makeProductTile(p)));
        return;
    }

    grid.innerHTML = '';
    if (!state.products.length) {
        grid.innerHTML = '<div class="empty">Chargement…</div>';
        return;
    }
    CATEGORIES.forEach(cat => {
        const count = state.products.filter(p => p.categorie === cat).length;
        const b = document.createElement('button');
        b.className = 'panel-tile';
        b.style.setProperty('--cat', CAT_COLORS[cat] || 'var(--blue)');
        b.innerHTML = `
            <span class="pt-photo">${CAT_EMOJI[cat] || '📦'}</span>
            <span class="pt-name">${esc(cat)}</span>
            <span class="pt-stock">${count} article${count > 1 ? 's' : ''}</span>`;
        b.onclick = () => openCategoryInFn(cat);
        grid.appendChild(b);
    });
}

function makeProductTile(p) {
    const left = stockOf(p) - inCart(p.code);
    const qty  = inCart(p.code);
    const b = document.createElement('button');
    b.className = 'panel-tile';
    b.style.setProperty('--cat', CAT_COLORS[p.categorie] || 'var(--blue)');
    b.disabled = left <= 0;
    b.innerHTML = `${qty ? `<span class="pt-qty">${qty}</span>` : ''}
        <span class="pt-photo">${p.photo ? `<img src="${esc(p.photo)}" alt="">` : (p.emoji || '📦')}</span>
        <span class="pt-name">${esc(p.nom)}</span>
        <span class="pt-price">${fmt(p.prix)}</span>
        <span class="pt-stock ${left <= 0 ? 'out' : left <= 5 ? 'low' : ''}">${left <= 0 ? 'Rupture' : 'Stock : ' + left}</span>`;
    b.onclick = () => addProductToCart(p);
    return b;
}

function openCategoryInFn(cat) {
    currentCategory = cat;
    const fnCol = $('fn-col');
    fnCol.classList.remove('mode-functions');
    fnCol.classList.add('mode-products');
    $('fn-cat-title').textContent = cat;
    renderCategoryProducts();
}

function closeFnProducts() {
    currentCategory = null;
    const fnCol = $('fn-col');
    fnCol.classList.remove('mode-products');
    fnCol.classList.add('mode-functions');
    $('fn-products-grid').innerHTML = '';
    $('fn-cat-title').textContent = '';
}

function renderCategoryProducts() {
    if (!currentCategory) return;
    const grid = $('fn-products-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const products = state.products.filter(p => p.categorie === currentCategory);
    if (!products.length) {
        grid.innerHTML = '<div class="empty">Aucun produit dans cette catégorie.</div>';
        return;
    }
    products.forEach(p => grid.appendChild(makeProductTile(p)));
}

els.scan.addEventListener('input', renderProductPanel);
const fnBackBtn = $('fn-back');
if (fnBackBtn) fnBackBtn.addEventListener('click', closeFnProducts);

function renderAll() {
    renderTicket();
    renderDisplay();
    renderProductPanel();
    renderCategoryProducts();
    if (state.activeIndex === null && !anyModalOpen()) els.scan.focus();
}

/* ================= PANIER ================= */
function addProductToCart(p, qty = 1) {
    const st = stockOf(p);
    if (inCart(p.code) + qty > st) { toast(st <= 0 ? 'Produit en rupture de stock' : `Stock insuffisant (${st} disponible)`, 'error'); return false; }
    const idx = state.cart.findIndex(i => i.code === p.code);
    if (idx >= 0) { state.cart[idx].qte += qty; state.activeIndex = idx; }
    else { state.cart.push({ code: p.code, nom: p.nom, prix: p.prix, tva: p.tva, famille: p.categorie, qte: qty }); state.activeIndex = state.cart.length - 1; }
    state.numpadBuffer = '';
    renderAll();
    return true;
}

function resetTicket() {
    state.cart = []; state.activeIndex = null; state.numpadBuffer = '';
    state.discount = { type: 'percent', value: 0 }; state.client = null;
}

els.ticketList.addEventListener('click', (e) => {
    const row = e.target.closest('.ticket-item');
    if (!row) return;
    const i = Number(row.dataset.index);
    if (e.target.dataset.action === 'del') { state.cart.splice(i, 1); state.activeIndex = null; }
    else state.activeIndex = state.activeIndex === i ? null : i;
    state.numpadBuffer = '';
    renderAll();
});

/* ================= SCAN ================= */
els.scan.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    let raw = els.scan.value.trim();
    if (!raw) return;
    let qty = 1;
    const m = raw.match(/^(\d+(?:\.\d+)?)\*(.+)$/);
    if (m) { qty = parseFloat(m[1]); raw = m[2].trim(); }
    const exact = state.products.find(p => p.code === raw);
    const list = state.products.filter(p => p.nom.toLowerCase().includes(raw.toLowerCase()) || p.code.includes(raw));
    const p = exact || (list.length === 1 ? list[0] : null);
    els.scan.value = '';
    renderProductPanel();
    if (p) addProductToCart(p, qty);
    else if (list.length > 1) openCatalog(raw);
    else { toast('Produit introuvable : ' + raw, 'error'); }
});

/* ================= PAVÉ NUMÉRIQUE ================= */
document.querySelector('.numpad-grid').addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    const k = b.dataset.key;
    if (k === 'C') state.numpadBuffer = '';
    else if (k === 'Del') {
        if (state.activeIndex === null) { toast('Sélectionnez une ligne du ticket'); return; }
        state.cart.splice(state.activeIndex, 1); state.activeIndex = null; state.numpadBuffer = '';
    } else if (k === 'Enter') {
        if (state.activeIndex !== null && state.numpadBuffer !== '') {
            const q = parseFloat(state.numpadBuffer);
            const line = state.cart[state.activeIndex];
            const p = state.products.find(x => x.code === line.code);
            if (!(q > 0)) toast('Quantité invalide', 'error');
            else if (p && q > stockOf(p)) toast(`Stock insuffisant (${stockOf(p)} disponible)`, 'error');
            else line.qte = q;
        }
        state.numpadBuffer = ''; state.activeIndex = null;
    } else {
        if (k === '.' && state.numpadBuffer.includes('.')) return;
        if (state.numpadBuffer.length >= 7) return;
        state.numpadBuffer += k;
    }
    renderAll();
});

/* ================= CATALOGUE (modal) ================= */
function openCatalog(query = '') {
    let cat = null;
    modal({
        title: 'Articles', width: 820,
        body: `<input class="f-input" id="cat-q" placeholder="Rechercher un article…" value="${esc(query)}"><div class="category-tabs" id="cat-tabs"></div><div class="product-grid" id="cat-grid"></div>`,
        onOpen: (c) => {
            const q = c.el.querySelector('#cat-q'), tabs = c.el.querySelector('#cat-tabs'), grid = c.el.querySelector('#cat-grid');
            const draw = () => {
                tabs.innerHTML = '';
                ['Tous', ...CATEGORIES].forEach(name => {
                    const b = document.createElement('button');
                    b.textContent = name;
                    b.className = (name === 'Tous' ? cat === null : cat === name) ? 'active' : '';
                    b.onclick = () => { cat = name === 'Tous' ? null : name; draw(); };
                    tabs.appendChild(b);
                });
                const s = q.value.trim().toLowerCase();
                const list = state.products.filter(p => (s ? (p.nom.toLowerCase().includes(s) || p.code.includes(s)) : (cat === null || p.categorie === cat)));
                grid.innerHTML = '';
                if (!list.length) { grid.innerHTML = '<div class="empty">Aucun produit trouvé.</div>'; return; }
                list.forEach(p => {
                    const st = stockOf(p) - inCart(p.code);
                    const b = document.createElement('button');
                    b.className = 'product-btn';
                    b.style.setProperty('--cat', CAT_COLORS[p.categorie]);
                    b.disabled = st <= 0;
                    b.innerHTML = `<span class="p-name">${p.emoji || ''} ${esc(p.nom)}</span><span><span class="p-stock ${st <= 0 ? 'out' : st <= 5 ? 'low' : ''}">${st <= 0 ? 'Rupture' : 'Stock : ' + st}</span><br><span class="p-price">${fmt(p.prix)}</span></span>`;
                    b.onclick = () => { if (addProductToCart(p)) draw(); };
                    grid.appendChild(b);
                });
            };
            q.addEventListener('input', draw);
            draw(); q.focus();
        }
    });
}

/* ================= INFO. PRIX ================= */
async function openInfoPrix() {
    const v = await ask({ title: 'Info. prix', fields: [{ id: 'q', label: 'Code-barres ou nom de l\'article', placeholder: 'Scanner ou saisir…' }], ok: 'Rechercher' });
    if (!v || !v.q) return;
    const s = v.q.toLowerCase();
    const list = state.products.filter(p => p.code === v.q || p.nom.toLowerCase().includes(s) || p.code.includes(s));
    if (!list.length) { toast('Produit introuvable', 'error'); return; }
    if (list.length === 1) return showPriceInfo(list[0]);
    modal({
        title: 'Plusieurs résultats', body: '<div class="list" id="pl"></div>',
        onOpen: (c) => list.forEach(p => {
            const d = document.createElement('div');
            d.className = 'list-item';
            d.innerHTML = `<span>${p.emoji || ''} ${esc(p.nom)}</span><span class="list-total">${fmt(p.prix)}</span>`;
            d.onclick = () => { c.close(); showPriceInfo(p); };
            c.el.querySelector('#pl').appendChild(d);
        })
    });
}
function showPriceInfo(p) {
    modal({
        title: 'Info. prix', width: 380,
        body: `<div class="info-card"><div class="emoji">${p.emoji || '📦'}</div><h3>${esc(p.nom)}</h3><div class="price">${fmt(p.prix)}</div>
            <p>Catégorie : ${esc(p.categorie)} · TVA ${p.tva}%</p><p>Stock : ${stockOf(p)}</p><p>Code : ${esc(p.code)}</p></div>`,
        buttons: [{ label: 'Fermer' }, { label: 'Ajouter au ticket', cls: 'btn-confirm', onClick: () => { addProductToCart(p); } }]
    });
}

/* ================= REMISE ================= */
function openDiscount() {
    if (!state.cart.length) { toast('Le ticket est vide'); return; }
    let type = state.discount.type;
    modal({
        title: 'Remise sur le ticket', width: 400,
        body: `<div class="seg" id="d-type"><button data-t="percent">Pourcentage %</button><button data-t="amount">Montant DH</button></div>
            <input type="number" class="f-input big" id="d-val" min="0" step="0.01" placeholder="0" value="${state.discount.value || ''}">
            <div class="quick" id="d-quick"><button data-v="5">5%</button><button data-v="10">10%</button><button data-v="15">15%</button><button data-v="20">20%</button></div>`,
        buttons: [
            { label: 'Fermer' },
            { label: 'Retirer', cls: 'btn-danger', onClick: () => { state.discount = { type: 'percent', value: 0 }; renderAll(); } },
            { label: 'Appliquer', cls: 'btn-confirm', onClick: (c) => {
                const v = parseFloat(c.el.querySelector('#d-val').value) || 0;
                if (v < 0 || (type === 'percent' && v > 100)) { toast('Valeur de remise invalide', 'error'); return false; }
                state.discount = { type, value: v }; renderAll();
            } }
        ],
        onOpen: (c) => {
            const seg = c.el.querySelector('#d-type');
            const sync = () => seg.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.t === type));
            seg.onclick = (e) => { const b = e.target.closest('button'); if (b) { type = b.dataset.t; sync(); } };
            c.el.querySelector('#d-quick').onclick = (e) => { const b = e.target.closest('button'); if (b) { type = 'percent'; sync(); c.el.querySelector('#d-val').value = b.dataset.v; } };
            sync(); c.el.querySelector('#d-val').focus();
        }
    });
}

/* ================= PAUSE / REPRISE ================= */
function holdTicket() {
    if (!state.cart.length) { toast('Le ticket est vide'); return; }
    state.held.push({ id: Date.now(), date: new Date().toISOString(), cart: state.cart, discount: state.discount, client: state.client });
    LS.set('pos_held', state.held);
    resetTicket(); renderAll();
    toast('Ticket mis en pause', 'success');
}

function openHeld() {
    modal({
        title: 'Reprise ticket', width: 520, body: '<div class="list" id="hl"></div>',
        onOpen: (c) => {
            const box = c.el.querySelector('#hl');
            const draw = () => {
                box.innerHTML = '';
                if (!state.held.length) { box.innerHTML = '<div class="list-empty">Aucun ticket en pause.</div>'; return; }
                state.held.forEach(h => {
                    const T = computeTotals(h.cart, h.discount);
                    const d = document.createElement('div');
                    d.className = 'list-item';
                    d.style.cursor = 'default';
                    d.innerHTML = `<div><strong>${new Date(h.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}</strong><br><small>${T.count} article(s)</small></div>
                        <div class="list-total">${fmt(T.total)}</div>
                        <div><button class="mini-btn" data-a="r">Reprendre</button> <button class="mini-btn danger" data-a="d">×</button></div>`;
                    d.querySelector('[data-a="r"]').onclick = () => {
                        if (state.cart.length) { toast('Mettez d\'abord le ticket en cours en pause', 'error'); return; }
                        state.cart = h.cart; state.discount = h.discount; state.client = h.client || null;
                        state.held = state.held.filter(x => x.id !== h.id); LS.set('pos_held', state.held);
                        c.close(); renderAll();
                    };
                    d.querySelector('[data-a="d"]').onclick = () => {
                        if (!confirm('Supprimer ce ticket en pause ?')) return;
                        state.held = state.held.filter(x => x.id !== h.id); LS.set('pos_held', state.held);
                        draw(); renderTicket();
                    };
                    box.appendChild(d);
                });
            };
            draw();
        }
    });
}

function annulerTicket() {
    if (!state.cart.length) { toast('Le ticket est vide'); return; }
    if (confirm('Annuler le ticket en cours ?')) { resetTicket(); renderAll(); toast('Ticket annulé'); }
}

/* ================= FIDÉLITÉ ================= */
async function carteFidelite() {
    const v = await ask({ title: 'Carte de fidélité', fields: [
        { id: 'carte', label: 'N° de carte', value: state.client ? state.client.carte : '' },
        { id: 'nom', label: 'Nom du client (optionnel)', value: state.client ? state.client.nom : '' }
    ] });
    if (!v) return;
    state.client = v.carte || v.nom ? v : null;
    renderAll();
    if (state.client) toast('Client associé au ticket', 'success');
}

/* ================= DOCUMENTS : LISTE / DUPLICATA / FACTURE ================= */
function editionListe() {
    if (!state.cart.length) { toast('Le ticket est vide'); return; }
    const T = computeTotals();
    showReceipt({ numero: state.counter + 1, ticket_id: 'LISTE', date: new Date(), lignes: state.cart.map(l => ({ ...l })), sousTotal: T.sub, remise: T.remise, total: T.total, tva: T.tva, mode: 'LISTE', client: state.client }, { liste: true });
}
function duplicata() {
    if (!state.history.length) { toast('Aucun ticket à dupliquer', 'error'); return; }
    showReceipt(state.history[0], { duplicata: true });
}
async function factureRef() {
    const v = await ask({ title: 'Facture avec référence', fields: [
        { id: 'num', label: 'N° du ticket', type: 'number', value: state.history[0] ? state.history[0].numero : '' },
        { id: 'client', label: 'Nom / raison sociale du client' },
        { id: 'ice', label: 'ICE du client (optionnel)' }
    ], ok: 'Générer' });
    if (!v) return;
    const t = state.history.find(x => x.numero === Number(v.num));
    if (!t) { toast('Ticket introuvable', 'error'); return; }
    if (!v.client) { toast('Nom du client requis', 'error'); return; }
    showReceipt(t, { facture: true, factureClient: v });
}

/* ================= FOND DE CAISSE / PRÉLÈVEMENTS / CLÔTURE ================= */
function sessionStats() {
    const since = new Date(session.startedAt);
    const ts = state.history.filter(t => new Date(t.date) >= since);
    const sum = (f) => round2(ts.filter(f).reduce((a, t) => a + t.total, 0));
    const cash = sum(t => t.mode === 'CASH'), card = sum(t => t.mode === 'CARD'), mobile = sum(t => t.mode === 'MOBILE');
    const prel = round2(session.prelevements.reduce((a, p) => a + p.montant, 0));
    const map = {};
    ts.forEach(t => (t.tva || []).forEach(r => { const x = map[r.taux] || (map[r.taux] = { taux: r.taux, ht: 0, tva: 0, ttc: 0 }); x.ht += r.ht; x.tva += r.tva; x.ttc += r.ttc; }));
    return {
        nb: ts.length,
        ca: round2(cash + card + mobile), cash, card, mobile, prel,
        remises: round2(ts.reduce((a, t) => a + (t.remise || 0), 0)),
        tva: Object.values(map).map(r => ({ taux: r.taux, ht: round2(r.ht), tva: round2(r.tva), ttc: round2(r.ttc) })).sort((a, b) => a.taux - b.taux),
        fdc: session.fdc, attendu: round2(session.fdc + cash - prel)
    };
}

async function ajoutFDC() {
    const v = await ask({ title: 'Ajout fond de caisse', fields: [{ id: 'm', label: 'Montant à ajouter (DH)', type: 'number', step: '0.01', min: 0 }] });
    if (!v) return;
    const m = parseFloat(v.m);
    if (!(m > 0)) { toast('Montant invalide', 'error'); return; }
    session.fdc = round2(session.fdc + m); saveSession();
    toast(`Fond de caisse : ${fmt(session.fdc)}`, 'success');
}
async function corrigerFDC() {
    const v = await ask({ title: 'Correction fond de caisse', fields: [{ id: 'm', label: 'Nouveau fond de caisse (DH)', type: 'number', step: '0.01', min: 0, value: session.fdc }] });
    if (!v) return;
    const m = parseFloat(v.m);
    if (!(m >= 0)) { toast('Montant invalide', 'error'); return; }
    session.fdc = round2(m); saveSession();
    toast(`Fond de caisse corrigé : ${fmt(session.fdc)}`, 'success');
}
async function prelevement() {
    const v = await ask({ title: 'Prélèvement', fields: [
        { id: 'm', label: 'Montant prélevé (DH)', type: 'number', step: '0.01', min: 0 },
        { id: 'motif', label: 'Motif', placeholder: 'Ex : remise en coffre' }
    ] });
    if (!v) return;
    const m = parseFloat(v.m);
    if (!(m > 0)) { toast('Montant invalide', 'error'); return; }
    if (m > sessionStats().attendu) { toast('Montant supérieur aux espèces en caisse', 'error'); return; }
    session.prelevements.push({ id: Date.now(), montant: round2(m), motif: v.motif || '-', date: new Date().toISOString() });
    saveSession();
    toast(`Prélèvement de ${fmt(m)} enregistré`, 'success');
}
function corrigerPrelevement() {
    modal({
        title: 'Correction prélèvement', width: 520, body: '<div class="list" id="pl"></div>',
        onOpen: (c) => {
            const box = c.el.querySelector('#pl');
            const draw = () => {
                box.innerHTML = '';
                if (!session.prelevements.length) { box.innerHTML = '<div class="list-empty">Aucun prélèvement sur cette session.</div>'; return; }
                session.prelevements.forEach(p => {
                    const d = document.createElement('div');
                    d.className = 'list-item'; d.style.cursor = 'default';
                    d.innerHTML = `<div><strong>${fmt(p.montant)}</strong><br><small>${new Date(p.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })} · ${esc(p.motif)}</small></div>
                        <div><button class="mini-btn" data-a="m">Modifier</button> <button class="mini-btn danger" data-a="x">Annuler</button></div>`;
                    d.querySelector('[data-a="m"]').onclick = async () => {
                        const v = await ask({ title: 'Modifier le prélèvement', fields: [{ id: 'm', label: 'Nouveau montant (DH)', type: 'number', step: '0.01', value: p.montant }] });
                        const m = v && parseFloat(v.m);
                        if (m > 0) { p.montant = round2(m); saveSession(); draw(); toast('Prélèvement corrigé', 'success'); }
                    };
                    d.querySelector('[data-a="x"]').onclick = () => {
                        if (!confirm('Annuler ce prélèvement ?')) return;
                        session.prelevements = session.prelevements.filter(x => x.id !== p.id); saveSession(); draw();
                    };
                    box.appendChild(d);
                });
            };
            draw();
        }
    });
}

function openCloture() {
    if (state.cart.length) { toast('Terminez le ticket en cours avant la clôture', 'error'); return; }
    const S = sessionStats();
    modal({
        title: 'Clôture de caisse', width: 480,
        body: `<table class="z-table">
            <tr><td>Tickets</td><td>${S.nb}</td></tr>
            <tr><td>Chiffre d'affaires TTC</td><td>${fmt(S.ca)}</td></tr>
            <tr><td>Espèces</td><td>${fmt(S.cash)}</td></tr>
            <tr><td>Carte bancaire</td><td>${fmt(S.card)}</td></tr>
            <tr><td>Mobile</td><td>${fmt(S.mobile)}</td></tr>
            <tr class="sep"><td>Fond de caisse</td><td>${fmt(S.fdc)}</td></tr>
            <tr><td>Prélèvements</td><td>-${fmt(S.prel)}</td></tr>
            <tr><td><b>Espèces attendues</b></td><td>${fmt(S.attendu)}</td></tr></table>
            <label class="f-label" for="z-count">Espèces comptées (DH)</label>
            <input type="number" class="f-input big" id="z-count" step="0.01" min="0" placeholder="0.00">
            <div class="change-box"><span>Écart</span><strong id="z-ecart">-</strong></div>`,
        buttons: [
            { label: 'Fermer' },
            { label: 'Clôturer la caisse', cls: 'btn-confirm', onClick: (c) => {
                const raw = c.el.querySelector('#z-count').value;
                if (raw === '') { toast('Saisissez les espèces comptées', 'error'); return false; }
                const compte = round2(parseFloat(raw) || 0);
                const z = { ...S, date: new Date().toISOString(), caissier: session.cashier, compte, ecart: round2(compte - S.attendu), prelevements: session.prelevements.slice() };
                const zs = LS.get('pos_z', []); zs.unshift(z); LS.set('pos_z', zs.slice(0, 60));
                Object.assign(session, newSession(), { cashier: session.cashier }); saveSession();
                c.close(); showReceiptHTML(genererZHTML(z)); return false;
            } }
        ],
        onOpen: (c) => {
            const inp = c.el.querySelector('#z-count'), out = c.el.querySelector('#z-ecart');
            inp.addEventListener('input', () => {
                if (inp.value === '') { out.textContent = '-'; out.className = ''; return; }
                const e = round2(parseFloat(inp.value) - S.attendu);
                out.textContent = (e > 0 ? '+' : '') + fmt(e);
                out.className = e === 0 ? 'ecart-ok' : 'ecart-ko';
            });
            inp.focus();
        }
    });
}

function genererZHTML(z) {
    const d = new Date(z.date);
    return `<div class="r-header"><h1>${esc(STORE.nom)}</h1><h2>${esc(STORE.adresse)}</h2></div>
        <div class="r-doc">RAPPORT Z - CLÔTURE</div>
        <div class="r-meta"><span>${d.toLocaleDateString('fr-FR')} ${d.toLocaleTimeString('fr-FR')}</span><span>${esc(STORE.caisse)}</span></div>
        <div class="r-meta"><span>Caissier</span><span>${esc(z.caissier)}</span></div>
        <div class="r-separator"></div>
        <div class="r-line"><span>Nombre de tickets</span><span>${z.nb}</span></div>
        <div class="r-line"><span>Remises accordées</span><span>${fmt(z.remises)}</span></div>
        <div class="r-total-row"><span>CA TTC</span><span>${fmt(z.ca)}</span></div>
        <div class="r-line"><span>Espèces</span><span>${fmt(z.cash)}</span></div>
        <div class="r-line"><span>Carte bancaire</span><span>${fmt(z.card)}</span></div>
        <div class="r-line"><span>Mobile</span><span>${fmt(z.mobile)}</span></div>
        <div class="r-separator"></div>
        <div class="r-line"><span>Fond de caisse</span><span>${fmt(z.fdc)}</span></div>
        ${z.prelevements.map(p => `<div class="r-line"><span>Prélèv. ${esc(p.motif)}</span><span>-${fmt(p.montant)}</span></div>`).join('')}
        <div class="r-line"><b>Espèces attendues</b><b>${fmt(z.attendu)}</b></div>
        <div class="r-line"><span>Espèces comptées</span><span>${fmt(z.compte)}</span></div>
        <div class="r-line"><b>ÉCART</b><b>${z.ecart > 0 ? '+' : ''}${fmt(z.ecart)}</b></div>
        <div class="r-separator"></div>
        <div style="font-size:11px;font-weight:bold;">VENTILATION TVA</div>
        <table class="r-tva-table"><tr><th>TAUX</th><th>HT</th><th>TVA</th><th>TTC</th></tr>
        ${z.tva.map(r => `<tr><td>${r.taux}%</td><td>${r.ht.toFixed(2)}</td><td>${r.tva.toFixed(2)}</td><td>${r.ttc.toFixed(2)}</td></tr>`).join('')}</table>`;
}

/* ================= DÉPART (verrouillage de session) ================= */
function depart() {
    if (state.cart.length) { toast('Terminez ou mettez en pause le ticket en cours', 'error'); return; }
    if (!confirm('Fermer la session du caissier ?')) return;
    $('lock-name').value = '';
    $('lock-screen').hidden = false;
    $('lock-name').focus();
}
function openSession() {
    const n = $('lock-name').value.trim();
    if (!n) { toast('Saisissez un nom', 'error'); return; }
    session.cashier = n; STORE.caissier = n; saveSession();
    $('info-caissier').textContent = n;
    $('lock-screen').hidden = true;
    els.scan.focus();
}
$('lock-open').addEventListener('click', openSession);
$('lock-name').addEventListener('keydown', (e) => { if (e.key === 'Enter') openSession(); });

/* ================= HISTORIQUE ================= */
function openHistory() {
    const S = sessionStats();
    modal({
        title: 'Historique des tickets', width: 640,
        body: `<div class="z-report">
            <div class="z-card"><small>Tickets</small><strong>${S.nb}</strong></div>
            <div class="z-card"><small>CA session</small><strong>${fmt(S.ca)}</strong></div>
            <div class="z-card"><small>Panier moyen</small><strong>${fmt(S.nb ? S.ca / S.nb : 0)}</strong></div>
            <div class="z-card"><small>Esp. / Carte / Mob.</small><strong style="font-size:13px">${S.cash.toFixed(0)} / ${S.card.toFixed(0)} / ${S.mobile.toFixed(0)}</strong></div></div>
            <div class="list" id="hist"></div>`,
        onOpen: (c) => {
            const box = c.el.querySelector('#hist');
            if (!state.history.length) { box.innerHTML = '<div class="list-empty">Aucun ticket dans l\'historique.</div>'; return; }
            state.history.slice(0, 100).forEach(t => {
                const d = document.createElement('div');
                d.className = 'list-item';
                d.innerHTML = `<div><strong>Ticket ${pad(t.numero, 5)}</strong> · ${esc(MODES[t.mode] || t.mode)}<br><small>${new Date(t.date).toLocaleString('fr-FR')} · ${t.lignes.length} ligne(s)</small></div><div class="list-total">${fmt(t.total)}</div>`;
                d.onclick = () => showReceipt(t);
                box.appendChild(d);
            });
        }
    });
}

/* ================= AUTRES ================= */
function openAutres() {
    modal({
        title: 'Autres fonctions', width: 460,
        body: '<div class="menu-grid" id="menu"></div>',
        onOpen: (c) => {
            const items = [
                ['🗄️ Ouvrir le tiroir-caisse', () => toast('Tiroir-caisse ouvert (simulation)', 'success')],
                ['🕘 Historique des tickets', openHistory],
                ['⌨️ Raccourcis clavier', () => modal({ title: 'Raccourcis', body: '<table class="z-table"><tr><td>F2</td><td>Recherche / scan</td></tr><tr><td>F4</td><td>Articles</td></tr><tr><td>F6</td><td>Remise</td></tr><tr><td>F9</td><td>Pause</td></tr><tr><td>F12</td><td>Encaisser</td></tr><tr><td>Échap</td><td>Fermer / retour</td></tr></table>' })],
                ['♻️ Réinitialiser la démo', () => { if (confirm('Effacer toutes les données locales (stock, historique, session) ?')) { ['pos_held', 'pos_history', 'pos_counter', 'pos_stock', 'pos_session', 'pos_z'].forEach(k => localStorage.removeItem(k)); location.reload(); } }]
            ];
            items.forEach(([label, fn]) => {
                const b = document.createElement('button');
                b.textContent = label;
                b.onclick = () => { c.close(); fn(); };
                c.el.querySelector('#menu').appendChild(b);
            });
        }
    });
}

/* ================= PAIEMENT ================= */
function openPayment() {
    if (!state.cart.length) return;
    const T = computeTotals();
    let method = 'CASH';
    modal({
        title: 'Paiement', width: 480,
        body: `<div class="pay-total"><span>Montant à payer</span><strong>${fmt(T.total)}</strong></div>
            <div class="seg" id="p-methods"><button data-m="CASH" class="active">Espèces</button><button data-m="CARD">Carte bancaire</button><button data-m="MOBILE">Mobile</button></div>
            <div id="p-cash">
                <label class="f-label" for="p-recu">Montant reçu (DH)</label>
                <input type="number" class="f-input big" id="p-recu" step="0.01" min="0" value="${T.total.toFixed(2)}">
                <div class="quick" id="p-quick"><button data-a="exact">Exact</button><button data-a="20">20</button><button data-a="50">50</button><button data-a="100">100</button><button data-a="200">200</button></div>
                <div class="change-box"><span>Monnaie à rendre</span><strong id="p-change">0.00 ${STORE.devise}</strong></div>
            </div>`,
        buttons: [
            { label: 'Annuler' },
            { label: 'Valider le paiement', cls: 'btn-confirm', onClick: (c) => { finalizePayment(c, method, parseFloat(c.el.querySelector('#p-recu').value) || 0); return false; } }
        ],
        onOpen: (c) => {
            const recu = c.el.querySelector('#p-recu'), change = c.el.querySelector('#p-change'), ok = c.btns['Valider le paiement'];
            const update = () => {
                const r = parseFloat(recu.value) || 0;
                change.textContent = fmt(Math.max(0, r - T.total));
                ok.disabled = method === 'CASH' && round2(r) < T.total;
            };
            c.el.querySelector('#p-methods').onclick = (e) => {
                const b = e.target.closest('button'); if (!b) return;
                method = b.dataset.m;
                c.el.querySelectorAll('#p-methods button').forEach(x => x.classList.toggle('active', x === b));
                c.el.querySelector('#p-cash').style.display = method === 'CASH' ? 'block' : 'none';
                update();
            };
            c.el.querySelector('#p-quick').onclick = (e) => {
                const b = e.target.closest('button'); if (!b) return;
                recu.value = b.dataset.a === 'exact' ? T.total.toFixed(2) : Number(b.dataset.a).toFixed(2);
                update();
            };
            recu.addEventListener('input', update);
            recu.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !ok.disabled) ok.click(); });
            update(); recu.focus(); recu.select();
        }
    });
}

async function finalizePayment(ctx, method, saisi) {
    const T = computeTotals();
    const recu = method === 'CASH' ? saisi : T.total;
    const btn = ctx.btns['Valider le paiement'];
    btn.textContent = 'Traitement…'; btn.disabled = true;

    const now = new Date(), numero = state.counter + 1;
    const ticket = {
        ticket_id: `T${now.getFullYear()}${pad(now.getMonth() + 1, 2)}${pad(now.getDate(), 2)}${pad(numero, 5)}`,
        numero, date: now.toISOString(),
        lignes: state.cart.map(l => ({ ...l })),
        sousTotal: T.sub, remise: T.remise, total: T.total, tva: T.tva,
        mode: method, recu: round2(recu), rendu: round2(Math.max(0, recu - T.total)),
        client: state.client, caissier: session.cashier
    };
    try {
        const res = await API.validerVente(ticket);
        if (!res.ok) throw new Error();
    } catch {
        toast('Échec de l\'enregistrement de la vente', 'error');
        btn.textContent = 'Valider le paiement'; btn.disabled = false;
        return;
    }
    ticket.lignes.forEach(l => { const p = state.products.find(x => x.code === l.code); if (p) state.stock[l.code] = stockOf(p) - l.qte; });
    LS.set('pos_stock', state.stock);
    state.counter = numero; LS.set('pos_counter', numero);
    state.history.unshift(ticket); LS.set('pos_history', state.history);
    resetTicket();
    ctx.close();
    renderAll();
    showReceipt(ticket);
}

/* ================= TICKET DE CAISSE ================= */
function barcodeSVG(text) {
    let x = 0, bars = '';
    for (const ch of text) {
        const n = ch.charCodeAt(0);
        for (let i = 0; i < 4; i++) { const w = ((n >> i) & 1) + 1; if (i % 2 === 0) bars += `<rect x="${x}" y="0" width="${w}" height="40"/>`; x += w; }
        x += 1;
    }
    return `<svg viewBox="0 0 ${x} 40" preserveAspectRatio="none" width="100%" height="40">${bars}</svg>`;
}

function genererTicketHTML(t, opts = {}) {
    const familles = {};
    t.lignes.forEach(l => { (familles[l.famille || 'DIVERS'] ||= []).push(l); });
    let items = '';
    for (const [fam, lignes] of Object.entries(familles)) {
        items += `<div class="r-section-title">${esc(fam)}</div>`;
        let tf = 0;
        lignes.forEach(l => {
            const tl = l.prix * l.qte; tf += tl;
            items += `<div class="r-item"><div class="r-item-top"><span>${esc(l.nom.toUpperCase())}</span><span>${fmt(tl)}</span></div><div class="r-item-details">${l.qte} x ${fmt(l.prix)}</div></div>`;
        });
        items += `<div class="r-line"><b>TOTAL ${esc(fam.toUpperCase())}</b><b>${fmt(tf)}</b></div>`;
    }
    const d = new Date(t.date);
    const nb = t.lignes.reduce((s, l) => s + l.qte, 0);
    const totTva = round2(t.tva.reduce((s, r) => s + r.tva, 0)), totHt = round2(t.tva.reduce((s, r) => s + r.ht, 0));

    let doc = '';
    if (opts.duplicata) doc = '<div class="r-doc">*** DUPLICATA ***</div>';
    if (opts.liste) doc = '<div class="r-doc">LISTE PROVISOIRE<br><small>Non payée - ne vaut pas ticket</small></div>';
    if (opts.facture) doc = `<div class="r-doc">FACTURE N° F-${pad(t.numero, 5)}</div>
        <div style="font-size:12px;">Client : <b>${esc(opts.factureClient.client)}</b>${opts.factureClient.ice ? `<br>ICE : ${esc(opts.factureClient.ice)}` : ''}<br>Réf. ticket : ${pad(t.numero, 5)}</div>`;

    const points = t.client ? `<div class="r-separator"></div><div class="r-line"><span>Carte fidélité</span><span>${esc(t.client.carte || t.client.nom)}</span></div>
        <div class="r-line"><span>Points gagnés</span><span>${Math.floor(t.total / 10)}</span></div>` : '';

    const paiement = t.mode === 'LISTE' ? '' : `
        <div class="r-line"><span>${esc(MODES[t.mode] || t.mode)}</span><span>${fmt(t.recu)}</span></div>
        ${t.mode === 'CASH' ? `<div class="r-line"><span>Rendu</span><span>${fmt(t.rendu)}</span></div>` : ''}`;

    return `
        <div class="r-header"><h1>${esc(STORE.nom)}</h1><h2>${esc(STORE.adresse)}</h2>
            <div class="r-legal">${esc(STORE.ville)} - Tél ${esc(STORE.tel)}<br>ICE ${esc(STORE.ice)} &nbsp; IF ${esc(STORE.if)} &nbsp; RC ${esc(STORE.rc)}</div></div>
        ${doc}
        <div class="r-separator"></div>
        <div class="r-meta"><span>${d.toLocaleDateString('fr-FR')} ${d.toLocaleTimeString('fr-FR')}</span><span>Ticket ${pad(t.numero, 5)}</span></div>
        <div class="r-meta"><span>${esc(STORE.caisse)}</span><span>${esc(t.caissier || STORE.caissier)}</span></div>
        ${items}
        <div class="r-separator"></div>
        <div class="r-line"><span>Sous-total</span><span>${fmt(t.sousTotal)}</span></div>
        ${t.remise > 0 ? `<div class="r-line"><span>Remise</span><span>-${fmt(t.remise)}</span></div>` : ''}
        <div class="r-total-row"><span>TOTAL TTC</span><span>${fmt(t.total)}</span></div>
        ${paiement}
        <div style="margin-top:10px;">NOMBRE D'ARTICLES : ${nb}</div>
        <div style="margin-top:10px;"><div style="font-size:11px;font-weight:bold;">VENTILATION TVA</div>
            <table class="r-tva-table"><tr><th>TAUX</th><th>HT</th><th>TVA</th><th>TTC</th></tr>
            ${t.tva.map(r => `<tr><td>${r.taux}%</td><td>${r.ht.toFixed(2)}</td><td>${r.tva.toFixed(2)}</td><td>${r.ttc.toFixed(2)}</td></tr>`).join('')}
            <tr><td><b>TOTAL</b></td><td>${totHt.toFixed(2)}</td><td>${totTva.toFixed(2)}</td><td>${t.total.toFixed(2)}</td></tr></table></div>
        ${points}
        ${t.ticket_id !== 'LISTE' ? `<div class="r-barcode">${barcodeSVG(t.ticket_id)}<div class="r-barcode-text">${esc(t.ticket_id)}</div></div>` : ''}
        <div class="r-footer">${esc(STORE.messageFin).replace(/\n/g, '<br>')}</div>`;
}

/* ================= BOUTONS FONCTION ================= */
const FN = [
    { id: 'autres',     label: 'Autres',                  icon: '⚙️', c: 'blue',   run: openAutres },
    { id: 'ajoutfdc',   label: 'Ajout FDC',               icon: '➕', c: 'orange', run: ajoutFDC },
    { id: 'corrfdc',    label: 'Correction FDC',          icon: '🛠️', c: 'orange', run: corrigerFDC },
    { id: 'cloture',    label: 'Clôture',                 icon: '🕒', c: 'orange', run: openCloture },

    { id: 'articles',   label: 'Articles',                icon: '🛒', c: 'blue',   run: () => openCatalog() },
    { id: 'prelev',     label: 'Prélèvement',             icon: '💰', c: 'orange', run: prelevement },
    { id: 'corrprelev', label: 'Correction Prélèvement',  icon: '✏️', c: 'orange', run: corrigerPrelevement },
    { id: 'depart',     label: 'Départ',                  icon: '🚪', c: 'blue',   run: depart },

    { id: 'remise',     label: 'Remise',                  icon: '🏷️', c: 'blue',   run: openDiscount },
    { id: 'infoprix',   label: 'Info. Prix',              icon: 'ℹ️', c: 'orange', run: openInfoPrix },
    { id: 'pause',      label: 'Pause',                   icon: '⏸️', c: 'blue',   run: holdTicket },
    { id: 'reprise',    label: 'Reprise ticket',          icon: '▶️', c: 'blue',   run: openHeld, badge: true },

    { id: 'liste',      label: 'Édition Liste',           icon: '📋', c: 'blue',   run: editionListe },
    { id: 'fidelite',   label: 'Carte fidélité',          icon: '💳', c: 'blue',   run: carteFidelite },
    { id: 'duplicata',  label: 'Duplicata dernier ticket',icon: '🧾', c: 'blue',   run: duplicata },
    { id: 'facture',    label: 'Facture avec réf.',       icon: '📄', c: 'blue',   run: factureRef },

    { id: 'annuler',    label: 'Annuler ticket',          icon: '✖️', c: 'red',    run: annulerTicket },
    { id: 'historique', label: 'Historique',              icon: '🕘', c: 'blue',   run: openHistory },
    { id: 'pay',        label: 'ENCAISSER',               icon: '✅', c: 'green wide', run: openPayment }
];

function buildFnGrid() {
    const grid = $('fn-grid');
    FN.forEach(f => {
        const b = document.createElement('button');
        b.id = 'fn-' + f.id;
        b.className = 'fn-btn ' + f.c;
        b.innerHTML = `<span class="ico">${f.icon}</span><span>${esc(f.label)}</span>${f.badge ? '<span class="fn-badge" hidden>0</span>' : ''}`;
        b.onclick = f.run;
        grid.appendChild(b);
    });
}

/* ================= REDIMENSIONNEMENT (DRAG & DROP) ================= */
function initResizers() {
    const layoutBody = $('main-layout');
    const resizer1 = $('resizer-1'); // Vertical Ticket
    const resizer2 = $('resizer-2'); // Vertical Milieu
    const resizerH = $('resizer-h'); // Horizontal Pavé

    if (!layoutBody) return;

    // Restaurer les tailles sauvegardées
    const savedTicketW = localStorage.getItem('caisse_ticket_w');
    const savedMidW = localStorage.getItem('caisse_mid_w');
    const savedNumpadH = localStorage.getItem('caisse_numpad_h');
    if (savedTicketW) layoutBody.style.setProperty('--ticket-w', savedTicketW);
    if (savedMidW) layoutBody.style.setProperty('--mid-w', savedMidW);
    if (savedNumpadH) layoutBody.style.setProperty('--numpad-h', savedNumpadH);

    let isDragging1 = false, isDragging2 = false, isDraggingH = false;
    let startX = 0, startWidth1 = 0, startWidth2 = 0;
    let startYH = 0, startHeightH = 0;

    // --- DÉMARRER LE GLISSEMENT ---
    if(resizer1) {
        resizer1.addEventListener('pointerdown', (e) => {
            isDragging1 = true;
            startX = e.clientX;
            startWidth1 = document.querySelector('.ticket-col').getBoundingClientRect().width;
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        });
    }

    if(resizer2) {
        resizer2.addEventListener('pointerdown', (e) => {
            isDragging2 = true;
            startX = e.clientX;
            startWidth2 = document.querySelector('.mid-col').getBoundingClientRect().width;
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        });
    }

    if(resizerH) {
        resizerH.addEventListener('pointerdown', (e) => {
            isDraggingH = true;
            startYH = e.clientY;
            startHeightH = document.getElementById('numpad-box').getBoundingClientRect().height;
            document.body.style.cursor = 'row-resize';
            document.body.style.userSelect = 'none';
        });
    }

    // --- PENDANT LE GLISSEMENT ---
    document.addEventListener('pointermove', (e) => {
        if (isDragging1) {
            const dx = e.clientX - startX;
            const newWidth = Math.max(220, Math.min(window.innerWidth * 0.5, startWidth1 + dx));
            layoutBody.style.setProperty('--ticket-w', `${newWidth}px`);
        }
        if (isDragging2) {
            const dx = e.clientX - startX;
            const newWidth = Math.max(280, Math.min(window.innerWidth * 0.6, startWidth2 + dx));
            layoutBody.style.setProperty('--mid-w', `${newWidth}px`);
        }
        if (isDraggingH) {
            const dy = e.clientY - startYH;
            // Si on descend, on réduit la hauteur du pavé (startHeightH - dy)
            const newHeight = Math.max(150, Math.min(window.innerHeight * 0.6, startHeightH - dy));
            layoutBody.style.setProperty('--numpad-h', `${newHeight}px`);
        }
    });

    // --- RELÂCHER (SAUVEGARDE) ---
    document.addEventListener('pointerup', () => {
        if (isDragging1) localStorage.setItem('caisse_ticket_w', layoutBody.style.getPropertyValue('--ticket-w'));
        if (isDragging2) localStorage.setItem('caisse_mid_w', layoutBody.style.getPropertyValue('--mid-w'));
        if (isDraggingH) localStorage.setItem('caisse_numpad_h', layoutBody.style.getPropertyValue('--numpad-h'));
        
        isDragging1 = false;
        isDragging2 = false;
        isDraggingH = false;
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
    });
}

/* ================= RACCOURCIS & HORLOGE ================= */
document.addEventListener('keydown', (e) => {
    if (e.key === 'F2') { e.preventDefault(); els.scan.focus(); }
    else if (e.key === 'F4') { e.preventDefault(); openCatalog(); }
    else if (e.key === 'F6') { e.preventDefault(); openDiscount(); }
    else if (e.key === 'F9') { e.preventDefault(); holdTicket(); }
    else if (e.key === 'F12') { e.preventDefault(); openPayment(); }
    else if (e.key === 'Escape') {
        const modal = document.querySelector('.modal-overlay');
        if (modal && modal._ctx) modal._ctx.close();
        else if (currentCategory) closeFnProducts();
    }
});

function updateClock() {
    const now = new Date();
    document.getElementById('datetime').textContent = now.toLocaleString('fr-FR', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
}
setInterval(updateClock, 1000);
updateClock();

/* ================= INITIALISATION ================= */
async function init() {
    state.products = await API.getProduits();
    buildFnGrid();
    initResizers();
    renderAll();
    
    // Gestion caissier
    const savedCashier = localStorage.getItem('pos_cashier');
    if (savedCashier) {
        session.cashier = savedCashier;
        STORE.caissier = savedCashier;
        $('info-caissier').textContent = savedCashier;
    } else {
        $('lock-screen').hidden = false;
        $('lock-name').focus();
    }
}

// Enregistrer le caissier lors de la connexion
$('lock-open').addEventListener('click', () => {
    localStorage.setItem('pos_cashier', $('lock-name').value.trim());
});

init();