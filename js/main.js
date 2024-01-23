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



    //Variables
    const characterInfo = document.querySelector('#characters');
          movies = document.querySelector('#movies');
          template = document.querySelector('#movie-template');
    let button = document.querySelector('#btn-start');
    let characterMenu = document.querySelector('#menu');
    let menubox = document.querySelector('.intro-box');

    // movieInfo = document.querySelector('.movie-info');
    
         baseURL = `https://swapi.dev/api/`
    
    

    //Functions


    //1st AJAX call
    //  function getCharacters() {
    //    fetch(`${baseURL}people`)
    //         .then(response => response.json())
    //         .then(function (response) {
    //             const people = response.movieslist;
    //             const ul = document.createElement("ul");
    //         })

    //         people.forEach(people => {
    //             const li = document.createElement("li");
    //             const a = document.createElement("a");
    //             a.textContent = people['#TITLE'];
    //                 a.dataset.review = people['#IMDB_ID'];
    //                 li.appendChild(a);
    //                 ul.appendChild(li);
    //         });
    //         characterInfo.appendChild(ul);
    //         .then(function () {
    //             const links = document.querySelectorAll("#movie-box li a");
    //             links.forEach(link => {
    //                 link.addEventListener("click", getReview);
    //             });
    //         })
    //         .catch(function (err) {
    //             console.log(err);
    //             //send message to user in DOM, there was an error
    //         });
    //  }

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