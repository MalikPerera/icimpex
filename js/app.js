function int() {
    const slides = document.querySelectorAll('.slide');
    const pages = document.querySelectorAll(".page");
    const backgrounds = [
        `radial-gradient(#2B3760, #0B1023)`,
        `radial-gradient(#4E3022, #161616)`,
        `radial-gradient(#4E4342, #161616)`
    ];

    let current =0;
    let scrollSlide = 0;

    slides.forEach((slide,index) => {
        slide.addEventListener('click',function () {
            changeDots(this);
            nextSlide(index);
            scrollSlide = index;
        });
    });

    function changeDots(dot) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dot.classList.add("active");

    }

    function nextSlide(pageNumber) {
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextLeft = nextPage.querySelectorAll('')

    }
}

int();