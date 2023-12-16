class OverrideTarget {
  constructor(targetData) {
    this.type = targetData.type;
    this.value = targetData.value;
  }

  get url() {
    if (this.type == "userProfile") {
      return "https://cdn.intra.42.fr/users/*/*" + this.value + "*";
    }
    return this.value;
  }

  get types() {
    if (this.type === "userProfile") {
      return ["image"];
    }
    if (this.type === "pattern") {
      if (this.url.endsWith(".jpg") || this.url.endsWith(".png") || this.url.endsWith(".jpeg") || this.url.endsWith(".gif") || this.url.endsWith(".webp")) {
        return ["image"];
      }
    }
    return null;
  }

  get filter() {
    if (this.types === null) {
      return { urls: [this.url] };
    }
    return { urls: [this.url], types: this.types };
  }
}

class Override {
  constructor(target, replaceBy) {
    this.target = new OverrideTarget(target);
    this.replaceBy = replaceBy;
  }

  apply() {
    console.log("> Filter: " + this.target.filter);
    browser.webRequest.onBeforeRequest.addListener(
      (req) => {
        if (req.url === this.replaceBy) return {};
        return { redirectUrl: this.replaceBy };
      },
      this.target.filter,
      ["blocking"],
    );
    console.log("✅ Applied redirection for " + this.target.url + " -> " + this.replaceBy);
  }
}

async function applyWebFilters() {
  const requestURL = "https://raw.githubusercontent.com/seekrs/improved-seekrs/feature/json-backgrounds/data/requests-overrides.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const overrides = await response.json();

  for (override in overrides) {
    new Override(override).apply();
  }
}

applyWebFilters();
