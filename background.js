let seekersPattern = "https://cdn.intra.42.fr/coalition/cover/219/login-screen.jpg";
const seekersTargetUrl = "https://raw.githubusercontent.com/seekrs/art/main/wallpapers/seekrs-login.png";


let mmoussouPattern = "https://cdn.intra.42.fr/users/*/*mmoussou*";
const mmoussouTargetUrl = "https://media1.tenor.com/m/LcRQGhKX1AQAAAAd/ma-r%C3%A9action-sinc%C3%A8re-my-honest-reaction.gif";

let lbouetPattern = "https://cdn.intra.42.fr/users/*/*lbouet*";
const lbouetTargetUrl = "https://media1.tenor.com/m/n49_tZAbdocAAAAC/lain-iwakura-sel.gif";

let kiroussaPattern = "https://cdn.intra.42.fr/users/*/*kiroussa*";
const kiroussaTargetUrl = "https://media1.tenor.com/m/1G3k1aX57IUAAAAd/brain-damage.gif";

function seekersRedirect(requestDetails) {
  if (requestDetails.url === seekersTargetUrl) {
    return;
  }
  return {
    redirectUrl: seekersTargetUrl,
  };
}

function mmoussouRedirect(requestDetails) {
  if (requestDetails.url === mmoussouTargetUrl) {
    return;
  }
  return {
    redirectUrl: mmoussouTargetUrl,
  };
}

function lbouetRedirect(requestDetails) {
  if (requestDetails.url === lbouetTargetUrl) {
    return;
  }
  return {
    redirectUrl: lbouetTargetUrl,
  };
}

function kiroussaRedirect(requestDetails) {
  if (requestDetails.url === kiroussaTargetUrl) {
    return;
  }
  return {
    redirectUrl: kiroussaTargetUrl,
  };
}

// ---------------------------------------------------

browser.webRequest.onBeforeRequest.addListener(
  seekersRedirect,
  { urls: [seekersPattern], types: ["image"] },
  ["blocking"],
);

browser.webRequest.onBeforeRequest.addListener(
  mmoussouRedirect,
  { urls: [mmoussouPattern], types: ["image"] },
  ["blocking"],
);

browser.webRequest.onBeforeRequest.addListener(
  lbouetRedirect,
  { urls: [lbouetPattern], types: ["image"] },
  ["blocking"],
);

browser.webRequest.onBeforeRequest.addListener(
  kiroussaRedirect,
  { urls: [kiroussaPattern], types: ["image"] },
  ["blocking"],
);