const exceptionRoutes = {
  MISSING_CUSTOMER_NUMBER:
    "admin/ERPConfiguration/ERPConfigurationPage/#tab-1?organizationId=:organizationId&organizationName=:organizationName",
};

const getExceptionRoute = (type, params = {}) => {
  let route = exceptionRoutes[type];

  Object.entries(params).forEach(([key, val]) => {
    route = route.replace(`:${key}`, encodeURIComponent(`${val}`));
  });

  return route;
};

console.log(
  getExceptionRoute("MISSING_CUSTOMER_NUMBER", {
    organizationId: 129,
    organizationName: "Trican Well Services Inc.",
  })
);
