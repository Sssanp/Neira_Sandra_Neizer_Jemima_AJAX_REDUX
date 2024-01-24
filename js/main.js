(() => {

    //SWAPI .dev

    //- How to get to the character depending on the name
    //- Each movie will have its id
    //- First ajax call
    //- make a second API call with the films

    //Plan

    //- var for character box
    //- var for the movie info box
    //- var base URL
    //- var template tag
    //- 2 functions
    //- 1st AJAX call
    //- Fetch
    //- Create a list
    //- Populate List
    //- Attach event listeners “click”
    //- Dat attribute = film id

    //2nd Ajax call

    //- Capture  that film id
    //- second AJAX call with that film id
    //- output opening crawl
    //- Grab the episode → use that to match an image

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
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    const film = (character['films'])

                    console.log(character['name']);
                    console.log(character['films']);


                    // console.log(film.length)

                    a.textContent = character['name'];

                    if (film && film.length < 2) {
                        a.dataset.film = film[0]

                    } else {
                        a.dataset.film = film[1]
                    }
                    //    a.dataset.film = film[1];
                    // a.dataset.movie = character['#SWAPI_ID'];

                    li.appendChild(a);
                    ul.appendChild(li);
                });

                characterInfo.appendChild(ul);
            })

            .then(function () {
                const links = document.querySelectorAll("#characters li a");
                links.forEach(link => {
                    link.addEventListener("click", getMovie);
                });
            })

            .catch(error => {
                console.log(error);
            });
    };

    function getMovie(e) {

        const filmID = e.currentTarget.dataset.film;

        // fetch(`${baseURL}?tt=${filmID}`)
        fetch(`${filmID}`)
            .then(response => response.json())
            .then(function (response) {
                filmCon.innerHTML = "";
                // const filmBody = ;
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
                // add message to user that is written in the DOM
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


    //Event Listeners
    button.addEventListener('click', hideMenu);
    button.addEventListener('click', showMenu);

    getPeople();

})();