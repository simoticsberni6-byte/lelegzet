# Lélegzet Jógastúdió — Design rendszer

**Irány:** Organic Wellness × Japandi. A cél a nyugalom, a légzés ritmusa és a bizalom — Apple / Airbnb / Aesop / MUJI ihletésű letisztultsággal, másolás nélkül.

## Színpaletta

| Szerep | HEX | Mire használjuk |
|---|---|---|
| Háttér (meleg fehér) | `#FAF6F0` | Oldal alapháttér |
| Felület | `#FFFFFF` | Kártyák, panelek |
| Felület (homok) | `#F2EBDF` | Váltakozó szekció-háttér |
| Sage (elsődleges) | `#75886A` | Elsődleges gomb, ikonok, kiemelés |
| Sage sötét | `#566149` | Hover / pressed állapot |
| Sage világos | `#E7ECDF` | Chip / badge háttér |
| Homok (sand) | `#D9CBAE` | Semleges díszítő elem sötét háttéren |
| Terrakotta (accent) | `#BE6E48` | **Egyetlen** kiemelő akcent — "legnépszerűbb" jelvény, csillagok |
| Tinta (szöveg) | `#2A2721` | Fő szövegszín (meleg, nem tiszta fekete) |
| Tinta, tompított | `#6B6459` | Másodlagos szöveg |
| Élvonal | `#E7DFD1` | Kártya- és szekcióhatárok |

**Szabály:** a terrakotta csak egyszerre egy helyen jelenjen meg szekciónként (kiemelés elve).

## Tipográfia

- **Fejlécek:** Fraunces (szerif, 400–600, néhol dőlt kiemeléshez) — meleg, editoriális karakter.
- **Body:** Work Sans (400–700) — tiszta, jól olvasható, humanista sans.
- **Skála:** H1 ~64px / H2 ~36–40px / H3 ~20–24px / Body 16–18px / Small 14px, mindig nagy sortávval (1.5–1.6).

## Komponensek

- **Gombok:** pill (teljesen lekerekített), elsődleges = sage töltött, másodlagos = tinta körvonalas, sötét háttéren = fehér töltött. Hoverre finom emelkedés (`translateY(-2px)`) + árnyék erősödés.
- **Kártyák:** `border-radius: 28px`, 1px élvonal, lágy szórt árnyék, hoverre enyhe emelkedés.
- **Chip / badge:** pill, uppercase, kis betűméret, széles betűköz, sage világos háttér.
- **Kép-keret:** mindig szín-átmenetes háttérrel a kép mögött — ha egy kép nem eleikig be, a keret akkor is prémium hatású marad.

## Árnyék

- **Soft:** `0 10px 40px -14px rgba(42,39,33,.16)` — kártyák, alap állapot.
- **Lift:** `0 24px 60px -16px rgba(42,39,33,.22)` — hover, kiemelt elemek.

## Térköz-ritmus

- Szekció padding: `py-24` (mobil `py-16`–`py-20`), asztali `lg:py-32`.
- Belső rács: 8px alapú lépték (Tailwind alapértelmezett skála).
- Konténer: `max-width: 88rem`, oldalsó padding `px-6` / `lg:px-10`.

## 6 alapelv

1. **A fehér tér funkció, nem hiány** — hagyj annyi levegőt a tartalom körül, mint egy tartott légzésnek.
2. **Meleg semlegesek az éles kontraszt helyett** — soha nem tiszta `#000`/`#FFF` páros.
3. **Egyszerre egy akcentszín** — a sage viszi az akciókat, a terrakotta csak egyetlen kiemelésként jelenik meg szekciónként.
4. **Lágy geometria** — lekerekített sarkok, szerves görbék, semmi éles vágás.
5. **A tipográfia beszél** — egy elegáns szerif fejléc és egy csendes sans body elég a hierarchiához, dísz nélkül.
6. **A mozgás légzés, nem villanás** — lassú, lágy easing, semmi hirtelen.
