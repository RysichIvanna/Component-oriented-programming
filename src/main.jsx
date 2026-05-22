import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import CookieConsent from "react-cookie-consent";
import App from "./App";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <CookieConsent
      location="bottom"
      buttonText="Прийняти"
      cookieName="userConsentCookie"
      style={{ background: "#2B373B", zIndex: 999 }}
      buttonStyle={{ color: "#4e503b", fontSize: "14px", fontWeight: "bold" }}
      expires={150}
    >
      Цей проєкт використовує файли cookie для забезпечення функціональності. 
      Перегляньте нашу <a href="/PRIVACY.md" style={{ color: "#fff" }}>Політику конфіденційності</a>.
    </CookieConsent>
  </Provider>
);