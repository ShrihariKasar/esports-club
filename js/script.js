// Hamburger Menu Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    this.classList.toggle("is-active");
});

// === SCROLL ANIMATIONS ===
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Prevent re-triggering
            }
        });
    }, { threshold: 0.2 }); // Lower threshold for earlier trigger

    testimonials.forEach(testimonial => {
        observer.observe(testimonial);
    });
});

// === SMOOTH SCROLL FOR NAVIGATION ===
// === SMOOTH SCROLL FOR NAVIGATION ===
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");
        
        // Check if it's an internal link (no "#" in the href)
        if (href.includes("#")) {
            event.preventDefault(); // Prevent default anchor click for internal links

            const targetId = href.substring(1); // Extract section ID
            const targetSection = document.getElementById(targetId); // Get the target section

            // Scroll to the target section if found
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        } else {
            // Allow normal navigation for external links
            window.location.href = href;
        }

        // Close the menu after clicking a link (for mobile view)
        const navLinks = document.querySelector(".nav-links"); // Get nav links
        const hamburger = document.getElementById("hamburger"); // Get hamburger menu
        navLinks.classList.remove("active");
        hamburger.classList.remove("is-active");
    });
});
// === ADD SCROLL AND CLOSE FUNCTIONALITY FOR VICE PRESIDENT, PRESIDENT, AND OTHERS ===
// Smooth scroll for internal navigation (targeting sections by id)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (event) {
        // Prevent default only for internal anchors (starting with #)
        if (this.getAttribute("href").startsWith("#")) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80, // Adjust for navbar height
                    behavior: "smooth"
                });
            }
        }
    });
});

// === DROPDOWN TOGGLE FOR MOBILE OR SMALL SCREEN SIZES ===
document.querySelectorAll('.dropdown-toggle').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent link redirection
        const dropdownMenu = this.nextElementSibling; // Get the next <ul> (dropdown menu)
        dropdownMenu.classList.toggle('show'); // Toggle visibility of the dropdown menu
    });
});
// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjust scroll position if necessary
                behavior: 'smooth',
            });
        }
        
        // Optional: Close the hamburger menu after a link is clicked
        document.querySelector('.nav-links').classList.remove('active');
        document.getElementById('hamburger').classList.remove('is-active');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    let currentStep = 0;

    function showStep(step) {
        steps.forEach((s, i) => {
            s.classList.toggle("active", i === step);
        });
    }

    nextBtns.forEach(btn => btn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    }));

    prevBtns.forEach(btn => btn.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    }));

    document.getElementById("message").addEventListener("input", function() {
        document.getElementById("charCount").innerText = `${this.value.length}/200`;
    });

    showStep(currentStep);
});