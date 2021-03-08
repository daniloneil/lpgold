// preloader
(function () {
    document.body.onload = function () {
        setTimeout(function () {
            let preloader = document.getElementById('load');
            if (!preloader.classList.contains('success')) {
                preloader.classList.add('success');
            }
        }, 1500)
    }
})();

// Get the modal
var modal = document.getElementById('window_1');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};