(function () {
  const page = document.body.dataset.page || "home";
  const isHome = page === "home";
  const sectionHref = (id) => (isHome ? `#${id}` : `/index.html#${id}`);

  const headerRoot = document.getElementById("site-header");
  if (headerRoot) {
    headerRoot.innerHTML = `
      <header class="mx-auto max-w-6xl px-6 pt-6">
        <nav class="card rounded-2xl px-4 sm:px-5 py-3 flex items-center justify-between gap-4">
          <a href="/index.html" class="flex items-center gap-3 min-w-0">
            <div class="h-9 w-9 rounded-xl bg-primary-100 stroke flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7l8-4z" stroke="#3B4BFF" stroke-width="1.6"/>
                <path d="M8.5 12.2l2.4 2.4 4.8-5.2" stroke="#22C55E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="leading-tight min-w-0">
              <div class="font-semibold tracking-tight text-text">Vault</div>
              <div class="text-xs text-text3 truncate">Build knowledge, your way</div>
            </div>
          </a>

          <div class="hidden sm:flex items-center gap-6 text-sm text-text2">
            <a class="hover:text-primary-600" href="${sectionHref("features")}">Features</a>
            <a class="hover:text-primary-600" href="${sectionHref("how")}">Cómo funciona</a>
            <a class="hover:text-primary-600" href="${sectionHref("faq")}">FAQ</a>
          </div>

          <div class="flex items-center gap-3">
            <a href="${sectionHref("waitlist")}" class="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm stroke bg-surface hover:bg-primary-100 text-text2">Ver demo</a>
            <a href="${sectionHref("waitlist")}" class="inline-flex rounded-xl px-4 py-2 text-sm font-semibold bg-primary-600 hover:bg-primary-500 text-white shadow-glow">Únete</a>
          </div>
        </nav>
      </header>
    `;
  }

  const footerRoot = document.getElementById("site-footer");
  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="border-t border-border/90 bg-surface/70">
        <div class="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="text-sm text-text3">© <span id="year"></span> Vault. All rights reserved.</div>
          <div class="text-sm text-text3">
            Hecho para construir conocimiento, no para coleccionar pestañas.
            <span class="hidden sm:inline">•</span>
            <a class="hover:text-primary-600" href="/privacy.html">Privacy</a>
            <span>•</span>
            <a class="hover:text-primary-600" href="/terms.html">Terms</a>
          </div>
        </div>
      </footer>
    `;
  }

  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  const waitlistForm = document.getElementById("waitlist-form");
  if (waitlistForm) {
    waitlistForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const thanks = document.getElementById("thanks");
      if (thanks) thanks.classList.remove("hidden");
      waitlistForm.reset();
    });
  }

  const toggleButtons = Array.from(document.querySelectorAll(".toggle-option"));
  const panels = Array.from(document.querySelectorAll(".share-panel"));

  if (toggleButtons.length && panels.length) {
    const applyView = (view) => {
      toggleButtons.forEach((button) => {
        button.setAttribute("aria-pressed", button.dataset.view === view ? "true" : "false");
      });

      panels.forEach((panel) => {
        const panelType = panel.dataset.panel;
        const show = view === "both" || panelType === view;
        panel.hidden = !show;
      });
    };

    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => applyView(button.dataset.view));
    });
  }
})();
