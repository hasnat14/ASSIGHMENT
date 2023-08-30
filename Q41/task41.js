"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.show_magician = void 0;
var famous_magician = ["Magic Man Fred.", "Amazing Ace.", "Mystic Max.", "Illusionist Ivan.",];
function show_magician(name) {
    for (var i = 0; i < famous_magician.length; ++i) {
        console.log(famous_magician[i]);
    }
}
exports.show_magician = show_magician;
show_magician(famous_magician);
