function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "ilove typescript"; }
    return (size + message);
}
console.log(make_shirt());
console.log(make_shirt("medium"));
console.log(make_shirt("small", "i hate typescript"));
