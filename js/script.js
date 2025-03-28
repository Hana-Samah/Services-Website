// كود الجافاسكريبت المخصص
document.addEventListener('DOMContentLoaded', function() {
    // تنشيط عناصر التاب
    const tabElements = [].slice.call(document.querySelectorAll('button[data-bs-toggle="tab"]'));
    tabElements.forEach(function(tabEl) {
        tabEl.addEventListener('click', function(event) {
            event.preventDefault();
            const tab = new bootstrap.Tab(tabEl);
            tab.show();
        });
    });

    // تنشيط عناصر البوبوفير
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // تنشيط عناصر التولتـيب
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // إضافة تأثير التمرير السلس للروابط الداخلية
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // إضافة تأثير التمرير للشريط التنقل
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // التحقق من صحة الفورم قبل الإرسال
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form) {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // إضافة تأثير للبطاقات عند التمرير
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        observer.observe(card);
    });

    // إضافة تأثير للعناوين عند التمرير
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const headingObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    headings.forEach(heading => {
        headingObserver.observe(heading);
    });

    // إضافة تأثير للزر العلوي
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // إضافة تأثير للفيديو عند التمرير
    const videos = document.querySelectorAll('video');
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    }, { threshold: 0.5 });

    videos.forEach(video => {
        videoObserver.observe(video);
    });

    // إضافة تأثير للصور عند التمرير
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    images.forEach(image => {
        imageObserver.observe(image);
    });

    // إضافة تأثير للقوائم عند التمرير
    const lists = document.querySelectorAll('ul, ol');
    const listObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    lists.forEach(list => {
        listObserver.observe(list);
    });

    // إضافة تأثير للجداول عند التمرير
    const tables = document.querySelectorAll('table');
    const tableObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    tables.forEach(table => {
        tableObserver.observe(table);
    });

    // إضافة تأثير للأزرار عند التمرير
    const buttons = document.querySelectorAll('button, .btn');
    const buttonObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__pulse');
            }
        });
    }, { threshold: 0.1 });

    buttons.forEach(button => {
        buttonObserver.observe(button);
    });

    // إضافة تأثير للأيقونات عند التمرير
    const icons = document.querySelectorAll('.fas, .far, .fab');
    const iconObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__bounce');
            }
        });
    }, { threshold: 0.1 });

    icons.forEach(icon => {
        iconObserver.observe(icon);
    });

    // إضافة تأثير للفورم عند التمرير
    const formsToAnimate = document.querySelectorAll('form');
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    formsToAnimate.forEach(form => {
        formObserver.observe(form);
    });

    // إضافة تأثير للفوتير عند التمرير
    const footer = document.querySelector('footer');
    const footerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
            }
        });
    }, { threshold: 0.1 });

    if (footer) {
        footerObserver.observe(footer);
    }
});