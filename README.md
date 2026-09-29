# swdalumni.org: Southwest District Alumni Association (SWDAA)

Website for the joint alumni affiliate of Kappa Kappa Psi & Tau Beta Sigma in the Southwest
District (NM, AR, LA, OK, TX). Webmaster: Brady Gilleran (for Dino).

- **Hosting:** GitHub Pages, **user site** of the `bjgiller` account (`bjgiller/bjgiller.github.io`),
  `main` branch root. `CNAME` = `swdalumni.org`.
- Because this is bjgiller's user site with a custom domain, any other bjgiller repo with Pages
  turned on and **no** custom domain of its own would show up at `swdalumni.org/<repo-name>`.
- **No build step.** Plain HTML/CSS/JS. Edit, commit, push, and it's live in about a minute.
  Internal links are extensionless (`/membership` serves `membership.html`).

## Pages

Current design (2026–27 redesign; uses `assets/css/site.css` + `assets/js/site.js`):

| File | Page |
|---|---|
| `index.html` | Home |
| `boardofdirectors.html` | Board of Directors (headshots in `images/2026/board-*.jpg`) |
| `membership.html` | Join SWDAA |
| `education.html` | SWDAA for Education (recipient gallery + lightbox) |
| `communityband.html` | Find a Community Band (map embed) |
| `grantsandscholarships.html` | Grants, Scholarships & Awards |
| `resources.html` | Organization Links |
| `shop.html` | Shop |
| `contact.html` | Contact: mailto form with a board-member picker, social links |
| `404.html` | Not found |

Redirect stubs (meta refresh, `noindex`; the content moved to Linktree or was retired):
`cadence.html`, `celebrations.html`, `newsletters.html`, `resourcedatabase.html`, `webinars.html`.

Legacy pages still on the old theme (`assets/css/main.css`) and not linked from the nav:
`elections.html`, `professionals.html`, `programs.html`. Plus old folders `Elections2023/`,
`Candidate things/`, `img/`, `newlogos/`, `css/`, and loose PDFs/images at the root, kept so old
links keep working.

The **header and footer are copied into every current page**; update all of them together.

## Design

- `assets/css/site.css`: tokens at the top: navy `#2c3857`, gold `#ebd271`, sky `#a9dbe0`, cream;
  fonts Oswald + Inter. Components: hero with twinkling stars, marquee, cards, board cards, award
  blocks, lightbox, forms, footer.
- `assets/js/site.js`: header, mobile nav, dropdowns, scroll reveal, hero stars, education
  lightbox, contact mailto form, footer year.
- Font Awesome 5 (`assets/css/fontawesome-all.min.css`, `assets/webfonts/`). jQuery 3.7.1 remains
  only for the legacy pages.

## Board emails (used on Contact and Board pages)

swdjointalumni@gmail.com (general/communications), swdaachair@, swdaamembership@,
swdaaprograms@, swdaafinance@, swdaa.comals@ (all @gmail.com). Social: facebook.com/SouthwestDistrictAA,
instagram.com/swdalumni, linktr.ee/swdalumni, Facebook group /groups/swdaa.
Donate button → PayPal hosted button `UE3B39D7F5DVS`.

## Related

The Alpha Psi Alumni Association site (alphapsiaa.com, `C:\Programming\alphapsiaa-ui.github.io`)
was built from this site's structure with its own maroon design. See `C:\Programming\CLAUDE.md`
for how all the projects fit together.
