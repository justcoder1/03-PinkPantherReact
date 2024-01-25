import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from 'react-intl';
import App from "./App";
import "./index.css";
import { DEFAULT_LOCALE } from './lang/locales';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faVolumeUp, faPaw, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faYoutube,faWikipediaW,faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faVolumeUp, faPaw, faBars, faFacebookF,faYoutube,faWikipediaW,faTwitter);

const UncaughtSuspense: React.FC = () => {
  console.error(`Uncaught suspense!!!
A application level fallback has been used to wrap the entire application in a loading state.
This allows application to recover, but user experience is severly impacted.
Investigate and use Suspense nearer the async request.
`);
  return <>Loading...</>;
};

const locale = DEFAULT_LOCALE;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
     <Suspense fallback={<UncaughtSuspense />}>
        <IntlProvider locale={locale} key={locale} defaultLocale={DEFAULT_LOCALE}>
          <App />
        </IntlProvider>
      </Suspense>
  </React.StrictMode>
);
