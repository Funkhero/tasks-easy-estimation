/**
 *  Функция проверки, возвращает массив с ошибками или пустой массив при их отсутствии
 * @param rules[function]
 * @param value
 */
export function validate(rules, value) {
  return rules.map((rule) => {
    const validationMethod = rule?.validator || rule;
    const validationErrorMessage = rule?.customMessage;
    const error = validationMethod(value);

    return error && (validationErrorMessage || error);
  }).filter((checkedValue) => checkedValue);
}

export function required(value) {
  return !!value ? false : 'Required field';
}

export function length(min, max) {
  return function (value) {
    if (!value) return false;
    if (typeof value === 'number') value = value.toString();
    if (value.length < min) return `Field content must be at least ${min} characters long`;
    if (max && value.length > max) return `The field content must be no longer than ${max} characters`;
    return false;
  };
}

export function email(value) {
  if (!value) return false;
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(value) ? false : 'Invalid e-mail format';
}

export function equalPassword(otherPassword) {
  return function (password) {
    return password !== otherPassword ? 'Passwords do not match' : false;
  };
}
