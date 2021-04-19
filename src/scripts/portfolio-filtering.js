const portfolioImages = document.querySelectorAll('img[data-filter]');
const portfolioBtn = document.getElementById('portfolio-btn').children;

// show all images on  first load
portfolioImages.forEach(function (image) {
    image.classList.add('d-block');
});

// all categories when click
[...portfolioBtn].forEach(function (btn) {
    btn.addEventListener('click', function () {
        // active class control
        for (let i = 0; i < portfolioBtn.length; i++) {
            portfolioBtn[i].classList.remove('active');
        }
        btn.classList.add('active');

        // all images sorting by category
        portfolioImages.forEach(function (element) {
            // sorting with general category
            if (btn.innerText.toLowerCase() === 'all') {
                portfolioImages.forEach(function (image) {
                    image.classList.add('d-block');
                    image.style.animation =
                        'imgAnimateGrowingAll 0.8s forwards';
                });
            } else if (
                // sorting with individual category
                element.getAttribute('data-filter') ===
                btn.innerText.toLowerCase()
            ) {
                element.classList.add('d-block');
                element.style.animation = 'imgAnimateGrowing 0.8s forwards';
            } else {
                element.classList.remove('d-block');
            }
        });
    });
});
