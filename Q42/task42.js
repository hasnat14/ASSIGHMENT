"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_great = void 0;
var famous_magician = ["Magic Man Fred.", "Amazing Ace.", "Mystic Max.", "Illusionist Ivan."];
function make_great(names) {
    for (var i = 0; i < famous_magician.length; ++i) {
        console.log("great", famous_magician[i]);
    }
}
exports.make_great = make_great;
make_great(famous_magician);
//import{ show_magician }from '../Q41'
//show_magician
