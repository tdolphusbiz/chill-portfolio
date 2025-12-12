document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
    const skillTags = document.querySelectorAll('.skill-tag');
    const skillDetails = document.querySelectorAll('.skill-detail');

    function openMobileMenu() {
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    mobileMenuToggle.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });

    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const targetSkill = tag.dataset.skill;

            skillTags.forEach(btn => btn.classList.toggle('active', btn === tag));
            skillDetails.forEach(detail => {
                detail.classList.toggle(
                    'active',
                    detail.dataset.skill === targetSkill
                );
            });
        });
    });
});
