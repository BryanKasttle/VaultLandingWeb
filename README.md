# Vault Landing (Static)

Landing page estática compatible con GitHub Pages (root `/`), sin build tools ni frameworks adicionales.

## Estructura

- `/index.html`
- `/privacy.html`
- `/terms.html`
- `/css/styles.css`
- `/js/main.js`
- `/assets/icons/`
- `/assets/img/`
- `/robots.txt`
- `/sitemap.xml`

## Desarrollo local

Puedes abrir `index.html` directamente o usar un servidor estático:

```bash
python3 -m http.server 4173
```

Luego visita `http://localhost:4173`.

## Notas

- Se mantiene Tailwind vía CDN.
- Header y footer se renderizan desde `js/main.js` para reutilizarse entre páginas.
- El formulario de waitlist funciona en modo simulado (sin backend).
