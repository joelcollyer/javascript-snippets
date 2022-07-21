// Optionally remove http, https, and trailing slashes
console.log(
  "http://test-api.lodgelink.com/".replace(/(^(http(s)?:\/\/)|(\/$))/g, "")
);

// Split an email into its localPart, domain, and tld
console.log(
  "test+account.123@example-domain.co.uk".match(/^(.*?)@(.*?)((\.[a-z]+)+$)/i)
);
