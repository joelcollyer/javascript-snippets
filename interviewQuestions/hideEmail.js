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

// Attempt 2 - After discovering .replace() accepts a function as the 2nd param
const hideEmailRegexp = (str = "", hideFull = false) => {
  return str.replace(
    /^.(.*?).@.(.*?)[^\.]((\.[a-z]+)+$)/i,
    (email, local, domain) => {
      let result = email;
      result = result.replace(local, "*".repeat(local.length));
      if (hideFull) result = result.replace(domain, "*".repeat(domain.length));
      return result;
    }
  );
};

const hideFull = true;
console.log(hideEmailRegexp("contact@joelcollyer.com")); // c*****t@joelcollyer.com
console.log(hideEmailRegexp("contact@joel-collyer.co.uk", hideFull)); // c*****t@j*********r.co.uk
console.log(hideEmailRegexp("it.support@somedomain.ninja", hideFull)); // i********t@s********n.ninja
