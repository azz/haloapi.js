function toKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, function (_, a, b) {
        return a + "-" + b.toLowerCase();
    });
}
module.exports = function schema(service, path) {
    return function (target, key) {
        if (!path)
            path = key;
        target[key].schema = service + "/" + toKebabCase(path) + ".schema.json";
    };
};
