// Shared Components Injection
const headerTemplate = `
<nav>
    <a href="index.html" class="logo-text">Udaaan School<span class="logo-dot">.</span></a>
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
        <button class="menu-toggle" aria-label="Toggle Navigation"><i class="fas fa-bars"></i></button>
    </div>
</nav>
`;

const footerTemplate = `
<div style="background: var(--primary-navy); padding: 100px 5% 40px; color: white;">
    <div class="container" style="display: grid; grid-template-columns: 1.5fr 1fr 1fr 1.5fr; gap: 50px;">
        <div>
            <div class="logo-text" style="color: white; margin-bottom: 25px;">Udaaan School<span class="logo-dot">.</span></div>
            <p style="opacity: 0.6; font-size: 0.9rem; margin-bottom: 30px; line-height: 1.8;">Leading the way in experiential primary education across India. Let the child be the director, and the actor in his own play.</p>
            <div style="font-size: 0.95rem;">
                <p style="margin-bottom: 12px; display: flex; align-items: center; gap: 12px;"><i class="fas fa-envelope" style="color: var(--accent-orange);"></i> admissions@udaaanschool.in</p>
                <p style="display: flex; align-items: center; gap: 12px;"><i class="fas fa-phone-alt" style="color: var(--accent-orange);"></i> +91 98765 43210</p>
            </div>
        </div>
        <div>
            <h4 style="margin-bottom: 25px; font-size: 1.2rem; color: white; font-weight: 700;">Quick Links</h4>
            <ul class="footer-links" style="opacity: 0.8; font-size: 0.95rem; line-height: 2.8;">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="activities.html">Activity</a></li>
                <li><a href="admissions.html">Admission</a></li>
            </ul>
        </div>
        <div>
            <h4 style="margin-bottom: 25px; font-size: 1.2rem; color: white; font-weight: 700;">Resources</h4>
            <ul class="footer-links" style="opacity: 0.8; font-size: 0.95rem; line-height: 2.8;">
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="academics.html">Academics</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </div>
        <div>
            <h4 style="margin-bottom: 25px; font-size: 1.2rem; color: white; font-weight: 700;">Campus Locations</h4>
            <div style="display: flex; flex-direction: column; gap: 15px;">
                <!-- Campus 1 -->
                <div style="border-radius: 12px; overflow: hidden; height: 110px; border: 1px solid rgba(255,255,255,0.1); position: relative;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112111.45564887363!2d76.9531793!3d28.4230873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1711463124586!5m2!1sen!2sin" width="100%" height="100%" style="border:0; filter: grayscale(100%) invert(90%) hue-rotate(180deg);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(30,27,75,0.85); padding: 5px 12px; font-size: 0.8rem; font-weight: 700;">Campus 1: Gurgaon</div>
                </div>
                <!-- Campus 2 -->
                <div style="border-radius: 12px; overflow: hidden; height: 110px; border: 1px solid rgba(255,255,255,0.1); position: relative;">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112040.69742095981!2d77.1264855!3d28.56133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1711463167104!5m2!1sen!2sin" width="100%" height="100%" style="border:0; filter: grayscale(100%) invert(90%) hue-rotate(180deg);" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(30,27,75,0.85); padding: 5px 12px; font-size: 0.8rem; font-weight: 700;">Campus 2: New Delhi</div>
                </div>
            </div>
            
            <div style="display: flex; gap: 15px; font-size: 1.2rem; margin-top: 25px;">
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </div>
    <div style="margin-top: 80px; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; opacity: 0.5;">
        <p>© 2024 Udaaan School. All rights reserved.</p>
        <div style="display: flex; gap: 30px;">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
        </div>
    </div>
</div>

<!-- GLOBAL FLOATING WHATSAPP WIDGET -->
<a href="https://wa.me/919876543210" target="_blank" class="whatsapp-float" style="position: fixed; bottom: 30px; right: 30px; background: #25D366; color: white; width: 65px; height: 65px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.2rem; box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5); z-index: 9999; transition: all 0.3s ease; animation: wa-bounce 2s infinite;">
   <i class="fab fa-whatsapp"></i>
</a>
<style>
.whatsapp-float:hover { transform: translateY(-5px) scale(1.05); box-shadow: 0 15px 35px rgba(37, 211, 102, 0.6); color: white; }
@keyframes wa-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
</style>
`;

// Inject shared components
document.addEventListener('DOMContentLoaded', () => {
    // Force page to start from top on reload
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

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
