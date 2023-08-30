var a = "jAMIL ahemd";
console.log(a.toLowerCase());
console.log(a.toUpperCase());
function titlecase(a) {
    var name = a.toLowerCase().split(" ");
    for (var i = 0; i < name.length; ++i) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return (name.join(" "));
}
console.log(titlecase(a));
