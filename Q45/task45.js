function car(manufacturer, model, properties, _a) {
    var a = { manufacturer: manufacturer, model: model,
    };
    for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
        var _b = properties_1[_i], key = _b[0], value = _b[1];
        a[key] = value;
    }
    return (a);
}
console.log(car("toyota", "gli", ["colour", "red"], ["optional", "sunroof"]));
