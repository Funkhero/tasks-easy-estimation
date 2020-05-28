export function requireAll(requireFile, callback) {
  const modules = {};
  requireFile.keys().forEach((name) => {
    let module = requireFile(name);
    if (module.default) module = module.default;
    if (callback) callback(module, name);
    else modules[name] = module;
  });
  return modules;
}

export function kebabCase(str, separator = '-') {
  return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`)
    .replace(/[\s_-]+/g, separator)
    .toLowerCase();
}

export function asyncTimeout(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
