 const canvas = document.getElementById('warp-canvas');
        const ctx = canvas.getContext('2d');
        let points = [];
        const mouse = { x: -1000, y: -1000 };
        const gap = 35;

        window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

        function init() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            points = [];
            for (let x = 0; x < canvas.width + gap; x += gap) {
                for (let y = 0; y < canvas.height + gap; y += gap) {
                    points.push({ x, y, baseX: x, baseY: y });
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            points.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 250;
                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    p.x = p.baseX - (dx / dist) * (force * 50);
                    p.y = p.baseY - (dy / dist) * (force * 50);
                    ctx.fillStyle = `rgba(234, 179, 8, ${0.1 + force * 0.5})`;
                } else {
                    p.x += (p.baseX - p.x) * 0.1;
                    p.y += (p.baseY - p.y) * 0.1;
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
                }
                ctx.beginPath(); ctx.arc(p.x, p.y, 1, 0, Math.PI * 2); ctx.fill();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', init);
        init(); animate();

        // entrance logic 
        window.addEventListener('DOMContentLoaded', () => {
            const tl = anime.timeline({ easing: 'easeOutExpo', duration: 1200 });
            tl.add({ targets: '.hero-name', translateX: [100, 0], opacity: [0, 1], delay: 300 })
              .add({ targets: '.location-tag', translateY: [10, 0], opacity: [0, 1] }, '-=800')
              .add({ targets: '.hero-sub', translateY: [30, 0], opacity: [0, 1] }, '-=800');
        });

        // skills reveal 
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({ targets: '#skill-line', width: '100%', easing: 'easeInOutQuad', duration: 1500 });
                    anime({ 
                        targets: '.reveal-up, .reveal-card', 
                        translateX: [-80, 0], 
                        opacity: [0, 1], 
                        easing: 'easeOutExpo', 
                        duration: 1200, 
                        delay: anime.stagger(80, {start: 300}) 
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        observer.observe(document.querySelector('#skills'));

        // smooth nav
        document.querySelectorAll('.nav-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const pos = targetElement.getBoundingClientRect().top + window.pageYOffset - 70;
                    anime({ targets: document.scrollingElement, scrollTop: pos, duration: 1200, easing: 'easeInOutExpo' });
                }
            });
        });