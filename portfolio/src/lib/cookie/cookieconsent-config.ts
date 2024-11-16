import * as CookieConsent from 'vanilla-cookieconsent';

const config: CookieConsent.CookieConsentConfig = {
  hideFromBots: true,
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom left",
      equalWeightButtons: true,
      flipButtons: false
    },
    preferencesModal: {
      layout: "box",
      equalWeightButtons: true,
      flipButtons: false,
      position: "right",
    }
  },
  categories: {
    necessary: {
      readOnly: true
    },
    analytics: {}
  },
  language: {
    default: "en",
    autoDetect: "browser",
    translations: {
      de: {
        consentModal: {
          title: "Hallo Reisende, es ist Kekszeit!",
          description: "Diese Website verwendet Cookies, um Ihnen das beste Erlebnis auf unserer Website zu ermöglichen.",
          closeIconLabel: "",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          showPreferencesBtn: "Einstellungen verwalten",
          footer: "<a href=\"#link\">Datenschutz</a>\n<a href=\"#link\">Bedingungen und Konditionen</a>"
        },
        preferencesModal: {
          title: "Präferenzen für die Zustimmung",
          closeIconLabel: "Modal schließen",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          savePreferencesBtn: "Einstellungen speichern",
          serviceCounterLabel: "Dienstleistungen",
          sections: [
            {
              title: "Verwendung von Cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              title: "Streng Notwendige Cookies <span class=\"pm__badge\">Immer Aktiviert</span>",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "necessary"
            },
            {
              title: "Analytische Cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "analytics"
            },
            {
              title: "Weitere Informationen",
              description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
            }
          ]
        }
      },
      en: {
        consentModal: {
          title: "Hello traveller, it's cookie time!",
          description: "This website uses cookies to ensure you get the best experience on our website.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
          footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
        },
        preferencesModal: {
          title: "Consent Preferences Center",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close modal",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title: "Cookie Usage",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "necessary"
            },
            {
              title: "Analytics Cookies",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              linkedCategory: "analytics"
            },
            {
              title: "More information",
              description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
            }
          ]
        }
      }
    }
  }
};

// const config: CookieConsent.CookieConsentConfig = {
//   categories: {
//     necessary: {
//       enabled: true,
//       readOnly: true
//     },
//     analytics: {
//       autoClear: {
//         cookies: [
//           {
//             name: /^_ga/ // regex: match all cookies starting with '_ga'
//           },
//           {
//             name: '_gid' // string: exact cookie name
//           }
//         ]
//       },

//       // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
//       services: {
//         ga: {
//           label: 'Google Analytics',
//           onAccept: () => { },
//           onReject: () => { }
//         },
//         another: {
//           label: 'Another service',
//           onAccept: () => { },
//           onReject: () => { }
//         }
//       }
//     },
//     ads: {}
//   },

//   onFirstConsent: ({ cookie }) => {
//     console.log('onFirstConsent fired', cookie);
//   },

//   onConsent: ({ cookie }) => {
//     console.log('onConsent fired!', cookie, CookieConsent.getUserPreferences());
//   },

//   onChange: ({ changedCategories, changedServices }) => {
//     console.log('onChange fired!', changedCategories, changedServices);
//   },

//   onModalReady: ({ modalName }) => {
//     console.log('ready:', modalName);
//   },

//   onModalShow: ({ modalName }) => {
//     console.log('visible:', modalName);
//   },

//   onModalHide: ({ modalName }) => {
//     console.log('hidden:', modalName);
//   },

//   guiOptions: {
//     consentModal: {
//       layout: 'box inline',
//       position: 'bottom left',
//       equalWeightButtons: true,
//       flipButtons: false
//     },
//     preferencesModal: {
//       layout: 'box',
//       equalWeightButtons: true,
//       flipButtons: false
//     }
//   },

//   language: {
//     default: 'en',
//     translations: {
//       en: {
//         consentModal: {
//           title: 'We use cookies',
//           description:
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//           acceptAllBtn: 'Accept all',
//           acceptNecessaryBtn: 'Reject all',
//           showPreferencesBtn: 'Manage Individual preferences',
//           // closeIconLabel: 'Reject all and close modal',
//           footer: `
// 							<a href="#path-to-impressum.html" target="_blank">Impressum</a>
// 							<a href="#path-to-privacy-policy.html" target="_blank">Privacy Policy</a>
// 					`
//         },
//         preferencesModal: {
//           title: 'Manage cookie preferences',
//           acceptAllBtn: 'Accept all',
//           acceptNecessaryBtn: 'Reject all',
//           savePreferencesBtn: 'Accept current selection',
//           closeIconLabel: 'Close modal',
//           serviceCounterLabel: 'Service|Services',
//           sections: [
//             {
//               title: 'Your Privacy Choices',
//               description: `In this panel you can express some preferences related to the processing of your personal information. You may review and change expressed choices at any time by resurfacing this panel via the provided link. To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Reject all” button and confirm you want to save your choices.`
//             },
//             {
//               title: 'Strictly Necessary',
//               description:
//                 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

//               //this field will generate a toggle linked to the 'necessary' category
//               linkedCategory: 'necessary'
//             },
//             {
//               title: 'Performance and Analytics',
//               description:
//                 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
//               linkedCategory: 'analytics',
//               cookieTable: {
//                 caption: 'Cookie table',
//                 headers: {
//                   name: 'Cookie',
//                   domain: 'Domain',
//                   desc: 'Description'
//                 },
//                 body: [
//                   {
//                     name: '_ga',
//                     domain: 'yourdomain.com',
//                     desc: 'Description 1'
//                   },
//                   {
//                     name: '_gid',
//                     domain: 'yourdomain.com',
//                     desc: 'Description 2'
//                   }
//                 ]
//               }
//             },
//             {
//               title: 'More information',
//               description:
//                 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
//             }
//           ]
//         }
//       }
//     }
//   }
// };

export default config;
