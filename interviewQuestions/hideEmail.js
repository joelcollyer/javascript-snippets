/**
 * Redact all the characters of a string except for the first and last characters
 * @param {string} str The string to be obfuscated
 * @param {string=} [char=*] What to replace redacted portions of the string with
 * @returns {string}
 */
const redact = (str = "", char = "*") => {
  return Array.from({ length: str.length }, (_, i) =>
    i === 0 || i === str.length - 1 ? str[i] : char
  ).join("");
};

/**
 * Obfuscate the local-part and (optionally) the domain of an email address
 * @param {string} str An email address
 * @param {boolean=} [hideFull=false] Whether to obfuscate the domain
 * @returns {string}
 */
const hideEmail = (str = "", hideFull = false) => {
  const [, local, domain, tld] = str.match(/^(.*)@([^.]*)((.[a-z]+)+$)/);
  return `${redact(local)}@${hideFull ? redact(domain) : domain}${tld}`;
};

const hideFull = true;
console.log(hideEmail("contact@joelcollyer.com")); // c*****t@joelcollyer.com
console.log(hideEmail("contact@joel-collyer.co.uk", hideFull)); // c*****t@j*********r.co.uk
console.log(hideEmail("it.support@somedomain.ninja", hideFull)); // i********t@s********n.ninja
