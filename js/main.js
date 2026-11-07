// ===== Menu data: edit names, prices, images here =====
const dishes = [
  { cat: "entrees",  name: "Huîtres fraîches", price: 18, img: "assets/images/dishes/huitres.jpg", alt: "Huîtres fraîches", desc: "Sélection d'huîtres de nos côtes, servies avec citron et échalotes" },
  { cat: "entrees",  name: "Tartare de thon", price: 22, img: "assets/images/dishes/tartare-thon.jpg", alt: "Tartare de thon", desc: "Thon rouge mariné aux agrumes et avocat" },
  { cat: "entrees",  name: "Carpaccio de Saint-Jacques", price: 24, img: "assets/images/dishes/carpaccio.jpg", alt: "Carpaccio de Saint-Jacques", desc: "Noix de Saint-Jacques fraîches, huile d'olive et citron vert" },
  { cat: "plats",    name: "Bar de ligne grillé", price: 38, img: "assets/images/dishes/bar-grille.jpg", alt: "Bar de ligne grillé", desc: "Bar entier grillé, légumes de saison et beurre blanc" },
  { cat: "plats",    name: "Homard breton", price: 52, img: "assets/images/dishes/homard.jpg", alt: "Homard breton", desc: "Homard rôti au beurre d'algues et pommes grenaille" },
  { cat: "plats",    name: "Bouillabaisse REQUIN", price: 45, img: "assets/images/dishes/bouillabaisse.jpg", alt: "Bouillabaisse REQUIN", desc: "Notre spécialité maison, poissons nobles et crustacés" },
  { cat: "desserts", name: "Tarte au citron meringuée", price: 12, img: "assets/images/dishes/tarte-citron.jpg", alt: "Tarte au citron meringuée", desc: "Citrons de Menton, meringue italienne" },
  { cat: "desserts", name: "Fondant au chocolat", price: 11, img: "assets/images/dishes/fondant.jpg", alt: "Fondant au chocolat", desc: "Chocolat noir 70%, glace vanille bourbon" },
  { cat: "desserts", name: "Crème brûlée", price: 10, img: "assets/images/dishes/creme-brulee.jpg", alt: "Crème brûlée", desc: "Vanille de Madagascar, caramel croustillant" },
  { cat: "boissons", name: "Champagne Brut", price: 85, img: "assets/images/dishes/champagne.jpg", alt: "Champagne Brut", desc: "Sélection maison, notes florales" },
  { cat: "boissons", name: "Vin blanc Chablis", price: 42, img: "assets/images/dishes/chablis.jpg", alt: "Vin blanc Chablis", desc: "Accord parfait avec nos fruits de mer" },
  { cat: "boissons", name: "Cocktail Océan Bleu", price: 14, img: "assets/images/dishes/cocktail.jpg", alt: "Cocktail Océan Bleu", desc: "Création maison, vodka et curaçao bleu" },
  { cat: "desserts", name: "Verrine chocolat & fruits rouges", price: 14, img: "assets/images/dishes/verrine-fruits-rouges.jpg", alt: "Verrine au chocolat et groseilles", desc: "Mousse chocolat, crème légère, groseilles et feuille d'or" },
  { cat: "desserts", name: "Verrine chocolat-orange", price: 14, img: "assets/images/dishes/verrine-orange.jpg", alt: "Verrines chocolat et orange", desc: "Crème d'orange, mousse chocolat et chantilly" },
  { cat: "desserts", name: "Panna cotta fruit de la passion", price: 16, img: "assets/images/dishes/panna-cotta.jpg", alt: "Panna cotta au fruit de la passion", desc: "Panna cotta vanille, coulis de fruit de la passion et myrtilles" },
  { cat: "boissons", name: "Mojito framboise-menthe", price: 14, img: "assets/images/dishes/mojito-framboise.jpg", alt: "Mojito framboise et menthe", desc: "Framboises fraîches, citron vert, menthe et glace pilée" },
  { cat: "boissons", name: "Spritz fruité sans alcool", price: 12, img: "assets/images/dishes/spritz-fruite.jpg", alt: "Sélection de spritz fruités", desc: "Agrumes, fruits rouges et menthe, pétillants et sans alcool" }
];

const list = document.getElementById('dishes');
const render = (cat) => {
  list.innerHTML = dishes.filter(d => d.cat === cat).map(d => `
    <div class="col-md-6 col-lg-4">
      <article class="dish">
        <img src="${d.img}" alt="${d.alt}" loading="lazy">
        <div class="p-4">
          <h3 class="h5">${d.name}</h3>
          <p class="text-muted">${d.desc}</p>
          <p class="price">${d.price} DH</p>
        </div>
      </article>
    </div>`).join('');
};
render('entrees');

document.getElementById('tabs').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-tab');
  if (!btn) return;
  document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.tab);
});

// ===== Navbar: background on scroll + active link =====
const nav = document.getElementById('nav');
const sections = document.querySelectorAll('section[id], header[id]');
const links = document.querySelectorAll('#navMenu .nav-link');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 100);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 200) current = s.id; });
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
};
window.addEventListener('scroll', onScroll);
onScroll();

// Close mobile menu after clicking a link
const collapseEl = document.getElementById('navMenu');
document.querySelectorAll('#navMenu a').forEach(a => a.addEventListener('click', () => {
  if (collapseEl.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
}));

// ===== Reservation form =====
const form = document.getElementById('resForm');
const ok = document.getElementById('resOk');
document.getElementById('date').min = new Date().toISOString().split('T')[0];
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.classList.add('was-validated');
  if (!form.checkValidity()) return;
  // TODO: send the data to a backend or a service (Formspree, EmailJS...)
  ok.hidden = false;
  form.reset();
  form.classList.remove('was-validated');
  ok.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

document.getElementById('year').textContent = new Date().getFullYear();
