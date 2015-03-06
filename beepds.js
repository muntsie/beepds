/* code content section (CCS)
program beepds
set milestone
configure recognition
implement alert
program audio interaction
planned features
*/

var beepds = 0; // create beepds 
var milestone = 25;
function clickME() {
    if (beepds < milestone) {
        beepds += 1;
        document.getElementById("beepds").innerHTML = beepds;
    } else if (beepds === milestone) {
        document.getElementById("beepds-reward").innerHTML = "&#x2665;";
        alert("You reached " + milestone + " beepds");
        beepds = milestone + 1;
        milestone = milestone * 2;
    } else if (beepds > milestone) {
        beepds += 1;
        document.getElementById("beepds").innerHTML = beepds;
    }
}

var html5_audiotypes = { //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
};

function createsoundbite(sound) {
    var html5audio = document.createElement('audio');
    if (html5audio.canPlayType) { //check support for HTML5 audio
        for (var i = 0; i < arguments.length; i++) {
            var sourceel = document.createElement('source');
            sourceel.setAttribute('src', arguments[i]);
            if (arguments[i].match(/\.(\w+)$/i))
                sourceel.setAttribute('type', html5_audiotypes[RegExp.$1]);
            html5audio.appendChild(sourceel);
        }
        html5audio.load();
        html5audio.playclip = function () {
            html5audio.pause();
            html5audio.currentTime = 0;
            html5audio.play();
        };
        return html5audio;
    }
    else {
        return { playclip: function () { throw new Error("Your browser doesn't support HTML5 audio unfortunately"); } };
    }
}

//Initialize two sound clips with 1 fallback file each:

var beepdssound = createsoundbite("first.mp3");
*/

/*
function playBeepds(a, b, c, d, e){
  var items = ['first','second','third','fourth','fifth'];
for(var i=0, l = items.length; i < l; i++){
    console.log(items[i]); // onClick, play first sound file, then wait for another click
} // after items.length is done, start over
}
playBeepds(1,2,3,4,5);

output...
first
second
third
fourth
fifth

once a case (if comparison) is satisfied, it will break out of the if structure loop
beepds.com

*/