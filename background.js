let seekersPatern = "https://cdn.intra.42.fr/coalition/cover/219/login-screen.jpg";
const seekerstargetUrl = "https://raw.githubusercontent.com/seekrs/art/main/wallpapers/seekrs-login.png";


let mmoussouPattern = "https://cdn.intra.42.fr/users/*/*mmoussou*";
const mmoussoutargetUrl = "https://i.redd.it/a2nga4jvjy291.png";

let lbouetPattern = "https://cdn.intra.42.fr/users/*/*lbouet*";
const lbouetTargetUrl = "https://media1.tenor.com/m/n49_tZAbdocAAAAC/lain-iwakura-sel.gif";

let kiroussaPattern = "https://cdn.intra.42.fr/users/*/*kiroussa*";
const kroussarTargetUrl = "https://cdn.intra.42.fr/users/5b1f24ed85722759e9a759c3022ad02b/kroussar.jpg";

function seekersRedirect(requestDetails) {
  if (requestDetails.url === seekerstargetUrl) {
    return;
  }
  return {
    redirectUrl: seekerstargetUrl,
  };
}

function mmoussouRedirect(requestDetails) {
  if (requestDetails.url === mmoussoutargetUrl) {
    return;
  }
  return {
    redirectUrl: mmoussoutargetUrl,
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

function kroussarRedirect(requestDetails) {
  if (requestDetails.url === kroussarTargetUrl) {
    return;
  }
  return {
    redirectUrl: kroussarTargetUrl,
  };
}

// ---------------------------------------------------

browser.webRequest.onBeforeRequest.addListener(
  seekersRedirect,
  { urls: [seekersPatern], types: ["image"] },
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
  kroussarRedirect,
  { urls: [kiroussaPattern], types: ["image"] },
  ["blocking"],
);
