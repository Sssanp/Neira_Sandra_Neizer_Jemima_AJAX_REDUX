(() => {

    //Space Ship Animation

    gsap.registerPlugin(ScrollTrigger);

    const space_ship = document.querySelectorAll(".space_ship");

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.animation_container',
            pin: true,
            markers: false,
            end: '100% 100%',
            scrub: true,
        },
    });


    //TIMELINE


    tl.to(space_ship, { scale: 0.5, y: '30vh', duration: 4 })
    tl.to(space_ship, { rotate: 360, duration: 3.5 });

    //when timeline is complete, hide the animation container
    tl.eventCallback("onComplete", function () {
        document.querySelector('.animation_container').style.display = "none";
    });

    //intro-box pop up when timeline is complete

    tl.eventCallback("onComplete", function () {
        document.querySelector('.intro-box').style.display = "block";
    }

    );


    //Variables
    const characterInfo = document.querySelector('#characters');
    const filmCon = document.querySelector('#film-con');
    const filmTemplate = document.querySelector('#film-template');

    let button = document.querySelector('#btn-start');
    let characterMenu = document.querySelector('#menu');
    let menubox = document.querySelector('.intro-box');
    const baseURL = `https://swapi.dev/api/`;


    //Functions

    //1st AJAX call
    function getPeople() {

        fetch(`${baseURL}people`)

            .then(response => response.json())

            .then(function (response) {
                const people = response.results;
                const ul = document.createElement('ul');

                people.forEach(character => {
                    const select = document.querySelector('#search');
                    const option = document.createElement('option');
                    option.value = character['name'];
                    option.innerHTML = character['name'];
                    select.appendChild(option);


                    const film = (character['films']);


                    if (film && film.length < 2) {
                        option.dataset.film = film[0]

                    } else {
                        option.dataset.film = film[1];
                    }
                });
            })

            .then(function () {
                let searchbutton = document.querySelector('#submit');
                searchbutton.addEventListener('click', getMovie);

            })

            .catch(error => {
                console.log(error);
            });
    };

    function getMovie(e) {

        const searchValue = document.querySelector('#search option:checked');
        const filmID = searchValue.dataset.film;
        console.log("hey: " + filmID);



        const img = document.createElement('img');
        img.src = `images/${searchValue.value}.jpeg`;




        const ul = document.createElement('ul');

        const li = document.createElement('li');

        li.appendChild(img);
        ul.appendChild(li);


        characterInfo.appendChild(ul);








        fetch(`${filmID}`)
            .then(response => response.json())
            .then(function (response) {
                filmCon.innerHTML = "";
                const template = document.importNode(filmTemplate.content, true);
                const filmBody = template.querySelector(".film-description");
                filmBody.innerHTML = response.opening_crawl;
                const filmTitle = template.querySelector(".filmTitle");
                filmTitle.innerHTML = response.title;

                const filmImage = template.querySelector(".filmImage");
                filmImage.src = `images/${response.title}.jpeg`;
                filmCon.appendChild(template);

            })

            .catch((error) => {
                console.log(error);
            });

    }

    //hide firstmenubox until start is clicked
    function hideMenu() {
        console.log('hide menu');
        menubox.style.display = "none";
    }

    // Show menubox when start is clicked
    function showMenu() {
        console.log('show menu');
        characterMenu.style.display = "block";
    }


    button.addEventListener('click', hideMenu);
    button.addEventListener('click', showMenu);

    getPeople();



})();