/* ASF3D - main.js com ampliação de imagens v2 */
(() => {
  const config = window.SITE_CONFIG || {};
  const products = Array.isArray(config.products) ? config.products : [];

  function escapeHTML(value = "") {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  function whatsappUrl(message) {
    const number = String(config.whatsappNumber || "").replace(/\D/g, "");
    const text = encodeURIComponent(
      message || config.whatsappDefaultMessage || "Olá!"
    );

    return number
      ? `https://wa.me/${number}?text=${text}`
      : "#";
  }

  function applyBrand() {
    document.querySelectorAll("[data-company-name]").forEach((el) => {
      el.textContent = config.companyName || "Nome da Empresa";
    });

    document.querySelectorAll("[data-brand-logo]").forEach((img) => {
      img.src = config.logo || "assets/img/logo-asf3d.png";
    });

    document.querySelectorAll(".whatsapp-link").forEach((link) => {
      link.href = whatsappUrl(config.whatsappDefaultMessage);
    });

    document.querySelectorAll(".custom-whatsapp-link").forEach((link) => {
      link.href = whatsappUrl(
        config.whatsappCustomMessage ||
        "Olá! Gostaria de solicitar uma impressão 3D personalizada."
      );
    });

    document.querySelectorAll("[data-instagram-link]").forEach((link) => {
      link.href = config.instagramUrl || "#";

      if (!config.instagramUrl || config.instagramUrl === "#") {
        link.addEventListener("click", (event) => {
          event.preventDefault();
        });
      }
    });

    const year = document.getElementById("current-year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }

    if (
      document.title.includes("Nome da Empresa") &&
      config.companyName
    ) {
      document.title = document.title.replace(
        "Nome da Empresa",
        config.companyName
      );
    }
  }

  function productCard(product) {
    const productName = escapeHTML(product.name);

    const message =
      `Olá! Vim pelo site e tenho interesse no produto "${product.name}". ` +
      `Gostaria de saber preço, prazo e opções disponíveis.`;

    return `
      <article class="product-card reveal visible">

        <button
          class="product-image product-image-button"
          type="button"
          data-lightbox-image="${escapeHTML(product.image)}"
          data-lightbox-title="${productName}"
          aria-label="Ampliar imagem de ${productName}"
        >

          <img
            src="${escapeHTML(product.image)}"
            alt="${productName}"
            loading="lazy"
          />

          <span class="product-badge">
            ${product.available === false
              ? "Indisponível"
              : "Sob demanda"
            }
          </span>

          <span class="image-expand-hint" aria-hidden="true">
            <span class="expand-icon">⌕</span>
            <span>Ampliar</span>
          </span>

        </button>

        <div class="product-body">

          <span class="product-category">
            ${escapeHTML(product.category)}
          </span>

          <h3>${productName}</h3>

          <p>
            ${escapeHTML(product.description)}
          </p>

          <div class="product-footer">

            <div class="product-price">

              <small>
                Valor
              </small>

              ${escapeHTML(
                product.price || "Sob consulta"
              )}

            </div>

            <a
              class="btn btn-outline"
              href="${whatsappUrl(message)}"
              target="_blank"
              rel="noopener"
              aria-label="Pedir ${productName} pelo WhatsApp"
            >
              Tenho interesse
            </a>

          </div>

        </div>

      </article>
    `;
  }

  function renderFeatured() {
    const container =
      document.getElementById("featured-products");

    if (!container) {
      return;
    }

    const featured = products
      .filter((product) => product.featured)
      .slice(0, 3);

    container.innerHTML =
      featured.map(productCard).join("");
  }

  function setupCatalog() {
    const container =
      document.getElementById("catalog-products");

    if (!container) {
      return;
    }

    const input =
      document.getElementById("catalog-search");

    const filters =
      document.getElementById("category-filters");

    const count =
      document.getElementById("catalog-count");

    const empty =
      document.getElementById("empty-state");

    const categories = [
      "Todos",
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      )
    ];

    let activeCategory = "Todos";
    let search = "";

    filters.innerHTML = categories
      .map((category, index) => `
        <button
          class="filter-btn ${
            index === 0 ? "active" : ""
          }"
          type="button"
          data-category="${escapeHTML(category)}"
        >
          ${escapeHTML(category)}
        </button>
      `)
      .join("");

    const render = () => {
      const query =
        search.trim().toLowerCase();

      const filtered =
        products.filter((product) => {

          const matchesCategory =
            activeCategory === "Todos" ||
            product.category === activeCategory;

          const haystack =
            `${product.name} ` +
            `${product.description} ` +
            `${product.category}`
              .toLowerCase();

          const matchesSearch =
            !query ||
            haystack.includes(query);

          return (
            matchesCategory &&
            matchesSearch
          );
        });

      container.innerHTML =
        filtered.map(productCard).join("");

      count.textContent =
        `${filtered.length} ` +
        `${filtered.length === 1
          ? "produto encontrado"
          : "produtos encontrados"
        }`;

      empty.hidden =
        filtered.length !== 0;
    };

    filters.addEventListener(
      "click",
      (event) => {

        const button =
          event.target.closest(
            "[data-category]"
          );

        if (!button) {
          return;
        }

        activeCategory =
          button.dataset.category;

        filters
          .querySelectorAll(".filter-btn")
          .forEach((btn) => {
            btn.classList.remove("active");
          });

        button.classList.add("active");

        render();
      }
    );

    input.addEventListener(
      "input",
      () => {

        search = input.value;

        render();
      }
    );

    render();
  }

  function setupLightbox() {
    /*
      O modal é criado pelo próprio JavaScript.
      Não precisa adicionar nada no catalogo.html.
    */

    const modal =
      document.createElement("div");

    modal.className =
      "product-lightbox";

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    modal.innerHTML = `
      <div
        class="product-lightbox-overlay"
        data-lightbox-close
      ></div>

      <div
        class="product-lightbox-content"
        role="dialog"
        aria-modal="true"
      >

        <button
          class="product-lightbox-close"
          type="button"
          data-lightbox-close
          aria-label="Fechar imagem"
        >
          ×
        </button>

        <img
          class="product-lightbox-image"
          src=""
          alt=""
        />

        <div
          class="product-lightbox-caption"
        ></div>

      </div>
    `;

    document.body.appendChild(modal);

    const modalImage =
      modal.querySelector(
        ".product-lightbox-image"
      );

    const caption =
      modal.querySelector(
        ".product-lightbox-caption"
      );

    const closeButton =
      modal.querySelector(
        ".product-lightbox-close"
      );

    function openLightbox(button) {
      const image =
        button.querySelector("img");

      const src =
        button.dataset.lightboxImage ||
        image?.src;

      const title =
        button.dataset.lightboxTitle ||
        image?.alt ||
        "Imagem do produto";

      if (!src) {
        return;
      }

      modalImage.src = src;
      modalImage.alt = title;

      caption.textContent = title;

      modal.classList.add("is-open");

      modal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.classList.add(
        "lightbox-open"
      );

      setTimeout(() => {
        closeButton.focus();
      }, 0);
    }

    function closeLightbox() {
      modal.classList.remove(
        "is-open"
      );

      modal.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.classList.remove(
        "lightbox-open"
      );
    }

    /*
      Delegação de evento.

      Isso é importante porque os produtos
      são recriados quando o usuário pesquisa
      ou troca a categoria.
    */

    document.addEventListener(
      "click",
      (event) => {

        const productImageButton =
          event.target.closest(
            ".product-image-button"
          );

        if (productImageButton) {

          event.preventDefault();

          openLightbox(
            productImageButton
          );

          return;
        }

        if (
          event.target.closest(
            "[data-lightbox-close]"
          )
        ) {

          event.preventDefault();

          closeLightbox();
        }
      }
    );

    /*
      ESC fecha a imagem.
    */

    document.addEventListener(
      "keydown",
      (event) => {

        if (
          event.key === "Escape" &&
          modal.classList.contains(
            "is-open"
          )
        ) {

          closeLightbox();
        }
      }
    );
  }

  function setupMobileMenu() {
    const button =
      document.querySelector(
        ".menu-toggle"
      );

    const nav =
      document.querySelector(
        ".main-nav"
      );

    if (!button || !nav) {
      return;
    }

    button.addEventListener(
      "click",
      () => {

        const open =
          nav.classList.toggle("open");

        button.setAttribute(
          "aria-expanded",
          String(open)
        );

        button.textContent =
          open ? "×" : "☰";
      }
    );

    nav.addEventListener(
      "click",
      (event) => {

        if (
          event.target.closest("a") &&
          window.innerWidth <= 760
        ) {

          nav.classList.remove(
            "open"
          );

          button.setAttribute(
            "aria-expanded",
            "false"
          );

          button.textContent =
            "☰";
        }
      }
    );

    window.addEventListener(
      "resize",
      () => {

        if (
          window.innerWidth > 760 &&
          nav.classList.contains("open")
        ) {

          nav.classList.remove(
            "open"
          );

          button.setAttribute(
            "aria-expanded",
            "false"
          );

          button.textContent =
            "☰";
        }
      }
    );
  }

  function setupReveal() {
    const elements =
      document.querySelectorAll(
        ".reveal"
      );

    if (
      !("IntersectionObserver" in window)
    ) {

      elements.forEach((el) => {
        el.classList.add("visible");
      });

      return;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add("visible");

                observer.unobserve(
                  entry.target
                );
              }
            }
          );

        },
        {
          threshold: 0.1
        }
      );

    elements.forEach((el) => {
      observer.observe(el);
    });
  }

  /*
    Inicialização do site.
  */

  applyBrand();

  renderFeatured();

  setupCatalog();

  setupLightbox();

  setupMobileMenu();

  setupReveal();

})();