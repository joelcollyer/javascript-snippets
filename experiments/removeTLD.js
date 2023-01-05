const emailAddresses = ["contact@joelcollyer.com", "example@somebritishplace.co.uk", "test@example.org"];

const results = emailAddresses.map((email) => email.trim().replace(/((\.[a-z]+)+$)/gi, ""));

console.log(results);
