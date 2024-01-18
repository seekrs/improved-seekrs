class OverrideTarget {
  constructor(targetData) {
    this.type = targetData.type;
    this.value = targetData.value;
    this.grabTypes = targetData.grabTypes;
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
    if (this.grabTypes !== null && this.grabTypes !== undefined) {
      return this.grabTypes;
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
  constructor(overrideData) {
    this.target = new OverrideTarget(overrideData.target);
    this.replaceBy = overrideData.replaceBy;
  }

  apply() {
    chrome.webRequest.onBeforeRequest.addListener(
      (req) => {
        if (req.url === this.replaceBy) return {};
        return { redirectUrl: this.replaceBy };
      },
      this.target.filter,
      ["blocking"],
    );
  }
}

async function applyWebFilters() {
  const requestURL = "https://raw.githubusercontent.com/seekrs/improved-seekrs/main/data/requests-overrides.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const overrides = await response.json();

  for (override in overrides) {
    new Override(overrides[override]).apply();
  }
}

applyWebFilters();
