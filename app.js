const app = {

    counter: 0,

    lifeCounter: 3,

    init: function() {

        document.querySelector(".cible").addEventListener("click", app.getRandomInt);
        document.querySelector(".range").addEventListener("change", app.changeSize);

        document.querySelector(".start").addEventListener("click", app.timer);

        document.querySelector(".container").addEventListener("click", app.checkLife)

        document.querySelector(".play-button-loose").addEventListener("click", app.reloadPage);

    },

    getRandomInt: function() {

        let randowWidth = Math.floor(Math.random() * 85); 
        let randowHeight = Math.floor(Math.random() * 76); 

        document.querySelector(".cible").style.top = randowHeight + "%";
        document.querySelector(".cible").style.left = randowWidth + "%";

        app.counter++;

        document.querySelector(".score").textContent = "hits = " + app.counter;

    },

    changeSize: function() {

        const rangeValue = document.querySelector(".range").value;

        document.querySelector(".cible").style.width = rangeValue + "px";
        document.querySelector(".cible").style.height = rangeValue + "px";

    },

    start: function() {

        console.log("test");
        document.querySelector(".container-before").style.display = "none";

    },

    timer: function() {


        document.querySelector(".start").style.display = "none";
        document.querySelector(".title-before").style.display = "none";
        document.querySelector(".timer-countdown").style.display = "block";


        let seconds = 3;
        console.log(seconds);
        document.querySelector(".timer-countdown").textContent = seconds;
        let countdown = setInterval(function() {
            seconds--;
            console.log(seconds);
            document.querySelector(".timer-countdown").textContent = seconds;
            if (seconds <= 0) clearInterval(countdown);
            if (seconds <= 0) {
                app.start();
            }
        }, 1000);

    },

    checkLife: function(event) {

        console.log();

        if (!event.target.classList.contains('cible')) {
            console.log("loose");
            app.lifeCounter--;

            document.querySelector("body").style.background = "rgb(194, 97, 97)";
            setTimeout(function(){
                document.querySelector("body").style.background = "";
            }, 200);

            document.querySelector(".life").textContent = "life = " + app.lifeCounter;
            if (app.lifeCounter == 0) {
                console.log("perdudosss");
                document.querySelector(".container").style.display = "none";
                document.querySelector(".title").style.display = "none";
                document.querySelector(".info_container").style.display = "none";
                app.LooseModal();
            }
        }

    },

    LooseModal: function() {

        document.querySelector(".result").textContent = "Vous avez réussi à toucher " + app.counter + " cibles";

        // Get the modal
        var modal = document.getElementById("myModal-loose");
    
        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close-loose")[0];
    
        modal.style.display = "block";
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          modal.style.display = "none";
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }
    
      },

      reloadPage: function() {

        document.location.reload();
    
      },

}


document.addEventListener("DOMContentLoaded", app.init);