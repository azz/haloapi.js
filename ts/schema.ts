function toKebabCase(str: string) {
  return str.replace(/([a-z])([A-Z])/g, function(_, a, b) {
    return a + "-" + b.toLowerCase();
  });
}

export = function schema(service: string, path?: string) {
    return function (target: any, key: string) {
        if (!path) path = key;
        target[key].schema = `${service}/${toKebabCase(path)}.schema.json`;
    };
};