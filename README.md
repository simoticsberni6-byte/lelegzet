# Lélegzet Jógastúdió — landing page

Egyoldalas, prémium minőségű landing page a Lélegzet Jógastúdió (Budapest XI. kerület) számára. Organic Wellness × Japandi design irány, Tailwind CSS-sel (CDN), natív HTML5-tel, JS-keretrendszer nélkül.

## Fájlstruktúra

```
lelegzet/
├── index.html          # a teljes oldal (szemantikus HTML5 + Tailwind osztályok)
├── css/
│   └── styles.css       # design tokenek, egyedi komponensek, animációk
├── js/
│   └── main.js           # mobilmenü, sticky nav árnyék, scroll-reveal
├── design-system.md      # színek, tipográfia, komponens-szabályok
└── README.md
```

## Megnyitás

Nincs build lépés. Nyisd meg az `index.html`-t közvetlenül böngészőben, vagy indíts egy egyszerű local szervert:

```
npx serve lelegzet
```

## Amit tudnod érdemes

- **Tailwind CDN-ről töltődik be**, a színpaletta és a betűtípusok a `index.html` `<head>`-jében lévő `tailwind.config` blokkban vannak beállítva (`sage`, `sand`, `terracotta`, `ink`, `bg` stb.). Ha végleges/production verzióra váltasz, érdemes a Tailwind CLI-vel lefordítani egy statikus CSS-t a CDN script helyett.
- **Képek:** a hero, a "Rólunk" szekció és a 3 oktatói portré jelenleg **helyettesítő, szabadon felhasználható Unsplash-fotókkal** vannak feltöltve, hogy az oldal élesben is működjön és prémium hatású legyen. Cseréld le őket a stúdió saját fotóira, amint rendelkezésre állnak — az `<img>` `src` attribútumait kell módosítani (`index.html`).
- **Graceful fallback:** minden fotó egy szín-átmenetes keretben (`.img-frame`) ül. Ha egy kép nem töltődik be, a keret akkor is elegáns marad (nincs törött kép ikon).
- **Óratípus-ikonok** egyedi, saját rajzolású inline SVG-k — nincs külső ikon-könyvtár függőség.
- **Hozzáférhetőség:** skip-link, látható fókusz-gyűrű, szemantikus `<nav>/<main>/<footer>`, `aria-label`ek, `scroll-behavior` letiltása `prefers-reduced-motion` esetén.
- **SEO / megosztás:** `meta description`, Open Graph és Twitter Card címkék kitöltve; érdemes hozzáadni egy tényleges `og:image`-et és favicont éles verzióhoz.
- **Teljesítmény:** a hero kép `eager` + `fetchpriority="high"`, minden más kép `loading="lazy"`.

## Tartalom forrása

Minden szöveg a megadott brief-ből származik (Hero, Rólunk, Óratípusok, Oktatók, Órarend, Bérletek, Visszajelzések, Kapcsolat). Az egyetlen kiegészítés a hero alatti 4 elemes "amenity-sáv" (Max. 10 fő, Világos fűtött terem, Mindent biztosítunk, Bartók Béla út) — ezek szó szerint a "Rólunk" bekezdésben megadott tényekből vannak kiemelve, nem új állítások.

## Következő lépések

1. Saját fotók feltöltése (stúdió belső tér, oktatók, esetleg akció közben).
2. Valódi domain + favicon + `og:image` hozzáadása.
3. A `Foglalj` gombok jelenleg `#kapcsolat`-ra / `mailto:`-ra mutatnak — köss be egy tényleges foglalási rendszert (pl. Google Calendar, Calendly, saját foglalási form), ha lesz.
4. Ha production build kell: `npx tailwindcss -i css/styles.css -o css/build.css --minify` és a CDN script cseréje a lefordított CSS-re.
