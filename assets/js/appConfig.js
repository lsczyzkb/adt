var appConfig = {
  production: false,
  application: {
    name: "Wms",
    logoUrl: "",
    tokenKey: "access-token",
    loginUrl: "/Account/Login",
    indexUrl: "/Dashboard/Index",
    printUrl: "http://127.0.0.1:100",
    jsonSchemaUrl: "http://localhost:21022/swagger/openapi.json",
    tenantKey: "Abp.TenantId",
    cultureNameKey: "Abp.Localization.CultureName",

    nswagUrl: "/swagger",
    reDocoUrl: "/doc",
  },
  localization: {
    languages: [
      {
        text: "简体中文",
        abbr: "🇨🇳",
        name: "zh-Hans",
      },
      {
        text: "English",
        abbr: "🇬🇧",
        name: "en",
      },
    ],
    currentLanguage: {},
  },

  apis: {
    default: {
      url: "http://localhost:21022",
    },
    
  },
  authCodeFlowConfig: {
    issuer: "https://idsvr4.azurewebsites.net",
    redirectUri: window.location.origin + "/Dashboard/Index",
    clientId: "spa",
    responseType: "code",
    scope: "openid profile email offline_access api",
    showDebugInformation: true,
    timeoutFactor: 0.01,
  },
};
window["__appConfig"] = appConfig;
