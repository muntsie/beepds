/* code content section (CCS)
program beepds
set milestone
configure recognition
implement alert
program audio interaction
planned features
*/

// create variables to hold beepds and milestone
var beepds = 0;
var milestone = 25;
var reward = "&#x2665;";
milestone_count = 2;
// create method to respond to various happenings
function theReward() {
    if (milestone_count = 2){
        reward = "&#x2665;" + "&#x2665;";
    };
function clickME() {
    if (beepds < milestone) { // if total beepds is less than milestone
        beepds += 1; // then increment beepds
        document.getElementById("beepds-counter").innerHTML = beepds; // and print the total number of beepds to the view
    } else (beepds === milestone) { // if the total beepds is equal to the milestone
        document.getElementById("beepds-reward").innerHTML = "&#x2665;"; // print a symbol to the reward area
        alert("You reached " + beepds + "beepds!"); // and throw an alert that says you reached the milestone!
        beepds = milestone + 1; // at this point, set total beepds to the milestone plus one
        milestone = milestone * 2; // and, set the milestone to the milestone * 2
        milestone_count += milestone_count;
    }
};

var html5_audiotypes = { //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
};

function createsoundbite(sound) {
    var html5audio = document.createElement('beepds');
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
beepeeb.com

*/