/* SWDAA site script — no dependencies. */
(function () {
	var doc = document.documentElement;
	doc.classList.remove('no-js');

	/* ---------- Header: solid after scrolling past the top ---------- */
	var header = document.querySelector('.site-header');
	function onScroll() {
		if (header) header.classList.toggle('solid', window.scrollY > 40);
	}
	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });

	/* ---------- Mobile navigation ---------- */
	var toggle = document.querySelector('.nav-toggle');
	function closeNav() {
		document.body.classList.remove('nav-open');
		if (toggle) toggle.setAttribute('aria-expanded', 'false');
	}
	if (toggle) {
		toggle.addEventListener('click', function () {
			var open = document.body.classList.toggle('nav-open');
			toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
		document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
		document.querySelectorAll('.nav-links a').forEach(function (a) { a.addEventListener('click', closeNav); });
	}

	/* ---------- Dropdowns (click / keyboard; hover handled in CSS) ---------- */
	document.querySelectorAll('.has-drop').forEach(function (li) {
		var btn = li.querySelector('.nav-drop-toggle');
		btn.addEventListener('click', function (e) {
			e.stopPropagation();
			var open = li.classList.toggle('open');
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
	});
	document.addEventListener('click', function (e) {
		document.querySelectorAll('.has-drop.open').forEach(function (li) {
			if (!li.contains(e.target)) {
				li.classList.remove('open');
				li.querySelector('.nav-drop-toggle').setAttribute('aria-expanded', 'false');
			}
		});
	});

	/* ---------- Scroll reveal ---------- */
	var reveals = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('in');
					io.unobserve(entry.target);
				}
			});
		}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
		reveals.forEach(function (el) { io.observe(el); });
	} else {
		reveals.forEach(function (el) { el.classList.add('in'); });
	}

	/* ---------- Twinkling stars in the hero ---------- */
	var stars = document.querySelector('.hero-stars');
	if (stars) {
		for (var i = 0; i < 18; i++) {
			var s = document.createElement('i');
			s.className = 'fas fa-star';
			s.style.left = (Math.random() * 100) + '%';
			s.style.top = (Math.random() * 100) + '%';
			s.style.fontSize = (6 + Math.random() * 14) + 'px';
			s.style.animationDelay = (Math.random() * 6) + 's';
			s.style.animationDuration = (4 + Math.random() * 5) + 's';
			stars.appendChild(s);
		}
	}

	/* ---------- Lightbox (SWDAA for Education gallery) ---------- */
	var box = document.getElementById('lightbox');
	var items = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
	if (box && items.length && typeof box.showModal === 'function') {
		var img = box.querySelector('img');
		var cap = box.querySelector('p');
		var current = 0;
		function show(i) {
			current = (i + items.length) % items.length;
			img.src = items[current].getAttribute('data-lightbox');
			img.alt = items[current].getAttribute('data-caption') || '';
			cap.textContent = items[current].getAttribute('data-caption') || '';
		}
		items.forEach(function (el, i) {
			el.addEventListener('click', function () { show(i); box.showModal(); });
		});
		box.querySelector('.lb-close').addEventListener('click', function () { box.close(); });
		box.querySelector('.lb-prev').addEventListener('click', function () { show(current - 1); });
		box.querySelector('.lb-next').addEventListener('click', function () { show(current + 1); });
		box.addEventListener('click', function (e) { if (e.target === box) box.close(); });
		box.addEventListener('keydown', function (e) {
			if (e.key === 'ArrowLeft') show(current - 1);
			if (e.key === 'ArrowRight') show(current + 1);
		});
	}

	/* ---------- Contact form -> opens the visitor's email app ---------- */
	var form = document.getElementById('contact-form');
	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			var to = form.elements.to.value;
			var name = form.elements.name.value.trim();
			var subject = form.elements.subject.value.trim() || 'Message from swdalumni.org';
			var body = form.elements.message.value.trim();
			if (name) body += '\n\n- ' + name;
			window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
		});
	}

	/* ---------- Footer year ---------- */
	document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
