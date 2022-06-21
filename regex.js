// Optionally remove http, https, and trailing slashes
console.log(
  "http://test-api.lodgelink.com/".replace(/(^(http(s)?:\/\/)|(\/$))/g, "")
);
