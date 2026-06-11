/* ============================================================
   freethebikes — site behavior
   particles · typewriter · scroll reveals · nav · log render
   ============================================================ */

(() => {
  "use strict";

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- particle network (hero canvas) ---------- */
  const canvas = document.getElementById("particles");
  if (canvas && !reducedMotion) {
    const ctx = canvas.getContext("2d");
    let particles = [];
    let w = 0, h = 0;
    const mouse = { x: null, y: null };
    const LINK_DIST = 130;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(110, Math.floor((w * h) / 14000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6
      }));
    }

    function step() {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // gentle pull toward the cursor
        if (mouse.x !== null) {
          const dx = mouse.x - p.x, dy = mouse.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < 180 && d > 0.001) {
            p.x += (dx / d) * 0.25;
            p.y += (dy / d) * 0.25;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.55)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(129, 140, 248, ${0.16 * (1 - d / LINK_DIST)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(step);
    }

    canvas.parentElement.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    canvas.parentElement.addEventListener("pointerleave", () => {
      mouse.x = mouse.y = null;
    });

    window.addEventListener("resize", resize);
    resize();
    step();
  }

  /* ---------- typewriter ---------- */
  const phrases = [
    "software & AI agents",
    "PLCs & industrial control",
    "solar + battery systems",
    "fabrication & prototyping",
    "voice interfaces",
    "reverse engineering",
    "things that actually work"
  ];

  const tw = document.getElementById("typewriter");
  if (tw) {
    if (reducedMotion) {
      tw.textContent = phrases[0];
    } else {
      let pi = 0, ci = 0, deleting = false;

      function type() {
        const phrase = phrases[pi];
        ci += deleting ? -1 : 1;
        tw.textContent = phrase.slice(0, ci);

        let delay = deleting ? 35 : 70;
        if (!deleting && ci === phrase.length) {
          delay = 1800;
          deleting = true;
        } else if (deleting && ci === 0) {
          deleting = false;
          pi = (pi + 1) % phrases.length;
          delay = 350;
        }
        setTimeout(type, delay);
      }
      type();
    }
  }

  /* ---------- scroll reveals ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el, i) => {
    // stagger siblings that reveal together
    el.style.setProperty("--reveal-delay", `${(i % 4) * 0.08}s`);
    io.observe(el);
  });

  /* ---------- stat counters ---------- */
  const counters = document.querySelectorAll(".stat__value[data-count]");
  const counterIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        counterIO.unobserve(entry.target);

        const target = +entry.target.dataset.count;
        if (reducedMotion) {
          entry.target.textContent = target;
          continue;
        }
        const start = performance.now();
        const dur = 1200;
        (function tick(now) {
          const t = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          entry.target.textContent = Math.round(target * eased);
          if (t < 1) requestAnimationFrame(tick);
        })(start);
      }
    },
    { threshold: 0.6 }
  );
  counters.forEach((el) => counterIO.observe(el));

  /* ---------- nav: scrolled state + active link + mobile menu ---------- */
  const nav = document.getElementById("nav");
  const navLinks = document.getElementById("navLinks");
  const navToggle = document.getElementById("navToggle");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("nav--scrolled", window.scrollY > 24);
  }, { passive: true });

  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", () => navLinks.classList.remove("open"));

  const sections = document.querySelectorAll("main section[id], .hero");
  const sectionIO = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        navLinks.querySelectorAll("a").forEach((a) => {
          a.classList.toggle("active", a.dataset.section === id);
        });
      }
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => sectionIO.observe(s));

  /* ---------- card tilt + cursor glow ---------- */
  if (!reducedMotion && matchMedia("(pointer: fine)").matches) {
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);

        const rx = ((y / r.height) - 0.5) * -6;
        const ry = ((x / r.width) - 0.5) * 6;
        card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }

  /* ---------- render the log ---------- */
  const logContainer = document.getElementById("logEntries");
  if (logContainer) {
    const entries = (typeof LOG_ENTRIES !== "undefined" ? LOG_ENTRIES : [])
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    if (!entries.length) {
      logContainer.innerHTML = '<p class="log-empty">// no entries yet — add one in js/log-data.js</p>';
    } else {
      for (const entry of entries) {
        const el = document.createElement("article");
        el.className = "log-entry reveal";

        const dateFmt = new Date(entry.date + "T00:00:00").toLocaleDateString(undefined, {
          year: "numeric", month: "short", day: "numeric"
        });

        const meta = document.createElement("div");
        meta.className = "log-entry__meta";

        const dateEl = document.createElement("span");
        dateEl.className = "log-entry__date";
        dateEl.textContent = dateFmt;
        meta.appendChild(dateEl);

        if (entry.tags && entry.tags.length) {
          const tagsEl = document.createElement("div");
          tagsEl.className = "log-entry__tags";
          for (const tag of entry.tags) {
            const t = document.createElement("span");
            t.textContent = "#" + tag;
            tagsEl.appendChild(t);
          }
          meta.appendChild(tagsEl);
        }

        const title = document.createElement("h3");
        title.className = "log-entry__title";
        title.textContent = entry.title;

        const body = document.createElement("p");
        body.className = "log-entry__body";
        body.textContent = entry.body;

        el.append(meta, title, body);
        logContainer.appendChild(el);
        io.observe(el);
      }
    }
  }

  /* ---------- project photo galleries + lightbox ---------- */
  const photos = typeof PROJECT_PHOTOS !== "undefined" ? PROJECT_PHOTOS : [];
  const lightboxState = { list: [], index: 0 };
  let lightbox = null;

  function openLightbox(list, index) {
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.innerHTML =
        '<button class="lightbox__close" aria-label="Close">×</button>' +
        '<button class="lightbox__nav lightbox__nav--prev" aria-label="Previous">‹</button>' +
        '<figure class="lightbox__figure"><img alt="" /><figcaption></figcaption></figure>' +
        '<button class="lightbox__nav lightbox__nav--next" aria-label="Next">›</button>';
      document.body.appendChild(lightbox);

      const show = (i) => {
        const n = lightboxState.list.length;
        lightboxState.index = (i + n) % n;
        const photo = lightboxState.list[lightboxState.index];
        const img = lightbox.querySelector("img");
        img.src = photo.src;
        img.alt = photo.caption || "";
        lightbox.querySelector("figcaption").textContent = photo.caption || "";
        const multiple = n > 1;
        lightbox.querySelectorAll(".lightbox__nav").forEach((b) => {
          b.style.display = multiple ? "" : "none";
        });
      };
      lightbox.show = show;

      const close = () => {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
      };
      lightbox.querySelector(".lightbox__close").addEventListener("click", close);
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) close();
      });
      lightbox.querySelector(".lightbox__nav--prev").addEventListener("click", () => show(lightboxState.index - 1));
      lightbox.querySelector(".lightbox__nav--next").addEventListener("click", () => show(lightboxState.index + 1));
      document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(lightboxState.index - 1);
        if (e.key === "ArrowRight") show(lightboxState.index + 1);
      });
    }

    lightboxState.list = list;
    lightbox.show(index);
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  document.querySelectorAll("[data-gallery]").forEach((wrap) => {
    const list = photos.filter((p) => p.project === wrap.dataset.gallery);
    if (!list.length) return; // stays hidden

    const grid = wrap.querySelector(".gallery");
    list.forEach((photo, i) => {
      const fig = document.createElement("figure");
      fig.className = "gallery__item";
      fig.tabIndex = 0;

      const img = document.createElement("img");
      img.src = photo.src;
      img.alt = photo.caption || "Project photo";
      img.loading = "lazy";

      const cap = document.createElement("figcaption");
      cap.textContent = photo.caption || "";

      fig.append(img, cap);
      fig.addEventListener("click", () => openLightbox(list, i));
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(list, i);
        }
      });
      grid.appendChild(fig);
    });

    wrap.hidden = false;
  });

  /* ---------- footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
