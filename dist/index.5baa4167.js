// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"adBpN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"igcvL":[function(require,module,exports) {
var _revealContentJs = require("./script/revealContent.js");
var _gsapAnimationJs = require("./script/gsapAnimation.js");
var _mapJs = require("./script/map.js");
var _reservationPopupJs = require("./script/reservationPopup.js");
var _validateDataJs = require("./script/validateData.js");
var _sliderJs = require("./script/slider.js");
const sliderMQ = window.matchMedia("(max-width: 40.2em)");
const tp = document.querySelector(".testimonials-tp");
window.addEventListener("DOMContentLoaded", ()=>{
    (0, _gsapAnimationJs.gsapAnimation)();
    (0, _mapJs.map)();
    if (sliderMQ.matches) (0, _sliderJs.slider)();
});
const btnsContainer = document.querySelector(".about__left-side");
btnsContainer.addEventListener("click", function(event) {
    event.preventDefault();
    const clickedBtn = event.target.closest(".about__button");
    if (!clickedBtn) return;
    (0, _revealContentJs.revealContent)(clickedBtn);
});
const eventContainer = document.querySelector(".events");
eventContainer.addEventListener("click", function(event) {
    event.preventDefault();
    const clickedEvent = event.target.closest(".events__event-box");
    if (!clickedEvent) return;
    (0, _revealContentJs.revealContent)(clickedEvent, "event");
});
const reservationBtn = document.querySelectorAll(".reservation-btn");
const closeBtn = document.querySelector(".close-popup");
const overlay = document.querySelector(".overlay");
const userPhone = document.getElementById("phone");
const userDate = document.getElementById("date");
const formBtn = document.querySelector(".form-btn");
const successAlert = document.querySelector(".success");
reservationBtn.forEach((btn)=>btn.addEventListener("click", (0, _reservationPopupJs.showPopup)));
closeBtn.addEventListener("click", (0, _reservationPopupJs.closePopup));
overlay.addEventListener("click", (0, _reservationPopupJs.closePopup));
userPhone.addEventListener("blur", (0, _validateDataJs.validatePhone));
userDate.addEventListener("input", (0, _validateDataJs.validateDate));
formBtn.addEventListener("click", ()=>{
    const formStatus = (0, _validateDataJs.validateForm)();
    if (!formStatus.formComplete.status) (0, _validateDataJs.errorMessage)(formStatus.formComplete.message);
    else if (!formStatus.phoneFormatIsCorrect.status) (0, _validateDataJs.errorMessage)(formStatus.phoneFormatIsCorrect.message);
    else {
        (0, _reservationPopupJs.closePopup)();
        successAlert.style.top = "0rem";
        setTimeout(()=>{
            successAlert.style.top = "-12rem";
        }, 3000);
    }
});
const tpNav = document.querySelector(".navigation__tablet-phone");
const arrowNav = document.querySelector(".arrow-navi");
arrowNav.addEventListener("click", (event)=>{
    event.preventDefault();
    tpNav.classList.toggle("open-navi");
    arrowNav.classList.toggle("rotate-arrow");
});

},{"./script/revealContent.js":"6qYTM","./script/gsapAnimation.js":"77Ug3","./script/map.js":"lFJKn","./script/reservationPopup.js":"jXR8Q","./script/validateData.js":"gYyY7","./script/slider.js":"e7va1"}],"6qYTM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "revealContent", ()=>revealContent);
const aboutBtns = document.querySelectorAll(".about__button");
const contentHolders = document.querySelectorAll(".content-holder");
const imgsHolder = document.querySelectorAll(".picture-holder");
const hiddenParagraph = document.querySelectorAll(".hidden-paragraph");
function hideOtherContents(activeContent, activeBtn = "", activeImg = "", contentType = "") {
    if (contentType === "event") hiddenParagraph.forEach((paragraph)=>{
        if (paragraph !== activeContent) paragraph.classList.add("display-none");
    });
    else {
        contentHolders.forEach((holder)=>{
            if (holder !== activeContent) holder.parentElement.classList.add("display-none");
        });
        aboutBtns.forEach((btn)=>{
            if (btn !== activeBtn) {
                btn.classList.remove("button--active");
                btn.setAttribute("aria-expanded", "false");
                btn.setAttribute("data-content-state", "");
            }
        });
        imgsHolder.forEach((holder)=>{
            if (holder !== activeImg) holder.classList.add("display-none");
        });
    }
}
const revealContent = function(btn, contentType = "") {
    if (contentType === "event") {
        const paragraph = btn.querySelector(".hidden-paragraph");
        paragraph.classList.toggle("display-none");
        hideOtherContents(paragraph, "", "", "event");
    } else {
        // Getting the content of the clicked btn using the aria-controls :
        const content = document.querySelector(`#${btn.getAttribute("aria-controls")}`);
        // Getting the img of the clicked btn using the previous content's id :
        let img;
        imgsHolder.forEach((holder)=>{
            if (holder.dataset.img === content.id) {
                holder.classList.remove("display-none");
                img = holder;
            }
        });
        // After getting the specific element we're going to set arias attributes :
        btn.setAttribute("aria-expanded", "true");
        btn.setAttribute("data-content-state", "open");
        content.parentElement.classList.toggle("display-none"); // the content will be display: none if the use clicked the element twice.
        btn.classList.toggle("button--active");
        hideOtherContents(content, btn, img);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"77Ug3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsapAnimation", ()=>gsapAnimation);
var _gsap = require("gsap");
var _scrollTrigger = require("gsap/ScrollTrigger");
(0, _gsap.gsap).registerPlugin((0, _scrollTrigger.ScrollTrigger));
const scrollLine = document.querySelector("#header-to-about path");
const lineLenght = scrollLine.getTotalLength();
const menuBoxs = (0, _gsap.gsap).utils.toArray(".menu__box");
const gsapAnimation = ()=>{
    (0, _gsap.gsap).defaults({
        ease: "none"
    });
    // // Make very long dashes (the length of the path itself):
    scrollLine.style.strokeDasharray = lineLenght + " " + lineLenght;
    // // Offset the dashes so the it appears hidden entirely :
    scrollLine.style.strokeDashoffset = lineLenght;
    const headerSVG = (0, _gsap.gsap).timeline({
        scrollTrigger: {
            trigger: scrollLine,
            // markers: true,
            scrub: 0.6,
            start: "top 20%",
            end: "center top",
            id: "svg"
        }
    });
    headerSVG.to(scrollLine, {
        strokeDashoffset: lineLenght - (lineLenght - (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight))
    });
    menuBoxs.forEach((box)=>{
        const photo = box.querySelector("img");
        const haikei = box.querySelector(".menu__box__photo__haikei");
        const item = box.querySelector(".menu__box__items");
        const menuTrigger = (0, _gsap.gsap).timeline({
            defaults: {
                opacity: 0,
                ease: "sine.inOut"
            }
        }).from(haikei, {
            height: 0,
            duration: 0.6
        }).from(photo, {
            x: -80,
            duration: 1
        }).from(item, {
            x: 50,
            duration: 0.8
        }, "-=0.6");
        (0, _scrollTrigger.ScrollTrigger).create({
            trigger: box,
            // markers: true,
            start: "10% 90%",
            id: "menu",
            animation: menuTrigger
        });
    });
}; // // Make very long dashes (the length of the path itself):
 // scrollLine.style.strokeDasharray = lineLenght + " " + lineLenght;
 // // Offset the dashes so the it appears hidden entirely :
 // scrollLine.style.strokeDashoffset = lineLenght;
 // scrollLine.getBoundingClientRect();
 // window.addEventListener("scroll", () => {
 //   // what % down is it ?
 //   const scrollPrecentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
 //   // lenght to offset the dashes :
 //   const drownLenght = lineLenght * scrollPrecentage;
 //   console.log(lineLenght, "lineLenght");
 //   // console.log(scrollPrecentage, "scrollPrecentage");
 //   console.log(drownLenght, "drownLenght");
 //   // reverse the rown line when scroll to top :
 //   scrollLine.style.strokeDashoffset = lineLenght - drownLenght;
 // });

},{"gsap":"fPSuC","gsap/ScrollTrigger":"7wnFk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fPSuC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsap", ()=>gsapWithCSS);
parcelHelpers.export(exports, "default", ()=>gsapWithCSS);
parcelHelpers.export(exports, "CSSPlugin", ()=>(0, _csspluginJs.CSSPlugin));
parcelHelpers.export(exports, "TweenMax", ()=>TweenMaxWithCSS);
parcelHelpers.export(exports, "TweenLite", ()=>(0, _gsapCoreJs.TweenLite));
parcelHelpers.export(exports, "TimelineMax", ()=>(0, _gsapCoreJs.TimelineMax));
parcelHelpers.export(exports, "TimelineLite", ()=>(0, _gsapCoreJs.TimelineLite));
parcelHelpers.export(exports, "Power0", ()=>(0, _gsapCoreJs.Power0));
parcelHelpers.export(exports, "Power1", ()=>(0, _gsapCoreJs.Power1));
parcelHelpers.export(exports, "Power2", ()=>(0, _gsapCoreJs.Power2));
parcelHelpers.export(exports, "Power3", ()=>(0, _gsapCoreJs.Power3));
parcelHelpers.export(exports, "Power4", ()=>(0, _gsapCoreJs.Power4));
parcelHelpers.export(exports, "Linear", ()=>(0, _gsapCoreJs.Linear));
parcelHelpers.export(exports, "Quad", ()=>(0, _gsapCoreJs.Quad));
parcelHelpers.export(exports, "Cubic", ()=>(0, _gsapCoreJs.Cubic));
parcelHelpers.export(exports, "Quart", ()=>(0, _gsapCoreJs.Quart));
parcelHelpers.export(exports, "Quint", ()=>(0, _gsapCoreJs.Quint));
parcelHelpers.export(exports, "Strong", ()=>(0, _gsapCoreJs.Strong));
parcelHelpers.export(exports, "Elastic", ()=>(0, _gsapCoreJs.Elastic));
parcelHelpers.export(exports, "Back", ()=>(0, _gsapCoreJs.Back));
parcelHelpers.export(exports, "SteppedEase", ()=>(0, _gsapCoreJs.SteppedEase));
parcelHelpers.export(exports, "Bounce", ()=>(0, _gsapCoreJs.Bounce));
parcelHelpers.export(exports, "Sine", ()=>(0, _gsapCoreJs.Sine));
parcelHelpers.export(exports, "Expo", ()=>(0, _gsapCoreJs.Expo));
parcelHelpers.export(exports, "Circ", ()=>(0, _gsapCoreJs.Circ));
var _gsapCoreJs = require("./gsap-core.js");
var _csspluginJs = require("./CSSPlugin.js");
var gsapWithCSS = (0, _gsapCoreJs.gsap).registerPlugin((0, _csspluginJs.CSSPlugin)) || (0, _gsapCoreJs.gsap), // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

},{"./gsap-core.js":"05eeC","./CSSPlugin.js":"l02JQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05eeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GSCache", ()=>GSCache);
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Timeline", ()=>Timeline);
parcelHelpers.export(exports, "Tween", ()=>Tween);
parcelHelpers.export(exports, "PropTween", ()=>PropTween);
parcelHelpers.export(exports, "gsap", ()=>gsap);
parcelHelpers.export(exports, "Power0", ()=>Power0);
parcelHelpers.export(exports, "Power1", ()=>Power1);
parcelHelpers.export(exports, "Power2", ()=>Power2);
parcelHelpers.export(exports, "Power3", ()=>Power3);
parcelHelpers.export(exports, "Power4", ()=>Power4);
parcelHelpers.export(exports, "Linear", ()=>Linear);
parcelHelpers.export(exports, "Quad", ()=>Quad);
parcelHelpers.export(exports, "Cubic", ()=>Cubic);
parcelHelpers.export(exports, "Quart", ()=>Quart);
parcelHelpers.export(exports, "Quint", ()=>Quint);
parcelHelpers.export(exports, "Strong", ()=>Strong);
parcelHelpers.export(exports, "Elastic", ()=>Elastic);
parcelHelpers.export(exports, "Back", ()=>Back);
parcelHelpers.export(exports, "SteppedEase", ()=>SteppedEase);
parcelHelpers.export(exports, "Bounce", ()=>Bounce);
parcelHelpers.export(exports, "Sine", ()=>Sine);
parcelHelpers.export(exports, "Expo", ()=>Expo);
parcelHelpers.export(exports, "Circ", ()=>Circ);
parcelHelpers.export(exports, "TweenMax", ()=>Tween) //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
;
parcelHelpers.export(exports, "TweenLite", ()=>Tween);
parcelHelpers.export(exports, "TimelineMax", ()=>Timeline);
parcelHelpers.export(exports, "TimelineLite", ()=>Timeline);
parcelHelpers.export(exports, "default", ()=>gsap);
parcelHelpers.export(exports, "wrap", ()=>wrap);
parcelHelpers.export(exports, "wrapYoyo", ()=>wrapYoyo);
parcelHelpers.export(exports, "distribute", ()=>distribute);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "snap", ()=>snap);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "getUnit", ()=>getUnit);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "selector", ()=>selector);
parcelHelpers.export(exports, "mapRange", ()=>mapRange);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "unitize", ()=>unitize);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "_getProperty", ()=>_getProperty);
parcelHelpers.export(exports, "_numExp", ()=>_numExp);
parcelHelpers.export(exports, "_numWithUnitExp", ()=>_numWithUnitExp);
parcelHelpers.export(exports, "_isString", ()=>_isString);
parcelHelpers.export(exports, "_isUndefined", ()=>_isUndefined);
parcelHelpers.export(exports, "_renderComplexString", ()=>_renderComplexString);
parcelHelpers.export(exports, "_relExp", ()=>_relExp);
parcelHelpers.export(exports, "_setDefaults", ()=>_setDefaults);
parcelHelpers.export(exports, "_removeLinkedListItem", ()=>_removeLinkedListItem);
parcelHelpers.export(exports, "_forEachName", ()=>_forEachName);
parcelHelpers.export(exports, "_sortPropTweensByPriority", ()=>_sortPropTweensByPriority);
parcelHelpers.export(exports, "_colorStringFilter", ()=>_colorStringFilter);
parcelHelpers.export(exports, "_replaceRandom", ()=>_replaceRandom);
parcelHelpers.export(exports, "_checkPlugin", ()=>_checkPlugin);
parcelHelpers.export(exports, "_plugins", ()=>_plugins);
parcelHelpers.export(exports, "_ticker", ()=>_ticker);
parcelHelpers.export(exports, "_config", ()=>_config);
parcelHelpers.export(exports, "_roundModifier", ()=>_roundModifier);
parcelHelpers.export(exports, "_round", ()=>_round);
parcelHelpers.export(exports, "_missingPlugin", ()=>_missingPlugin);
parcelHelpers.export(exports, "_getSetter", ()=>_getSetter);
parcelHelpers.export(exports, "_getCache", ()=>_getCache);
parcelHelpers.export(exports, "_colorExp", ()=>_colorExp);
parcelHelpers.export(exports, "_parseRelative", ()=>_parseRelative);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, _suppressOverwrites, _reverting, _context, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
}, _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
}, _revertConfig = {
    suppressEvents: true
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = _harnessPlugins.length;
        while(i-- && !_harnessPlugins[i].targetTest(target));
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, _merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, _mergeDeep = function _mergeDeep(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
}, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
        // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [
            tTime,
            suppressEvents
        ];
        return 1;
    }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents && !_reverting) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
        value
    ] : [];
}, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
}, shuffle = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
    if (_isFunction(v)) return v;
    var vars = _isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                _bigNum
            ])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = _roundModifier(snapTo.increment);
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i = 1; i < l; i++)interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
        if (!interpolators) {
            for(p in end)_addPropTween.call(master, start, p, "get", end[p]);
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context = animation._ctx, params, scope, result;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    context && (_context = context);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _registerPluginQueue = [], _createPlugin = function _createPlugin(config) {
    if (_windowExists() && config) {
        // edge case: some build tools may pass in a null/undefined value
        config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
        var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
            this._props = [];
        } : config, //in case someone passes in an object that's not a plugin, like CustomEase
        instanceDefaults = {
            init: _emptyFunc,
            render: _renderPropTweens,
            add: _addPropTween,
            kill: _killPropTweensOf,
            modifier: _addPluginModifier,
            rawVars: 0
        }, statics = {
            targetTest: 0,
            get: 0,
            getSetter: _getSetter,
            aliases: {},
            register: 0
        };
        _wake();
        if (config !== Plugin) {
            if (_plugins[name]) return;
            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
            _plugins[Plugin.prop = name] = Plugin;
            if (config.targetTest) {
                _harnessPlugins.push(Plugin);
                _reservedProps[name] = 1;
            }
            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
        }
        _addGlobal(name, Plugin);
        config.register && config.register(gsap, Plugin, PropTween);
    } else config && _registerPluginQueue.push(config);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ _255 = 255, _colorLookup = {
    aqua: [
        0,
        _255,
        _255
    ],
    lime: [
        0,
        _255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        _255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        _255,
        _255,
        _255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        _255,
        _255,
        0
    ],
    orange: [
        _255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        _255,
        0,
        0
    ],
    pink: [
        _255,
        192,
        203
    ],
    cyan: [
        0,
        _255,
        _255
    ],
    transparent: [
        _255,
        _255,
        _255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [
        v >> 16,
        v >> 8 & _255,
        v & _255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if (_colorLookup[v]) a = _colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & _255,
                    a & _255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & _255,
                v & _255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match(_strictNumExp) || _colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function(v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in _colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {};
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                    _raf = _win.requestAnimationFrame;
                    _registerPluginQueue.forEach(_createPlugin);
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        _parseObjectInString(split[1])
    ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof Timeline) _propagateYoyoEase(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) overshoot = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
    function Animation(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        if (_context) {
            this._ctx = _context;
            _context.data.push(this);
        }
        _tickerActive || _ticker.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);
        _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config) {
        if (config === void 0) config = _revertConfig;
        var prevIsReverting = _reverting;
        _reverting = config;
        if (this._initted || this._startAt) {
            this.timeline && this.timeline.revert(config);
            this.totalTime(-0.01, config.suppressEvents);
        }
        this.data !== "nested" && config.kill !== false && this.kill();
        _reverting = prevIsReverting;
        return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
    _inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
        var _this;
        if (vars === void 0) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    _propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) return this.addLabel(child, position);
            if (_isFunction(child)) child = Tween.delayedCall(0, child);
            else return this;
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) return this.removeLabel(child);
        if (_isFunction(child)) return this.killTweensOf(child);
        _removeLinkedListItem(this, child);
        if (child === this._recent) this._recent = this._last;
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") _removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate(soft);
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || _ticker.sleep();
                }
            }
        }
    };
    return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while(result = _complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) end = _replaceRandom(end);
        if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {}, p;
    for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens, _initTween = function _initTween(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
            prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.
            time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
            // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: !prevStartAt && _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.
            tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween
            time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                if (dur && time <= 0 && tTime <= 0) {
                    // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (runBackwards && dur) //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
        {
            if (!prevStartAt) {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                tween._startAt._dp = 0; // don't allow it to get put back into root timeline!
                tween._startAt._sat = tween; // used in globalTime()
                time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
                tween._zTime = time;
                if (!immediateRender) _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property && pt.fp !== property)// "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
                pt = pt._next;
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return 1;
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        rootPT = ptCache[i];
        pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)
        rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
    }
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = _merge({}, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
    _inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {},
                targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
            }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {});
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a, kf, v;
                if (_isArray(keyframes)) {
                    keyframes.forEach(function(frame) {
                        return tl.to(parsedTargets, frame, ">");
                    });
                    tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
                } else {
                    copy = {};
                    for(p in keyframes)p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a.length; i++){
                            kf = a[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay) || 0); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && isNegative) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time) // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
                return this;
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents && !iteration) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
        // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
        (!soft || !this.vars.runBackwards) && (this._startAt = 0);
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate(soft);
        return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         //}
        _alignPlayhead(this, 0);
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function() {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [], _listeners = {}, _emptyArray = [], _lastMediaTime = 0, _contextID = 0, _dispatch = function _dispatch(type) {
    return (_listeners[type] || _emptyArray).map(function(f) {
        return f();
    });
}, _onMediaChange = function _onMediaChange() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
        _dispatch("matchMediaInit");
        _media.forEach(function(c) {
            var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
            for(p in queries){
                match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.
                match && (anyMatch = 1);
                if (match !== conditions[p]) {
                    conditions[p] = match;
                    toggled = 1;
                }
            }
            if (toggled) {
                c.revert();
                anyMatch && matches.push(c);
            }
        });
        _dispatch("matchMediaRevert");
        matches.forEach(function(c) {
            return c.onMatch(c);
        });
        _lastMediaTime = time;
        _dispatch("matchMedia");
    }
};
var Context = /*#__PURE__*/ function() {
    function Context(func, scope) {
        this.selector = scope && selector(scope);
        this.data = [];
        this._r = []; // returned/cleanup functions
        this.isReverted = false;
        this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely
        func && this.add(func);
    }
    var _proto5 = Context.prototype;
    _proto5.add = function add(name, func, scope) {
        // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
        // if (name && _isFunction(name.revert)) {
        // 	this.data.push(name);
        // 	return (name._ctx = this);
        // }
        if (_isFunction(name)) {
            scope = func;
            func = name;
            name = _isFunction;
        }
        var self = this, f = function f() {
            var prev = _context, prevSelector = self.selector, result;
            prev && prev !== self && prev.data.push(self);
            scope && (self.selector = selector(scope));
            _context = self;
            result = func.apply(self, arguments);
            _isFunction(result) && self._r.push(result);
            _context = prev;
            self.selector = prevSelector;
            self.isReverted = false;
            return result;
        };
        self.last = f;
        return name === _isFunction ? f(self) : name ? self[name] = f : f;
    };
    _proto5.ignore = function ignore(func) {
        var prev = _context;
        _context = null;
        func(this);
        _context = prev;
    };
    _proto5.getTweens = function getTweens() {
        var a = [];
        this.data.forEach(function(e) {
            return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
        });
        return a;
    };
    _proto5.clear = function clear() {
        this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia) {
        var _this4 = this;
        if (revert) {
            var tweens = this.getTweens();
            this.data.forEach(function(t) {
                // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
                if (t.data === "isFlip") {
                    t.revert();
                    t.getChildren(true, true, false).forEach(function(tween) {
                        return tweens.splice(tweens.indexOf(tween), 1);
                    });
                }
            }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort
            tweens.map(function(t) {
                return {
                    g: t.globalTime(0),
                    t: t
                };
            }).sort(function(a, b) {
                return b.g - a.g || -Infinity;
            }).forEach(function(o) {
                return o.t.revert(revert);
            }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.
            this.data.forEach(function(e) {
                return !(e instanceof Tween) && e.revert && e.revert(revert);
            });
            this._r.forEach(function(f) {
                return f(revert, _this4);
            });
            this.isReverted = true;
        } else this.data.forEach(function(e) {
            return e.kill && e.kill();
        });
        this.clear();
        if (matchMedia) {
            var i = _media.length;
            while(i--)// previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
            _media[i].id === this.id && _media.splice(i, 1);
        }
    };
    _proto5.revert = function revert(config) {
        this.kill(config || {});
    };
    return Context;
}();
var MatchMedia = /*#__PURE__*/ function() {
    function MatchMedia(scope) {
        this.contexts = [];
        this.scope = scope;
    }
    var _proto6 = MatchMedia.prototype;
    _proto6.add = function add(conditions, func, scope) {
        _isObject(conditions) || (conditions = {
            matches: conditions
        });
        var context = new Context(0, scope || this.scope), cond = context.conditions = {}, mq, p, active;
        _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()
        this.contexts.push(context);
        func = context.add("onMatch", func);
        context.queries = conditions;
        for(p in conditions)if (p === "all") active = 1;
        else {
            mq = _win.matchMedia(conditions[p]);
            if (mq) {
                _media.indexOf(context) < 0 && _media.push(context);
                (cond[p] = mq.matches) && (active = 1);
                mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
            }
        }
        active && func(context);
        return this;
    } // refresh() {
    ;
    _proto6.revert = function revert(config) {
        this.kill(config || {});
    };
    _proto6.kill = function kill(revert) {
        this.contexts.forEach(function(c) {
            return c.kill(revert, true);
        });
    };
    return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var _gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function(property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [
                target
            ]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function(value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };
        if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {};
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    context: function context(func, scope) {
        return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
        return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
        return _media.forEach(function(c) {
            var cond = c.conditions, found, p;
            for(p in cond)if (cond[p]) {
                cond[p] = false;
                found = 1;
            }
            found && c.revert();
        }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
        var a = _listeners[type] || (_listeners[type] = []);
        ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
        var a = _listeners[type], i = a && a.indexOf(callback);
        i >= 0 && a.splice(i, 1);
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        reverting: function reverting() {
            return _reverting;
        },
        context: function context(toAdd) {
            if (toAdd && _context) {
                _context.data.push(toAdd);
                toAdd._ctx = _context;
            }
            return _context;
        },
        suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = _getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function(tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {};
                    _forEachName(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt, v;
        this.tween = tween;
        for(p in vars){
            v = target.getAttribute(p) || "";
            pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
            pt.op = p;
            pt.b = v; // record the beginning value so we can revert()
            this._props.push(p);
        }
    },
    render: function render(ratio, data) {
        var pt = data._pt;
        while(pt){
            _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)
            pt = pt._next;
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.12.2";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l02JQ":[function(require,module,exports) {
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSPlugin", ()=>CSSPlugin);
parcelHelpers.export(exports, "default", ()=>CSSPlugin);
parcelHelpers.export(exports, "_getBBox", ()=>_getBBox);
parcelHelpers.export(exports, "_createElement", ()=>_createElement);
parcelHelpers.export(exports, "checkPrefix", ()=>_checkPropPrefix);
var _gsapCoreJs = require("./gsap-core.js");
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _reverting, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _saveStyle = function _saveStyle(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style;
    if (property in _transformProps && style) {
        this.tfm = this.tfm || {};
        if (property !== "transform") {
            property = _propertyAliases[property] || property;
            ~property.indexOf(",") ? property.split(",").forEach(function(a) {
                return _this.tfm[a] = _get(target, a);
            }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
        } else return _propertyAliases.transform.split(",").forEach(function(p) {
            return _saveStyle.call(_this, p, isNotCSS);
        });
        if (this.props.indexOf(_transformProp) >= 0) return;
        if (target._gsap.svg) {
            this.svgo = target.getAttribute("data-svg-origin");
            this.props.push(_transformOriginProp, isNotCSS, "");
        }
        property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
}, _removeIndependentTransforms = function _removeIndependentTransforms(style) {
    if (style.translate) {
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, _revertStyle = function _revertStyle() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i, p;
    for(i = 0; i < props.length; i += 3)// stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
    if (this.tfm) {
        for(p in this.tfm)cache[p] = this.tfm[p];
        if (cache.svg) {
            cache.renderTransform();
            target.setAttribute("data-svg-origin", this.svgo || "");
        }
        i = _reverting();
        if ((!i || !i.isStart) && !style[_transformProp]) {
            _removeIndependentTransforms(style);
            cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
        }
    }
}, _getStyleSaver = function _getStyleSaver(target, properties) {
    var saver = {
        target: target,
        props: [],
        revert: _revertStyle,
        save: _saveStyle
    };
    target._gsap || (0, _gsapCoreJs.gsap).core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.
    properties && properties.split(",").forEach(function(p) {
        return saver.save(p);
    });
    return saver;
}, _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while(i-- && !(_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
            style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _reverting = (0, _gsapCoreJs.gsap).core.reverting;
        _pluginInitted = 1;
    }
}, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack;
    } catch (e) {}
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, _getBBox = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, _nonStandardLayouts = {
    grid: 1,
    flex: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, _gsapCoreJs._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
    if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === (0, _gsapCoreJs._ticker).time && !cache.uncache) return (0, _gsapCoreJs._round)(curValue / cache.width * amount);
    else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = (0, _gsapCoreJs._getCache)(parent);
            cache.time = (0, _gsapCoreJs._ticker).time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, _gsapCoreJs._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCoreJs._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new (0, _gsapCoreJs.PropTween)(this._pt, target.style, prop, 0, 1, (0, _gsapCoreJs._renderComplexString)), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [
        start,
        end
    ];
    (0, _gsapCoreJs._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    endValues = end.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    if (endValues.length) {
        while(result = (0, _gsapCoreJs._numWithUnitExp).exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, _gsapCoreJs._parseRelative)(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = (0, _gsapCoreJs._numWithUnitExp).lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || (0, _gsapCoreJs._config).units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                 // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    (0, _gsapCoreJs._relExp).test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
                _removeIndependentTransforms(style);
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ _identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match((0, _gsapCoreJs._numExp)).map((0, _gsapCoreJs._round));
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, _gsapCoreJs._getCache)(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextElementSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new (0, _gsapCoreJs.GSCache)(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
        // accommodate independent transforms by combining them into normal ones.
        if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
        style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        if (cache.uncache) {
            // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
            t2 = target.getBBox();
            origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
            t1 = "";
        } else t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, _gsapCoreJs._round)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, _gsapCoreJs._round)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, _gsapCoreJs._round)(scaleX);
    cache.scaleY = (0, _gsapCoreJs._round)(scaleY);
    cache.rotation = (0, _gsapCoreJs._round)(rotation) + deg;
    cache.rotationX = (0, _gsapCoreJs._round)(rotationX) + deg;
    cache.rotationY = (0, _gsapCoreJs._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = (0, _gsapCoreJs._config).force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, _gsapCoreJs.getUnit)(start);
    return (0, _gsapCoreJs._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
    if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
    if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, _gsapCoreJs._round)(a11);
        a21 = (0, _gsapCoreJs._round)(a21);
        a12 = (0, _gsapCoreJs._round)(a12);
        a22 = (0, _gsapCoreJs._round)(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, _gsapCoreJs._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, _gsapCoreJs._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, _gsapCoreJs._round)(tx + xPercent / 100 * temp.width);
        ty = (0, _gsapCoreJs._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, _gsapCoreJs._isString)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
    }
    for(p in _transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, _gsapCoreJs.getUnit)(startValue);
            endUnit = (0, _gsapCoreJs.getUnit)(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, _gsapCoreJs._forEachName)("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
        _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps
        this.styles = this.styles || _getStyleSaver(target);
        inlineProps = this.styles.props;
        this.tween = tween;
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if ((0, _gsapCoreJs._plugins)[p] && (0, _gsapCoreJs._checkPlugin)(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = (0, _gsapCoreJs._replaceRandom)(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                (0, _gsapCoreJs._colorExp).lastIndex = 0;
                if (!(0, _gsapCoreJs._colorExp).test(startValue)) {
                    // colors don't have units
                    startUnit = (0, _gsapCoreJs.getUnit)(startValue);
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
                inlineProps.push(p, 0, style[p]);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, _gsapCoreJs._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, _gsapCoreJs._replaceRandom)(startValue));
                    (0, _gsapCoreJs.getUnit)(startValue + "") || (startValue += (0, _gsapCoreJs._config).units[p] || (0, _gsapCoreJs.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                } else startValue = _get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        inlineProps.push("visibility", 0, style.visibility);
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    this.styles.save(p);
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, _gsapCoreJs._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
                        this._pt.u = 0;
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue) || (p in (0, _gsapCoreJs._config).units ? (0, _gsapCoreJs._config).units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    else if (p !== "parseTransform") {
                        (0, _gsapCoreJs._missingPlugin)(p, endValue);
                        continue;
                    }
                } else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
                props.push(p);
            }
        }
        hasPriority && (0, _gsapCoreJs._sortPropTweensByPriority)(this);
    },
    render: function render(ratio, data) {
        if (data.tween._time || !_reverting()) {
            var pt = data._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
        } else data.styles.revert();
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCoreJs._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCoreJs._getSetter)(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
(0, _gsapCoreJs.gsap).utils.checkPrefix = _checkPropPrefix;
(0, _gsapCoreJs.gsap).core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, _gsapCoreJs._forEachName)(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
    });
    (0, _gsapCoreJs._forEachName)(rotation, function(name) {
        (0, _gsapCoreJs._config).units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, _gsapCoreJs._forEachName)(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, _gsapCoreJs._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    (0, _gsapCoreJs._config).units[name] = "px";
});
(0, _gsapCoreJs.gsap).registerPlugin(CSSPlugin);

},{"./gsap-core.js":"05eeC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7wnFk":[function(require,module,exports) {
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ScrollTrigger", ()=>ScrollTrigger);
parcelHelpers.export(exports, "default", ()=>ScrollTrigger);
var _observerJs = require("./Observer.js");
var gsap, _coreInitted, _win, _doc, _docEl, _body, _root, _resizeDelay, _toArray, _clamp, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites, _ignoreResize, _normalizer, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context, _scrollRestoration, _div100vh, _100vh, _limitCallbacks, // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1, _getTime = Date.now, _time1 = _getTime(), _lastScrollTime = 0, _enabled = 0, _parseClamp = function _parseClamp(value, type, self) {
    var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self["_" + type + "Clamp"] = clamp;
    return clamp ? value.substr(6, value.length - 7) : value;
}, _keepClamp = function _keepClamp(value, clamp) {
    return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
}, _rafBugFix = function _rafBugFix() {
    return _enabled && requestAnimationFrame(_rafBugFix);
}, // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
    return _pointerIsDown = 1;
}, _pointerUpHandler = function _pointerUpHandler() {
    return _pointerIsDown = 0;
}, _passThrough = function _passThrough(v) {
    return v;
}, _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _getGSAP = function _getGSAP() {
    return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _isViewport = function _isViewport(e) {
    return !!~_root.indexOf(e);
}, _getViewportDimension = function _getViewportDimension(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
}, _getBoundsFunc = function _getBoundsFunc(element) {
    return (0, _observerJs._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function() {
        _winOffsets.width = _win.innerWidth;
        _winOffsets.height = _100vh;
        return _winOffsets;
    } : function() {
        return _getBounds(element);
    });
}, _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
    var d = _ref.d, d2 = _ref.d2, a = _ref.a;
    return (a = (0, _observerJs._getProxyProp)(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
    } : function() {
        return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
    };
}, _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
    return !isViewport || ~(0, _observerJs._proxies).indexOf(element) ? _getBoundsFunc(element) : function() {
        return _winOffsets;
    };
}, _maxScroll = function _maxScroll(element, _ref2) {
    var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
    return Math.max(0, (s = "scroll" + d2, a = (0, _observerJs._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
}, _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
    for(var i = 0; i < _autoRefresh.length; i += 3)(!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
}, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _endAnimation = function _endAnimation(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
}, _callback = function _callback(self, func) {
    if (self.enabled) {
        var result = func(self);
        result && result.totalTime && (self.callbackAnimation = result);
    }
}, _abs = Math.abs, _left = "left", _top = "top", _right = "right", _bottom = "bottom", _width = "width", _height = "height", _Right = "Right", _Left = "Left", _Top = "Top", _Bottom = "Bottom", _padding = "padding", _margin = "margin", _Width = "Width", _Height = "Height", _px = "px", _getComputedStyle = function _getComputedStyle(element) {
    return _win.getComputedStyle(element);
}, _makePositionable = function _makePositionable(element) {
    // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _getBounds = function _getBounds(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
}, _getSize = function _getSize(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
}, _getLabelRatioArray = function _getLabelRatioArray(timeline) {
    var a = [], labels = timeline.labels, duration = timeline.duration(), p;
    for(p in labels)a.push(labels[p] / duration);
    return a;
}, _getClosestLabel = function _getClosestLabel(animation) {
    return function(value) {
        return gsap.utils.snap(_getLabelRatioArray(animation), value);
    };
}, _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
    var snap = gsap.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a, b) {
        return a - b;
    });
    return a ? function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var i;
        if (!direction) return snap(value);
        if (direction > 0) {
            value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.
            for(i = 0; i < a.length; i++){
                if (a[i] >= value) return a[i];
            }
            return a[i - 1];
        } else {
            i = a.length;
            value += threshold;
            while(i--){
                if (a[i] <= value) return a[i];
            }
        }
        return a[0];
    } : function(value, direction, threshold) {
        if (threshold === void 0) threshold = 1e-3;
        var snapped = snap(value);
        return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
}, _getLabelAtDirection = function _getLabelAtDirection(timeline) {
    return function(value, st) {
        return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
    };
}, _multiListener = function _multiListener(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
        return func(element, type, callback);
    });
}, _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, _wheelListener = function _wheelListener(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
        func(el, "wheel", scrollFunc);
        func(el, "touchmove", scrollFunc);
    }
}, _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, _defaults = {
    toggleActions: "play",
    anticipatePin: 0
}, _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
}, _offsetToPx = function _offsetToPx(value, size) {
    if (_isString(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
            value.indexOf("%") > eqIndex && (relative *= size / 100);
            value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
}, _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e = _doc.createElement("div"), useFixedPosition = _isViewport(container) || (0, _observerJs._getProxyProp)(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === (0, _observerJs._vertical) ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e._isStart = isStart;
    e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
    e.style.cssText = css;
    e.innerText = name || name === 0 ? type + "-" + name : type;
    parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
    e._offset = e["offset" + direction.op.d2];
    _positionMarker(e, 0, direction, isStart);
    return e;
}, _positionMarker = function _positionMarker(marker, start, direction, flipped) {
    var vars = {
        display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap.set(marker, vars);
}, _triggers = [], _ids = {}, _rafID, _sync = function _sync() {
    return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
}, _onScroll = function _onScroll() {
    // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
    if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
        // if the user is dragging the scrollbar, allow it.
        (0, _observerJs._scrollers).cache++;
        if (_normalizer) _rafID || (_rafID = requestAnimationFrame(_updateAll));
        else _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110
        _lastScrollTime || _dispatch("scrollStart");
        _lastScrollTime = _getTime();
    }
}, _setBaseDimensions = function _setBaseDimensions() {
    _baseScreenWidth = _win.innerWidth;
    _baseScreenHeight = _win.innerHeight;
}, _onResize = function _onResize() {
    (0, _observerJs._scrollers).cache++;
    !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
}, // ignore resizes triggered by refresh()
_listeners = {}, _emptyArray = [], _softRefresh = function _softRefresh() {
    return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
}, _dispatch = function _dispatch(type) {
    return _listeners[type] && _listeners[type].map(function(f) {
        return f();
    }) || _emptyArray;
}, _savedStyles = [], // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
    for(var i = 0; i < _savedStyles.length; i += 5)if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
        _savedStyles[i].style.cssText = _savedStyles[i + 1];
        _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
        _savedStyles[i + 3].uncache = 1;
    }
}, _revertAll = function _revertAll(kill, media) {
    var trigger;
    for(_i = 0; _i < _triggers.length; _i++){
        trigger = _triggers[_i];
        if (trigger && (!media || trigger._ctx === media)) {
            if (kill) trigger.kill(1);
            else trigger.revert(true, true);
        }
    }
    media && _revertRecorded(media);
    media || _dispatch("revert");
}, _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
    // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
    (0, _observerJs._scrollers).cache++;
    (force || !_refreshingAll) && (0, _observerJs._scrollers).forEach(function(obj) {
        return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
}, _refreshingAll, _refreshID = 0, _queueRefreshID, _queueRefreshAll = function _queueRefreshAll() {
    // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
    if (_queueRefreshID !== _refreshID) {
        var id = _queueRefreshID = _refreshID;
        requestAnimationFrame(function() {
            return id === _refreshID && _refreshAll(true);
        });
    }
}, _refresh100vh = function _refresh100vh() {
    _body.appendChild(_div100vh);
    _100vh = _div100vh.offsetHeight || _win.innerHeight;
    _body.removeChild(_div100vh);
}, _refreshAll = function _refreshAll(force, skipRevert) {
    if (_lastScrollTime && !force) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
        return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger.isRefreshing = true;
    (0, _observerJs._scrollers).forEach(function(obj) {
        return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
    }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away
    var refreshInits = _dispatch("refreshInit");
    _sort && ScrollTrigger.sort();
    skipRevert || _revertAll();
    (0, _observerJs._scrollers).forEach(function(obj) {
        if (_isFunction(obj)) {
            obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes
            obj(0);
        }
    });
    _triggers.slice(0).forEach(function(t) {
        return t.refresh();
    }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.
    _triggers.forEach(function(t, i) {
        // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
        if (t._subPinOffset && t.pin) {
            var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
            t.revert(true, 1);
            t.adjustPinSpacing(t.pin[prop] - original);
            t.refresh();
        }
    });
    _triggers.forEach(function(t) {
        // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
        var max = _maxScroll(t.scroller, t._dir);
        (t.vars.end === "max" || t._endClamp && t.end > max) && t.setPositions(t.start, Math.max(t.start + 1, max), true);
    });
    refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
    }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.
    (0, _observerJs._scrollers).forEach(function(obj) {
        if (_isFunction(obj)) {
            obj.smooth && requestAnimationFrame(function() {
                return obj.target.style.scrollBehavior = "smooth";
            });
            obj.rec && obj(obj.rec);
        }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t) {
        return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
    });
    _refreshingAll = ScrollTrigger.isRefreshing = false;
    _dispatch("refresh");
}, _lastScroll = 0, _direction = 1, _primary, _updateAll = function _updateAll(force) {
    if (!_refreshingAll || force === 2) {
        ScrollTrigger.isUpdating = true;
        _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.
        var l = _triggers.length, time = _getTime(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
        _direction = _lastScroll > scroll ? -1 : 1;
        _refreshingAll || (_lastScroll = scroll);
        if (recordVelocity) {
            if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
                _lastScrollTime = 0;
                _dispatch("scrollEnd");
            }
            _time2 = _time1;
            _time1 = time;
        }
        if (_direction < 0) {
            _i = l;
            while(_i-- > 0)_triggers[_i] && _triggers[_i].update(0, recordVelocity);
            _direction = 1;
        } else for(_i = 0; _i < l; _i++)_triggers[_i] && _triggers[_i].update(0, recordVelocity);
        ScrollTrigger.isUpdating = false;
    }
    _rafID = 0;
}, _propNamesToCopy = [
    _left,
    _top,
    _bottom,
    _right,
    _margin + _Bottom,
    _margin + _Right,
    _margin + _Top,
    _margin + _Left,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order"
], _stateProps = _propNamesToCopy.concat([
    _width,
    _height,
    "boxSizing",
    "max" + _Width,
    "max" + _Height,
    "position",
    _margin,
    _padding,
    _padding + _Top,
    _padding + _Right,
    _padding + _Bottom,
    _padding + _Left
]), _swapPinOut = function _swapPinOut(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) _setState(cache.spacerState);
    else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
            parent.insertBefore(pin, spacer);
            parent.removeChild(spacer);
        }
    }
    pin._gsap.swappedIn = false;
}, _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
        var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
        while(i--){
            p = _propNamesToCopy[i];
            spacerStyle[p] = cs[p];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[_bottom] = pinStyle[_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[_width] = _getSize(pin, (0, _observerJs._horizontal)) + _px;
        spacerStyle[_height] = _getSize(pin, (0, _observerJs._vertical)) + _px;
        spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
        _setState(spacerState);
        pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
        pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
        pinStyle[_padding] = cs[_padding];
        if (pin.parentNode !== spacer) {
            pin.parentNode.insertBefore(spacer, pin);
            spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
    }
}, _capsExp = /([A-Z])/g, _setState = function _setState(state) {
    if (state) {
        var style = state.t.style, l = state.length, i = 0, p, value;
        (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off
        for(; i < l; i += 2){
            value = state[i + 1];
            p = state[i];
            if (value) style[p] = value;
            else if (style[p]) style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
        }
    }
}, _getState = function _getState(element) {
    // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
    var l = _stateProps.length, style = element.style, state = [], i = 0;
    for(; i < l; i++)state.push(_stateProps[i], style[_stateProps[i]]);
    state.t = element;
    return state;
}, _copyState = function _copyState(state, override, omitOffsets) {
    var result = [], l = state.length, i = omitOffsets ? 8 : 0, // skip top, left, right, bottom if omitOffsets is true
    p;
    for(; i < l; i += 2){
        p = state[i];
        result.push(p, p in override ? override[p] : state[i + 1]);
    }
    result.t = state.t;
    return result;
}, _winOffsets = {
    left: 0,
    top: 0
}, // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction(value) && (value = value(self));
    if (_isString(value) && value.substr(0, 3) === "max") value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value); // convert a string number like "45" to an actual number
    if (!_isNumber(value)) {
        _isFunction(trigger) && (trigger = trigger(self));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
        element = (0, _observerJs._getTarget)(trigger, self) || _body;
        bounds = _getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
            // if display is "none", it won't report getBoundingClientRect() properly
            display = element.style.display;
            element.style.display = "block";
            bounds = _getBounds(element);
            display ? element.style.display = display : element.style.removeProperty("display");
        }
        localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
        globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
    } else {
        containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
        markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
        self[clampZeroProp] = value || -0.001;
        value < 0 && (value = 0);
    }
    if (marker) {
        var position = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction.d2;
        _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);
        if (useFixedPosition) {
            scrollerBounds = _getBounds(markerScroller);
            useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
        }
    }
    if (containerAnimation && element) {
        p1 = _getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = _getBounds(element);
        containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
}, _prefixExp = /(webkit|moz|length|cssText|inset)/i, _reparent = function _reparent(element, parent, top, left) {
    if (element.parentNode !== parent) {
        var style = element.style, p, cs;
        if (parent === _body) {
            element._stOrig = style.cssText; // record original inline styles so we can revert them later
            cs = _getComputedStyle(element);
            for(p in cs)// must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
            if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") style[p] = cs[p];
            style.top = top;
            style.left = left;
        } else style.cssText = element._stOrig;
        gsap.core.getCache(element).uncache = 1;
        parent.appendChild(element);
    }
}, _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
        var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.
        if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
            // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
            value = current;
            onInterrupt && onInterrupt();
        }
        last2 = last1;
        last1 = value;
        return value;
    };
}, _shiftMarker = function _shiftMarker(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap.set(marker, vars);
}, // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
    var getScroll = (0, _observerJs._getScrollFunc)(scroller, direction), prop = "_scroll" + direction.p2, // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
    getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
            tween.kill();
            getTween.tween = 0;
        });
        change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        vars[prop] = scrollTo;
        vars.modifiers = modifiers;
        modifiers[prop] = function() {
            return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
        };
        vars.onUpdate = function() {
            (0, _observerJs._scrollers).cache++;
            _updateAll();
        };
        vars.onComplete = function() {
            getTween.tween = 0;
            onComplete && onComplete.call(tween);
        };
        tween = getTween.tween = gsap.to(scroller, vars);
        return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.
    ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
};
var ScrollTrigger = /*#__PURE__*/ function() {
    function ScrollTrigger(vars, animation) {
        _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        _context(this);
        this.init(vars, animation);
    }
    var _proto = ScrollTrigger.prototype;
    _proto.init = function init(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true); // in case it's being initted again
        if (!_enabled) {
            this.update = this.refresh = this.kill = _passThrough;
            return;
        }
        vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
            trigger: vars
        } : vars, _defaults);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? (0, _observerJs._horizontal) : (0, _observerJs._vertical), isToggle = !scrub && scrub !== 0, scroller = (0, _observerJs._getTarget)(vars.scroller || _win), scrollerCache = gsap.core.getCache(scroller), isViewport = _isViewport(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : (0, _observerJs._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [
            vars.onEnter,
            vars.onLeave,
            vars.onEnterBack,
            vars.onLeaveBack
        ], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
            return vars.onRefreshInit(self);
        }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = (0, _observerJs._getScrollFunc)(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.
        self._startClamp = self._endClamp = false;
        self._dir = direction;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
            _sort = 1;
            vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
            top: _getTweenCreator(scroller, (0, _observerJs._vertical)),
            left: _getTweenCreator(scroller, (0, _observerJs._horizontal))
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
        self.scrubDuration = function(value) {
            scrubSmooth = _isNumber(value) && value;
            if (!scrubSmooth) {
                scrubTween && scrubTween.progress(1).kill();
                scrubTween = 0;
            } else scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
                ease: "expo",
                totalProgress: "+=0",
                duration: scrubSmooth,
                paused: true,
                onComplete: function onComplete() {
                    return onScrubComplete && onScrubComplete(self);
                }
            });
        };
        if (animation) {
            animation.vars.lazy = false;
            animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://greensock.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010
            self.animation = animation.pause();
            animation.scrollTrigger = self;
            self.scrubDuration(scrub);
            snap1 = 0;
            id || (id = animation.vars.id);
        }
        if (snap) {
            // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
            if (!_isObject(snap) || snap.push) snap = {
                snapTo: snap
            };
            "scrollBehavior" in _body.style && gsap.set(isViewport ? [
                _body,
                _docEl
            ] : scroller, {
                scrollBehavior: "auto"
            }); // smooth scrolling doesn't work with snap.
            (0, _observerJs._scrollers).forEach(function(o) {
                return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
            }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters
            snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
                return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
            } : gsap.utils.snap(snap.snapTo);
            snapDurClamp = snap.duration || {
                min: 0.1,
                max: 2
            };
            snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
            snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
                var scroll = scrollFunc(), refreshedRecently = _getTime() - lastRefresh < 500, tween = tweenTo.tween;
                if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
                    var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0, change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue = _clamp(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
                    if (scroll <= end && scroll >= start && endScroll !== scroll) {
                        if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
                        return;
                        if (snap.inertia === false) change1 = endValue - progress;
                        tweenTo(endScroll, {
                            duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                            ease: snap.ease || "power3",
                            data: _abs(endScroll - scroll),
                            // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                            onInterrupt: function onInterrupt() {
                                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                            },
                            onComplete: function onComplete() {
                                self.update();
                                lastSnap = scrollFunc();
                                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                                onSnapComplete && onSnapComplete(self);
                                _onComplete && _onComplete(self);
                            }
                        }, scroll, change1 * change, endScroll - scroll - change1 * change);
                        onStart && onStart(self, tweenTo.tween);
                    }
                } else if (self.isActive && lastSnap !== scroll) snapDelayedCall.restart(true);
            }).pause();
        }
        id && (_ids[id] = self);
        trigger = self.trigger = (0, _observerJs._getTarget)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = pin === true ? trigger : (0, _observerJs._getTarget)(pin);
        _isString(toggleClass) && (toggleClass = {
            targets: trigger,
            className: toggleClass
        });
        if (pin) {
            pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)
            self.pin = pin;
            pinCache = gsap.core.getCache(pin);
            if (!pinCache.spacer) {
                // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
                if (pinSpacer) {
                    pinSpacer = (0, _observerJs._getTarget)(pinSpacer);
                    pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular
                    pinCache.spacerIsNative = !!pinSpacer;
                    pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
                }
                pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
                spacer.classList.add("pin-spacer");
                id && spacer.classList.add("pin-spacer-" + id);
                pinCache.pinState = pinOriginalState = _getState(pin);
            } else pinOriginalState = pinCache.pinState;
            vars.force3D !== false && gsap.set(pin, {
                force3D: true
            });
            self.spacer = spacer = pinCache.spacer;
            cs = _getComputedStyle(pin);
            spacingStart = cs[pinSpacing + direction.os2];
            pinGetter = gsap.getProperty(pin);
            pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).
            _swapPinIn(pin, spacer, cs);
            pinState = _getState(pin);
        }
        if (markers) {
            markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
            markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
            markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
            offset = markerStartTrigger["offset" + direction.op.d2];
            var content = (0, _observerJs._getTarget)((0, _observerJs._getProxyProp)(scroller, "content") || scroller);
            markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
            markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
            containerAnimation && (caMarkerSetter = gsap.quickSetter([
                markerStart,
                markerEnd
            ], direction.a, _px));
            if (!useFixedPosition && !((0, _observerJs._proxies).length && (0, _observerJs._getProxyProp)(scroller, "fixedMarkers") === true)) {
                _makePositionable(isViewport ? _body : scroller);
                gsap.set([
                    markerStartTrigger,
                    markerEndTrigger
                ], {
                    force3D: true
                });
                markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
                markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
            }
        }
        if (containerAnimation) {
            var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
            containerAnimation.eventCallback("onUpdate", function() {
                self.update(0, 0, 1);
                oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
            });
        }
        self.previous = function() {
            return _triggers[_triggers.indexOf(self) - 1];
        };
        self.next = function() {
            return _triggers[_triggers.indexOf(self) + 1];
        };
        self.revert = function(revert, temp) {
            if (!temp) return self.kill(true);
             // for compatibility with gsap.context() and gsap.matchMedia() which call revert()
            var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
            if (r !== self.isReverted) {
                if (r) {
                    prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.
                    prevProgress = self.progress;
                    prevAnimProgress = animation && animation.progress();
                }
                markerStart && [
                    markerStart,
                    markerEnd,
                    markerStartTrigger,
                    markerEndTrigger
                ].forEach(function(m) {
                    return m.style.display = r ? "none" : "block";
                });
                if (r) {
                    _refreshing = self;
                    self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
                }
                if (pin && (!pinReparent || !self.isActive)) {
                    if (r) _swapPinOut(pin, spacer, pinOriginalState);
                    else _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
                }
                r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.
                _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.
                self.isReverted = r;
            }
        };
        self.refresh = function(soft, force, position, pinOffset) {
            // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
            if ((_refreshing || !self.enabled) && !force) return;
            if (pin && soft && _lastScrollTime) {
                _addListener(ScrollTrigger, "scrollEnd", _softRefresh);
                return;
            }
            !_refreshingAll && onRefreshInit && onRefreshInit(self);
            _refreshing = self;
            if (tweenTo.tween && !position) {
                // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
                tweenTo.tween.kill();
                tweenTo.tween = 0;
            }
            scrubTween && scrubTween.pause();
            invalidateOnRefresh && animation && animation.revert({
                kill: false
            }).invalidate();
            self.isReverted || self.revert(true, true);
            self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any
            var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0, _observerJs._getTarget)(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
            if (markers && _isObject(position)) {
                // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
                markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
            }
            while(i--){
                // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
                curTrigger = _triggers[i];
                curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.
                curPin = curTrigger.pin;
                if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
                    revertedPins || (revertedPins = []);
                    revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly
                    curTrigger.revert(true, true);
                }
                if (curTrigger !== _triggers[i]) {
                    // in case it got removed.
                    triggerIndex--;
                    i--;
                }
            }
            _isFunction(parsedStart) && (parsedStart = parsedStart(self));
            parsedStart = _parseClamp(parsedStart, "start", self);
            start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
            _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
            if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
                if (~parsedEnd.indexOf(" ")) parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
                else {
                    offset = _offsetToPx(parsedEnd.substr(2), size);
                    parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.
                    parsedEndTrigger = trigger;
                }
            }
            parsedEnd = _parseClamp(parsedEnd, "end", self);
            end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
            offset = 0;
            i = triggerIndex;
            while(i--){
                curTrigger = _triggers[i];
                curPin = curTrigger.pin;
                if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
                    cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
                    if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) // numeric start values shouldn't be offset at all - treat them as absolute
                    offset += cs * (1 - curTrigger.progress);
                    curPin === pin && (otherPinOffset += cs);
                }
            }
            start += offset;
            end += offset;
            self._startClamp && (self._startClamp += offset);
            if (self._endClamp && !_refreshingAll) {
                self._endClamp = end || -0.001;
                end = Math.min(end, _maxScroll(scroller, direction));
            }
            change = end - start || (start -= 0.01) && 0.001;
            if (isFirstRefresh) // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
            prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
            self._pinPush = otherPinOffset;
            if (markerStart && offset) {
                // offset the markers if necessary
                cs = {};
                cs[direction.a] = "+=" + offset;
                pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
                gsap.set([
                    markerStart,
                    markerEnd
                ], cs);
            }
            if (pin) {
                cs = _getComputedStyle(pin);
                isVertical = direction === (0, _observerJs._vertical);
                scroll = scrollFunc(); // recalculate because the triggers can affect the scroll
                pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
                if (!max && end > 1) {
                    // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
                    forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
                    forcedOverflow = {
                        style: forcedOverflow,
                        value: forcedOverflow["overflow" + direction.a.toUpperCase()]
                    };
                    if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
                    forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
                }
                _swapPinIn(pin, spacer, cs);
                pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.
                bounds = _getBounds(pin, true);
                oppositeScroll = useFixedPosition && (0, _observerJs._getScrollFunc)(scroller, isVertical ? (0, _observerJs._horizontal) : (0, _observerJs._vertical))();
                if (pinSpacing) {
                    spacerState = [
                        pinSpacing + direction.os2,
                        change + otherPinOffset + _px
                    ];
                    spacerState.t = spacer;
                    i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
                    i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).
                    _setState(spacerState);
                    if (pinnedContainer) // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
                    _triggers.forEach(function(t) {
                        if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) t._subPinOffset = true;
                    });
                    useFixedPosition && scrollFunc(prevScroll);
                }
                if (useFixedPosition) {
                    override = {
                        top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                        left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                        boxSizing: "border-box",
                        position: "fixed"
                    };
                    override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
                    override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
                    override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
                    override[_padding] = cs[_padding];
                    override[_padding + _Top] = cs[_padding + _Top];
                    override[_padding + _Right] = cs[_padding + _Right];
                    override[_padding + _Bottom] = cs[_padding + _Bottom];
                    override[_padding + _Left] = cs[_padding + _Left];
                    pinActiveState = _copyState(pinOriginalState, override, pinReparent);
                    _refreshingAll && scrollFunc(0);
                }
                if (animation) {
                    // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
                    initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.
                    _suppressOverwrites(1);
                    animation.render(animation.duration(), true, true);
                    pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
                    pinMoves = Math.abs(change - pinChange) > 1;
                    useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.
                    animation.render(0, true, true);
                    initted || animation.invalidate(true);
                    animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.
                    _suppressOverwrites(0);
                } else pinChange = change;
                forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
            } else if (trigger && scrollFunc() && !containerAnimation) {
                // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
                bounds = trigger.parentNode;
                while(bounds && bounds !== _body){
                    if (bounds._pinOffset) {
                        start -= bounds._pinOffset;
                        end -= bounds._pinOffset;
                    }
                    bounds = bounds.parentNode;
                }
            }
            revertedPins && revertedPins.forEach(function(t) {
                return t.revert(false, true);
            });
            self.start = start;
            self.end = end;
            scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity
            if (!containerAnimation && !_refreshingAll) {
                scroll1 < prevScroll && scrollFunc(prevScroll);
                self.scroll.rec = 0;
            }
            self.revert(false, true);
            lastRefresh = _getTime();
            if (snapDelayedCall) {
                lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
                // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.
                snapDelayedCall.restart(true);
            }
            _refreshing = 0;
            animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().
            if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
                // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
                animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.
                self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
            }
            pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
            scrubTween && scrubTween.invalidate();
            if (!isNaN(markerStartOffset)) {
                // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
                markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
                markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);
                _shiftMarker(markerStartTrigger, direction, markerStartOffset);
                _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
                _shiftMarker(markerEndTrigger, direction, markerEndOffset);
                _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
            }
            isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.
            if (onRefresh && !_refreshingAll && !executingOnRefresh) {
                // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
                executingOnRefresh = true;
                onRefresh(self);
                executingOnRefresh = false;
            }
        };
        self.getVelocity = function() {
            return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
        };
        self.endAnimation = function() {
            _endAnimation(self.callbackAnimation);
            if (animation) scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
        };
        self.labelToScroll = function(label) {
            return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self.getTrailing = function(name) {
            var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
            return (_isString(name) ? a.filter(function(t) {
                return t.vars.preventOverlaps === name;
            }) : a).filter(function(t) {
                return self.direction > 0 ? t.end <= start : t.start >= end;
            });
        };
        self.update = function(reset, recordVelocity, forceFake) {
            if (containerAnimation && !forceFake && !reset) return;
            var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
            if (recordVelocity) {
                scroll2 = scroll1;
                scroll1 = containerAnimation ? scrollFunc() : scroll;
                if (snap) {
                    snap2 = snap1;
                    snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
                }
            } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).
            anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);
            if (clipped !== prevProgress && self.enabled) {
                isActive = self.isActive = !!clipped && clipped < 1;
                wasActive = !!prevProgress && prevProgress < 1;
                toggled = isActive !== wasActive;
                stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)
                self.direction = clipped > prevProgress ? 1 : -1;
                self.progress = clipped;
                if (stateChanged && !_refreshing) {
                    toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.
                    if (isToggle) {
                        action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)
                        isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
                    }
                }
                preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
                    return t.endAnimation();
                }));
                if (!isToggle) {
                    if (scrubTween && !_refreshing && !_startup) {
                        scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.
                        if (scrubTween.resetTo) scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                        else {
                            // legacy support (courtesy), before 3.10.0
                            scrubTween.vars.totalProgress = clipped;
                            scrubTween.invalidate().restart();
                        }
                    } else if (animation) animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
                }
                if (pin) {
                    reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
                    if (!useFixedPosition) pinSetter(_round(pinStart + pinChange * clipped));
                    else if (stateChanged) {
                        isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)
                        if (pinReparent) {
                            if (!reset && (isActive || isAtMax)) {
                                var bounds = _getBounds(pin, true), _offset = scroll - start;
                                _reparent(pin, _body, bounds.top + (direction === (0, _observerJs._vertical) ? _offset : 0) + _px, bounds.left + (direction === (0, _observerJs._vertical) ? 0 : _offset) + _px);
                            } else _reparent(pin, spacer);
                        }
                        _setState(isActive || isAtMax ? pinActiveState : pinState);
                        pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
                    }
                }
                snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
                toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
                    return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
                }); // classes could affect positioning, so do it even if reset or refreshing is true.
                onUpdate && !isToggle && !reset && onUpdate(self);
                if (stateChanged && !_refreshing) {
                    if (isToggle) {
                        if (isTakingAction) {
                            if (action === "complete") animation.pause().totalProgress(1);
                            else if (action === "reset") animation.restart(true).pause();
                            else if (action === "restart") animation.restart(true);
                            else animation[action]();
                        }
                        onUpdate && onUpdate(self);
                    }
                    if (toggled || !_limitCallbacks) {
                        // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
                        onToggle && toggled && _callback(self, onToggle);
                        callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                        once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.
                        if (!toggled) {
                            // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
                            toggleState = clipped === 1 ? 1 : 3;
                            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
                        }
                    }
                    if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
                        _endAnimation(self.callbackAnimation);
                        scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
                    }
                } else if (isToggle && onUpdate && !_refreshing) onUpdate(self);
            } // update absolutely-positioned markers (only if the scroller isn't the viewport)
            if (markerEndSetter) {
                var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
                markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
                markerEndSetter(n);
            }
            caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self.enable = function(reset, refresh) {
            if (!self.enabled) {
                self.enabled = true;
                _addListener(scroller, "resize", _onResize);
                isViewport || _addListener(scroller, "scroll", _onScroll);
                onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (reset !== false) {
                    self.progress = prevProgress = 0;
                    scroll1 = scroll2 = lastSnap = scrollFunc();
                }
                refresh !== false && self.refresh();
            }
        };
        self.getTween = function(snap) {
            return snap && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
            // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
            if (containerAnimation) {
                // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
                var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
                newStart = st.start + _change * newStart / duration;
                newEnd = st.start + _change * newEnd / duration;
            }
            self.refresh(false, false, {
                start: _keepClamp(newStart, keepClamp && !!self._startClamp),
                end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
            }, pinOffset);
            self.update();
        };
        self.adjustPinSpacing = function(amount) {
            if (spacerState && amount) {
                var i = spacerState.indexOf(direction.d) + 1;
                spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
                spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
                _setState(spacerState);
            }
        };
        self.disable = function(reset, allowAnimation) {
            if (self.enabled) {
                reset !== false && self.revert(true, true);
                self.enabled = self.isActive = false;
                allowAnimation || scrubTween && scrubTween.pause();
                prevScroll = 0;
                pinCache && (pinCache.uncache = 1);
                onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);
                if (snapDelayedCall) {
                    snapDelayedCall.pause();
                    tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
                }
                if (!isViewport) {
                    var i = _triggers.length;
                    while(i--){
                        if (_triggers[i].scroller === scroller && _triggers[i] !== self) return; //don't remove the listeners if there are still other triggers referencing it.
                    }
                    _removeListener(scroller, "resize", _onResize);
                    isViewport || _removeListener(scroller, "scroll", _onScroll);
                }
            }
        };
        self.kill = function(revert, allowAnimation) {
            self.disable(revert, allowAnimation);
            scrubTween && !allowAnimation && scrubTween.kill();
            id && delete _ids[id];
            var i = _triggers.indexOf(self);
            i >= 0 && _triggers.splice(i, 1);
            i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
            // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.
            i = 0;
            _triggers.forEach(function(t) {
                return t.scroller === self.scroller && (i = 1);
            });
            i || _refreshingAll || (self.scroll.rec = 0);
            if (animation) {
                animation.scrollTrigger = null;
                revert && animation.revert({
                    kill: false
                });
                allowAnimation || animation.kill();
            }
            markerStart && [
                markerStart,
                markerEnd,
                markerStartTrigger,
                markerEndTrigger
            ].forEach(function(m) {
                return m.parentNode && m.parentNode.removeChild(m);
            });
            _primary === self && (_primary = 0);
            if (pin) {
                pinCache && (pinCache.uncache = 1);
                i = 0;
                _triggers.forEach(function(t) {
                    return t.pin === pin && i++;
                });
                i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
            }
            vars.onKill && vars.onKill(self);
        };
        _triggers.push(self);
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        if (animation && animation.add && !change) {
            // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
            var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().
            self.update = function() {
                self.update = updateFunc;
                start || end || self.refresh();
            };
            gsap.delayedCall(0.01, self.update);
            change = 0.01;
            start = end = 0;
        } else self.refresh();
        pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
    };
    ScrollTrigger.register = function register(core) {
        if (!_coreInitted) {
            gsap = core || _getGSAP();
            _windowExists() && window.document && ScrollTrigger.enable();
            _coreInitted = _enabled;
        }
        return _coreInitted;
    };
    ScrollTrigger.defaults = function defaults(config) {
        if (config) for(var p in config)_defaults[p] = config[p];
        return _defaults;
    };
    ScrollTrigger.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function(trigger) {
            return trigger[kill ? "kill" : "disable"](reset);
        });
        _removeListener(_win, "wheel", _onScroll);
        _removeListener(_doc, "scroll", _onScroll);
        clearInterval(_syncInterval);
        _removeListener(_doc, "touchcancel", _passThrough);
        _removeListener(_body, "touchstart", _passThrough);
        _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
        _resizeDelay.kill();
        _iterateAutoRefresh(_removeListener);
        for(var i = 0; i < (0, _observerJs._scrollers).length; i += 3){
            _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 1]);
            _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 2]);
        }
    };
    ScrollTrigger.enable = function enable() {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        if (gsap) {
            _toArray = gsap.utils.toArray;
            _clamp = gsap.utils.clamp;
            _context = gsap.core.context || _passThrough;
            _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
            _scrollRestoration = _win.history.scrollRestoration || "auto";
            _lastScroll = _win.pageYOffset;
            gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.
            if (_body) {
                _enabled = 1;
                _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.
                _div100vh.style.height = "100vh";
                _div100vh.style.position = "absolute";
                _refresh100vh();
                _rafBugFix();
                (0, _observerJs.Observer).register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
                ScrollTrigger.isTouch = (0, _observerJs.Observer).isTouch;
                _fixIOSBug = (0, _observerJs.Observer).isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503
                _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.
                _root = [
                    _win,
                    _doc,
                    _docEl,
                    _body
                ];
                if (gsap.matchMedia) {
                    ScrollTrigger.matchMedia = function(vars) {
                        var mm = gsap.matchMedia(), p;
                        for(p in vars)mm.add(p, vars[p]);
                        return mm;
                    };
                    gsap.addEventListener("matchMediaInit", function() {
                        return _revertAll();
                    });
                    gsap.addEventListener("matchMediaRevert", function() {
                        return _revertRecorded();
                    });
                    gsap.addEventListener("matchMedia", function() {
                        _refreshAll(0, 1);
                        _dispatch("matchMedia");
                    });
                    gsap.matchMedia("(orientation: portrait)", function() {
                        // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
                        _setBaseDimensions();
                        return _setBaseDimensions;
                    });
                } else console.warn("Requires GSAP 3.11.0 or later");
                _setBaseDimensions();
                _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!
                var bodyStyle = _body.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap.core.Animation.prototype, bounds, i;
                AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
                    value: function value() {
                        return this.time(-0.01, true);
                    }
                }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)
                bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.
                bounds = _getBounds(_body);
                (0, _observerJs._vertical).m = Math.round(bounds.top + (0, _observerJs._vertical).sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding
                (0, _observerJs._horizontal).m = Math.round(bounds.left + (0, _observerJs._horizontal).sc()) || 0;
                border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.
                _syncInterval = setInterval(_sync, 250);
                gsap.delayedCall(0.5, function() {
                    return _startup = 0;
                });
                _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.
                _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/
                _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);
                _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);
                _transformProp = gsap.utils.checkPrefix("transform");
                _stateProps.push(_transformProp);
                _coreInitted = _getTime();
                _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
                _autoRefresh = [
                    _doc,
                    "visibilitychange",
                    function() {
                        var w = _win.innerWidth, h = _win.innerHeight;
                        if (_doc.hidden) {
                            _prevWidth = w;
                            _prevHeight = h;
                        } else if (_prevWidth !== w || _prevHeight !== h) _onResize();
                    },
                    _doc,
                    "DOMContentLoaded",
                    _refreshAll,
                    _win,
                    "load",
                    _refreshAll,
                    _win,
                    "resize",
                    _onResize
                ];
                _iterateAutoRefresh(_addListener);
                _triggers.forEach(function(trigger) {
                    return trigger.enable(0, 1);
                });
                for(i = 0; i < (0, _observerJs._scrollers).length; i += 3){
                    _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 1]);
                    _wheelListener(_removeListener, (0, _observerJs._scrollers)[i], (0, _observerJs._scrollers)[i + 2]);
                }
            }
        }
    };
    ScrollTrigger.config = function config(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
        "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
            _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
            _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
    };
    ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
        var t = (0, _observerJs._getTarget)(target), i = (0, _observerJs._scrollers).indexOf(t), isViewport = _isViewport(t);
        if (~i) (0, _observerJs._scrollers).splice(i, isViewport ? 6 : 2);
        if (vars) isViewport ? (0, _observerJs._proxies).unshift(_win, vars, _body, vars, _docEl, vars) : (0, _observerJs._proxies).unshift(t, vars);
    };
    ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
        _triggers.forEach(function(t) {
            return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
    };
    ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = (_isString(element) ? (0, _observerJs._getTarget)(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
    };
    ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        _isString(element) && (element = (0, _observerJs._getTarget)(element));
        var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
    };
    ScrollTrigger.killAll = function killAll(allowListeners) {
        _triggers.slice(0).forEach(function(t) {
            return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
            var listeners = _listeners.killAll || [];
            _listeners = {};
            listeners.forEach(function(f) {
                return f();
            });
        }
    };
    return ScrollTrigger;
}();
ScrollTrigger.version = "3.12.2";
ScrollTrigger.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
        // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
        if (target && target.style) {
            var i = _savedStyles.indexOf(target);
            i >= 0 && _savedStyles.splice(i, 5);
            _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
        }
    }) : _savedStyles;
};
ScrollTrigger.revert = function(soft, media) {
    return _revertAll(!soft, media);
};
ScrollTrigger.create = function(vars, animation) {
    return new ScrollTrigger(vars, animation);
};
ScrollTrigger.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};
ScrollTrigger.update = function(force) {
    return ++(0, _observerJs._scrollers).cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger.clearScrollMemory = _clearScrollMemory;
ScrollTrigger.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? (0, _observerJs._horizontal) : (0, _observerJs._vertical));
};
ScrollTrigger.getScrollFunc = function(element, horizontal) {
    return (0, _observerJs._getScrollFunc)((0, _observerJs._getTarget)(element), horizontal ? (0, _observerJs._horizontal) : (0, _observerJs._vertical));
};
ScrollTrigger.getById = function(id) {
    return _ids[id];
};
ScrollTrigger.getAll = function() {
    return _triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
    });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.
ScrollTrigger.isScrolling = function() {
    return !!_lastScrollTime;
};
ScrollTrigger.snapDirectional = _snapDirectional;
ScrollTrigger.addEventListener = function(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger.removeEventListener = function(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
};
ScrollTrigger.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback(type, callback) {
        var elements = [], triggers = [], delay = gsap.delayedCall(interval, function() {
            callback(elements, triggers);
            elements = [];
            triggers = [];
        }).pause();
        return function(self) {
            elements.length || delay.restart(true);
            elements.push(self.trigger);
            triggers.push(self);
            batchMax <= elements.length && delay.progress(1);
        };
    }, p;
    for(p in vars)varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
    if (_isFunction(batchMax)) {
        batchMax = batchMax();
        _addListener(ScrollTrigger, "refresh", function() {
            return batchMax = vars.batchMax();
        });
    }
    _toArray(targets).forEach(function(target) {
        var config = {};
        for(p in varsCopy)config[p] = varsCopy[p];
        config.trigger = target;
        result.push(ScrollTrigger.create(config));
    });
    return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
}, _allowNativePanning = function _allowNativePanning(target, direction) {
    if (direction === true) target.style.removeProperty("touch-action");
    else target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + ((0, _observerJs.Observer).isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
    target === _docEl && _allowNativePanning(_body, direction);
}, _overflow = {
    auto: 1,
    scroll: 1
}, _nestedScroll = function _nestedScroll(_ref5) {
    var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap.core.getCache(node), time = _getTime(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2000) {
        // cache for 2 seconds to improve performance.
        while(node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX])))node = node.parentNode;
        cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
        cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
    }
}, // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
    return (0, _observerJs.Observer).create({
        target: target,
        capture: true,
        debounce: false,
        lockAxis: true,
        type: type,
        onWheel: nested = nested && _nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
            return inputs && _addListener(_doc, (0, _observerJs.Observer).eventTypes[0], _captureInputs, false, true);
        },
        onDisable: function onDisable() {
            return _removeListener(_doc, (0, _observerJs.Observer).eventTypes[0], _captureInputs, true);
        }
    });
}, _inputExp = /(input|label|select|textarea)/i, _inputIsFocused, _captureInputs = function _captureInputs(e) {
    var isInput = _inputExp.test(e.target.tagName);
    if (isInput || _inputIsFocused) {
        e._gsapAllow = true;
        _inputIsFocused = isInput;
    }
}, _getScrollNormalizer = function _getScrollNormalizer(vars) {
    _isObject(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = (0, _observerJs._getTarget)(vars.target) || _docEl, smoother = gsap.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && (0, _observerJs._getTarget)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = (0, _observerJs._getScrollFunc)(target, (0, _observerJs._vertical)), scrollFuncX = (0, _observerJs._getScrollFunc)(target, (0, _observerJs._horizontal)), scale = 1, initialScale = ((0, _observerJs.Observer).isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
        return momentum(self);
    } : function() {
        return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove() {
        return skipTouchMove = false;
    }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps() {
        maxY = _maxScroll(target, (0, _observerJs._vertical));
        scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, (0, _observerJs._horizontal))));
        lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset() {
        content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag() {
        if (skipTouchMove) {
            requestAnimationFrame(resumeTouchMove);
            var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
            if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
                scrollFuncY.offset = scroll - scrollFuncY.v;
                var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
                content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
                content._gsap.y = y + "px";
                scrollFuncY.cacheID = (0, _observerJs._scrollers).cache;
                _updateAll();
            }
            return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize() {
        // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    };
    content && gsap.set(content, {
        y: "+=0"
    }); // to ensure there's a cache (element._gsap)
    vars.ignoreCheck = function(e) {
        return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
    };
    vars.onPress = function() {
        skipTouchMove = false;
        var prevScale = scale;
        scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) onStopDelayedCall.restart(true);
        else {
            (0, _observerJs._scrollers).cache++; // make sure we're pulling the non-cached value
            // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)
            var dur = resolveMomentumDuration(), currentScroll, endScroll;
            if (normalizeScrollX) {
                currentScroll = scrollFuncX();
                endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.
                dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, (0, _observerJs._horizontal)));
                tween.vars.scrollX = scrollClampX(endScroll);
            }
            currentScroll = scrollFuncY();
            endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, (0, _observerJs._vertical)));
            tween.vars.scrollY = scrollClampY(endScroll);
            tween.invalidate().duration(dur).play(0.01);
            if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
            gsap.to({}, {
                onUpdate: onResize,
                duration: dur
            });
        }
        onRelease && onRelease(self);
    };
    vars.onWheel = function() {
        tween._ts && tween.pause();
        if (_getTime() - wheelRefresh > 1000) {
            // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
            lastRefreshID = 0;
            wheelRefresh = _getTime();
        }
    };
    vars.onChange = function(self, dx, dy, xArray, yArray) {
        _refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.
        if (dy) {
            scrollFuncY.offset && removeContentOffset();
            var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
            isTouch && y !== yClamped && (startScrollY += yClamped - y);
            scrollFuncY(yClamped);
        }
        (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
        _allowNativePanning(target, normalizeScrollX ? false : "x");
        ScrollTrigger.addEventListener("refresh", onResize);
        _addListener(_win, "resize", onResize);
        if (scrollFuncY.smooth) {
            scrollFuncY.target.style.scrollBehavior = "auto";
            scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
    };
    vars.onDisable = function() {
        _allowNativePanning(target, true);
        _removeListener(_win, "resize", onResize);
        ScrollTrigger.removeEventListener("refresh", onResize);
        inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self = new (0, _observerJs.Observer)(vars);
    self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.
    _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping
    onStopDelayedCall = self._dc;
    tween = gsap.to(self, {
        ease: "power4",
        paused: true,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
                return tween.pause();
            })
        },
        onUpdate: _updateAll,
        onComplete: onStopDelayedCall.vars.onComplete
    }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.
    return self;
};
ScrollTrigger.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1000000 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1000000);
    });
};
ScrollTrigger.observe = function(vars) {
    return new (0, _observerJs.Observer)(vars);
};
ScrollTrigger.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") return _normalizer;
    if (vars === true && _normalizer) return _normalizer.enable();
    if (vars === false) return _normalizer && _normalizer.kill();
    var normalizer = vars instanceof (0, _observerJs.Observer) ? vars : _getScrollNormalizer(vars);
    _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
    _isViewport(normalizer.target) && (_normalizer = normalizer);
    return normalizer;
};
ScrollTrigger.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp: (0, _observerJs._getVelocityProp),
    _inputObserver: _inputObserver,
    _scrollers: (0, _observerJs._scrollers),
    _proxies: (0, _observerJs._proxies),
    bridge: {
        // when normalizeScroll sets the scroll position (ss = setScroll)
        ss: function ss() {
            _lastScrollTime || _dispatch("scrollStart");
            _lastScrollTime = _getTime();
        },
        // a way to get the _refreshing value in Observer
        ref: function ref() {
            return _refreshing;
        }
    }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);

},{"./Observer.js":"aAWxM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAWxM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observer", ()=>Observer);
parcelHelpers.export(exports, "default", ()=>Observer);
parcelHelpers.export(exports, "_isViewport", ()=>_isViewport);
parcelHelpers.export(exports, "_scrollers", ()=>_scrollers);
parcelHelpers.export(exports, "_getScrollFunc", ()=>_getScrollFunc);
parcelHelpers.export(exports, "_getProxyProp", ()=>_getProxyProp);
parcelHelpers.export(exports, "_proxies", ()=>_proxies);
parcelHelpers.export(exports, "_getVelocityProp", ()=>_getVelocityProp);
parcelHelpers.export(exports, "_vertical", ()=>_vertical);
parcelHelpers.export(exports, "_horizontal", ()=>_horizontal);
parcelHelpers.export(exports, "_getTarget", ()=>_getTarget);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var gsap, _coreInitted, _clamp, _win, _doc, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _context, _getGSAP = function _getGSAP() {
    return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
}, _startup = 1, _observers = [], _scrollers = [], _proxies = [], _getTime = Date.now, _bridge = function _bridge(name, value) {
    return value;
}, _integrate = function _integrate() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge(name, value) {
        return data[name](value);
    };
}, _getProxyProp = function _getProxyProp(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
}, _isViewport = function _isViewport(el) {
    return !!~_root.indexOf(el);
}, _addListener = function _addListener(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
    });
}, _removeListener = function _removeListener(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
}, _scrollLeft = "scrollLeft", _scrollTop = "scrollTop", _onScroll = function _onScroll() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
}, _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
    var cachingFunc = function cachingFunc(value) {
        // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
        if (value || value === 0) {
            _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.
            var isNormalizing = _normalizer && _normalizer.isPressed;
            value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!
            f(value);
            cachingFunc.cacheID = _scrollers.cache;
            isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
        } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
            cachingFunc.cacheID = _scrollers.cache;
            cachingFunc.v = f();
        }
        return cachingFunc.v + cachingFunc.offset;
    };
    cachingFunc.offset = 0;
    return f && cachingFunc;
}, _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
}, _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
}, _getTarget = function _getTarget(t, self) {
    return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
}, _getScrollFunc = function _getScrollFunc(element, _ref) {
    var s = _ref.s, sc = _ref.sc;
    // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
    _isViewport(element) && (element = _doc.scrollingElement || _docEl);
    var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i && (i = _scrollers.push(element) - 1);
    _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs
    var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
    })));
    func.target = element;
    prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.
    return func;
}, _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update(value, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
            v2 = v1;
            v1 = value;
            t2 = t1;
            t1 = t;
        } else if (useDelta) v1 += value;
        else // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
        v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }, reset = function reset() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
    }, getVelocity = function getVelocity(latestValue) {
        var tOld = t2, vOld = v2, t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
    };
    return {
        update: update,
        reset: reset,
        getVelocity: getVelocity
    };
}, _getEvent = function _getEvent(e, preventDefault) {
    preventDefault && !e._gsapAllow && e.preventDefault();
    return e.changedTouches ? e.changedTouches[0] : e;
}, _getAbsoluteMax = function _getAbsoluteMax(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
}, _setScrollTrigger = function _setScrollTrigger() {
    ScrollTrigger = gsap.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
}, _initCore = function _initCore(core) {
    gsap = core || _getGSAP();
    if (gsap && typeof document !== "undefined" && document.body) {
        _win = window;
        _doc = document;
        _docEl = _doc.documentElement;
        _body = _doc.body;
        _root = [
            _win,
            _doc,
            _docEl,
            _body
        ];
        _clamp = gsap.utils.clamp;
        _context = gsap.core.context || function() {};
        _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.
        _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
            return _startup = 0;
        }, 500);
        _setScrollTrigger();
        _coreInitted = 1;
    }
    return _coreInitted;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/ function() {
    function Observer(vars) {
        this.init(vars);
    }
    var _proto = Observer.prototype;
    _proto.init = function init(vars) {
        _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target = _getTarget(target) || _docEl;
        this.vars = vars;
        ignore && (ignore = gsap.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", // for devices that accommodate mouse events and touch events, we need to distinguish.
        isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [
            0,
            0,
            0
        ], // wheel, scroll, pointer/touch
        deltaY = [
            0,
            0,
            0
        ], onClickTime = 0, clickCapture = function clickCapture() {
            return onClickTime = _getTime();
        }, _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
            return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc() {
            self._vx.reset();
            self._vy.reset();
            onStopDelayedCall.pause();
            onStop && onStop(self);
        }, update = function update() {
            var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
            onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.
            if (changedX) {
                onRight && self.deltaX > 0 && onRight(self);
                onLeft && self.deltaX < 0 && onLeft(self);
                onChangeX && onChangeX(self);
                onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
                prevDeltaX = self.deltaX;
                deltaX[0] = deltaX[1] = deltaX[2] = 0;
            }
            if (changedY) {
                onDown && self.deltaY > 0 && onDown(self);
                onUp && self.deltaY < 0 && onUp(self);
                onChangeY && onChangeY(self);
                onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
                prevDeltaY = self.deltaY;
                deltaY[0] = deltaY[1] = deltaY[2] = 0;
            }
            if (moved || dragged) {
                onMove && onMove(self);
                if (dragged) {
                    onDrag(self);
                    dragged = false;
                }
                moved = false;
            }
            locked && (locked = false, true) && onLockAxis && onLockAxis(self);
            if (wheeled) {
                onWheel(self);
                wheeled = false;
            }
            id = 0;
        }, onDelta = function onDelta(x, y, index) {
            deltaX[index] += x;
            deltaY[index] += y;
            self._vx.update(x);
            self._vy.update(y);
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
            if (lockAxis && !axis) {
                self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
                locked = true;
            }
            if (axis !== "y") {
                deltaX[2] += x;
                self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.
            }
            if (axis !== "x") {
                deltaY[2] += y;
                self._vy.update(y, true);
            }
            debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag(e) {
            if (_ignoreCheck(e, 1)) return;
            e = _getEvent(e, preventDefault);
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
            self.x = x;
            self.y = y;
            if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
                onDrag && (dragged = true);
                isDragging || (self.isDragging = true);
                onTouchOrPointerDelta(dx, dy);
                isDragging || onDragStart && onDragStart(self);
            }
        }, _onPress = self.onPress = function(e) {
            if (_ignoreCheck(e, 1) || e && e.button) return;
            self.axis = axis = null;
            onStopDelayedCall.pause();
            self.isPressed = true;
            e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.
            prevDeltaX = prevDeltaY = 0;
            self.startX = self.x = e.clientX;
            self.startY = self.y = e.clientY;
            self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.
            self._vy.reset();
            _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
            self.deltaX = self.deltaY = 0;
            onPress && onPress(self);
        }, _onRelease = self.onRelease = function(e) {
            if (_ignoreCheck(e, 1)) return;
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
            var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
            eventData = _getEvent(e);
            if (!wasDragging && isTrackingDrag) {
                self._vx.reset();
                self._vy.reset();
                if (preventDefault && allowClicks) gsap.delayedCall(0.08, function() {
                    // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
                    if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                        if (e.target.click) //some browsers (like mobile Safari) don't properly trigger the click event
                        e.target.click();
                        else if (ownerDoc.createEvent) {
                            var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                            syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                            e.target.dispatchEvent(syntheticEvent);
                        }
                    }
                });
            }
            self.isDragging = self.isGesturing = self.isPressed = false;
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
            onDragEnd && wasDragging && onDragEnd(self);
            onRelease && onRelease(self, wasDragging);
        }, _onGestureStart = function _onGestureStart(e) {
            return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
        }, _onGestureEnd = function _onGestureEnd() {
            return self.isGesturing = false, onGestureEnd(self);
        }, onScroll = function onScroll(e) {
            if (_ignoreCheck(e)) return;
            var x = scrollFuncX(), y = scrollFuncY();
            onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
            scrollX = x;
            scrollY = y;
            onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel(e) {
            if (_ignoreCheck(e)) return;
            e = _getEvent(e, preventDefault);
            onWheel && (wheeled = true);
            var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
            onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
            onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove(e) {
            if (_ignoreCheck(e)) return;
            var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
            self.x = x;
            self.y = y;
            moved = true;
            (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover(e) {
            self.event = e;
            onHover(self);
        }, _onHoverEnd = function _onHoverEnd(e) {
            self.event = e;
            onHoverEnd(self);
        }, _onClick = function _onClick(e) {
            return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
        };
        onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = _getVelocityProp(0, 50, true);
        self._vy = _getVelocityProp(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        _context(this);
        self.enable = function(e) {
            if (!self.isEnabled) {
                _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
                type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);
                if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
                    _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);
                    _addListener(ownerDoc, _eventTypes[2], _onRelease);
                    _addListener(ownerDoc, _eventTypes[3], _onRelease);
                    allowClicks && _addListener(target, "click", clickCapture, false, true);
                    onClick && _addListener(target, "click", _onClick);
                    onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
                    onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
                    onHover && _addListener(target, _pointerType + "enter", _onHover);
                    onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
                    onMove && _addListener(target, _pointerType + "move", _onMove);
                }
                self.isEnabled = true;
                e && e.type && _onPress(e);
                onEnable && onEnable(self);
            }
            return self;
        };
        self.disable = function() {
            if (self.isEnabled) {
                // only remove the _onScroll listener if there aren't any others that rely on the functionality.
                _observers.filter(function(o) {
                    return o !== self && _isViewport(o.target);
                }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
                if (self.isPressed) {
                    self._vx.reset();
                    self._vy.reset();
                    _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
                }
                _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
                _removeListener(target, "wheel", _onWheel, capture);
                _removeListener(target, _eventTypes[0], _onPress, capture);
                _removeListener(ownerDoc, _eventTypes[2], _onRelease);
                _removeListener(ownerDoc, _eventTypes[3], _onRelease);
                _removeListener(target, "click", clickCapture, true);
                _removeListener(target, "click", _onClick);
                _removeListener(ownerDoc, "gesturestart", _onGestureStart);
                _removeListener(ownerDoc, "gestureend", _onGestureEnd);
                _removeListener(target, _pointerType + "enter", _onHover);
                _removeListener(target, _pointerType + "leave", _onHoverEnd);
                _removeListener(target, _pointerType + "move", _onMove);
                self.isEnabled = self.isPressed = self.isDragging = false;
                onDisable && onDisable(self);
            }
        };
        self.kill = self.revert = function() {
            self.disable();
            var i = _observers.indexOf(self);
            i >= 0 && _observers.splice(i, 1);
            _normalizer === self && (_normalizer = 0);
        };
        _observers.push(self);
        isNormalizer && _isViewport(target) && (_normalizer = self);
        self.enable(event);
    };
    _createClass(Observer, [
        {
            key: "velocityX",
            get: function get() {
                return this._vx.getVelocity();
            }
        },
        {
            key: "velocityY",
            get: function get() {
                return this._vy.getVelocity();
            }
        }
    ]);
    return Observer;
}();
Observer.version = "3.12.2";
Observer.create = function(vars) {
    return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function() {
    return _observers.slice();
};
Observer.getById = function(id) {
    return _observers.filter(function(o) {
        return o.vars.id === id;
    })[0];
};
_getGSAP() && gsap.registerPlugin(Observer);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lFJKn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map);
var _leaflet = require("leaflet");
var _leafletCss = require("leaflet/dist/leaflet.css");
var _mapMarkerPng = require("../imgs/map-marker.png");
var _mapMarkerPngDefault = parcelHelpers.interopDefault(_mapMarkerPng);
const map = ()=>{
    const map = L.map("map", {
        dragging: false
    }).setView([
        51.50073355020347,
        -0.12462496081611447
    ], 17);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([
        51.50073355020347,
        -0.12462496081611447
    ], {
        icon: L.icon({
            iconUrl: (0, _mapMarkerPngDefault.default),
            iconSize: [
                34,
                34
            ],
            iconAnchor: [
                24,
                15
            ],
            popupAnchor: [
                -7,
                -5
            ]
        })
    }).addTo(map).bindPopup(L.popup({
        className: "custome-popup",
        minWidth: 100
    })).setPopupContent("WE ARE HERE").openPopup();
};

},{"leaflet":"iFbO2","leaflet/dist/leaflet.css":"6JhOO","../imgs/map-marker.png":"6MW1C","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iFbO2":[function(require,module,exports) {
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */ (function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    var version = "1.9.4";
    /*
   * @namespace Util
   *
   * Various utility functions, used by Leaflet internally.
   */ // @function extend(dest: Object, src?: Object): Object
    // Merges the properties of the `src` object (or multiple objects) into `dest` object and returns the latter. Has an `L.extend` shortcut.
    function extend(dest) {
        var i, j, len, src;
        for(j = 1, len = arguments.length; j < len; j++){
            src = arguments[j];
            for(i in src)dest[i] = src[i];
        }
        return dest;
    }
    // @function create(proto: Object, properties?: Object): Object
    // Compatibility polyfill for [Object.create](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
    var create$2 = Object.create || function() {
        function F() {}
        return function(proto) {
            F.prototype = proto;
            return new F();
        };
    }();
    // @function bind(fn: Function, …): Function
    // Returns a new function bound to the arguments passed, like [Function.prototype.bind](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
    // Has a `L.bind()` shortcut.
    function bind(fn, obj) {
        var slice = Array.prototype.slice;
        if (fn.bind) return fn.bind.apply(fn, slice.call(arguments, 1));
        var args = slice.call(arguments, 2);
        return function() {
            return fn.apply(obj, args.length ? args.concat(slice.call(arguments)) : arguments);
        };
    }
    // @property lastId: Number
    // Last unique ID used by [`stamp()`](#util-stamp)
    var lastId = 0;
    // @function stamp(obj: Object): Number
    // Returns the unique ID of an object, assigning it one if it doesn't have it.
    function stamp(obj) {
        if (!("_leaflet_id" in obj)) obj["_leaflet_id"] = ++lastId;
        return obj._leaflet_id;
    }
    // @function throttle(fn: Function, time: Number, context: Object): Function
    // Returns a function which executes function `fn` with the given scope `context`
    // (so that the `this` keyword refers to `context` inside `fn`'s code). The function
    // `fn` will be called no more than one time per given amount of `time`. The arguments
    // received by the bound function will be any arguments passed when binding the
    // function, followed by any arguments passed when invoking the bound function.
    // Has an `L.throttle` shortcut.
    function throttle(fn, time, context) {
        var lock, args, wrapperFn, later;
        later = function() {
            // reset lock and call if queued
            lock = false;
            if (args) {
                wrapperFn.apply(context, args);
                args = false;
            }
        };
        wrapperFn = function() {
            if (lock) // called too soon, queue to call later
            args = arguments;
            else {
                // call and lock until later
                fn.apply(context, arguments);
                setTimeout(later, time);
                lock = true;
            }
        };
        return wrapperFn;
    }
    // @function wrapNum(num: Number, range: Number[], includeMax?: Boolean): Number
    // Returns the number `num` modulo `range` in such a way so it lies within
    // `range[0]` and `range[1]`. The returned value will be always smaller than
    // `range[1]` unless `includeMax` is set to `true`.
    function wrapNum(x, range, includeMax) {
        var max = range[1], min = range[0], d = max - min;
        return x === max && includeMax ? x : ((x - min) % d + d) % d + min;
    }
    // @function falseFn(): Function
    // Returns a function which always returns `false`.
    function falseFn() {
        return false;
    }
    // @function formatNum(num: Number, precision?: Number|false): Number
    // Returns the number `num` rounded with specified `precision`.
    // The default `precision` value is 6 decimal places.
    // `false` can be passed to skip any processing (can be useful to avoid round-off errors).
    function formatNum(num, precision) {
        if (precision === false) return num;
        var pow = Math.pow(10, precision === undefined ? 6 : precision);
        return Math.round(num * pow) / pow;
    }
    // @function trim(str: String): String
    // Compatibility polyfill for [String.prototype.trim](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)
    function trim(str) {
        return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    }
    // @function splitWords(str: String): String[]
    // Trims and splits the string on whitespace and returns the array of parts.
    function splitWords(str) {
        return trim(str).split(/\s+/);
    }
    // @function setOptions(obj: Object, options: Object): Object
    // Merges the given properties to the `options` of the `obj` object, returning the resulting options. See `Class options`. Has an `L.setOptions` shortcut.
    function setOptions(obj, options) {
        if (!Object.prototype.hasOwnProperty.call(obj, "options")) obj.options = obj.options ? create$2(obj.options) : {};
        for(var i in options)obj.options[i] = options[i];
        return obj.options;
    }
    // @function getParamString(obj: Object, existingUrl?: String, uppercase?: Boolean): String
    // Converts an object into a parameter URL string, e.g. `{a: "foo", b: "bar"}`
    // translates to `'?a=foo&b=bar'`. If `existingUrl` is set, the parameters will
    // be appended at the end. If `uppercase` is `true`, the parameter names will
    // be uppercased (e.g. `'?A=foo&B=bar'`)
    function getParamString(obj, existingUrl, uppercase) {
        var params = [];
        for(var i in obj)params.push(encodeURIComponent(uppercase ? i.toUpperCase() : i) + "=" + encodeURIComponent(obj[i]));
        return (!existingUrl || existingUrl.indexOf("?") === -1 ? "?" : "&") + params.join("&");
    }
    var templateRe = /\{ *([\w_ -]+) *\}/g;
    // @function template(str: String, data: Object): String
    // Simple templating facility, accepts a template string of the form `'Hello {a}, {b}'`
    // and a data object like `{a: 'foo', b: 'bar'}`, returns evaluated string
    // `('Hello foo, bar')`. You can also specify functions instead of strings for
    // data values — they will be evaluated passing `data` as an argument.
    function template(str, data) {
        return str.replace(templateRe, function(str, key) {
            var value = data[key];
            if (value === undefined) throw new Error("No value provided for variable " + str);
            else if (typeof value === "function") value = value(data);
            return value;
        });
    }
    // @function isArray(obj): Boolean
    // Compatibility polyfill for [Array.isArray](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)
    var isArray = Array.isArray || function(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    };
    // @function indexOf(array: Array, el: Object): Number
    // Compatibility polyfill for [Array.prototype.indexOf](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
    function indexOf(array, el) {
        for(var i = 0; i < array.length; i++){
            if (array[i] === el) return i;
        }
        return -1;
    }
    // @property emptyImageUrl: String
    // Data URI string containing a base64-encoded empty GIF image.
    // Used as a hack to free memory from unused images on WebKit-powered
    // mobile devices (by setting image `src` to this string).
    var emptyImageUrl = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    // inspired by https://paulirish.com/2011/requestanimationframe-for-smart-animating/
    function getPrefixed(name) {
        return window["webkit" + name] || window["moz" + name] || window["ms" + name];
    }
    var lastTime = 0;
    // fallback for IE 7-8
    function timeoutDefer(fn) {
        var time = +new Date(), timeToCall = Math.max(0, 16 - (time - lastTime));
        lastTime = time + timeToCall;
        return window.setTimeout(fn, timeToCall);
    }
    var requestFn = window.requestAnimationFrame || getPrefixed("RequestAnimationFrame") || timeoutDefer;
    var cancelFn = window.cancelAnimationFrame || getPrefixed("CancelAnimationFrame") || getPrefixed("CancelRequestAnimationFrame") || function(id) {
        window.clearTimeout(id);
    };
    // @function requestAnimFrame(fn: Function, context?: Object, immediate?: Boolean): Number
    // Schedules `fn` to be executed when the browser repaints. `fn` is bound to
    // `context` if given. When `immediate` is set, `fn` is called immediately if
    // the browser doesn't have native support for
    // [`window.requestAnimationFrame`](https://developer.mozilla.org/docs/Web/API/window/requestAnimationFrame),
    // otherwise it's delayed. Returns a request ID that can be used to cancel the request.
    function requestAnimFrame(fn, context, immediate) {
        if (immediate && requestFn === timeoutDefer) fn.call(context);
        else return requestFn.call(window, bind(fn, context));
    }
    // @function cancelAnimFrame(id: Number): undefined
    // Cancels a previous `requestAnimFrame`. See also [window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/window/cancelAnimationFrame).
    function cancelAnimFrame(id) {
        if (id) cancelFn.call(window, id);
    }
    var Util = {
        __proto__: null,
        extend: extend,
        create: create$2,
        bind: bind,
        get lastId () {
            return lastId;
        },
        stamp: stamp,
        throttle: throttle,
        wrapNum: wrapNum,
        falseFn: falseFn,
        formatNum: formatNum,
        trim: trim,
        splitWords: splitWords,
        setOptions: setOptions,
        getParamString: getParamString,
        template: template,
        isArray: isArray,
        indexOf: indexOf,
        emptyImageUrl: emptyImageUrl,
        requestFn: requestFn,
        cancelFn: cancelFn,
        requestAnimFrame: requestAnimFrame,
        cancelAnimFrame: cancelAnimFrame
    };
    // @class Class
    // @aka L.Class
    // @section
    // @uninheritable
    // Thanks to John Resig and Dean Edwards for inspiration!
    function Class() {}
    Class.extend = function(props) {
        // @function extend(props: Object): Function
        // [Extends the current class](#class-inheritance) given the properties to be included.
        // Returns a Javascript function that is a class constructor (to be called with `new`).
        var NewClass = function() {
            setOptions(this);
            // call the constructor
            if (this.initialize) this.initialize.apply(this, arguments);
            // call all constructor hooks
            this.callInitHooks();
        };
        var parentProto = NewClass.__super__ = this.prototype;
        var proto = create$2(parentProto);
        proto.constructor = NewClass;
        NewClass.prototype = proto;
        // inherit parent's statics
        for(var i in this)if (Object.prototype.hasOwnProperty.call(this, i) && i !== "prototype" && i !== "__super__") NewClass[i] = this[i];
        // mix static properties into the class
        if (props.statics) extend(NewClass, props.statics);
        // mix includes into the prototype
        if (props.includes) {
            checkDeprecatedMixinEvents(props.includes);
            extend.apply(null, [
                proto
            ].concat(props.includes));
        }
        // mix given properties into the prototype
        extend(proto, props);
        delete proto.statics;
        delete proto.includes;
        // merge options
        if (proto.options) {
            proto.options = parentProto.options ? create$2(parentProto.options) : {};
            extend(proto.options, props.options);
        }
        proto._initHooks = [];
        // add method for calling all hooks
        proto.callInitHooks = function() {
            if (this._initHooksCalled) return;
            if (parentProto.callInitHooks) parentProto.callInitHooks.call(this);
            this._initHooksCalled = true;
            for(var i = 0, len = proto._initHooks.length; i < len; i++)proto._initHooks[i].call(this);
        };
        return NewClass;
    };
    // @function include(properties: Object): this
    // [Includes a mixin](#class-includes) into the current class.
    Class.include = function(props) {
        var parentOptions = this.prototype.options;
        extend(this.prototype, props);
        if (props.options) {
            this.prototype.options = parentOptions;
            this.mergeOptions(props.options);
        }
        return this;
    };
    // @function mergeOptions(options: Object): this
    // [Merges `options`](#class-options) into the defaults of the class.
    Class.mergeOptions = function(options) {
        extend(this.prototype.options, options);
        return this;
    };
    // @function addInitHook(fn: Function): this
    // Adds a [constructor hook](#class-constructor-hooks) to the class.
    Class.addInitHook = function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        var init = typeof fn === "function" ? fn : function() {
            this[fn].apply(this, args);
        };
        this.prototype._initHooks = this.prototype._initHooks || [];
        this.prototype._initHooks.push(init);
        return this;
    };
    function checkDeprecatedMixinEvents(includes) {
        /* global L: true */ if (typeof L === "undefined" || !L || !L.Mixin) return;
        includes = isArray(includes) ? includes : [
            includes
        ];
        for(var i = 0; i < includes.length; i++)if (includes[i] === L.Mixin.Events) console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
    }
    /*
   * @class Evented
   * @aka L.Evented
   * @inherits Class
   *
   * A set of methods shared between event-powered classes (like `Map` and `Marker`). Generally, events allow you to execute some function when something happens with an object (e.g. the user clicks on the map, causing the map to fire `'click'` event).
   *
   * @example
   *
   * ```js
   * map.on('click', function(e) {
   * 	alert(e.latlng);
   * } );
   * ```
   *
   * Leaflet deals with event listeners by reference, so if you want to add a listener and then remove it, define it as a function:
   *
   * ```js
   * function onClick(e) { ... }
   *
   * map.on('click', onClick);
   * map.off('click', onClick);
   * ```
   */ var Events = {
        /* @method on(type: String, fn: Function, context?: Object): this
  	 * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
  	 *
  	 * @alternative
  	 * @method on(eventMap: Object): this
  	 * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
  	 */ on: function(types, fn, context) {
            // types can be a map of types/handlers
            if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
            // it's a hot path since Layer uses the on(obj) syntax
            this._on(type, types[type], fn);
            else {
                // types can be a string of space-separated words
                types = splitWords(types);
                for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context);
            }
            return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
  	 * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
  	 *
  	 * @alternative
  	 * @method off(eventMap: Object): this
  	 * Removes a set of type/listener pairs.
  	 *
  	 * @alternative
  	 * @method off: this
  	 * Removes all listeners to all events on the object. This includes implicitly attached events.
  	 */ off: function(types, fn, context) {
            if (!arguments.length) // clear all listeners if called without arguments
            delete this._events;
            else if (typeof types === "object") for(var type in types)this._off(type, types[type], fn);
            else {
                types = splitWords(types);
                var removeAll = arguments.length === 1;
                for(var i = 0, len = types.length; i < len; i++)if (removeAll) this._off(types[i]);
                else this._off(types[i], fn, context);
            }
            return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(type, fn, context, _once) {
            if (typeof fn !== "function") {
                console.warn("wrong listener type: " + typeof fn);
                return;
            }
            // check if fn already there
            if (this._listens(type, fn, context) !== false) return;
            if (context === this) // Less memory footprint.
            context = undefined;
            var newListener = {
                fn: fn,
                ctx: context
            };
            if (_once) newListener.once = true;
            this._events = this._events || {};
            this._events[type] = this._events[type] || [];
            this._events[type].push(newListener);
        },
        _off: function(type, fn, context) {
            var listeners, i, len;
            if (!this._events) return;
            listeners = this._events[type];
            if (!listeners) return;
            if (arguments.length === 1) {
                if (this._firingCount) // Set all removed listeners to noop
                // so they are not called if remove happens in fire
                for(i = 0, len = listeners.length; i < len; i++)listeners[i].fn = falseFn;
                // clear all listeners for a type if function isn't specified
                delete this._events[type];
                return;
            }
            if (typeof fn !== "function") {
                console.warn("wrong listener type: " + typeof fn);
                return;
            }
            // find fn and remove it
            var index = this._listens(type, fn, context);
            if (index !== false) {
                var listener = listeners[index];
                if (this._firingCount) {
                    // set the removed listener to noop so that's not called if remove happens in fire
                    listener.fn = falseFn;
                    /* copy array in case events are being fired */ this._events[type] = listeners = listeners.slice();
                }
                listeners.splice(index, 1);
            }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(type, data, propagate) {
            if (!this.listens(type, propagate)) return this;
            var event = extend({}, data, {
                type: type,
                target: this,
                sourceTarget: data && data.sourceTarget || this
            });
            if (this._events) {
                var listeners = this._events[type];
                if (listeners) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for(var i = 0, len = listeners.length; i < len; i++){
                        var l = listeners[i];
                        // off overwrites l.fn, so we need to copy fn to a var
                        var fn = l.fn;
                        if (l.once) this.off(type, fn, l.ctx);
                        fn.call(l.ctx || this, event);
                    }
                    this._firingCount--;
                }
            }
            if (propagate) // propagate the event to parents (set with addEventParent)
            this._propagateEvent(event);
            return this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(type, fn, context, propagate) {
            if (typeof type !== "string") console.warn('"string" type argument expected');
            // we don't overwrite the input `fn` value, because we need to use it for propagation
            var _fn = fn;
            if (typeof fn !== "function") {
                propagate = !!fn;
                _fn = undefined;
                context = undefined;
            }
            var listeners = this._events && this._events[type];
            if (listeners && listeners.length) {
                if (this._listens(type, _fn, context) !== false) return true;
            }
            if (propagate) // also check parents for listeners if event propagates
            for(var id in this._eventParents){
                if (this._eventParents[id].listens(type, fn, context, propagate)) return true;
            }
            return false;
        },
        // returns the index (number) or false
        _listens: function(type, fn, context) {
            if (!this._events) return false;
            var listeners = this._events[type] || [];
            if (!fn) return !!listeners.length;
            if (context === this) // Less memory footprint.
            context = undefined;
            for(var i = 0, len = listeners.length; i < len; i++){
                if (listeners[i].fn === fn && listeners[i].ctx === context) return i;
            }
            return false;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(types, fn, context) {
            // types can be a map of types/handlers
            if (typeof types === "object") for(var type in types)// we don't process space-separated events here for performance;
            // it's a hot path since Layer uses the on(obj) syntax
            this._on(type, types[type], fn, true);
            else {
                // types can be a string of space-separated words
                types = splitWords(types);
                for(var i = 0, len = types.length; i < len; i++)this._on(types[i], fn, context, true);
            }
            return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(obj) {
            this._eventParents = this._eventParents || {};
            this._eventParents[stamp(obj)] = obj;
            return this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(obj) {
            if (this._eventParents) delete this._eventParents[stamp(obj)];
            return this;
        },
        _propagateEvent: function(e) {
            for(var id in this._eventParents)this._eventParents[id].fire(e.type, extend({
                layer: e.target,
                propagatedFrom: e.target
            }, e), true);
        }
    };
    // aliases; we should ditch those eventually
    // @method addEventListener(…): this
    // Alias to [`on(…)`](#evented-on)
    Events.addEventListener = Events.on;
    // @method removeEventListener(…): this
    // Alias to [`off(…)`](#evented-off)
    // @method clearAllEventListeners(…): this
    // Alias to [`off()`](#evented-off)
    Events.removeEventListener = Events.clearAllEventListeners = Events.off;
    // @method addOneTimeEventListener(…): this
    // Alias to [`once(…)`](#evented-once)
    Events.addOneTimeEventListener = Events.once;
    // @method fireEvent(…): this
    // Alias to [`fire(…)`](#evented-fire)
    Events.fireEvent = Events.fire;
    // @method hasEventListeners(…): Boolean
    // Alias to [`listens(…)`](#evented-listens)
    Events.hasEventListeners = Events.listens;
    var Evented = Class.extend(Events);
    /*
   * @class Point
   * @aka L.Point
   *
   * Represents a point with `x` and `y` coordinates in pixels.
   *
   * @example
   *
   * ```js
   * var point = L.point(200, 300);
   * ```
   *
   * All Leaflet methods and options that accept `Point` objects also accept them in a simple Array form (unless noted otherwise), so these lines are equivalent:
   *
   * ```js
   * map.panBy([200, 300]);
   * map.panBy(L.point(200, 300));
   * ```
   *
   * Note that `Point` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function Point(x, y, round) {
        // @property x: Number; The `x` coordinate of the point
        this.x = round ? Math.round(x) : x;
        // @property y: Number; The `y` coordinate of the point
        this.y = round ? Math.round(y) : y;
    }
    var trunc = Math.trunc || function(v) {
        return v > 0 ? Math.floor(v) : Math.ceil(v);
    };
    Point.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
            return new Point(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(point) {
            // non-destructive, returns a new point
            return this.clone()._add(toPoint(point));
        },
        _add: function(point) {
            // destructive, used directly for performance in situations where it's safe to modify existing point
            this.x += point.x;
            this.y += point.y;
            return this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(point) {
            return this.clone()._subtract(toPoint(point));
        },
        _subtract: function(point) {
            this.x -= point.x;
            this.y -= point.y;
            return this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(num) {
            return this.clone()._divideBy(num);
        },
        _divideBy: function(num) {
            this.x /= num;
            this.y /= num;
            return this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(num) {
            return this.clone()._multiplyBy(num);
        },
        _multiplyBy: function(num) {
            this.x *= num;
            this.y *= num;
            return this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(point) {
            return new Point(this.x * point.x, this.y * point.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(point) {
            return new Point(this.x / point.x, this.y / point.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
            return this.clone()._round();
        },
        _round: function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
            return this.clone()._floor();
        },
        _floor: function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
            return this.clone()._ceil();
        },
        _ceil: function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
            return this.clone()._trunc();
        },
        _trunc: function() {
            this.x = trunc(this.x);
            this.y = trunc(this.y);
            return this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(point) {
            point = toPoint(point);
            var x = point.x - this.x, y = point.y - this.y;
            return Math.sqrt(x * x + y * y);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(point) {
            point = toPoint(point);
            return point.x === this.x && point.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(point) {
            point = toPoint(point);
            return Math.abs(point.x) <= Math.abs(this.x) && Math.abs(point.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
            return "Point(" + formatNum(this.x) + ", " + formatNum(this.y) + ")";
        }
    };
    // @factory L.point(x: Number, y: Number, round?: Boolean)
    // Creates a Point object with the given `x` and `y` coordinates. If optional `round` is set to true, rounds the `x` and `y` values.
    // @alternative
    // @factory L.point(coords: Number[])
    // Expects an array of the form `[x, y]` instead.
    // @alternative
    // @factory L.point(coords: Object)
    // Expects a plain object of the form `{x: Number, y: Number}` instead.
    function toPoint(x, y, round) {
        if (x instanceof Point) return x;
        if (isArray(x)) return new Point(x[0], x[1]);
        if (x === undefined || x === null) return x;
        if (typeof x === "object" && "x" in x && "y" in x) return new Point(x.x, x.y);
        return new Point(x, y, round);
    }
    /*
   * @class Bounds
   * @aka L.Bounds
   *
   * Represents a rectangular area in pixel coordinates.
   *
   * @example
   *
   * ```js
   * var p1 = L.point(10, 10),
   * p2 = L.point(40, 60),
   * bounds = L.bounds(p1, p2);
   * ```
   *
   * All Leaflet methods that accept `Bounds` objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * otherBounds.intersects([[10, 10], [40, 60]]);
   * ```
   *
   * Note that `Bounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function Bounds(a, b) {
        if (!a) return;
        var points = b ? [
            a,
            b
        ] : a;
        for(var i = 0, len = points.length; i < len; i++)this.extend(points[i]);
    }
    Bounds.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(obj) {
            var min2, max2;
            if (!obj) return this;
            if (obj instanceof Point || typeof obj[0] === "number" || "x" in obj) min2 = max2 = toPoint(obj);
            else {
                obj = toBounds(obj);
                min2 = obj.min;
                max2 = obj.max;
                if (!min2 || !max2) return this;
            }
            // @property min: Point
            // The top left corner of the rectangle.
            // @property max: Point
            // The bottom right corner of the rectangle.
            if (!this.min && !this.max) {
                this.min = min2.clone();
                this.max = max2.clone();
            } else {
                this.min.x = Math.min(min2.x, this.min.x);
                this.max.x = Math.max(max2.x, this.max.x);
                this.min.y = Math.min(min2.y, this.min.y);
                this.max.y = Math.max(max2.y, this.max.y);
            }
            return this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(round) {
            return toPoint((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, round);
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
            return toPoint(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
            return toPoint(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
            return this.min; // left, top
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
            return this.max; // right, bottom
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
            return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(obj) {
            var min, max;
            if (typeof obj[0] === "number" || obj instanceof Point) obj = toPoint(obj);
            else obj = toBounds(obj);
            if (obj instanceof Bounds) {
                min = obj.min;
                max = obj.max;
            } else min = max = obj;
            return min.x >= this.min.x && max.x <= this.max.x && min.y >= this.min.y && max.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xIntersects = max2.x >= min.x && min2.x <= max.x, yIntersects = max2.y >= min.y && min2.y <= max.y;
            return xIntersects && yIntersects;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(bounds) {
            bounds = toBounds(bounds);
            var min = this.min, max = this.max, min2 = bounds.min, max2 = bounds.max, xOverlaps = max2.x > min.x && min2.x < max.x, yOverlaps = max2.y > min.y && min2.y < max.y;
            return xOverlaps && yOverlaps;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
            return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(bufferRatio) {
            var min = this.min, max = this.max, heightBuffer = Math.abs(min.x - max.x) * bufferRatio, widthBuffer = Math.abs(min.y - max.y) * bufferRatio;
            return toBounds(toPoint(min.x - heightBuffer, min.y - widthBuffer), toPoint(max.x + heightBuffer, max.y + widthBuffer));
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(bounds) {
            if (!bounds) return false;
            bounds = toBounds(bounds);
            return this.min.equals(bounds.getTopLeft()) && this.max.equals(bounds.getBottomRight());
        }
    };
    // @factory L.bounds(corner1: Point, corner2: Point)
    // Creates a Bounds object from two corners coordinate pairs.
    // @alternative
    // @factory L.bounds(points: Point[])
    // Creates a Bounds object from the given array of points.
    function toBounds(a, b) {
        if (!a || a instanceof Bounds) return a;
        return new Bounds(a, b);
    }
    /*
   * @class LatLngBounds
   * @aka L.LatLngBounds
   *
   * Represents a rectangular geographical area on a map.
   *
   * @example
   *
   * ```js
   * var corner1 = L.latLng(40.712, -74.227),
   * corner2 = L.latLng(40.774, -74.125),
   * bounds = L.latLngBounds(corner1, corner2);
   * ```
   *
   * All Leaflet methods that accept LatLngBounds objects also accept them in a simple Array form (unless noted otherwise), so the bounds example above can be passed like this:
   *
   * ```js
   * map.fitBounds([
   * 	[40.712, -74.227],
   * 	[40.774, -74.125]
   * ]);
   * ```
   *
   * Caution: if the area crosses the antimeridian (often confused with the International Date Line), you must specify corners _outside_ the [-180, 180] degrees longitude range.
   *
   * Note that `LatLngBounds` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function LatLngBounds(corner1, corner2) {
        if (!corner1) return;
        var latlngs = corner2 ? [
            corner1,
            corner2
        ] : corner1;
        for(var i = 0, len = latlngs.length; i < len; i++)this.extend(latlngs[i]);
    }
    LatLngBounds.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(obj) {
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLng) {
                sw2 = obj;
                ne2 = obj;
            } else if (obj instanceof LatLngBounds) {
                sw2 = obj._southWest;
                ne2 = obj._northEast;
                if (!sw2 || !ne2) return this;
            } else return obj ? this.extend(toLatLng(obj) || toLatLngBounds(obj)) : this;
            if (!sw && !ne) {
                this._southWest = new LatLng(sw2.lat, sw2.lng);
                this._northEast = new LatLng(ne2.lat, ne2.lng);
            } else {
                sw.lat = Math.min(sw2.lat, sw.lat);
                sw.lng = Math.min(sw2.lng, sw.lng);
                ne.lat = Math.max(ne2.lat, ne.lat);
                ne.lng = Math.max(ne2.lng, ne.lng);
            }
            return this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(bufferRatio) {
            var sw = this._southWest, ne = this._northEast, heightBuffer = Math.abs(sw.lat - ne.lat) * bufferRatio, widthBuffer = Math.abs(sw.lng - ne.lng) * bufferRatio;
            return new LatLngBounds(new LatLng(sw.lat - heightBuffer, sw.lng - widthBuffer), new LatLng(ne.lat + heightBuffer, ne.lng + widthBuffer));
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
            return new LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2);
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
            return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
            return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
            return new LatLng(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
            return new LatLng(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
            return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
            return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
            return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
            return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(obj) {
            if (typeof obj[0] === "number" || obj instanceof LatLng || "lat" in obj) obj = toLatLng(obj);
            else obj = toLatLngBounds(obj);
            var sw = this._southWest, ne = this._northEast, sw2, ne2;
            if (obj instanceof LatLngBounds) {
                sw2 = obj.getSouthWest();
                ne2 = obj.getNorthEast();
            } else sw2 = ne2 = obj;
            return sw2.lat >= sw.lat && ne2.lat <= ne.lat && sw2.lng >= sw.lng && ne2.lng <= ne.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latIntersects = ne2.lat >= sw.lat && sw2.lat <= ne.lat, lngIntersects = ne2.lng >= sw.lng && sw2.lng <= ne.lng;
            return latIntersects && lngIntersects;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(bounds) {
            bounds = toLatLngBounds(bounds);
            var sw = this._southWest, ne = this._northEast, sw2 = bounds.getSouthWest(), ne2 = bounds.getNorthEast(), latOverlaps = ne2.lat > sw.lat && sw2.lat < ne.lat, lngOverlaps = ne2.lng > sw.lng && sw2.lng < ne.lng;
            return latOverlaps && lngOverlaps;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
            return [
                this.getWest(),
                this.getSouth(),
                this.getEast(),
                this.getNorth()
            ].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(bounds, maxMargin) {
            if (!bounds) return false;
            bounds = toLatLngBounds(bounds);
            return this._southWest.equals(bounds.getSouthWest(), maxMargin) && this._northEast.equals(bounds.getNorthEast(), maxMargin);
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
            return !!(this._southWest && this._northEast);
        }
    };
    // TODO International date line?
    // @factory L.latLngBounds(corner1: LatLng, corner2: LatLng)
    // Creates a `LatLngBounds` object by defining two diagonally opposite corners of the rectangle.
    // @alternative
    // @factory L.latLngBounds(latlngs: LatLng[])
    // Creates a `LatLngBounds` object defined by the geographical points it contains. Very useful for zooming the map to fit a particular set of locations with [`fitBounds`](#map-fitbounds).
    function toLatLngBounds(a, b) {
        if (a instanceof LatLngBounds) return a;
        return new LatLngBounds(a, b);
    }
    /* @class LatLng
   * @aka L.LatLng
   *
   * Represents a geographical point with a certain latitude and longitude.
   *
   * @example
   *
   * ```
   * var latlng = L.latLng(50.5, 30.5);
   * ```
   *
   * All Leaflet methods that accept LatLng objects also accept them in a simple Array form and simple object form (unless noted otherwise), so these lines are equivalent:
   *
   * ```
   * map.panTo([50, 30]);
   * map.panTo({lon: 30, lat: 50});
   * map.panTo({lat: 50, lng: 30});
   * map.panTo(L.latLng(50, 30));
   * ```
   *
   * Note that `LatLng` does not inherit from Leaflet's `Class` object,
   * which means new classes can't inherit from it, and new methods
   * can't be added to it with the `include` function.
   */ function LatLng(lat, lng, alt) {
        if (isNaN(lat) || isNaN(lng)) throw new Error("Invalid LatLng object: (" + lat + ", " + lng + ")");
        // @property lat: Number
        // Latitude in degrees
        this.lat = +lat;
        // @property lng: Number
        // Longitude in degrees
        this.lng = +lng;
        // @property alt: Number
        // Altitude in meters (optional)
        if (alt !== undefined) this.alt = +alt;
    }
    LatLng.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(obj, maxMargin) {
            if (!obj) return false;
            obj = toLatLng(obj);
            var margin = Math.max(Math.abs(this.lat - obj.lat), Math.abs(this.lng - obj.lng));
            return margin <= (maxMargin === undefined ? 1.0E-9 : maxMargin);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(precision) {
            return "LatLng(" + formatNum(this.lat, precision) + ", " + formatNum(this.lng, precision) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(other) {
            return Earth.distance(this, toLatLng(other));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
            return Earth.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(sizeInMeters) {
            var latAccuracy = 180 * sizeInMeters / 40075017, lngAccuracy = latAccuracy / Math.cos(Math.PI / 180 * this.lat);
            return toLatLngBounds([
                this.lat - latAccuracy,
                this.lng - lngAccuracy
            ], [
                this.lat + latAccuracy,
                this.lng + lngAccuracy
            ]);
        },
        clone: function() {
            return new LatLng(this.lat, this.lng, this.alt);
        }
    };
    // @factory L.latLng(latitude: Number, longitude: Number, altitude?: Number): LatLng
    // Creates an object representing a geographical point with the given latitude and longitude (and optionally altitude).
    // @alternative
    // @factory L.latLng(coords: Array): LatLng
    // Expects an array of the form `[Number, Number]` or `[Number, Number, Number]` instead.
    // @alternative
    // @factory L.latLng(coords: Object): LatLng
    // Expects an plain object of the form `{lat: Number, lng: Number}` or `{lat: Number, lng: Number, alt: Number}` instead.
    function toLatLng(a, b, c) {
        if (a instanceof LatLng) return a;
        if (isArray(a) && typeof a[0] !== "object") {
            if (a.length === 3) return new LatLng(a[0], a[1], a[2]);
            if (a.length === 2) return new LatLng(a[0], a[1]);
            return null;
        }
        if (a === undefined || a === null) return a;
        if (typeof a === "object" && "lat" in a) return new LatLng(a.lat, "lng" in a ? a.lng : a.lon, a.alt);
        if (b === undefined) return null;
        return new LatLng(a, b, c);
    }
    /*
   * @namespace CRS
   * @crs L.CRS.Base
   * Object that defines coordinate reference systems for projecting
   * geographical points into pixel (screen) coordinates and back (and to
   * coordinates in other units for [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services). See
   * [spatial reference system](https://en.wikipedia.org/wiki/Spatial_reference_system).
   *
   * Leaflet defines the most usual CRSs by default. If you want to use a
   * CRS not defined by default, take a look at the
   * [Proj4Leaflet](https://github.com/kartena/Proj4Leaflet) plugin.
   *
   * Note that the CRS instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.
   */ var CRS = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(latlng, zoom) {
            var projectedPoint = this.projection.project(latlng), scale = this.scale(zoom);
            return this.transformation._transform(projectedPoint, scale);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(point, zoom) {
            var scale = this.scale(zoom), untransformedPoint = this.transformation.untransform(point, scale);
            return this.projection.unproject(untransformedPoint);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(latlng) {
            return this.projection.project(latlng);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(point) {
            return this.projection.unproject(point);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(zoom) {
            return 256 * Math.pow(2, zoom);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(scale) {
            return Math.log(scale / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(zoom) {
            if (this.infinite) return null;
            var b = this.projection.bounds, s = this.scale(zoom), min = this.transformation.transform(b.min, s), max = this.transformation.transform(b.max, s);
            return new Bounds(min, max);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: false,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(latlng) {
            var lng = this.wrapLng ? wrapNum(latlng.lng, this.wrapLng, true) : latlng.lng, lat = this.wrapLat ? wrapNum(latlng.lat, this.wrapLat, true) : latlng.lat, alt = latlng.alt;
            return new LatLng(lat, lng, alt);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(bounds) {
            var center = bounds.getCenter(), newCenter = this.wrapLatLng(center), latShift = center.lat - newCenter.lat, lngShift = center.lng - newCenter.lng;
            if (latShift === 0 && lngShift === 0) return bounds;
            var sw = bounds.getSouthWest(), ne = bounds.getNorthEast(), newSw = new LatLng(sw.lat - latShift, sw.lng - lngShift), newNe = new LatLng(ne.lat - latShift, ne.lng - lngShift);
            return new LatLngBounds(newSw, newNe);
        }
    };
    /*
   * @namespace CRS
   * @crs L.CRS.Earth
   *
   * Serves as the base for CRS that are global such that they cover the earth.
   * Can only be used as the base for other CRS and cannot be used directly,
   * since it does not have a `code`, `projection` or `transformation`. `distance()` returns
   * meters.
   */ var Earth = extend({}, CRS, {
        wrapLng: [
            -180,
            180
        ],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371000,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(latlng1, latlng2) {
            var rad = Math.PI / 180, lat1 = latlng1.lat * rad, lat2 = latlng2.lat * rad, sinDLat = Math.sin((latlng2.lat - latlng1.lat) * rad / 2), sinDLon = Math.sin((latlng2.lng - latlng1.lng) * rad / 2), a = sinDLat * sinDLat + Math.cos(lat1) * Math.cos(lat2) * sinDLon * sinDLon, c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            return this.R * c;
        }
    });
    /*
   * @namespace Projection
   * @projection L.Projection.SphericalMercator
   *
   * Spherical Mercator projection — the most common projection for online maps,
   * used by almost all free and commercial tile providers. Assumes that Earth is
   * a sphere. Used by the `EPSG:3857` CRS.
   */ var earthRadius = 6378137;
    var SphericalMercator = {
        R: earthRadius,
        MAX_LATITUDE: 85.0511287798,
        project: function(latlng) {
            var d = Math.PI / 180, max = this.MAX_LATITUDE, lat = Math.max(Math.min(max, latlng.lat), -max), sin = Math.sin(lat * d);
            return new Point(this.R * latlng.lng * d, this.R * Math.log((1 + sin) / (1 - sin)) / 2);
        },
        unproject: function(point) {
            var d = 180 / Math.PI;
            return new LatLng((2 * Math.atan(Math.exp(point.y / this.R)) - Math.PI / 2) * d, point.x * d / this.R);
        },
        bounds: function() {
            var d = earthRadius * Math.PI;
            return new Bounds([
                -d,
                -d
            ], [
                d,
                d
            ]);
        }()
    };
    /*
   * @class Transformation
   * @aka L.Transformation
   *
   * Represents an affine transformation: a set of coefficients `a`, `b`, `c`, `d`
   * for transforming a point of a form `(x, y)` into `(a*x + b, c*y + d)` and doing
   * the reverse. Used by Leaflet in its projections code.
   *
   * @example
   *
   * ```js
   * var transformation = L.transformation(2, 5, -1, 10),
   * 	p = L.point(1, 2),
   * 	p2 = transformation.transform(p), //  L.point(7, 8)
   * 	p3 = transformation.untransform(p2); //  L.point(1, 2)
   * ```
   */ // factory new L.Transformation(a: Number, b: Number, c: Number, d: Number)
    // Creates a `Transformation` object with the given coefficients.
    function Transformation(a, b, c, d) {
        if (isArray(a)) {
            // use array properties
            this._a = a[0];
            this._b = a[1];
            this._c = a[2];
            this._d = a[3];
            return;
        }
        this._a = a;
        this._b = b;
        this._c = c;
        this._d = d;
    }
    Transformation.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(point, scale) {
            return this._transform(point.clone(), scale);
        },
        // destructive transform (faster)
        _transform: function(point, scale) {
            scale = scale || 1;
            point.x = scale * (this._a * point.x + this._b);
            point.y = scale * (this._c * point.y + this._d);
            return point;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(point, scale) {
            scale = scale || 1;
            return new Point((point.x / scale - this._b) / this._a, (point.y / scale - this._d) / this._c);
        }
    };
    // factory L.transformation(a: Number, b: Number, c: Number, d: Number)
    // @factory L.transformation(a: Number, b: Number, c: Number, d: Number)
    // Instantiates a Transformation object with the given coefficients.
    // @alternative
    // @factory L.transformation(coefficients: Array): Transformation
    // Expects an coefficients array of the form
    // `[a: Number, b: Number, c: Number, d: Number]`.
    function toTransformation(a, b, c, d) {
        return new Transformation(a, b, c, d);
    }
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG3857
   *
   * The most common CRS for online maps, used by almost all free and commercial
   * tile providers. Uses Spherical Mercator projection. Set in by default in
   * Map's `crs` option.
   */ var EPSG3857 = extend({}, Earth, {
        code: "EPSG:3857",
        projection: SphericalMercator,
        transformation: function() {
            var scale = 0.5 / (Math.PI * SphericalMercator.R);
            return toTransformation(scale, 0.5, -scale, 0.5);
        }()
    });
    var EPSG900913 = extend({}, EPSG3857, {
        code: "EPSG:900913"
    });
    // @namespace SVG; @section
    // There are several static functions which can be called without instantiating L.SVG:
    // @function create(name: String): SVGElement
    // Returns a instance of [SVGElement](https://developer.mozilla.org/docs/Web/API/SVGElement),
    // corresponding to the class name passed. For example, using 'line' will return
    // an instance of [SVGLineElement](https://developer.mozilla.org/docs/Web/API/SVGLineElement).
    function svgCreate(name) {
        return document.createElementNS("http://www.w3.org/2000/svg", name);
    }
    // @function pointsToPath(rings: Point[], closed: Boolean): String
    // Generates a SVG path string for multiple rings, with each ring turning
    // into "M..L..L.." instructions
    function pointsToPath(rings, closed) {
        var str = "", i, j, len, len2, points, p;
        for(i = 0, len = rings.length; i < len; i++){
            points = rings[i];
            for(j = 0, len2 = points.length; j < len2; j++){
                p = points[j];
                str += (j ? "L" : "M") + p.x + " " + p.y;
            }
            // closes the ring for polygons; "x" is VML syntax
            str += closed ? Browser.svg ? "z" : "x" : "";
        }
        // SVG complains about empty path strings
        return str || "M0 0";
    }
    /*
   * @namespace Browser
   * @aka L.Browser
   *
   * A namespace with static properties for browser/feature detection used by Leaflet internally.
   *
   * @example
   *
   * ```js
   * if (L.Browser.ielt9) {
   *   alert('Upgrade your browser, dude!');
   * }
   * ```
   */ var style = document.documentElement.style;
    // @property ie: Boolean; `true` for all Internet Explorer versions (not Edge).
    var ie = "ActiveXObject" in window;
    // @property ielt9: Boolean; `true` for Internet Explorer versions less than 9.
    var ielt9 = ie && !document.addEventListener;
    // @property edge: Boolean; `true` for the Edge web browser.
    var edge = "msLaunchUri" in navigator && !("documentMode" in document);
    // @property webkit: Boolean;
    // `true` for webkit-based browsers like Chrome and Safari (including mobile versions).
    var webkit = userAgentContains("webkit");
    // @property android: Boolean
    // **Deprecated.** `true` for any browser running on an Android platform.
    var android = userAgentContains("android");
    // @property android23: Boolean; **Deprecated.** `true` for browsers running on Android 2 or Android 3.
    var android23 = userAgentContains("android 2") || userAgentContains("android 3");
    /* See https://stackoverflow.com/a/17961266 for details on detecting stock Android */ var webkitVer = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10); // also matches AppleWebKit
    // @property androidStock: Boolean; **Deprecated.** `true` for the Android stock browser (i.e. not Chrome)
    var androidStock = android && userAgentContains("Google") && webkitVer < 537 && !("AudioNode" in window);
    // @property opera: Boolean; `true` for the Opera browser
    var opera = !!window.opera;
    // @property chrome: Boolean; `true` for the Chrome browser.
    var chrome = !edge && userAgentContains("chrome");
    // @property gecko: Boolean; `true` for gecko-based browsers like Firefox.
    var gecko = userAgentContains("gecko") && !webkit && !opera && !ie;
    // @property safari: Boolean; `true` for the Safari browser.
    var safari = !chrome && userAgentContains("safari");
    var phantom = userAgentContains("phantom");
    // @property opera12: Boolean
    // `true` for the Opera browser supporting CSS transforms (version 12 or later).
    var opera12 = "OTransition" in style;
    // @property win: Boolean; `true` when the browser is running in a Windows platform
    var win = navigator.platform.indexOf("Win") === 0;
    // @property ie3d: Boolean; `true` for all Internet Explorer versions supporting CSS transforms.
    var ie3d = ie && "transition" in style;
    // @property webkit3d: Boolean; `true` for webkit-based browsers supporting CSS transforms.
    var webkit3d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !android23;
    // @property gecko3d: Boolean; `true` for gecko-based browsers supporting CSS transforms.
    var gecko3d = "MozPerspective" in style;
    // @property any3d: Boolean
    // `true` for all browsers supporting CSS transforms.
    var any3d = !window.L_DISABLE_3D && (ie3d || webkit3d || gecko3d) && !opera12 && !phantom;
    // @property mobile: Boolean; `true` for all browsers running in a mobile device.
    var mobile = typeof orientation !== "undefined" || userAgentContains("mobile");
    // @property mobileWebkit: Boolean; `true` for all webkit-based browsers in a mobile device.
    var mobileWebkit = mobile && webkit;
    // @property mobileWebkit3d: Boolean
    // `true` for all webkit-based browsers in a mobile device supporting CSS transforms.
    var mobileWebkit3d = mobile && webkit3d;
    // @property msPointer: Boolean
    // `true` for browsers implementing the Microsoft touch events model (notably IE10).
    var msPointer = !window.PointerEvent && window.MSPointerEvent;
    // @property pointer: Boolean
    // `true` for all browsers supporting [pointer events](https://msdn.microsoft.com/en-us/library/dn433244%28v=vs.85%29.aspx).
    var pointer = !!(window.PointerEvent || msPointer);
    // @property touchNative: Boolean
    // `true` for all browsers supporting [touch events](https://developer.mozilla.org/docs/Web/API/Touch_events).
    // **This does not necessarily mean** that the browser is running in a computer with
    // a touchscreen, it only means that the browser is capable of understanding
    // touch events.
    var touchNative = "ontouchstart" in window || !!window.TouchEvent;
    // @property touch: Boolean
    // `true` for all browsers supporting either [touch](#browser-touch) or [pointer](#browser-pointer) events.
    // Note: pointer events will be preferred (if available), and processed for all `touch*` listeners.
    var touch = !window.L_NO_TOUCH && (touchNative || pointer);
    // @property mobileOpera: Boolean; `true` for the Opera browser in a mobile device.
    var mobileOpera = mobile && opera;
    // @property mobileGecko: Boolean
    // `true` for gecko-based browsers running in a mobile device.
    var mobileGecko = mobile && gecko;
    // @property retina: Boolean
    // `true` for browsers on a high-resolution "retina" screen or on any screen when browser's display zoom is more than 100%.
    var retina = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1;
    // @property passiveEvents: Boolean
    // `true` for browsers that support passive events.
    var passiveEvents = function() {
        var supportsPassiveOption = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function() {
                    supportsPassiveOption = true;
                }
            });
            window.addEventListener("testPassiveEventSupport", falseFn, opts);
            window.removeEventListener("testPassiveEventSupport", falseFn, opts);
        } catch (e) {
        // Errors can safely be ignored since this is only a browser support test.
        }
        return supportsPassiveOption;
    }();
    // @property canvas: Boolean
    // `true` when the browser supports [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
    var canvas$1 = function() {
        return !!document.createElement("canvas").getContext;
    }();
    // @property svg: Boolean
    // `true` when the browser supports [SVG](https://developer.mozilla.org/docs/Web/SVG).
    var svg$1 = !!(document.createElementNS && svgCreate("svg").createSVGRect);
    var inlineSvg = !!svg$1 && function() {
        var div = document.createElement("div");
        div.innerHTML = "<svg/>";
        return (div.firstChild && div.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
    }();
    // @property vml: Boolean
    // `true` if the browser supports [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language).
    var vml = !svg$1 && function() {
        try {
            var div = document.createElement("div");
            div.innerHTML = '<v:shape adj="1"/>';
            var shape = div.firstChild;
            shape.style.behavior = "url(#default#VML)";
            return shape && typeof shape.adj === "object";
        } catch (e) {
            return false;
        }
    }();
    // @property mac: Boolean; `true` when the browser is running in a Mac platform
    var mac = navigator.platform.indexOf("Mac") === 0;
    // @property mac: Boolean; `true` when the browser is running in a Linux platform
    var linux = navigator.platform.indexOf("Linux") === 0;
    function userAgentContains(str) {
        return navigator.userAgent.toLowerCase().indexOf(str) >= 0;
    }
    var Browser = {
        ie: ie,
        ielt9: ielt9,
        edge: edge,
        webkit: webkit,
        android: android,
        android23: android23,
        androidStock: androidStock,
        opera: opera,
        chrome: chrome,
        gecko: gecko,
        safari: safari,
        phantom: phantom,
        opera12: opera12,
        win: win,
        ie3d: ie3d,
        webkit3d: webkit3d,
        gecko3d: gecko3d,
        any3d: any3d,
        mobile: mobile,
        mobileWebkit: mobileWebkit,
        mobileWebkit3d: mobileWebkit3d,
        msPointer: msPointer,
        pointer: pointer,
        touch: touch,
        touchNative: touchNative,
        mobileOpera: mobileOpera,
        mobileGecko: mobileGecko,
        retina: retina,
        passiveEvents: passiveEvents,
        canvas: canvas$1,
        svg: svg$1,
        vml: vml,
        inlineSvg: inlineSvg,
        mac: mac,
        linux: linux
    };
    /*
   * Extends L.DomEvent to provide touch support for Internet Explorer and Windows-based devices.
   */ var POINTER_DOWN = Browser.msPointer ? "MSPointerDown" : "pointerdown";
    var POINTER_MOVE = Browser.msPointer ? "MSPointerMove" : "pointermove";
    var POINTER_UP = Browser.msPointer ? "MSPointerUp" : "pointerup";
    var POINTER_CANCEL = Browser.msPointer ? "MSPointerCancel" : "pointercancel";
    var pEvent = {
        touchstart: POINTER_DOWN,
        touchmove: POINTER_MOVE,
        touchend: POINTER_UP,
        touchcancel: POINTER_CANCEL
    };
    var handle = {
        touchstart: _onPointerStart,
        touchmove: _handlePointer,
        touchend: _handlePointer,
        touchcancel: _handlePointer
    };
    var _pointers = {};
    var _pointerDocListener = false;
    // Provides a touch events wrapper for (ms)pointer events.
    // ref https://www.w3.org/TR/pointerevents/ https://www.w3.org/Bugs/Public/show_bug.cgi?id=22890
    function addPointerListener(obj, type, handler) {
        if (type === "touchstart") _addPointerDocListener();
        if (!handle[type]) {
            console.warn("wrong event specified:", type);
            return falseFn;
        }
        handler = handle[type].bind(this, handler);
        obj.addEventListener(pEvent[type], handler, false);
        return handler;
    }
    function removePointerListener(obj, type, handler) {
        if (!pEvent[type]) {
            console.warn("wrong event specified:", type);
            return;
        }
        obj.removeEventListener(pEvent[type], handler, false);
    }
    function _globalPointerDown(e) {
        _pointers[e.pointerId] = e;
    }
    function _globalPointerMove(e) {
        if (_pointers[e.pointerId]) _pointers[e.pointerId] = e;
    }
    function _globalPointerUp(e) {
        delete _pointers[e.pointerId];
    }
    function _addPointerDocListener() {
        // need to keep track of what pointers and how many are active to provide e.touches emulation
        if (!_pointerDocListener) {
            // we listen document as any drags that end by moving the touch off the screen get fired there
            document.addEventListener(POINTER_DOWN, _globalPointerDown, true);
            document.addEventListener(POINTER_MOVE, _globalPointerMove, true);
            document.addEventListener(POINTER_UP, _globalPointerUp, true);
            document.addEventListener(POINTER_CANCEL, _globalPointerUp, true);
            _pointerDocListener = true;
        }
    }
    function _handlePointer(handler, e) {
        if (e.pointerType === (e.MSPOINTER_TYPE_MOUSE || "mouse")) return;
        e.touches = [];
        for(var i in _pointers)e.touches.push(_pointers[i]);
        e.changedTouches = [
            e
        ];
        handler(e);
    }
    function _onPointerStart(handler, e) {
        // IE10 specific: MsTouch needs preventDefault. See #2000
        if (e.MSPOINTER_TYPE_TOUCH && e.pointerType === e.MSPOINTER_TYPE_TOUCH) preventDefault(e);
        _handlePointer(handler, e);
    }
    /*
   * Extends the event handling code with double tap support for mobile browsers.
   *
   * Note: currently most browsers fire native dblclick, with only a few exceptions
   * (see https://github.com/Leaflet/Leaflet/issues/7012#issuecomment-595087386)
   */ function makeDblclick(event) {
        // in modern browsers `type` cannot be just overridden:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only
        var newEvent = {}, prop, i;
        for(i in event){
            prop = event[i];
            newEvent[i] = prop && prop.bind ? prop.bind(event) : prop;
        }
        event = newEvent;
        newEvent.type = "dblclick";
        newEvent.detail = 2;
        newEvent.isTrusted = false;
        newEvent._simulated = true; // for debug purposes
        return newEvent;
    }
    var delay = 200;
    function addDoubleTapListener(obj, handler) {
        // Most browsers handle double tap natively
        obj.addEventListener("dblclick", handler);
        // On some platforms the browser doesn't fire native dblclicks for touch events.
        // It seems that in all such cases `detail` property of `click` event is always `1`.
        // So here we rely on that fact to avoid excessive 'dblclick' simulation when not needed.
        var last = 0, detail;
        function simDblclick(e) {
            if (e.detail !== 1) {
                detail = e.detail; // keep in sync to avoid false dblclick in some cases
                return;
            }
            if (e.pointerType === "mouse" || e.sourceCapabilities && !e.sourceCapabilities.firesTouchEvents) return;
            // When clicking on an <input>, the browser generates a click on its
            // <label> (and vice versa) triggering two clicks in quick succession.
            // This ignores clicks on elements which are a label with a 'for'
            // attribute (or children of such a label), but not children of
            // a <input>.
            var path = getPropagationPath(e);
            if (path.some(function(el) {
                return el instanceof HTMLLabelElement && el.attributes.for;
            }) && !path.some(function(el) {
                return el instanceof HTMLInputElement || el instanceof HTMLSelectElement;
            })) return;
            var now = Date.now();
            if (now - last <= delay) {
                detail++;
                if (detail === 2) handler(makeDblclick(e));
            } else detail = 1;
            last = now;
        }
        obj.addEventListener("click", simDblclick);
        return {
            dblclick: handler,
            simDblclick: simDblclick
        };
    }
    function removeDoubleTapListener(obj, handlers) {
        obj.removeEventListener("dblclick", handlers.dblclick);
        obj.removeEventListener("click", handlers.simDblclick);
    }
    /*
   * @namespace DomUtil
   *
   * Utility functions to work with the [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model)
   * tree, used by Leaflet internally.
   *
   * Most functions expecting or returning a `HTMLElement` also work for
   * SVG elements. The only difference is that classes refer to CSS classes
   * in HTML and SVG classes in SVG.
   */ // @property TRANSFORM: String
    // Vendor-prefixed transform style name (e.g. `'webkitTransform'` for WebKit).
    var TRANSFORM = testProp([
        "transform",
        "webkitTransform",
        "OTransform",
        "MozTransform",
        "msTransform"
    ]);
    // webkitTransition comes first because some browser versions that drop vendor prefix don't do
    // the same for the transitionend event, in particular the Android 4.1 stock browser
    // @property TRANSITION: String
    // Vendor-prefixed transition style name.
    var TRANSITION = testProp([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition"
    ]);
    // @property TRANSITION_END: String
    // Vendor-prefixed transitionend event name.
    var TRANSITION_END = TRANSITION === "webkitTransition" || TRANSITION === "OTransition" ? TRANSITION + "End" : "transitionend";
    // @function get(id: String|HTMLElement): HTMLElement
    // Returns an element given its DOM id, or returns the element itself
    // if it was passed directly.
    function get(id) {
        return typeof id === "string" ? document.getElementById(id) : id;
    }
    // @function getStyle(el: HTMLElement, styleAttrib: String): String
    // Returns the value for a certain style attribute on an element,
    // including computed values or values set through CSS.
    function getStyle(el, style) {
        var value = el.style[style] || el.currentStyle && el.currentStyle[style];
        if ((!value || value === "auto") && document.defaultView) {
            var css = document.defaultView.getComputedStyle(el, null);
            value = css ? css[style] : null;
        }
        return value === "auto" ? null : value;
    }
    // @function create(tagName: String, className?: String, container?: HTMLElement): HTMLElement
    // Creates an HTML element with `tagName`, sets its class to `className`, and optionally appends it to `container` element.
    function create$1(tagName, className, container) {
        var el = document.createElement(tagName);
        el.className = className || "";
        if (container) container.appendChild(el);
        return el;
    }
    // @function remove(el: HTMLElement)
    // Removes `el` from its parent element
    function remove(el) {
        var parent = el.parentNode;
        if (parent) parent.removeChild(el);
    }
    // @function empty(el: HTMLElement)
    // Removes all of `el`'s children elements from `el`
    function empty(el) {
        while(el.firstChild)el.removeChild(el.firstChild);
    }
    // @function toFront(el: HTMLElement)
    // Makes `el` the last child of its parent, so it renders in front of the other children.
    function toFront(el) {
        var parent = el.parentNode;
        if (parent && parent.lastChild !== el) parent.appendChild(el);
    }
    // @function toBack(el: HTMLElement)
    // Makes `el` the first child of its parent, so it renders behind the other children.
    function toBack(el) {
        var parent = el.parentNode;
        if (parent && parent.firstChild !== el) parent.insertBefore(el, parent.firstChild);
    }
    // @function hasClass(el: HTMLElement, name: String): Boolean
    // Returns `true` if the element's class attribute contains `name`.
    function hasClass(el, name) {
        if (el.classList !== undefined) return el.classList.contains(name);
        var className = getClass(el);
        return className.length > 0 && new RegExp("(^|\\s)" + name + "(\\s|$)").test(className);
    }
    // @function addClass(el: HTMLElement, name: String)
    // Adds `name` to the element's class attribute.
    function addClass(el, name) {
        if (el.classList !== undefined) {
            var classes = splitWords(name);
            for(var i = 0, len = classes.length; i < len; i++)el.classList.add(classes[i]);
        } else if (!hasClass(el, name)) {
            var className = getClass(el);
            setClass(el, (className ? className + " " : "") + name);
        }
    }
    // @function removeClass(el: HTMLElement, name: String)
    // Removes `name` from the element's class attribute.
    function removeClass(el, name) {
        if (el.classList !== undefined) el.classList.remove(name);
        else setClass(el, trim((" " + getClass(el) + " ").replace(" " + name + " ", " ")));
    }
    // @function setClass(el: HTMLElement, name: String)
    // Sets the element's class.
    function setClass(el, name) {
        if (el.className.baseVal === undefined) el.className = name;
        else // in case of SVG element
        el.className.baseVal = name;
    }
    // @function getClass(el: HTMLElement): String
    // Returns the element's class.
    function getClass(el) {
        // Check if the element is an SVGElementInstance and use the correspondingElement instead
        // (Required for linked SVG elements in IE11.)
        if (el.correspondingElement) el = el.correspondingElement;
        return el.className.baseVal === undefined ? el.className : el.className.baseVal;
    }
    // @function setOpacity(el: HTMLElement, opacity: Number)
    // Set the opacity of an element (including old IE support).
    // `opacity` must be a number from `0` to `1`.
    function setOpacity(el, value) {
        if ("opacity" in el.style) el.style.opacity = value;
        else if ("filter" in el.style) _setOpacityIE(el, value);
    }
    function _setOpacityIE(el, value) {
        var filter = false, filterName = "DXImageTransform.Microsoft.Alpha";
        // filters collection throws an error if we try to retrieve a filter that doesn't exist
        try {
            filter = el.filters.item(filterName);
        } catch (e) {
            // don't set opacity to 1 if we haven't already set an opacity,
            // it isn't needed and breaks transparent pngs.
            if (value === 1) return;
        }
        value = Math.round(value * 100);
        if (filter) {
            filter.Enabled = value !== 100;
            filter.Opacity = value;
        } else el.style.filter += " progid:" + filterName + "(opacity=" + value + ")";
    }
    // @function testProp(props: String[]): String|false
    // Goes through the array of style names and returns the first name
    // that is a valid style name for an element. If no such name is found,
    // it returns false. Useful for vendor-prefixed styles like `transform`.
    function testProp(props) {
        var style = document.documentElement.style;
        for(var i = 0; i < props.length; i++){
            if (props[i] in style) return props[i];
        }
        return false;
    }
    // @function setTransform(el: HTMLElement, offset: Point, scale?: Number)
    // Resets the 3D CSS transform of `el` so it is translated by `offset` pixels
    // and optionally scaled by `scale`. Does not have an effect if the
    // browser doesn't support 3D CSS transforms.
    function setTransform(el, offset, scale) {
        var pos = offset || new Point(0, 0);
        el.style[TRANSFORM] = (Browser.ie3d ? "translate(" + pos.x + "px," + pos.y + "px)" : "translate3d(" + pos.x + "px," + pos.y + "px,0)") + (scale ? " scale(" + scale + ")" : "");
    }
    // @function setPosition(el: HTMLElement, position: Point)
    // Sets the position of `el` to coordinates specified by `position`,
    // using CSS translate or top/left positioning depending on the browser
    // (used by Leaflet internally to position its layers).
    function setPosition(el, point) {
        /*eslint-disable */ el._leaflet_pos = point;
        /* eslint-enable */ if (Browser.any3d) setTransform(el, point);
        else {
            el.style.left = point.x + "px";
            el.style.top = point.y + "px";
        }
    }
    // @function getPosition(el: HTMLElement): Point
    // Returns the coordinates of an element previously positioned with setPosition.
    function getPosition(el) {
        // this method is only used for elements previously positioned using setPosition,
        // so it's safe to cache the position for performance
        return el._leaflet_pos || new Point(0, 0);
    }
    // @function disableTextSelection()
    // Prevents the user from generating `selectstart` DOM events, usually generated
    // when the user drags the mouse through a page with text. Used internally
    // by Leaflet to override the behaviour of any click-and-drag interaction on
    // the map. Affects drag interactions on the whole document.
    // @function enableTextSelection()
    // Cancels the effects of a previous [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection).
    var disableTextSelection;
    var enableTextSelection;
    var _userSelect;
    if ("onselectstart" in document) {
        disableTextSelection = function() {
            on(window, "selectstart", preventDefault);
        };
        enableTextSelection = function() {
            off(window, "selectstart", preventDefault);
        };
    } else {
        var userSelectProperty = testProp([
            "userSelect",
            "WebkitUserSelect",
            "OUserSelect",
            "MozUserSelect",
            "msUserSelect"
        ]);
        disableTextSelection = function() {
            if (userSelectProperty) {
                var style = document.documentElement.style;
                _userSelect = style[userSelectProperty];
                style[userSelectProperty] = "none";
            }
        };
        enableTextSelection = function() {
            if (userSelectProperty) {
                document.documentElement.style[userSelectProperty] = _userSelect;
                _userSelect = undefined;
            }
        };
    }
    // @function disableImageDrag()
    // As [`L.DomUtil.disableTextSelection`](#domutil-disabletextselection), but
    // for `dragstart` DOM events, usually generated when the user drags an image.
    function disableImageDrag() {
        on(window, "dragstart", preventDefault);
    }
    // @function enableImageDrag()
    // Cancels the effects of a previous [`L.DomUtil.disableImageDrag`](#domutil-disabletextselection).
    function enableImageDrag() {
        off(window, "dragstart", preventDefault);
    }
    var _outlineElement, _outlineStyle;
    // @function preventOutline(el: HTMLElement)
    // Makes the [outline](https://developer.mozilla.org/docs/Web/CSS/outline)
    // of the element `el` invisible. Used internally by Leaflet to prevent
    // focusable elements from displaying an outline when the user performs a
    // drag interaction on them.
    function preventOutline(element) {
        while(element.tabIndex === -1)element = element.parentNode;
        if (!element.style) return;
        restoreOutline();
        _outlineElement = element;
        _outlineStyle = element.style.outlineStyle;
        element.style.outlineStyle = "none";
        on(window, "keydown", restoreOutline);
    }
    // @function restoreOutline()
    // Cancels the effects of a previous [`L.DomUtil.preventOutline`]().
    function restoreOutline() {
        if (!_outlineElement) return;
        _outlineElement.style.outlineStyle = _outlineStyle;
        _outlineElement = undefined;
        _outlineStyle = undefined;
        off(window, "keydown", restoreOutline);
    }
    // @function getSizedParentNode(el: HTMLElement): HTMLElement
    // Finds the closest parent node which size (width and height) is not null.
    function getSizedParentNode(element) {
        do element = element.parentNode;
        while ((!element.offsetWidth || !element.offsetHeight) && element !== document.body);
        return element;
    }
    // @function getScale(el: HTMLElement): Object
    // Computes the CSS scale currently applied on the element.
    // Returns an object with `x` and `y` members as horizontal and vertical scales respectively,
    // and `boundingClientRect` as the result of [`getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect).
    function getScale(element) {
        var rect = element.getBoundingClientRect(); // Read-only in old browsers.
        return {
            x: rect.width / element.offsetWidth || 1,
            y: rect.height / element.offsetHeight || 1,
            boundingClientRect: rect
        };
    }
    var DomUtil = {
        __proto__: null,
        TRANSFORM: TRANSFORM,
        TRANSITION: TRANSITION,
        TRANSITION_END: TRANSITION_END,
        get: get,
        getStyle: getStyle,
        create: create$1,
        remove: remove,
        empty: empty,
        toFront: toFront,
        toBack: toBack,
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        setClass: setClass,
        getClass: getClass,
        setOpacity: setOpacity,
        testProp: testProp,
        setTransform: setTransform,
        setPosition: setPosition,
        getPosition: getPosition,
        get disableTextSelection () {
            return disableTextSelection;
        },
        get enableTextSelection () {
            return enableTextSelection;
        },
        disableImageDrag: disableImageDrag,
        enableImageDrag: enableImageDrag,
        preventOutline: preventOutline,
        restoreOutline: restoreOutline,
        getSizedParentNode: getSizedParentNode,
        getScale: getScale
    };
    /*
   * @namespace DomEvent
   * Utility functions to work with the [DOM events](https://developer.mozilla.org/docs/Web/API/Event), used by Leaflet internally.
   */ // Inspired by John Resig, Dean Edwards and YUI addEvent implementations.
    // @function on(el: HTMLElement, types: String, fn: Function, context?: Object): this
    // Adds a listener function (`fn`) to a particular DOM event type of the
    // element `el`. You can optionally specify the context of the listener
    // (object the `this` keyword will point to). You can also pass several
    // space-separated types (e.g. `'click dblclick'`).
    // @alternative
    // @function on(el: HTMLElement, eventMap: Object, context?: Object): this
    // Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
    function on(obj, types, fn, context) {
        if (types && typeof types === "object") for(var type in types)addOne(obj, type, types[type], fn);
        else {
            types = splitWords(types);
            for(var i = 0, len = types.length; i < len; i++)addOne(obj, types[i], fn, context);
        }
        return this;
    }
    var eventsKey = "_leaflet_events";
    // @function off(el: HTMLElement, types: String, fn: Function, context?: Object): this
    // Removes a previously added listener function.
    // Note that if you passed a custom context to on, you must pass the same
    // context to `off` in order to remove the listener.
    // @alternative
    // @function off(el: HTMLElement, eventMap: Object, context?: Object): this
    // Removes a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
    // @alternative
    // @function off(el: HTMLElement, types: String): this
    // Removes all previously added listeners of given types.
    // @alternative
    // @function off(el: HTMLElement): this
    // Removes all previously added listeners from given HTMLElement
    function off(obj, types, fn, context) {
        if (arguments.length === 1) {
            batchRemove(obj);
            delete obj[eventsKey];
        } else if (types && typeof types === "object") for(var type in types)removeOne(obj, type, types[type], fn);
        else {
            types = splitWords(types);
            if (arguments.length === 2) batchRemove(obj, function(type) {
                return indexOf(types, type) !== -1;
            });
            else for(var i = 0, len = types.length; i < len; i++)removeOne(obj, types[i], fn, context);
        }
        return this;
    }
    function batchRemove(obj, filterFn) {
        for(var id in obj[eventsKey]){
            var type = id.split(/\d/)[0];
            if (!filterFn || filterFn(type)) removeOne(obj, type, null, null, id);
        }
    }
    var mouseSubst = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
    };
    function addOne(obj, type, fn, context) {
        var id = type + stamp(fn) + (context ? "_" + stamp(context) : "");
        if (obj[eventsKey] && obj[eventsKey][id]) return this;
        var handler = function(e) {
            return fn.call(context || obj, e || window.event);
        };
        var originalHandler = handler;
        if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) // Needs DomEvent.Pointer.js
        handler = addPointerListener(obj, type, handler);
        else if (Browser.touch && type === "dblclick") handler = addDoubleTapListener(obj, handler);
        else if ("addEventListener" in obj) {
            if (type === "touchstart" || type === "touchmove" || type === "wheel" || type === "mousewheel") obj.addEventListener(mouseSubst[type] || type, handler, Browser.passiveEvents ? {
                passive: false
            } : false);
            else if (type === "mouseenter" || type === "mouseleave") {
                handler = function(e) {
                    e = e || window.event;
                    if (isExternalTarget(obj, e)) originalHandler(e);
                };
                obj.addEventListener(mouseSubst[type], handler, false);
            } else obj.addEventListener(type, originalHandler, false);
        } else obj.attachEvent("on" + type, handler);
        obj[eventsKey] = obj[eventsKey] || {};
        obj[eventsKey][id] = handler;
    }
    function removeOne(obj, type, fn, context, id) {
        id = id || type + stamp(fn) + (context ? "_" + stamp(context) : "");
        var handler = obj[eventsKey] && obj[eventsKey][id];
        if (!handler) return this;
        if (!Browser.touchNative && Browser.pointer && type.indexOf("touch") === 0) removePointerListener(obj, type, handler);
        else if (Browser.touch && type === "dblclick") removeDoubleTapListener(obj, handler);
        else if ("removeEventListener" in obj) obj.removeEventListener(mouseSubst[type] || type, handler, false);
        else obj.detachEvent("on" + type, handler);
        obj[eventsKey][id] = null;
    }
    // @function stopPropagation(ev: DOMEvent): this
    // Stop the given event from propagation to parent elements. Used inside the listener functions:
    // ```js
    // L.DomEvent.on(div, 'click', function (ev) {
    // 	L.DomEvent.stopPropagation(ev);
    // });
    // ```
    function stopPropagation(e) {
        if (e.stopPropagation) e.stopPropagation();
        else if (e.originalEvent) e.originalEvent._stopped = true;
        else e.cancelBubble = true;
        return this;
    }
    // @function disableScrollPropagation(el: HTMLElement): this
    // Adds `stopPropagation` to the element's `'wheel'` events (plus browser variants).
    function disableScrollPropagation(el) {
        addOne(el, "wheel", stopPropagation);
        return this;
    }
    // @function disableClickPropagation(el: HTMLElement): this
    // Adds `stopPropagation` to the element's `'click'`, `'dblclick'`, `'contextmenu'`,
    // `'mousedown'` and `'touchstart'` events (plus browser variants).
    function disableClickPropagation(el) {
        on(el, "mousedown touchstart dblclick contextmenu", stopPropagation);
        el["_leaflet_disable_click"] = true;
        return this;
    }
    // @function preventDefault(ev: DOMEvent): this
    // Prevents the default action of the DOM Event `ev` from happening (such as
    // following a link in the href of the a element, or doing a POST request
    // with page reload when a `<form>` is submitted).
    // Use it inside listener functions.
    function preventDefault(e) {
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return this;
    }
    // @function stop(ev: DOMEvent): this
    // Does `stopPropagation` and `preventDefault` at the same time.
    function stop(e) {
        preventDefault(e);
        stopPropagation(e);
        return this;
    }
    // @function getPropagationPath(ev: DOMEvent): Array
    // Compatibility polyfill for [`Event.composedPath()`](https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath).
    // Returns an array containing the `HTMLElement`s that the given DOM event
    // should propagate to (if not stopped).
    function getPropagationPath(ev) {
        if (ev.composedPath) return ev.composedPath();
        var path = [];
        var el = ev.target;
        while(el){
            path.push(el);
            el = el.parentNode;
        }
        return path;
    }
    // @function getMousePosition(ev: DOMEvent, container?: HTMLElement): Point
    // Gets normalized mouse position from a DOM event relative to the
    // `container` (border excluded) or to the whole page if not specified.
    function getMousePosition(e, container) {
        if (!container) return new Point(e.clientX, e.clientY);
        var scale = getScale(container), offset = scale.boundingClientRect; // left and top  values are in page scale (like the event clientX/Y)
        return new Point(// offset.left/top values are in page scale (like clientX/Y),
        // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
        (e.clientX - offset.left) / scale.x - container.clientLeft, (e.clientY - offset.top) / scale.y - container.clientTop);
    }
    //  except , Safari and
    // We need double the scroll pixels (see #7403 and #4538) for all Browsers
    // except OSX (Mac) -> 3x, Chrome running on Linux 1x
    var wheelPxFactor = Browser.linux && Browser.chrome ? window.devicePixelRatio : Browser.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
    // @function getWheelDelta(ev: DOMEvent): Number
    // Gets normalized wheel delta from a wheel DOM event, in vertical
    // pixels scrolled (negative if scrolling down).
    // Events from pointing devices without precise scrolling are mapped to
    // a best guess of 60 pixels.
    function getWheelDelta(e) {
        return Browser.edge ? e.wheelDeltaY / 2 : e.deltaY && e.deltaMode === 0 ? -e.deltaY / wheelPxFactor : e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : e.deltaX || e.deltaZ ? 0 : e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : e.detail ? e.detail / -32765 * 60 : 0;
    }
    // check if element really left/entered the event target (for mouseenter/mouseleave)
    function isExternalTarget(el, e) {
        var related = e.relatedTarget;
        if (!related) return true;
        try {
            while(related && related !== el)related = related.parentNode;
        } catch (err) {
            return false;
        }
        return related !== el;
    }
    var DomEvent = {
        __proto__: null,
        on: on,
        off: off,
        stopPropagation: stopPropagation,
        disableScrollPropagation: disableScrollPropagation,
        disableClickPropagation: disableClickPropagation,
        preventDefault: preventDefault,
        stop: stop,
        getPropagationPath: getPropagationPath,
        getMousePosition: getMousePosition,
        getWheelDelta: getWheelDelta,
        isExternalTarget: isExternalTarget,
        addListener: on,
        removeListener: off
    };
    /*
   * @class PosAnimation
   * @aka L.PosAnimation
   * @inherits Evented
   * Used internally for panning animations, utilizing CSS3 Transitions for modern browsers and a timer fallback for IE6-9.
   *
   * @example
   * ```js
   * var myPositionMarker = L.marker([48.864716, 2.294694]).addTo(map);
   *
   * myPositionMarker.on("click", function() {
   * 	var pos = map.latLngToLayerPoint(myPositionMarker.getLatLng());
   * 	pos.y -= 25;
   * 	var fx = new L.PosAnimation();
   *
   * 	fx.once('end',function() {
   * 		pos.y += 25;
   * 		fx.run(myPositionMarker._icon, pos, 0.8);
   * 	});
   *
   * 	fx.run(myPositionMarker._icon, pos, 0.3);
   * });
   *
   * ```
   *
   * @constructor L.PosAnimation()
   * Creates a `PosAnimation` object.
   *
   */ var PosAnimation = Evented.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(el, newPos, duration, easeLinearity) {
            this.stop();
            this._el = el;
            this._inProgress = true;
            this._duration = duration || 0.25;
            this._easeOutPower = 1 / Math.max(easeLinearity || 0.5, 0.2);
            this._startPos = getPosition(el);
            this._offset = newPos.subtract(this._startPos);
            this._startTime = +new Date();
            // @event start: Event
            // Fired when the animation starts
            this.fire("start");
            this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
            if (!this._inProgress) return;
            this._step(true);
            this._complete();
        },
        _animate: function() {
            // animation loop
            this._animId = requestAnimFrame(this._animate, this);
            this._step();
        },
        _step: function(round) {
            var elapsed = +new Date() - this._startTime, duration = this._duration * 1000;
            if (elapsed < duration) this._runFrame(this._easeOut(elapsed / duration), round);
            else {
                this._runFrame(1);
                this._complete();
            }
        },
        _runFrame: function(progress, round) {
            var pos = this._startPos.add(this._offset.multiplyBy(progress));
            if (round) pos._round();
            setPosition(this._el, pos);
            // @event step: Event
            // Fired continuously during the animation.
            this.fire("step");
        },
        _complete: function() {
            cancelAnimFrame(this._animId);
            this._inProgress = false;
            // @event end: Event
            // Fired when the animation ends.
            this.fire("end");
        },
        _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower);
        }
    });
    /*
   * @class Map
   * @aka L.Map
   * @inherits Evented
   *
   * The central class of the API — it is used to create a map on a page and manipulate it.
   *
   * @example
   *
   * ```js
   * // initialize the map on the "map" div with a given center and zoom
   * var map = L.map('map', {
   * 	center: [51.505, -0.09],
   * 	zoom: 13
   * });
   * ```
   *
   */ var Map = Evented.extend({
        options: {
            // @section Map State Options
            // @option crs: CRS = L.CRS.EPSG3857
            // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
            // sure what it means.
            crs: EPSG3857,
            // @option center: LatLng = undefined
            // Initial geographic center of the map
            center: undefined,
            // @option zoom: Number = undefined
            // Initial map zoom level
            zoom: undefined,
            // @option minZoom: Number = *
            // Minimum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the lowest of their `minZoom` options will be used instead.
            minZoom: undefined,
            // @option maxZoom: Number = *
            // Maximum zoom level of the map.
            // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
            // the highest of their `maxZoom` options will be used instead.
            maxZoom: undefined,
            // @option layers: Layer[] = []
            // Array of layers that will be added to the map initially
            layers: [],
            // @option maxBounds: LatLngBounds = null
            // When this option is set, the map restricts the view to the given
            // geographical bounds, bouncing the user back if the user tries to pan
            // outside the view. To set the restriction dynamically, use
            // [`setMaxBounds`](#map-setmaxbounds) method.
            maxBounds: undefined,
            // @option renderer: Renderer = *
            // The default method for drawing vector layers on the map. `L.SVG`
            // or `L.Canvas` by default depending on browser support.
            renderer: undefined,
            // @section Animation Options
            // @option zoomAnimation: Boolean = true
            // Whether the map zoom animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            zoomAnimation: true,
            // @option zoomAnimationThreshold: Number = 4
            // Won't animate zoom if the zoom difference exceeds this value.
            zoomAnimationThreshold: 4,
            // @option fadeAnimation: Boolean = true
            // Whether the tile fade animation is enabled. By default it's enabled
            // in all browsers that support CSS3 Transitions except Android.
            fadeAnimation: true,
            // @option markerZoomAnimation: Boolean = true
            // Whether markers animate their zoom with the zoom animation, if disabled
            // they will disappear for the length of the animation. By default it's
            // enabled in all browsers that support CSS3 Transitions except Android.
            markerZoomAnimation: true,
            // @option transform3DLimit: Number = 2^23
            // Defines the maximum size of a CSS translation transform. The default
            // value should not be changed unless a web browser positions layers in
            // the wrong place after doing a large `panBy`.
            transform3DLimit: 8388608,
            // @section Interaction Options
            // @option zoomSnap: Number = 1
            // Forces the map's zoom level to always be a multiple of this, particularly
            // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
            // By default, the zoom level snaps to the nearest integer; lower values
            // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
            // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
            zoomSnap: 1,
            // @option zoomDelta: Number = 1
            // Controls how much the map's zoom level will change after a
            // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
            // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
            // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
            zoomDelta: 1,
            // @option trackResize: Boolean = true
            // Whether the map automatically handles browser window resize to update itself.
            trackResize: true
        },
        initialize: function(id, options) {
            options = setOptions(this, options);
            // Make sure to assign internal flags at the beginning,
            // to avoid inconsistent state in some edge cases.
            this._handlers = [];
            this._layers = {};
            this._zoomBoundLayers = {};
            this._sizeChanged = true;
            this._initContainer(id);
            this._initLayout();
            // hack for https://github.com/Leaflet/Leaflet/issues/1980
            this._onResize = bind(this._onResize, this);
            this._initEvents();
            if (options.maxBounds) this.setMaxBounds(options.maxBounds);
            if (options.zoom !== undefined) this._zoom = this._limitZoom(options.zoom);
            if (options.center && options.zoom !== undefined) this.setView(toLatLng(options.center), options.zoom, {
                reset: true
            });
            this.callInitHooks();
            // don't animate on browsers without hardware-accelerated transitions or old Android/Opera
            this._zoomAnimated = TRANSITION && Browser.any3d && !Browser.mobileOpera && this.options.zoomAnimation;
            // zoom transitions run with the same duration for all layers, so if one of transitionend events
            // happens after starting zoom animation (propagating to the map pane), we know that it ended globally
            if (this._zoomAnimated) {
                this._createAnimProxy();
                on(this._proxy, TRANSITION_END, this._catchTransitionEnd, this);
            }
            this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(center, zoom, options) {
            zoom = zoom === undefined ? this._zoom : this._limitZoom(zoom);
            center = this._limitCenter(toLatLng(center), zoom, this.options.maxBounds);
            options = options || {};
            this._stop();
            if (this._loaded && !options.reset && options !== true) {
                if (options.animate !== undefined) {
                    options.zoom = extend({
                        animate: options.animate
                    }, options.zoom);
                    options.pan = extend({
                        animate: options.animate,
                        duration: options.duration
                    }, options.pan);
                }
                // try animating pan or zoom
                var moved = this._zoom !== zoom ? this._tryAnimatedZoom && this._tryAnimatedZoom(center, zoom, options.zoom) : this._tryAnimatedPan(center, options.pan);
                if (moved) {
                    // prevent resize handler call, the view will refresh after animation anyway
                    clearTimeout(this._sizeTimer);
                    return this;
                }
            }
            // animation didn't start, just reset the map view
            this._resetView(center, zoom, options.pan && options.pan.noMoveStart);
            return this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(zoom, options) {
            if (!this._loaded) {
                this._zoom = zoom;
                return this;
            }
            return this.setView(this.getCenter(), zoom, {
                zoom: options
            });
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom + delta, options);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(delta, options) {
            delta = delta || (Browser.any3d ? this.options.zoomDelta : 1);
            return this.setZoom(this._zoom - delta, options);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(latlng, zoom, options) {
            var scale = this.getZoomScale(zoom), viewHalf = this.getSize().divideBy(2), containerPoint = latlng instanceof Point ? latlng : this.latLngToContainerPoint(latlng), centerOffset = containerPoint.subtract(viewHalf).multiplyBy(1 - 1 / scale), newCenter = this.containerPointToLatLng(viewHalf.add(centerOffset));
            return this.setView(newCenter, zoom, {
                zoom: options
            });
        },
        _getBoundsCenterZoom: function(bounds, options) {
            options = options || {};
            bounds = bounds.getBounds ? bounds.getBounds() : toLatLngBounds(bounds);
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [
                0,
                0
            ]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [
                0,
                0
            ]), zoom = this.getBoundsZoom(bounds, false, paddingTL.add(paddingBR));
            zoom = typeof options.maxZoom === "number" ? Math.min(options.maxZoom, zoom) : zoom;
            if (zoom === Infinity) return {
                center: bounds.getCenter(),
                zoom: zoom
            };
            var paddingOffset = paddingBR.subtract(paddingTL).divideBy(2), swPoint = this.project(bounds.getSouthWest(), zoom), nePoint = this.project(bounds.getNorthEast(), zoom), center = this.unproject(swPoint.add(nePoint).divideBy(2).add(paddingOffset), zoom);
            return {
                center: center,
                zoom: zoom
            };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(bounds, options) {
            bounds = toLatLngBounds(bounds);
            if (!bounds.isValid()) throw new Error("Bounds are not valid.");
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.setView(target.center, target.zoom, options);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(options) {
            return this.fitBounds([
                [
                    -90,
                    -180
                ],
                [
                    90,
                    180
                ]
            ], options);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(center, options) {
            return this.setView(center, this._zoom, {
                pan: options
            });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(offset, options) {
            offset = toPoint(offset).round();
            options = options || {};
            if (!offset.x && !offset.y) return this.fire("moveend");
            // If we pan too far, Chrome gets issues with tiles
            // and makes them disappear or appear in the wrong place (slightly offset) #2602
            if (options.animate !== true && !this.getSize().contains(offset)) {
                this._resetView(this.unproject(this.project(this.getCenter()).add(offset)), this.getZoom());
                return this;
            }
            if (!this._panAnim) {
                this._panAnim = new PosAnimation();
                this._panAnim.on({
                    "step": this._onPanTransitionStep,
                    "end": this._onPanTransitionEnd
                }, this);
            }
            // don't fire movestart if animating inertia
            if (!options.noMoveStart) this.fire("movestart");
            // animate pan unless animate: false specified
            if (options.animate !== false) {
                addClass(this._mapPane, "leaflet-pan-anim");
                var newPos = this._getMapPanePos().subtract(offset).round();
                this._panAnim.run(this._mapPane, newPos, options.duration || 0.25, options.easeLinearity);
            } else {
                this._rawPanBy(offset);
                this.fire("move").fire("moveend");
            }
            return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(targetCenter, targetZoom, options) {
            options = options || {};
            if (options.animate === false || !Browser.any3d) return this.setView(targetCenter, targetZoom, options);
            this._stop();
            var from = this.project(this.getCenter()), to = this.project(targetCenter), size = this.getSize(), startZoom = this._zoom;
            targetCenter = toLatLng(targetCenter);
            targetZoom = targetZoom === undefined ? startZoom : targetZoom;
            var w0 = Math.max(size.x, size.y), w1 = w0 * this.getZoomScale(startZoom, targetZoom), u1 = to.distanceTo(from) || 1, rho = 1.42, rho2 = rho * rho;
            function r(i) {
                var s1 = i ? -1 : 1, s2 = i ? w1 : w0, t1 = w1 * w1 - w0 * w0 + s1 * rho2 * rho2 * u1 * u1, b1 = 2 * s2 * rho2 * u1, b = t1 / b1, sq = Math.sqrt(b * b + 1) - b;
                // workaround for floating point precision bug when sq = 0, log = -Infinite,
                // thus triggering an infinite loop in flyTo
                var log = sq < 0.000000001 ? -18 : Math.log(sq);
                return log;
            }
            function sinh(n) {
                return (Math.exp(n) - Math.exp(-n)) / 2;
            }
            function cosh(n) {
                return (Math.exp(n) + Math.exp(-n)) / 2;
            }
            function tanh(n) {
                return sinh(n) / cosh(n);
            }
            var r0 = r(0);
            function w(s) {
                return w0 * (cosh(r0) / cosh(r0 + rho * s));
            }
            function u(s) {
                return w0 * (cosh(r0) * tanh(r0 + rho * s) - sinh(r0)) / rho2;
            }
            function easeOut(t) {
                return 1 - Math.pow(1 - t, 1.5);
            }
            var start = Date.now(), S = (r(1) - r0) / rho, duration = options.duration ? 1000 * options.duration : 1000 * S * 0.8;
            function frame() {
                var t = (Date.now() - start) / duration, s = easeOut(t) * S;
                if (t <= 1) {
                    this._flyToFrame = requestAnimFrame(frame, this);
                    this._move(this.unproject(from.add(to.subtract(from).multiplyBy(u(s) / u1)), startZoom), this.getScaleZoom(w0 / w(s), startZoom), {
                        flyTo: true
                    });
                } else this._move(targetCenter, targetZoom)._moveEnd(true);
            }
            this._moveStart(true, options.noMoveStart);
            frame.call(this);
            return this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(bounds, options) {
            var target = this._getBoundsCenterZoom(bounds, options);
            return this.flyTo(target.center, target.zoom, options);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(bounds) {
            bounds = toLatLngBounds(bounds);
            if (this.listens("moveend", this._panInsideMaxBounds)) this.off("moveend", this._panInsideMaxBounds);
            if (!bounds.isValid()) {
                this.options.maxBounds = null;
                return this;
            }
            this.options.maxBounds = bounds;
            if (this._loaded) this._panInsideMaxBounds();
            return this.on("moveend", this._panInsideMaxBounds);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(zoom) {
            var oldZoom = this.options.minZoom;
            this.options.minZoom = zoom;
            if (this._loaded && oldZoom !== zoom) {
                this.fire("zoomlevelschange");
                if (this.getZoom() < this.options.minZoom) return this.setZoom(zoom);
            }
            return this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(zoom) {
            var oldZoom = this.options.maxZoom;
            this.options.maxZoom = zoom;
            if (this._loaded && oldZoom !== zoom) {
                this.fire("zoomlevelschange");
                if (this.getZoom() > this.options.maxZoom) return this.setZoom(zoom);
            }
            return this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(bounds, options) {
            this._enforcingBounds = true;
            var center = this.getCenter(), newCenter = this._limitCenter(center, this._zoom, toLatLngBounds(bounds));
            if (!center.equals(newCenter)) this.panTo(newCenter, options);
            this._enforcingBounds = false;
            return this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(latlng, options) {
            options = options || {};
            var paddingTL = toPoint(options.paddingTopLeft || options.padding || [
                0,
                0
            ]), paddingBR = toPoint(options.paddingBottomRight || options.padding || [
                0,
                0
            ]), pixelCenter = this.project(this.getCenter()), pixelPoint = this.project(latlng), pixelBounds = this.getPixelBounds(), paddedBounds = toBounds([
                pixelBounds.min.add(paddingTL),
                pixelBounds.max.subtract(paddingBR)
            ]), paddedSize = paddedBounds.getSize();
            if (!paddedBounds.contains(pixelPoint)) {
                this._enforcingBounds = true;
                var centerOffset = pixelPoint.subtract(paddedBounds.getCenter());
                var offset = paddedBounds.extend(pixelPoint).getSize().subtract(paddedSize);
                pixelCenter.x += centerOffset.x < 0 ? -offset.x : offset.x;
                pixelCenter.y += centerOffset.y < 0 ? -offset.y : offset.y;
                this.panTo(this.unproject(pixelCenter), options);
                this._enforcingBounds = false;
            }
            return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(options) {
            if (!this._loaded) return this;
            options = extend({
                animate: false,
                pan: true
            }, options === true ? {
                animate: true
            } : options);
            var oldSize = this.getSize();
            this._sizeChanged = true;
            this._lastCenter = null;
            var newSize = this.getSize(), oldCenter = oldSize.divideBy(2).round(), newCenter = newSize.divideBy(2).round(), offset = oldCenter.subtract(newCenter);
            if (!offset.x && !offset.y) return this;
            if (options.animate && options.pan) this.panBy(offset);
            else {
                if (options.pan) this._rawPanBy(offset);
                this.fire("move");
                if (options.debounceMoveend) {
                    clearTimeout(this._sizeTimer);
                    this._sizeTimer = setTimeout(bind(this.fire, this, "moveend"), 200);
                } else this.fire("moveend");
            }
            // @section Map state change events
            // @event resize: ResizeEvent
            // Fired when the map is resized.
            return this.fire("resize", {
                oldSize: oldSize,
                newSize: newSize
            });
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
            this.setZoom(this._limitZoom(this._zoom));
            if (!this.options.zoomSnap) this.fire("viewreset");
            return this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(options) {
            options = this._locateOptions = extend({
                timeout: 10000,
                watch: false
            }, options);
            if (!("geolocation" in navigator)) {
                this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                });
                return this;
            }
            var onResponse = bind(this._handleGeolocationResponse, this), onError = bind(this._handleGeolocationError, this);
            if (options.watch) this._locationWatchId = navigator.geolocation.watchPosition(onResponse, onError, options);
            else navigator.geolocation.getCurrentPosition(onResponse, onError, options);
            return this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
            if (navigator.geolocation && navigator.geolocation.clearWatch) navigator.geolocation.clearWatch(this._locationWatchId);
            if (this._locateOptions) this._locateOptions.setView = false;
            return this;
        },
        _handleGeolocationError: function(error) {
            if (!this._container._leaflet_id) return;
            var c = error.code, message = error.message || (c === 1 ? "permission denied" : c === 2 ? "position unavailable" : "timeout");
            if (this._locateOptions.setView && !this._loaded) this.fitWorld();
            // @section Location events
            // @event locationerror: ErrorEvent
            // Fired when geolocation (using the [`locate`](#map-locate) method) failed.
            this.fire("locationerror", {
                code: c,
                message: "Geolocation error: " + message + "."
            });
        },
        _handleGeolocationResponse: function(pos) {
            if (!this._container._leaflet_id) return;
            var lat = pos.coords.latitude, lng = pos.coords.longitude, latlng = new LatLng(lat, lng), bounds = latlng.toBounds(pos.coords.accuracy * 2), options = this._locateOptions;
            if (options.setView) {
                var zoom = this.getBoundsZoom(bounds);
                this.setView(latlng, options.maxZoom ? Math.min(zoom, options.maxZoom) : zoom);
            }
            var data = {
                latlng: latlng,
                bounds: bounds,
                timestamp: pos.timestamp
            };
            for(var i in pos.coords)if (typeof pos.coords[i] === "number") data[i] = pos.coords[i];
            // @event locationfound: LocationEvent
            // Fired when geolocation (using the [`locate`](#map-locate) method)
            // went successfully.
            this.fire("locationfound", data);
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(name, HandlerClass) {
            if (!HandlerClass) return this;
            var handler = this[name] = new HandlerClass(this);
            this._handlers.push(handler);
            if (this.options[name]) handler.enable();
            return this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
            this._initEvents(true);
            if (this.options.maxBounds) this.off("moveend", this._panInsideMaxBounds);
            if (this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
            try {
                // throws error in IE6-8
                delete this._container._leaflet_id;
                delete this._containerId;
            } catch (e) {
                /*eslint-disable */ this._container._leaflet_id = undefined;
                /* eslint-enable */ this._containerId = undefined;
            }
            if (this._locationWatchId !== undefined) this.stopLocate();
            this._stop();
            remove(this._mapPane);
            if (this._clearControlPos) this._clearControlPos();
            if (this._resizeRequest) {
                cancelAnimFrame(this._resizeRequest);
                this._resizeRequest = null;
            }
            this._clearHandlers();
            if (this._loaded) // @section Map state change events
            // @event unload: Event
            // Fired when the map is destroyed with [remove](#map-remove) method.
            this.fire("unload");
            var i;
            for(i in this._layers)this._layers[i].remove();
            for(i in this._panes)remove(this._panes[i]);
            this._layers = [];
            this._panes = [];
            delete this._mapPane;
            delete this._renderer;
            return this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(name, container) {
            var className = "leaflet-pane" + (name ? " leaflet-" + name.replace("Pane", "") + "-pane" : ""), pane = create$1("div", className, container || this._mapPane);
            if (name) this._panes[name] = pane;
            return pane;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
            this._checkIfLoaded();
            if (this._lastCenter && !this._moved()) return this._lastCenter.clone();
            return this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
            return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
            var bounds = this.getPixelBounds(), sw = this.unproject(bounds.getBottomLeft()), ne = this.unproject(bounds.getTopRight());
            return new LatLngBounds(sw, ne);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
            return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
            return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? Infinity : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(bounds, inside, padding) {
            bounds = toLatLngBounds(bounds);
            padding = toPoint(padding || [
                0,
                0
            ]);
            var zoom = this.getZoom() || 0, min = this.getMinZoom(), max = this.getMaxZoom(), nw = bounds.getNorthWest(), se = bounds.getSouthEast(), size = this.getSize().subtract(padding), boundsSize = toBounds(this.project(se, zoom), this.project(nw, zoom)).getSize(), snap = Browser.any3d ? this.options.zoomSnap : 1, scalex = size.x / boundsSize.x, scaley = size.y / boundsSize.y, scale = inside ? Math.max(scalex, scaley) : Math.min(scalex, scaley);
            zoom = this.getScaleZoom(scale, zoom);
            if (snap) {
                zoom = Math.round(zoom / (snap / 100)) * (snap / 100); // don't jump if within 1% of a snap level
                zoom = inside ? Math.ceil(zoom / snap) * snap : Math.floor(zoom / snap) * snap;
            }
            return Math.max(min, Math.min(max, zoom));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
            if (!this._size || this._sizeChanged) {
                this._size = new Point(this._container.clientWidth || 0, this._container.clientHeight || 0);
                this._sizeChanged = false;
            }
            return this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(center, zoom) {
            var topLeftPoint = this._getTopLeftPoint(center, zoom);
            return new Bounds(topLeftPoint, topLeftPoint.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
            this._checkIfLoaded();
            return this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(zoom) {
            return this.options.crs.getProjectedBounds(zoom === undefined ? this.getZoom() : zoom);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(pane) {
            return typeof pane === "string" ? this._panes[pane] : pane;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
            return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
            return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(toZoom, fromZoom) {
            // TODO replace with universal implementation after refactoring projections
            var crs = this.options.crs;
            fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
            return crs.scale(toZoom) / crs.scale(fromZoom);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(scale, fromZoom) {
            var crs = this.options.crs;
            fromZoom = fromZoom === undefined ? this._zoom : fromZoom;
            var zoom = crs.zoom(scale * crs.scale(fromZoom));
            return isNaN(zoom) ? Infinity : zoom;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(latlng, zoom) {
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.latLngToPoint(toLatLng(latlng), zoom);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(point, zoom) {
            zoom = zoom === undefined ? this._zoom : zoom;
            return this.options.crs.pointToLatLng(toPoint(point), zoom);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(point) {
            var projectedPoint = toPoint(point).add(this.getPixelOrigin());
            return this.unproject(projectedPoint);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(latlng) {
            var projectedPoint = this.project(toLatLng(latlng))._round();
            return projectedPoint._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(latlng) {
            return this.options.crs.wrapLatLng(toLatLng(latlng));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(latlng) {
            return this.options.crs.wrapLatLngBounds(toLatLngBounds(latlng));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(latlng1, latlng2) {
            return this.options.crs.distance(toLatLng(latlng1), toLatLng(latlng2));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(point) {
            return toPoint(point).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(point) {
            return toPoint(point).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(point) {
            var layerPoint = this.containerPointToLayerPoint(toPoint(point));
            return this.layerPointToLatLng(layerPoint);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(latlng) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(toLatLng(latlng)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(e) {
            return getMousePosition(e, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(e) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(e) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
        },
        // map initialization methods
        _initContainer: function(id) {
            var container = this._container = get(id);
            if (!container) throw new Error("Map container not found.");
            else if (container._leaflet_id) throw new Error("Map container is already initialized.");
            on(container, "scroll", this._onScroll, this);
            this._containerId = stamp(container);
        },
        _initLayout: function() {
            var container = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Browser.any3d;
            addClass(container, "leaflet-container" + (Browser.touch ? " leaflet-touch" : "") + (Browser.retina ? " leaflet-retina" : "") + (Browser.ielt9 ? " leaflet-oldie" : "") + (Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var position = getStyle(container, "position");
            if (position !== "absolute" && position !== "relative" && position !== "fixed" && position !== "sticky") container.style.position = "relative";
            this._initPanes();
            if (this._initControlPos) this._initControlPos();
        },
        _initPanes: function() {
            var panes = this._panes = {};
            this._paneRenderers = {};
            // @section
            //
            // Panes are DOM elements used to control the ordering of layers on the map. You
            // can access panes with [`map.getPane`](#map-getpane) or
            // [`map.getPanes`](#map-getpanes) methods. New panes can be created with the
            // [`map.createPane`](#map-createpane) method.
            //
            // Every map has the following default panes that differ only in zIndex.
            //
            // @pane mapPane: HTMLElement = 'auto'
            // Pane that contains all other map panes
            this._mapPane = this.createPane("mapPane", this._container);
            setPosition(this._mapPane, new Point(0, 0));
            // @pane tilePane: HTMLElement = 200
            // Pane for `GridLayer`s and `TileLayer`s
            this.createPane("tilePane");
            // @pane overlayPane: HTMLElement = 400
            // Pane for vectors (`Path`s, like `Polyline`s and `Polygon`s), `ImageOverlay`s and `VideoOverlay`s
            this.createPane("overlayPane");
            // @pane shadowPane: HTMLElement = 500
            // Pane for overlay shadows (e.g. `Marker` shadows)
            this.createPane("shadowPane");
            // @pane markerPane: HTMLElement = 600
            // Pane for `Icon`s of `Marker`s
            this.createPane("markerPane");
            // @pane tooltipPane: HTMLElement = 650
            // Pane for `Tooltip`s.
            this.createPane("tooltipPane");
            // @pane popupPane: HTMLElement = 700
            // Pane for `Popup`s.
            this.createPane("popupPane");
            if (!this.options.markerZoomAnimation) {
                addClass(panes.markerPane, "leaflet-zoom-hide");
                addClass(panes.shadowPane, "leaflet-zoom-hide");
            }
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(center, zoom, noMoveStart) {
            setPosition(this._mapPane, new Point(0, 0));
            var loading = !this._loaded;
            this._loaded = true;
            zoom = this._limitZoom(zoom);
            this.fire("viewprereset");
            var zoomChanged = this._zoom !== zoom;
            this._moveStart(zoomChanged, noMoveStart)._move(center, zoom)._moveEnd(zoomChanged);
            // @event viewreset: Event
            // Fired when the map needs to redraw its content (this usually happens
            // on map zoom or load). Very useful for creating custom overlays.
            this.fire("viewreset");
            // @event load: Event
            // Fired when the map is initialized (when its center and zoom are set
            // for the first time).
            if (loading) this.fire("load");
        },
        _moveStart: function(zoomChanged, noMoveStart) {
            // @event zoomstart: Event
            // Fired when the map zoom is about to change (e.g. before zoom animation).
            // @event movestart: Event
            // Fired when the view of the map starts changing (e.g. user starts dragging the map).
            if (zoomChanged) this.fire("zoomstart");
            if (!noMoveStart) this.fire("movestart");
            return this;
        },
        _move: function(center, zoom, data, supressEvent) {
            if (zoom === undefined) zoom = this._zoom;
            var zoomChanged = this._zoom !== zoom;
            this._zoom = zoom;
            this._lastCenter = center;
            this._pixelOrigin = this._getNewPixelOrigin(center);
            if (!supressEvent) {
                // @event zoom: Event
                // Fired repeatedly during any change in zoom level,
                // including zoom and fly animations.
                if (zoomChanged || data && data.pinch) this.fire("zoom", data);
                // @event move: Event
                // Fired repeatedly during any movement of the map,
                // including pan and fly animations.
                this.fire("move", data);
            } else if (data && data.pinch) this.fire("zoom", data);
            return this;
        },
        _moveEnd: function(zoomChanged) {
            // @event zoomend: Event
            // Fired when the map zoom changed, after any animations.
            if (zoomChanged) this.fire("zoomend");
            // @event moveend: Event
            // Fired when the center of the map stops changing
            // (e.g. user stopped dragging the map or after non-centered zoom).
            return this.fire("moveend");
        },
        _stop: function() {
            cancelAnimFrame(this._flyToFrame);
            if (this._panAnim) this._panAnim.stop();
            return this;
        },
        _rawPanBy: function(offset) {
            setPosition(this._mapPane, this._getMapPanePos().subtract(offset));
        },
        _getZoomSpan: function() {
            return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
            if (!this._enforcingBounds) this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
            if (!this._loaded) throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(remove) {
            this._targets = {};
            this._targets[stamp(this._container)] = this;
            var onOff = remove ? off : on;
            // @event click: MouseEvent
            // Fired when the user clicks (or taps) the map.
            // @event dblclick: MouseEvent
            // Fired when the user double-clicks (or double-taps) the map.
            // @event mousedown: MouseEvent
            // Fired when the user pushes the mouse button on the map.
            // @event mouseup: MouseEvent
            // Fired when the user releases the mouse button on the map.
            // @event mouseover: MouseEvent
            // Fired when the mouse enters the map.
            // @event mouseout: MouseEvent
            // Fired when the mouse leaves the map.
            // @event mousemove: MouseEvent
            // Fired while the mouse moves over the map.
            // @event contextmenu: MouseEvent
            // Fired when the user pushes the right mouse button on the map, prevents
            // default browser context menu from showing if there are listeners on
            // this event. Also fired on mobile when the user holds a single touch
            // for a second (also called long press).
            // @event keypress: KeyboardEvent
            // Fired when the user presses a key from the keyboard that produces a character value while the map is focused.
            // @event keydown: KeyboardEvent
            // Fired when the user presses a key from the keyboard while the map is focused. Unlike the `keypress` event,
            // the `keydown` event is fired for keys that produce a character value and for keys
            // that do not produce a character value.
            // @event keyup: KeyboardEvent
            // Fired when the user releases a key from the keyboard while the map is focused.
            onOff(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this);
            if (this.options.trackResize) onOff(window, "resize", this._onResize, this);
            if (Browser.any3d && this.options.transform3DLimit) (remove ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
            cancelAnimFrame(this._resizeRequest);
            this._resizeRequest = requestAnimFrame(function() {
                this.invalidateSize({
                    debounceMoveend: true
                });
            }, this);
        },
        _onScroll: function() {
            this._container.scrollTop = 0;
            this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
            var pos = this._getMapPanePos();
            if (Math.max(Math.abs(pos.x), Math.abs(pos.y)) >= this.options.transform3DLimit) // https://bugzilla.mozilla.org/show_bug.cgi?id=1203873 but Webkit also have
            // a pixel offset on very high values, see: https://jsfiddle.net/dg6r5hhb/
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(e, type) {
            var targets = [], target, isHover = type === "mouseout" || type === "mouseover", src = e.target || e.srcElement, dragging = false;
            while(src){
                target = this._targets[stamp(src)];
                if (target && (type === "click" || type === "preclick") && this._draggableMoved(target)) {
                    // Prevent firing click after you just dragged an object.
                    dragging = true;
                    break;
                }
                if (target && target.listens(type, true)) {
                    if (isHover && !isExternalTarget(src, e)) break;
                    targets.push(target);
                    if (isHover) break;
                }
                if (src === this._container) break;
                src = src.parentNode;
            }
            if (!targets.length && !dragging && !isHover && this.listens(type, true)) targets = [
                this
            ];
            return targets;
        },
        _isClickDisabled: function(el) {
            while(el && el !== this._container){
                if (el["_leaflet_disable_click"]) return true;
                el = el.parentNode;
            }
        },
        _handleDOMEvent: function(e) {
            var el = e.target || e.srcElement;
            if (!this._loaded || el["_leaflet_disable_events"] || e.type === "click" && this._isClickDisabled(el)) return;
            var type = e.type;
            if (type === "mousedown") // prevents outline when clicking on keyboard-focusable element
            preventOutline(el);
            this._fireDOMEvent(e, type);
        },
        _mouseEvents: [
            "click",
            "dblclick",
            "mouseover",
            "mouseout",
            "contextmenu"
        ],
        _fireDOMEvent: function(e, type, canvasTargets) {
            if (e.type === "click") {
                // Fire a synthetic 'preclick' event which propagates up (mainly for closing popups).
                // @event preclick: MouseEvent
                // Fired before mouse click on the map (sometimes useful when you
                // want something to happen on click before any existing click
                // handlers start running).
                var synth = extend({}, e);
                synth.type = "preclick";
                this._fireDOMEvent(synth, synth.type, canvasTargets);
            }
            // Find the layer the event is propagating from and its parents.
            var targets = this._findEventTargets(e, type);
            if (canvasTargets) {
                var filtered = []; // pick only targets with listeners
                for(var i = 0; i < canvasTargets.length; i++)if (canvasTargets[i].listens(type, true)) filtered.push(canvasTargets[i]);
                targets = filtered.concat(targets);
            }
            if (!targets.length) return;
            if (type === "contextmenu") preventDefault(e);
            var target = targets[0];
            var data = {
                originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
                var isMarker = target.getLatLng && (!target._radius || target._radius <= 10);
                data.containerPoint = isMarker ? this.latLngToContainerPoint(target.getLatLng()) : this.mouseEventToContainerPoint(e);
                data.layerPoint = this.containerPointToLayerPoint(data.containerPoint);
                data.latlng = isMarker ? target.getLatLng() : this.layerPointToLatLng(data.layerPoint);
            }
            for(i = 0; i < targets.length; i++){
                targets[i].fire(type, data, true);
                if (data.originalEvent._stopped || targets[i].options.bubblingMouseEvents === false && indexOf(this._mouseEvents, type) !== -1) return;
            }
        },
        _draggableMoved: function(obj) {
            obj = obj.dragging && obj.dragging.enabled() ? obj : this;
            return obj.dragging && obj.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
            for(var i = 0, len = this._handlers.length; i < len; i++)this._handlers[i].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(callback, context) {
            if (this._loaded) callback.call(context || this, {
                target: this
            });
            else this.on("load", callback, context);
            return this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
            return getPosition(this._mapPane) || new Point(0, 0);
        },
        _moved: function() {
            var pos = this._getMapPanePos();
            return pos && !pos.equals([
                0,
                0
            ]);
        },
        _getTopLeftPoint: function(center, zoom) {
            var pixelOrigin = center && zoom !== undefined ? this._getNewPixelOrigin(center, zoom) : this.getPixelOrigin();
            return pixelOrigin.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(center, zoom) {
            var viewHalf = this.getSize()._divideBy(2);
            return this.project(center, zoom)._subtract(viewHalf)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(latlng, zoom, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom);
            return this.project(latlng, zoom)._subtract(topLeft);
        },
        _latLngBoundsToNewLayerBounds: function(latLngBounds, zoom, center) {
            var topLeft = this._getNewPixelOrigin(center, zoom);
            return toBounds([
                this.project(latLngBounds.getSouthWest(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getNorthWest(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getSouthEast(), zoom)._subtract(topLeft),
                this.project(latLngBounds.getNorthEast(), zoom)._subtract(topLeft)
            ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(latlng) {
            return this.latLngToLayerPoint(latlng).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(center, zoom, bounds) {
            if (!bounds) return center;
            var centerPoint = this.project(center, zoom), viewHalf = this.getSize().divideBy(2), viewBounds = new Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)), offset = this._getBoundsOffset(viewBounds, bounds, zoom);
            // If offset is less than a pixel, ignore.
            // This prevents unstable projections from getting into
            // an infinite loop of tiny offsets.
            if (Math.abs(offset.x) <= 1 && Math.abs(offset.y) <= 1) return center;
            return this.unproject(centerPoint.add(offset), zoom);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(offset, bounds) {
            if (!bounds) return offset;
            var viewBounds = this.getPixelBounds(), newBounds = new Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));
            return offset.add(this._getBoundsOffset(newBounds, bounds));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(pxBounds, maxBounds, zoom) {
            var projectedMaxBounds = toBounds(this.project(maxBounds.getNorthEast(), zoom), this.project(maxBounds.getSouthWest(), zoom)), minOffset = projectedMaxBounds.min.subtract(pxBounds.min), maxOffset = projectedMaxBounds.max.subtract(pxBounds.max), dx = this._rebound(minOffset.x, -maxOffset.x), dy = this._rebound(minOffset.y, -maxOffset.y);
            return new Point(dx, dy);
        },
        _rebound: function(left, right) {
            return left + right > 0 ? Math.round(left - right) / 2 : Math.max(0, Math.ceil(left)) - Math.max(0, Math.floor(right));
        },
        _limitZoom: function(zoom) {
            var min = this.getMinZoom(), max = this.getMaxZoom(), snap = Browser.any3d ? this.options.zoomSnap : 1;
            if (snap) zoom = Math.round(zoom / snap) * snap;
            return Math.max(min, Math.min(max, zoom));
        },
        _onPanTransitionStep: function() {
            this.fire("move");
        },
        _onPanTransitionEnd: function() {
            removeClass(this._mapPane, "leaflet-pan-anim");
            this.fire("moveend");
        },
        _tryAnimatedPan: function(center, options) {
            // difference between the new and current centers in pixels
            var offset = this._getCenterOffset(center)._trunc();
            // don't animate too far unless animate: true specified in options
            if ((options && options.animate) !== true && !this.getSize().contains(offset)) return false;
            this.panBy(offset, options);
            return true;
        },
        _createAnimProxy: function() {
            var proxy = this._proxy = create$1("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(proxy);
            this.on("zoomanim", function(e) {
                var prop = TRANSFORM, transform = this._proxy.style[prop];
                setTransform(this._proxy, this.project(e.center, e.zoom), this.getZoomScale(e.zoom, 1));
                // workaround for case when transform is the same and so transitionend event is not fired
                if (transform === this._proxy.style[prop] && this._animatingZoom) this._onZoomTransitionEnd();
            }, this);
            this.on("load moveend", this._animMoveEnd, this);
            this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
            remove(this._proxy);
            this.off("load moveend", this._animMoveEnd, this);
            delete this._proxy;
        },
        _animMoveEnd: function() {
            var c = this.getCenter(), z = this.getZoom();
            setTransform(this._proxy, this.project(c, z), this.getZoomScale(z, 1));
        },
        _catchTransitionEnd: function(e) {
            if (this._animatingZoom && e.propertyName.indexOf("transform") >= 0) this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(center, zoom, options) {
            if (this._animatingZoom) return true;
            options = options || {};
            // don't animate if disabled, not supported or zoom difference is too large
            if (!this._zoomAnimated || options.animate === false || this._nothingToAnimate() || Math.abs(zoom - this._zoom) > this.options.zoomAnimationThreshold) return false;
            // offset is the pixel coords of the zoom origin relative to the current center
            var scale = this.getZoomScale(zoom), offset = this._getCenterOffset(center)._divideBy(1 - 1 / scale);
            // don't animate if the zoom origin isn't within one screen from the current center, unless forced
            if (options.animate !== true && !this.getSize().contains(offset)) return false;
            requestAnimFrame(function() {
                this._moveStart(true, options.noMoveStart || false)._animateZoom(center, zoom, true);
            }, this);
            return true;
        },
        _animateZoom: function(center, zoom, startAnim, noUpdate) {
            if (!this._mapPane) return;
            if (startAnim) {
                this._animatingZoom = true;
                // remember what center/zoom to set after animation
                this._animateToCenter = center;
                this._animateToZoom = zoom;
                addClass(this._mapPane, "leaflet-zoom-anim");
            }
            // @section Other Events
            // @event zoomanim: ZoomAnimEvent
            // Fired at least once per zoom animation. For continuous zoom, like pinch zooming, fired once per frame during zoom.
            this.fire("zoomanim", {
                center: center,
                zoom: zoom,
                noUpdate: noUpdate
            });
            if (!this._tempFireZoomEvent) this._tempFireZoomEvent = this._zoom !== this._animateToZoom;
            this._move(this._animateToCenter, this._animateToZoom, undefined, true);
            // Work around webkit not firing 'transitionend', see https://github.com/Leaflet/Leaflet/issues/3689, 2693
            setTimeout(bind(this._onZoomTransitionEnd, this), 250);
        },
        _onZoomTransitionEnd: function() {
            if (!this._animatingZoom) return;
            if (this._mapPane) removeClass(this._mapPane, "leaflet-zoom-anim");
            this._animatingZoom = false;
            this._move(this._animateToCenter, this._animateToZoom, undefined, true);
            if (this._tempFireZoomEvent) this.fire("zoom");
            delete this._tempFireZoomEvent;
            this.fire("move");
            this._moveEnd(true);
        }
    });
    // @section
    // @factory L.map(id: String, options?: Map options)
    // Instantiates a map object given the DOM ID of a `<div>` element
    // and optionally an object literal with `Map options`.
    //
    // @alternative
    // @factory L.map(el: HTMLElement, options?: Map options)
    // Instantiates a map object given an instance of a `<div>` HTML element
    // and optionally an object literal with `Map options`.
    function createMap(id, options) {
        return new Map(id, options);
    }
    /*
   * @class Control
   * @aka L.Control
   * @inherits Class
   *
   * L.Control is a base class for implementing map controls. Handles positioning.
   * All other controls extend from this class.
   */ var Control = Class.extend({
        // @section
        // @aka Control Options
        options: {
            // @option position: String = 'topright'
            // The position of the control (one of the map corners). Possible values are `'topleft'`,
            // `'topright'`, `'bottomleft'` or `'bottomright'`
            position: "topright"
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        /* @section
  	 * Classes extending L.Control will inherit the following methods:
  	 *
  	 * @method getPosition: string
  	 * Returns the position of the control.
  	 */ getPosition: function() {
            return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(position) {
            var map = this._map;
            if (map) map.removeControl(this);
            this.options.position = position;
            if (map) map.addControl(this);
            return this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
            return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(map) {
            this.remove();
            this._map = map;
            var container = this._container = this.onAdd(map), pos = this.getPosition(), corner = map._controlCorners[pos];
            addClass(container, "leaflet-control");
            if (pos.indexOf("bottom") !== -1) corner.insertBefore(container, corner.firstChild);
            else corner.appendChild(container);
            this._map.on("unload", this.remove, this);
            return this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
            if (!this._map) return this;
            remove(this._container);
            if (this.onRemove) this.onRemove(this._map);
            this._map.off("unload", this.remove, this);
            this._map = null;
            return this;
        },
        _refocusOnMap: function(e) {
            // if map exists and event is not a keyboard event
            if (this._map && e && e.screenX > 0 && e.screenY > 0) this._map.getContainer().focus();
        }
    });
    var control = function(options) {
        return new Control(options);
    };
    /* @section Extension methods
   * @uninheritable
   *
   * Every control should extend from `L.Control` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): HTMLElement
   * Should return the container DOM element for the control and add listeners on relevant map events. Called on [`control.addTo(map)`](#control-addTo).
   *
   * @method onRemove(map: Map)
   * Optional method. Should contain all clean up code that removes the listeners previously added in [`onAdd`](#control-onadd). Called on [`control.remove()`](#control-remove).
   */ /* @namespace Map
   * @section Methods for Layers and Controls
   */ Map.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(control) {
            control.addTo(this);
            return this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(control) {
            control.remove();
            return this;
        },
        _initControlPos: function() {
            var corners = this._controlCorners = {}, l = "leaflet-", container = this._controlContainer = create$1("div", l + "control-container", this._container);
            function createCorner(vSide, hSide) {
                var className = l + vSide + " " + l + hSide;
                corners[vSide + hSide] = create$1("div", className, container);
            }
            createCorner("top", "left");
            createCorner("top", "right");
            createCorner("bottom", "left");
            createCorner("bottom", "right");
        },
        _clearControlPos: function() {
            for(var i in this._controlCorners)remove(this._controlCorners[i]);
            remove(this._controlContainer);
            delete this._controlCorners;
            delete this._controlContainer;
        }
    });
    /*
   * @class Control.Layers
   * @aka L.Control.Layers
   * @inherits Control
   *
   * The layers control gives users the ability to switch between different base layers and switch overlays on/off (check out the [detailed example](https://leafletjs.com/examples/layers-control/)). Extends `Control`.
   *
   * @example
   *
   * ```js
   * var baseLayers = {
   * 	"Mapbox": mapbox,
   * 	"OpenStreetMap": osm
   * };
   *
   * var overlays = {
   * 	"Marker": marker,
   * 	"Roads": roadsLayer
   * };
   *
   * L.control.layers(baseLayers, overlays).addTo(map);
   * ```
   *
   * The `baseLayers` and `overlays` parameters are object literals with layer names as keys and `Layer` objects as values:
   *
   * ```js
   * {
   *     "<someName1>": layer1,
   *     "<someName2>": layer2
   * }
   * ```
   *
   * The layer names can contain HTML, which allows you to add additional styling to the items:
   *
   * ```js
   * {"<img src='my-layer-icon' /> <span class='my-layer-item'>My Layer</span>": myLayer}
   * ```
   */ var Layers = Control.extend({
        // @section
        // @aka Control.Layers options
        options: {
            // @option collapsed: Boolean = true
            // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
            collapsed: true,
            position: "topright",
            // @option autoZIndex: Boolean = true
            // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
            autoZIndex: true,
            // @option hideSingleBase: Boolean = false
            // If `true`, the base layers in the control will be hidden when there is only one.
            hideSingleBase: false,
            // @option sortLayers: Boolean = false
            // Whether to sort the layers. When `false`, layers will keep the order
            // in which they were added to the control.
            sortLayers: false,
            // @option sortFunction: Function = *
            // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
            // that will be used for sorting the layers, when `sortLayers` is `true`.
            // The function receives both the `L.Layer` instances and their names, as in
            // `sortFunction(layerA, layerB, nameA, nameB)`.
            // By default, it sorts layers alphabetically by their name.
            sortFunction: function(layerA, layerB, nameA, nameB) {
                return nameA < nameB ? -1 : nameB < nameA ? 1 : 0;
            }
        },
        initialize: function(baseLayers, overlays, options) {
            setOptions(this, options);
            this._layerControlInputs = [];
            this._layers = [];
            this._lastZIndex = 0;
            this._handlingClick = false;
            this._preventClick = false;
            for(var i in baseLayers)this._addLayer(baseLayers[i], i);
            for(i in overlays)this._addLayer(overlays[i], i, true);
        },
        onAdd: function(map) {
            this._initLayout();
            this._update();
            this._map = map;
            map.on("zoomend", this._checkDisabledLayers, this);
            for(var i = 0; i < this._layers.length; i++)this._layers[i].layer.on("add remove", this._onLayerChange, this);
            return this._container;
        },
        addTo: function(map) {
            Control.prototype.addTo.call(this, map);
            // Trigger expand after Layers Control has been inserted into DOM so that is now has an actual height.
            return this._expandIfNotCollapsed();
        },
        onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for(var i = 0; i < this._layers.length; i++)this._layers[i].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(layer, name) {
            this._addLayer(layer, name);
            return this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(layer, name) {
            this._addLayer(layer, name, true);
            return this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(layer) {
            layer.off("add remove", this._onLayerChange, this);
            var obj = this._getLayer(stamp(layer));
            if (obj) this._layers.splice(this._layers.indexOf(obj), 1);
            return this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
            addClass(this._container, "leaflet-control-layers-expanded");
            this._section.style.height = null;
            var acceptableHeight = this._map.getSize().y - (this._container.offsetTop + 50);
            if (acceptableHeight < this._section.clientHeight) {
                addClass(this._section, "leaflet-control-layers-scrollbar");
                this._section.style.height = acceptableHeight + "px";
            } else removeClass(this._section, "leaflet-control-layers-scrollbar");
            this._checkDisabledLayers();
            return this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
            removeClass(this._container, "leaflet-control-layers-expanded");
            return this;
        },
        _initLayout: function() {
            var className = "leaflet-control-layers", container = this._container = create$1("div", className), collapsed = this.options.collapsed;
            // makes this work on IE touch devices by stopping it from firing a mouseout event when the touch is released
            container.setAttribute("aria-haspopup", true);
            disableClickPropagation(container);
            disableScrollPropagation(container);
            var section = this._section = create$1("section", className + "-list");
            if (collapsed) {
                this._map.on("click", this.collapse, this);
                on(container, {
                    mouseenter: this._expandSafely,
                    mouseleave: this.collapse
                }, this);
            }
            var link = this._layersLink = create$1("a", className + "-toggle", container);
            link.href = "#";
            link.title = "Layers";
            link.setAttribute("role", "button");
            on(link, {
                keydown: function(e) {
                    if (e.keyCode === 13) this._expandSafely();
                },
                // Certain screen readers intercept the key event and instead send a click event
                click: function(e) {
                    preventDefault(e);
                    this._expandSafely();
                }
            }, this);
            if (!collapsed) this.expand();
            this._baseLayersList = create$1("div", className + "-base", section);
            this._separator = create$1("div", className + "-separator", section);
            this._overlaysList = create$1("div", className + "-overlays", section);
            container.appendChild(section);
        },
        _getLayer: function(id) {
            for(var i = 0; i < this._layers.length; i++){
                if (this._layers[i] && stamp(this._layers[i].layer) === id) return this._layers[i];
            }
        },
        _addLayer: function(layer, name, overlay) {
            if (this._map) layer.on("add remove", this._onLayerChange, this);
            this._layers.push({
                layer: layer,
                name: name,
                overlay: overlay
            });
            if (this.options.sortLayers) this._layers.sort(bind(function(a, b) {
                return this.options.sortFunction(a.layer, b.layer, a.name, b.name);
            }, this));
            if (this.options.autoZIndex && layer.setZIndex) {
                this._lastZIndex++;
                layer.setZIndex(this._lastZIndex);
            }
            this._expandIfNotCollapsed();
        },
        _update: function() {
            if (!this._container) return this;
            empty(this._baseLayersList);
            empty(this._overlaysList);
            this._layerControlInputs = [];
            var baseLayersPresent, overlaysPresent, i, obj, baseLayersCount = 0;
            for(i = 0; i < this._layers.length; i++){
                obj = this._layers[i];
                this._addItem(obj);
                overlaysPresent = overlaysPresent || obj.overlay;
                baseLayersPresent = baseLayersPresent || !obj.overlay;
                baseLayersCount += !obj.overlay ? 1 : 0;
            }
            // Hide base layers section if there's only one layer.
            if (this.options.hideSingleBase) {
                baseLayersPresent = baseLayersPresent && baseLayersCount > 1;
                this._baseLayersList.style.display = baseLayersPresent ? "" : "none";
            }
            this._separator.style.display = overlaysPresent && baseLayersPresent ? "" : "none";
            return this;
        },
        _onLayerChange: function(e) {
            if (!this._handlingClick) this._update();
            var obj = this._getLayer(stamp(e.target));
            // @namespace Map
            // @section Layer events
            // @event baselayerchange: LayersControlEvent
            // Fired when the base layer is changed through the [layers control](#control-layers).
            // @event overlayadd: LayersControlEvent
            // Fired when an overlay is selected through the [layers control](#control-layers).
            // @event overlayremove: LayersControlEvent
            // Fired when an overlay is deselected through the [layers control](#control-layers).
            // @namespace Control.Layers
            var type = obj.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
            if (type) this._map.fire(type, obj);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(name, checked) {
            var radioHtml = '<input type="radio" class="leaflet-control-layers-selector" name="' + name + '"' + (checked ? ' checked="checked"' : "") + "/>";
            var radioFragment = document.createElement("div");
            radioFragment.innerHTML = radioHtml;
            return radioFragment.firstChild;
        },
        _addItem: function(obj) {
            var label = document.createElement("label"), checked = this._map.hasLayer(obj.layer), input;
            if (obj.overlay) {
                input = document.createElement("input");
                input.type = "checkbox";
                input.className = "leaflet-control-layers-selector";
                input.defaultChecked = checked;
            } else input = this._createRadioElement("leaflet-base-layers_" + stamp(this), checked);
            this._layerControlInputs.push(input);
            input.layerId = stamp(obj.layer);
            on(input, "click", this._onInputClick, this);
            var name = document.createElement("span");
            name.innerHTML = " " + obj.name;
            // Helps from preventing layer control flicker when checkboxes are disabled
            // https://github.com/Leaflet/Leaflet/issues/2771
            var holder = document.createElement("span");
            label.appendChild(holder);
            holder.appendChild(input);
            holder.appendChild(name);
            var container = obj.overlay ? this._overlaysList : this._baseLayersList;
            container.appendChild(label);
            this._checkDisabledLayers();
            return label;
        },
        _onInputClick: function() {
            // expanding the control on mobile with a click can cause adding a layer - we don't want this
            if (this._preventClick) return;
            var inputs = this._layerControlInputs, input, layer;
            var addedLayers = [], removedLayers = [];
            this._handlingClick = true;
            for(var i = inputs.length - 1; i >= 0; i--){
                input = inputs[i];
                layer = this._getLayer(input.layerId).layer;
                if (input.checked) addedLayers.push(layer);
                else if (!input.checked) removedLayers.push(layer);
            }
            // Bugfix issue 2318: Should remove all old layers before readding new ones
            for(i = 0; i < removedLayers.length; i++)if (this._map.hasLayer(removedLayers[i])) this._map.removeLayer(removedLayers[i]);
            for(i = 0; i < addedLayers.length; i++)if (!this._map.hasLayer(addedLayers[i])) this._map.addLayer(addedLayers[i]);
            this._handlingClick = false;
            this._refocusOnMap();
        },
        _checkDisabledLayers: function() {
            var inputs = this._layerControlInputs, input, layer, zoom = this._map.getZoom();
            for(var i = inputs.length - 1; i >= 0; i--){
                input = inputs[i];
                layer = this._getLayer(input.layerId).layer;
                input.disabled = layer.options.minZoom !== undefined && zoom < layer.options.minZoom || layer.options.maxZoom !== undefined && zoom > layer.options.maxZoom;
            }
        },
        _expandIfNotCollapsed: function() {
            if (this._map && !this.options.collapsed) this.expand();
            return this;
        },
        _expandSafely: function() {
            var section = this._section;
            this._preventClick = true;
            on(section, "click", preventDefault);
            this.expand();
            var that = this;
            setTimeout(function() {
                off(section, "click", preventDefault);
                that._preventClick = false;
            });
        }
    });
    // @factory L.control.layers(baselayers?: Object, overlays?: Object, options?: Control.Layers options)
    // Creates a layers control with the given layers. Base layers will be switched with radio buttons, while overlays will be switched with checkboxes. Note that all base layers should be passed in the base layers object, but only one should be added to the map during map instantiation.
    var layers = function(baseLayers, overlays, options) {
        return new Layers(baseLayers, overlays, options);
    };
    /*
   * @class Control.Zoom
   * @aka L.Control.Zoom
   * @inherits Control
   *
   * A basic zoom control with two buttons (zoom in and zoom out). It is put on the map by default unless you set its [`zoomControl` option](#map-zoomcontrol) to `false`. Extends `Control`.
   */ var Zoom = Control.extend({
        // @section
        // @aka Control.Zoom options
        options: {
            position: "topleft",
            // @option zoomInText: String = '<span aria-hidden="true">+</span>'
            // The text set on the 'zoom in' button.
            zoomInText: '<span aria-hidden="true">+</span>',
            // @option zoomInTitle: String = 'Zoom in'
            // The title set on the 'zoom in' button.
            zoomInTitle: "Zoom in",
            // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
            // The text set on the 'zoom out' button.
            zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
            // @option zoomOutTitle: String = 'Zoom out'
            // The title set on the 'zoom out' button.
            zoomOutTitle: "Zoom out"
        },
        onAdd: function(map) {
            var zoomName = "leaflet-control-zoom", container = create$1("div", zoomName + " leaflet-bar"), options = this.options;
            this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle, zoomName + "-in", container, this._zoomIn);
            this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle, zoomName + "-out", container, this._zoomOut);
            this._updateDisabled();
            map.on("zoomend zoomlevelschange", this._updateDisabled, this);
            return container;
        },
        onRemove: function(map) {
            map.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
            this._disabled = true;
            this._updateDisabled();
            return this;
        },
        enable: function() {
            this._disabled = false;
            this._updateDisabled();
            return this;
        },
        _zoomIn: function(e) {
            if (!this._disabled && this._map._zoom < this._map.getMaxZoom()) this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _zoomOut: function(e) {
            if (!this._disabled && this._map._zoom > this._map.getMinZoom()) this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _createButton: function(html, title, className, container, fn) {
            var link = create$1("a", className, container);
            link.innerHTML = html;
            link.href = "#";
            link.title = title;
            /*
  		 * Will force screen readers like VoiceOver to read this as "Zoom in - button"
  		 */ link.setAttribute("role", "button");
            link.setAttribute("aria-label", title);
            disableClickPropagation(link);
            on(link, "click", stop);
            on(link, "click", fn, this);
            on(link, "click", this._refocusOnMap, this);
            return link;
        },
        _updateDisabled: function() {
            var map = this._map, className = "leaflet-disabled";
            removeClass(this._zoomInButton, className);
            removeClass(this._zoomOutButton, className);
            this._zoomInButton.setAttribute("aria-disabled", "false");
            this._zoomOutButton.setAttribute("aria-disabled", "false");
            if (this._disabled || map._zoom === map.getMinZoom()) {
                addClass(this._zoomOutButton, className);
                this._zoomOutButton.setAttribute("aria-disabled", "true");
            }
            if (this._disabled || map._zoom === map.getMaxZoom()) {
                addClass(this._zoomInButton, className);
                this._zoomInButton.setAttribute("aria-disabled", "true");
            }
        }
    });
    // @namespace Map
    // @section Control options
    // @option zoomControl: Boolean = true
    // Whether a [zoom control](#control-zoom) is added to the map by default.
    Map.mergeOptions({
        zoomControl: true
    });
    Map.addInitHook(function() {
        if (this.options.zoomControl) {
            // @section Controls
            // @property zoomControl: Control.Zoom
            // The default zoom control (only available if the
            // [`zoomControl` option](#map-zoomcontrol) was `true` when creating the map).
            this.zoomControl = new Zoom();
            this.addControl(this.zoomControl);
        }
    });
    // @namespace Control.Zoom
    // @factory L.control.zoom(options: Control.Zoom options)
    // Creates a zoom control
    var zoom = function(options) {
        return new Zoom(options);
    };
    /*
   * @class Control.Scale
   * @aka L.Control.Scale
   * @inherits Control
   *
   * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems. Extends `Control`.
   *
   * @example
   *
   * ```js
   * L.control.scale().addTo(map);
   * ```
   */ var Scale = Control.extend({
        // @section
        // @aka Control.Scale options
        options: {
            position: "bottomleft",
            // @option maxWidth: Number = 100
            // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
            maxWidth: 100,
            // @option metric: Boolean = True
            // Whether to show the metric scale line (m/km).
            metric: true,
            // @option imperial: Boolean = True
            // Whether to show the imperial scale line (mi/ft).
            imperial: true
        },
        onAdd: function(map) {
            var className = "leaflet-control-scale", container = create$1("div", className), options = this.options;
            this._addScales(options, className + "-line", container);
            map.on(options.updateWhenIdle ? "moveend" : "move", this._update, this);
            map.whenReady(this._update, this);
            return container;
        },
        onRemove: function(map) {
            map.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(options, className, container) {
            if (options.metric) this._mScale = create$1("div", className, container);
            if (options.imperial) this._iScale = create$1("div", className, container);
        },
        _update: function() {
            var map = this._map, y = map.getSize().y / 2;
            var maxMeters = map.distance(map.containerPointToLatLng([
                0,
                y
            ]), map.containerPointToLatLng([
                this.options.maxWidth,
                y
            ]));
            this._updateScales(maxMeters);
        },
        _updateScales: function(maxMeters) {
            if (this.options.metric && maxMeters) this._updateMetric(maxMeters);
            if (this.options.imperial && maxMeters) this._updateImperial(maxMeters);
        },
        _updateMetric: function(maxMeters) {
            var meters = this._getRoundNum(maxMeters), label = meters < 1000 ? meters + " m" : meters / 1000 + " km";
            this._updateScale(this._mScale, label, meters / maxMeters);
        },
        _updateImperial: function(maxMeters) {
            var maxFeet = maxMeters * 3.2808399, maxMiles, miles, feet;
            if (maxFeet > 5280) {
                maxMiles = maxFeet / 5280;
                miles = this._getRoundNum(maxMiles);
                this._updateScale(this._iScale, miles + " mi", miles / maxMiles);
            } else {
                feet = this._getRoundNum(maxFeet);
                this._updateScale(this._iScale, feet + " ft", feet / maxFeet);
            }
        },
        _updateScale: function(scale, text, ratio) {
            scale.style.width = Math.round(this.options.maxWidth * ratio) + "px";
            scale.innerHTML = text;
        },
        _getRoundNum: function(num) {
            var pow10 = Math.pow(10, (Math.floor(num) + "").length - 1), d = num / pow10;
            d = d >= 10 ? 10 : d >= 5 ? 5 : d >= 3 ? 3 : d >= 2 ? 2 : 1;
            return pow10 * d;
        }
    });
    // @factory L.control.scale(options?: Control.Scale options)
    // Creates an scale control with the given options.
    var scale = function(options) {
        return new Scale(options);
    };
    var ukrainianFlag = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>';
    /*
   * @class Control.Attribution
   * @aka L.Control.Attribution
   * @inherits Control
   *
   * The attribution control allows you to display attribution data in a small text box on a map. It is put on the map by default unless you set its [`attributionControl` option](#map-attributioncontrol) to `false`, and it fetches attribution texts from layers with the [`getAttribution` method](#layer-getattribution) automatically. Extends Control.
   */ var Attribution = Control.extend({
        // @section
        // @aka Control.Attribution options
        options: {
            position: "bottomright",
            // @option prefix: String|false = 'Leaflet'
            // The HTML text shown before the attributions. Pass `false` to disable.
            prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Browser.inlineSvg ? ukrainianFlag + " " : "") + "Leaflet</a>"
        },
        initialize: function(options) {
            setOptions(this, options);
            this._attributions = {};
        },
        onAdd: function(map) {
            map.attributionControl = this;
            this._container = create$1("div", "leaflet-control-attribution");
            disableClickPropagation(this._container);
            // TODO ugly, refactor
            for(var i in map._layers)if (map._layers[i].getAttribution) this.addAttribution(map._layers[i].getAttribution());
            this._update();
            map.on("layeradd", this._addAttribution, this);
            return this._container;
        },
        onRemove: function(map) {
            map.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(ev) {
            if (ev.layer.getAttribution) {
                this.addAttribution(ev.layer.getAttribution());
                ev.layer.once("remove", function() {
                    this.removeAttribution(ev.layer.getAttribution());
                }, this);
            }
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(prefix) {
            this.options.prefix = prefix;
            this._update();
            return this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(text) {
            if (!text) return this;
            if (!this._attributions[text]) this._attributions[text] = 0;
            this._attributions[text]++;
            this._update();
            return this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(text) {
            if (!text) return this;
            if (this._attributions[text]) {
                this._attributions[text]--;
                this._update();
            }
            return this;
        },
        _update: function() {
            if (!this._map) return;
            var attribs = [];
            for(var i in this._attributions)if (this._attributions[i]) attribs.push(i);
            var prefixAndAttribs = [];
            if (this.options.prefix) prefixAndAttribs.push(this.options.prefix);
            if (attribs.length) prefixAndAttribs.push(attribs.join(", "));
            this._container.innerHTML = prefixAndAttribs.join(' <span aria-hidden="true">|</span> ');
        }
    });
    // @namespace Map
    // @section Control options
    // @option attributionControl: Boolean = true
    // Whether a [attribution control](#control-attribution) is added to the map by default.
    Map.mergeOptions({
        attributionControl: true
    });
    Map.addInitHook(function() {
        if (this.options.attributionControl) new Attribution().addTo(this);
    });
    // @namespace Control.Attribution
    // @factory L.control.attribution(options: Control.Attribution options)
    // Creates an attribution control.
    var attribution = function(options) {
        return new Attribution(options);
    };
    Control.Layers = Layers;
    Control.Zoom = Zoom;
    Control.Scale = Scale;
    Control.Attribution = Attribution;
    control.layers = layers;
    control.zoom = zoom;
    control.scale = scale;
    control.attribution = attribution;
    /*
  	L.Handler is a base class for handler classes that are used internally to inject
  	interaction features like dragging to classes like Map and Marker.
  */ // @class Handler
    // @aka L.Handler
    // Abstract class for map interaction handlers
    var Handler = Class.extend({
        initialize: function(map) {
            this._map = map;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
            if (this._enabled) return this;
            this._enabled = true;
            this.addHooks();
            return this;
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
            if (!this._enabled) return this;
            this._enabled = false;
            this.removeHooks();
            return this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
            return !!this._enabled;
        }
    });
    // @section There is static function which can be called without instantiating L.Handler:
    // @function addTo(map: Map, name: String): this
    // Adds a new Handler to the given map with the given name.
    Handler.addTo = function(map, name) {
        map.addHandler(name, this);
        return this;
    };
    var Mixin = {
        Events: Events
    };
    /*
   * @class Draggable
   * @aka L.Draggable
   * @inherits Evented
   *
   * A class for making DOM elements draggable (including touch support).
   * Used internally for map and marker dragging. Only works for elements
   * that were positioned with [`L.DomUtil.setPosition`](#domutil-setposition).
   *
   * @example
   * ```js
   * var draggable = new L.Draggable(elementToDrag);
   * draggable.enable();
   * ```
   */ var START = Browser.touch ? "touchstart mousedown" : "mousedown";
    var Draggable = Evented.extend({
        options: {
            // @section
            // @aka Draggable options
            // @option clickTolerance: Number = 3
            // The max number of pixels a user can shift the mouse pointer during a click
            // for it to be considered a valid click (as opposed to a mouse drag).
            clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(element, dragStartTarget, preventOutline, options) {
            setOptions(this, options);
            this._element = element;
            this._dragStartTarget = dragStartTarget || element;
            this._preventOutline = preventOutline;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
            if (this._enabled) return;
            on(this._dragStartTarget, START, this._onDown, this);
            this._enabled = true;
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
            if (!this._enabled) return;
            // If we're currently dragging this draggable,
            // disabling it counts as first ending the drag.
            if (Draggable._dragging === this) this.finishDrag(true);
            off(this._dragStartTarget, START, this._onDown, this);
            this._enabled = false;
            this._moved = false;
        },
        _onDown: function(e) {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            this._moved = false;
            if (hasClass(this._element, "leaflet-zoom-anim")) return;
            if (e.touches && e.touches.length !== 1) {
                // Finish dragging to avoid conflict with touchZoom
                if (Draggable._dragging === this) this.finishDrag();
                return;
            }
            if (Draggable._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) return;
            Draggable._dragging = this; // Prevent dragging multiple objects at once.
            if (this._preventOutline) preventOutline(this._element);
            disableImageDrag();
            disableTextSelection();
            if (this._moving) return;
            // @event down: Event
            // Fired when a drag is about to start.
            this.fire("down");
            var first = e.touches ? e.touches[0] : e, sizedParent = getSizedParentNode(this._element);
            this._startPoint = new Point(first.clientX, first.clientY);
            this._startPos = getPosition(this._element);
            // Cache the scale, so that we can continuously compensate for it during drag (_onMove).
            this._parentScale = getScale(sizedParent);
            var mouseevent = e.type === "mousedown";
            on(document, mouseevent ? "mousemove" : "touchmove", this._onMove, this);
            on(document, mouseevent ? "mouseup" : "touchend touchcancel", this._onUp, this);
        },
        _onMove: function(e) {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            if (e.touches && e.touches.length > 1) {
                this._moved = true;
                return;
            }
            var first = e.touches && e.touches.length === 1 ? e.touches[0] : e, offset = new Point(first.clientX, first.clientY)._subtract(this._startPoint);
            if (!offset.x && !offset.y) return;
            if (Math.abs(offset.x) + Math.abs(offset.y) < this.options.clickTolerance) return;
            // We assume that the parent container's position, border and scale do not change for the duration of the drag.
            // Therefore there is no need to account for the position and border (they are eliminated by the subtraction)
            // and we can use the cached value for the scale.
            offset.x /= this._parentScale.x;
            offset.y /= this._parentScale.y;
            preventDefault(e);
            if (!this._moved) {
                // @event dragstart: Event
                // Fired when a drag starts
                this.fire("dragstart");
                this._moved = true;
                addClass(document.body, "leaflet-dragging");
                this._lastTarget = e.target || e.srcElement;
                // IE and Edge do not give the <use> element, so fetch it
                // if necessary
                if (window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance) this._lastTarget = this._lastTarget.correspondingUseElement;
                addClass(this._lastTarget, "leaflet-drag-target");
            }
            this._newPos = this._startPos.add(offset);
            this._moving = true;
            this._lastEvent = e;
            this._updatePosition();
        },
        _updatePosition: function() {
            var e = {
                originalEvent: this._lastEvent
            };
            // @event predrag: Event
            // Fired continuously during dragging *before* each corresponding
            // update of the element's position.
            this.fire("predrag", e);
            setPosition(this._element, this._newPos);
            // @event drag: Event
            // Fired continuously during dragging.
            this.fire("drag", e);
        },
        _onUp: function() {
            // Ignore the event if disabled; this happens in IE11
            // under some circumstances, see #3666.
            if (!this._enabled) return;
            this.finishDrag();
        },
        finishDrag: function(noInertia) {
            removeClass(document.body, "leaflet-dragging");
            if (this._lastTarget) {
                removeClass(this._lastTarget, "leaflet-drag-target");
                this._lastTarget = null;
            }
            off(document, "mousemove touchmove", this._onMove, this);
            off(document, "mouseup touchend touchcancel", this._onUp, this);
            enableImageDrag();
            enableTextSelection();
            var fireDragend = this._moved && this._moving;
            this._moving = false;
            Draggable._dragging = false;
            if (fireDragend) // @event dragend: DragEndEvent
            // Fired when the drag ends.
            this.fire("dragend", {
                noInertia: noInertia,
                distance: this._newPos.distanceTo(this._startPos)
            });
        }
    });
    /*
   * @namespace PolyUtil
   * Various utility functions for polygon geometries.
   */ /* @function clipPolygon(points: Point[], bounds: Bounds, round?: Boolean): Point[]
   * Clips the polygon geometry defined by the given `points` by the given bounds (using the [Sutherland-Hodgman algorithm](https://en.wikipedia.org/wiki/Sutherland%E2%80%93Hodgman_algorithm)).
   * Used by Leaflet to only show polygon points that are on the screen or near, increasing
   * performance. Note that polygon points needs different algorithm for clipping
   * than polyline, so there's a separate method for it.
   */ function clipPolygon(points, bounds, round) {
        var clippedPoints, edges = [
            1,
            4,
            2,
            8
        ], i, j, k, a, b, len, edge, p;
        for(i = 0, len = points.length; i < len; i++)points[i]._code = _getBitCode(points[i], bounds);
        // for each edge (left, bottom, right, top)
        for(k = 0; k < 4; k++){
            edge = edges[k];
            clippedPoints = [];
            for(i = 0, len = points.length, j = len - 1; i < len; j = i++){
                a = points[i];
                b = points[j];
                // if a is inside the clip window
                if (!(a._code & edge)) {
                    // if b is outside the clip window (a->b goes out of screen)
                    if (b._code & edge) {
                        p = _getEdgeIntersection(b, a, edge, bounds, round);
                        p._code = _getBitCode(p, bounds);
                        clippedPoints.push(p);
                    }
                    clippedPoints.push(a);
                // else if b is inside the clip window (a->b enters the screen)
                } else if (!(b._code & edge)) {
                    p = _getEdgeIntersection(b, a, edge, bounds, round);
                    p._code = _getBitCode(p, bounds);
                    clippedPoints.push(p);
                }
            }
            points = clippedPoints;
        }
        return points;
    }
    /* @function polygonCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polygon.
   */ function polygonCenter(latlngs, crs) {
        var i, j, p1, p2, f, area, x, y, center;
        if (!latlngs || latlngs.length === 0) throw new Error("latlngs not passed");
        if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
        }
        var centroidLatLng = toLatLng([
            0,
            0
        ]);
        var bounds = toLatLngBounds(latlngs);
        var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
        // tests showed that below 1700 rounding errors are happening
        if (areaBounds < 1700) // getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors
        centroidLatLng = centroid(latlngs);
        var len = latlngs.length;
        var points = [];
        for(i = 0; i < len; i++){
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([
                latlng.lat - centroidLatLng.lat,
                latlng.lng - centroidLatLng.lng
            ])));
        }
        area = x = y = 0;
        // polygon centroid algorithm;
        for(i = 0, j = len - 1; i < len; j = i++){
            p1 = points[i];
            p2 = points[j];
            f = p1.y * p2.x - p2.y * p1.x;
            x += (p1.x + p2.x) * f;
            y += (p1.y + p2.y) * f;
            area += f * 3;
        }
        if (area === 0) // Polygon is so small that all points are on same pixel.
        center = points[0];
        else center = [
            x / area,
            y / area
        ];
        var latlngCenter = crs.unproject(toPoint(center));
        return toLatLng([
            latlngCenter.lat + centroidLatLng.lat,
            latlngCenter.lng + centroidLatLng.lng
        ]);
    }
    /* @function centroid(latlngs: LatLng[]): LatLng
   * Returns the 'center of mass' of the passed LatLngs.
   */ function centroid(coords) {
        var latSum = 0;
        var lngSum = 0;
        var len = 0;
        for(var i = 0; i < coords.length; i++){
            var latlng = toLatLng(coords[i]);
            latSum += latlng.lat;
            lngSum += latlng.lng;
            len++;
        }
        return toLatLng([
            latSum / len,
            lngSum / len
        ]);
    }
    var PolyUtil = {
        __proto__: null,
        clipPolygon: clipPolygon,
        polygonCenter: polygonCenter,
        centroid: centroid
    };
    /*
   * @namespace LineUtil
   *
   * Various utility functions for polyline points processing, used by Leaflet internally to make polylines lightning-fast.
   */ // Simplify polyline with vertex reduction and Douglas-Peucker simplification.
    // Improves rendering performance dramatically by lessening the number of points to draw.
    // @function simplify(points: Point[], tolerance: Number): Point[]
    // Dramatically reduces the number of points in a polyline while retaining
    // its shape and returns a new array of simplified points, using the
    // [Ramer-Douglas-Peucker algorithm](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm).
    // Used for a huge performance boost when processing/displaying Leaflet polylines for
    // each zoom level and also reducing visual noise. tolerance affects the amount of
    // simplification (lesser value means higher quality but slower and with more points).
    // Also released as a separated micro-library [Simplify.js](https://mourner.github.io/simplify-js/).
    function simplify(points, tolerance) {
        if (!tolerance || !points.length) return points.slice();
        var sqTolerance = tolerance * tolerance;
        // stage 1: vertex reduction
        points = _reducePoints(points, sqTolerance);
        // stage 2: Douglas-Peucker simplification
        points = _simplifyDP(points, sqTolerance);
        return points;
    }
    // @function pointToSegmentDistance(p: Point, p1: Point, p2: Point): Number
    // Returns the distance between point `p` and segment `p1` to `p2`.
    function pointToSegmentDistance(p, p1, p2) {
        return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
    }
    // @function closestPointOnSegment(p: Point, p1: Point, p2: Point): Number
    // Returns the closest point from a point `p` on a segment `p1` to `p2`.
    function closestPointOnSegment(p, p1, p2) {
        return _sqClosestPointOnSegment(p, p1, p2);
    }
    // Ramer-Douglas-Peucker simplification, see https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm
    function _simplifyDP(points, sqTolerance) {
        var len = points.length, ArrayConstructor = typeof Uint8Array !== "undefined" ? Uint8Array : Array, markers = new ArrayConstructor(len);
        markers[0] = markers[len - 1] = 1;
        _simplifyDPStep(points, markers, sqTolerance, 0, len - 1);
        var i, newPoints = [];
        for(i = 0; i < len; i++)if (markers[i]) newPoints.push(points[i]);
        return newPoints;
    }
    function _simplifyDPStep(points, markers, sqTolerance, first, last) {
        var maxSqDist = 0, index, i, sqDist;
        for(i = first + 1; i <= last - 1; i++){
            sqDist = _sqClosestPointOnSegment(points[i], points[first], points[last], true);
            if (sqDist > maxSqDist) {
                index = i;
                maxSqDist = sqDist;
            }
        }
        if (maxSqDist > sqTolerance) {
            markers[index] = 1;
            _simplifyDPStep(points, markers, sqTolerance, first, index);
            _simplifyDPStep(points, markers, sqTolerance, index, last);
        }
    }
    // reduce points that are too close to each other to a single point
    function _reducePoints(points, sqTolerance) {
        var reducedPoints = [
            points[0]
        ];
        for(var i = 1, prev = 0, len = points.length; i < len; i++)if (_sqDist(points[i], points[prev]) > sqTolerance) {
            reducedPoints.push(points[i]);
            prev = i;
        }
        if (prev < len - 1) reducedPoints.push(points[len - 1]);
        return reducedPoints;
    }
    var _lastCode;
    // @function clipSegment(a: Point, b: Point, bounds: Bounds, useLastCode?: Boolean, round?: Boolean): Point[]|Boolean
    // Clips the segment a to b by rectangular bounds with the
    // [Cohen-Sutherland algorithm](https://en.wikipedia.org/wiki/Cohen%E2%80%93Sutherland_algorithm)
    // (modifying the segment points directly!). Used by Leaflet to only show polyline
    // points that are on the screen or near, increasing performance.
    function clipSegment(a, b, bounds, useLastCode, round) {
        var codeA = useLastCode ? _lastCode : _getBitCode(a, bounds), codeB = _getBitCode(b, bounds), codeOut, p, newCode;
        // save 2nd code to avoid calculating it on the next segment
        _lastCode = codeB;
        while(true){
            // if a,b is inside the clip window (trivial accept)
            if (!(codeA | codeB)) return [
                a,
                b
            ];
            // if a,b is outside the clip window (trivial reject)
            if (codeA & codeB) return false;
            // other cases
            codeOut = codeA || codeB;
            p = _getEdgeIntersection(a, b, codeOut, bounds, round);
            newCode = _getBitCode(p, bounds);
            if (codeOut === codeA) {
                a = p;
                codeA = newCode;
            } else {
                b = p;
                codeB = newCode;
            }
        }
    }
    function _getEdgeIntersection(a, b, code, bounds, round) {
        var dx = b.x - a.x, dy = b.y - a.y, min = bounds.min, max = bounds.max, x, y;
        if (code & 8) {
            x = a.x + dx * (max.y - a.y) / dy;
            y = max.y;
        } else if (code & 4) {
            x = a.x + dx * (min.y - a.y) / dy;
            y = min.y;
        } else if (code & 2) {
            x = max.x;
            y = a.y + dy * (max.x - a.x) / dx;
        } else if (code & 1) {
            x = min.x;
            y = a.y + dy * (min.x - a.x) / dx;
        }
        return new Point(x, y, round);
    }
    function _getBitCode(p, bounds) {
        var code = 0;
        if (p.x < bounds.min.x) code |= 1;
        else if (p.x > bounds.max.x) code |= 2;
        if (p.y < bounds.min.y) code |= 4;
        else if (p.y > bounds.max.y) code |= 8;
        return code;
    }
    // square distance (to avoid unnecessary Math.sqrt calls)
    function _sqDist(p1, p2) {
        var dx = p2.x - p1.x, dy = p2.y - p1.y;
        return dx * dx + dy * dy;
    }
    // return closest point on segment or distance to that point
    function _sqClosestPointOnSegment(p, p1, p2, sqDist) {
        var x = p1.x, y = p1.y, dx = p2.x - x, dy = p2.y - y, dot = dx * dx + dy * dy, t;
        if (dot > 0) {
            t = ((p.x - x) * dx + (p.y - y) * dy) / dot;
            if (t > 1) {
                x = p2.x;
                y = p2.y;
            } else if (t > 0) {
                x += dx * t;
                y += dy * t;
            }
        }
        dx = p.x - x;
        dy = p.y - y;
        return sqDist ? dx * dx + dy * dy : new Point(x, y);
    }
    // @function isFlat(latlngs: LatLng[]): Boolean
    // Returns true if `latlngs` is a flat array, false is nested.
    function isFlat(latlngs) {
        return !isArray(latlngs[0]) || typeof latlngs[0][0] !== "object" && typeof latlngs[0][0] !== "undefined";
    }
    function _flat(latlngs) {
        console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead.");
        return isFlat(latlngs);
    }
    /* @function polylineCenter(latlngs: LatLng[], crs: CRS): LatLng
   * Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the passed LatLngs (first ring) from a polyline.
   */ function polylineCenter(latlngs, crs) {
        var i, halfDist, segDist, dist, p1, p2, ratio, center;
        if (!latlngs || latlngs.length === 0) throw new Error("latlngs not passed");
        if (!isFlat(latlngs)) {
            console.warn("latlngs are not flat! Only the first ring will be used");
            latlngs = latlngs[0];
        }
        var centroidLatLng = toLatLng([
            0,
            0
        ]);
        var bounds = toLatLngBounds(latlngs);
        var areaBounds = bounds.getNorthWest().distanceTo(bounds.getSouthWest()) * bounds.getNorthEast().distanceTo(bounds.getNorthWest());
        // tests showed that below 1700 rounding errors are happening
        if (areaBounds < 1700) // getting a inexact center, to move the latlngs near to [0, 0] to prevent rounding errors
        centroidLatLng = centroid(latlngs);
        var len = latlngs.length;
        var points = [];
        for(i = 0; i < len; i++){
            var latlng = toLatLng(latlngs[i]);
            points.push(crs.project(toLatLng([
                latlng.lat - centroidLatLng.lat,
                latlng.lng - centroidLatLng.lng
            ])));
        }
        for(i = 0, halfDist = 0; i < len - 1; i++)halfDist += points[i].distanceTo(points[i + 1]) / 2;
        // The line is so small in the current view that all points are on the same pixel.
        if (halfDist === 0) center = points[0];
        else for(i = 0, dist = 0; i < len - 1; i++){
            p1 = points[i];
            p2 = points[i + 1];
            segDist = p1.distanceTo(p2);
            dist += segDist;
            if (dist > halfDist) {
                ratio = (dist - halfDist) / segDist;
                center = [
                    p2.x - ratio * (p2.x - p1.x),
                    p2.y - ratio * (p2.y - p1.y)
                ];
                break;
            }
        }
        var latlngCenter = crs.unproject(toPoint(center));
        return toLatLng([
            latlngCenter.lat + centroidLatLng.lat,
            latlngCenter.lng + centroidLatLng.lng
        ]);
    }
    var LineUtil = {
        __proto__: null,
        simplify: simplify,
        pointToSegmentDistance: pointToSegmentDistance,
        closestPointOnSegment: closestPointOnSegment,
        clipSegment: clipSegment,
        _getEdgeIntersection: _getEdgeIntersection,
        _getBitCode: _getBitCode,
        _sqClosestPointOnSegment: _sqClosestPointOnSegment,
        isFlat: isFlat,
        _flat: _flat,
        polylineCenter: polylineCenter
    };
    /*
   * @namespace Projection
   * @section
   * Leaflet comes with a set of already defined Projections out of the box:
   *
   * @projection L.Projection.LonLat
   *
   * Equirectangular, or Plate Carree projection — the most simple projection,
   * mostly used by GIS enthusiasts. Directly maps `x` as longitude, and `y` as
   * latitude. Also suitable for flat worlds, e.g. game maps. Used by the
   * `EPSG:4326` and `Simple` CRS.
   */ var LonLat = {
        project: function(latlng) {
            return new Point(latlng.lng, latlng.lat);
        },
        unproject: function(point) {
            return new LatLng(point.y, point.x);
        },
        bounds: new Bounds([
            -180,
            -90
        ], [
            180,
            90
        ])
    };
    /*
   * @namespace Projection
   * @projection L.Projection.Mercator
   *
   * Elliptical Mercator projection — more complex than Spherical Mercator. Assumes that Earth is an ellipsoid. Used by the EPSG:3395 CRS.
   */ var Mercator = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new Bounds([
            -20037508.34279,
            -15496570.73972
        ], [
            20037508.34279,
            18764656.23138
        ]),
        project: function(latlng) {
            var d = Math.PI / 180, r = this.R, y = latlng.lat * d, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), con = e * Math.sin(y);
            var ts = Math.tan(Math.PI / 4 - y / 2) / Math.pow((1 - con) / (1 + con), e / 2);
            y = -r * Math.log(Math.max(ts, 1E-10));
            return new Point(latlng.lng * d * r, y);
        },
        unproject: function(point) {
            var d = 180 / Math.PI, r = this.R, tmp = this.R_MINOR / r, e = Math.sqrt(1 - tmp * tmp), ts = Math.exp(-point.y / r), phi = Math.PI / 2 - 2 * Math.atan(ts);
            for(var i = 0, dphi = 0.1, con; i < 15 && Math.abs(dphi) > 1e-7; i++){
                con = e * Math.sin(phi);
                con = Math.pow((1 - con) / (1 + con), e / 2);
                dphi = Math.PI / 2 - 2 * Math.atan(ts * con) - phi;
                phi += dphi;
            }
            return new LatLng(phi * d, point.x * d / r);
        }
    };
    /*
   * @class Projection

   * An object with methods for projecting geographical coordinates of the world onto
   * a flat surface (and back). See [Map projection](https://en.wikipedia.org/wiki/Map_projection).

   * @property bounds: Bounds
   * The bounds (specified in CRS units) where the projection is valid

   * @method project(latlng: LatLng): Point
   * Projects geographical coordinates into a 2D point.
   * Only accepts actual `L.LatLng` instances, not arrays.

   * @method unproject(point: Point): LatLng
   * The inverse of `project`. Projects a 2D point into a geographical location.
   * Only accepts actual `L.Point` instances, not arrays.

   * Note that the projection instances do not inherit from Leaflet's `Class` object,
   * and can't be instantiated. Also, new classes can't inherit from them,
   * and methods can't be added to them with the `include` function.

   */ var index = {
        __proto__: null,
        LonLat: LonLat,
        Mercator: Mercator,
        SphericalMercator: SphericalMercator
    };
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG3395
   *
   * Rarely used by some commercial tile providers. Uses Elliptical Mercator projection.
   */ var EPSG3395 = extend({}, Earth, {
        code: "EPSG:3395",
        projection: Mercator,
        transformation: function() {
            var scale = 0.5 / (Math.PI * Mercator.R);
            return toTransformation(scale, 0.5, -scale, 0.5);
        }()
    });
    /*
   * @namespace CRS
   * @crs L.CRS.EPSG4326
   *
   * A common CRS among GIS enthusiasts. Uses simple Equirectangular projection.
   *
   * Leaflet 1.0.x complies with the [TMS coordinate scheme for EPSG:4326](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification#global-geodetic),
   * which is a breaking change from 0.7.x behaviour.  If you are using a `TileLayer`
   * with this CRS, ensure that there are two 256x256 pixel tiles covering the
   * whole earth at zoom level zero, and that the tile coordinate origin is (-180,+90),
   * or (-180,-90) for `TileLayer`s with [the `tms` option](#tilelayer-tms) set.
   */ var EPSG4326 = extend({}, Earth, {
        code: "EPSG:4326",
        projection: LonLat,
        transformation: toTransformation(1 / 180, 1, -1 / 180, 0.5)
    });
    /*
   * @namespace CRS
   * @crs L.CRS.Simple
   *
   * A simple CRS that maps longitude and latitude into `x` and `y` directly.
   * May be used for maps of flat surfaces (e.g. game maps). Note that the `y`
   * axis should still be inverted (going from bottom to top). `distance()` returns
   * simple euclidean distance.
   */ var Simple = extend({}, CRS, {
        projection: LonLat,
        transformation: toTransformation(1, 0, -1, 0),
        scale: function(zoom) {
            return Math.pow(2, zoom);
        },
        zoom: function(scale) {
            return Math.log(scale) / Math.LN2;
        },
        distance: function(latlng1, latlng2) {
            var dx = latlng2.lng - latlng1.lng, dy = latlng2.lat - latlng1.lat;
            return Math.sqrt(dx * dx + dy * dy);
        },
        infinite: true
    });
    CRS.Earth = Earth;
    CRS.EPSG3395 = EPSG3395;
    CRS.EPSG3857 = EPSG3857;
    CRS.EPSG900913 = EPSG900913;
    CRS.EPSG4326 = EPSG4326;
    CRS.Simple = Simple;
    /*
   * @class Layer
   * @inherits Evented
   * @aka L.Layer
   * @aka ILayer
   *
   * A set of methods from the Layer base class that all Leaflet layers use.
   * Inherits all methods, options and events from `L.Evented`.
   *
   * @example
   *
   * ```js
   * var layer = L.marker(latlng).addTo(map);
   * layer.addTo(map);
   * layer.remove();
   * ```
   *
   * @event add: Event
   * Fired after the layer is added to a map
   *
   * @event remove: Event
   * Fired after the layer is removed from a map
   */ var Layer = Evented.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
            // @option pane: String = 'overlayPane'
            // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
            pane: "overlayPane",
            // @option attribution: String = null
            // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
            attribution: null,
            bubblingMouseEvents: true
        },
        /* @section
  	 * Classes extending `L.Layer` will inherit the following methods:
  	 *
  	 * @method addTo(map: Map|LayerGroup): this
  	 * Adds the layer to the given map or layer group.
  	 */ addTo: function(map) {
            map.addLayer(this);
            return this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
            return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(obj) {
            if (obj) obj.removeLayer(this);
            return this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(name) {
            return this._map.getPane(name ? this.options[name] || name : this.options.pane);
        },
        addInteractiveTarget: function(targetEl) {
            this._map._targets[stamp(targetEl)] = this;
            return this;
        },
        removeInteractiveTarget: function(targetEl) {
            delete this._map._targets[stamp(targetEl)];
            return this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
            return this.options.attribution;
        },
        _layerAdd: function(e) {
            var map = e.target;
            // check in case layer gets added and then removed before the map is ready
            if (!map.hasLayer(this)) return;
            this._map = map;
            this._zoomAnimated = map._zoomAnimated;
            if (this.getEvents) {
                var events = this.getEvents();
                map.on(events, this);
                this.once("remove", function() {
                    map.off(events, this);
                }, this);
            }
            this.onAdd(map);
            this.fire("add");
            map.fire("layeradd", {
                layer: this
            });
        }
    });
    /* @section Extension methods
   * @uninheritable
   *
   * Every layer should extend from `L.Layer` and (re-)implement the following methods.
   *
   * @method onAdd(map: Map): this
   * Should contain code that creates DOM elements for the layer, adds them to `map panes` where they should belong and puts listeners on relevant map events. Called on [`map.addLayer(layer)`](#map-addlayer).
   *
   * @method onRemove(map: Map): this
   * Should contain all clean up code that removes the layer's elements from the DOM and removes listeners previously added in [`onAdd`](#layer-onadd). Called on [`map.removeLayer(layer)`](#map-removelayer).
   *
   * @method getEvents(): Object
   * This optional method should return an object like `{ viewreset: this._reset }` for [`addEventListener`](#evented-addeventlistener). The event handlers in this object will be automatically added and removed from the map with your layer.
   *
   * @method getAttribution(): String
   * This optional method should return a string containing HTML to be shown on the `Attribution control` whenever the layer is visible.
   *
   * @method beforeAdd(map: Map): this
   * Optional method. Called on [`map.addLayer(layer)`](#map-addlayer), before the layer is added to the map, before events are initialized, without waiting until the map is in a usable state. Use for early initialization only.
   */ /* @namespace Map
   * @section Layer events
   *
   * @event layeradd: LayerEvent
   * Fired when a new layer is added to the map.
   *
   * @event layerremove: LayerEvent
   * Fired when some layer is removed from the map
   *
   * @section Methods for Layers and Controls
   */ Map.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(layer) {
            if (!layer._layerAdd) throw new Error("The provided object is not a Layer.");
            var id = stamp(layer);
            if (this._layers[id]) return this;
            this._layers[id] = layer;
            layer._mapToAdd = this;
            if (layer.beforeAdd) layer.beforeAdd(this);
            this.whenReady(layer._layerAdd, layer);
            return this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(layer) {
            var id = stamp(layer);
            if (!this._layers[id]) return this;
            if (this._loaded) layer.onRemove(this);
            delete this._layers[id];
            if (this._loaded) {
                this.fire("layerremove", {
                    layer: layer
                });
                layer.fire("remove");
            }
            layer._map = layer._mapToAdd = null;
            return this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(layer) {
            return stamp(layer) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
  	 * Iterates over the layers of the map, optionally specifying context of the iterator function.
  	 * ```
  	 * map.eachLayer(function(layer){
  	 *     layer.bindPopup('Hello');
  	 * });
  	 * ```
  	 */ eachLayer: function(method, context) {
            for(var i in this._layers)method.call(context, this._layers[i]);
            return this;
        },
        _addLayers: function(layers) {
            layers = layers ? isArray(layers) ? layers : [
                layers
            ] : [];
            for(var i = 0, len = layers.length; i < len; i++)this.addLayer(layers[i]);
        },
        _addZoomLimit: function(layer) {
            if (!isNaN(layer.options.maxZoom) || !isNaN(layer.options.minZoom)) {
                this._zoomBoundLayers[stamp(layer)] = layer;
                this._updateZoomLevels();
            }
        },
        _removeZoomLimit: function(layer) {
            var id = stamp(layer);
            if (this._zoomBoundLayers[id]) {
                delete this._zoomBoundLayers[id];
                this._updateZoomLevels();
            }
        },
        _updateZoomLevels: function() {
            var minZoom = Infinity, maxZoom = -Infinity, oldZoomSpan = this._getZoomSpan();
            for(var i in this._zoomBoundLayers){
                var options = this._zoomBoundLayers[i].options;
                minZoom = options.minZoom === undefined ? minZoom : Math.min(minZoom, options.minZoom);
                maxZoom = options.maxZoom === undefined ? maxZoom : Math.max(maxZoom, options.maxZoom);
            }
            this._layersMaxZoom = maxZoom === -Infinity ? undefined : maxZoom;
            this._layersMinZoom = minZoom === Infinity ? undefined : minZoom;
            // @section Map state change events
            // @event zoomlevelschange: Event
            // Fired when the number of zoomlevels on the map is changed due
            // to adding or removing a layer.
            if (oldZoomSpan !== this._getZoomSpan()) this.fire("zoomlevelschange");
            if (this.options.maxZoom === undefined && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom) this.setZoom(this._layersMaxZoom);
            if (this.options.minZoom === undefined && this._layersMinZoom && this.getZoom() < this._layersMinZoom) this.setZoom(this._layersMinZoom);
        }
    });
    /*
   * @class LayerGroup
   * @aka L.LayerGroup
   * @inherits Interactive layer
   *
   * Used to group several layers and handle them as one. If you add it to the map,
   * any layers added or removed from the group will be added/removed on the map as
   * well. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.layerGroup([marker1, marker2])
   * 	.addLayer(polyline)
   * 	.addTo(map);
   * ```
   */ var LayerGroup = Layer.extend({
        initialize: function(layers, options) {
            setOptions(this, options);
            this._layers = {};
            var i, len;
            if (layers) for(i = 0, len = layers.length; i < len; i++)this.addLayer(layers[i]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(layer) {
            var id = this.getLayerId(layer);
            this._layers[id] = layer;
            if (this._map) this._map.addLayer(layer);
            return this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(layer) {
            var id = layer in this._layers ? layer : this.getLayerId(layer);
            if (this._map && this._layers[id]) this._map.removeLayer(this._layers[id]);
            delete this._layers[id];
            return this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(layer) {
            var layerId = typeof layer === "number" ? layer : this.getLayerId(layer);
            return layerId in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
            return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(methodName) {
            var args = Array.prototype.slice.call(arguments, 1), i, layer;
            for(i in this._layers){
                layer = this._layers[i];
                if (layer[methodName]) layer[methodName].apply(layer, args);
            }
            return this;
        },
        onAdd: function(map) {
            this.eachLayer(map.addLayer, map);
        },
        onRemove: function(map) {
            this.eachLayer(map.removeLayer, map);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(method, context) {
            for(var i in this._layers)method.call(context, this._layers[i]);
            return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(id) {
            return this._layers[id];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
            var layers = [];
            this.eachLayer(layers.push, layers);
            return layers;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(zIndex) {
            return this.invoke("setZIndex", zIndex);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(layer) {
            return stamp(layer);
        }
    });
    // @factory L.layerGroup(layers?: Layer[], options?: Object)
    // Create a layer group, optionally given an initial set of layers and an `options` object.
    var layerGroup = function(layers, options) {
        return new LayerGroup(layers, options);
    };
    /*
   * @class FeatureGroup
   * @aka L.FeatureGroup
   * @inherits LayerGroup
   *
   * Extended `LayerGroup` that makes it easier to do the same thing to all its member layers:
   *  * [`bindPopup`](#layer-bindpopup) binds a popup to all of the layers at once (likewise with [`bindTooltip`](#layer-bindtooltip))
   *  * Events are propagated to the `FeatureGroup`, so if the group has an event
   * handler, it will handle events from any of the layers. This includes mouse events
   * and custom events.
   *  * Has `layeradd` and `layerremove` events
   *
   * @example
   *
   * ```js
   * L.featureGroup([marker1, marker2, polyline])
   * 	.bindPopup('Hello world!')
   * 	.on('click', function() { alert('Clicked on a member of the group!'); })
   * 	.addTo(map);
   * ```
   */ var FeatureGroup = LayerGroup.extend({
        addLayer: function(layer) {
            if (this.hasLayer(layer)) return this;
            layer.addEventParent(this);
            LayerGroup.prototype.addLayer.call(this, layer);
            // @event layeradd: LayerEvent
            // Fired when a layer is added to this `FeatureGroup`
            return this.fire("layeradd", {
                layer: layer
            });
        },
        removeLayer: function(layer) {
            if (!this.hasLayer(layer)) return this;
            if (layer in this._layers) layer = this._layers[layer];
            layer.removeEventParent(this);
            LayerGroup.prototype.removeLayer.call(this, layer);
            // @event layerremove: LayerEvent
            // Fired when a layer is removed from this `FeatureGroup`
            return this.fire("layerremove", {
                layer: layer
            });
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(style) {
            return this.invoke("setStyle", style);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
            return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
            return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
            var bounds = new LatLngBounds();
            for(var id in this._layers){
                var layer = this._layers[id];
                bounds.extend(layer.getBounds ? layer.getBounds() : layer.getLatLng());
            }
            return bounds;
        }
    });
    // @factory L.featureGroup(layers?: Layer[], options?: Object)
    // Create a feature group, optionally given an initial set of layers and an `options` object.
    var featureGroup = function(layers, options) {
        return new FeatureGroup(layers, options);
    };
    /*
   * @class Icon
   * @aka L.Icon
   *
   * Represents an icon to provide when creating a marker.
   *
   * @example
   *
   * ```js
   * var myIcon = L.icon({
   *     iconUrl: 'my-icon.png',
   *     iconRetinaUrl: 'my-icon@2x.png',
   *     iconSize: [38, 95],
   *     iconAnchor: [22, 94],
   *     popupAnchor: [-3, -76],
   *     shadowUrl: 'my-icon-shadow.png',
   *     shadowRetinaUrl: 'my-icon-shadow@2x.png',
   *     shadowSize: [68, 95],
   *     shadowAnchor: [22, 94]
   * });
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * `L.Icon.Default` extends `L.Icon` and is the blue icon Leaflet uses for markers by default.
   *
   */ var Icon = Class.extend({
        /* @section
  	 * @aka Icon options
  	 *
  	 * @option iconUrl: String = null
  	 * **(required)** The URL to the icon image (absolute or relative to your script path).
  	 *
  	 * @option iconRetinaUrl: String = null
  	 * The URL to a retina sized version of the icon image (absolute or relative to your
  	 * script path). Used for Retina screen devices.
  	 *
  	 * @option iconSize: Point = null
  	 * Size of the icon image in pixels.
  	 *
  	 * @option iconAnchor: Point = null
  	 * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
  	 * will be aligned so that this point is at the marker's geographical location. Centered
  	 * by default if size is specified, also can be set in CSS with negative margins.
  	 *
  	 * @option popupAnchor: Point = [0, 0]
  	 * The coordinates of the point from which popups will "open", relative to the icon anchor.
  	 *
  	 * @option tooltipAnchor: Point = [0, 0]
  	 * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
  	 *
  	 * @option shadowUrl: String = null
  	 * The URL to the icon shadow image. If not specified, no shadow image will be created.
  	 *
  	 * @option shadowRetinaUrl: String = null
  	 *
  	 * @option shadowSize: Point = null
  	 * Size of the shadow image in pixels.
  	 *
  	 * @option shadowAnchor: Point = null
  	 * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
  	 * as iconAnchor if not specified).
  	 *
  	 * @option className: String = ''
  	 * A custom class name to assign to both icon and shadow images. Empty by default.
  	 */ options: {
            popupAnchor: [
                0,
                0
            ],
            tooltipAnchor: [
                0,
                0
            ],
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(oldIcon) {
            return this._createIcon("icon", oldIcon);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(oldIcon) {
            return this._createIcon("shadow", oldIcon);
        },
        _createIcon: function(name, oldIcon) {
            var src = this._getIconUrl(name);
            if (!src) {
                if (name === "icon") throw new Error("iconUrl not set in Icon options (see the docs).");
                return null;
            }
            var img = this._createImg(src, oldIcon && oldIcon.tagName === "IMG" ? oldIcon : null);
            this._setIconStyles(img, name);
            if (this.options.crossOrigin || this.options.crossOrigin === "") img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            return img;
        },
        _setIconStyles: function(img, name) {
            var options = this.options;
            var sizeOption = options[name + "Size"];
            if (typeof sizeOption === "number") sizeOption = [
                sizeOption,
                sizeOption
            ];
            var size = toPoint(sizeOption), anchor = toPoint(name === "shadow" && options.shadowAnchor || options.iconAnchor || size && size.divideBy(2, true));
            img.className = "leaflet-marker-" + name + " " + (options.className || "");
            if (anchor) {
                img.style.marginLeft = -anchor.x + "px";
                img.style.marginTop = -anchor.y + "px";
            }
            if (size) {
                img.style.width = size.x + "px";
                img.style.height = size.y + "px";
            }
        },
        _createImg: function(src, el) {
            el = el || document.createElement("img");
            el.src = src;
            return el;
        },
        _getIconUrl: function(name) {
            return Browser.retina && this.options[name + "RetinaUrl"] || this.options[name + "Url"];
        }
    });
    // @factory L.icon(options: Icon options)
    // Creates an icon instance with the given options.
    function icon(options) {
        return new Icon(options);
    }
    /*
   * @miniclass Icon.Default (Icon)
   * @aka L.Icon.Default
   * @section
   *
   * A trivial subclass of `Icon`, represents the icon to use in `Marker`s when
   * no icon is specified. Points to the blue marker image distributed with Leaflet
   * releases.
   *
   * In order to customize the default icon, just change the properties of `L.Icon.Default.prototype.options`
   * (which is a set of `Icon options`).
   *
   * If you want to _completely_ replace the default icon, override the
   * `L.Marker.prototype.options.icon` with your own icon instead.
   */ var IconDefault = Icon.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [
                25,
                41
            ],
            iconAnchor: [
                12,
                41
            ],
            popupAnchor: [
                1,
                -34
            ],
            tooltipAnchor: [
                16,
                -28
            ],
            shadowSize: [
                41,
                41
            ]
        },
        _getIconUrl: function(name) {
            if (typeof IconDefault.imagePath !== "string") IconDefault.imagePath = this._detectIconPath();
            // @option imagePath: String
            // `Icon.Default` will try to auto-detect the location of the
            // blue icon images. If you are placing these images in a non-standard
            // way, set this option to point to the right path.
            return (this.options.imagePath || IconDefault.imagePath) + Icon.prototype._getIconUrl.call(this, name);
        },
        _stripUrl: function(path) {
            var strip = function(str, re, idx) {
                var match = re.exec(str);
                return match && match[idx];
            };
            path = strip(path, /^url\((['"])?(.+)\1\)$/, 2);
            return path && strip(path, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
            var el = create$1("div", "leaflet-default-icon-path", document.body);
            var path = getStyle(el, "background-image") || getStyle(el, "backgroundImage"); // IE8
            document.body.removeChild(el);
            path = this._stripUrl(path);
            if (path) return path;
            var link = document.querySelector('link[href$="leaflet.css"]');
            if (!link) return "";
            return link.href.substring(0, link.href.length - 11 - 1);
        }
    });
    /*
   * L.Handler.MarkerDrag is used internally by L.Marker to make the markers draggable.
   */ /* @namespace Marker
   * @section Interaction handlers
   *
   * Interaction handlers are properties of a marker instance that allow you to control interaction behavior in runtime, enabling or disabling certain features such as dragging (see `Handler` methods). Example:
   *
   * ```js
   * marker.dragging.disable();
   * ```
   *
   * @property dragging: Handler
   * Marker dragging handler (by both mouse and touch). Only valid when the marker is on the map (Otherwise set [`marker.options.draggable`](#marker-draggable)).
   */ var MarkerDrag = Handler.extend({
        initialize: function(marker) {
            this._marker = marker;
        },
        addHooks: function() {
            var icon = this._marker._icon;
            if (!this._draggable) this._draggable = new Draggable(icon, icon, true);
            this._draggable.on({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable();
            addClass(icon, "leaflet-marker-draggable");
        },
        removeHooks: function() {
            this._draggable.off({
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable();
            if (this._marker._icon) removeClass(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(e) {
            var marker = this._marker, map = marker._map, speed = this._marker.options.autoPanSpeed, padding = this._marker.options.autoPanPadding, iconPos = getPosition(marker._icon), bounds = map.getPixelBounds(), origin = map.getPixelOrigin();
            var panBounds = toBounds(bounds.min._subtract(origin).add(padding), bounds.max._subtract(origin).subtract(padding));
            if (!panBounds.contains(iconPos)) {
                // Compute incremental movement
                var movement = toPoint((Math.max(panBounds.max.x, iconPos.x) - panBounds.max.x) / (bounds.max.x - panBounds.max.x) - (Math.min(panBounds.min.x, iconPos.x) - panBounds.min.x) / (bounds.min.x - panBounds.min.x), (Math.max(panBounds.max.y, iconPos.y) - panBounds.max.y) / (bounds.max.y - panBounds.max.y) - (Math.min(panBounds.min.y, iconPos.y) - panBounds.min.y) / (bounds.min.y - panBounds.min.y)).multiplyBy(speed);
                map.panBy(movement, {
                    animate: false
                });
                this._draggable._newPos._add(movement);
                this._draggable._startPos._add(movement);
                setPosition(marker._icon, this._draggable._newPos);
                this._onDrag(e);
                this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
        },
        _onDragStart: function() {
            // @section Dragging events
            // @event dragstart: Event
            // Fired when the user starts dragging the marker.
            // @event movestart: Event
            // Fired when the marker starts moving (because of dragging).
            this._oldLatLng = this._marker.getLatLng();
            // When using ES6 imports it could not be set when `Popup` was not imported as well
            this._marker.closePopup && this._marker.closePopup();
            this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
            if (this._marker.options.autoPan) {
                cancelAnimFrame(this._panRequest);
                this._panRequest = requestAnimFrame(this._adjustPan.bind(this, e));
            }
        },
        _onDrag: function(e) {
            var marker = this._marker, shadow = marker._shadow, iconPos = getPosition(marker._icon), latlng = marker._map.layerPointToLatLng(iconPos);
            // update shadow position
            if (shadow) setPosition(shadow, iconPos);
            marker._latlng = latlng;
            e.latlng = latlng;
            e.oldLatLng = this._oldLatLng;
            // @event drag: Event
            // Fired repeatedly while the user drags the marker.
            marker.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
            // @event dragend: DragEndEvent
            // Fired when the user stops dragging the marker.
            cancelAnimFrame(this._panRequest);
            // @event moveend: Event
            // Fired when the marker stops moving (because of dragging).
            delete this._oldLatLng;
            this._marker.fire("moveend").fire("dragend", e);
        }
    });
    /*
   * @class Marker
   * @inherits Interactive layer
   * @aka L.Marker
   * L.Marker is used to display clickable/draggable icons on the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * L.marker([50.5, 30.5]).addTo(map);
   * ```
   */ var Marker = Layer.extend({
        // @section
        // @aka Marker options
        options: {
            // @option icon: Icon = *
            // Icon instance to use for rendering the marker.
            // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
            // If not specified, a common instance of `L.Icon.Default` is used.
            icon: new IconDefault(),
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option keyboard: Boolean = true
            // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
            keyboard: true,
            // @option title: String = ''
            // Text for the browser tooltip that appear on marker hover (no tooltip by default).
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            title: "",
            // @option alt: String = 'Marker'
            // Text for the `alt` attribute of the icon image.
            // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
            alt: "Marker",
            // @option zIndexOffset: Number = 0
            // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
            zIndexOffset: 0,
            // @option opacity: Number = 1.0
            // The opacity of the marker.
            opacity: 1,
            // @option riseOnHover: Boolean = false
            // If `true`, the marker will get on top of others when you hover the mouse over it.
            riseOnHover: false,
            // @option riseOffset: Number = 250
            // The z-index offset used for the `riseOnHover` feature.
            riseOffset: 250,
            // @option pane: String = 'markerPane'
            // `Map pane` where the markers icon will be added.
            pane: "markerPane",
            // @option shadowPane: String = 'shadowPane'
            // `Map pane` where the markers shadow will be added.
            shadowPane: "shadowPane",
            // @option bubblingMouseEvents: Boolean = false
            // When `true`, a mouse event on this marker will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: false,
            // @option autoPanOnFocus: Boolean = true
            // When `true`, the map will pan whenever the marker is focused (via
            // e.g. pressing `tab` on the keyboard) to ensure the marker is
            // visible within the map's bounds
            autoPanOnFocus: true,
            // @section Draggable marker options
            // @option draggable: Boolean = false
            // Whether the marker is draggable with mouse/touch or not.
            draggable: false,
            // @option autoPan: Boolean = false
            // Whether to pan the map when dragging this marker near its edge or not.
            autoPan: false,
            // @option autoPanPadding: Point = Point(50, 50)
            // Distance (in pixels to the left/right and to the top/bottom) of the
            // map edge to start panning the map.
            autoPanPadding: [
                50,
                50
            ],
            // @option autoPanSpeed: Number = 10
            // Number of pixels the map should pan by.
            autoPanSpeed: 10
        },
        /* @section
  	 *
  	 * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
  	 */ initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
        },
        onAdd: function(map) {
            this._zoomAnimated = this._zoomAnimated && map.options.markerZoomAnimation;
            if (this._zoomAnimated) map.on("zoomanim", this._animateZoom, this);
            this._initIcon();
            this.update();
        },
        onRemove: function(map) {
            if (this.dragging && this.dragging.enabled()) {
                this.options.draggable = true;
                this.dragging.removeHooks();
            }
            delete this.dragging;
            if (this._zoomAnimated) map.off("zoomanim", this._animateZoom, this);
            this._removeIcon();
            this._removeShadow();
        },
        getEvents: function() {
            return {
                zoom: this.update,
                viewreset: this.update
            };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
            return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.update();
            // @event move: Event
            // Fired when the marker is moved via [`setLatLng`](#marker-setlatlng) or by [dragging](#marker-dragging). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
            return this.fire("move", {
                oldLatLng: oldLatLng,
                latlng: this._latlng
            });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(offset) {
            this.options.zIndexOffset = offset;
            return this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
            return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(icon) {
            this.options.icon = icon;
            if (this._map) {
                this._initIcon();
                this.update();
            }
            if (this._popup) this.bindPopup(this._popup, this._popup.options);
            return this;
        },
        getElement: function() {
            return this._icon;
        },
        update: function() {
            if (this._icon && this._map) {
                var pos = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(pos);
            }
            return this;
        },
        _initIcon: function() {
            var options = this.options, classToAdd = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            var icon = options.icon.createIcon(this._icon), addIcon = false;
            // if we're not reusing the icon, remove the old one and init new one
            if (icon !== this._icon) {
                if (this._icon) this._removeIcon();
                addIcon = true;
                if (options.title) icon.title = options.title;
                if (icon.tagName === "IMG") icon.alt = options.alt || "";
            }
            addClass(icon, classToAdd);
            if (options.keyboard) {
                icon.tabIndex = "0";
                icon.setAttribute("role", "button");
            }
            this._icon = icon;
            if (options.riseOnHover) this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            if (this.options.autoPanOnFocus) on(icon, "focus", this._panOnFocus, this);
            var newShadow = options.icon.createShadow(this._shadow), addShadow = false;
            if (newShadow !== this._shadow) {
                this._removeShadow();
                addShadow = true;
            }
            if (newShadow) {
                addClass(newShadow, classToAdd);
                newShadow.alt = "";
            }
            this._shadow = newShadow;
            if (options.opacity < 1) this._updateOpacity();
            if (addIcon) this.getPane().appendChild(this._icon);
            this._initInteraction();
            if (newShadow && addShadow) this.getPane(options.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
            if (this.options.riseOnHover) this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            if (this.options.autoPanOnFocus) off(this._icon, "focus", this._panOnFocus, this);
            remove(this._icon);
            this.removeInteractiveTarget(this._icon);
            this._icon = null;
        },
        _removeShadow: function() {
            if (this._shadow) remove(this._shadow);
            this._shadow = null;
        },
        _setPos: function(pos) {
            if (this._icon) setPosition(this._icon, pos);
            if (this._shadow) setPosition(this._shadow, pos);
            this._zIndex = pos.y + this.options.zIndexOffset;
            this._resetZIndex();
        },
        _updateZIndex: function(offset) {
            if (this._icon) this._icon.style.zIndex = this._zIndex + offset;
        },
        _animateZoom: function(opt) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, opt.zoom, opt.center).round();
            this._setPos(pos);
        },
        _initInteraction: function() {
            if (!this.options.interactive) return;
            addClass(this._icon, "leaflet-interactive");
            this.addInteractiveTarget(this._icon);
            if (MarkerDrag) {
                var draggable = this.options.draggable;
                if (this.dragging) {
                    draggable = this.dragging.enabled();
                    this.dragging.disable();
                }
                this.dragging = new MarkerDrag(this);
                if (draggable) this.dragging.enable();
            }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._map) this._updateOpacity();
            return this;
        },
        _updateOpacity: function() {
            var opacity = this.options.opacity;
            if (this._icon) setOpacity(this._icon, opacity);
            if (this._shadow) setOpacity(this._shadow, opacity);
        },
        _bringToFront: function() {
            this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
            this._updateZIndex(0);
        },
        _panOnFocus: function() {
            var map = this._map;
            if (!map) return;
            var iconOpts = this.options.icon.options;
            var size = iconOpts.iconSize ? toPoint(iconOpts.iconSize) : toPoint(0, 0);
            var anchor = iconOpts.iconAnchor ? toPoint(iconOpts.iconAnchor) : toPoint(0, 0);
            map.panInside(this._latlng, {
                paddingTopLeft: anchor,
                paddingBottomRight: size.subtract(anchor)
            });
        },
        _getPopupAnchor: function() {
            return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
            return this.options.icon.options.tooltipAnchor;
        }
    });
    // factory L.marker(latlng: LatLng, options? : Marker options)
    // @factory L.marker(latlng: LatLng, options? : Marker options)
    // Instantiates a Marker object given a geographical point and optionally an options object.
    function marker(latlng, options) {
        return new Marker(latlng, options);
    }
    /*
   * @class Path
   * @aka L.Path
   * @inherits Interactive layer
   *
   * An abstract class that contains options and constants shared between vector
   * overlays (Polygon, Polyline, Circle). Do not use it directly. Extends `Layer`.
   */ var Path = Layer.extend({
        // @section
        // @aka Path options
        options: {
            // @option stroke: Boolean = true
            // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
            stroke: true,
            // @option color: String = '#3388ff'
            // Stroke color
            color: "#3388ff",
            // @option weight: Number = 3
            // Stroke width in pixels
            weight: 3,
            // @option opacity: Number = 1.0
            // Stroke opacity
            opacity: 1,
            // @option lineCap: String= 'round'
            // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
            lineCap: "round",
            // @option lineJoin: String = 'round'
            // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
            lineJoin: "round",
            // @option dashArray: String = null
            // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashArray: null,
            // @option dashOffset: String = null
            // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
            dashOffset: null,
            // @option fill: Boolean = depends
            // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
            fill: false,
            // @option fillColor: String = *
            // Fill color. Defaults to the value of the [`color`](#path-color) option
            fillColor: null,
            // @option fillOpacity: Number = 0.2
            // Fill opacity.
            fillOpacity: 0.2,
            // @option fillRule: String = 'evenodd'
            // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
            fillRule: "evenodd",
            // className: '',
            // Option inherited from "Interactive layer" abstract class
            interactive: true,
            // @option bubblingMouseEvents: Boolean = true
            // When `true`, a mouse event on this path will trigger the same event on the map
            // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
            bubblingMouseEvents: true
        },
        beforeAdd: function(map) {
            // Renderer is set here because we need to call renderer.getEvents
            // before this.getEvents.
            this._renderer = map.getRenderer(this);
        },
        onAdd: function() {
            this._renderer._initPath(this);
            this._reset();
            this._renderer._addPath(this);
        },
        onRemove: function() {
            this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
            if (this._map) this._renderer._updatePath(this);
            return this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(style) {
            setOptions(this, style);
            if (this._renderer) {
                this._renderer._updateStyle(this);
                if (this.options.stroke && style && Object.prototype.hasOwnProperty.call(style, "weight")) this._updateBounds();
            }
            return this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
            if (this._renderer) this._renderer._bringToFront(this);
            return this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
            if (this._renderer) this._renderer._bringToBack(this);
            return this;
        },
        getElement: function() {
            return this._path;
        },
        _reset: function() {
            // defined in child classes
            this._project();
            this._update();
        },
        _clickTolerance: function() {
            // used when doing hit detection for Canvas layers
            return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
    });
    /*
   * @class CircleMarker
   * @aka L.CircleMarker
   * @inherits Path
   *
   * A circle of a fixed size with radius specified in pixels. Extends `Path`.
   */ var CircleMarker = Path.extend({
        // @section
        // @aka CircleMarker options
        options: {
            fill: true,
            // @option radius: Number = 10
            // Radius of the circle marker, in pixels
            radius: 10
        },
        initialize: function(latlng, options) {
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(latlng) {
            var oldLatLng = this._latlng;
            this._latlng = toLatLng(latlng);
            this.redraw();
            // @event move: Event
            // Fired when the marker is moved via [`setLatLng`](#circlemarker-setlatlng). Old and new coordinates are included in event arguments as `oldLatLng`, `latlng`.
            return this.fire("move", {
                oldLatLng: oldLatLng,
                latlng: this._latlng
            });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
            return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(radius) {
            this.options.radius = this._radius = radius;
            return this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
            return this._radius;
        },
        setStyle: function(options) {
            var radius = options && options.radius || this._radius;
            Path.prototype.setStyle.call(this, options);
            this.setRadius(radius);
            return this;
        },
        _project: function() {
            this._point = this._map.latLngToLayerPoint(this._latlng);
            this._updateBounds();
        },
        _updateBounds: function() {
            var r = this._radius, r2 = this._radiusY || r, w = this._clickTolerance(), p = [
                r + w,
                r2 + w
            ];
            this._pxBounds = new Bounds(this._point.subtract(p), this._point.add(p));
        },
        _update: function() {
            if (this._map) this._updatePath();
        },
        _updatePath: function() {
            this._renderer._updateCircle(this);
        },
        _empty: function() {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p) {
            return p.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
    });
    // @factory L.circleMarker(latlng: LatLng, options?: CircleMarker options)
    // Instantiates a circle marker object given a geographical point, and an optional options object.
    function circleMarker(latlng, options) {
        return new CircleMarker(latlng, options);
    }
    /*
   * @class Circle
   * @aka L.Circle
   * @inherits CircleMarker
   *
   * A class for drawing circle overlays on a map. Extends `CircleMarker`.
   *
   * It's an approximation and starts to diverge from a real circle closer to poles (due to projection distortion).
   *
   * @example
   *
   * ```js
   * L.circle([50.5, 30.5], {radius: 200}).addTo(map);
   * ```
   */ var Circle = CircleMarker.extend({
        initialize: function(latlng, options, legacyOptions) {
            if (typeof options === "number") // Backwards compatibility with 0.7.x factory (latlng, radius, options?)
            options = extend({}, legacyOptions, {
                radius: options
            });
            setOptions(this, options);
            this._latlng = toLatLng(latlng);
            if (isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            // @section
            // @aka Circle options
            // @option radius: Number; Radius of the circle, in meters.
            this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(radius) {
            this._mRadius = radius;
            return this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
            return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
            var half = [
                this._radius,
                this._radiusY || this._radius
            ];
            return new LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(half)), this._map.layerPointToLatLng(this._point.add(half)));
        },
        setStyle: Path.prototype.setStyle,
        _project: function() {
            var lng = this._latlng.lng, lat = this._latlng.lat, map = this._map, crs = map.options.crs;
            if (crs.distance === Earth.distance) {
                var d = Math.PI / 180, latR = this._mRadius / Earth.R / d, top = map.project([
                    lat + latR,
                    lng
                ]), bottom = map.project([
                    lat - latR,
                    lng
                ]), p = top.add(bottom).divideBy(2), lat2 = map.unproject(p).lat, lngR = Math.acos((Math.cos(latR * d) - Math.sin(lat * d) * Math.sin(lat2 * d)) / (Math.cos(lat * d) * Math.cos(lat2 * d))) / d;
                if (isNaN(lngR) || lngR === 0) lngR = latR / Math.cos(Math.PI / 180 * lat); // Fallback for edge case, #2425
                this._point = p.subtract(map.getPixelOrigin());
                this._radius = isNaN(lngR) ? 0 : p.x - map.project([
                    lat2,
                    lng - lngR
                ]).x;
                this._radiusY = p.y - top.y;
            } else {
                var latlng2 = crs.unproject(crs.project(this._latlng).subtract([
                    this._mRadius,
                    0
                ]));
                this._point = map.latLngToLayerPoint(this._latlng);
                this._radius = this._point.x - map.latLngToLayerPoint(latlng2).x;
            }
            this._updateBounds();
        }
    });
    // @factory L.circle(latlng: LatLng, options?: Circle options)
    // Instantiates a circle object given a geographical point, and an options object
    // which contains the circle radius.
    // @alternative
    // @factory L.circle(latlng: LatLng, radius: Number, options?: Circle options)
    // Obsolete way of instantiating a circle, for compatibility with 0.7.x code.
    // Do not use in new applications or plugins.
    function circle(latlng, options, legacyOptions) {
        return new Circle(latlng, options, legacyOptions);
    }
    /*
   * @class Polyline
   * @aka L.Polyline
   * @inherits Path
   *
   * A class for drawing polyline overlays on a map. Extends `Path`.
   *
   * @example
   *
   * ```js
   * // create a red polyline from an array of LatLng points
   * var latlngs = [
   * 	[45.51, -122.68],
   * 	[37.77, -122.43],
   * 	[34.04, -118.2]
   * ];
   *
   * var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polyline
   * map.fitBounds(polyline.getBounds());
   * ```
   *
   * You can also pass a multi-dimensional array to represent a `MultiPolyline` shape:
   *
   * ```js
   * // create a red polyline from an array of arrays of LatLng points
   * var latlngs = [
   * 	[[45.51, -122.68],
   * 	 [37.77, -122.43],
   * 	 [34.04, -118.2]],
   * 	[[40.78, -73.91],
   * 	 [41.83, -87.62],
   * 	 [32.76, -96.72]]
   * ];
   * ```
   */ var Polyline = Path.extend({
        // @section
        // @aka Polyline options
        options: {
            // @option smoothFactor: Number = 1.0
            // How much to simplify the polyline on each zoom level. More means
            // better performance and smoother look, and less means more accurate representation.
            smoothFactor: 1.0,
            // @option noClip: Boolean = false
            // Disable polyline clipping.
            noClip: false
        },
        initialize: function(latlngs, options) {
            setOptions(this, options);
            this._setLatLngs(latlngs);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
            return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(latlngs) {
            this._setLatLngs(latlngs);
            return this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
            return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(p) {
            var minDistance = Infinity, minPoint = null, closest = _sqClosestPointOnSegment, p1, p2;
            for(var j = 0, jLen = this._parts.length; j < jLen; j++){
                var points = this._parts[j];
                for(var i = 1, len = points.length; i < len; i++){
                    p1 = points[i - 1];
                    p2 = points[i];
                    var sqDist = closest(p, p1, p2, true);
                    if (sqDist < minDistance) {
                        minDistance = sqDist;
                        minPoint = closest(p, p1, p2);
                    }
                }
            }
            if (minPoint) minPoint.distance = Math.sqrt(minDistance);
            return minPoint;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
            // throws error when not yet added to map as this center calculation requires projected coordinates
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            return polylineCenter(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
            return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(latlng, latlngs) {
            latlngs = latlngs || this._defaultShape();
            latlng = toLatLng(latlng);
            latlngs.push(latlng);
            this._bounds.extend(latlng);
            return this.redraw();
        },
        _setLatLngs: function(latlngs) {
            this._bounds = new LatLngBounds();
            this._latlngs = this._convertLatLngs(latlngs);
        },
        _defaultShape: function() {
            return isFlat(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(latlngs) {
            var result = [], flat = isFlat(latlngs);
            for(var i = 0, len = latlngs.length; i < len; i++)if (flat) {
                result[i] = toLatLng(latlngs[i]);
                this._bounds.extend(result[i]);
            } else result[i] = this._convertLatLngs(latlngs[i]);
            return result;
        },
        _project: function() {
            var pxBounds = new Bounds();
            this._rings = [];
            this._projectLatlngs(this._latlngs, this._rings, pxBounds);
            if (this._bounds.isValid() && pxBounds.isValid()) {
                this._rawPxBounds = pxBounds;
                this._updateBounds();
            }
        },
        _updateBounds: function() {
            var w = this._clickTolerance(), p = new Point(w, w);
            if (!this._rawPxBounds) return;
            this._pxBounds = new Bounds([
                this._rawPxBounds.min.subtract(p),
                this._rawPxBounds.max.add(p)
            ]);
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(latlngs, result, projectedBounds) {
            var flat = latlngs[0] instanceof LatLng, len = latlngs.length, i, ring;
            if (flat) {
                ring = [];
                for(i = 0; i < len; i++){
                    ring[i] = this._map.latLngToLayerPoint(latlngs[i]);
                    projectedBounds.extend(ring[i]);
                }
                result.push(ring);
            } else for(i = 0; i < len; i++)this._projectLatlngs(latlngs[i], result, projectedBounds);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
            var bounds = this._renderer._bounds;
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) return;
            if (this.options.noClip) {
                this._parts = this._rings;
                return;
            }
            var parts = this._parts, i, j, k, len, len2, segment, points;
            for(i = 0, k = 0, len = this._rings.length; i < len; i++){
                points = this._rings[i];
                for(j = 0, len2 = points.length; j < len2 - 1; j++){
                    segment = clipSegment(points[j], points[j + 1], bounds, j, true);
                    if (!segment) continue;
                    parts[k] = parts[k] || [];
                    parts[k].push(segment[0]);
                    // if segment goes out of screen, or it's the last one, it's the end of the line part
                    if (segment[1] !== points[j + 1] || j === len2 - 2) {
                        parts[k].push(segment[1]);
                        k++;
                    }
                }
            }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
            var parts = this._parts, tolerance = this.options.smoothFactor;
            for(var i = 0, len = parts.length; i < len; i++)parts[i] = simplify(parts[i], tolerance);
        },
        _update: function() {
            if (!this._map) return;
            this._clipPoints();
            this._simplifyPoints();
            this._updatePath();
        },
        _updatePath: function() {
            this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p, closed) {
            var i, j, k, len, len2, part, w = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(p)) return false;
            // hit detection for polylines
            for(i = 0, len = this._parts.length; i < len; i++){
                part = this._parts[i];
                for(j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++){
                    if (!closed && j === 0) continue;
                    if (pointToSegmentDistance(p, part[k], part[j]) <= w) return true;
                }
            }
            return false;
        }
    });
    // @factory L.polyline(latlngs: LatLng[], options?: Polyline options)
    // Instantiates a polyline object given an array of geographical points and
    // optionally an options object. You can create a `Polyline` object with
    // multiple separate lines (`MultiPolyline`) by passing an array of arrays
    // of geographic points.
    function polyline(latlngs, options) {
        return new Polyline(latlngs, options);
    }
    // Retrocompat. Allow plugins to support Leaflet versions before and after 1.1.
    Polyline._flat = _flat;
    /*
   * @class Polygon
   * @aka L.Polygon
   * @inherits Polyline
   *
   * A class for drawing polygon overlays on a map. Extends `Polyline`.
   *
   * Note that points you pass when creating a polygon shouldn't have an additional last point equal to the first one — it's better to filter out such points.
   *
   *
   * @example
   *
   * ```js
   * // create a red polygon from an array of LatLng points
   * var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
   *
   * var polygon = L.polygon(latlngs, {color: 'red'}).addTo(map);
   *
   * // zoom the map to the polygon
   * map.fitBounds(polygon.getBounds());
   * ```
   *
   * You can also pass an array of arrays of latlngs, with the first array representing the outer shape and the other arrays representing holes in the outer shape:
   *
   * ```js
   * var latlngs = [
   *   [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *   [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   * ];
   * ```
   *
   * Additionally, you can pass a multi-dimensional array to represent a MultiPolygon shape.
   *
   * ```js
   * var latlngs = [
   *   [ // first polygon
   *     [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
   *     [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]] // hole
   *   ],
   *   [ // second polygon
   *     [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
   *   ]
   * ];
   * ```
   */ var Polygon = Polyline.extend({
        options: {
            fill: true
        },
        isEmpty: function() {
            return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
            // throws error when not yet added to map as this center calculation requires projected coordinates
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            return polygonCenter(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(latlngs) {
            var result = Polyline.prototype._convertLatLngs.call(this, latlngs), len = result.length;
            // remove last point if it equals first one
            if (len >= 2 && result[0] instanceof LatLng && result[0].equals(result[len - 1])) result.pop();
            return result;
        },
        _setLatLngs: function(latlngs) {
            Polyline.prototype._setLatLngs.call(this, latlngs);
            if (isFlat(this._latlngs)) this._latlngs = [
                this._latlngs
            ];
        },
        _defaultShape: function() {
            return isFlat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
            // polygons need a different clipping algorithm so we redefine that
            var bounds = this._renderer._bounds, w = this.options.weight, p = new Point(w, w);
            // increase clip padding by stroke width to avoid stroke on clip edges
            bounds = new Bounds(bounds.min.subtract(p), bounds.max.add(p));
            this._parts = [];
            if (!this._pxBounds || !this._pxBounds.intersects(bounds)) return;
            if (this.options.noClip) {
                this._parts = this._rings;
                return;
            }
            for(var i = 0, len = this._rings.length, clipped; i < len; i++){
                clipped = clipPolygon(this._rings[i], bounds, true);
                if (clipped.length) this._parts.push(clipped);
            }
        },
        _updatePath: function() {
            this._renderer._updatePoly(this, true);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(p) {
            var inside = false, part, p1, p2, i, j, k, len, len2;
            if (!this._pxBounds || !this._pxBounds.contains(p)) return false;
            // ray casting algorithm for detecting if point is in polygon
            for(i = 0, len = this._parts.length; i < len; i++){
                part = this._parts[i];
                for(j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++){
                    p1 = part[j];
                    p2 = part[k];
                    if (p1.y > p.y !== p2.y > p.y && p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x) inside = !inside;
                }
            }
            // also check if it's on polygon stroke
            return inside || Polyline.prototype._containsPoint.call(this, p, true);
        }
    });
    // @factory L.polygon(latlngs: LatLng[], options?: Polyline options)
    function polygon(latlngs, options) {
        return new Polygon(latlngs, options);
    }
    /*
   * @class GeoJSON
   * @aka L.GeoJSON
   * @inherits FeatureGroup
   *
   * Represents a GeoJSON object or an array of GeoJSON objects. Allows you to parse
   * GeoJSON data and display it on the map. Extends `FeatureGroup`.
   *
   * @example
   *
   * ```js
   * L.geoJSON(data, {
   * 	style: function (feature) {
   * 		return {color: feature.properties.color};
   * 	}
   * }).bindPopup(function (layer) {
   * 	return layer.feature.properties.description;
   * }).addTo(map);
   * ```
   */ var GeoJSON = FeatureGroup.extend({
        /* @section
  	 * @aka GeoJSON options
  	 *
  	 * @option pointToLayer: Function = *
  	 * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
  	 * called when data is added, passing the GeoJSON point feature and its `LatLng`.
  	 * The default is to spawn a default `Marker`:
  	 * ```js
  	 * function(geoJsonPoint, latlng) {
  	 * 	return L.marker(latlng);
  	 * }
  	 * ```
  	 *
  	 * @option style: Function = *
  	 * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
  	 * called internally when data is added.
  	 * The default value is to not override any defaults:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return {}
  	 * }
  	 * ```
  	 *
  	 * @option onEachFeature: Function = *
  	 * A `Function` that will be called once for each created `Feature`, after it has
  	 * been created and styled. Useful for attaching events and popups to features.
  	 * The default is to do nothing with the newly created layers:
  	 * ```js
  	 * function (feature, layer) {}
  	 * ```
  	 *
  	 * @option filter: Function = *
  	 * A `Function` that will be used to decide whether to include a feature or not.
  	 * The default is to include all features:
  	 * ```js
  	 * function (geoJsonFeature) {
  	 * 	return true;
  	 * }
  	 * ```
  	 * Note: dynamically changing the `filter` option will have effect only on newly
  	 * added data. It will _not_ re-evaluate already included features.
  	 *
  	 * @option coordsToLatLng: Function = *
  	 * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
  	 * The default is the `coordsToLatLng` static method.
  	 *
  	 * @option markersInheritOptions: Boolean = false
  	 * Whether default Markers for "Point" type Features inherit from group options.
  	 */ initialize: function(geojson, options) {
            setOptions(this, options);
            this._layers = {};
            if (geojson) this.addData(geojson);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(geojson) {
            var features = isArray(geojson) ? geojson : geojson.features, i, len, feature;
            if (features) {
                for(i = 0, len = features.length; i < len; i++){
                    // only add this if geometry or geometries are set and not null
                    feature = features[i];
                    if (feature.geometries || feature.geometry || feature.features || feature.coordinates) this.addData(feature);
                }
                return this;
            }
            var options = this.options;
            if (options.filter && !options.filter(geojson)) return this;
            var layer = geometryToLayer(geojson, options);
            if (!layer) return this;
            layer.feature = asFeature(geojson);
            layer.defaultOptions = layer.options;
            this.resetStyle(layer);
            if (options.onEachFeature) options.onEachFeature(geojson, layer);
            return this.addLayer(layer);
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(layer) {
            if (layer === undefined) return this.eachLayer(this.resetStyle, this);
            // reset any custom styles
            layer.options = extend({}, layer.defaultOptions);
            this._setLayerStyle(layer, this.options.style);
            return this;
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(style) {
            return this.eachLayer(function(layer) {
                this._setLayerStyle(layer, style);
            }, this);
        },
        _setLayerStyle: function(layer, style) {
            if (layer.setStyle) {
                if (typeof style === "function") style = style(layer.feature);
                layer.setStyle(style);
            }
        }
    });
    // @section
    // There are several static functions which can be called without instantiating L.GeoJSON:
    // @function geometryToLayer(featureData: Object, options?: GeoJSON options): Layer
    // Creates a `Layer` from a given GeoJSON feature. Can use a custom
    // [`pointToLayer`](#geojson-pointtolayer) and/or [`coordsToLatLng`](#geojson-coordstolatlng)
    // functions if provided as options.
    function geometryToLayer(geojson, options) {
        var geometry = geojson.type === "Feature" ? geojson.geometry : geojson, coords = geometry ? geometry.coordinates : null, layers = [], pointToLayer = options && options.pointToLayer, _coordsToLatLng = options && options.coordsToLatLng || coordsToLatLng, latlng, latlngs, i, len;
        if (!coords && !geometry) return null;
        switch(geometry.type){
            case "Point":
                latlng = _coordsToLatLng(coords);
                return _pointToLayer(pointToLayer, geojson, latlng, options);
            case "MultiPoint":
                for(i = 0, len = coords.length; i < len; i++){
                    latlng = _coordsToLatLng(coords[i]);
                    layers.push(_pointToLayer(pointToLayer, geojson, latlng, options));
                }
                return new FeatureGroup(layers);
            case "LineString":
            case "MultiLineString":
                latlngs = coordsToLatLngs(coords, geometry.type === "LineString" ? 0 : 1, _coordsToLatLng);
                return new Polyline(latlngs, options);
            case "Polygon":
            case "MultiPolygon":
                latlngs = coordsToLatLngs(coords, geometry.type === "Polygon" ? 1 : 2, _coordsToLatLng);
                return new Polygon(latlngs, options);
            case "GeometryCollection":
                for(i = 0, len = geometry.geometries.length; i < len; i++){
                    var geoLayer = geometryToLayer({
                        geometry: geometry.geometries[i],
                        type: "Feature",
                        properties: geojson.properties
                    }, options);
                    if (geoLayer) layers.push(geoLayer);
                }
                return new FeatureGroup(layers);
            case "FeatureCollection":
                for(i = 0, len = geometry.features.length; i < len; i++){
                    var featureLayer = geometryToLayer(geometry.features[i], options);
                    if (featureLayer) layers.push(featureLayer);
                }
                return new FeatureGroup(layers);
            default:
                throw new Error("Invalid GeoJSON object.");
        }
    }
    function _pointToLayer(pointToLayerFn, geojson, latlng, options) {
        return pointToLayerFn ? pointToLayerFn(geojson, latlng) : new Marker(latlng, options && options.markersInheritOptions && options);
    }
    // @function coordsToLatLng(coords: Array): LatLng
    // Creates a `LatLng` object from an array of 2 numbers (longitude, latitude)
    // or 3 numbers (longitude, latitude, altitude) used in GeoJSON for points.
    function coordsToLatLng(coords) {
        return new LatLng(coords[1], coords[0], coords[2]);
    }
    // @function coordsToLatLngs(coords: Array, levelsDeep?: Number, coordsToLatLng?: Function): Array
    // Creates a multidimensional array of `LatLng`s from a GeoJSON coordinates array.
    // `levelsDeep` specifies the nesting level (0 is for an array of points, 1 for an array of arrays of points, etc., 0 by default).
    // Can use a custom [`coordsToLatLng`](#geojson-coordstolatlng) function.
    function coordsToLatLngs(coords, levelsDeep, _coordsToLatLng) {
        var latlngs = [];
        for(var i = 0, len = coords.length, latlng; i < len; i++){
            latlng = levelsDeep ? coordsToLatLngs(coords[i], levelsDeep - 1, _coordsToLatLng) : (_coordsToLatLng || coordsToLatLng)(coords[i]);
            latlngs.push(latlng);
        }
        return latlngs;
    }
    // @function latLngToCoords(latlng: LatLng, precision?: Number|false): Array
    // Reverse of [`coordsToLatLng`](#geojson-coordstolatlng)
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
    function latLngToCoords(latlng, precision) {
        latlng = toLatLng(latlng);
        return latlng.alt !== undefined ? [
            formatNum(latlng.lng, precision),
            formatNum(latlng.lat, precision),
            formatNum(latlng.alt, precision)
        ] : [
            formatNum(latlng.lng, precision),
            formatNum(latlng.lat, precision)
        ];
    }
    // @function latLngsToCoords(latlngs: Array, levelsDeep?: Number, closed?: Boolean, precision?: Number|false): Array
    // Reverse of [`coordsToLatLngs`](#geojson-coordstolatlngs)
    // `closed` determines whether the first point should be appended to the end of the array to close the feature, only used when `levelsDeep` is 0. False by default.
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function.
    function latLngsToCoords(latlngs, levelsDeep, closed, precision) {
        var coords = [];
        for(var i = 0, len = latlngs.length; i < len; i++)// Check for flat arrays required to ensure unbalanced arrays are correctly converted in recursion
        coords.push(levelsDeep ? latLngsToCoords(latlngs[i], isFlat(latlngs[i]) ? 0 : levelsDeep - 1, closed, precision) : latLngToCoords(latlngs[i], precision));
        if (!levelsDeep && closed && coords.length > 0) coords.push(coords[0].slice());
        return coords;
    }
    function getFeature(layer, newGeometry) {
        return layer.feature ? extend({}, layer.feature, {
            geometry: newGeometry
        }) : asFeature(newGeometry);
    }
    // @function asFeature(geojson: Object): Object
    // Normalize GeoJSON geometries/features into GeoJSON features.
    function asFeature(geojson) {
        if (geojson.type === "Feature" || geojson.type === "FeatureCollection") return geojson;
        return {
            type: "Feature",
            properties: {},
            geometry: geojson
        };
    }
    var PointToGeoJSON = {
        toGeoJSON: function(precision) {
            return getFeature(this, {
                type: "Point",
                coordinates: latLngToCoords(this.getLatLng(), precision)
            });
        }
    };
    // @namespace Marker
    // @section Other methods
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the marker (as a GeoJSON `Point` Feature).
    Marker.include(PointToGeoJSON);
    // @namespace CircleMarker
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the circle marker (as a GeoJSON `Point` Feature).
    Circle.include(PointToGeoJSON);
    CircleMarker.include(PointToGeoJSON);
    // @namespace Polyline
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polyline (as a GeoJSON `LineString` or `MultiLineString` Feature).
    Polyline.include({
        toGeoJSON: function(precision) {
            var multi = !isFlat(this._latlngs);
            var coords = latLngsToCoords(this._latlngs, multi ? 1 : 0, false, precision);
            return getFeature(this, {
                type: (multi ? "Multi" : "") + "LineString",
                coordinates: coords
            });
        }
    });
    // @namespace Polygon
    // @method toGeoJSON(precision?: Number|false): Object
    // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
    // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the polygon (as a GeoJSON `Polygon` or `MultiPolygon` Feature).
    Polygon.include({
        toGeoJSON: function(precision) {
            var holes = !isFlat(this._latlngs), multi = holes && !isFlat(this._latlngs[0]);
            var coords = latLngsToCoords(this._latlngs, multi ? 2 : holes ? 1 : 0, true, precision);
            if (!holes) coords = [
                coords
            ];
            return getFeature(this, {
                type: (multi ? "Multi" : "") + "Polygon",
                coordinates: coords
            });
        }
    });
    // @namespace LayerGroup
    LayerGroup.include({
        toMultiPoint: function(precision) {
            var coords = [];
            this.eachLayer(function(layer) {
                coords.push(layer.toGeoJSON(precision).geometry.coordinates);
            });
            return getFeature(this, {
                type: "MultiPoint",
                coordinates: coords
            });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(precision) {
            var type = this.feature && this.feature.geometry && this.feature.geometry.type;
            if (type === "MultiPoint") return this.toMultiPoint(precision);
            var isGeometryCollection = type === "GeometryCollection", jsons = [];
            this.eachLayer(function(layer) {
                if (layer.toGeoJSON) {
                    var json = layer.toGeoJSON(precision);
                    if (isGeometryCollection) jsons.push(json.geometry);
                    else {
                        var feature = asFeature(json);
                        // Squash nested feature collections
                        if (feature.type === "FeatureCollection") jsons.push.apply(jsons, feature.features);
                        else jsons.push(feature);
                    }
                }
            });
            if (isGeometryCollection) return getFeature(this, {
                geometries: jsons,
                type: "GeometryCollection"
            });
            return {
                type: "FeatureCollection",
                features: jsons
            };
        }
    });
    // @namespace GeoJSON
    // @factory L.geoJSON(geojson?: Object, options?: GeoJSON options)
    // Creates a GeoJSON layer. Optionally accepts an object in
    // [GeoJSON format](https://tools.ietf.org/html/rfc7946) to display on the map
    // (you can alternatively add it later with `addData` method) and an `options` object.
    function geoJSON(geojson, options) {
        return new GeoJSON(geojson, options);
    }
    // Backward compatibility.
    var geoJson = geoJSON;
    /*
   * @class ImageOverlay
   * @aka L.ImageOverlay
   * @inherits Interactive layer
   *
   * Used to load and display a single image over specific bounds of the map. Extends `Layer`.
   *
   * @example
   *
   * ```js
   * var imageUrl = 'https://maps.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
   * 	imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];
   * L.imageOverlay(imageUrl, imageBounds).addTo(map);
   * ```
   */ var ImageOverlay = Layer.extend({
        // @section
        // @aka ImageOverlay options
        options: {
            // @option opacity: Number = 1.0
            // The opacity of the image overlay.
            opacity: 1,
            // @option alt: String = ''
            // Text for the `alt` attribute of the image (useful for accessibility).
            alt: "",
            // @option interactive: Boolean = false
            // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
            interactive: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the image.
            // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option errorOverlayUrl: String = ''
            // URL to the overlay image to show in place of the overlay that failed to load.
            errorOverlayUrl: "",
            // @option zIndex: Number = 1
            // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
            zIndex: 1,
            // @option className: String = ''
            // A custom class name to assign to the image. Empty by default.
            className: ""
        },
        initialize: function(url, bounds, options) {
            this._url = url;
            this._bounds = toLatLngBounds(bounds);
            setOptions(this, options);
        },
        onAdd: function() {
            if (!this._image) {
                this._initImage();
                if (this.options.opacity < 1) this._updateOpacity();
            }
            if (this.options.interactive) {
                addClass(this._image, "leaflet-interactive");
                this.addInteractiveTarget(this._image);
            }
            this.getPane().appendChild(this._image);
            this._reset();
        },
        onRemove: function() {
            remove(this._image);
            if (this.options.interactive) this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._image) this._updateOpacity();
            return this;
        },
        setStyle: function(styleOpts) {
            if (styleOpts.opacity) this.setOpacity(styleOpts.opacity);
            return this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
            if (this._map) toFront(this._image);
            return this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
            if (this._map) toBack(this._image);
            return this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(url) {
            this._url = url;
            if (this._image) this._image.src = url;
            return this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(bounds) {
            this._bounds = toLatLngBounds(bounds);
            if (this._map) this._reset();
            return this;
        },
        getEvents: function() {
            var events = {
                zoom: this._reset,
                viewreset: this._reset
            };
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(value) {
            this.options.zIndex = value;
            this._updateZIndex();
            return this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
            return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
            return this._image;
        },
        _initImage: function() {
            var wasElementSupplied = this._url.tagName === "IMG";
            var img = this._image = wasElementSupplied ? this._url : create$1("img");
            addClass(img, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(img, "leaflet-zoom-animated");
            if (this.options.className) addClass(img, this.options.className);
            img.onselectstart = falseFn;
            img.onmousemove = falseFn;
            // @event load: Event
            // Fired when the ImageOverlay layer has loaded its image
            img.onload = bind(this.fire, this, "load");
            img.onerror = bind(this._overlayOnError, this, "error");
            if (this.options.crossOrigin || this.options.crossOrigin === "") img.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            if (this.options.zIndex) this._updateZIndex();
            if (wasElementSupplied) {
                this._url = img.src;
                return;
            }
            img.src = this._url;
            img.alt = this.options.alt;
        },
        _animateZoom: function(e) {
            var scale = this._map.getZoomScale(e.zoom), offset = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
            setTransform(this._image, offset, scale);
        },
        _reset: function() {
            var image = this._image, bounds = new Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())), size = bounds.getSize();
            setPosition(image, bounds.min);
            image.style.width = size.x + "px";
            image.style.height = size.y + "px";
        },
        _updateOpacity: function() {
            setOpacity(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
            if (this._image && this.options.zIndex !== undefined && this.options.zIndex !== null) this._image.style.zIndex = this.options.zIndex;
        },
        _overlayOnError: function() {
            // @event error: Event
            // Fired when the ImageOverlay layer fails to load its image
            this.fire("error");
            var errorUrl = this.options.errorOverlayUrl;
            if (errorUrl && this._url !== errorUrl) {
                this._url = errorUrl;
                this._image.src = errorUrl;
            }
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
            return this._bounds.getCenter();
        }
    });
    // @factory L.imageOverlay(imageUrl: String, bounds: LatLngBounds, options?: ImageOverlay options)
    // Instantiates an image overlay object given the URL of the image and the
    // geographical bounds it is tied to.
    var imageOverlay = function(url, bounds, options) {
        return new ImageOverlay(url, bounds, options);
    };
    /*
   * @class VideoOverlay
   * @aka L.VideoOverlay
   * @inherits ImageOverlay
   *
   * Used to load and display a video player over specific bounds of the map. Extends `ImageOverlay`.
   *
   * A video overlay uses the [`<video>`](https://developer.mozilla.org/docs/Web/HTML/Element/video)
   * HTML5 element.
   *
   * @example
   *
   * ```js
   * var videoUrl = 'https://www.mapbox.com/bites/00188/patricia_nasa.webm',
   * 	videoBounds = [[ 32, -130], [ 13, -100]];
   * L.videoOverlay(videoUrl, videoBounds ).addTo(map);
   * ```
   */ var VideoOverlay = ImageOverlay.extend({
        // @section
        // @aka VideoOverlay options
        options: {
            // @option autoplay: Boolean = true
            // Whether the video starts playing automatically when loaded.
            // On some browsers autoplay will only work with `muted: true`
            autoplay: true,
            // @option loop: Boolean = true
            // Whether the video will loop back to the beginning when played.
            loop: true,
            // @option keepAspectRatio: Boolean = true
            // Whether the video will save aspect ratio after the projection.
            // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
            keepAspectRatio: true,
            // @option muted: Boolean = false
            // Whether the video starts on mute when loaded.
            muted: false,
            // @option playsInline: Boolean = true
            // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
            playsInline: true
        },
        _initImage: function() {
            var wasElementSupplied = this._url.tagName === "VIDEO";
            var vid = this._image = wasElementSupplied ? this._url : create$1("video");
            addClass(vid, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(vid, "leaflet-zoom-animated");
            if (this.options.className) addClass(vid, this.options.className);
            vid.onselectstart = falseFn;
            vid.onmousemove = falseFn;
            // @event load: Event
            // Fired when the video has finished loading the first frame
            vid.onloadeddata = bind(this.fire, this, "load");
            if (wasElementSupplied) {
                var sourceElements = vid.getElementsByTagName("source");
                var sources = [];
                for(var j = 0; j < sourceElements.length; j++)sources.push(sourceElements[j].src);
                this._url = sourceElements.length > 0 ? sources : [
                    vid.src
                ];
                return;
            }
            if (!isArray(this._url)) this._url = [
                this._url
            ];
            if (!this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(vid.style, "objectFit")) vid.style["objectFit"] = "fill";
            vid.autoplay = !!this.options.autoplay;
            vid.loop = !!this.options.loop;
            vid.muted = !!this.options.muted;
            vid.playsInline = !!this.options.playsInline;
            for(var i = 0; i < this._url.length; i++){
                var source = create$1("source");
                source.src = this._url[i];
                vid.appendChild(source);
            }
        }
    });
    // @factory L.videoOverlay(video: String|Array|HTMLVideoElement, bounds: LatLngBounds, options?: VideoOverlay options)
    // Instantiates an image overlay object given the URL of the video (or array of URLs, or even a video element) and the
    // geographical bounds it is tied to.
    function videoOverlay(video, bounds, options) {
        return new VideoOverlay(video, bounds, options);
    }
    /*
   * @class SVGOverlay
   * @aka L.SVGOverlay
   * @inherits ImageOverlay
   *
   * Used to load, display and provide DOM access to an SVG file over specific bounds of the map. Extends `ImageOverlay`.
   *
   * An SVG overlay uses the [`<svg>`](https://developer.mozilla.org/docs/Web/SVG/Element/svg) element.
   *
   * @example
   *
   * ```js
   * var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
   * svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
   * svgElement.setAttribute('viewBox', "0 0 200 200");
   * svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
   * var svgElementBounds = [ [ 32, -130 ], [ 13, -100 ] ];
   * L.svgOverlay(svgElement, svgElementBounds).addTo(map);
   * ```
   */ var SVGOverlay = ImageOverlay.extend({
        _initImage: function() {
            var el = this._image = this._url;
            addClass(el, "leaflet-image-layer");
            if (this._zoomAnimated) addClass(el, "leaflet-zoom-animated");
            if (this.options.className) addClass(el, this.options.className);
            el.onselectstart = falseFn;
            el.onmousemove = falseFn;
        }
    });
    // @factory L.svgOverlay(svg: String|SVGElement, bounds: LatLngBounds, options?: SVGOverlay options)
    // Instantiates an image overlay object given an SVG element and the geographical bounds it is tied to.
    // A viewBox attribute is required on the SVG element to zoom in and out properly.
    function svgOverlay(el, bounds, options) {
        return new SVGOverlay(el, bounds, options);
    }
    /*
   * @class DivOverlay
   * @inherits Interactive layer
   * @aka L.DivOverlay
   * Base model for L.Popup and L.Tooltip. Inherit from it for custom overlays like plugins.
   */ // @namespace DivOverlay
    var DivOverlay = Layer.extend({
        // @section
        // @aka DivOverlay options
        options: {
            // @option interactive: Boolean = false
            // If true, the popup/tooltip will listen to the mouse events.
            interactive: false,
            // @option offset: Point = Point(0, 0)
            // The offset of the overlay position.
            offset: [
                0,
                0
            ],
            // @option className: String = ''
            // A custom CSS class name to assign to the overlay.
            className: "",
            // @option pane: String = undefined
            // `Map pane` where the overlay will be added.
            pane: undefined,
            // @option content: String|HTMLElement|Function = ''
            // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
            // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
            content: ""
        },
        initialize: function(options, source) {
            if (options && (options instanceof LatLng || isArray(options))) {
                this._latlng = toLatLng(options);
                setOptions(this, source);
            } else {
                setOptions(this, options);
                this._source = source;
            }
            if (this.options.content) this._content = this.options.content;
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(map) {
            map = arguments.length ? map : this._source._map; // experimental, not the part of public api
            if (!map.hasLayer(this)) map.addLayer(this);
            return this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
            if (this._map) this._map.removeLayer(this);
            return this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(layer) {
            if (this._map) this.close();
            else {
                if (arguments.length) this._source = layer;
                else layer = this._source;
                this._prepareOpen();
                // open the overlay on the map
                this.openOn(layer._map);
            }
            return this;
        },
        onAdd: function(map) {
            this._zoomAnimated = map._zoomAnimated;
            if (!this._container) this._initLayout();
            if (map._fadeAnimated) setOpacity(this._container, 0);
            clearTimeout(this._removeTimeout);
            this.getPane().appendChild(this._container);
            this.update();
            if (map._fadeAnimated) setOpacity(this._container, 1);
            this.bringToFront();
            if (this.options.interactive) {
                addClass(this._container, "leaflet-interactive");
                this.addInteractiveTarget(this._container);
            }
        },
        onRemove: function(map) {
            if (map._fadeAnimated) {
                setOpacity(this._container, 0);
                this._removeTimeout = setTimeout(bind(remove, undefined, this._container), 200);
            } else remove(this._container);
            if (this.options.interactive) {
                removeClass(this._container, "leaflet-interactive");
                this.removeInteractiveTarget(this._container);
            }
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
            return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(latlng) {
            this._latlng = toLatLng(latlng);
            if (this._map) {
                this._updatePosition();
                this._adjustPan();
            }
            return this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
            return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(content) {
            this._content = content;
            this.update();
            return this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
            return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
            if (!this._map) return;
            this._container.style.visibility = "hidden";
            this._updateContent();
            this._updateLayout();
            this._updatePosition();
            this._container.style.visibility = "";
            this._adjustPan();
        },
        getEvents: function() {
            var events = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
            return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
            if (this._map) toFront(this._container);
            return this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
            if (this._map) toBack(this._container);
            return this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(latlng) {
            var source = this._source;
            if (!source._map) return false;
            if (source instanceof FeatureGroup) {
                source = null;
                var layers = this._source._layers;
                for(var id in layers)if (layers[id]._map) {
                    source = layers[id];
                    break;
                }
                if (!source) return false;
                 // Unable to get source layer.
                // set overlay source to this layer
                this._source = source;
            }
            if (!latlng) {
                if (source.getCenter) latlng = source.getCenter();
                else if (source.getLatLng) latlng = source.getLatLng();
                else if (source.getBounds) latlng = source.getBounds().getCenter();
                else throw new Error("Unable to get source layer LatLng.");
            }
            this.setLatLng(latlng);
            if (this._map) // update the overlay (content, layout, etc...)
            this.update();
            return true;
        },
        _updateContent: function() {
            if (!this._content) return;
            var node = this._contentNode;
            var content = typeof this._content === "function" ? this._content(this._source || this) : this._content;
            if (typeof content === "string") node.innerHTML = content;
            else {
                while(node.hasChildNodes())node.removeChild(node.firstChild);
                node.appendChild(content);
            }
            // @namespace DivOverlay
            // @section DivOverlay events
            // @event contentupdate: Event
            // Fired when the content of the overlay is updated
            this.fire("contentupdate");
        },
        _updatePosition: function() {
            if (!this._map) return;
            var pos = this._map.latLngToLayerPoint(this._latlng), offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (this._zoomAnimated) setPosition(this._container, pos.add(anchor));
            else offset = offset.add(pos).add(anchor);
            var bottom = this._containerBottom = -offset.y, left = this._containerLeft = -Math.round(this._containerWidth / 2) + offset.x;
            // bottom position the overlay in case the height of the overlay changes (images loading etc)
            this._container.style.bottom = bottom + "px";
            this._container.style.left = left + "px";
        },
        _getAnchor: function() {
            return [
                0,
                0
            ];
        }
    });
    Map.include({
        _initOverlay: function(OverlayClass, content, latlng, options) {
            var overlay = content;
            if (!(overlay instanceof OverlayClass)) overlay = new OverlayClass(options).setContent(content);
            if (latlng) overlay.setLatLng(latlng);
            return overlay;
        }
    });
    Layer.include({
        _initOverlay: function(OverlayClass, old, content, options) {
            var overlay = content;
            if (overlay instanceof OverlayClass) {
                setOptions(overlay, options);
                overlay._source = this;
            } else {
                overlay = old && !options ? old : new OverlayClass(options, this);
                overlay.setContent(content);
            }
            return overlay;
        }
    });
    /*
   * @class Popup
   * @inherits DivOverlay
   * @aka L.Popup
   * Used to open popups in certain places of the map. Use [Map.openPopup](#map-openpopup) to
   * open popups while making sure that only one popup is open at one time
   * (recommended for usability), or use [Map.addLayer](#map-addlayer) to open as many as you want.
   *
   * @example
   *
   * If you want to just bind a popup to marker click and then open it, it's really easy:
   *
   * ```js
   * marker.bindPopup(popupContent).openPopup();
   * ```
   * Path overlays like polylines also have a `bindPopup` method.
   *
   * A popup can be also standalone:
   *
   * ```js
   * var popup = L.popup()
   * 	.setLatLng(latlng)
   * 	.setContent('<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   * or
   * ```js
   * var popup = L.popup(latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>')
   * 	.openOn(map);
   * ```
   */ // @namespace Popup
    var Popup = DivOverlay.extend({
        // @section
        // @aka Popup options
        options: {
            // @option pane: String = 'popupPane'
            // `Map pane` where the popup will be added.
            pane: "popupPane",
            // @option offset: Point = Point(0, 7)
            // The offset of the popup position.
            offset: [
                0,
                7
            ],
            // @option maxWidth: Number = 300
            // Max width of the popup, in pixels.
            maxWidth: 300,
            // @option minWidth: Number = 50
            // Min width of the popup, in pixels.
            minWidth: 50,
            // @option maxHeight: Number = null
            // If set, creates a scrollable container of the given height
            // inside a popup if its content exceeds it.
            // The scrollable container can be styled using the
            // `leaflet-popup-scrolled` CSS class selector.
            maxHeight: null,
            // @option autoPan: Boolean = true
            // Set it to `false` if you don't want the map to do panning animation
            // to fit the opened popup.
            autoPan: true,
            // @option autoPanPaddingTopLeft: Point = null
            // The margin between the popup and the top left corner of the map
            // view after autopanning was performed.
            autoPanPaddingTopLeft: null,
            // @option autoPanPaddingBottomRight: Point = null
            // The margin between the popup and the bottom right corner of the map
            // view after autopanning was performed.
            autoPanPaddingBottomRight: null,
            // @option autoPanPadding: Point = Point(5, 5)
            // Equivalent of setting both top left and bottom right autopan padding to the same value.
            autoPanPadding: [
                5,
                5
            ],
            // @option keepInView: Boolean = false
            // Set it to `true` if you want to prevent users from panning the popup
            // off of the screen while it is open.
            keepInView: false,
            // @option closeButton: Boolean = true
            // Controls the presence of a close button in the popup.
            closeButton: true,
            // @option autoClose: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the popup closing when another popup is opened.
            autoClose: true,
            // @option closeOnEscapeKey: Boolean = true
            // Set it to `false` if you want to override the default behavior of
            // the ESC key for closing of the popup.
            closeOnEscapeKey: true,
            // @option closeOnClick: Boolean = *
            // Set it if you want to override the default behavior of the popup closing when user clicks
            // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
            // @option className: String = ''
            // A custom CSS class name to assign to the popup.
            className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(map) {
            map = arguments.length ? map : this._source._map; // experimental, not the part of public api
            if (!map.hasLayer(this) && map._popup && map._popup.options.autoClose) map.removeLayer(map._popup);
            map._popup = this;
            return DivOverlay.prototype.openOn.call(this, map);
        },
        onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            // @namespace Map
            // @section Popup events
            // @event popupopen: PopupEvent
            // Fired when a popup is opened in the map
            map.fire("popupopen", {
                popup: this
            });
            if (this._source) {
                // @namespace Layer
                // @section Popup events
                // @event popupopen: PopupEvent
                // Fired when a popup bound to this layer is opened
                this._source.fire("popupopen", {
                    popup: this
                }, true);
                // For non-path layers, we toggle the popup when clicking
                // again the layer, so prevent the map to reopen it.
                if (!(this._source instanceof Path)) this._source.on("preclick", stopPropagation);
            }
        },
        onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            // @namespace Map
            // @section Popup events
            // @event popupclose: PopupEvent
            // Fired when a popup in the map is closed
            map.fire("popupclose", {
                popup: this
            });
            if (this._source) {
                // @namespace Layer
                // @section Popup events
                // @event popupclose: PopupEvent
                // Fired when a popup bound to this layer is closed
                this._source.fire("popupclose", {
                    popup: this
                }, true);
                if (!(this._source instanceof Path)) this._source.off("preclick", stopPropagation);
            }
        },
        getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (this.options.closeOnClick !== undefined ? this.options.closeOnClick : this._map.options.closePopupOnClick) events.preclick = this.close;
            if (this.options.keepInView) events.moveend = this._adjustPan;
            return events;
        },
        _initLayout: function() {
            var prefix = "leaflet-popup", container = this._container = create$1("div", prefix + " " + (this.options.className || "") + " leaflet-zoom-animated");
            var wrapper = this._wrapper = create$1("div", prefix + "-content-wrapper", container);
            this._contentNode = create$1("div", prefix + "-content", wrapper);
            disableClickPropagation(container);
            disableScrollPropagation(this._contentNode);
            on(container, "contextmenu", stopPropagation);
            this._tipContainer = create$1("div", prefix + "-tip-container", container);
            this._tip = create$1("div", prefix + "-tip", this._tipContainer);
            if (this.options.closeButton) {
                var closeButton = this._closeButton = create$1("a", prefix + "-close-button", container);
                closeButton.setAttribute("role", "button"); // overrides the implicit role=link of <a> elements #7399
                closeButton.setAttribute("aria-label", "Close popup");
                closeButton.href = "#close";
                closeButton.innerHTML = '<span aria-hidden="true">&#215;</span>';
                on(closeButton, "click", function(ev) {
                    preventDefault(ev);
                    this.close();
                }, this);
            }
        },
        _updateLayout: function() {
            var container = this._contentNode, style = container.style;
            style.width = "";
            style.whiteSpace = "nowrap";
            var width = container.offsetWidth;
            width = Math.min(width, this.options.maxWidth);
            width = Math.max(width, this.options.minWidth);
            style.width = width + 1 + "px";
            style.whiteSpace = "";
            style.height = "";
            var height = container.offsetHeight, maxHeight = this.options.maxHeight, scrolledClass = "leaflet-popup-scrolled";
            if (maxHeight && height > maxHeight) {
                style.height = maxHeight + "px";
                addClass(container, scrolledClass);
            } else removeClass(container, scrolledClass);
            this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), anchor = this._getAnchor();
            setPosition(this._container, pos.add(anchor));
        },
        _adjustPan: function() {
            if (!this.options.autoPan) return;
            if (this._map._panAnim) this._map._panAnim.stop();
            // We can endlessly recurse if keepInView is set and the view resets.
            // Let's guard against that by exiting early if we're responding to our own autopan.
            if (this._autopanning) {
                this._autopanning = false;
                return;
            }
            var map = this._map, marginBottom = parseInt(getStyle(this._container, "marginBottom"), 10) || 0, containerHeight = this._container.offsetHeight + marginBottom, containerWidth = this._containerWidth, layerPos = new Point(this._containerLeft, -containerHeight - this._containerBottom);
            layerPos._add(getPosition(this._container));
            var containerPos = map.layerPointToContainerPoint(layerPos), padding = toPoint(this.options.autoPanPadding), paddingTL = toPoint(this.options.autoPanPaddingTopLeft || padding), paddingBR = toPoint(this.options.autoPanPaddingBottomRight || padding), size = map.getSize(), dx = 0, dy = 0;
            if (containerPos.x + containerWidth + paddingBR.x > size.x) dx = containerPos.x + containerWidth - size.x + paddingBR.x;
            if (containerPos.x - dx - paddingTL.x < 0) dx = containerPos.x - paddingTL.x;
            if (containerPos.y + containerHeight + paddingBR.y > size.y) dy = containerPos.y + containerHeight - size.y + paddingBR.y;
            if (containerPos.y - dy - paddingTL.y < 0) dy = containerPos.y - paddingTL.y;
            // @namespace Map
            // @section Popup events
            // @event autopanstart: Event
            // Fired when the map starts autopanning when opening a popup.
            if (dx || dy) {
                // Track that we're autopanning, as this function will be re-ran on moveend
                if (this.options.keepInView) this._autopanning = true;
                map.fire("autopanstart").panBy([
                    dx,
                    dy
                ]);
            }
        },
        _getAnchor: function() {
            // Where should we anchor the popup on the source layer?
            return toPoint(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [
                0,
                0
            ]);
        }
    });
    // @namespace Popup
    // @factory L.popup(options?: Popup options, source?: Layer)
    // Instantiates a `Popup` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the popup with a reference to the Layer to which it refers.
    // @alternative
    // @factory L.popup(latlng: LatLng, options?: Popup options)
    // Instantiates a `Popup` object given `latlng` where the popup will open and an optional `options` object that describes its appearance and location.
    var popup = function(options, source) {
        return new Popup(options, source);
    };
    /* @namespace Map
   * @section Interaction Options
   * @option closePopupOnClick: Boolean = true
   * Set it to `false` if you don't want popups to close when user clicks the map.
   */ Map.mergeOptions({
        closePopupOnClick: true
    });
    // @namespace Map
    // @section Methods for Layers and Controls
    Map.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(popup, latlng, options) {
            this._initOverlay(Popup, popup, latlng, options).openOn(this);
            return this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(popup) {
            popup = arguments.length ? popup : this._popup;
            if (popup) popup.close();
            return this;
        }
    });
    /*
   * @namespace Layer
   * @section Popup methods example
   *
   * All layers share a set of methods convenient for binding popups to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindPopup('Hi There!').addTo(map);
   * layer.openPopup();
   * layer.closePopup();
   * ```
   *
   * Popups will also be automatically opened when the layer is clicked on and closed when the layer is removed from the map or another popup is opened.
   */ // @section Popup methods
    Layer.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(content, options) {
            this._popup = this._initOverlay(Popup, this._popup, content, options);
            if (!this._popupHandlersAdded) {
                this.on({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                });
                this._popupHandlersAdded = true;
            }
            return this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
            if (this._popup) {
                this.off({
                    click: this._openPopup,
                    keypress: this._onKeyPress,
                    remove: this.closePopup,
                    move: this._movePopup
                });
                this._popupHandlersAdded = false;
                this._popup = null;
            }
            return this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(latlng) {
            if (this._popup) {
                if (!(this instanceof FeatureGroup)) this._popup._source = this;
                if (this._popup._prepareOpen(latlng || this._latlng)) // open the popup on the map
                this._popup.openOn(this._map);
            }
            return this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
            if (this._popup) this._popup.close();
            return this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
            if (this._popup) this._popup.toggle(this);
            return this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
            return this._popup ? this._popup.isOpen() : false;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(content) {
            if (this._popup) this._popup.setContent(content);
            return this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
            return this._popup;
        },
        _openPopup: function(e) {
            if (!this._popup || !this._map) return;
            // prevent map click
            stop(e);
            var target = e.layer || e.target;
            if (this._popup._source === target && !(target instanceof Path)) {
                // treat it like a marker and figure out
                // if we should toggle it open/closed
                if (this._map.hasLayer(this._popup)) this.closePopup();
                else this.openPopup(e.latlng);
                return;
            }
            this._popup._source = target;
            this.openPopup(e.latlng);
        },
        _movePopup: function(e) {
            this._popup.setLatLng(e.latlng);
        },
        _onKeyPress: function(e) {
            if (e.originalEvent.keyCode === 13) this._openPopup(e);
        }
    });
    /*
   * @class Tooltip
   * @inherits DivOverlay
   * @aka L.Tooltip
   * Used to display small texts on top of map layers.
   *
   * @example
   * If you want to just bind a tooltip to marker:
   *
   * ```js
   * marker.bindTooltip("my tooltip text").openTooltip();
   * ```
   * Path overlays like polylines also have a `bindTooltip` method.
   *
   * A tooltip can be also standalone:
   *
   * ```js
   * var tooltip = L.tooltip()
   * 	.setLatLng(latlng)
   * 	.setContent('Hello world!<br />This is a nice tooltip.')
   * 	.addTo(map);
   * ```
   * or
   * ```js
   * var tooltip = L.tooltip(latlng, {content: 'Hello world!<br />This is a nice tooltip.'})
   * 	.addTo(map);
   * ```
   *
   *
   * Note about tooltip offset. Leaflet takes two options in consideration
   * for computing tooltip offsetting:
   * - the `offset` Tooltip option: it defaults to [0, 0], and it's specific to one tooltip.
   *   Add a positive x offset to move the tooltip to the right, and a positive y offset to
   *   move it to the bottom. Negatives will move to the left and top.
   * - the `tooltipAnchor` Icon option: this will only be considered for Marker. You
   *   should adapt this value if you use a custom icon.
   */ // @namespace Tooltip
    var Tooltip = DivOverlay.extend({
        // @section
        // @aka Tooltip options
        options: {
            // @option pane: String = 'tooltipPane'
            // `Map pane` where the tooltip will be added.
            pane: "tooltipPane",
            // @option offset: Point = Point(0, 0)
            // Optional offset of the tooltip position.
            offset: [
                0,
                0
            ],
            // @option direction: String = 'auto'
            // Direction where to open the tooltip. Possible values are: `right`, `left`,
            // `top`, `bottom`, `center`, `auto`.
            // `auto` will dynamically switch between `right` and `left` according to the tooltip
            // position on the map.
            direction: "auto",
            // @option permanent: Boolean = false
            // Whether to open the tooltip permanently or only on mouseover.
            permanent: false,
            // @option sticky: Boolean = false
            // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
            sticky: false,
            // @option opacity: Number = 0.9
            // Tooltip container opacity.
            opacity: 0.9
        },
        onAdd: function(map) {
            DivOverlay.prototype.onAdd.call(this, map);
            this.setOpacity(this.options.opacity);
            // @namespace Map
            // @section Tooltip events
            // @event tooltipopen: TooltipEvent
            // Fired when a tooltip is opened in the map.
            map.fire("tooltipopen", {
                tooltip: this
            });
            if (this._source) {
                this.addEventParent(this._source);
                // @namespace Layer
                // @section Tooltip events
                // @event tooltipopen: TooltipEvent
                // Fired when a tooltip bound to this layer is opened.
                this._source.fire("tooltipopen", {
                    tooltip: this
                }, true);
            }
        },
        onRemove: function(map) {
            DivOverlay.prototype.onRemove.call(this, map);
            // @namespace Map
            // @section Tooltip events
            // @event tooltipclose: TooltipEvent
            // Fired when a tooltip in the map is closed.
            map.fire("tooltipclose", {
                tooltip: this
            });
            if (this._source) {
                this.removeEventParent(this._source);
                // @namespace Layer
                // @section Tooltip events
                // @event tooltipclose: TooltipEvent
                // Fired when a tooltip bound to this layer is closed.
                this._source.fire("tooltipclose", {
                    tooltip: this
                }, true);
            }
        },
        getEvents: function() {
            var events = DivOverlay.prototype.getEvents.call(this);
            if (!this.options.permanent) events.preclick = this.close;
            return events;
        },
        _initLayout: function() {
            var prefix = "leaflet-tooltip", className = prefix + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = create$1("div", className);
            this._container.setAttribute("role", "tooltip");
            this._container.setAttribute("id", "leaflet-tooltip-" + stamp(this));
        },
        _updateLayout: function() {},
        _adjustPan: function() {},
        _setPosition: function(pos) {
            var subX, subY, map = this._map, container = this._container, centerPoint = map.latLngToContainerPoint(map.getCenter()), tooltipPoint = map.layerPointToContainerPoint(pos), direction = this.options.direction, tooltipWidth = container.offsetWidth, tooltipHeight = container.offsetHeight, offset = toPoint(this.options.offset), anchor = this._getAnchor();
            if (direction === "top") {
                subX = tooltipWidth / 2;
                subY = tooltipHeight;
            } else if (direction === "bottom") {
                subX = tooltipWidth / 2;
                subY = 0;
            } else if (direction === "center") {
                subX = tooltipWidth / 2;
                subY = tooltipHeight / 2;
            } else if (direction === "right") {
                subX = 0;
                subY = tooltipHeight / 2;
            } else if (direction === "left") {
                subX = tooltipWidth;
                subY = tooltipHeight / 2;
            } else if (tooltipPoint.x < centerPoint.x) {
                direction = "right";
                subX = 0;
                subY = tooltipHeight / 2;
            } else {
                direction = "left";
                subX = tooltipWidth + (offset.x + anchor.x) * 2;
                subY = tooltipHeight / 2;
            }
            pos = pos.subtract(toPoint(subX, subY, true)).add(offset).add(anchor);
            removeClass(container, "leaflet-tooltip-right");
            removeClass(container, "leaflet-tooltip-left");
            removeClass(container, "leaflet-tooltip-top");
            removeClass(container, "leaflet-tooltip-bottom");
            addClass(container, "leaflet-tooltip-" + direction);
            setPosition(container, pos);
        },
        _updatePosition: function() {
            var pos = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(pos);
        },
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            if (this._container) setOpacity(this._container, opacity);
        },
        _animateZoom: function(e) {
            var pos = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
            this._setPosition(pos);
        },
        _getAnchor: function() {
            // Where should we anchor the tooltip on the source layer?
            return toPoint(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [
                0,
                0
            ]);
        }
    });
    // @namespace Tooltip
    // @factory L.tooltip(options?: Tooltip options, source?: Layer)
    // Instantiates a `Tooltip` object given an optional `options` object that describes its appearance and location and an optional `source` object that is used to tag the tooltip with a reference to the Layer to which it refers.
    // @alternative
    // @factory L.tooltip(latlng: LatLng, options?: Tooltip options)
    // Instantiates a `Tooltip` object given `latlng` where the tooltip will open and an optional `options` object that describes its appearance and location.
    var tooltip = function(options, source) {
        return new Tooltip(options, source);
    };
    // @namespace Map
    // @section Methods for Layers and Controls
    Map.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(tooltip, latlng, options) {
            this._initOverlay(Tooltip, tooltip, latlng, options).openOn(this);
            return this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(tooltip) {
            tooltip.close();
            return this;
        }
    });
    /*
   * @namespace Layer
   * @section Tooltip methods example
   *
   * All layers share a set of methods convenient for binding tooltips to it.
   *
   * ```js
   * var layer = L.Polygon(latlngs).bindTooltip('Hi There!').addTo(map);
   * layer.openTooltip();
   * layer.closeTooltip();
   * ```
   */ // @section Tooltip methods
    Layer.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(content, options) {
            if (this._tooltip && this.isTooltipOpen()) this.unbindTooltip();
            this._tooltip = this._initOverlay(Tooltip, this._tooltip, content, options);
            this._initTooltipInteractions();
            if (this._tooltip.options.permanent && this._map && this._map.hasLayer(this)) this.openTooltip();
            return this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
            if (this._tooltip) {
                this._initTooltipInteractions(true);
                this.closeTooltip();
                this._tooltip = null;
            }
            return this;
        },
        _initTooltipInteractions: function(remove) {
            if (!remove && this._tooltipHandlersAdded) return;
            var onOff = remove ? "off" : "on", events = {
                remove: this.closeTooltip,
                move: this._moveTooltip
            };
            if (!this._tooltip.options.permanent) {
                events.mouseover = this._openTooltip;
                events.mouseout = this.closeTooltip;
                events.click = this._openTooltip;
                if (this._map) this._addFocusListeners();
                else events.add = this._addFocusListeners;
            } else events.add = this._openTooltip;
            if (this._tooltip.options.sticky) events.mousemove = this._moveTooltip;
            this[onOff](events);
            this._tooltipHandlersAdded = !remove;
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(latlng) {
            if (this._tooltip) {
                if (!(this instanceof FeatureGroup)) this._tooltip._source = this;
                if (this._tooltip._prepareOpen(latlng)) {
                    // open the tooltip on the map
                    this._tooltip.openOn(this._map);
                    if (this.getElement) this._setAriaDescribedByOnLayer(this);
                    else if (this.eachLayer) this.eachLayer(this._setAriaDescribedByOnLayer, this);
                }
            }
            return this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
            if (this._tooltip) return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
            if (this._tooltip) this._tooltip.toggle(this);
            return this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
            return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(content) {
            if (this._tooltip) this._tooltip.setContent(content);
            return this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
            return this._tooltip;
        },
        _addFocusListeners: function() {
            if (this.getElement) this._addFocusListenersOnLayer(this);
            else if (this.eachLayer) this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) {
                on(el, "focus", function() {
                    this._tooltip._source = layer;
                    this.openTooltip();
                }, this);
                on(el, "blur", this.closeTooltip, this);
            }
        },
        _setAriaDescribedByOnLayer: function(layer) {
            var el = typeof layer.getElement === "function" && layer.getElement();
            if (el) el.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(e) {
            if (!this._tooltip || !this._map) return;
            // If the map is moving, we will show the tooltip after it's done.
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
                this._openOnceFlag = true;
                var that = this;
                this._map.once("moveend", function() {
                    that._openOnceFlag = false;
                    that._openTooltip(e);
                });
                return;
            }
            this._tooltip._source = e.layer || e.target;
            this.openTooltip(this._tooltip.options.sticky ? e.latlng : undefined);
        },
        _moveTooltip: function(e) {
            var latlng = e.latlng, containerPoint, layerPoint;
            if (this._tooltip.options.sticky && e.originalEvent) {
                containerPoint = this._map.mouseEventToContainerPoint(e.originalEvent);
                layerPoint = this._map.containerPointToLayerPoint(containerPoint);
                latlng = this._map.layerPointToLatLng(layerPoint);
            }
            this._tooltip.setLatLng(latlng);
        }
    });
    /*
   * @class DivIcon
   * @aka L.DivIcon
   * @inherits Icon
   *
   * Represents a lightweight icon for markers that uses a simple `<div>`
   * element instead of an image. Inherits from `Icon` but ignores the `iconUrl` and shadow options.
   *
   * @example
   * ```js
   * var myIcon = L.divIcon({className: 'my-div-icon'});
   * // you can set .my-div-icon styles in CSS
   *
   * L.marker([50.505, 30.57], {icon: myIcon}).addTo(map);
   * ```
   *
   * By default, it has a 'leaflet-div-icon' CSS class and is styled as a little white square with a shadow.
   */ var DivIcon = Icon.extend({
        options: {
            // @section
            // @aka DivIcon options
            iconSize: [
                12,
                12
            ],
            // iconAnchor: (Point),
            // popupAnchor: (Point),
            // @option html: String|HTMLElement = ''
            // Custom HTML code to put inside the div element, empty by default. Alternatively,
            // an instance of `HTMLElement`.
            html: false,
            // @option bgPos: Point = [0, 0]
            // Optional relative position of the background, in pixels
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function(oldIcon) {
            var div = oldIcon && oldIcon.tagName === "DIV" ? oldIcon : document.createElement("div"), options = this.options;
            if (options.html instanceof Element) {
                empty(div);
                div.appendChild(options.html);
            } else div.innerHTML = options.html !== false ? options.html : "";
            if (options.bgPos) {
                var bgPos = toPoint(options.bgPos);
                div.style.backgroundPosition = -bgPos.x + "px " + -bgPos.y + "px";
            }
            this._setIconStyles(div, "icon");
            return div;
        },
        createShadow: function() {
            return null;
        }
    });
    // @factory L.divIcon(options: DivIcon options)
    // Creates a `DivIcon` instance with the given options.
    function divIcon(options) {
        return new DivIcon(options);
    }
    Icon.Default = IconDefault;
    /*
   * @class GridLayer
   * @inherits Layer
   * @aka L.GridLayer
   *
   * Generic class for handling a tiled grid of HTML elements. This is the base class for all tile layers and replaces `TileLayer.Canvas`.
   * GridLayer can be extended to create a tiled grid of HTML elements like `<canvas>`, `<img>` or `<div>`. GridLayer will handle creating and animating these DOM elements for you.
   *
   *
   * @section Synchronous usage
   * @example
   *
   * To create a custom layer, extend GridLayer and implement the `createTile()` method, which will be passed a `Point` object with the `x`, `y`, and `z` (zoom level) coordinates to draw your tile.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords){
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // get a canvas context and draw something on it using coords.x, coords.y and coords.z
   *         var ctx = tile.getContext('2d');
   *
   *         // return the tile so it can be rendered on screen
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section Asynchronous usage
   * @example
   *
   * Tile creation can also be asynchronous, this is useful when using a third-party drawing library. Once the tile is finished drawing it can be passed to the `done()` callback.
   *
   * ```js
   * var CanvasLayer = L.GridLayer.extend({
   *     createTile: function(coords, done){
   *         var error;
   *
   *         // create a <canvas> element for drawing
   *         var tile = L.DomUtil.create('canvas', 'leaflet-tile');
   *
   *         // setup tile width and height according to the options
   *         var size = this.getTileSize();
   *         tile.width = size.x;
   *         tile.height = size.y;
   *
   *         // draw something asynchronously and pass the tile to the done() callback
   *         setTimeout(function() {
   *             done(error, tile);
   *         }, 1000);
   *
   *         return tile;
   *     }
   * });
   * ```
   *
   * @section
   */ var GridLayer = Layer.extend({
        // @section
        // @aka GridLayer options
        options: {
            // @option tileSize: Number|Point = 256
            // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
            tileSize: 256,
            // @option opacity: Number = 1.0
            // Opacity of the tiles. Can be used in the `createTile()` function.
            opacity: 1,
            // @option updateWhenIdle: Boolean = (depends)
            // Load new tiles only when panning ends.
            // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
            // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
            // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
            updateWhenIdle: Browser.mobile,
            // @option updateWhenZooming: Boolean = true
            // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
            updateWhenZooming: true,
            // @option updateInterval: Number = 200
            // Tiles will not update more than once every `updateInterval` milliseconds when panning.
            updateInterval: 200,
            // @option zIndex: Number = 1
            // The explicit zIndex of the tile layer.
            zIndex: 1,
            // @option bounds: LatLngBounds = undefined
            // If set, tiles will only be loaded inside the set `LatLngBounds`.
            bounds: null,
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = undefined
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: undefined,
            // @option maxNativeZoom: Number = undefined
            // Maximum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
            // from `maxNativeZoom` level and auto-scaled.
            maxNativeZoom: undefined,
            // @option minNativeZoom: Number = undefined
            // Minimum zoom number the tile source has available. If it is specified,
            // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
            // from `minNativeZoom` level and auto-scaled.
            minNativeZoom: undefined,
            // @option noWrap: Boolean = false
            // Whether the layer is wrapped around the antimeridian. If `true`, the
            // GridLayer will only be displayed once at low zoom levels. Has no
            // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
            // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
            // tiles outside the CRS limits.
            noWrap: false,
            // @option pane: String = 'tilePane'
            // `Map pane` where the grid layer will be added.
            pane: "tilePane",
            // @option className: String = ''
            // A custom class name to assign to the tile layer. Empty by default.
            className: "",
            // @option keepBuffer: Number = 2
            // When panning the map, keep this many rows and columns of tiles before unloading them.
            keepBuffer: 2
        },
        initialize: function(options) {
            setOptions(this, options);
        },
        onAdd: function() {
            this._initContainer();
            this._levels = {};
            this._tiles = {};
            this._resetView(); // implicit _update() call
        },
        beforeAdd: function(map) {
            map._addZoomLimit(this);
        },
        onRemove: function(map) {
            this._removeAllTiles();
            remove(this._container);
            map._removeZoomLimit(this);
            this._container = null;
            this._tileZoom = undefined;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
            if (this._map) {
                toFront(this._container);
                this._setAutoZIndex(Math.max);
            }
            return this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
            if (this._map) {
                toBack(this._container);
                this._setAutoZIndex(Math.min);
            }
            return this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
            return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(opacity) {
            this.options.opacity = opacity;
            this._updateOpacity();
            return this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(zIndex) {
            this.options.zIndex = zIndex;
            this._updateZIndex();
            return this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
            return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
            if (this._map) {
                this._removeAllTiles();
                var tileZoom = this._clampZoom(this._map.getZoom());
                if (tileZoom !== this._tileZoom) {
                    this._tileZoom = tileZoom;
                    this._updateLevels();
                }
                this._update();
            }
            return this;
        },
        getEvents: function() {
            var events = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            if (!this.options.updateWhenIdle) {
                // update tiles on move, but not more often than once per given interval
                if (!this._onMove) this._onMove = throttle(this._onMoveEnd, this.options.updateInterval, this);
                events.move = this._onMove;
            }
            if (this._zoomAnimated) events.zoomanim = this._animateZoom;
            return events;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
            return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
            var s = this.options.tileSize;
            return s instanceof Point ? s : new Point(s, s);
        },
        _updateZIndex: function() {
            if (this._container && this.options.zIndex !== undefined && this.options.zIndex !== null) this._container.style.zIndex = this.options.zIndex;
        },
        _setAutoZIndex: function(compare) {
            // go through all other layers of the same pane, set zIndex to max + 1 (front) or min - 1 (back)
            var layers = this.getPane().children, edgeZIndex = -compare(-Infinity, Infinity); // -Infinity for max, Infinity for min
            for(var i = 0, len = layers.length, zIndex; i < len; i++){
                zIndex = layers[i].style.zIndex;
                if (layers[i] !== this._container && zIndex) edgeZIndex = compare(edgeZIndex, +zIndex);
            }
            if (isFinite(edgeZIndex)) {
                this.options.zIndex = edgeZIndex + compare(-1, 1);
                this._updateZIndex();
            }
        },
        _updateOpacity: function() {
            if (!this._map) return;
            // IE doesn't inherit filter opacity properly, so we're forced to set it on tiles
            if (Browser.ielt9) return;
            setOpacity(this._container, this.options.opacity);
            var now = +new Date(), nextFrame = false, willPrune = false;
            for(var key in this._tiles){
                var tile = this._tiles[key];
                if (!tile.current || !tile.loaded) continue;
                var fade = Math.min(1, (now - tile.loaded) / 200);
                setOpacity(tile.el, fade);
                if (fade < 1) nextFrame = true;
                else {
                    if (tile.active) willPrune = true;
                    else this._onOpaqueTile(tile);
                    tile.active = true;
                }
            }
            if (willPrune && !this._noPrune) this._pruneTiles();
            if (nextFrame) {
                cancelAnimFrame(this._fadeFrame);
                this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            }
        },
        _onOpaqueTile: falseFn,
        _initContainer: function() {
            if (this._container) return;
            this._container = create$1("div", "leaflet-layer " + (this.options.className || ""));
            this._updateZIndex();
            if (this.options.opacity < 1) this._updateOpacity();
            this.getPane().appendChild(this._container);
        },
        _updateLevels: function() {
            var zoom = this._tileZoom, maxZoom = this.options.maxZoom;
            if (zoom === undefined) return undefined;
            for(var z in this._levels){
                z = Number(z);
                if (this._levels[z].el.children.length || z === zoom) {
                    this._levels[z].el.style.zIndex = maxZoom - Math.abs(zoom - z);
                    this._onUpdateLevel(z);
                } else {
                    remove(this._levels[z].el);
                    this._removeTilesAtZoom(z);
                    this._onRemoveLevel(z);
                    delete this._levels[z];
                }
            }
            var level = this._levels[zoom], map = this._map;
            if (!level) {
                level = this._levels[zoom] = {};
                level.el = create$1("div", "leaflet-tile-container leaflet-zoom-animated", this._container);
                level.el.style.zIndex = maxZoom;
                level.origin = map.project(map.unproject(map.getPixelOrigin()), zoom).round();
                level.zoom = zoom;
                this._setZoomTransform(level, map.getCenter(), map.getZoom());
                // force the browser to consider the newly added element for transition
                falseFn(level.el.offsetWidth);
                this._onCreateLevel(level);
            }
            this._level = level;
            return level;
        },
        _onUpdateLevel: falseFn,
        _onRemoveLevel: falseFn,
        _onCreateLevel: falseFn,
        _pruneTiles: function() {
            if (!this._map) return;
            var key, tile;
            var zoom = this._map.getZoom();
            if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
                this._removeAllTiles();
                return;
            }
            for(key in this._tiles){
                tile = this._tiles[key];
                tile.retain = tile.current;
            }
            for(key in this._tiles){
                tile = this._tiles[key];
                if (tile.current && !tile.active) {
                    var coords = tile.coords;
                    if (!this._retainParent(coords.x, coords.y, coords.z, coords.z - 5)) this._retainChildren(coords.x, coords.y, coords.z, coords.z + 2);
                }
            }
            for(key in this._tiles)if (!this._tiles[key].retain) this._removeTile(key);
        },
        _removeTilesAtZoom: function(zoom) {
            for(var key in this._tiles){
                if (this._tiles[key].coords.z !== zoom) continue;
                this._removeTile(key);
            }
        },
        _removeAllTiles: function() {
            for(var key in this._tiles)this._removeTile(key);
        },
        _invalidateAll: function() {
            for(var z in this._levels){
                remove(this._levels[z].el);
                this._onRemoveLevel(Number(z));
                delete this._levels[z];
            }
            this._removeAllTiles();
            this._tileZoom = undefined;
        },
        _retainParent: function(x, y, z, minZoom) {
            var x2 = Math.floor(x / 2), y2 = Math.floor(y / 2), z2 = z - 1, coords2 = new Point(+x2, +y2);
            coords2.z = +z2;
            var key = this._tileCoordsToKey(coords2), tile = this._tiles[key];
            if (tile && tile.active) {
                tile.retain = true;
                return true;
            } else if (tile && tile.loaded) tile.retain = true;
            if (z2 > minZoom) return this._retainParent(x2, y2, z2, minZoom);
            return false;
        },
        _retainChildren: function(x, y, z, maxZoom) {
            for(var i = 2 * x; i < 2 * x + 2; i++)for(var j = 2 * y; j < 2 * y + 2; j++){
                var coords = new Point(i, j);
                coords.z = z + 1;
                var key = this._tileCoordsToKey(coords), tile = this._tiles[key];
                if (tile && tile.active) {
                    tile.retain = true;
                    continue;
                } else if (tile && tile.loaded) tile.retain = true;
                if (z + 1 < maxZoom) this._retainChildren(i, j, z + 1, maxZoom);
            }
        },
        _resetView: function(e) {
            var animating = e && (e.pinch || e.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), animating, animating);
        },
        _animateZoom: function(e) {
            this._setView(e.center, e.zoom, true, e.noUpdate);
        },
        _clampZoom: function(zoom) {
            var options = this.options;
            if (undefined !== options.minNativeZoom && zoom < options.minNativeZoom) return options.minNativeZoom;
            if (undefined !== options.maxNativeZoom && options.maxNativeZoom < zoom) return options.maxNativeZoom;
            return zoom;
        },
        _setView: function(center, zoom, noPrune, noUpdate) {
            var tileZoom = Math.round(zoom);
            if (this.options.maxZoom !== undefined && tileZoom > this.options.maxZoom || this.options.minZoom !== undefined && tileZoom < this.options.minZoom) tileZoom = undefined;
            else tileZoom = this._clampZoom(tileZoom);
            var tileZoomChanged = this.options.updateWhenZooming && tileZoom !== this._tileZoom;
            if (!noUpdate || tileZoomChanged) {
                this._tileZoom = tileZoom;
                if (this._abortLoading) this._abortLoading();
                this._updateLevels();
                this._resetGrid();
                if (tileZoom !== undefined) this._update(center);
                if (!noPrune) this._pruneTiles();
                // Flag to prevent _updateOpacity from pruning tiles during
                // a zoom anim or a pinch gesture
                this._noPrune = !!noPrune;
            }
            this._setZoomTransforms(center, zoom);
        },
        _setZoomTransforms: function(center, zoom) {
            for(var i in this._levels)this._setZoomTransform(this._levels[i], center, zoom);
        },
        _setZoomTransform: function(level, center, zoom) {
            var scale = this._map.getZoomScale(zoom, level.zoom), translate = level.origin.multiplyBy(scale).subtract(this._map._getNewPixelOrigin(center, zoom)).round();
            if (Browser.any3d) setTransform(level.el, translate, scale);
            else setPosition(level.el, translate);
        },
        _resetGrid: function() {
            var map = this._map, crs = map.options.crs, tileSize = this._tileSize = this.getTileSize(), tileZoom = this._tileZoom;
            var bounds = this._map.getPixelWorldBounds(this._tileZoom);
            if (bounds) this._globalTileRange = this._pxBoundsToTileRange(bounds);
            this._wrapX = crs.wrapLng && !this.options.noWrap && [
                Math.floor(map.project([
                    0,
                    crs.wrapLng[0]
                ], tileZoom).x / tileSize.x),
                Math.ceil(map.project([
                    0,
                    crs.wrapLng[1]
                ], tileZoom).x / tileSize.y)
            ];
            this._wrapY = crs.wrapLat && !this.options.noWrap && [
                Math.floor(map.project([
                    crs.wrapLat[0],
                    0
                ], tileZoom).y / tileSize.x),
                Math.ceil(map.project([
                    crs.wrapLat[1],
                    0
                ], tileZoom).y / tileSize.y)
            ];
        },
        _onMoveEnd: function() {
            if (!this._map || this._map._animatingZoom) return;
            this._update();
        },
        _getTiledPixelBounds: function(center) {
            var map = this._map, mapZoom = map._animatingZoom ? Math.max(map._animateToZoom, map.getZoom()) : map.getZoom(), scale = map.getZoomScale(mapZoom, this._tileZoom), pixelCenter = map.project(center, this._tileZoom).floor(), halfSize = map.getSize().divideBy(scale * 2);
            return new Bounds(pixelCenter.subtract(halfSize), pixelCenter.add(halfSize));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(center) {
            var map = this._map;
            if (!map) return;
            var zoom = this._clampZoom(map.getZoom());
            if (center === undefined) center = map.getCenter();
            if (this._tileZoom === undefined) return;
             // if out of minzoom/maxzoom
            var pixelBounds = this._getTiledPixelBounds(center), tileRange = this._pxBoundsToTileRange(pixelBounds), tileCenter = tileRange.getCenter(), queue = [], margin = this.options.keepBuffer, noPruneRange = new Bounds(tileRange.getBottomLeft().subtract([
                margin,
                -margin
            ]), tileRange.getTopRight().add([
                margin,
                -margin
            ]));
            // Sanity check: panic if the tile range contains Infinity somewhere.
            if (!(isFinite(tileRange.min.x) && isFinite(tileRange.min.y) && isFinite(tileRange.max.x) && isFinite(tileRange.max.y))) throw new Error("Attempted to load an infinite number of tiles");
            for(var key in this._tiles){
                var c = this._tiles[key].coords;
                if (c.z !== this._tileZoom || !noPruneRange.contains(new Point(c.x, c.y))) this._tiles[key].current = false;
            }
            // _update just loads more tiles. If the tile zoom level differs too much
            // from the map's, let _setView reset levels and prune old tiles.
            if (Math.abs(zoom - this._tileZoom) > 1) {
                this._setView(center, zoom);
                return;
            }
            // create a queue of coordinates to load tiles from
            for(var j = tileRange.min.y; j <= tileRange.max.y; j++)for(var i = tileRange.min.x; i <= tileRange.max.x; i++){
                var coords = new Point(i, j);
                coords.z = this._tileZoom;
                if (!this._isValidTile(coords)) continue;
                var tile = this._tiles[this._tileCoordsToKey(coords)];
                if (tile) tile.current = true;
                else queue.push(coords);
            }
            // sort tile queue to load tiles in order of their distance to center
            queue.sort(function(a, b) {
                return a.distanceTo(tileCenter) - b.distanceTo(tileCenter);
            });
            if (queue.length !== 0) {
                // if it's the first batch of tiles to load
                if (!this._loading) {
                    this._loading = true;
                    // @event loading: Event
                    // Fired when the grid layer starts loading tiles.
                    this.fire("loading");
                }
                // create DOM fragment to append tiles in one batch
                var fragment = document.createDocumentFragment();
                for(i = 0; i < queue.length; i++)this._addTile(queue[i], fragment);
                this._level.el.appendChild(fragment);
            }
        },
        _isValidTile: function(coords) {
            var crs = this._map.options.crs;
            if (!crs.infinite) {
                // don't load tile if it's out of bounds and not wrapped
                var bounds = this._globalTileRange;
                if (!crs.wrapLng && (coords.x < bounds.min.x || coords.x > bounds.max.x) || !crs.wrapLat && (coords.y < bounds.min.y || coords.y > bounds.max.y)) return false;
            }
            if (!this.options.bounds) return true;
            // don't load tile if it doesn't intersect the bounds in options
            var tileBounds = this._tileCoordsToBounds(coords);
            return toLatLngBounds(this.options.bounds).overlaps(tileBounds);
        },
        _keyToBounds: function(key) {
            return this._tileCoordsToBounds(this._keyToTileCoords(key));
        },
        _tileCoordsToNwSe: function(coords) {
            var map = this._map, tileSize = this.getTileSize(), nwPoint = coords.scaleBy(tileSize), sePoint = nwPoint.add(tileSize), nw = map.unproject(nwPoint, coords.z), se = map.unproject(sePoint, coords.z);
            return [
                nw,
                se
            ];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(coords) {
            var bp = this._tileCoordsToNwSe(coords), bounds = new LatLngBounds(bp[0], bp[1]);
            if (!this.options.noWrap) bounds = this._map.wrapLatLngBounds(bounds);
            return bounds;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(coords) {
            return coords.x + ":" + coords.y + ":" + coords.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(key) {
            var k = key.split(":"), coords = new Point(+k[0], +k[1]);
            coords.z = +k[2];
            return coords;
        },
        _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) return;
            remove(tile.el);
            delete this._tiles[key];
            // @event tileunload: TileEvent
            // Fired when a tile is removed (e.g. when a tile goes off the screen).
            this.fire("tileunload", {
                tile: tile.el,
                coords: this._keyToTileCoords(key)
            });
        },
        _initTile: function(tile) {
            addClass(tile, "leaflet-tile");
            var tileSize = this.getTileSize();
            tile.style.width = tileSize.x + "px";
            tile.style.height = tileSize.y + "px";
            tile.onselectstart = falseFn;
            tile.onmousemove = falseFn;
            // update opacity on tiles in IE7-8 because of filter inheritance problems
            if (Browser.ielt9 && this.options.opacity < 1) setOpacity(tile, this.options.opacity);
        },
        _addTile: function(coords, container) {
            var tilePos = this._getTilePos(coords), key = this._tileCoordsToKey(coords);
            var tile = this.createTile(this._wrapCoords(coords), bind(this._tileReady, this, coords));
            this._initTile(tile);
            // if createTile is defined with a second argument ("done" callback),
            // we know that tile is async and will be ready later; otherwise
            if (this.createTile.length < 2) // mark tile as ready, but delay one frame for opacity animation to happen
            requestAnimFrame(bind(this._tileReady, this, coords, null, tile));
            setPosition(tile, tilePos);
            // save tile in cache
            this._tiles[key] = {
                el: tile,
                coords: coords,
                current: true
            };
            container.appendChild(tile);
            // @event tileloadstart: TileEvent
            // Fired when a tile is requested and starts loading.
            this.fire("tileloadstart", {
                tile: tile,
                coords: coords
            });
        },
        _tileReady: function(coords, err, tile) {
            if (err) // @event tileerror: TileErrorEvent
            // Fired when there is an error loading a tile.
            this.fire("tileerror", {
                error: err,
                tile: tile,
                coords: coords
            });
            var key = this._tileCoordsToKey(coords);
            tile = this._tiles[key];
            if (!tile) return;
            tile.loaded = +new Date();
            if (this._map._fadeAnimated) {
                setOpacity(tile.el, 0);
                cancelAnimFrame(this._fadeFrame);
                this._fadeFrame = requestAnimFrame(this._updateOpacity, this);
            } else {
                tile.active = true;
                this._pruneTiles();
            }
            if (!err) {
                addClass(tile.el, "leaflet-tile-loaded");
                // @event tileload: TileEvent
                // Fired when a tile loads.
                this.fire("tileload", {
                    tile: tile.el,
                    coords: coords
                });
            }
            if (this._noTilesToLoad()) {
                this._loading = false;
                // @event load: Event
                // Fired when the grid layer loaded all visible tiles.
                this.fire("load");
                if (Browser.ielt9 || !this._map._fadeAnimated) requestAnimFrame(this._pruneTiles, this);
                else // Wait a bit more than 0.2 secs (the duration of the tile fade-in)
                // to trigger a pruning.
                setTimeout(bind(this._pruneTiles, this), 250);
            }
        },
        _getTilePos: function(coords) {
            return coords.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(coords) {
            var newCoords = new Point(this._wrapX ? wrapNum(coords.x, this._wrapX) : coords.x, this._wrapY ? wrapNum(coords.y, this._wrapY) : coords.y);
            newCoords.z = coords.z;
            return newCoords;
        },
        _pxBoundsToTileRange: function(bounds) {
            var tileSize = this.getTileSize();
            return new Bounds(bounds.min.unscaleBy(tileSize).floor(), bounds.max.unscaleBy(tileSize).ceil().subtract([
                1,
                1
            ]));
        },
        _noTilesToLoad: function() {
            for(var key in this._tiles){
                if (!this._tiles[key].loaded) return false;
            }
            return true;
        }
    });
    // @factory L.gridLayer(options?: GridLayer options)
    // Creates a new instance of GridLayer with the supplied options.
    function gridLayer(options) {
        return new GridLayer(options);
    }
    /*
   * @class TileLayer
   * @inherits GridLayer
   * @aka L.TileLayer
   * Used to load and display tile layers on the map. Note that most tile servers require attribution, which you can set under `Layer`. Extends `GridLayer`.
   *
   * @example
   *
   * ```js
   * L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
   * ```
   *
   * @section URL template
   * @example
   *
   * A string of the following form:
   *
   * ```
   * 'https://{s}.somedomain.com/blabla/{z}/{x}/{y}{r}.png'
   * ```
   *
   * `{s}` means one of the available subdomains (used sequentially to help with browser parallel requests per domain limitation; subdomain values are specified in options; `a`, `b` or `c` by default, can be omitted), `{z}` — zoom level, `{x}` and `{y}` — tile coordinates. `{r}` can be used to add "&commat;2x" to the URL to load retina tiles.
   *
   * You can use custom keys in the template, which will be [evaluated](#util-template) from TileLayer options, like this:
   *
   * ```
   * L.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', {foo: 'bar'});
   * ```
   */ var TileLayer = GridLayer.extend({
        // @section
        // @aka TileLayer options
        options: {
            // @option minZoom: Number = 0
            // The minimum zoom level down to which this layer will be displayed (inclusive).
            minZoom: 0,
            // @option maxZoom: Number = 18
            // The maximum zoom level up to which this layer will be displayed (inclusive).
            maxZoom: 18,
            // @option subdomains: String|String[] = 'abc'
            // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
            subdomains: "abc",
            // @option errorTileUrl: String = ''
            // URL to the tile image to show in place of the tile that failed to load.
            errorTileUrl: "",
            // @option zoomOffset: Number = 0
            // The zoom number used in tile URLs will be offset with this value.
            zoomOffset: 0,
            // @option tms: Boolean = false
            // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
            tms: false,
            // @option zoomReverse: Boolean = false
            // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
            zoomReverse: false,
            // @option detectRetina: Boolean = false
            // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
            detectRetina: false,
            // @option crossOrigin: Boolean|String = false
            // Whether the crossOrigin attribute will be added to the tiles.
            // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
            // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
            crossOrigin: false,
            // @option referrerPolicy: Boolean|String = false
            // Whether the referrerPolicy attribute will be added to the tiles.
            // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
            // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
            // (e.g. to validate an API token).
            // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
            referrerPolicy: false
        },
        initialize: function(url, options) {
            this._url = url;
            options = setOptions(this, options);
            // detecting retina displays, adjusting tileSize and zoom levels
            if (options.detectRetina && Browser.retina && options.maxZoom > 0) {
                options.tileSize = Math.floor(options.tileSize / 2);
                if (!options.zoomReverse) {
                    options.zoomOffset++;
                    options.maxZoom = Math.max(options.minZoom, options.maxZoom - 1);
                } else {
                    options.zoomOffset--;
                    options.minZoom = Math.min(options.maxZoom, options.minZoom + 1);
                }
                options.minZoom = Math.max(0, options.minZoom);
            } else if (!options.zoomReverse) // make sure maxZoom is gte minZoom
            options.maxZoom = Math.max(options.minZoom, options.maxZoom);
            else // make sure minZoom is lte maxZoom
            options.minZoom = Math.min(options.maxZoom, options.minZoom);
            if (typeof options.subdomains === "string") options.subdomains = options.subdomains.split("");
            this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(url, noRedraw) {
            if (this._url === url && noRedraw === undefined) noRedraw = true;
            this._url = url;
            if (!noRedraw) this.redraw();
            return this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(coords, done) {
            var tile = document.createElement("img");
            on(tile, "load", bind(this._tileOnLoad, this, done, tile));
            on(tile, "error", bind(this._tileOnError, this, done, tile));
            if (this.options.crossOrigin || this.options.crossOrigin === "") tile.crossOrigin = this.options.crossOrigin === true ? "" : this.options.crossOrigin;
            // for this new option we follow the documented behavior
            // more closely by only setting the property when string
            if (typeof this.options.referrerPolicy === "string") tile.referrerPolicy = this.options.referrerPolicy;
            // The alt attribute is set to the empty string,
            // allowing screen readers to ignore the decorative image tiles.
            // https://www.w3.org/WAI/tutorials/images/decorative/
            // https://www.w3.org/TR/html-aria/#el-img-empty-alt
            tile.alt = "";
            tile.src = this.getTileUrl(coords);
            return tile;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(coords) {
            var data = {
                r: Browser.retina ? "@2x" : "",
                s: this._getSubdomain(coords),
                x: coords.x,
                y: coords.y,
                z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
                var invertedY = this._globalTileRange.max.y - coords.y;
                if (this.options.tms) data["y"] = invertedY;
                data["-y"] = invertedY;
            }
            return template(this._url, extend(data, this.options));
        },
        _tileOnLoad: function(done, tile) {
            // For https://github.com/Leaflet/Leaflet/issues/3332
            if (Browser.ielt9) setTimeout(bind(done, this, null, tile), 0);
            else done(null, tile);
        },
        _tileOnError: function(done, tile, e) {
            var errorUrl = this.options.errorTileUrl;
            if (errorUrl && tile.getAttribute("src") !== errorUrl) tile.src = errorUrl;
            done(e, tile);
        },
        _onTileRemove: function(e) {
            e.tile.onload = null;
        },
        _getZoomForUrl: function() {
            var zoom = this._tileZoom, maxZoom = this.options.maxZoom, zoomReverse = this.options.zoomReverse, zoomOffset = this.options.zoomOffset;
            if (zoomReverse) zoom = maxZoom - zoom;
            return zoom + zoomOffset;
        },
        _getSubdomain: function(tilePoint) {
            var index = Math.abs(tilePoint.x + tilePoint.y) % this.options.subdomains.length;
            return this.options.subdomains[index];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
            var i, tile;
            for(i in this._tiles)if (this._tiles[i].coords.z !== this._tileZoom) {
                tile = this._tiles[i].el;
                tile.onload = falseFn;
                tile.onerror = falseFn;
                if (!tile.complete) {
                    tile.src = emptyImageUrl;
                    var coords = this._tiles[i].coords;
                    remove(tile);
                    delete this._tiles[i];
                    // @event tileabort: TileEvent
                    // Fired when a tile was loading but is now not wanted.
                    this.fire("tileabort", {
                        tile: tile,
                        coords: coords
                    });
                }
            }
        },
        _removeTile: function(key) {
            var tile = this._tiles[key];
            if (!tile) return;
            // Cancels any pending http requests associated with the tile
            tile.el.setAttribute("src", emptyImageUrl);
            return GridLayer.prototype._removeTile.call(this, key);
        },
        _tileReady: function(coords, err, tile) {
            if (!this._map || tile && tile.getAttribute("src") === emptyImageUrl) return;
            return GridLayer.prototype._tileReady.call(this, coords, err, tile);
        }
    });
    // @factory L.tilelayer(urlTemplate: String, options?: TileLayer options)
    // Instantiates a tile layer object given a `URL template` and optionally an options object.
    function tileLayer(url, options) {
        return new TileLayer(url, options);
    }
    /*
   * @class TileLayer.WMS
   * @inherits TileLayer
   * @aka L.TileLayer.WMS
   * Used to display [WMS](https://en.wikipedia.org/wiki/Web_Map_Service) services as tile layers on the map. Extends `TileLayer`.
   *
   * @example
   *
   * ```js
   * var nexrad = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
   * 	layers: 'nexrad-n0r-900913',
   * 	format: 'image/png',
   * 	transparent: true,
   * 	attribution: "Weather data © 2012 IEM Nexrad"
   * });
   * ```
   */ var TileLayerWMS = TileLayer.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            // @option layers: String = ''
            // **(required)** Comma-separated list of WMS layers to show.
            layers: "",
            // @option styles: String = ''
            // Comma-separated list of WMS styles.
            styles: "",
            // @option format: String = 'image/jpeg'
            // WMS image format (use `'image/png'` for layers with transparency).
            format: "image/jpeg",
            // @option transparent: Boolean = false
            // If `true`, the WMS service will return images with transparency.
            transparent: false,
            // @option version: String = '1.1.1'
            // Version of the WMS service to use
            version: "1.1.1"
        },
        options: {
            // @option crs: CRS = null
            // Coordinate Reference System to use for the WMS requests, defaults to
            // map CRS. Don't change this if you're not sure what it means.
            crs: null,
            // @option uppercase: Boolean = false
            // If `true`, WMS request parameter keys will be uppercase.
            uppercase: false
        },
        initialize: function(url, options) {
            this._url = url;
            var wmsParams = extend({}, this.defaultWmsParams);
            // all keys that are not TileLayer options go to WMS params
            for(var i in options)if (!(i in this.options)) wmsParams[i] = options[i];
            options = setOptions(this, options);
            var realRetina = options.detectRetina && Browser.retina ? 2 : 1;
            var tileSize = this.getTileSize();
            wmsParams.width = tileSize.x * realRetina;
            wmsParams.height = tileSize.y * realRetina;
            this.wmsParams = wmsParams;
        },
        onAdd: function(map) {
            this._crs = this.options.crs || map.options.crs;
            this._wmsVersion = parseFloat(this.wmsParams.version);
            var projectionKey = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[projectionKey] = this._crs.code;
            TileLayer.prototype.onAdd.call(this, map);
        },
        getTileUrl: function(coords) {
            var tileBounds = this._tileCoordsToNwSe(coords), crs = this._crs, bounds = toBounds(crs.project(tileBounds[0]), crs.project(tileBounds[1])), min = bounds.min, max = bounds.max, bbox = (this._wmsVersion >= 1.3 && this._crs === EPSG4326 ? [
                min.y,
                min.x,
                max.y,
                max.x
            ] : [
                min.x,
                min.y,
                max.x,
                max.y
            ]).join(","), url = TileLayer.prototype.getTileUrl.call(this, coords);
            return url + getParamString(this.wmsParams, url, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + bbox;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(params, noRedraw) {
            extend(this.wmsParams, params);
            if (!noRedraw) this.redraw();
            return this;
        }
    });
    // @factory L.tileLayer.wms(baseUrl: String, options: TileLayer.WMS options)
    // Instantiates a WMS tile layer object given a base URL of the WMS service and a WMS parameters/options object.
    function tileLayerWMS(url, options) {
        return new TileLayerWMS(url, options);
    }
    TileLayer.WMS = TileLayerWMS;
    tileLayer.wms = tileLayerWMS;
    /*
   * @class Renderer
   * @inherits Layer
   * @aka L.Renderer
   *
   * Base class for vector renderer implementations (`SVG`, `Canvas`). Handles the
   * DOM container of the renderer, its bounds, and its zoom animation.
   *
   * A `Renderer` works as an implicit layer group for all `Path`s - the renderer
   * itself can be added or removed to the map. All paths use a renderer, which can
   * be implicit (the map will decide the type of renderer and use it automatically)
   * or explicit (using the [`renderer`](#path-renderer) option of the path).
   *
   * Do not use this class directly, use `SVG` and `Canvas` instead.
   *
   * @event update: Event
   * Fired when the renderer updates its bounds, center and zoom, for example when
   * its map has moved
   */ var Renderer = Layer.extend({
        // @section
        // @aka Renderer options
        options: {
            // @option padding: Number = 0.1
            // How much to extend the clip area around the map view (relative to its size)
            // e.g. 0.1 would be 10% of map view in each direction
            padding: 0.1
        },
        initialize: function(options) {
            setOptions(this, options);
            stamp(this);
            this._layers = this._layers || {};
        },
        onAdd: function() {
            if (!this._container) {
                this._initContainer(); // defined by renderer implementations
                // always keep transform-origin as 0 0
                addClass(this._container, "leaflet-zoom-animated");
            }
            this.getPane().appendChild(this._container);
            this._update();
            this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
            this.off("update", this._updatePaths, this);
            this._destroyContainer();
        },
        getEvents: function() {
            var events = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            if (this._zoomAnimated) events.zoomanim = this._onAnimZoom;
            return events;
        },
        _onAnimZoom: function(ev) {
            this._updateTransform(ev.center, ev.zoom);
        },
        _onZoom: function() {
            this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(center, zoom) {
            var scale = this._map.getZoomScale(zoom, this._zoom), viewHalf = this._map.getSize().multiplyBy(0.5 + this.options.padding), currentCenterPoint = this._map.project(this._center, zoom), topLeftOffset = viewHalf.multiplyBy(-scale).add(currentCenterPoint).subtract(this._map._getNewPixelOrigin(center, zoom));
            if (Browser.any3d) setTransform(this._container, topLeftOffset, scale);
            else setPosition(this._container, topLeftOffset);
        },
        _reset: function() {
            this._update();
            this._updateTransform(this._center, this._zoom);
            for(var id in this._layers)this._layers[id]._reset();
        },
        _onZoomEnd: function() {
            for(var id in this._layers)this._layers[id]._project();
        },
        _updatePaths: function() {
            for(var id in this._layers)this._layers[id]._update();
        },
        _update: function() {
            // Update pixel bounds of renderer container (for positioning/sizing/clipping later)
            // Subclasses are responsible of firing the 'update' event.
            var p = this.options.padding, size = this._map.getSize(), min = this._map.containerPointToLayerPoint(size.multiplyBy(-p)).round();
            this._bounds = new Bounds(min, min.add(size.multiplyBy(1 + p * 2)).round());
            this._center = this._map.getCenter();
            this._zoom = this._map.getZoom();
        }
    });
    /*
   * @class Canvas
   * @inherits Renderer
   * @aka L.Canvas
   *
   * Allows vector layers to be displayed with [`<canvas>`](https://developer.mozilla.org/docs/Web/API/Canvas_API).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](https://caniuse.com/canvas), Canvas is not
   * available in all web browsers, notably IE8, and overlapping geometries might
   * not display properly in some edge cases.
   *
   * @example
   *
   * Use Canvas by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.canvas()
   * });
   * ```
   *
   * Use a Canvas renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.canvas({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */ var Canvas = Renderer.extend({
        // @section
        // @aka Canvas options
        options: {
            // @option tolerance: Number = 0
            // How much to extend the click tolerance around a path/object on the map.
            tolerance: 0
        },
        getEvents: function() {
            var events = Renderer.prototype.getEvents.call(this);
            events.viewprereset = this._onViewPreReset;
            return events;
        },
        _onViewPreReset: function() {
            // Set a flag so that a viewprereset+moveend+viewreset only updates&redraws once
            this._postponeUpdatePaths = true;
        },
        onAdd: function() {
            Renderer.prototype.onAdd.call(this);
            // Redraw vectors since canvas is cleared upon removal,
            // in case of removing the renderer itself from the map.
            this._draw();
        },
        _initContainer: function() {
            var container = this._container = document.createElement("canvas");
            on(container, "mousemove", this._onMouseMove, this);
            on(container, "click dblclick mousedown mouseup contextmenu", this._onClick, this);
            on(container, "mouseout", this._handleMouseOut, this);
            container["_leaflet_disable_events"] = true;
            this._ctx = container.getContext("2d");
        },
        _destroyContainer: function() {
            cancelAnimFrame(this._redrawRequest);
            delete this._ctx;
            remove(this._container);
            off(this._container);
            delete this._container;
        },
        _updatePaths: function() {
            if (this._postponeUpdatePaths) return;
            var layer;
            this._redrawBounds = null;
            for(var id in this._layers){
                layer = this._layers[id];
                layer._update();
            }
            this._redraw();
        },
        _update: function() {
            if (this._map._animatingZoom && this._bounds) return;
            Renderer.prototype._update.call(this);
            var b = this._bounds, container = this._container, size = b.getSize(), m = Browser.retina ? 2 : 1;
            setPosition(container, b.min);
            // set canvas size (also clearing it); use double size on retina
            container.width = m * size.x;
            container.height = m * size.y;
            container.style.width = size.x + "px";
            container.style.height = size.y + "px";
            if (Browser.retina) this._ctx.scale(2, 2);
            // translate so we use the same path coordinates after canvas element moves
            this._ctx.translate(-b.min.x, -b.min.y);
            // Tell paths to redraw themselves
            this.fire("update");
        },
        _reset: function() {
            Renderer.prototype._reset.call(this);
            if (this._postponeUpdatePaths) {
                this._postponeUpdatePaths = false;
                this._updatePaths();
            }
        },
        _initPath: function(layer) {
            this._updateDashArray(layer);
            this._layers[stamp(layer)] = layer;
            var order = layer._order = {
                layer: layer,
                prev: this._drawLast,
                next: null
            };
            if (this._drawLast) this._drawLast.next = order;
            this._drawLast = order;
            this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(layer) {
            this._requestRedraw(layer);
        },
        _removePath: function(layer) {
            var order = layer._order;
            var next = order.next;
            var prev = order.prev;
            if (next) next.prev = prev;
            else this._drawLast = prev;
            if (prev) prev.next = next;
            else this._drawFirst = next;
            delete layer._order;
            delete this._layers[stamp(layer)];
            this._requestRedraw(layer);
        },
        _updatePath: function(layer) {
            // Redraw the union of the layer's old pixel
            // bounds and the new pixel bounds.
            this._extendRedrawBounds(layer);
            layer._project();
            layer._update();
            // The redraw will extend the redraw bounds
            // with the new pixel bounds.
            this._requestRedraw(layer);
        },
        _updateStyle: function(layer) {
            this._updateDashArray(layer);
            this._requestRedraw(layer);
        },
        _updateDashArray: function(layer) {
            if (typeof layer.options.dashArray === "string") {
                var parts = layer.options.dashArray.split(/[, ]+/), dashArray = [], dashValue, i;
                for(i = 0; i < parts.length; i++){
                    dashValue = Number(parts[i]);
                    // Ignore dash array containing invalid lengths
                    if (isNaN(dashValue)) return;
                    dashArray.push(dashValue);
                }
                layer.options._dashArray = dashArray;
            } else layer.options._dashArray = layer.options.dashArray;
        },
        _requestRedraw: function(layer) {
            if (!this._map) return;
            this._extendRedrawBounds(layer);
            this._redrawRequest = this._redrawRequest || requestAnimFrame(this._redraw, this);
        },
        _extendRedrawBounds: function(layer) {
            if (layer._pxBounds) {
                var padding = (layer.options.weight || 0) + 1;
                this._redrawBounds = this._redrawBounds || new Bounds();
                this._redrawBounds.extend(layer._pxBounds.min.subtract([
                    padding,
                    padding
                ]));
                this._redrawBounds.extend(layer._pxBounds.max.add([
                    padding,
                    padding
                ]));
            }
        },
        _redraw: function() {
            this._redrawRequest = null;
            if (this._redrawBounds) {
                this._redrawBounds.min._floor();
                this._redrawBounds.max._ceil();
            }
            this._clear(); // clear layers in redraw bounds
            this._draw(); // draw layers
            this._redrawBounds = null;
        },
        _clear: function() {
            var bounds = this._redrawBounds;
            if (bounds) {
                var size = bounds.getSize();
                this._ctx.clearRect(bounds.min.x, bounds.min.y, size.x, size.y);
            } else {
                this._ctx.save();
                this._ctx.setTransform(1, 0, 0, 1, 0, 0);
                this._ctx.clearRect(0, 0, this._container.width, this._container.height);
                this._ctx.restore();
            }
        },
        _draw: function() {
            var layer, bounds = this._redrawBounds;
            this._ctx.save();
            if (bounds) {
                var size = bounds.getSize();
                this._ctx.beginPath();
                this._ctx.rect(bounds.min.x, bounds.min.y, size.x, size.y);
                this._ctx.clip();
            }
            this._drawing = true;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (!bounds || layer._pxBounds && layer._pxBounds.intersects(bounds)) layer._updatePath();
            }
            this._drawing = false;
            this._ctx.restore(); // Restore state before clipping.
        },
        _updatePoly: function(layer, closed) {
            if (!this._drawing) return;
            var i, j, len2, p, parts = layer._parts, len = parts.length, ctx = this._ctx;
            if (!len) return;
            ctx.beginPath();
            for(i = 0; i < len; i++){
                for(j = 0, len2 = parts[i].length; j < len2; j++){
                    p = parts[i][j];
                    ctx[j ? "lineTo" : "moveTo"](p.x, p.y);
                }
                if (closed) ctx.closePath();
            }
            this._fillStroke(ctx, layer);
        // TODO optimization: 1 fill/stroke for all features with equal style instead of 1 for each feature
        },
        _updateCircle: function(layer) {
            if (!this._drawing || layer._empty()) return;
            var p = layer._point, ctx = this._ctx, r = Math.max(Math.round(layer._radius), 1), s = (Math.max(Math.round(layer._radiusY), 1) || r) / r;
            if (s !== 1) {
                ctx.save();
                ctx.scale(1, s);
            }
            ctx.beginPath();
            ctx.arc(p.x, p.y / s, r, 0, Math.PI * 2, false);
            if (s !== 1) ctx.restore();
            this._fillStroke(ctx, layer);
        },
        _fillStroke: function(ctx, layer) {
            var options = layer.options;
            if (options.fill) {
                ctx.globalAlpha = options.fillOpacity;
                ctx.fillStyle = options.fillColor || options.color;
                ctx.fill(options.fillRule || "evenodd");
            }
            if (options.stroke && options.weight !== 0) {
                if (ctx.setLineDash) ctx.setLineDash(layer.options && layer.options._dashArray || []);
                ctx.globalAlpha = options.opacity;
                ctx.lineWidth = options.weight;
                ctx.strokeStyle = options.color;
                ctx.lineCap = options.lineCap;
                ctx.lineJoin = options.lineJoin;
                ctx.stroke();
            }
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(e) {
            var point = this._map.mouseEventToLayerPoint(e), layer, clickedLayer;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (layer.options.interactive && layer._containsPoint(point)) {
                    if (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(layer)) clickedLayer = layer;
                }
            }
            this._fireEvent(clickedLayer ? [
                clickedLayer
            ] : false, e);
        },
        _onMouseMove: function(e) {
            if (!this._map || this._map.dragging.moving() || this._map._animatingZoom) return;
            var point = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, point);
        },
        _handleMouseOut: function(e) {
            var layer = this._hoveredLayer;
            if (layer) {
                // if we're leaving the layer, fire mouseout
                removeClass(this._container, "leaflet-interactive");
                this._fireEvent([
                    layer
                ], e, "mouseout");
                this._hoveredLayer = null;
                this._mouseHoverThrottled = false;
            }
        },
        _handleMouseHover: function(e, point) {
            if (this._mouseHoverThrottled) return;
            var layer, candidateHoveredLayer;
            for(var order = this._drawFirst; order; order = order.next){
                layer = order.layer;
                if (layer.options.interactive && layer._containsPoint(point)) candidateHoveredLayer = layer;
            }
            if (candidateHoveredLayer !== this._hoveredLayer) {
                this._handleMouseOut(e);
                if (candidateHoveredLayer) {
                    addClass(this._container, "leaflet-interactive"); // change cursor
                    this._fireEvent([
                        candidateHoveredLayer
                    ], e, "mouseover");
                    this._hoveredLayer = candidateHoveredLayer;
                }
            }
            this._fireEvent(this._hoveredLayer ? [
                this._hoveredLayer
            ] : false, e);
            this._mouseHoverThrottled = true;
            setTimeout(bind(function() {
                this._mouseHoverThrottled = false;
            }, this), 32);
        },
        _fireEvent: function(layers, e, type) {
            this._map._fireDOMEvent(e, type || e.type, layers);
        },
        _bringToFront: function(layer) {
            var order = layer._order;
            if (!order) return;
            var next = order.next;
            var prev = order.prev;
            if (next) next.prev = prev;
            else // Already last
            return;
            if (prev) prev.next = next;
            else if (next) // Update first entry unless this is the
            // single entry
            this._drawFirst = next;
            order.prev = this._drawLast;
            this._drawLast.next = order;
            order.next = null;
            this._drawLast = order;
            this._requestRedraw(layer);
        },
        _bringToBack: function(layer) {
            var order = layer._order;
            if (!order) return;
            var next = order.next;
            var prev = order.prev;
            if (prev) prev.next = next;
            else // Already first
            return;
            if (next) next.prev = prev;
            else if (prev) // Update last entry unless this is the
            // single entry
            this._drawLast = prev;
            order.prev = null;
            order.next = this._drawFirst;
            this._drawFirst.prev = order;
            this._drawFirst = order;
            this._requestRedraw(layer);
        }
    });
    // @factory L.canvas(options?: Renderer options)
    // Creates a Canvas renderer with the given options.
    function canvas(options) {
        return Browser.canvas ? new Canvas(options) : null;
    }
    /*
   * Thanks to Dmitry Baranovsky and his Raphael library for inspiration!
   */ var vmlCreate = function() {
        try {
            document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml");
            return function(name) {
                return document.createElement("<lvml:" + name + ' class="lvml">');
            };
        } catch (e) {
        // Do not return fn from catch block so `e` can be garbage collected
        // See https://github.com/Leaflet/Leaflet/pull/7279
        }
        return function(name) {
            return document.createElement("<" + name + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
    }();
    /*
   * @class SVG
   *
   *
   * VML was deprecated in 2012, which means VML functionality exists only for backwards compatibility
   * with old versions of Internet Explorer.
   */ // mixin to redefine some SVG methods to handle VML syntax which is similar but with some differences
    var vmlMixin = {
        _initContainer: function() {
            this._container = create$1("div", "leaflet-vml-container");
        },
        _update: function() {
            if (this._map._animatingZoom) return;
            Renderer.prototype._update.call(this);
            this.fire("update");
        },
        _initPath: function(layer) {
            var container = layer._container = vmlCreate("shape");
            addClass(container, "leaflet-vml-shape " + (this.options.className || ""));
            container.coordsize = "1 1";
            layer._path = vmlCreate("path");
            container.appendChild(layer._path);
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
        },
        _addPath: function(layer) {
            var container = layer._container;
            this._container.appendChild(container);
            if (layer.options.interactive) layer.addInteractiveTarget(container);
        },
        _removePath: function(layer) {
            var container = layer._container;
            remove(container);
            layer.removeInteractiveTarget(container);
            delete this._layers[stamp(layer)];
        },
        _updateStyle: function(layer) {
            var stroke = layer._stroke, fill = layer._fill, options = layer.options, container = layer._container;
            container.stroked = !!options.stroke;
            container.filled = !!options.fill;
            if (options.stroke) {
                if (!stroke) stroke = layer._stroke = vmlCreate("stroke");
                container.appendChild(stroke);
                stroke.weight = options.weight + "px";
                stroke.color = options.color;
                stroke.opacity = options.opacity;
                if (options.dashArray) stroke.dashStyle = isArray(options.dashArray) ? options.dashArray.join(" ") : options.dashArray.replace(/( *, *)/g, " ");
                else stroke.dashStyle = "";
                stroke.endcap = options.lineCap.replace("butt", "flat");
                stroke.joinstyle = options.lineJoin;
            } else if (stroke) {
                container.removeChild(stroke);
                layer._stroke = null;
            }
            if (options.fill) {
                if (!fill) fill = layer._fill = vmlCreate("fill");
                container.appendChild(fill);
                fill.color = options.fillColor || options.color;
                fill.opacity = options.fillOpacity;
            } else if (fill) {
                container.removeChild(fill);
                layer._fill = null;
            }
        },
        _updateCircle: function(layer) {
            var p = layer._point.round(), r = Math.round(layer._radius), r2 = Math.round(layer._radiusY || r);
            this._setPath(layer, layer._empty() ? "M0 0" : "AL " + p.x + "," + p.y + " " + r + "," + r2 + " 0," + 23592600);
        },
        _setPath: function(layer, path) {
            layer._path.v = path;
        },
        _bringToFront: function(layer) {
            toFront(layer._container);
        },
        _bringToBack: function(layer) {
            toBack(layer._container);
        }
    };
    var create = Browser.vml ? vmlCreate : svgCreate;
    /*
   * @class SVG
   * @inherits Renderer
   * @aka L.SVG
   *
   * Allows vector layers to be displayed with [SVG](https://developer.mozilla.org/docs/Web/SVG).
   * Inherits `Renderer`.
   *
   * Due to [technical limitations](https://caniuse.com/svg), SVG is not
   * available in all web browsers, notably Android 2.x and 3.x.
   *
   * Although SVG is not available on IE7 and IE8, these browsers support
   * [VML](https://en.wikipedia.org/wiki/Vector_Markup_Language)
   * (a now deprecated technology), and the SVG renderer will fall back to VML in
   * this case.
   *
   * @example
   *
   * Use SVG by default for all paths in the map:
   *
   * ```js
   * var map = L.map('map', {
   * 	renderer: L.svg()
   * });
   * ```
   *
   * Use a SVG renderer with extra padding for specific vector geometries:
   *
   * ```js
   * var map = L.map('map');
   * var myRenderer = L.svg({ padding: 0.5 });
   * var line = L.polyline( coordinates, { renderer: myRenderer } );
   * var circle = L.circle( center, { renderer: myRenderer } );
   * ```
   */ var SVG = Renderer.extend({
        _initContainer: function() {
            this._container = create("svg");
            // makes it possible to click through svg root; we'll reset it back in individual paths
            this._container.setAttribute("pointer-events", "none");
            this._rootGroup = create("g");
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
            remove(this._container);
            off(this._container);
            delete this._container;
            delete this._rootGroup;
            delete this._svgSize;
        },
        _update: function() {
            if (this._map._animatingZoom && this._bounds) return;
            Renderer.prototype._update.call(this);
            var b = this._bounds, size = b.getSize(), container = this._container;
            // set size of svg-container if changed
            if (!this._svgSize || !this._svgSize.equals(size)) {
                this._svgSize = size;
                container.setAttribute("width", size.x);
                container.setAttribute("height", size.y);
            }
            // movement: update container viewBox so that we don't have to change coordinates of individual layers
            setPosition(container, b.min);
            container.setAttribute("viewBox", [
                b.min.x,
                b.min.y,
                size.x,
                size.y
            ].join(" "));
            this.fire("update");
        },
        // methods below are called by vector layers implementations
        _initPath: function(layer) {
            var path = layer._path = create("path");
            // @namespace Path
            // @option className: String = null
            // Custom class name set on an element. Only for SVG renderer.
            if (layer.options.className) addClass(path, layer.options.className);
            if (layer.options.interactive) addClass(path, "leaflet-interactive");
            this._updateStyle(layer);
            this._layers[stamp(layer)] = layer;
        },
        _addPath: function(layer) {
            if (!this._rootGroup) this._initContainer();
            this._rootGroup.appendChild(layer._path);
            layer.addInteractiveTarget(layer._path);
        },
        _removePath: function(layer) {
            remove(layer._path);
            layer.removeInteractiveTarget(layer._path);
            delete this._layers[stamp(layer)];
        },
        _updatePath: function(layer) {
            layer._project();
            layer._update();
        },
        _updateStyle: function(layer) {
            var path = layer._path, options = layer.options;
            if (!path) return;
            if (options.stroke) {
                path.setAttribute("stroke", options.color);
                path.setAttribute("stroke-opacity", options.opacity);
                path.setAttribute("stroke-width", options.weight);
                path.setAttribute("stroke-linecap", options.lineCap);
                path.setAttribute("stroke-linejoin", options.lineJoin);
                if (options.dashArray) path.setAttribute("stroke-dasharray", options.dashArray);
                else path.removeAttribute("stroke-dasharray");
                if (options.dashOffset) path.setAttribute("stroke-dashoffset", options.dashOffset);
                else path.removeAttribute("stroke-dashoffset");
            } else path.setAttribute("stroke", "none");
            if (options.fill) {
                path.setAttribute("fill", options.fillColor || options.color);
                path.setAttribute("fill-opacity", options.fillOpacity);
                path.setAttribute("fill-rule", options.fillRule || "evenodd");
            } else path.setAttribute("fill", "none");
        },
        _updatePoly: function(layer, closed) {
            this._setPath(layer, pointsToPath(layer._parts, closed));
        },
        _updateCircle: function(layer) {
            var p = layer._point, r = Math.max(Math.round(layer._radius), 1), r2 = Math.max(Math.round(layer._radiusY), 1) || r, arc = "a" + r + "," + r2 + " 0 1,0 ";
            // drawing a circle with two half-arcs
            var d = layer._empty() ? "M0 0" : "M" + (p.x - r) + "," + p.y + arc + r * 2 + ",0 " + arc + -r * 2 + ",0 ";
            this._setPath(layer, d);
        },
        _setPath: function(layer, path) {
            layer._path.setAttribute("d", path);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(layer) {
            toFront(layer._path);
        },
        _bringToBack: function(layer) {
            toBack(layer._path);
        }
    });
    if (Browser.vml) SVG.include(vmlMixin);
    // @namespace SVG
    // @factory L.svg(options?: Renderer options)
    // Creates a SVG renderer with the given options.
    function svg(options) {
        return Browser.svg || Browser.vml ? new SVG(options) : null;
    }
    Map.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(layer) {
            // @namespace Path; @option renderer: Renderer
            // Use this specific instance of `Renderer` for this path. Takes
            // precedence over the map's [default renderer](#map-renderer).
            var renderer = layer.options.renderer || this._getPaneRenderer(layer.options.pane) || this.options.renderer || this._renderer;
            if (!renderer) renderer = this._renderer = this._createRenderer();
            if (!this.hasLayer(renderer)) this.addLayer(renderer);
            return renderer;
        },
        _getPaneRenderer: function(name) {
            if (name === "overlayPane" || name === undefined) return false;
            var renderer = this._paneRenderers[name];
            if (renderer === undefined) {
                renderer = this._createRenderer({
                    pane: name
                });
                this._paneRenderers[name] = renderer;
            }
            return renderer;
        },
        _createRenderer: function(options) {
            // @namespace Map; @option preferCanvas: Boolean = false
            // Whether `Path`s should be rendered on a `Canvas` renderer.
            // By default, all `Path`s are rendered in a `SVG` renderer.
            return this.options.preferCanvas && canvas(options) || svg(options);
        }
    });
    /*
   * L.Rectangle extends Polygon and creates a rectangle when passed a LatLngBounds object.
   */ /*
   * @class Rectangle
   * @aka L.Rectangle
   * @inherits Polygon
   *
   * A class for drawing rectangle overlays on a map. Extends `Polygon`.
   *
   * @example
   *
   * ```js
   * // define rectangle geographical bounds
   * var bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
   *
   * // create an orange rectangle
   * L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);
   *
   * // zoom the map to the rectangle bounds
   * map.fitBounds(bounds);
   * ```
   *
   */ var Rectangle = Polygon.extend({
        initialize: function(latLngBounds, options) {
            Polygon.prototype.initialize.call(this, this._boundsToLatLngs(latLngBounds), options);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(latLngBounds) {
            return this.setLatLngs(this._boundsToLatLngs(latLngBounds));
        },
        _boundsToLatLngs: function(latLngBounds) {
            latLngBounds = toLatLngBounds(latLngBounds);
            return [
                latLngBounds.getSouthWest(),
                latLngBounds.getNorthWest(),
                latLngBounds.getNorthEast(),
                latLngBounds.getSouthEast()
            ];
        }
    });
    // @factory L.rectangle(latLngBounds: LatLngBounds, options?: Polyline options)
    function rectangle(latLngBounds, options) {
        return new Rectangle(latLngBounds, options);
    }
    SVG.create = create;
    SVG.pointsToPath = pointsToPath;
    GeoJSON.geometryToLayer = geometryToLayer;
    GeoJSON.coordsToLatLng = coordsToLatLng;
    GeoJSON.coordsToLatLngs = coordsToLatLngs;
    GeoJSON.latLngToCoords = latLngToCoords;
    GeoJSON.latLngsToCoords = latLngsToCoords;
    GeoJSON.getFeature = getFeature;
    GeoJSON.asFeature = asFeature;
    /*
   * L.Handler.BoxZoom is used to add shift-drag zoom interaction to the map
   * (zoom to a selected bounding box), enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: true
    });
    var BoxZoom = Handler.extend({
        initialize: function(map) {
            this._map = map;
            this._container = map._container;
            this._pane = map._panes.overlayPane;
            this._resetStateTimeout = 0;
            map.on("unload", this._destroy, this);
        },
        addHooks: function() {
            on(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
            off(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
            return this._moved;
        },
        _destroy: function() {
            remove(this._pane);
            delete this._pane;
        },
        _resetState: function() {
            this._resetStateTimeout = 0;
            this._moved = false;
        },
        _clearDeferredResetState: function() {
            if (this._resetStateTimeout !== 0) {
                clearTimeout(this._resetStateTimeout);
                this._resetStateTimeout = 0;
            }
        },
        _onMouseDown: function(e) {
            if (!e.shiftKey || e.which !== 1 && e.button !== 1) return false;
            // Clear the deferred resetState if it hasn't executed yet, otherwise it
            // will interrupt the interaction and orphan a box element in the container.
            this._clearDeferredResetState();
            this._resetState();
            disableTextSelection();
            disableImageDrag();
            this._startPoint = this._map.mouseEventToContainerPoint(e);
            on(document, {
                contextmenu: stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseMove: function(e) {
            if (!this._moved) {
                this._moved = true;
                this._box = create$1("div", "leaflet-zoom-box", this._container);
                addClass(this._container, "leaflet-crosshair");
                this._map.fire("boxzoomstart");
            }
            this._point = this._map.mouseEventToContainerPoint(e);
            var bounds = new Bounds(this._point, this._startPoint), size = bounds.getSize();
            setPosition(this._box, bounds.min);
            this._box.style.width = size.x + "px";
            this._box.style.height = size.y + "px";
        },
        _finish: function() {
            if (this._moved) {
                remove(this._box);
                removeClass(this._container, "leaflet-crosshair");
            }
            enableTextSelection();
            enableImageDrag();
            off(document, {
                contextmenu: stop,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this);
        },
        _onMouseUp: function(e) {
            if (e.which !== 1 && e.button !== 1) return;
            this._finish();
            if (!this._moved) return;
            // Postpone to next JS tick so internal click event handling
            // still see it as "moved".
            this._clearDeferredResetState();
            this._resetStateTimeout = setTimeout(bind(this._resetState, this), 0);
            var bounds = new LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
            this._map.fitBounds(bounds).fire("boxzoomend", {
                boxZoomBounds: bounds
            });
        },
        _onKeyDown: function(e) {
            if (e.keyCode === 27) {
                this._finish();
                this._clearDeferredResetState();
                this._resetState();
            }
        }
    });
    // @section Handlers
    // @property boxZoom: Handler
    // Box (shift-drag with mouse) zoom handler.
    Map.addInitHook("addHandler", "boxZoom", BoxZoom);
    /*
   * L.Handler.DoubleClickZoom is used to handle double-click zoom on the map, enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: true
    });
    var DoubleClickZoom = Handler.extend({
        addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(e) {
            var map = this._map, oldZoom = map.getZoom(), delta = map.options.zoomDelta, zoom = e.originalEvent.shiftKey ? oldZoom - delta : oldZoom + delta;
            if (map.options.doubleClickZoom === "center") map.setZoom(zoom);
            else map.setZoomAround(e.containerPoint, zoom);
        }
    });
    // @section Handlers
    //
    // Map properties include interaction handlers that allow you to control
    // interaction behavior in runtime, enabling or disabling certain features such
    // as dragging or touch zoom (see `Handler` methods). For example:
    //
    // ```js
    // map.doubleClickZoom.disable();
    // ```
    //
    // @property doubleClickZoom: Handler
    // Double click zoom handler.
    Map.addInitHook("addHandler", "doubleClickZoom", DoubleClickZoom);
    /*
   * L.Handler.MapDrag is used to make the map draggable (with panning inertia), enabled by default.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: true,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: true,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: Infinity,
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: false,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0.0
    });
    var Drag = Handler.extend({
        addHooks: function() {
            if (!this._draggable) {
                var map = this._map;
                this._draggable = new Draggable(map._mapPane, map._container);
                this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this);
                this._draggable.on("predrag", this._onPreDragLimit, this);
                if (map.options.worldCopyJump) {
                    this._draggable.on("predrag", this._onPreDragWrap, this);
                    map.on("zoomend", this._onZoomEnd, this);
                    map.whenReady(this._onZoomEnd, this);
                }
            }
            addClass(this._map._container, "leaflet-grab leaflet-touch-drag");
            this._draggable.enable();
            this._positions = [];
            this._times = [];
        },
        removeHooks: function() {
            removeClass(this._map._container, "leaflet-grab");
            removeClass(this._map._container, "leaflet-touch-drag");
            this._draggable.disable();
        },
        moved: function() {
            return this._draggable && this._draggable._moved;
        },
        moving: function() {
            return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
            var map = this._map;
            map._stop();
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var bounds = toLatLngBounds(this._map.options.maxBounds);
                this._offsetLimit = toBounds(this._map.latLngToContainerPoint(bounds.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(bounds.getSouthEast()).multiplyBy(-1).add(this._map.getSize()));
                this._viscosity = Math.min(1.0, Math.max(0.0, this._map.options.maxBoundsViscosity));
            } else this._offsetLimit = null;
            map.fire("movestart").fire("dragstart");
            if (map.options.inertia) {
                this._positions = [];
                this._times = [];
            }
        },
        _onDrag: function(e) {
            if (this._map.options.inertia) {
                var time = this._lastTime = +new Date(), pos = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(pos);
                this._times.push(time);
                this._prunePositions(time);
            }
            this._map.fire("move", e).fire("drag", e);
        },
        _prunePositions: function(time) {
            while(this._positions.length > 1 && time - this._times[0] > 50){
                this._positions.shift();
                this._times.shift();
            }
        },
        _onZoomEnd: function() {
            var pxCenter = this._map.getSize().divideBy(2), pxWorldCenter = this._map.latLngToLayerPoint([
                0,
                0
            ]);
            this._initialWorldOffset = pxWorldCenter.subtract(pxCenter).x;
            this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(value, threshold) {
            return value - (value - threshold) * this._viscosity;
        },
        _onPreDragLimit: function() {
            if (!this._viscosity || !this._offsetLimit) return;
            var offset = this._draggable._newPos.subtract(this._draggable._startPos);
            var limit = this._offsetLimit;
            if (offset.x < limit.min.x) offset.x = this._viscousLimit(offset.x, limit.min.x);
            if (offset.y < limit.min.y) offset.y = this._viscousLimit(offset.y, limit.min.y);
            if (offset.x > limit.max.x) offset.x = this._viscousLimit(offset.x, limit.max.x);
            if (offset.y > limit.max.y) offset.y = this._viscousLimit(offset.y, limit.max.y);
            this._draggable._newPos = this._draggable._startPos.add(offset);
        },
        _onPreDragWrap: function() {
            // TODO refactor to be able to adjust map pane position after zoom
            var worldWidth = this._worldWidth, halfWidth = Math.round(worldWidth / 2), dx = this._initialWorldOffset, x = this._draggable._newPos.x, newX1 = (x - halfWidth + dx) % worldWidth + halfWidth - dx, newX2 = (x + halfWidth + dx) % worldWidth - halfWidth - dx, newX = Math.abs(newX1 + dx) < Math.abs(newX2 + dx) ? newX1 : newX2;
            this._draggable._absPos = this._draggable._newPos.clone();
            this._draggable._newPos.x = newX;
        },
        _onDragEnd: function(e) {
            var map = this._map, options = map.options, noInertia = !options.inertia || e.noInertia || this._times.length < 2;
            map.fire("dragend", e);
            if (noInertia) map.fire("moveend");
            else {
                this._prunePositions(+new Date());
                var direction = this._lastPos.subtract(this._positions[0]), duration = (this._lastTime - this._times[0]) / 1000, ease = options.easeLinearity, speedVector = direction.multiplyBy(ease / duration), speed = speedVector.distanceTo([
                    0,
                    0
                ]), limitedSpeed = Math.min(options.inertiaMaxSpeed, speed), limitedSpeedVector = speedVector.multiplyBy(limitedSpeed / speed), decelerationDuration = limitedSpeed / (options.inertiaDeceleration * ease), offset = limitedSpeedVector.multiplyBy(-decelerationDuration / 2).round();
                if (!offset.x && !offset.y) map.fire("moveend");
                else {
                    offset = map._limitOffset(offset, map.options.maxBounds);
                    requestAnimFrame(function() {
                        map.panBy(offset, {
                            duration: decelerationDuration,
                            easeLinearity: ease,
                            noMoveStart: true,
                            animate: true
                        });
                    });
                }
            }
        }
    });
    // @section Handlers
    // @property dragging: Handler
    // Map dragging handler (by both mouse and touch).
    Map.addInitHook("addHandler", "dragging", Drag);
    /*
   * L.Map.Keyboard is handling keyboard interaction with the map, enabled by default.
   */ // @namespace Map
    // @section Keyboard Navigation Options
    Map.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: true,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
    });
    var Keyboard = Handler.extend({
        keyCodes: {
            left: [
                37
            ],
            right: [
                39
            ],
            down: [
                40
            ],
            up: [
                38
            ],
            zoomIn: [
                187,
                107,
                61,
                171
            ],
            zoomOut: [
                189,
                109,
                54,
                173
            ]
        },
        initialize: function(map) {
            this._map = map;
            this._setPanDelta(map.options.keyboardPanDelta);
            this._setZoomDelta(map.options.zoomDelta);
        },
        addHooks: function() {
            var container = this._map._container;
            // make the container focusable by tabbing
            if (container.tabIndex <= 0) container.tabIndex = "0";
            on(container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this);
            this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        removeHooks: function() {
            this._removeHooks();
            off(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this);
            this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this);
        },
        _onMouseDown: function() {
            if (this._focused) return;
            var body = document.body, docEl = document.documentElement, top = body.scrollTop || docEl.scrollTop, left = body.scrollLeft || docEl.scrollLeft;
            this._map._container.focus();
            window.scrollTo(left, top);
        },
        _onFocus: function() {
            this._focused = true;
            this._map.fire("focus");
        },
        _onBlur: function() {
            this._focused = false;
            this._map.fire("blur");
        },
        _setPanDelta: function(panDelta) {
            var keys = this._panKeys = {}, codes = this.keyCodes, i, len;
            for(i = 0, len = codes.left.length; i < len; i++)keys[codes.left[i]] = [
                -1 * panDelta,
                0
            ];
            for(i = 0, len = codes.right.length; i < len; i++)keys[codes.right[i]] = [
                panDelta,
                0
            ];
            for(i = 0, len = codes.down.length; i < len; i++)keys[codes.down[i]] = [
                0,
                panDelta
            ];
            for(i = 0, len = codes.up.length; i < len; i++)keys[codes.up[i]] = [
                0,
                -1 * panDelta
            ];
        },
        _setZoomDelta: function(zoomDelta) {
            var keys = this._zoomKeys = {}, codes = this.keyCodes, i, len;
            for(i = 0, len = codes.zoomIn.length; i < len; i++)keys[codes.zoomIn[i]] = zoomDelta;
            for(i = 0, len = codes.zoomOut.length; i < len; i++)keys[codes.zoomOut[i]] = -zoomDelta;
        },
        _addHooks: function() {
            on(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
            off(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(e) {
            if (e.altKey || e.ctrlKey || e.metaKey) return;
            var key = e.keyCode, map = this._map, offset;
            if (key in this._panKeys) {
                if (!map._panAnim || !map._panAnim._inProgress) {
                    offset = this._panKeys[key];
                    if (e.shiftKey) offset = toPoint(offset).multiplyBy(3);
                    if (map.options.maxBounds) offset = map._limitOffset(toPoint(offset), map.options.maxBounds);
                    if (map.options.worldCopyJump) {
                        var newLatLng = map.wrapLatLng(map.unproject(map.project(map.getCenter()).add(offset)));
                        map.panTo(newLatLng);
                    } else map.panBy(offset);
                }
            } else if (key in this._zoomKeys) map.setZoom(map.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[key]);
            else if (key === 27 && map._popup && map._popup.options.closeOnEscapeKey) map.closePopup();
            else return;
            stop(e);
        }
    });
    // @section Handlers
    // @section Handlers
    // @property keyboard: Handler
    // Keyboard navigation handler.
    Map.addInitHook("addHandler", "keyboard", Keyboard);
    /*
   * L.Handler.ScrollWheelZoom is used by L.Map to enable mouse scroll wheel zoom on the map.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: true,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
    });
    var ScrollWheelZoom = Handler.extend({
        addHooks: function() {
            on(this._map._container, "wheel", this._onWheelScroll, this);
            this._delta = 0;
        },
        removeHooks: function() {
            off(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
            var delta = getWheelDelta(e);
            var debounce = this._map.options.wheelDebounceTime;
            this._delta += delta;
            this._lastMousePos = this._map.mouseEventToContainerPoint(e);
            if (!this._startTime) this._startTime = +new Date();
            var left = Math.max(debounce - (+new Date() - this._startTime), 0);
            clearTimeout(this._timer);
            this._timer = setTimeout(bind(this._performZoom, this), left);
            stop(e);
        },
        _performZoom: function() {
            var map = this._map, zoom = map.getZoom(), snap = this._map.options.zoomSnap || 0;
            map._stop(); // stop panning and fly animations if any
            // map the delta with a sigmoid function to -4..4 range leaning on -1..1
            var d2 = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), d3 = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(d2)))) / Math.LN2, d4 = snap ? Math.ceil(d3 / snap) * snap : d3, delta = map._limitZoom(zoom + (this._delta > 0 ? d4 : -d4)) - zoom;
            this._delta = 0;
            this._startTime = null;
            if (!delta) return;
            if (map.options.scrollWheelZoom === "center") map.setZoom(zoom + delta);
            else map.setZoomAround(this._lastMousePos, zoom + delta);
        }
    });
    // @section Handlers
    // @property scrollWheelZoom: Handler
    // Scroll wheel zoom handler.
    Map.addInitHook("addHandler", "scrollWheelZoom", ScrollWheelZoom);
    /*
   * L.Map.TapHold is used to simulate `contextmenu` event on long hold,
   * which otherwise is not fired by mobile Safari.
   */ var tapHoldDelay = 600;
    // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: Browser.touchNative && Browser.safari && Browser.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
    });
    var TapHold = Handler.extend({
        addHooks: function() {
            on(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
            off(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
            clearTimeout(this._holdTimeout);
            if (e.touches.length !== 1) return;
            var first = e.touches[0];
            this._startPos = this._newPos = new Point(first.clientX, first.clientY);
            this._holdTimeout = setTimeout(bind(function() {
                this._cancel();
                if (!this._isTapValid()) return;
                // prevent simulated mouse events https://w3c.github.io/touch-events/#mouse-events
                on(document, "touchend", preventDefault);
                on(document, "touchend touchcancel", this._cancelClickPrevent);
                this._simulateEvent("contextmenu", first);
            }, this), tapHoldDelay);
            on(document, "touchend touchcancel contextmenu", this._cancel, this);
            on(document, "touchmove", this._onMove, this);
        },
        _cancelClickPrevent: function cancelClickPrevent() {
            off(document, "touchend", preventDefault);
            off(document, "touchend touchcancel", cancelClickPrevent);
        },
        _cancel: function() {
            clearTimeout(this._holdTimeout);
            off(document, "touchend touchcancel contextmenu", this._cancel, this);
            off(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
            var first = e.touches[0];
            this._newPos = new Point(first.clientX, first.clientY);
        },
        _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(type, e) {
            var simulatedEvent = new MouseEvent(type, {
                bubbles: true,
                cancelable: true,
                view: window,
                // detail: 1,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY
            });
            simulatedEvent._simulated = true;
            e.target.dispatchEvent(simulatedEvent);
        }
    });
    // @section Handlers
    // @property tapHold: Handler
    // Long tap handler to simulate `contextmenu` event (useful in mobile Safari).
    Map.addInitHook("addHandler", "tapHold", TapHold);
    /*
   * L.Handler.TouchZoom is used by L.Map to add pinch zoom on supported mobile browsers.
   */ // @namespace Map
    // @section Interaction Options
    Map.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: Browser.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: true
    });
    var TouchZoom = Handler.extend({
        addHooks: function() {
            addClass(this._map._container, "leaflet-touch-zoom");
            on(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
            removeClass(this._map._container, "leaflet-touch-zoom");
            off(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
            var map = this._map;
            if (!e.touches || e.touches.length !== 2 || map._animatingZoom || this._zooming) return;
            var p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = map.getSize()._divideBy(2);
            this._startLatLng = map.containerPointToLatLng(this._centerPoint);
            if (map.options.touchZoom !== "center") this._pinchStartLatLng = map.containerPointToLatLng(p1.add(p2)._divideBy(2));
            this._startDist = p1.distanceTo(p2);
            this._startZoom = map.getZoom();
            this._moved = false;
            this._zooming = true;
            map._stop();
            on(document, "touchmove", this._onTouchMove, this);
            on(document, "touchend touchcancel", this._onTouchEnd, this);
            preventDefault(e);
        },
        _onTouchMove: function(e) {
            if (!e.touches || e.touches.length !== 2 || !this._zooming) return;
            var map = this._map, p1 = map.mouseEventToContainerPoint(e.touches[0]), p2 = map.mouseEventToContainerPoint(e.touches[1]), scale = p1.distanceTo(p2) / this._startDist;
            this._zoom = map.getScaleZoom(scale, this._startZoom);
            if (!map.options.bounceAtZoomLimits && (this._zoom < map.getMinZoom() && scale < 1 || this._zoom > map.getMaxZoom() && scale > 1)) this._zoom = map._limitZoom(this._zoom);
            if (map.options.touchZoom === "center") {
                this._center = this._startLatLng;
                if (scale === 1) return;
            } else {
                // Get delta from pinch to center, so centerLatLng is delta applied to initial pinchLatLng
                var delta = p1._add(p2)._divideBy(2)._subtract(this._centerPoint);
                if (scale === 1 && delta.x === 0 && delta.y === 0) return;
                this._center = map.unproject(map.project(this._pinchStartLatLng, this._zoom).subtract(delta), this._zoom);
            }
            if (!this._moved) {
                map._moveStart(true, false);
                this._moved = true;
            }
            cancelAnimFrame(this._animRequest);
            var moveFn = bind(map._move, map, this._center, this._zoom, {
                pinch: true,
                round: false
            }, undefined);
            this._animRequest = requestAnimFrame(moveFn, this, true);
            preventDefault(e);
        },
        _onTouchEnd: function() {
            if (!this._moved || !this._zooming) {
                this._zooming = false;
                return;
            }
            this._zooming = false;
            cancelAnimFrame(this._animRequest);
            off(document, "touchmove", this._onTouchMove, this);
            off(document, "touchend touchcancel", this._onTouchEnd, this);
            // Pinch updates GridLayers' levels only when zoomSnap is off, so zoomSnap becomes noUpdate.
            if (this._map.options.zoomAnimation) this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), true, this._map.options.zoomSnap);
            else this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
    });
    // @section Handlers
    // @property touchZoom: Handler
    // Touch zoom handler.
    Map.addInitHook("addHandler", "touchZoom", TouchZoom);
    Map.BoxZoom = BoxZoom;
    Map.DoubleClickZoom = DoubleClickZoom;
    Map.Drag = Drag;
    Map.Keyboard = Keyboard;
    Map.ScrollWheelZoom = ScrollWheelZoom;
    Map.TapHold = TapHold;
    Map.TouchZoom = TouchZoom;
    exports1.Bounds = Bounds;
    exports1.Browser = Browser;
    exports1.CRS = CRS;
    exports1.Canvas = Canvas;
    exports1.Circle = Circle;
    exports1.CircleMarker = CircleMarker;
    exports1.Class = Class;
    exports1.Control = Control;
    exports1.DivIcon = DivIcon;
    exports1.DivOverlay = DivOverlay;
    exports1.DomEvent = DomEvent;
    exports1.DomUtil = DomUtil;
    exports1.Draggable = Draggable;
    exports1.Evented = Evented;
    exports1.FeatureGroup = FeatureGroup;
    exports1.GeoJSON = GeoJSON;
    exports1.GridLayer = GridLayer;
    exports1.Handler = Handler;
    exports1.Icon = Icon;
    exports1.ImageOverlay = ImageOverlay;
    exports1.LatLng = LatLng;
    exports1.LatLngBounds = LatLngBounds;
    exports1.Layer = Layer;
    exports1.LayerGroup = LayerGroup;
    exports1.LineUtil = LineUtil;
    exports1.Map = Map;
    exports1.Marker = Marker;
    exports1.Mixin = Mixin;
    exports1.Path = Path;
    exports1.Point = Point;
    exports1.PolyUtil = PolyUtil;
    exports1.Polygon = Polygon;
    exports1.Polyline = Polyline;
    exports1.Popup = Popup;
    exports1.PosAnimation = PosAnimation;
    exports1.Projection = index;
    exports1.Rectangle = Rectangle;
    exports1.Renderer = Renderer;
    exports1.SVG = SVG;
    exports1.SVGOverlay = SVGOverlay;
    exports1.TileLayer = TileLayer;
    exports1.Tooltip = Tooltip;
    exports1.Transformation = Transformation;
    exports1.Util = Util;
    exports1.VideoOverlay = VideoOverlay;
    exports1.bind = bind;
    exports1.bounds = toBounds;
    exports1.canvas = canvas;
    exports1.circle = circle;
    exports1.circleMarker = circleMarker;
    exports1.control = control;
    exports1.divIcon = divIcon;
    exports1.extend = extend;
    exports1.featureGroup = featureGroup;
    exports1.geoJSON = geoJSON;
    exports1.geoJson = geoJson;
    exports1.gridLayer = gridLayer;
    exports1.icon = icon;
    exports1.imageOverlay = imageOverlay;
    exports1.latLng = toLatLng;
    exports1.latLngBounds = toLatLngBounds;
    exports1.layerGroup = layerGroup;
    exports1.map = createMap;
    exports1.marker = marker;
    exports1.point = toPoint;
    exports1.polygon = polygon;
    exports1.polyline = polyline;
    exports1.popup = popup;
    exports1.rectangle = rectangle;
    exports1.setOptions = setOptions;
    exports1.stamp = stamp;
    exports1.svg = svg;
    exports1.svgOverlay = svgOverlay;
    exports1.tileLayer = tileLayer;
    exports1.tooltip = tooltip;
    exports1.transformation = toTransformation;
    exports1.version = version;
    exports1.videoOverlay = videoOverlay;
    var oldL = window.L;
    exports1.noConflict = function() {
        window.L = oldL;
        return this;
    };
    // Always export us to window global (see #2364)
    window.L = exports1;
});

},{}],"6JhOO":[function() {},{}],"6MW1C":[function(require,module,exports) {
module.exports = require("685eb42c2acf12ba").getBundleURL("1G2bZ") + "map-marker.1d9eb7dc.png" + "?" + Date.now();

},{"685eb42c2acf12ba":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jXR8Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "showPopup", ()=>showPopup);
parcelHelpers.export(exports, "closePopup", ()=>closePopup);
const popup = document.querySelector(".reservation-popup");
const overlay = document.querySelector(".overlay");
const showPopup = function(event) {
    // console.log(popup.className.split(' '));
    event.preventDefault();
    popup.classList.remove("display-none");
    overlay.classList.remove("display-none");
};
const closePopup = ()=>{
    popup.classList.add("display-none");
    overlay.classList.add("display-none");
    document.querySelector(".reservation-popup__form").reset();
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gYyY7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "errorMessage", ()=>errorMessage);
parcelHelpers.export(exports, "validatePhone", ()=>validatePhone);
parcelHelpers.export(exports, "validateDate", ()=>validateDate);
parcelHelpers.export(exports, "validateForm", ()=>validateForm);
const formInputs = document.querySelectorAll("input");
const errorAlert = document.querySelector(".error p");
const phoneRegex = new RegExp(/^(\+44|44)\d{9}$/);
const today = new Date().toJSON().slice(0, 10);
const mq63em = window.matchMedia("(max-width: 63.1em)");
let formStatus = {
    formComplete: {
        status: false,
        message: "Please Fill out all the Fields before Submitting"
    },
    phoneFormatIsCorrect: {
        status: false,
        message: "Please Insert a valid Phone number!"
    }
};
const shakingField = function(field) {
    field.classList.add("shaking");
    setTimeout(()=>{
        field.classList.remove("shaking");
    }, 400);
};
const errorMessage = (msg)=>{
    errorAlert.textContent = msg;
    errorAlert.parentElement.style.top = "0rem";
    setTimeout(()=>{
        errorAlert.parentElement.style.top = "-12rem";
    }, 2500);
};
const validatePhone = function(event) {
    formStatus.phoneFormatIsCorrect.status = true;
    const userInput = event.target.value;
    if (userInput !== "" && !phoneRegex.test(userInput) || !phoneRegex.test(userInput)) {
        shakingField(event.target);
        errorMessage(formStatus.phoneFormatIsCorrect.message);
        formStatus.phoneFormatIsCorrect.status = false;
    }
};
const validateDate = function(event) {
    const userInput = event.target.value;
    if (userInput <= today) {
        shakingField(event.target);
        errorMessage("Please Insert a correct Date!");
    }
};
const validateForm = ()=>{
    formStatus.formComplete.status = true;
    formInputs.forEach((input)=>{
        if (input.value.trim() === "") formStatus.formComplete.status = false;
    });
    return formStatus;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7va1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "slider", ()=>slider);
const sliderBox = document.querySelector(".testimonials-tp__review-slider");
const allSlides = document.querySelectorAll(".testimonials-tp__review-slider__slide");
const numOfSlides = allSlides.length - 1;
allSlides[numOfSlides].classList.add("previous");
allSlides[0].classList.add("active");
allSlides[1].classList.add("next");
let activeSlide = 0;
let loop;
const slider = ()=>{
    // Moving to the next slide after 2s:
    loop = setInterval(sliding, 4000);
};
const sliding = ()=>{
    setNext();
};
const setNext = ()=>{
    allSlides[activeSlide].classList.remove("active");
    allSlides[activeSlide].classList.add("previous");
    let next = activeSlide < numOfSlides ? activeSlide + 1 : 0;
    allSlides[next].classList.remove("previous");
    allSlides[next].classList.remove("next");
    allSlides[next].classList.add("active");
    if (next < numOfSlides) {
        allSlides[next + 1].classList.remove("previous");
        allSlides[next + 1].classList.add("next");
    } else {
        allSlides[0].classList.remove("previous");
        allSlides[0].classList.add("next");
    }
    activeSlide = next;
    trackSlide = activeSlide;
};
sliderBox.addEventListener("touchstart", (event)=>{
    event.preventDefault();
    clearInterval(loop);
});
sliderBox.addEventListener("touchend", (event)=>{
    event.preventDefault();
    loop = setInterval(sliding, 4000);
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["adBpN","igcvL"], "igcvL", "parcelRequire71a9")

//# sourceMappingURL=index.5baa4167.js.map
