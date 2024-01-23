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
    const characterInfo = document.querySelector('.character-info');
    // movieInfo = document.querySelector('.movie-info');
    // template = document.querySelector('#movie-template').content;
    // baseURL = `https://swapi.dev/api/`

    let button = document.querySelector('#btn-start');
    let characterMenu = document.querySelector('#menu');
    let menubox = document.querySelector('.intro-box');


    //Functions


    //1st AJAX call
    // function getCharacters() {
    //     fetch(`${baseURL}people`)
    //         .then(response => response.json())

    // }

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



    //onclick load character menu

    // function loadCharacterMenu() {
    //     console.log('load character menu');
    // }



    //Event Listeners
    // start.addEventListener('click', getCharacters);
    // menu.addEventListener('click', loadCharacterMenu);
    button.addEventListener('click', hideMenu);
    button.addEventListener('click', showMenu);







})();