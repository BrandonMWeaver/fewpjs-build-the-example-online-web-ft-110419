// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!

for (const glyph of document.querySelectorAll(".like-glyph")) {
  glyph.addEventListener("click", like);
}

function like(event) {
  mimicServerCall().then(function(response) {
    event.target.innerHTML = event.target.innerHTML == EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
    event.target.className = event.target.innerHTML == EMPTY_HEART? '' : "activated-heart";
  }).catch(function(error) {
    document.querySelector("#modal").className = '';
    setTimeout(function() { document.querySelector("#modal").className = "hidden" }, 5000);
  });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
