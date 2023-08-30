"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.namesofpersons = void 0;
exports.namesofpersons = ["hasnat", "awais", "Ahsan", "Waleed"];
for (var i = 0; i < exports.namesofpersons.length; ++i) {
    console.log("hello", exports.namesofpersons[i], "today i arranged big dinner table");
}
exports.namesofpersons.splice(0, 1, "abdul hanan");
exports.namesofpersons.splice(2, 1, "yaseen");
exports.namesofpersons.push("yahya");
for (var j = 0; j < exports.namesofpersons.length; ++j) {
    console.log("hello", exports.namesofpersons[j], "i invited u in today night dinner");
}
