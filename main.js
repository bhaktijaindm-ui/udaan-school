// Shared Components Injection
const headerTemplate = `
<nav>
    <a href="index.html" class="logo-text">Edukids<span class="logo-dot">.</span></a>
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="activities.html">Activity</a></li>
        <li><a href="admissions.html">Admission</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="contact.html">Contact Us</a></li>
    </ul>
    <div class="nav-cta">
        <a href="https://youtube.com" target="_blank" class="btn btn-youtube">Youtube <span style="background: var(--accent-coral); color: white; padding: 2px 8px; border-radius: 50%; font-size: 0.7rem;">0</span></a>
        <button class="menu-toggle" aria-label="Toggle Navigation"><i class="fas fa-bars"></i></button>
    </div>
</nav>
`;

const footerTemplate = `
<footer style="background: var(--primary-navy); padding: 100px 5% 40px; color: white;">
    <div class="container" style="display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 60px;">
        <div>
            <div class="logo-text" style="color: white; margin-bottom: 25px;">Edukids<span class="logo-dot">.</span></div>
            <p style="opacity: 0.6; font-size: 0.9rem; margin-bottom: 30px; line-height: 1.8;">Leading the way in experiential primary education across India. Let the child be the director, and the actor in his own play.</p>
            <div style="font-size: 0.95rem;">
                <p style="margin-bottom: 12px; display: flex; align-items: center; gap: 12px;"><i class="fas fa-envelope" style="color: var(--accent-orange);"></i> hello@uddaanschool.in</p>
                <p style="display: flex; align-items: center; gap: 12px;"><i class="fas fa-phone-alt" style="color: var(--accent-orange);"></i> +91 98765 43210</p>
            </div>
        </div>
        <div>
            <h4 style="margin-bottom: 25px; font-size: 1.1rem; color: white;">Quick Links</h4>
            <ul class="footer-links" style="opacity: 0.8; font-size: 0.95rem; line-height: 2.8;">
                <li><a href="about.html">Our Philosophy</a></li>
                <li><a href="activities.html">School Activities</a></li>
                <li><a href="admissions.html">Apply Now</a></li>
                <li><a href="gallery.html">Photo Gallery</a></li>
            </ul>
        </div>
        <div>
            <h4 style="margin-bottom: 25px; font-size: 1.1rem; color: white;">Resources</h4>
            <ul class="footer-links" style="opacity: 0.8; font-size: 0.95rem; line-height: 2.8;">
                <li><a href="blog.html">Parenting Tips</a></li>
                <li><a href="academics.html">Curriculum</a></li>
                <li><a href="index.html#faq">FAQ Overvew</a></li>
                <li><a href="contact.html">Campus Visit</a></li>
            </ul>
        </div>
        <div>
            <h4 style="margin-bottom: 25px; font-size: 1.1rem; color: white;">Location</h4>
            <p style="opacity: 0.6; font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px;">Sector 45, Green Valley,<br>Gurgaon, Haryana, India - 122003</p>
            <div style="display: flex; gap: 15px; font-size: 1.2rem;">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
    <div style="margin-top: 80px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; opacity: 0.5;">
        <p>© 2024 Edukids Primary School. All rights reserved.</p>
        <div style="display: flex; gap: 30px;">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </div>
    </div>
</footer>
`;

// Inject shared components
document.addEventListener('DOMContentLoaded', () => {
    const headerEl = document.getElementById('header-placeholder');
    const footerEl = document.getElementById('footer-placeholder');

    if (headerEl) headerEl.innerHTML = headerTemplate;
    if (footerEl) footerEl.innerHTML = footerTemplate;

    // Mobile Menu Toggle logic
    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Initialize Reveal on Scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
