const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        console.log(entry)
        if(entry.isIntersecting){

            entry.target.classList.add('show');
        
        } else {

            entry.traget.classList.remove('show');

        }


        });

    });

const hiddenElements = document.querySelectorAll('.container');
hiddenElements.forEach((el) => observer.observe(el));
