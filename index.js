/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#3F65EC"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.2,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#3F65EC",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


/* ---- particles.js2 config ---- */

particlesJS("particles-js2", {
    "particles": {
      "number": {
        "value": 40,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#3F65EC", "#763FEC"]
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 0,
          "color": "#3F65EC"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#3F65EC",
        "opacity": 0.2,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas2",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav");
var sticky = document.getElementById("particles-js");

function myFunction() {
  if (window.pageYOffset >= sticky.offsetHeight) {
    navbar.style.top = "0%";
    navbar.style.position = "fixed";
  } else {
    navbar.style.top = (sticky.offsetHeight) + "px";
    navbar.style.position = "absolute";
  }
}


document.getElementById("projectsec").style.top = (document.getElementById("particles-js").scrollHeight + document.getElementById("skills").scrollHeight + 250) + "px";
document.getElementById("contact").style.top = (document.getElementById("particles-js").scrollHeight + document.getElementById("skills").scrollHeight + document.getElementById("projectsec").scrollHeight + 250) + "px";

const form = document.querySelector("form"),
statusTxt = form.querySelector("#button-area");

form.onsubmit = ()=>{
  e.preventDefault();
   
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=> {
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      console.log(response);
    }
  }
  xhr.send();
}