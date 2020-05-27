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
