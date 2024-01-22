/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
!(function webpackUniversalModuleDefinition(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("pdfjs-dist/build/pdf", [], t)
    : "object" == typeof exports
    ? (exports["pdfjs-dist/build/pdf"] = t())
    : (e["pdfjs-dist/build/pdf"] = e.pdfjsLib = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function __w_pdfjs_require__(r) {
      if (t[r]) return t[r].exports;
      var n = (t[r] = { i: r, l: !1, exports: {} });
      e[r].call(n.exports, n, n.exports, __w_pdfjs_require__);
      n.l = !0;
      return n.exports;
    }
    __w_pdfjs_require__.m = e;
    __w_pdfjs_require__.c = t;
    __w_pdfjs_require__.d = function (e, t, r) {
      __w_pdfjs_require__.o(e, t) ||
        Object.defineProperty(e, t, { enumerable: !0, get: r });
    };
    __w_pdfjs_require__.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
      Object.defineProperty(e, "__esModule", { value: !0 });
    };
    __w_pdfjs_require__.t = function (e, t) {
      1 & t && (e = __w_pdfjs_require__(e));
      if (8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      __w_pdfjs_require__.r(r);
      Object.defineProperty(r, "default", { enumerable: !0, value: e });
      if (2 & t && "string" != typeof e)
        for (var n in e)
          __w_pdfjs_require__.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    };
    __w_pdfjs_require__.n = function (e) {
      var t =
        e && e.__esModule
          ? function getDefault() {
              return e.default;
            }
          : function getModuleExports() {
              return e;
            };
      __w_pdfjs_require__.d(t, "a", t);
      return t;
    };
    __w_pdfjs_require__.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    };
    __w_pdfjs_require__.p = "";
    return __w_pdfjs_require__((__w_pdfjs_require__.s = 0));
  })([
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      Object.defineProperty(t, "addLinkAttributes", {
        enumerable: !0,
        get: function () {
          return n.addLinkAttributes;
        },
      });
      Object.defineProperty(t, "getFilenameFromUrl", {
        enumerable: !0,
        get: function () {
          return n.getFilenameFromUrl;
        },
      });
      Object.defineProperty(t, "LinkTarget", {
        enumerable: !0,
        get: function () {
          return n.LinkTarget;
        },
      });
      Object.defineProperty(t, "loadScript", {
        enumerable: !0,
        get: function () {
          return n.loadScript;
        },
      });
      Object.defineProperty(t, "PDFDateString", {
        enumerable: !0,
        get: function () {
          return n.PDFDateString;
        },
      });
      Object.defineProperty(t, "RenderingCancelledException", {
        enumerable: !0,
        get: function () {
          return n.RenderingCancelledException;
        },
      });
      Object.defineProperty(t, "build", {
        enumerable: !0,
        get: function () {
          return s.build;
        },
      });
      Object.defineProperty(t, "getDocument", {
        enumerable: !0,
        get: function () {
          return s.getDocument;
        },
      });
      Object.defineProperty(t, "LoopbackPort", {
        enumerable: !0,
        get: function () {
          return s.LoopbackPort;
        },
      });
      Object.defineProperty(t, "PDFDataRangeTransport", {
        enumerable: !0,
        get: function () {
          return s.PDFDataRangeTransport;
        },
      });
      Object.defineProperty(t, "PDFWorker", {
        enumerable: !0,
        get: function () {
          return s.PDFWorker;
        },
      });
      Object.defineProperty(t, "version", {
        enumerable: !0,
        get: function () {
          return s.version;
        },
      });
      Object.defineProperty(t, "CMapCompressionType", {
        enumerable: !0,
        get: function () {
          return a.CMapCompressionType;
        },
      });
      Object.defineProperty(t, "createObjectURL", {
        enumerable: !0,
        get: function () {
          return a.createObjectURL;
        },
      });
      Object.defineProperty(t, "createPromiseCapability", {
        enumerable: !0,
        get: function () {
          return a.createPromiseCapability;
        },
      });
      Object.defineProperty(t, "createValidAbsoluteUrl", {
        enumerable: !0,
        get: function () {
          return a.createValidAbsoluteUrl;
        },
      });
      Object.defineProperty(t, "InvalidPDFException", {
        enumerable: !0,
        get: function () {
          return a.InvalidPDFException;
        },
      });
      Object.defineProperty(t, "MissingPDFException", {
        enumerable: !0,
        get: function () {
          return a.MissingPDFException;
        },
      });
      Object.defineProperty(t, "OPS", {
        enumerable: !0,
        get: function () {
          return a.OPS;
        },
      });
      Object.defineProperty(t, "PasswordResponses", {
        enumerable: !0,
        get: function () {
          return a.PasswordResponses;
        },
      });
      Object.defineProperty(t, "PermissionFlag", {
        enumerable: !0,
        get: function () {
          return a.PermissionFlag;
        },
      });
      Object.defineProperty(t, "removeNullCharacters", {
        enumerable: !0,
        get: function () {
          return a.removeNullCharacters;
        },
      });
      Object.defineProperty(t, "shadow", {
        enumerable: !0,
        get: function () {
          return a.shadow;
        },
      });
      Object.defineProperty(t, "UnexpectedResponseException", {
        enumerable: !0,
        get: function () {
          return a.UnexpectedResponseException;
        },
      });
      Object.defineProperty(t, "UNSUPPORTED_FEATURES", {
        enumerable: !0,
        get: function () {
          return a.UNSUPPORTED_FEATURES;
        },
      });
      Object.defineProperty(t, "Util", {
        enumerable: !0,
        get: function () {
          return a.Util;
        },
      });
      Object.defineProperty(t, "VerbosityLevel", {
        enumerable: !0,
        get: function () {
          return a.VerbosityLevel;
        },
      });
      Object.defineProperty(t, "AnnotationLayer", {
        enumerable: !0,
        get: function () {
          return i.AnnotationLayer;
        },
      });
      Object.defineProperty(t, "apiCompatibilityParams", {
        enumerable: !0,
        get: function () {
          return o.apiCompatibilityParams;
        },
      });
      Object.defineProperty(t, "GlobalWorkerOptions", {
        enumerable: !0,
        get: function () {
          return l.GlobalWorkerOptions;
        },
      });
      Object.defineProperty(t, "renderTextLayer", {
        enumerable: !0,
        get: function () {
          return c.renderTextLayer;
        },
      });
      Object.defineProperty(t, "SVGGraphics", {
        enumerable: !0,
        get: function () {
          return h.SVGGraphics;
        },
      });
      var n = r(1),
        s = r(5),
        a = r(2),
        i = r(19),
        o = r(9),
        l = r(12),
        c = r(20),
        h = r(21);
      {
        const { isNodeJS: e } = r(4);
        if (e) {
          const e = r(22).PDFNodeStream;
          (0, s.setPDFNetworkStreamFactory)((t) => new e(t));
        } else {
          const e = r(25).PDFNetworkStream;
          let t;
          (0, n.isFetchSupported)() && (t = r(26).PDFFetchStream);
          (0, s.setPDFNetworkStreamFactory)((r) =>
            t && (0, n.isValidFetchUrl)(r.url) ? new t(r) : new e(r)
          );
        }
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.addLinkAttributes = function addLinkAttributes(
        e,
        { url: t, target: r, rel: s, enabled: i = !0 } = {}
      ) {
        (0, n.assert)(
          t && "string" == typeof t,
          'addLinkAttributes: A valid "url" parameter must provided.'
        );
        const o = (0, n.removeNullCharacters)(t);
        if (i) e.href = e.title = o;
        else {
          e.href = "";
          e.title = "Disabled: " + o;
          e.onclick = () => !1;
        }
        let l = "";
        switch (r) {
          case a.NONE:
            break;
          case a.SELF:
            l = "_self";
            break;
          case a.BLANK:
            l = "_blank";
            break;
          case a.PARENT:
            l = "_parent";
            break;
          case a.TOP:
            l = "_top";
        }
        e.target = l;
        e.rel = "string" == typeof s ? s : "noopener noreferrer nofollow";
      };
      t.getFilenameFromUrl = function getFilenameFromUrl(e) {
        const t = e.indexOf("#"),
          r = e.indexOf("?"),
          n = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
        return e.substring(e.lastIndexOf("/", n) + 1, n);
      };
      t.isFetchSupported = isFetchSupported;
      t.isValidFetchUrl = isValidFetchUrl;
      t.loadScript = function loadScript(e) {
        return new Promise((t, r) => {
          const n = document.createElement("script");
          n.src = e;
          n.onload = t;
          n.onerror = function () {
            r(new Error("Cannot load script at: " + n.src));
          };
          (document.head || document.documentElement).appendChild(n);
        });
      };
      t.deprecated = function deprecated(e) {
        console.log("Deprecated API usage: " + e);
      };
      t.PDFDateString =
        t.StatTimer =
        t.DOMSVGFactory =
        t.DOMCMapReaderFactory =
        t.BaseCMapReaderFactory =
        t.DOMCanvasFactory =
        t.BaseCanvasFactory =
        t.DEFAULT_LINK_REL =
        t.LinkTarget =
        t.RenderingCancelledException =
        t.PageViewport =
          void 0;
      var n = r(2);
      t.DEFAULT_LINK_REL = "noopener noreferrer nofollow";
      const s = "http://www.w3.org/2000/svg";
      class BaseCanvasFactory {
        constructor() {
          this.constructor === BaseCanvasFactory &&
            (0, n.unreachable)("Cannot initialize BaseCanvasFactory.");
        }
        create(e, t) {
          (0, n.unreachable)("Abstract method `create` called.");
        }
        reset(e, t, r) {
          if (!e.canvas) throw new Error("Canvas is not specified");
          if (t <= 0 || r <= 0) throw new Error("Invalid canvas size");
          e.canvas.width = t;
          e.canvas.height = r;
        }
        destroy(e) {
          if (!e.canvas) throw new Error("Canvas is not specified");
          e.canvas.width = 0;
          e.canvas.height = 0;
          e.canvas = null;
          e.context = null;
        }
      }
      t.BaseCanvasFactory = BaseCanvasFactory;
      t.DOMCanvasFactory = class DOMCanvasFactory extends BaseCanvasFactory {
        constructor({ ownerDocument: e = globalThis.document } = {}) {
          super();
          this._document = e;
        }
        create(e, t) {
          if (e <= 0 || t <= 0) throw new Error("Invalid canvas size");
          const r = this._document.createElement("canvas"),
            n = r.getContext("2d");
          r.width = e;
          r.height = t;
          return { canvas: r, context: n };
        }
      };
      class BaseCMapReaderFactory {
        constructor({ baseUrl: e = null, isCompressed: t = !1 }) {
          this.constructor === BaseCMapReaderFactory &&
            (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory.");
          this.baseUrl = e;
          this.isCompressed = t;
        }
        async fetch({ name: e }) {
          if (!this.baseUrl)
            throw new Error(
              'The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'
            );
          if (!e) throw new Error("CMap name must be specified.");
          const t = this.baseUrl + e + (this.isCompressed ? ".bcmap" : ""),
            r = this.isCompressed
              ? n.CMapCompressionType.BINARY
              : n.CMapCompressionType.NONE;
          return this._fetchData(t, r).catch((e) => {
            throw new Error(
              `Unable to load ${
                this.isCompressed ? "binary " : ""
              }CMap at: ${t}`
            );
          });
        }
        _fetchData(e, t) {
          (0, n.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      t.BaseCMapReaderFactory = BaseCMapReaderFactory;
      t.DOMCMapReaderFactory = class DOMCMapReaderFactory extends (
        BaseCMapReaderFactory
      ) {
        _fetchData(e, t) {
          return isFetchSupported() && isValidFetchUrl(e, document.baseURI)
            ? fetch(e).then(async (e) => {
                if (!e.ok) throw new Error(e.statusText);
                let r;
                r = this.isCompressed
                  ? new Uint8Array(await e.arrayBuffer())
                  : (0, n.stringToBytes)(await e.text());
                return { cMapData: r, compressionType: t };
              })
            : new Promise((r, s) => {
                const a = new XMLHttpRequest();
                a.open("GET", e, !0);
                this.isCompressed && (a.responseType = "arraybuffer");
                a.onreadystatechange = () => {
                  if (a.readyState === XMLHttpRequest.DONE) {
                    if (200 === a.status || 0 === a.status) {
                      let e;
                      this.isCompressed && a.response
                        ? (e = new Uint8Array(a.response))
                        : !this.isCompressed &&
                          a.responseText &&
                          (e = (0, n.stringToBytes)(a.responseText));
                      if (e) {
                        r({ cMapData: e, compressionType: t });
                        return;
                      }
                    }
                    s(new Error(a.statusText));
                  }
                };
                a.send(null);
              });
        }
      };
      t.DOMSVGFactory = class DOMSVGFactory {
        create(e, t) {
          (0, n.assert)(e > 0 && t > 0, "Invalid SVG dimensions");
          const r = document.createElementNS(s, "svg:svg");
          r.setAttribute("version", "1.1");
          r.setAttribute("width", e + "px");
          r.setAttribute("height", t + "px");
          r.setAttribute("preserveAspectRatio", "none");
          r.setAttribute("viewBox", "0 0 " + e + " " + t);
          return r;
        }
        createElement(e) {
          (0, n.assert)("string" == typeof e, "Invalid SVG element type");
          return document.createElementNS(s, e);
        }
      };
      class PageViewport {
        constructor({
          viewBox: e,
          scale: t,
          rotation: r,
          offsetX: n = 0,
          offsetY: s = 0,
          dontFlip: a = !1,
        }) {
          this.viewBox = e;
          this.scale = t;
          this.rotation = r;
          this.offsetX = n;
          this.offsetY = s;
          const i = (e[2] + e[0]) / 2,
            o = (e[3] + e[1]) / 2;
          let l, c, h, d, u, p, f, g;
          switch ((r = (r %= 360) < 0 ? r + 360 : r)) {
            case 180:
              l = -1;
              c = 0;
              h = 0;
              d = 1;
              break;
            case 90:
              l = 0;
              c = 1;
              h = 1;
              d = 0;
              break;
            case 270:
              l = 0;
              c = -1;
              h = -1;
              d = 0;
              break;
            case 0:
              l = 1;
              c = 0;
              h = 0;
              d = -1;
              break;
            default:
              throw new Error(
                "PageViewport: Invalid rotation, must be a multiple of 90 degrees."
              );
          }
          if (a) {
            h = -h;
            d = -d;
          }
          if (0 === l) {
            u = Math.abs(o - e[1]) * t + n;
            p = Math.abs(i - e[0]) * t + s;
            f = Math.abs(e[3] - e[1]) * t;
            g = Math.abs(e[2] - e[0]) * t;
          } else {
            u = Math.abs(i - e[0]) * t + n;
            p = Math.abs(o - e[1]) * t + s;
            f = Math.abs(e[2] - e[0]) * t;
            g = Math.abs(e[3] - e[1]) * t;
          }
          this.transform = [
            l * t,
            c * t,
            h * t,
            d * t,
            u - l * t * i - h * t * o,
            p - c * t * i - d * t * o,
          ];
          this.width = f;
          this.height = g;
        }
        clone({
          scale: e = this.scale,
          rotation: t = this.rotation,
          offsetX: r = this.offsetX,
          offsetY: n = this.offsetY,
          dontFlip: s = !1,
        } = {}) {
          return new PageViewport({
            viewBox: this.viewBox.slice(),
            scale: e,
            rotation: t,
            offsetX: r,
            offsetY: n,
            dontFlip: s,
          });
        }
        convertToViewportPoint(e, t) {
          return n.Util.applyTransform([e, t], this.transform);
        }
        convertToViewportRectangle(e) {
          const t = n.Util.applyTransform([e[0], e[1]], this.transform),
            r = n.Util.applyTransform([e[2], e[3]], this.transform);
          return [t[0], t[1], r[0], r[1]];
        }
        convertToPdfPoint(e, t) {
          return n.Util.applyInverseTransform([e, t], this.transform);
        }
      }
      t.PageViewport = PageViewport;
      class RenderingCancelledException extends n.BaseException {
        constructor(e, t) {
          super(e);
          this.type = t;
        }
      }
      t.RenderingCancelledException = RenderingCancelledException;
      const a = { NONE: 0, SELF: 1, BLANK: 2, PARENT: 3, TOP: 4 };
      t.LinkTarget = a;
      t.StatTimer = class StatTimer {
        constructor() {
          this.started = Object.create(null);
          this.times = [];
        }
        time(e) {
          e in this.started && (0, n.warn)("Timer is already running for " + e);
          this.started[e] = Date.now();
        }
        timeEnd(e) {
          e in this.started ||
            (0, n.warn)("Timer has not been started for " + e);
          this.times.push({ name: e, start: this.started[e], end: Date.now() });
          delete this.started[e];
        }
        toString() {
          const e = [];
          let t = 0;
          for (const e of this.times) {
            const r = e.name;
            r.length > t && (t = r.length);
          }
          for (const r of this.times) {
            const n = r.end - r.start;
            e.push(`${r.name.padEnd(t)} ${n}ms\n`);
          }
          return e.join("");
        }
      };
      function isFetchSupported() {
        return (
          "undefined" != typeof fetch &&
          "undefined" != typeof Response &&
          "body" in Response.prototype &&
          "undefined" != typeof ReadableStream
        );
      }
      function isValidFetchUrl(e, t) {
        try {
          const { protocol: r } = t ? new URL(e, t) : new URL(e);
          return "http:" === r || "https:" === r;
        } catch (e) {
          return !1;
        }
      }
      let i;
      t.PDFDateString = class PDFDateString {
        static toDateObject(e) {
          if (!e || !(0, n.isString)(e)) return null;
          i ||
            (i = new RegExp(
              "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"
            ));
          const t = i.exec(e);
          if (!t) return null;
          const r = parseInt(t[1], 10);
          let s = parseInt(t[2], 10);
          s = s >= 1 && s <= 12 ? s - 1 : 0;
          let a = parseInt(t[3], 10);
          a = a >= 1 && a <= 31 ? a : 1;
          let o = parseInt(t[4], 10);
          o = o >= 0 && o <= 23 ? o : 0;
          let l = parseInt(t[5], 10);
          l = l >= 0 && l <= 59 ? l : 0;
          let c = parseInt(t[6], 10);
          c = c >= 0 && c <= 59 ? c : 0;
          const h = t[7] || "Z";
          let d = parseInt(t[8], 10);
          d = d >= 0 && d <= 23 ? d : 0;
          let u = parseInt(t[9], 10) || 0;
          u = u >= 0 && u <= 59 ? u : 0;
          if ("-" === h) {
            o += d;
            l += u;
          } else if ("+" === h) {
            o -= d;
            l -= u;
          }
          return new Date(Date.UTC(r, s, a, o, l, c));
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.arrayByteLength = arrayByteLength;
      t.arraysToBytes = function arraysToBytes(e) {
        const t = e.length;
        if (1 === t && e[0] instanceof Uint8Array) return e[0];
        let r = 0;
        for (let n = 0; n < t; n++) r += arrayByteLength(e[n]);
        let n = 0;
        const s = new Uint8Array(r);
        for (let r = 0; r < t; r++) {
          let t = e[r];
          t instanceof Uint8Array ||
            (t = "string" == typeof t ? stringToBytes(t) : new Uint8Array(t));
          const a = t.byteLength;
          s.set(t, n);
          n += a;
        }
        return s;
      };
      t.assert = assert;
      t.bytesToString = function bytesToString(e) {
        assert(
          null !== e && "object" == typeof e && void 0 !== e.length,
          "Invalid argument for bytesToString"
        );
        const t = e.length;
        if (t < 8192) return String.fromCharCode.apply(null, e);
        const r = [];
        for (let n = 0; n < t; n += 8192) {
          const s = Math.min(n + 8192, t),
            a = e.subarray(n, s);
          r.push(String.fromCharCode.apply(null, a));
        }
        return r.join("");
      };
      t.createPromiseCapability = function createPromiseCapability() {
        const e = Object.create(null);
        let t = !1;
        Object.defineProperty(e, "settled", { get: () => t });
        e.promise = new Promise(function (r, n) {
          e.resolve = function (e) {
            t = !0;
            r(e);
          };
          e.reject = function (e) {
            t = !0;
            n(e);
          };
        });
        return e;
      };
      t.escapeString = function escapeString(e) {
        return e.replace(/([\(\)\\])/g, "\\$1");
      };
      t.getModificationDate = function getModificationDate(
        e = new Date(Date.now())
      ) {
        return [
          e.getUTCFullYear().toString(),
          (e.getUTCMonth() + 1).toString().padStart(2, "0"),
          (e.getUTCDate() + 1).toString().padStart(2, "0"),
          e.getUTCHours().toString().padStart(2, "0"),
          e.getUTCMinutes().toString().padStart(2, "0"),
          e.getUTCSeconds().toString().padStart(2, "0"),
        ].join("");
      };
      t.getVerbosityLevel = function getVerbosityLevel() {
        return s;
      };
      t.info = function info(e) {
        s >= n.INFOS && console.log("Info: " + e);
      };
      t.isArrayBuffer = function isArrayBuffer(e) {
        return "object" == typeof e && null !== e && void 0 !== e.byteLength;
      };
      t.isArrayEqual = function isArrayEqual(e, t) {
        if (e.length !== t.length) return !1;
        return e.every(function (e, r) {
          return e === t[r];
        });
      };
      t.isBool = function isBool(e) {
        return "boolean" == typeof e;
      };
      t.isNum = function isNum(e) {
        return "number" == typeof e;
      };
      t.isString = function isString(e) {
        return "string" == typeof e;
      };
      t.isSameOrigin = function isSameOrigin(e, t) {
        let r;
        try {
          r = new URL(e);
          if (!r.origin || "null" === r.origin) return !1;
        } catch (e) {
          return !1;
        }
        const n = new URL(t, r);
        return r.origin === n.origin;
      };
      t.createValidAbsoluteUrl = function createValidAbsoluteUrl(e, t) {
        if (!e) return null;
        try {
          const r = t ? new URL(e, t) : new URL(e);
          if (
            (function _isValidProtocol(e) {
              if (!e) return !1;
              switch (e.protocol) {
                case "http:":
                case "https:":
                case "ftp:":
                case "mailto:":
                case "tel:":
                  return !0;
                default:
                  return !1;
              }
            })(r)
          )
            return r;
        } catch (e) {}
        return null;
      };
      t.removeNullCharacters = function removeNullCharacters(e) {
        if ("string" != typeof e) {
          warn("The argument for removeNullCharacters must be a string.");
          return e;
        }
        return e.replace(i, "");
      };
      t.setVerbosityLevel = function setVerbosityLevel(e) {
        Number.isInteger(e) && (s = e);
      };
      t.shadow = shadow;
      t.string32 = function string32(e) {
        return String.fromCharCode(
          (e >> 24) & 255,
          (e >> 16) & 255,
          (e >> 8) & 255,
          255 & e
        );
      };
      t.stringToBytes = stringToBytes;
      t.stringToPDFString = function stringToPDFString(e) {
        const t = e.length,
          r = [];
        if ("þ" === e[0] && "ÿ" === e[1])
          for (let n = 2; n < t; n += 2)
            r.push(
              String.fromCharCode((e.charCodeAt(n) << 8) | e.charCodeAt(n + 1))
            );
        else if ("ÿ" === e[0] && "þ" === e[1])
          for (let n = 2; n < t; n += 2)
            r.push(
              String.fromCharCode((e.charCodeAt(n + 1) << 8) | e.charCodeAt(n))
            );
        else
          for (let n = 0; n < t; ++n) {
            const t = h[e.charCodeAt(n)];
            r.push(t ? String.fromCharCode(t) : e.charAt(n));
          }
        return r.join("");
      };
      t.stringToUTF8String = function stringToUTF8String(e) {
        return decodeURIComponent(escape(e));
      };
      t.utf8StringToString = function utf8StringToString(e) {
        return unescape(encodeURIComponent(e));
      };
      t.warn = warn;
      t.unreachable = unreachable;
      t.IsEvalSupportedCached =
        t.IsLittleEndianCached =
        t.createObjectURL =
        t.FormatError =
        t.Util =
        t.UnknownErrorException =
        t.UnexpectedResponseException =
        t.TextRenderingMode =
        t.StreamType =
        t.PermissionFlag =
        t.PasswordResponses =
        t.PasswordException =
        t.MissingPDFException =
        t.InvalidPDFException =
        t.AbortException =
        t.CMapCompressionType =
        t.ImageKind =
        t.FontType =
        t.AnnotationType =
        t.AnnotationStateModelType =
        t.AnnotationReviewState =
        t.AnnotationReplyType =
        t.AnnotationMarkedState =
        t.AnnotationFlag =
        t.AnnotationFieldFlag =
        t.AnnotationBorderStyleType =
        t.UNSUPPORTED_FEATURES =
        t.VerbosityLevel =
        t.OPS =
        t.IDENTITY_MATRIX =
        t.FONT_IDENTITY_MATRIX =
        t.BaseException =
          void 0;
      r(3);
      t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
      t.FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
      t.PermissionFlag = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048,
      };
      t.TextRenderingMode = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4,
      };
      t.ImageKind = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 };
      t.AnnotationType = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26,
      };
      t.AnnotationStateModelType = { MARKED: "Marked", REVIEW: "Review" };
      t.AnnotationMarkedState = { MARKED: "Marked", UNMARKED: "Unmarked" };
      t.AnnotationReviewState = {
        ACCEPTED: "Accepted",
        REJECTED: "Rejected",
        CANCELLED: "Cancelled",
        COMPLETED: "Completed",
        NONE: "None",
      };
      t.AnnotationReplyType = { GROUP: "Group", REPLY: "R" };
      t.AnnotationFlag = {
        INVISIBLE: 1,
        HIDDEN: 2,
        PRINT: 4,
        NOZOOM: 8,
        NOROTATE: 16,
        NOVIEW: 32,
        READONLY: 64,
        LOCKED: 128,
        TOGGLENOVIEW: 256,
        LOCKEDCONTENTS: 512,
      };
      t.AnnotationFieldFlag = {
        READONLY: 1,
        REQUIRED: 2,
        NOEXPORT: 4,
        MULTILINE: 4096,
        PASSWORD: 8192,
        NOTOGGLETOOFF: 16384,
        RADIO: 32768,
        PUSHBUTTON: 65536,
        COMBO: 131072,
        EDIT: 262144,
        SORT: 524288,
        FILESELECT: 1048576,
        MULTISELECT: 2097152,
        DONOTSPELLCHECK: 4194304,
        DONOTSCROLL: 8388608,
        COMB: 16777216,
        RICHTEXT: 33554432,
        RADIOSINUNISON: 33554432,
        COMMITONSELCHANGE: 67108864,
      };
      t.AnnotationBorderStyleType = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5,
      };
      t.StreamType = {
        UNKNOWN: "UNKNOWN",
        FLATE: "FLATE",
        LZW: "LZW",
        DCT: "DCT",
        JPX: "JPX",
        JBIG: "JBIG",
        A85: "A85",
        AHX: "AHX",
        CCF: "CCF",
        RLX: "RLX",
      };
      t.FontType = {
        UNKNOWN: "UNKNOWN",
        TYPE1: "TYPE1",
        TYPE1C: "TYPE1C",
        CIDFONTTYPE0: "CIDFONTTYPE0",
        CIDFONTTYPE0C: "CIDFONTTYPE0C",
        TRUETYPE: "TRUETYPE",
        CIDFONTTYPE2: "CIDFONTTYPE2",
        TYPE3: "TYPE3",
        OPENTYPE: "OPENTYPE",
        TYPE0: "TYPE0",
        MMTYPE1: "MMTYPE1",
      };
      const n = { ERRORS: 0, WARNINGS: 1, INFOS: 5 };
      t.VerbosityLevel = n;
      t.CMapCompressionType = { NONE: 0, BINARY: 1, STREAM: 2 };
      t.OPS = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotations: 78,
        endAnnotations: 79,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintJpegXObject: 82,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91,
      };
      t.UNSUPPORTED_FEATURES = {
        unknown: "unknown",
        forms: "forms",
        javaScript: "javaScript",
        smask: "smask",
        shadingPattern: "shadingPattern",
        font: "font",
        errorTilingPattern: "errorTilingPattern",
        errorExtGState: "errorExtGState",
        errorXObject: "errorXObject",
        errorFontLoadType3: "errorFontLoadType3",
        errorFontState: "errorFontState",
        errorFontMissing: "errorFontMissing",
        errorFontTranslate: "errorFontTranslate",
        errorColorSpace: "errorColorSpace",
        errorOperatorList: "errorOperatorList",
        errorFontToUnicode: "errorFontToUnicode",
        errorFontLoadNative: "errorFontLoadNative",
        errorFontGetPath: "errorFontGetPath",
        errorMarkedContent: "errorMarkedContent",
      };
      t.PasswordResponses = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
      let s = n.WARNINGS;
      function warn(e) {
        s >= n.WARNINGS && console.log("Warning: " + e);
      }
      function unreachable(e) {
        throw new Error(e);
      }
      function assert(e, t) {
        e || unreachable(t);
      }
      function shadow(e, t, r) {
        Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !1,
        });
        return r;
      }
      const a = (function BaseExceptionClosure() {
        function BaseException(e) {
          this.constructor === BaseException &&
            unreachable("Cannot initialize BaseException.");
          this.message = e;
          this.name = this.constructor.name;
        }
        BaseException.prototype = new Error();
        BaseException.constructor = BaseException;
        return BaseException;
      })();
      t.BaseException = a;
      t.PasswordException = class PasswordException extends a {
        constructor(e, t) {
          super(e);
          this.code = t;
        }
      };
      t.UnknownErrorException = class UnknownErrorException extends a {
        constructor(e, t) {
          super(e);
          this.details = t;
        }
      };
      t.InvalidPDFException = class InvalidPDFException extends a {};
      t.MissingPDFException = class MissingPDFException extends a {};
      t.UnexpectedResponseException = class UnexpectedResponseException extends (
        a
      ) {
        constructor(e, t) {
          super(e);
          this.status = t;
        }
      };
      t.FormatError = class FormatError extends a {};
      t.AbortException = class AbortException extends a {};
      const i = /\x00/g;
      function stringToBytes(e) {
        assert("string" == typeof e, "Invalid argument for stringToBytes");
        const t = e.length,
          r = new Uint8Array(t);
        for (let n = 0; n < t; ++n) r[n] = 255 & e.charCodeAt(n);
        return r;
      }
      function arrayByteLength(e) {
        if (void 0 !== e.length) return e.length;
        assert(void 0 !== e.byteLength, "arrayByteLength - invalid argument.");
        return e.byteLength;
      }
      const o = {
        get value() {
          return shadow(
            this,
            "value",
            (function isLittleEndian() {
              const e = new Uint8Array(4);
              e[0] = 1;
              return 1 === new Uint32Array(e.buffer, 0, 1)[0];
            })()
          );
        },
      };
      t.IsLittleEndianCached = o;
      const l = {
        get value() {
          return shadow(
            this,
            "value",
            (function isEvalSupported() {
              try {
                new Function("");
                return !0;
              } catch (e) {
                return !1;
              }
            })()
          );
        },
      };
      t.IsEvalSupportedCached = l;
      const c = ["rgb(", 0, ",", 0, ",", 0, ")"];
      class Util {
        static makeCssRgb(e, t, r) {
          c[1] = e;
          c[3] = t;
          c[5] = r;
          return c.join("");
        }
        static transform(e, t) {
          return [
            e[0] * t[0] + e[2] * t[1],
            e[1] * t[0] + e[3] * t[1],
            e[0] * t[2] + e[2] * t[3],
            e[1] * t[2] + e[3] * t[3],
            e[0] * t[4] + e[2] * t[5] + e[4],
            e[1] * t[4] + e[3] * t[5] + e[5],
          ];
        }
        static applyTransform(e, t) {
          return [
            e[0] * t[0] + e[1] * t[2] + t[4],
            e[0] * t[1] + e[1] * t[3] + t[5],
          ];
        }
        static applyInverseTransform(e, t) {
          const r = t[0] * t[3] - t[1] * t[2];
          return [
            (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / r,
            (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / r,
          ];
        }
        static getAxialAlignedBoundingBox(e, t) {
          const r = Util.applyTransform(e, t),
            n = Util.applyTransform(e.slice(2, 4), t),
            s = Util.applyTransform([e[0], e[3]], t),
            a = Util.applyTransform([e[2], e[1]], t);
          return [
            Math.min(r[0], n[0], s[0], a[0]),
            Math.min(r[1], n[1], s[1], a[1]),
            Math.max(r[0], n[0], s[0], a[0]),
            Math.max(r[1], n[1], s[1], a[1]),
          ];
        }
        static inverseTransform(e) {
          const t = e[0] * e[3] - e[1] * e[2];
          return [
            e[3] / t,
            -e[1] / t,
            -e[2] / t,
            e[0] / t,
            (e[2] * e[5] - e[4] * e[3]) / t,
            (e[4] * e[1] - e[5] * e[0]) / t,
          ];
        }
        static apply3dTransform(e, t) {
          return [
            e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
            e[3] * t[0] + e[4] * t[1] + e[5] * t[2],
            e[6] * t[0] + e[7] * t[1] + e[8] * t[2],
          ];
        }
        static singularValueDecompose2dScale(e) {
          const t = [e[0], e[2], e[1], e[3]],
            r = e[0] * t[0] + e[1] * t[2],
            n = e[0] * t[1] + e[1] * t[3],
            s = e[2] * t[0] + e[3] * t[2],
            a = e[2] * t[1] + e[3] * t[3],
            i = (r + a) / 2,
            o = Math.sqrt((r + a) * (r + a) - 4 * (r * a - s * n)) / 2,
            l = i + o || 1,
            c = i - o || 1;
          return [Math.sqrt(l), Math.sqrt(c)];
        }
        static normalizeRect(e) {
          const t = e.slice(0);
          if (e[0] > e[2]) {
            t[0] = e[2];
            t[2] = e[0];
          }
          if (e[1] > e[3]) {
            t[1] = e[3];
            t[3] = e[1];
          }
          return t;
        }
        static intersect(e, t) {
          function compare(e, t) {
            return e - t;
          }
          const r = [e[0], e[2], t[0], t[2]].sort(compare),
            n = [e[1], e[3], t[1], t[3]].sort(compare),
            s = [];
          e = Util.normalizeRect(e);
          t = Util.normalizeRect(t);
          if (
            !(
              (r[0] === e[0] && r[1] === t[0]) ||
              (r[0] === t[0] && r[1] === e[0])
            )
          )
            return null;
          s[0] = r[1];
          s[2] = r[2];
          if (
            !(
              (n[0] === e[1] && n[1] === t[1]) ||
              (n[0] === t[1] && n[1] === e[1])
            )
          )
            return null;
          s[1] = n[1];
          s[3] = n[2];
          return s;
        }
      }
      t.Util = Util;
      const h = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212,
        8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217,
        8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353,
        382, 0, 8364,
      ];
      const d = (function createObjectURLClosure() {
        const e =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        return function createObjectURL(t, r, n = !1) {
          if (!n && URL.createObjectURL) {
            const e = new Blob([t], { type: r });
            return URL.createObjectURL(e);
          }
          let s = `data:${r};base64,`;
          for (let r = 0, n = t.length; r < n; r += 3) {
            const a = 255 & t[r],
              i = 255 & t[r + 1],
              o = 255 & t[r + 2];
            s +=
              e[a >> 2] +
              e[((3 & a) << 4) | (i >> 4)] +
              e[r + 1 < n ? ((15 & i) << 2) | (o >> 6) : 64] +
              e[r + 2 < n ? 63 & o : 64];
          }
          return s;
        };
      })();
      t.createObjectURL = d;
    },
    function (e, t, r) {
      "use strict";
      r(4);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.isNodeJS = void 0;
      const n = !(
        "object" != typeof process ||
        process + "" != "[object process]" ||
        process.versions.nw ||
        (process.versions.electron &&
          process.type &&
          "browser" !== process.type)
      );
      t.isNodeJS = n;
    },
    function (module, exports, __w_pdfjs_require__) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: !0 });
      exports.getDocument = getDocument;
      exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
      exports.build =
        exports.version =
        exports.PDFPageProxy =
        exports.PDFDocumentProxy =
        exports.PDFWorker =
        exports.PDFDataRangeTransport =
        exports.LoopbackPort =
          void 0;
      var _util = __w_pdfjs_require__(2),
        _display_utils = __w_pdfjs_require__(1),
        _font_loader = __w_pdfjs_require__(6),
        _node_utils = __w_pdfjs_require__(7),
        _annotation_storage = __w_pdfjs_require__(8),
        _api_compatibility = __w_pdfjs_require__(9),
        _canvas = __w_pdfjs_require__(10),
        _worker_options = __w_pdfjs_require__(12),
        _is_node = __w_pdfjs_require__(4),
        _message_handler = __w_pdfjs_require__(13),
        _metadata = __w_pdfjs_require__(14),
        _optional_content_config = __w_pdfjs_require__(16),
        _transport_stream = __w_pdfjs_require__(17),
        _webgl = __w_pdfjs_require__(18);
      const DEFAULT_RANGE_CHUNK_SIZE = 65536,
        RENDERING_CANCELLED_TIMEOUT = 100,
        DefaultCanvasFactory = _is_node.isNodeJS
          ? _node_utils.NodeCanvasFactory
          : _display_utils.DOMCanvasFactory,
        DefaultCMapReaderFactory = _is_node.isNodeJS
          ? _node_utils.NodeCMapReaderFactory
          : _display_utils.DOMCMapReaderFactory;
      let createPDFNetworkStream;
      function setPDFNetworkStreamFactory(e) {
        createPDFNetworkStream = e;
      }
      function getDocument(e) {
        const t = new PDFDocumentLoadingTask();
        let r;
        if ("string" == typeof e) r = { url: e };
        else if ((0, _util.isArrayBuffer)(e)) r = { data: e };
        else if (e instanceof PDFDataRangeTransport) r = { range: e };
        else {
          if ("object" != typeof e)
            throw new Error(
              "Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"
            );
          if (!e.url && !e.data && !e.range)
            throw new Error(
              "Invalid parameter object: need either .data, .range or .url"
            );
          r = e;
        }
        const n = Object.create(null);
        let s = null,
          a = null;
        for (const e in r)
          if ("url" !== e || "undefined" == typeof window)
            if ("range" !== e)
              if ("worker" !== e)
                if ("data" !== e || r[e] instanceof Uint8Array) n[e] = r[e];
                else {
                  const t = r[e];
                  if ("string" == typeof t) n[e] = (0, _util.stringToBytes)(t);
                  else if (
                    "object" != typeof t ||
                    null === t ||
                    isNaN(t.length)
                  ) {
                    if (!(0, _util.isArrayBuffer)(t))
                      throw new Error(
                        "Invalid PDF binary data: either typed array, string or array-like object is expected in the data property."
                      );
                    n[e] = new Uint8Array(t);
                  } else n[e] = new Uint8Array(t);
                }
              else a = r[e];
            else s = r[e];
          else n[e] = new URL(r[e], window.location).href;
        n.rangeChunkSize = n.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
        n.CMapReaderFactory = n.CMapReaderFactory || DefaultCMapReaderFactory;
        n.ignoreErrors = !0 !== n.stopAtErrors;
        n.fontExtraProperties = !0 === n.fontExtraProperties;
        n.pdfBug = !0 === n.pdfBug;
        Number.isInteger(n.maxImageSize) || (n.maxImageSize = -1);
        "boolean" != typeof n.isEvalSupported && (n.isEvalSupported = !0);
        "boolean" != typeof n.disableFontFace &&
          (n.disableFontFace =
            _api_compatibility.apiCompatibilityParams.disableFontFace || !1);
        void 0 === n.ownerDocument && (n.ownerDocument = globalThis.document);
        "boolean" != typeof n.disableRange && (n.disableRange = !1);
        "boolean" != typeof n.disableStream && (n.disableStream = !1);
        "boolean" != typeof n.disableAutoFetch && (n.disableAutoFetch = !1);
        (0, _util.setVerbosityLevel)(n.verbosity);
        if (!a) {
          const e = {
            verbosity: n.verbosity,
            port: _worker_options.GlobalWorkerOptions.workerPort,
          };
          a = e.port ? PDFWorker.fromPort(e) : new PDFWorker(e);
          t._worker = a;
        }
        const i = t.docId;
        a.promise
          .then(function () {
            if (t.destroyed) throw new Error("Loading aborted");
            const e = _fetchDocument(a, n, s, i),
              r = new Promise(function (e) {
                let t;
                s
                  ? (t = new _transport_stream.PDFDataTransportStream(
                      {
                        length: n.length,
                        initialData: n.initialData,
                        progressiveDone: n.progressiveDone,
                        disableRange: n.disableRange,
                        disableStream: n.disableStream,
                      },
                      s
                    ))
                  : n.data ||
                    (t = createPDFNetworkStream({
                      url: n.url,
                      length: n.length,
                      httpHeaders: n.httpHeaders,
                      withCredentials: n.withCredentials,
                      rangeChunkSize: n.rangeChunkSize,
                      disableRange: n.disableRange,
                      disableStream: n.disableStream,
                    }));
                e(t);
              });
            return Promise.all([e, r]).then(function ([e, r]) {
              if (t.destroyed) throw new Error("Loading aborted");
              const s = new _message_handler.MessageHandler(i, e, a.port);
              s.postMessageTransfers = a.postMessageTransfers;
              const o = new WorkerTransport(s, t, r, n);
              t._transport = o;
              s.send("Ready", null);
            });
          })
          .catch(t._capability.reject);
        return t;
      }
      function _fetchDocument(e, t, r, n) {
        if (e.destroyed)
          return Promise.reject(new Error("Worker was destroyed"));
        if (r) {
          t.length = r.length;
          t.initialData = r.initialData;
          t.progressiveDone = r.progressiveDone;
        }
        return e.messageHandler
          .sendWithPromise("GetDocRequest", {
            docId: n,
            apiVersion: "2.6.347",
            source: {
              data: t.data,
              url: t.url,
              password: t.password,
              disableAutoFetch: t.disableAutoFetch,
              rangeChunkSize: t.rangeChunkSize,
              length: t.length,
            },
            maxImageSize: t.maxImageSize,
            disableFontFace: t.disableFontFace,
            postMessageTransfers: e.postMessageTransfers,
            docBaseUrl: t.docBaseUrl,
            ignoreErrors: t.ignoreErrors,
            isEvalSupported: t.isEvalSupported,
            fontExtraProperties: t.fontExtraProperties,
          })
          .then(function (t) {
            if (e.destroyed) throw new Error("Worker was destroyed");
            return t;
          });
      }
      const PDFDocumentLoadingTask = (function PDFDocumentLoadingTaskClosure() {
        let e = 0;
        return class PDFDocumentLoadingTask {
          constructor() {
            this._capability = (0, _util.createPromiseCapability)();
            this._transport = null;
            this._worker = null;
            this.docId = "d" + e++;
            this.destroyed = !1;
            this.onPassword = null;
            this.onProgress = null;
            this.onUnsupportedFeature = null;
          }
          get promise() {
            return this._capability.promise;
          }
          destroy() {
            this.destroyed = !0;
            return (
              this._transport ? this._transport.destroy() : Promise.resolve()
            ).then(() => {
              this._transport = null;
              if (this._worker) {
                this._worker.destroy();
                this._worker = null;
              }
            });
          }
        };
      })();
      class PDFDataRangeTransport {
        constructor(e, t, r = !1) {
          this.length = e;
          this.initialData = t;
          this.progressiveDone = r;
          this._rangeListeners = [];
          this._progressListeners = [];
          this._progressiveReadListeners = [];
          this._progressiveDoneListeners = [];
          this._readyCapability = (0, _util.createPromiseCapability)();
        }
        addRangeListener(e) {
          this._rangeListeners.push(e);
        }
        addProgressListener(e) {
          this._progressListeners.push(e);
        }
        addProgressiveReadListener(e) {
          this._progressiveReadListeners.push(e);
        }
        addProgressiveDoneListener(e) {
          this._progressiveDoneListeners.push(e);
        }
        onDataRange(e, t) {
          for (const r of this._rangeListeners) r(e, t);
        }
        onDataProgress(e, t) {
          this._readyCapability.promise.then(() => {
            for (const r of this._progressListeners) r(e, t);
          });
        }
        onDataProgressiveRead(e) {
          this._readyCapability.promise.then(() => {
            for (const t of this._progressiveReadListeners) t(e);
          });
        }
        onDataProgressiveDone() {
          this._readyCapability.promise.then(() => {
            for (const e of this._progressiveDoneListeners) e();
          });
        }
        transportReady() {
          this._readyCapability.resolve();
        }
        requestDataRange(e, t) {
          (0, _util.unreachable)(
            "Abstract method PDFDataRangeTransport.requestDataRange"
          );
        }
        abort() {}
      }
      exports.PDFDataRangeTransport = PDFDataRangeTransport;
      class PDFDocumentProxy {
        constructor(e, t) {
          this._pdfInfo = e;
          this._transport = t;
        }
        get annotationStorage() {
          return (0, _util.shadow)(
            this,
            "annotationStorage",
            new _annotation_storage.AnnotationStorage()
          );
        }
        get numPages() {
          return this._pdfInfo.numPages;
        }
        get fingerprint() {
          return this._pdfInfo.fingerprint;
        }
        getPage(e) {
          return this._transport.getPage(e);
        }
        getPageIndex(e) {
          return this._transport.getPageIndex(e);
        }
        getDestinations() {
          return this._transport.getDestinations();
        }
        getDestination(e) {
          return this._transport.getDestination(e);
        }
        getPageLabels() {
          return this._transport.getPageLabels();
        }
        getPageLayout() {
          return this._transport.getPageLayout();
        }
        getPageMode() {
          return this._transport.getPageMode();
        }
        getViewerPreferences() {
          return this._transport.getViewerPreferences();
        }
        getOpenAction() {
          return this._transport.getOpenAction();
        }
        getAttachments() {
          return this._transport.getAttachments();
        }
        getJavaScript() {
          return this._transport.getJavaScript();
        }
        getOutline() {
          return this._transport.getOutline();
        }
        getOptionalContentConfig() {
          return this._transport.getOptionalContentConfig();
        }
        getPermissions() {
          return this._transport.getPermissions();
        }
        getMetadata() {
          return this._transport.getMetadata();
        }
        getData() {
          return this._transport.getData();
        }
        getDownloadInfo() {
          return this._transport.downloadInfoCapability.promise;
        }
        getStats() {
          return this._transport.getStats();
        }
        cleanup() {
          return this._transport.startCleanup();
        }
        destroy() {
          return this.loadingTask.destroy();
        }
        get loadingParams() {
          return this._transport.loadingParams;
        }
        get loadingTask() {
          return this._transport.loadingTask;
        }
        saveDocument(e) {
          return this._transport.saveDocument(e);
        }
      }
      exports.PDFDocumentProxy = PDFDocumentProxy;
      class PDFPageProxy {
        constructor(e, t, r, n, s = !1) {
          this._pageIndex = e;
          this._pageInfo = t;
          this._ownerDocument = n;
          this._transport = r;
          this._stats = s ? new _display_utils.StatTimer() : null;
          this._pdfBug = s;
          this.commonObjs = r.commonObjs;
          this.objs = new PDFObjects();
          this.cleanupAfterRender = !1;
          this.pendingCleanup = !1;
          this._intentStates = new Map();
          this.destroyed = !1;
        }
        get pageNumber() {
          return this._pageIndex + 1;
        }
        get rotate() {
          return this._pageInfo.rotate;
        }
        get ref() {
          return this._pageInfo.ref;
        }
        get userUnit() {
          return this._pageInfo.userUnit;
        }
        get view() {
          return this._pageInfo.view;
        }
        getViewport({
          scale: e,
          rotation: t = this.rotate,
          offsetX: r = 0,
          offsetY: n = 0,
          dontFlip: s = !1,
        } = {}) {
          return new _display_utils.PageViewport({
            viewBox: this.view,
            scale: e,
            rotation: t,
            offsetX: r,
            offsetY: n,
            dontFlip: s,
          });
        }
        getAnnotations({ intent: e = null } = {}) {
          if (!this.annotationsPromise || this.annotationsIntent !== e) {
            this.annotationsPromise = this._transport.getAnnotations(
              this._pageIndex,
              e
            );
            this.annotationsIntent = e;
          }
          return this.annotationsPromise;
        }
        render({
          canvasContext: e,
          viewport: t,
          intent: r = "display",
          enableWebGL: n = !1,
          renderInteractiveForms: s = !1,
          transform: a = null,
          imageLayer: i = null,
          canvasFactory: o = null,
          background: l = null,
          annotationStorage: c = null,
          optionalContentConfigPromise: h = null,
        }) {
          this._stats && this._stats.time("Overall");
          const d = "print" === r ? "print" : "display";
          this.pendingCleanup = !1;
          h || (h = this._transport.getOptionalContentConfig());
          let u = this._intentStates.get(d);
          if (!u) {
            u = Object.create(null);
            this._intentStates.set(d, u);
          }
          if (u.streamReaderCancelTimeout) {
            clearTimeout(u.streamReaderCancelTimeout);
            u.streamReaderCancelTimeout = null;
          }
          const p =
              o ||
              new DefaultCanvasFactory({ ownerDocument: this._ownerDocument }),
            f = new _webgl.WebGLContext({ enable: n });
          if (!u.displayReadyCapability) {
            u.displayReadyCapability = (0, _util.createPromiseCapability)();
            u.operatorList = { fnArray: [], argsArray: [], lastChunk: !1 };
            this._stats && this._stats.time("Page Request");
            this._pumpOperatorList({
              pageIndex: this._pageIndex,
              intent: d,
              renderInteractiveForms: !0 === s,
              annotationStorage: (c && c.getAll()) || null,
            });
          }
          const complete = (e) => {
              const t = u.renderTasks.indexOf(g);
              t >= 0 && u.renderTasks.splice(t, 1);
              (this.cleanupAfterRender || "print" === d) &&
                (this.pendingCleanup = !0);
              this._tryCleanup();
              if (e) {
                g.capability.reject(e);
                this._abortOperatorList({ intentState: u, reason: e });
              } else g.capability.resolve();
              if (this._stats) {
                this._stats.timeEnd("Rendering");
                this._stats.timeEnd("Overall");
              }
            },
            g = new InternalRenderTask({
              callback: complete,
              params: {
                canvasContext: e,
                viewport: t,
                transform: a,
                imageLayer: i,
                background: l,
              },
              objs: this.objs,
              commonObjs: this.commonObjs,
              operatorList: u.operatorList,
              pageIndex: this._pageIndex,
              canvasFactory: p,
              webGLContext: f,
              useRequestAnimationFrame: "print" !== d,
              pdfBug: this._pdfBug,
            });
          u.renderTasks || (u.renderTasks = []);
          u.renderTasks.push(g);
          const m = g.task;
          Promise.all([u.displayReadyCapability.promise, h])
            .then(([e, t]) => {
              if (this.pendingCleanup) complete();
              else {
                this._stats && this._stats.time("Rendering");
                g.initializeGraphics({
                  transparency: e,
                  optionalContentConfig: t,
                });
                g.operatorListChanged();
              }
            })
            .catch(complete);
          return m;
        }
        getOperatorList() {
          let e,
            t = this._intentStates.get("oplist");
          if (!t) {
            t = Object.create(null);
            this._intentStates.set("oplist", t);
          }
          if (!t.opListReadCapability) {
            e = Object.create(null);
            e.operatorListChanged = function operatorListChanged() {
              if (t.operatorList.lastChunk) {
                t.opListReadCapability.resolve(t.operatorList);
                const r = t.renderTasks.indexOf(e);
                r >= 0 && t.renderTasks.splice(r, 1);
              }
            };
            t.opListReadCapability = (0, _util.createPromiseCapability)();
            t.renderTasks = [];
            t.renderTasks.push(e);
            t.operatorList = { fnArray: [], argsArray: [], lastChunk: !1 };
            this._stats && this._stats.time("Page Request");
            this._pumpOperatorList({
              pageIndex: this._pageIndex,
              intent: "oplist",
            });
          }
          return t.opListReadCapability.promise;
        }
        streamTextContent({
          normalizeWhitespace: e = !1,
          disableCombineTextItems: t = !1,
        } = {}) {
          return this._transport.messageHandler.sendWithStream(
            "GetTextContent",
            {
              pageIndex: this._pageIndex,
              normalizeWhitespace: !0 === e,
              combineTextItems: !0 !== t,
            },
            { highWaterMark: 100, size: (e) => e.items.length }
          );
        }
        getTextContent(e = {}) {
          const t = this.streamTextContent(e);
          return new Promise(function (e, r) {
            const n = t.getReader(),
              s = { items: [], styles: Object.create(null) };
            !(function pump() {
              n.read().then(function ({ value: t, done: r }) {
                if (r) e(s);
                else {
                  Object.assign(s.styles, t.styles);
                  s.items.push(...t.items);
                  pump();
                }
              }, r);
            })();
          });
        }
        _destroy() {
          this.destroyed = !0;
          this._transport.pageCache[this._pageIndex] = null;
          const e = [];
          for (const [t, r] of this._intentStates) {
            this._abortOperatorList({
              intentState: r,
              reason: new Error("Page was destroyed."),
              force: !0,
            });
            if ("oplist" !== t)
              for (const t of r.renderTasks) {
                e.push(t.completed);
                t.cancel();
              }
          }
          this.objs.clear();
          this.annotationsPromise = null;
          this.pendingCleanup = !1;
          return Promise.all(e);
        }
        cleanup(e = !1) {
          this.pendingCleanup = !0;
          return this._tryCleanup(e);
        }
        _tryCleanup(e = !1) {
          if (!this.pendingCleanup) return !1;
          for (const {
            renderTasks: e,
            operatorList: t,
          } of this._intentStates.values())
            if (0 !== e.length || !t.lastChunk) return !1;
          this._intentStates.clear();
          this.objs.clear();
          this.annotationsPromise = null;
          e && this._stats && (this._stats = new _display_utils.StatTimer());
          this.pendingCleanup = !1;
          return !0;
        }
        _startRenderPage(e, t) {
          const r = this._intentStates.get(t);
          if (r) {
            this._stats && this._stats.timeEnd("Page Request");
            r.displayReadyCapability && r.displayReadyCapability.resolve(e);
          }
        }
        _renderPageChunk(e, t) {
          for (let r = 0, n = e.length; r < n; r++) {
            t.operatorList.fnArray.push(e.fnArray[r]);
            t.operatorList.argsArray.push(e.argsArray[r]);
          }
          t.operatorList.lastChunk = e.lastChunk;
          for (let e = 0; e < t.renderTasks.length; e++)
            t.renderTasks[e].operatorListChanged();
          e.lastChunk && this._tryCleanup();
        }
        _pumpOperatorList(e) {
          (0, _util.assert)(
            e.intent,
            'PDFPageProxy._pumpOperatorList: Expected "intent" argument.'
          );
          const t = this._transport.messageHandler
              .sendWithStream("GetOperatorList", e)
              .getReader(),
            r = this._intentStates.get(e.intent);
          r.streamReader = t;
          const pump = () => {
            t.read().then(
              ({ value: e, done: t }) => {
                if (t) r.streamReader = null;
                else if (!this._transport.destroyed) {
                  this._renderPageChunk(e, r);
                  pump();
                }
              },
              (e) => {
                r.streamReader = null;
                if (!this._transport.destroyed) {
                  if (r.operatorList) {
                    r.operatorList.lastChunk = !0;
                    for (let e = 0; e < r.renderTasks.length; e++)
                      r.renderTasks[e].operatorListChanged();
                    this._tryCleanup();
                  }
                  if (r.displayReadyCapability)
                    r.displayReadyCapability.reject(e);
                  else {
                    if (!r.opListReadCapability) throw e;
                    r.opListReadCapability.reject(e);
                  }
                }
              }
            );
          };
          pump();
        }
        _abortOperatorList({ intentState: e, reason: t, force: r = !1 }) {
          (0, _util.assert)(
            t instanceof Error || ("object" == typeof t && null !== t),
            'PDFPageProxy._abortOperatorList: Expected "reason" argument.'
          );
          if (e.streamReader) {
            if (!r) {
              if (0 !== e.renderTasks.length) return;
              if (t instanceof _display_utils.RenderingCancelledException) {
                e.streamReaderCancelTimeout = setTimeout(() => {
                  this._abortOperatorList({
                    intentState: e,
                    reason: t,
                    force: !0,
                  });
                  e.streamReaderCancelTimeout = null;
                }, RENDERING_CANCELLED_TIMEOUT);
                return;
              }
            }
            e.streamReader.cancel(new _util.AbortException(t && t.message));
            e.streamReader = null;
            if (!this._transport.destroyed) {
              for (const [t, r] of this._intentStates)
                if (r === e) {
                  this._intentStates.delete(t);
                  break;
                }
              this.cleanup();
            }
          }
        }
        get stats() {
          return this._stats;
        }
      }
      exports.PDFPageProxy = PDFPageProxy;
      class LoopbackPort {
        constructor(e = !0) {
          this._listeners = [];
          this._defer = e;
          this._deferred = Promise.resolve(void 0);
        }
        postMessage(e, t) {
          if (!this._defer) {
            this._listeners.forEach((t) => {
              t.call(this, { data: e });
            });
            return;
          }
          const r = new WeakMap(),
            n = {
              data: (function cloneValue(e) {
                if ("object" != typeof e || null === e) return e;
                if (r.has(e)) return r.get(e);
                let n, s;
                if ((n = e.buffer) && (0, _util.isArrayBuffer)(n)) {
                  s =
                    t && t.includes(n)
                      ? new e.constructor(n, e.byteOffset, e.byteLength)
                      : new e.constructor(e);
                  r.set(e, s);
                  return s;
                }
                s = Array.isArray(e) ? [] : {};
                r.set(e, s);
                for (const t in e) {
                  let r,
                    n = e;
                  for (; !(r = Object.getOwnPropertyDescriptor(n, t)); )
                    n = Object.getPrototypeOf(n);
                  if (void 0 !== r.value)
                    if ("function" != typeof r.value)
                      s[t] = cloneValue(r.value);
                    else if (e.hasOwnProperty && e.hasOwnProperty(t))
                      throw new Error(
                        "LoopbackPort.postMessage - cannot clone: " + e[t]
                      );
                }
                return s;
              })(e),
            };
          this._deferred.then(() => {
            this._listeners.forEach((e) => {
              e.call(this, n);
            });
          });
        }
        addEventListener(e, t) {
          this._listeners.push(t);
        }
        removeEventListener(e, t) {
          const r = this._listeners.indexOf(t);
          this._listeners.splice(r, 1);
        }
        terminate() {
          this._listeners.length = 0;
        }
      }
      exports.LoopbackPort = LoopbackPort;
      const PDFWorker = (function PDFWorkerClosure() {
        const pdfWorkerPorts = new WeakMap();
        let isWorkerDisabled = !1,
          fallbackWorkerSrc,
          nextFakeWorkerId = 0,
          fakeWorkerCapability;
        if (_is_node.isNodeJS && "function" == typeof require) {
          isWorkerDisabled = !0;
          fallbackWorkerSrc = "./pdf.worker.js";
        } else if ("object" == typeof document && "currentScript" in document) {
          const e = document.currentScript && document.currentScript.src;
          e &&
            (fallbackWorkerSrc = e.replace(
              /(\.(?:min\.)?js)(\?.*)?$/i,
              ".worker$1$2"
            ));
        }
        function getWorkerSrc() {
          if (_worker_options.GlobalWorkerOptions.workerSrc)
            return _worker_options.GlobalWorkerOptions.workerSrc;
          if (void 0 !== fallbackWorkerSrc) {
            _is_node.isNodeJS ||
              (0, _display_utils.deprecated)(
                'No "GlobalWorkerOptions.workerSrc" specified.'
              );
            return fallbackWorkerSrc;
          }
          throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
        }
        function getMainThreadWorkerMessageHandler() {
          let e;
          try {
            e =
              globalThis.pdfjsWorker &&
              globalThis.pdfjsWorker.WorkerMessageHandler;
          } catch (e) {}
          return e || null;
        }
        function setupFakeWorkerGlobal() {
          if (fakeWorkerCapability) return fakeWorkerCapability.promise;
          fakeWorkerCapability = (0, _util.createPromiseCapability)();
          const loader = async function () {
            const mainWorkerMessageHandler =
              getMainThreadWorkerMessageHandler();
            if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
            if (_is_node.isNodeJS && "function" == typeof require) {
              const worker = eval("require")(getWorkerSrc());
              return worker.WorkerMessageHandler;
            }
            await (0, _display_utils.loadScript)(getWorkerSrc());
            return window.pdfjsWorker.WorkerMessageHandler;
          };
          loader().then(
            fakeWorkerCapability.resolve,
            fakeWorkerCapability.reject
          );
          return fakeWorkerCapability.promise;
        }
        function createCDNWrapper(e) {
          const t = "importScripts('" + e + "');";
          return URL.createObjectURL(new Blob([t]));
        }
        class PDFWorker {
          constructor({
            name: e = null,
            port: t = null,
            verbosity: r = (0, _util.getVerbosityLevel)(),
          } = {}) {
            if (t && pdfWorkerPorts.has(t))
              throw new Error("Cannot use more than one PDFWorker per port");
            this.name = e;
            this.destroyed = !1;
            this.postMessageTransfers = !0;
            this.verbosity = r;
            this._readyCapability = (0, _util.createPromiseCapability)();
            this._port = null;
            this._webWorker = null;
            this._messageHandler = null;
            if (t) {
              pdfWorkerPorts.set(t, this);
              this._initializeFromPort(t);
            } else this._initialize();
          }
          get promise() {
            return this._readyCapability.promise;
          }
          get port() {
            return this._port;
          }
          get messageHandler() {
            return this._messageHandler;
          }
          _initializeFromPort(e) {
            this._port = e;
            this._messageHandler = new _message_handler.MessageHandler(
              "main",
              "worker",
              e
            );
            this._messageHandler.on("ready", function () {});
            this._readyCapability.resolve();
          }
          _initialize() {
            if (
              "undefined" != typeof Worker &&
              !isWorkerDisabled &&
              !getMainThreadWorkerMessageHandler()
            ) {
              let e = getWorkerSrc();
              try {
                (0, _util.isSameOrigin)(window.location.href, e) ||
                  (e = createCDNWrapper(new URL(e, window.location).href));
                const t = new Worker(e),
                  r = new _message_handler.MessageHandler("main", "worker", t),
                  terminateEarly = () => {
                    t.removeEventListener("error", onWorkerError);
                    r.destroy();
                    t.terminate();
                    this.destroyed
                      ? this._readyCapability.reject(
                          new Error("Worker was destroyed")
                        )
                      : this._setupFakeWorker();
                  },
                  onWorkerError = () => {
                    this._webWorker || terminateEarly();
                  };
                t.addEventListener("error", onWorkerError);
                r.on("test", (e) => {
                  t.removeEventListener("error", onWorkerError);
                  if (this.destroyed) terminateEarly();
                  else if (e) {
                    this._messageHandler = r;
                    this._port = t;
                    this._webWorker = t;
                    e.supportTransfers || (this.postMessageTransfers = !1);
                    this._readyCapability.resolve();
                    r.send("configure", { verbosity: this.verbosity });
                  } else {
                    this._setupFakeWorker();
                    r.destroy();
                    t.terminate();
                  }
                });
                r.on("ready", (e) => {
                  t.removeEventListener("error", onWorkerError);
                  if (this.destroyed) terminateEarly();
                  else
                    try {
                      sendTest();
                    } catch (e) {
                      this._setupFakeWorker();
                    }
                });
                const sendTest = () => {
                  const e = new Uint8Array([
                    this.postMessageTransfers ? 255 : 0,
                  ]);
                  try {
                    r.send("test", e, [e.buffer]);
                  } catch (t) {
                    (0, _util.warn)("Cannot use postMessage transfers.");
                    e[0] = 0;
                    r.send("test", e);
                  }
                };
                sendTest();
                return;
              } catch (e) {
                (0, _util.info)("The worker has been disabled.");
              }
            }
            this._setupFakeWorker();
          }
          _setupFakeWorker() {
            if (!isWorkerDisabled) {
              (0, _util.warn)("Setting up fake worker.");
              isWorkerDisabled = !0;
            }
            setupFakeWorkerGlobal()
              .then((e) => {
                if (this.destroyed) {
                  this._readyCapability.reject(
                    new Error("Worker was destroyed")
                  );
                  return;
                }
                const t = new LoopbackPort();
                this._port = t;
                const r = "fake" + nextFakeWorkerId++,
                  n = new _message_handler.MessageHandler(r + "_worker", r, t);
                e.setup(n, t);
                const s = new _message_handler.MessageHandler(
                  r,
                  r + "_worker",
                  t
                );
                this._messageHandler = s;
                this._readyCapability.resolve();
                s.send("configure", { verbosity: this.verbosity });
              })
              .catch((e) => {
                this._readyCapability.reject(
                  new Error(`Setting up fake worker failed: "${e.message}".`)
                );
              });
          }
          destroy() {
            this.destroyed = !0;
            if (this._webWorker) {
              this._webWorker.terminate();
              this._webWorker = null;
            }
            pdfWorkerPorts.delete(this._port);
            this._port = null;
            if (this._messageHandler) {
              this._messageHandler.destroy();
              this._messageHandler = null;
            }
          }
          static fromPort(e) {
            if (!e || !e.port)
              throw new Error("PDFWorker.fromPort - invalid method signature.");
            return pdfWorkerPorts.has(e.port)
              ? pdfWorkerPorts.get(e.port)
              : new PDFWorker(e);
          }
          static getWorkerSrc() {
            return getWorkerSrc();
          }
        }
        return PDFWorker;
      })();
      exports.PDFWorker = PDFWorker;
      class WorkerTransport {
        constructor(e, t, r, n) {
          this.messageHandler = e;
          this.loadingTask = t;
          this.commonObjs = new PDFObjects();
          this.fontLoader = new _font_loader.FontLoader({
            docId: t.docId,
            onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
            ownerDocument: n.ownerDocument,
          });
          this._params = n;
          this.CMapReaderFactory = new n.CMapReaderFactory({
            baseUrl: n.cMapUrl,
            isCompressed: n.cMapPacked,
          });
          this.destroyed = !1;
          this.destroyCapability = null;
          this._passwordCapability = null;
          this._networkStream = r;
          this._fullReader = null;
          this._lastProgress = null;
          this.pageCache = [];
          this.pagePromises = [];
          this.downloadInfoCapability = (0, _util.createPromiseCapability)();
          this.setupMessageHandler();
        }
        destroy() {
          if (this.destroyCapability) return this.destroyCapability.promise;
          this.destroyed = !0;
          this.destroyCapability = (0, _util.createPromiseCapability)();
          this._passwordCapability &&
            this._passwordCapability.reject(
              new Error("Worker was destroyed during onPassword callback")
            );
          const e = [];
          this.pageCache.forEach(function (t) {
            t && e.push(t._destroy());
          });
          this.pageCache.length = 0;
          this.pagePromises.length = 0;
          const t = this.messageHandler.sendWithPromise("Terminate", null);
          e.push(t);
          Promise.all(e).then(() => {
            this.fontLoader.clear();
            this._networkStream &&
              this._networkStream.cancelAllRequests(
                new _util.AbortException("Worker was terminated.")
              );
            if (this.messageHandler) {
              this.messageHandler.destroy();
              this.messageHandler = null;
            }
            this.destroyCapability.resolve();
          }, this.destroyCapability.reject);
          return this.destroyCapability.promise;
        }
        setupMessageHandler() {
          const { messageHandler: e, loadingTask: t } = this;
          e.on("GetReader", (e, t) => {
            (0, _util.assert)(
              this._networkStream,
              "GetReader - no `IPDFStream` instance available."
            );
            this._fullReader = this._networkStream.getFullReader();
            this._fullReader.onProgress = (e) => {
              this._lastProgress = { loaded: e.loaded, total: e.total };
            };
            t.onPull = () => {
              this._fullReader
                .read()
                .then(function ({ value: e, done: r }) {
                  if (r) t.close();
                  else {
                    (0, _util.assert)(
                      (0, _util.isArrayBuffer)(e),
                      "GetReader - expected an ArrayBuffer."
                    );
                    t.enqueue(new Uint8Array(e), 1, [e]);
                  }
                })
                .catch((e) => {
                  t.error(e);
                });
            };
            t.onCancel = (e) => {
              this._fullReader.cancel(e);
              t.ready.catch((e) => {
                if (!this.destroyed) throw e;
              });
            };
          });
          e.on("ReaderHeadersReady", (e) => {
            const r = (0, _util.createPromiseCapability)(),
              n = this._fullReader;
            n.headersReady.then(() => {
              if (!n.isStreamingSupported || !n.isRangeSupported) {
                this._lastProgress &&
                  t.onProgress &&
                  t.onProgress(this._lastProgress);
                n.onProgress = (e) => {
                  t.onProgress &&
                    t.onProgress({ loaded: e.loaded, total: e.total });
                };
              }
              r.resolve({
                isStreamingSupported: n.isStreamingSupported,
                isRangeSupported: n.isRangeSupported,
                contentLength: n.contentLength,
              });
            }, r.reject);
            return r.promise;
          });
          e.on("GetRangeReader", (e, t) => {
            (0, _util.assert)(
              this._networkStream,
              "GetRangeReader - no `IPDFStream` instance available."
            );
            const r = this._networkStream.getRangeReader(e.begin, e.end);
            if (r) {
              t.onPull = () => {
                r.read()
                  .then(function ({ value: e, done: r }) {
                    if (r) t.close();
                    else {
                      (0, _util.assert)(
                        (0, _util.isArrayBuffer)(e),
                        "GetRangeReader - expected an ArrayBuffer."
                      );
                      t.enqueue(new Uint8Array(e), 1, [e]);
                    }
                  })
                  .catch((e) => {
                    t.error(e);
                  });
              };
              t.onCancel = (e) => {
                r.cancel(e);
                t.ready.catch((e) => {
                  if (!this.destroyed) throw e;
                });
              };
            } else t.close();
          });
          e.on("GetDoc", ({ pdfInfo: e }) => {
            this._numPages = e.numPages;
            t._capability.resolve(new PDFDocumentProxy(e, this));
          });
          e.on("DocException", function (e) {
            let r;
            switch (e.name) {
              case "PasswordException":
                r = new _util.PasswordException(e.message, e.code);
                break;
              case "InvalidPDFException":
                r = new _util.InvalidPDFException(e.message);
                break;
              case "MissingPDFException":
                r = new _util.MissingPDFException(e.message);
                break;
              case "UnexpectedResponseException":
                r = new _util.UnexpectedResponseException(e.message, e.status);
                break;
              case "UnknownErrorException":
                r = new _util.UnknownErrorException(e.message, e.details);
            }
            if (!(r instanceof Error)) {
              const e = "DocException - expected a valid Error.";
              (0, _util.warn)(e);
            }
            t._capability.reject(r);
          });
          e.on("PasswordRequest", (e) => {
            this._passwordCapability = (0, _util.createPromiseCapability)();
            if (t.onPassword) {
              const updatePassword = (e) => {
                this._passwordCapability.resolve({ password: e });
              };
              try {
                t.onPassword(updatePassword, e.code);
              } catch (e) {
                this._passwordCapability.reject(e);
              }
            } else
              this._passwordCapability.reject(
                new _util.PasswordException(e.message, e.code)
              );
            return this._passwordCapability.promise;
          });
          e.on("DataLoaded", (e) => {
            t.onProgress && t.onProgress({ loaded: e.length, total: e.length });
            this.downloadInfoCapability.resolve(e);
          });
          e.on("StartRenderPage", (e) => {
            if (this.destroyed) return;
            this.pageCache[e.pageIndex]._startRenderPage(
              e.transparency,
              e.intent
            );
          });
          e.on("commonobj", (t) => {
            if (this.destroyed) return;
            const [r, n, s] = t;
            if (!this.commonObjs.has(r))
              switch (n) {
                case "Font":
                  const t = this._params;
                  if ("error" in s) {
                    const e = s.error;
                    (0, _util.warn)("Error during font loading: " + e);
                    this.commonObjs.resolve(r, e);
                    break;
                  }
                  let a = null;
                  t.pdfBug &&
                    globalThis.FontInspector &&
                    globalThis.FontInspector.enabled &&
                    (a = {
                      registerFont(e, t) {
                        globalThis.FontInspector.fontAdded(e, t);
                      },
                    });
                  const i = new _font_loader.FontFaceObject(s, {
                    isEvalSupported: t.isEvalSupported,
                    disableFontFace: t.disableFontFace,
                    ignoreErrors: t.ignoreErrors,
                    onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                    fontRegistry: a,
                  });
                  this.fontLoader
                    .bind(i)
                    .catch((t) => e.sendWithPromise("FontFallback", { id: r }))
                    .finally(() => {
                      !t.fontExtraProperties && i.data && (i.data = null);
                      this.commonObjs.resolve(r, i);
                    });
                  break;
                case "FontPath":
                case "Image":
                  this.commonObjs.resolve(r, s);
                  break;
                default:
                  throw new Error("Got unknown common object type " + n);
              }
          });
          e.on("obj", (e) => {
            if (this.destroyed) return;
            const [t, r, n, s] = e,
              a = this.pageCache[r];
            if (!a.objs.has(t))
              switch (n) {
                case "Image":
                  a.objs.resolve(t, s);
                  const e = 8e6;
                  s &&
                    "data" in s &&
                    s.data.length > e &&
                    (a.cleanupAfterRender = !0);
                  break;
                default:
                  throw new Error("Got unknown object type " + n);
              }
          });
          e.on("DocProgress", (e) => {
            this.destroyed ||
              (t.onProgress &&
                t.onProgress({ loaded: e.loaded, total: e.total }));
          });
          e.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
          e.on("FetchBuiltInCMap", (e, t) => {
            if (this.destroyed) {
              t.error(new Error("Worker was destroyed"));
              return;
            }
            let r = !1;
            t.onPull = () => {
              if (r) t.close();
              else {
                r = !0;
                this.CMapReaderFactory.fetch(e)
                  .then(function (e) {
                    t.enqueue(e, 1, [e.cMapData.buffer]);
                  })
                  .catch(function (e) {
                    t.error(e);
                  });
              }
            };
          });
        }
        _onUnsupportedFeature({ featureId: e }) {
          this.destroyed ||
            (this.loadingTask.onUnsupportedFeature &&
              this.loadingTask.onUnsupportedFeature(e));
        }
        getData() {
          return this.messageHandler.sendWithPromise("GetData", null);
        }
        getPage(e) {
          if (!Number.isInteger(e) || e <= 0 || e > this._numPages)
            return Promise.reject(new Error("Invalid page request"));
          const t = e - 1;
          if (t in this.pagePromises) return this.pagePromises[t];
          const r = this.messageHandler
            .sendWithPromise("GetPage", { pageIndex: t })
            .then((e) => {
              if (this.destroyed) throw new Error("Transport destroyed");
              const r = new PDFPageProxy(
                t,
                e,
                this,
                this._params.ownerDocument,
                this._params.pdfBug
              );
              this.pageCache[t] = r;
              return r;
            });
          this.pagePromises[t] = r;
          return r;
        }
        getPageIndex(e) {
          return this.messageHandler
            .sendWithPromise("GetPageIndex", { ref: e })
            .catch(function (e) {
              return Promise.reject(new Error(e));
            });
        }
        getAnnotations(e, t) {
          return this.messageHandler.sendWithPromise("GetAnnotations", {
            pageIndex: e,
            intent: t,
          });
        }
        saveDocument(e) {
          return this.messageHandler
            .sendWithPromise("SaveDocument", {
              numPages: this._numPages,
              annotationStorage: (e && e.getAll()) || null,
              filename: this._fullReader ? this._fullReader.filename : null,
            })
            .finally(() => {
              e && e.resetModified();
            });
        }
        getDestinations() {
          return this.messageHandler.sendWithPromise("GetDestinations", null);
        }
        getDestination(e) {
          return "string" != typeof e
            ? Promise.reject(new Error("Invalid destination request."))
            : this.messageHandler.sendWithPromise("GetDestination", { id: e });
        }
        getPageLabels() {
          return this.messageHandler.sendWithPromise("GetPageLabels", null);
        }
        getPageLayout() {
          return this.messageHandler.sendWithPromise("GetPageLayout", null);
        }
        getPageMode() {
          return this.messageHandler.sendWithPromise("GetPageMode", null);
        }
        getViewerPreferences() {
          return this.messageHandler.sendWithPromise(
            "GetViewerPreferences",
            null
          );
        }
        getOpenAction() {
          return this.messageHandler.sendWithPromise("GetOpenAction", null);
        }
        getAttachments() {
          return this.messageHandler.sendWithPromise("GetAttachments", null);
        }
        getJavaScript() {
          return this.messageHandler.sendWithPromise("GetJavaScript", null);
        }
        getOutline() {
          return this.messageHandler.sendWithPromise("GetOutline", null);
        }
        getOptionalContentConfig() {
          return this.messageHandler
            .sendWithPromise("GetOptionalContentConfig", null)
            .then((e) => new _optional_content_config.OptionalContentConfig(e));
        }
        getPermissions() {
          return this.messageHandler.sendWithPromise("GetPermissions", null);
        }
        getMetadata() {
          return this.messageHandler
            .sendWithPromise("GetMetadata", null)
            .then((e) => ({
              info: e[0],
              metadata: e[1] ? new _metadata.Metadata(e[1]) : null,
              contentDispositionFilename: this._fullReader
                ? this._fullReader.filename
                : null,
            }));
        }
        getStats() {
          return this.messageHandler.sendWithPromise("GetStats", null);
        }
        startCleanup() {
          return this.messageHandler
            .sendWithPromise("Cleanup", null)
            .then(() => {
              for (let e = 0, t = this.pageCache.length; e < t; e++) {
                const t = this.pageCache[e];
                if (t) {
                  if (!t.cleanup())
                    throw new Error(
                      `startCleanup: Page ${e + 1} is currently rendering.`
                    );
                }
              }
              this.commonObjs.clear();
              this.fontLoader.clear();
            });
        }
        get loadingParams() {
          const e = this._params;
          return (0, _util.shadow)(this, "loadingParams", {
            disableAutoFetch: e.disableAutoFetch,
            disableFontFace: e.disableFontFace,
          });
        }
      }
      class PDFObjects {
        constructor() {
          this._objs = Object.create(null);
        }
        _ensureObj(e) {
          return this._objs[e]
            ? this._objs[e]
            : (this._objs[e] = {
                capability: (0, _util.createPromiseCapability)(),
                data: null,
                resolved: !1,
              });
        }
        get(e, t = null) {
          if (t) {
            this._ensureObj(e).capability.promise.then(t);
            return null;
          }
          const r = this._objs[e];
          if (!r || !r.resolved)
            throw new Error(`Requesting object that isn't resolved yet ${e}.`);
          return r.data;
        }
        has(e) {
          const t = this._objs[e];
          return !!t && t.resolved;
        }
        resolve(e, t) {
          const r = this._ensureObj(e);
          r.resolved = !0;
          r.data = t;
          r.capability.resolve(t);
        }
        clear() {
          this._objs = Object.create(null);
        }
      }
      class RenderTask {
        constructor(e) {
          this._internalRenderTask = e;
          this.onContinue = null;
        }
        get promise() {
          return this._internalRenderTask.capability.promise;
        }
        cancel() {
          this._internalRenderTask.cancel();
        }
      }
      const InternalRenderTask = (function InternalRenderTaskClosure() {
          const e = new WeakSet();
          return class InternalRenderTask {
            constructor({
              callback: e,
              params: t,
              objs: r,
              commonObjs: n,
              operatorList: s,
              pageIndex: a,
              canvasFactory: i,
              webGLContext: o,
              useRequestAnimationFrame: l = !1,
              pdfBug: c = !1,
            }) {
              this.callback = e;
              this.params = t;
              this.objs = r;
              this.commonObjs = n;
              this.operatorListIdx = null;
              this.operatorList = s;
              this._pageIndex = a;
              this.canvasFactory = i;
              this.webGLContext = o;
              this._pdfBug = c;
              this.running = !1;
              this.graphicsReadyCallback = null;
              this.graphicsReady = !1;
              this._useRequestAnimationFrame =
                !0 === l && "undefined" != typeof window;
              this.cancelled = !1;
              this.capability = (0, _util.createPromiseCapability)();
              this.task = new RenderTask(this);
              this._continueBound = this._continue.bind(this);
              this._scheduleNextBound = this._scheduleNext.bind(this);
              this._nextBound = this._next.bind(this);
              this._canvas = t.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function () {});
            }
            initializeGraphics({
              transparency: t = !1,
              optionalContentConfig: r,
            }) {
              if (this.cancelled) return;
              if (this._canvas) {
                if (e.has(this._canvas))
                  throw new Error(
                    "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed."
                  );
                e.add(this._canvas);
              }
              if (
                this._pdfBug &&
                globalThis.StepperManager &&
                globalThis.StepperManager.enabled
              ) {
                this.stepper = globalThis.StepperManager.create(
                  this._pageIndex
                );
                this.stepper.init(this.operatorList);
                this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint();
              }
              const {
                canvasContext: n,
                viewport: s,
                transform: a,
                imageLayer: i,
                background: o,
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(
                n,
                this.commonObjs,
                this.objs,
                this.canvasFactory,
                this.webGLContext,
                i,
                r
              );
              this.gfx.beginDrawing({
                transform: a,
                viewport: s,
                transparency: t,
                background: o,
              });
              this.operatorListIdx = 0;
              this.graphicsReady = !0;
              this.graphicsReadyCallback && this.graphicsReadyCallback();
            }
            cancel(t = null) {
              this.running = !1;
              this.cancelled = !0;
              this.gfx && this.gfx.endDrawing();
              this._canvas && e.delete(this._canvas);
              this.callback(
                t ||
                  new _display_utils.RenderingCancelledException(
                    "Rendering cancelled, page " + (this._pageIndex + 1),
                    "canvas"
                  )
              );
            }
            operatorListChanged() {
              if (this.graphicsReady) {
                this.stepper &&
                  this.stepper.updateOperatorList(this.operatorList);
                this.running || this._continue();
              } else
                this.graphicsReadyCallback ||
                  (this.graphicsReadyCallback = this._continueBound);
            }
            _continue() {
              this.running = !0;
              this.cancelled ||
                (this.task.onContinue
                  ? this.task.onContinue(this._scheduleNextBound)
                  : this._scheduleNext());
            }
            _scheduleNext() {
              this._useRequestAnimationFrame
                ? window.requestAnimationFrame(() => {
                    this._nextBound().catch(this.cancel.bind(this));
                  })
                : Promise.resolve()
                    .then(this._nextBound)
                    .catch(this.cancel.bind(this));
            }
            async _next() {
              if (!this.cancelled) {
                this.operatorListIdx = this.gfx.executeOperatorList(
                  this.operatorList,
                  this.operatorListIdx,
                  this._continueBound,
                  this.stepper
                );
                if (
                  this.operatorListIdx === this.operatorList.argsArray.length
                ) {
                  this.running = !1;
                  if (this.operatorList.lastChunk) {
                    this.gfx.endDrawing();
                    this._canvas && e.delete(this._canvas);
                    this.callback();
                  }
                }
              }
            }
          };
        })(),
        version = "2.6.347";
      exports.version = version;
      const build = "3be9c65f";
      exports.build = build;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.FontLoader = t.FontFaceObject = void 0;
      var n = r(2);
      class BaseFontLoader {
        constructor({
          docId: e,
          onUnsupportedFeature: t,
          ownerDocument: r = globalThis.document,
        }) {
          this.constructor === BaseFontLoader &&
            (0, n.unreachable)("Cannot initialize BaseFontLoader.");
          this.docId = e;
          this._onUnsupportedFeature = t;
          this._document = r;
          this.nativeFontFaces = [];
          this.styleElement = null;
        }
        addNativeFontFace(e) {
          this.nativeFontFaces.push(e);
          this._document.fonts.add(e);
        }
        insertRule(e) {
          let t = this.styleElement;
          if (!t) {
            t = this.styleElement = this._document.createElement("style");
            t.id = "PDFJS_FONT_STYLE_TAG_" + this.docId;
            this._document.documentElement
              .getElementsByTagName("head")[0]
              .appendChild(t);
          }
          const r = t.sheet;
          r.insertRule(e, r.cssRules.length);
        }
        clear() {
          this.nativeFontFaces.forEach((e) => {
            this._document.fonts.delete(e);
          });
          this.nativeFontFaces.length = 0;
          if (this.styleElement) {
            this.styleElement.remove();
            this.styleElement = null;
          }
        }
        async bind(e) {
          if (e.attached || e.missingFile) return;
          e.attached = !0;
          if (this.isFontLoadingAPISupported) {
            const t = e.createNativeFontFace();
            if (t) {
              this.addNativeFontFace(t);
              try {
                await t.loaded;
              } catch (r) {
                this._onUnsupportedFeature({
                  featureId: n.UNSUPPORTED_FEATURES.errorFontLoadNative,
                });
                (0, n.warn)(`Failed to load font '${t.family}': '${r}'.`);
                e.disableFontFace = !0;
                throw r;
              }
            }
            return;
          }
          const t = e.createFontFaceRule();
          if (t) {
            this.insertRule(t);
            if (this.isSyncFontLoadingSupported) return;
            await new Promise((r) => {
              const n = this._queueLoadingCallback(r);
              this._prepareFontLoadEvent([t], [e], n);
            });
          }
        }
        _queueLoadingCallback(e) {
          (0, n.unreachable)("Abstract method `_queueLoadingCallback`.");
        }
        get isFontLoadingAPISupported() {
          const e = void 0 !== this._document && !!this._document.fonts;
          return (0, n.shadow)(this, "isFontLoadingAPISupported", e);
        }
        get isSyncFontLoadingSupported() {
          (0, n.unreachable)("Abstract method `isSyncFontLoadingSupported`.");
        }
        get _loadTestFont() {
          (0, n.unreachable)("Abstract method `_loadTestFont`.");
        }
        _prepareFontLoadEvent(e, t, r) {
          (0, n.unreachable)("Abstract method `_prepareFontLoadEvent`.");
        }
      }
      let s;
      t.FontLoader = s;
      t.FontLoader = s = class GenericFontLoader extends BaseFontLoader {
        constructor(e) {
          super(e);
          this.loadingContext = { requests: [], nextRequestId: 0 };
          this.loadTestFontId = 0;
        }
        get isSyncFontLoadingSupported() {
          let e = !1;
          if ("undefined" == typeof navigator) e = !0;
          else {
            const t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(
              navigator.userAgent
            );
            t && t[1] >= 14 && (e = !0);
          }
          return (0, n.shadow)(this, "isSyncFontLoadingSupported", e);
        }
        _queueLoadingCallback(e) {
          const t = this.loadingContext,
            r = {
              id: "pdfjs-font-loading-" + t.nextRequestId++,
              done: !1,
              complete: function completeRequest() {
                (0, n.assert)(
                  !r.done,
                  "completeRequest() cannot be called twice."
                );
                r.done = !0;
                for (; t.requests.length > 0 && t.requests[0].done; ) {
                  const e = t.requests.shift();
                  setTimeout(e.callback, 0);
                }
              },
              callback: e,
            };
          t.requests.push(r);
          return r;
        }
        get _loadTestFont() {
          return (0, n.shadow)(
            this,
            "_loadTestFont",
            atob(
              "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="
            )
          );
        }
        _prepareFontLoadEvent(e, t, r) {
          function int32(e, t) {
            return (
              (e.charCodeAt(t) << 24) |
              (e.charCodeAt(t + 1) << 16) |
              (e.charCodeAt(t + 2) << 8) |
              (255 & e.charCodeAt(t + 3))
            );
          }
          function spliceString(e, t, r, n) {
            return e.substring(0, t) + n + e.substring(t + r);
          }
          let s, a;
          const i = this._document.createElement("canvas");
          i.width = 1;
          i.height = 1;
          const o = i.getContext("2d");
          let l = 0;
          const c = `lt${Date.now()}${this.loadTestFontId++}`;
          let h = this._loadTestFont;
          h = spliceString(h, 976, c.length, c);
          let d = int32(h, 16);
          for (s = 0, a = c.length - 3; s < a; s += 4)
            d = (d - 1482184792 + int32(c, s)) | 0;
          s < c.length && (d = (d - 1482184792 + int32(c + "XXX", s)) | 0);
          h = spliceString(h, 16, 4, (0, n.string32)(d));
          const u = `@font-face {font-family:"${c}";src:${`url(data:font/opentype;base64,${btoa(
            h
          )});`}}`;
          this.insertRule(u);
          const p = [];
          for (s = 0, a = t.length; s < a; s++) p.push(t[s].loadedName);
          p.push(c);
          const f = this._document.createElement("div");
          f.style.visibility = "hidden";
          f.style.width = f.style.height = "10px";
          f.style.position = "absolute";
          f.style.top = f.style.left = "0px";
          for (s = 0, a = p.length; s < a; ++s) {
            const e = this._document.createElement("span");
            e.textContent = "Hi";
            e.style.fontFamily = p[s];
            f.appendChild(e);
          }
          this._document.body.appendChild(f);
          !(function isFontReady(e, t) {
            l++;
            if (l > 30) {
              (0, n.warn)("Load test font never loaded.");
              t();
              return;
            }
            o.font = "30px " + e;
            o.fillText(".", 0, 20);
            o.getImageData(0, 0, 1, 1).data[3] > 0
              ? t()
              : setTimeout(isFontReady.bind(null, e, t));
          })(c, () => {
            this._document.body.removeChild(f);
            r.complete();
          });
        }
      };
      t.FontFaceObject = class FontFaceObject {
        constructor(
          e,
          {
            isEvalSupported: t = !0,
            disableFontFace: r = !1,
            ignoreErrors: n = !1,
            onUnsupportedFeature: s = null,
            fontRegistry: a = null,
          }
        ) {
          this.compiledGlyphs = Object.create(null);
          for (const t in e) this[t] = e[t];
          this.isEvalSupported = !1 !== t;
          this.disableFontFace = !0 === r;
          this.ignoreErrors = !0 === n;
          this._onUnsupportedFeature = s;
          this.fontRegistry = a;
        }
        createNativeFontFace() {
          if (!this.data || this.disableFontFace) return null;
          const e = new FontFace(this.loadedName, this.data, {});
          this.fontRegistry && this.fontRegistry.registerFont(this);
          return e;
        }
        createFontFaceRule() {
          if (!this.data || this.disableFontFace) return null;
          const e = (0, n.bytesToString)(new Uint8Array(this.data)),
            t = `url(data:${this.mimetype};base64,${btoa(e)});`,
            r = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
          this.fontRegistry && this.fontRegistry.registerFont(this, t);
          return r;
        }
        getPathGenerator(e, t) {
          if (void 0 !== this.compiledGlyphs[t]) return this.compiledGlyphs[t];
          let r, s;
          try {
            r = e.get(this.loadedName + "_path_" + t);
          } catch (e) {
            if (!this.ignoreErrors) throw e;
            this._onUnsupportedFeature &&
              this._onUnsupportedFeature({
                featureId: n.UNSUPPORTED_FEATURES.errorFontGetPath,
              });
            (0, n.warn)(`getPathGenerator - ignoring character: "${e}".`);
            return (this.compiledGlyphs[t] = function (e, t) {});
          }
          if (this.isEvalSupported && n.IsEvalSupportedCached.value) {
            let e,
              n = "";
            for (let t = 0, a = r.length; t < a; t++) {
              s = r[t];
              e = void 0 !== s.args ? s.args.join(",") : "";
              n += "c." + s.cmd + "(" + e + ");\n";
            }
            return (this.compiledGlyphs[t] = new Function("c", "size", n));
          }
          return (this.compiledGlyphs[t] = function (e, t) {
            for (let n = 0, a = r.length; n < a; n++) {
              s = r[n];
              "scale" === s.cmd && (s.args = [t, -t]);
              e[s.cmd].apply(e, s.args);
            }
          });
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.NodeCMapReaderFactory = t.NodeCanvasFactory = void 0;
      var n = r(1),
        s = r(4),
        a = r(2);
      let i = class {
        constructor() {
          (0, a.unreachable)("Not implemented: NodeCanvasFactory");
        }
      };
      t.NodeCanvasFactory = i;
      let o = class {
        constructor() {
          (0, a.unreachable)("Not implemented: NodeCMapReaderFactory");
        }
      };
      t.NodeCMapReaderFactory = o;
      if (s.isNodeJS) {
        t.NodeCanvasFactory = i = class extends n.BaseCanvasFactory {
          create(e, t) {
            if (e <= 0 || t <= 0) throw new Error("Invalid canvas size");
            const r = require("canvas").createCanvas(e, t);
            return { canvas: r, context: r.getContext("2d") };
          }
        };
        t.NodeCMapReaderFactory = o = class extends n.BaseCMapReaderFactory {
          _fetchData(e, t) {
            return new Promise((r, n) => {
              require("fs").readFile(e, (e, s) => {
                !e && s
                  ? r({ cMapData: new Uint8Array(s), compressionType: t })
                  : n(new Error(e));
              });
            });
          }
        };
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.AnnotationStorage = void 0;
      t.AnnotationStorage = class AnnotationStorage {
        constructor() {
          this._storage = new Map();
          this._modified = !1;
          this.onSetModified = null;
          this.onResetModified = null;
        }
        getOrCreateValue(e, t) {
          if (this._storage.has(e)) return this._storage.get(e);
          this._storage.set(e, t);
          return t;
        }
        setValue(e, t) {
          this._storage.get(e) !== t && this._setModified();
          this._storage.set(e, t);
        }
        getAll() {
          return 0 === this._storage.size
            ? null
            : Object.fromEntries(this._storage);
        }
        get size() {
          return this._storage.size;
        }
        _setModified() {
          if (!this._modified) {
            this._modified = !0;
            "function" == typeof this.onSetModified && this.onSetModified();
          }
        }
        resetModified() {
          if (this._modified) {
            this._modified = !1;
            "function" == typeof this.onResetModified && this.onResetModified();
          }
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.apiCompatibilityParams = void 0;
      var n = r(4);
      const s = Object.create(null);
      !(function checkFontFace() {
        n.isNodeJS && (s.disableFontFace = !0);
      })();
      const a = Object.freeze(s);
      t.apiCompatibilityParams = a;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.CanvasGraphics = void 0;
      var n = r(2),
        s = r(11);
      function addContextCurrentTransform(e) {
        if (!e.mozCurrentTransform) {
          e._originalSave = e.save;
          e._originalRestore = e.restore;
          e._originalRotate = e.rotate;
          e._originalScale = e.scale;
          e._originalTranslate = e.translate;
          e._originalTransform = e.transform;
          e._originalSetTransform = e.setTransform;
          e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0];
          e._transformStack = [];
          Object.defineProperty(e, "mozCurrentTransform", {
            get: function getCurrentTransform() {
              return this._transformMatrix;
            },
          });
          Object.defineProperty(e, "mozCurrentTransformInverse", {
            get: function getCurrentTransformInverse() {
              var e = this._transformMatrix,
                t = e[0],
                r = e[1],
                n = e[2],
                s = e[3],
                a = e[4],
                i = e[5],
                o = t * s - r * n,
                l = r * n - t * s;
              return [
                s / o,
                r / l,
                n / l,
                t / o,
                (s * a - n * i) / l,
                (r * a - t * i) / o,
              ];
            },
          });
          e.save = function ctxSave() {
            var e = this._transformMatrix;
            this._transformStack.push(e);
            this._transformMatrix = e.slice(0, 6);
            this._originalSave();
          };
          e.restore = function ctxRestore() {
            var e = this._transformStack.pop();
            if (e) {
              this._transformMatrix = e;
              this._originalRestore();
            }
          };
          e.translate = function ctxTranslate(e, t) {
            var r = this._transformMatrix;
            r[4] = r[0] * e + r[2] * t + r[4];
            r[5] = r[1] * e + r[3] * t + r[5];
            this._originalTranslate(e, t);
          };
          e.scale = function ctxScale(e, t) {
            var r = this._transformMatrix;
            r[0] = r[0] * e;
            r[1] = r[1] * e;
            r[2] = r[2] * t;
            r[3] = r[3] * t;
            this._originalScale(e, t);
          };
          e.transform = function ctxTransform(t, r, n, s, a, i) {
            var o = this._transformMatrix;
            this._transformMatrix = [
              o[0] * t + o[2] * r,
              o[1] * t + o[3] * r,
              o[0] * n + o[2] * s,
              o[1] * n + o[3] * s,
              o[0] * a + o[2] * i + o[4],
              o[1] * a + o[3] * i + o[5],
            ];
            e._originalTransform(t, r, n, s, a, i);
          };
          e.setTransform = function ctxSetTransform(t, r, n, s, a, i) {
            this._transformMatrix = [t, r, n, s, a, i];
            e._originalSetTransform(t, r, n, s, a, i);
          };
          e.rotate = function ctxRotate(e) {
            var t = Math.cos(e),
              r = Math.sin(e),
              n = this._transformMatrix;
            this._transformMatrix = [
              n[0] * t + n[2] * r,
              n[1] * t + n[3] * r,
              n[0] * -r + n[2] * t,
              n[1] * -r + n[3] * t,
              n[4],
              n[5],
            ];
            this._originalRotate(e);
          };
        }
      }
      var a = (function CachedCanvasesClosure() {
        function CachedCanvases(e) {
          this.canvasFactory = e;
          this.cache = Object.create(null);
        }
        CachedCanvases.prototype = {
          getCanvas: function CachedCanvases_getCanvas(e, t, r, n) {
            var s;
            if (void 0 !== this.cache[e]) {
              s = this.cache[e];
              this.canvasFactory.reset(s, t, r);
              s.context.setTransform(1, 0, 0, 1, 0, 0);
            } else {
              s = this.canvasFactory.create(t, r);
              this.cache[e] = s;
            }
            n && addContextCurrentTransform(s.context);
            return s;
          },
          clear() {
            for (var e in this.cache) {
              var t = this.cache[e];
              this.canvasFactory.destroy(t);
              delete this.cache[e];
            }
          },
        };
        return CachedCanvases;
      })();
      var i = (function CanvasExtraStateClosure() {
          function CanvasExtraState() {
            this.alphaIsShape = !1;
            this.fontSize = 0;
            this.fontSizeScale = 1;
            this.textMatrix = n.IDENTITY_MATRIX;
            this.textMatrixScale = 1;
            this.fontMatrix = n.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRenderingMode = n.TextRenderingMode.FILL;
            this.textRise = 0;
            this.fillColor = "#000000";
            this.strokeColor = "#000000";
            this.patternFill = !1;
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.activeSMask = null;
            this.resumeSMaskCtx = null;
            this.transferMaps = null;
          }
          CanvasExtraState.prototype = {
            clone: function CanvasExtraState_clone() {
              return Object.create(this);
            },
            setCurrentPoint: function CanvasExtraState_setCurrentPoint(e, t) {
              this.x = e;
              this.y = t;
            },
          };
          return CanvasExtraState;
        })(),
        o = (function CanvasGraphicsClosure() {
          function CanvasGraphics(e, t, r, n, s, o, l) {
            this.ctx = e;
            this.current = new i();
            this.stateStack = [];
            this.pendingClip = null;
            this.pendingEOFill = !1;
            this.res = null;
            this.xobjs = null;
            this.commonObjs = t;
            this.objs = r;
            this.canvasFactory = n;
            this.webGLContext = s;
            this.imageLayer = o;
            this.groupStack = [];
            this.processingType3 = null;
            this.baseTransform = null;
            this.baseTransformStack = [];
            this.groupLevel = 0;
            this.smaskStack = [];
            this.smaskCounter = 0;
            this.tempSMask = null;
            this.contentVisible = !0;
            this.markedContentStack = [];
            this.optionalContentConfig = l;
            this.cachedCanvases = new a(this.canvasFactory);
            e && addContextCurrentTransform(e);
            this._cachedGetSinglePixelWidth = null;
          }
          function putBinaryImageData(e, t, r = null) {
            if ("undefined" != typeof ImageData && t instanceof ImageData) {
              e.putImageData(t, 0, 0);
              return;
            }
            var s,
              a,
              i,
              o,
              l,
              c = t.height,
              h = t.width,
              d = c % 16,
              u = (c - d) / 16,
              p = 0 === d ? u : u + 1,
              f = e.createImageData(h, 16),
              g = 0,
              m = t.data,
              _ = f.data;
            let A, b, y, v;
            if (r)
              switch (r.length) {
                case 1:
                  A = r[0];
                  b = r[0];
                  y = r[0];
                  v = r[0];
                  break;
                case 4:
                  A = r[0];
                  b = r[1];
                  y = r[2];
                  v = r[3];
              }
            if (t.kind === n.ImageKind.GRAYSCALE_1BPP) {
              var C = m.byteLength,
                S = new Uint32Array(_.buffer, 0, _.byteLength >> 2),
                x = S.length,
                P = (h + 7) >> 3,
                k = 4294967295,
                R = n.IsLittleEndianCached.value ? 4278190080 : 255;
              v && 255 === v[0] && 0 === v[255] && ([k, R] = [R, k]);
              for (a = 0; a < p; a++) {
                o = a < u ? 16 : d;
                s = 0;
                for (i = 0; i < o; i++) {
                  var w = C - g;
                  let e = 0;
                  for (
                    var T = w > P ? h : 8 * w - 7, E = -8 & T, F = 0, L = 0;
                    e < E;
                    e += 8
                  ) {
                    L = m[g++];
                    S[s++] = 128 & L ? k : R;
                    S[s++] = 64 & L ? k : R;
                    S[s++] = 32 & L ? k : R;
                    S[s++] = 16 & L ? k : R;
                    S[s++] = 8 & L ? k : R;
                    S[s++] = 4 & L ? k : R;
                    S[s++] = 2 & L ? k : R;
                    S[s++] = 1 & L ? k : R;
                  }
                  for (; e < T; e++) {
                    if (0 === F) {
                      L = m[g++];
                      F = 128;
                    }
                    S[s++] = L & F ? k : R;
                    F >>= 1;
                  }
                }
                for (; s < x; ) S[s++] = 0;
                e.putImageData(f, 0, 16 * a);
              }
            } else if (t.kind === n.ImageKind.RGBA_32BPP) {
              const t = !!(A || b || y);
              i = 0;
              l = 16 * h * 4;
              for (a = 0; a < u; a++) {
                _.set(m.subarray(g, g + l));
                g += l;
                if (t)
                  for (let e = 0; e < l; e += 4) {
                    A && (_[e + 0] = A[_[e + 0]]);
                    b && (_[e + 1] = b[_[e + 1]]);
                    y && (_[e + 2] = y[_[e + 2]]);
                  }
                e.putImageData(f, 0, i);
                i += 16;
              }
              if (a < p) {
                l = h * d * 4;
                _.set(m.subarray(g, g + l));
                if (t)
                  for (let e = 0; e < l; e += 4) {
                    A && (_[e + 0] = A[_[e + 0]]);
                    b && (_[e + 1] = b[_[e + 1]]);
                    y && (_[e + 2] = y[_[e + 2]]);
                  }
                e.putImageData(f, 0, i);
              }
            } else {
              if (t.kind !== n.ImageKind.RGB_24BPP)
                throw new Error("bad image kind: " + t.kind);
              {
                const t = !!(A || b || y);
                l = h * (o = 16);
                for (a = 0; a < p; a++) {
                  a >= u && (l = h * (o = d));
                  s = 0;
                  for (i = l; i--; ) {
                    _[s++] = m[g++];
                    _[s++] = m[g++];
                    _[s++] = m[g++];
                    _[s++] = 255;
                  }
                  if (t)
                    for (let e = 0; e < s; e += 4) {
                      A && (_[e + 0] = A[_[e + 0]]);
                      b && (_[e + 1] = b[_[e + 1]]);
                      y && (_[e + 2] = y[_[e + 2]]);
                    }
                  e.putImageData(f, 0, 16 * a);
                }
              }
            }
          }
          function putBinaryImageMask(e, t) {
            for (
              var r = t.height,
                n = t.width,
                s = r % 16,
                a = (r - s) / 16,
                i = 0 === s ? a : a + 1,
                o = e.createImageData(n, 16),
                l = 0,
                c = t.data,
                h = o.data,
                d = 0;
              d < i;
              d++
            ) {
              for (var u = d < a ? 16 : s, p = 3, f = 0; f < u; f++)
                for (var g = 0, m = 0; m < n; m++) {
                  if (!g) {
                    var _ = c[l++];
                    g = 128;
                  }
                  h[p] = _ & g ? 0 : 255;
                  p += 4;
                  g >>= 1;
                }
              e.putImageData(o, 0, 16 * d);
            }
          }
          function copyCtxState(e, t) {
            for (
              var r = [
                  "strokeStyle",
                  "fillStyle",
                  "fillRule",
                  "globalAlpha",
                  "lineWidth",
                  "lineCap",
                  "lineJoin",
                  "miterLimit",
                  "globalCompositeOperation",
                  "font",
                ],
                n = 0,
                s = r.length;
              n < s;
              n++
            ) {
              var a = r[n];
              void 0 !== e[a] && (t[a] = e[a]);
            }
            if (void 0 !== e.setLineDash) {
              t.setLineDash(e.getLineDash());
              t.lineDashOffset = e.lineDashOffset;
            }
          }
          function resetCtxToDefault(e) {
            e.strokeStyle = "#000000";
            e.fillStyle = "#000000";
            e.fillRule = "nonzero";
            e.globalAlpha = 1;
            e.lineWidth = 1;
            e.lineCap = "butt";
            e.lineJoin = "miter";
            e.miterLimit = 10;
            e.globalCompositeOperation = "source-over";
            e.font = "10px sans-serif";
            if (void 0 !== e.setLineDash) {
              e.setLineDash([]);
              e.lineDashOffset = 0;
            }
          }
          function composeSMaskBackdrop(e, t, r, n) {
            for (var s = e.length, a = 3; a < s; a += 4) {
              var i = e[a];
              if (0 === i) {
                e[a - 3] = t;
                e[a - 2] = r;
                e[a - 1] = n;
              } else if (i < 255) {
                var o = 255 - i;
                e[a - 3] = (e[a - 3] * i + t * o) >> 8;
                e[a - 2] = (e[a - 2] * i + r * o) >> 8;
                e[a - 1] = (e[a - 1] * i + n * o) >> 8;
              }
            }
          }
          function composeSMaskAlpha(e, t, r) {
            for (var n = e.length, s = 3; s < n; s += 4) {
              var a = r ? r[e[s]] : e[s];
              t[s] = (t[s] * a * (1 / 255)) | 0;
            }
          }
          function composeSMaskLuminosity(e, t, r) {
            for (var n = e.length, s = 3; s < n; s += 4) {
              var a = 77 * e[s - 3] + 152 * e[s - 2] + 28 * e[s - 1];
              t[s] = r ? (t[s] * r[a >> 8]) >> 8 : (t[s] * a) >> 16;
            }
          }
          function composeSMask(e, t, r, n) {
            var s = t.canvas,
              a = t.context;
            e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
            var i = t.backdrop || null;
            if (t.transferMap || !n.isEnabled) {
              !(function genericComposeSMask(e, t, r, n, s, a, i) {
                var o,
                  l = !!a,
                  c = l ? a[0] : 0,
                  h = l ? a[1] : 0,
                  d = l ? a[2] : 0;
                o =
                  "Luminosity" === s
                    ? composeSMaskLuminosity
                    : composeSMaskAlpha;
                for (
                  var u = Math.min(n, Math.ceil(1048576 / r)), p = 0;
                  p < n;
                  p += u
                ) {
                  var f = Math.min(u, n - p),
                    g = e.getImageData(0, p, r, f),
                    m = t.getImageData(0, p, r, f);
                  l && composeSMaskBackdrop(g.data, c, h, d);
                  o(g.data, m.data, i);
                  e.putImageData(m, 0, p);
                }
              })(a, r, s.width, s.height, t.subtype, i, t.transferMap);
              e.drawImage(s, 0, 0);
            } else {
              const a = n.composeSMask({
                layer: r.canvas,
                mask: s,
                properties: { subtype: t.subtype, backdrop: i },
              });
              e.setTransform(1, 0, 0, 1, 0, 0);
              e.drawImage(a, t.offsetX, t.offsetY);
            }
          }
          var e = ["butt", "round", "square"],
            t = ["miter", "round", "bevel"],
            r = {},
            o = {};
          CanvasGraphics.prototype = {
            beginDrawing({
              transform: e,
              viewport: t,
              transparency: r = !1,
              background: n = null,
            }) {
              var s = this.ctx.canvas.width,
                a = this.ctx.canvas.height;
              this.ctx.save();
              this.ctx.fillStyle = n || "rgb(255, 255, 255)";
              this.ctx.fillRect(0, 0, s, a);
              this.ctx.restore();
              if (r) {
                var i = this.cachedCanvases.getCanvas("transparent", s, a, !0);
                this.compositeCtx = this.ctx;
                this.transparentCanvas = i.canvas;
                this.ctx = i.context;
                this.ctx.save();
                this.ctx.transform.apply(
                  this.ctx,
                  this.compositeCtx.mozCurrentTransform
                );
              }
              this.ctx.save();
              resetCtxToDefault(this.ctx);
              e && this.ctx.transform.apply(this.ctx, e);
              this.ctx.transform.apply(this.ctx, t.transform);
              this.baseTransform = this.ctx.mozCurrentTransform.slice();
              this.imageLayer && this.imageLayer.beginLayout();
            },
            executeOperatorList: function CanvasGraphics_executeOperatorList(
              e,
              t,
              r,
              s
            ) {
              var a = e.argsArray,
                i = e.fnArray,
                o = t || 0,
                l = a.length;
              if (l === o) return o;
              for (
                var c,
                  h = l - o > 10 && "function" == typeof r,
                  d = h ? Date.now() + 15 : 0,
                  u = 0,
                  p = this.commonObjs,
                  f = this.objs;
                ;

              ) {
                if (void 0 !== s && o === s.nextBreakPoint) {
                  s.breakIt(o, r);
                  return o;
                }
                if ((c = i[o]) !== n.OPS.dependency) this[c].apply(this, a[o]);
                else
                  for (const e of a[o]) {
                    const t = e.startsWith("g_") ? p : f;
                    if (!t.has(e)) {
                      t.get(e, r);
                      return o;
                    }
                  }
                if (++o === l) return o;
                if (h && ++u > 10) {
                  if (Date.now() > d) {
                    r();
                    return o;
                  }
                  u = 0;
                }
              }
            },
            endDrawing: function CanvasGraphics_endDrawing() {
              null !== this.current.activeSMask && this.endSMaskGroup();
              this.ctx.restore();
              if (this.transparentCanvas) {
                this.ctx = this.compositeCtx;
                this.ctx.save();
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.drawImage(this.transparentCanvas, 0, 0);
                this.ctx.restore();
                this.transparentCanvas = null;
              }
              this.cachedCanvases.clear();
              this.webGLContext.clear();
              this.imageLayer && this.imageLayer.endLayout();
            },
            setLineWidth: function CanvasGraphics_setLineWidth(e) {
              this.current.lineWidth = e;
              this.ctx.lineWidth = e;
            },
            setLineCap: function CanvasGraphics_setLineCap(t) {
              this.ctx.lineCap = e[t];
            },
            setLineJoin: function CanvasGraphics_setLineJoin(e) {
              this.ctx.lineJoin = t[e];
            },
            setMiterLimit: function CanvasGraphics_setMiterLimit(e) {
              this.ctx.miterLimit = e;
            },
            setDash: function CanvasGraphics_setDash(e, t) {
              var r = this.ctx;
              if (void 0 !== r.setLineDash) {
                r.setLineDash(e);
                r.lineDashOffset = t;
              }
            },
            setRenderingIntent(e) {},
            setFlatness(e) {},
            setGState: function CanvasGraphics_setGState(e) {
              for (var t = 0, r = e.length; t < r; t++) {
                var n = e[t],
                  s = n[0],
                  a = n[1];
                switch (s) {
                  case "LW":
                    this.setLineWidth(a);
                    break;
                  case "LC":
                    this.setLineCap(a);
                    break;
                  case "LJ":
                    this.setLineJoin(a);
                    break;
                  case "ML":
                    this.setMiterLimit(a);
                    break;
                  case "D":
                    this.setDash(a[0], a[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(a);
                    break;
                  case "FL":
                    this.setFlatness(a);
                    break;
                  case "Font":
                    this.setFont(a[0], a[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = n[1];
                    break;
                  case "ca":
                    this.current.fillAlpha = n[1];
                    this.ctx.globalAlpha = n[1];
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = a;
                    break;
                  case "SMask":
                    this.current.activeSMask &&
                      (this.stateStack.length > 0 &&
                      this.stateStack[this.stateStack.length - 1]
                        .activeSMask === this.current.activeSMask
                        ? this.suspendSMaskGroup()
                        : this.endSMaskGroup());
                    this.current.activeSMask = a ? this.tempSMask : null;
                    this.current.activeSMask && this.beginSMaskGroup();
                    this.tempSMask = null;
                    break;
                  case "TR":
                    this.current.transferMaps = a;
                }
              }
            },
            beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
              var e = this.current.activeSMask,
                t = e.canvas.width,
                r = e.canvas.height,
                n = "smaskGroupAt" + this.groupLevel,
                s = this.cachedCanvases.getCanvas(n, t, r, !0),
                a = this.ctx,
                i = a.mozCurrentTransform;
              this.ctx.save();
              var o = s.context;
              o.scale(1 / e.scaleX, 1 / e.scaleY);
              o.translate(-e.offsetX, -e.offsetY);
              o.transform.apply(o, i);
              e.startTransformInverse = o.mozCurrentTransformInverse;
              copyCtxState(a, o);
              this.ctx = o;
              this.setGState([
                ["BM", "source-over"],
                ["ca", 1],
                ["CA", 1],
              ]);
              this.groupStack.push(a);
              this.groupLevel++;
            },
            suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
              var e = this.ctx;
              this.groupLevel--;
              this.ctx = this.groupStack.pop();
              composeSMask(
                this.ctx,
                this.current.activeSMask,
                e,
                this.webGLContext
              );
              this.ctx.restore();
              this.ctx.save();
              copyCtxState(e, this.ctx);
              this.current.resumeSMaskCtx = e;
              var t = n.Util.transform(
                this.current.activeSMask.startTransformInverse,
                e.mozCurrentTransform
              );
              this.ctx.transform.apply(this.ctx, t);
              e.save();
              e.setTransform(1, 0, 0, 1, 0, 0);
              e.clearRect(0, 0, e.canvas.width, e.canvas.height);
              e.restore();
            },
            resumeSMaskGroup: function CanvasGraphics_endSMaskGroup() {
              var e = this.current.resumeSMaskCtx,
                t = this.ctx;
              this.ctx = e;
              this.groupStack.push(t);
              this.groupLevel++;
            },
            endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
              var e = this.ctx;
              this.groupLevel--;
              this.ctx = this.groupStack.pop();
              composeSMask(
                this.ctx,
                this.current.activeSMask,
                e,
                this.webGLContext
              );
              this.ctx.restore();
              copyCtxState(e, this.ctx);
              var t = n.Util.transform(
                this.current.activeSMask.startTransformInverse,
                e.mozCurrentTransform
              );
              this.ctx.transform.apply(this.ctx, t);
            },
            save: function CanvasGraphics_save() {
              this.ctx.save();
              var e = this.current;
              this.stateStack.push(e);
              this.current = e.clone();
              this.current.resumeSMaskCtx = null;
            },
            restore: function CanvasGraphics_restore() {
              this.current.resumeSMaskCtx && this.resumeSMaskGroup();
              null === this.current.activeSMask ||
                (0 !== this.stateStack.length &&
                  this.stateStack[this.stateStack.length - 1].activeSMask ===
                    this.current.activeSMask) ||
                this.endSMaskGroup();
              if (0 !== this.stateStack.length) {
                this.current = this.stateStack.pop();
                this.ctx.restore();
                this.pendingClip = null;
                this._cachedGetSinglePixelWidth = null;
              }
            },
            transform: function CanvasGraphics_transform(e, t, r, n, s, a) {
              this.ctx.transform(e, t, r, n, s, a);
              this._cachedGetSinglePixelWidth = null;
            },
            constructPath: function CanvasGraphics_constructPath(e, t) {
              for (
                var r = this.ctx,
                  s = this.current,
                  a = s.x,
                  i = s.y,
                  o = 0,
                  l = 0,
                  c = e.length;
                o < c;
                o++
              )
                switch (0 | e[o]) {
                  case n.OPS.rectangle:
                    a = t[l++];
                    i = t[l++];
                    var h = t[l++],
                      d = t[l++];
                    0 === h &&
                      r.lineWidth < this.getSinglePixelWidth() &&
                      (h = this.getSinglePixelWidth());
                    0 === d &&
                      r.lineWidth < this.getSinglePixelWidth() &&
                      (d = this.getSinglePixelWidth());
                    var u = a + h,
                      p = i + d;
                    r.moveTo(a, i);
                    r.lineTo(u, i);
                    r.lineTo(u, p);
                    r.lineTo(a, p);
                    r.lineTo(a, i);
                    r.closePath();
                    break;
                  case n.OPS.moveTo:
                    a = t[l++];
                    i = t[l++];
                    r.moveTo(a, i);
                    break;
                  case n.OPS.lineTo:
                    a = t[l++];
                    i = t[l++];
                    r.lineTo(a, i);
                    break;
                  case n.OPS.curveTo:
                    a = t[l + 4];
                    i = t[l + 5];
                    r.bezierCurveTo(t[l], t[l + 1], t[l + 2], t[l + 3], a, i);
                    l += 6;
                    break;
                  case n.OPS.curveTo2:
                    r.bezierCurveTo(a, i, t[l], t[l + 1], t[l + 2], t[l + 3]);
                    a = t[l + 2];
                    i = t[l + 3];
                    l += 4;
                    break;
                  case n.OPS.curveTo3:
                    a = t[l + 2];
                    i = t[l + 3];
                    r.bezierCurveTo(t[l], t[l + 1], a, i, a, i);
                    l += 4;
                    break;
                  case n.OPS.closePath:
                    r.closePath();
                }
              s.setCurrentPoint(a, i);
            },
            closePath: function CanvasGraphics_closePath() {
              this.ctx.closePath();
            },
            stroke: function CanvasGraphics_stroke(e) {
              e = void 0 === e || e;
              var t = this.ctx,
                r = this.current.strokeColor;
              t.globalAlpha = this.current.strokeAlpha;
              if (this.contentVisible)
                if (r && r.hasOwnProperty("type") && "Pattern" === r.type) {
                  t.save();
                  const e = t.mozCurrentTransform,
                    s = n.Util.singularValueDecompose2dScale(e)[0];
                  t.strokeStyle = r.getPattern(t, this);
                  t.lineWidth = Math.max(
                    0.65 * this.getSinglePixelWidth(),
                    this.current.lineWidth * s
                  );
                  t.stroke();
                  t.restore();
                } else {
                  t.lineWidth = Math.max(
                    0.65 * this.getSinglePixelWidth(),
                    this.current.lineWidth
                  );
                  t.stroke();
                }
              e && this.consumePath();
              t.globalAlpha = this.current.fillAlpha;
            },
            closeStroke: function CanvasGraphics_closeStroke() {
              this.closePath();
              this.stroke();
            },
            fill: function CanvasGraphics_fill(e) {
              e = void 0 === e || e;
              var t = this.ctx,
                r = this.current.fillColor,
                n = !1;
              if (this.current.patternFill) {
                t.save();
                this.baseTransform &&
                  t.setTransform.apply(t, this.baseTransform);
                t.fillStyle = r.getPattern(t, this);
                n = !0;
              }
              if (this.contentVisible)
                if (this.pendingEOFill) {
                  t.fill("evenodd");
                  this.pendingEOFill = !1;
                } else t.fill();
              n && t.restore();
              e && this.consumePath();
            },
            eoFill: function CanvasGraphics_eoFill() {
              this.pendingEOFill = !0;
              this.fill();
            },
            fillStroke: function CanvasGraphics_fillStroke() {
              this.fill(!1);
              this.stroke(!1);
              this.consumePath();
            },
            eoFillStroke: function CanvasGraphics_eoFillStroke() {
              this.pendingEOFill = !0;
              this.fillStroke();
            },
            closeFillStroke: function CanvasGraphics_closeFillStroke() {
              this.closePath();
              this.fillStroke();
            },
            closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
              this.pendingEOFill = !0;
              this.closePath();
              this.fillStroke();
            },
            endPath: function CanvasGraphics_endPath() {
              this.consumePath();
            },
            clip: function CanvasGraphics_clip() {
              this.pendingClip = r;
            },
            eoClip: function CanvasGraphics_eoClip() {
              this.pendingClip = o;
            },
            beginText: function CanvasGraphics_beginText() {
              this.current.textMatrix = n.IDENTITY_MATRIX;
              this.current.textMatrixScale = 1;
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            },
            endText: function CanvasGraphics_endText() {
              var e = this.pendingTextPaths,
                t = this.ctx;
              if (void 0 !== e) {
                t.save();
                t.beginPath();
                for (var r = 0; r < e.length; r++) {
                  var n = e[r];
                  t.setTransform.apply(t, n.transform);
                  t.translate(n.x, n.y);
                  n.addToPath(t, n.fontSize);
                }
                t.restore();
                t.clip();
                t.beginPath();
                delete this.pendingTextPaths;
              } else t.beginPath();
            },
            setCharSpacing: function CanvasGraphics_setCharSpacing(e) {
              this.current.charSpacing = e;
            },
            setWordSpacing: function CanvasGraphics_setWordSpacing(e) {
              this.current.wordSpacing = e;
            },
            setHScale: function CanvasGraphics_setHScale(e) {
              this.current.textHScale = e / 100;
            },
            setLeading: function CanvasGraphics_setLeading(e) {
              this.current.leading = -e;
            },
            setFont: function CanvasGraphics_setFont(e, t) {
              var r = this.commonObjs.get(e),
                s = this.current;
              if (!r) throw new Error("Can't find font for " + e);
              s.fontMatrix = r.fontMatrix
                ? r.fontMatrix
                : n.FONT_IDENTITY_MATRIX;
              (0 !== s.fontMatrix[0] && 0 !== s.fontMatrix[3]) ||
                (0, n.warn)("Invalid font matrix for font " + e);
              if (t < 0) {
                t = -t;
                s.fontDirection = -1;
              } else s.fontDirection = 1;
              this.current.font = r;
              this.current.fontSize = t;
              if (r.isType3Font) return;
              var a = r.loadedName || "sans-serif";
              let i = "normal";
              r.black ? (i = "900") : r.bold && (i = "bold");
              var o = r.italic ? "italic" : "normal",
                l = `"${a}", ${r.fallbackName}`;
              let c = t;
              t < 16 ? (c = 16) : t > 100 && (c = 100);
              this.current.fontSizeScale = t / c;
              this.ctx.font = `${o} ${i} ${c}px ${l}`;
            },
            setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(
              e
            ) {
              this.current.textRenderingMode = e;
            },
            setTextRise: function CanvasGraphics_setTextRise(e) {
              this.current.textRise = e;
            },
            moveText: function CanvasGraphics_moveText(e, t) {
              this.current.x = this.current.lineX += e;
              this.current.y = this.current.lineY += t;
            },
            setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(
              e,
              t
            ) {
              this.setLeading(-t);
              this.moveText(e, t);
            },
            setTextMatrix: function CanvasGraphics_setTextMatrix(
              e,
              t,
              r,
              n,
              s,
              a
            ) {
              this.current.textMatrix = [e, t, r, n, s, a];
              this.current.textMatrixScale = Math.sqrt(e * e + t * t);
              this.current.x = this.current.lineX = 0;
              this.current.y = this.current.lineY = 0;
            },
            nextLine: function CanvasGraphics_nextLine() {
              this.moveText(0, this.current.leading);
            },
            paintChar(e, t, r, s) {
              var a = this.ctx,
                i = this.current,
                o = i.font,
                l = i.textRenderingMode,
                c = i.fontSize / i.fontSizeScale,
                h = l & n.TextRenderingMode.FILL_STROKE_MASK,
                d = !!(l & n.TextRenderingMode.ADD_TO_PATH_FLAG);
              const u = i.patternFill && !o.missingFile;
              var p;
              (o.disableFontFace || d || u) &&
                (p = o.getPathGenerator(this.commonObjs, e));
              if (o.disableFontFace || u) {
                a.save();
                a.translate(t, r);
                a.beginPath();
                p(a, c);
                s && a.setTransform.apply(a, s);
                (h !== n.TextRenderingMode.FILL &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  a.fill();
                (h !== n.TextRenderingMode.STROKE &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  a.stroke();
                a.restore();
              } else {
                (h !== n.TextRenderingMode.FILL &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  a.fillText(e, t, r);
                (h !== n.TextRenderingMode.STROKE &&
                  h !== n.TextRenderingMode.FILL_STROKE) ||
                  a.strokeText(e, t, r);
              }
              if (d) {
                (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                  transform: a.mozCurrentTransform,
                  x: t,
                  y: r,
                  fontSize: c,
                  addToPath: p,
                });
              }
            },
            get isFontSubpixelAAEnabled() {
              const { context: e } = this.cachedCanvases.getCanvas(
                "isFontSubpixelAAEnabled",
                10,
                10
              );
              e.scale(1.5, 1);
              e.fillText("I", 0, 10);
              for (
                var t = e.getImageData(0, 0, 10, 10).data, r = !1, s = 3;
                s < t.length;
                s += 4
              )
                if (t[s] > 0 && t[s] < 255) {
                  r = !0;
                  break;
                }
              return (0, n.shadow)(this, "isFontSubpixelAAEnabled", r);
            },
            showText: function CanvasGraphics_showText(e) {
              var t = this.current,
                r = t.font;
              if (r.isType3Font) return this.showType3Text(e);
              var s = t.fontSize;
              if (0 === s) return;
              var a = this.ctx,
                i = t.fontSizeScale,
                o = t.charSpacing,
                l = t.wordSpacing,
                c = t.fontDirection,
                h = t.textHScale * c,
                d = e.length,
                u = r.vertical,
                p = u ? 1 : -1,
                f = r.defaultVMetrics,
                g = s * t.fontMatrix[0],
                m =
                  t.textRenderingMode === n.TextRenderingMode.FILL &&
                  !r.disableFontFace &&
                  !t.patternFill;
              a.save();
              let _;
              if (t.patternFill) {
                a.save();
                const e = t.fillColor.getPattern(a, this);
                _ = a.mozCurrentTransform;
                a.restore();
                a.fillStyle = e;
              }
              a.transform.apply(a, t.textMatrix);
              a.translate(t.x, t.y + t.textRise);
              c > 0 ? a.scale(h, -1) : a.scale(h, 1);
              var A = t.lineWidth,
                b = t.textMatrixScale;
              if (0 === b || 0 === A) {
                var y =
                  t.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                if (
                  y === n.TextRenderingMode.STROKE ||
                  y === n.TextRenderingMode.FILL_STROKE
                ) {
                  this._cachedGetSinglePixelWidth = null;
                  A = 0.65 * this.getSinglePixelWidth();
                }
              } else A /= b;
              if (1 !== i) {
                a.scale(i, i);
                A /= i;
              }
              a.lineWidth = A;
              var v,
                C = 0;
              for (v = 0; v < d; ++v) {
                var S = e[v];
                if ((0, n.isNum)(S)) C += (p * S * s) / 1e3;
                else {
                  var x,
                    P,
                    k,
                    R,
                    w = !1,
                    T = (S.isSpace ? l : 0) + o,
                    E = S.fontChar,
                    F = S.accent,
                    L = S.width;
                  if (u) {
                    var M, D, O;
                    M = S.vmetric || f;
                    D = -(D = S.vmetric ? M[1] : 0.5 * L) * g;
                    O = M[2] * g;
                    L = M ? -M[0] : L;
                    x = D / i;
                    P = (C + O) / i;
                  } else {
                    x = C / i;
                    P = 0;
                  }
                  if (r.remeasure && L > 0) {
                    var I = ((1e3 * a.measureText(E).width) / s) * i;
                    if (L < I && this.isFontSubpixelAAEnabled) {
                      var N = L / I;
                      w = !0;
                      a.save();
                      a.scale(N, 1);
                      x /= N;
                    } else L !== I && (x += (((L - I) / 2e3) * s) / i);
                  }
                  if (this.contentVisible && (S.isInFont || r.missingFile))
                    if (m && !F) a.fillText(E, x, P);
                    else {
                      this.paintChar(E, x, P, _);
                      if (F) {
                        k = x + (s * F.offset.x) / i;
                        R = P - (s * F.offset.y) / i;
                        this.paintChar(F.fontChar, k, R, _);
                      }
                    }
                  C += u ? L * g - T * c : L * g + T * c;
                  w && a.restore();
                }
              }
              u ? (t.y -= C) : (t.x += C * h);
              a.restore();
            },
            showType3Text: function CanvasGraphics_showType3Text(e) {
              var t,
                r,
                s,
                a,
                i = this.ctx,
                o = this.current,
                l = o.font,
                c = o.fontSize,
                h = o.fontDirection,
                d = l.vertical ? 1 : -1,
                u = o.charSpacing,
                p = o.wordSpacing,
                f = o.textHScale * h,
                g = o.fontMatrix || n.FONT_IDENTITY_MATRIX,
                m = e.length;
              if (
                !(o.textRenderingMode === n.TextRenderingMode.INVISIBLE) &&
                0 !== c
              ) {
                this._cachedGetSinglePixelWidth = null;
                i.save();
                i.transform.apply(i, o.textMatrix);
                i.translate(o.x, o.y);
                i.scale(f, h);
                for (t = 0; t < m; ++t) {
                  r = e[t];
                  if ((0, n.isNum)(r)) {
                    a = (d * r * c) / 1e3;
                    this.ctx.translate(a, 0);
                    o.x += a * f;
                  } else {
                    var _ = (r.isSpace ? p : 0) + u,
                      A = l.charProcOperatorList[r.operatorListId];
                    if (A) {
                      if (this.contentVisible) {
                        this.processingType3 = r;
                        this.save();
                        i.scale(c, c);
                        i.transform.apply(i, g);
                        this.executeOperatorList(A);
                        this.restore();
                      }
                      s = n.Util.applyTransform([r.width, 0], g)[0] * c + _;
                      i.translate(s, 0);
                      o.x += s * f;
                    } else
                      (0, n.warn)(
                        `Type3 character "${r.operatorListId}" is not available.`
                      );
                  }
                }
                i.restore();
                this.processingType3 = null;
              }
            },
            setCharWidth: function CanvasGraphics_setCharWidth(e, t) {},
            setCharWidthAndBounds:
              function CanvasGraphics_setCharWidthAndBounds(e, t, r, n, s, a) {
                this.ctx.rect(r, n, s - r, a - n);
                this.clip();
                this.endPath();
              },
            getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(e) {
              var t;
              if ("TilingPattern" === e[0]) {
                var r = e[1],
                  n =
                    this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                  a = {
                    createCanvasGraphics: (e) =>
                      new CanvasGraphics(
                        e,
                        this.commonObjs,
                        this.objs,
                        this.canvasFactory,
                        this.webGLContext
                      ),
                  };
                t = new s.TilingPattern(e, r, this.ctx, a, n);
              } else t = (0, s.getShadingPatternFromIR)(e);
              return t;
            },
            setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            },
            setFillColorN: function CanvasGraphics_setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments);
              this.current.patternFill = !0;
            },
            setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(
              e,
              t,
              r
            ) {
              var s = n.Util.makeCssRgb(e, t, r);
              this.ctx.strokeStyle = s;
              this.current.strokeColor = s;
            },
            setFillRGBColor: function CanvasGraphics_setFillRGBColor(e, t, r) {
              var s = n.Util.makeCssRgb(e, t, r);
              this.ctx.fillStyle = s;
              this.current.fillColor = s;
              this.current.patternFill = !1;
            },
            shadingFill: function CanvasGraphics_shadingFill(e) {
              if (this.contentVisible) {
                var t = this.ctx;
                this.save();
                var r = (0, s.getShadingPatternFromIR)(e);
                t.fillStyle = r.getPattern(t, this, !0);
                var a = t.mozCurrentTransformInverse;
                if (a) {
                  var i = t.canvas,
                    o = i.width,
                    l = i.height,
                    c = n.Util.applyTransform([0, 0], a),
                    h = n.Util.applyTransform([0, l], a),
                    d = n.Util.applyTransform([o, 0], a),
                    u = n.Util.applyTransform([o, l], a),
                    p = Math.min(c[0], h[0], d[0], u[0]),
                    f = Math.min(c[1], h[1], d[1], u[1]),
                    g = Math.max(c[0], h[0], d[0], u[0]),
                    m = Math.max(c[1], h[1], d[1], u[1]);
                  this.ctx.fillRect(p, f, g - p, m - f);
                } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                this.restore();
              }
            },
            beginInlineImage: function CanvasGraphics_beginInlineImage() {
              (0, n.unreachable)("Should not call beginInlineImage");
            },
            beginImageData: function CanvasGraphics_beginImageData() {
              (0, n.unreachable)("Should not call beginImageData");
            },
            paintFormXObjectBegin:
              function CanvasGraphics_paintFormXObjectBegin(e, t) {
                if (this.contentVisible) {
                  this.save();
                  this.baseTransformStack.push(this.baseTransform);
                  Array.isArray(e) &&
                    6 === e.length &&
                    this.transform.apply(this, e);
                  this.baseTransform = this.ctx.mozCurrentTransform;
                  if (t) {
                    var r = t[2] - t[0],
                      n = t[3] - t[1];
                    this.ctx.rect(t[0], t[1], r, n);
                    this.clip();
                    this.endPath();
                  }
                }
              },
            paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
              if (this.contentVisible) {
                this.restore();
                this.baseTransform = this.baseTransformStack.pop();
              }
            },
            beginGroup: function CanvasGraphics_beginGroup(e) {
              if (this.contentVisible) {
                this.save();
                var t = this.ctx;
                e.isolated || (0, n.info)("TODO: Support non-isolated groups.");
                e.knockout && (0, n.warn)("Knockout groups not supported.");
                var r = t.mozCurrentTransform;
                e.matrix && t.transform.apply(t, e.matrix);
                if (!e.bbox) throw new Error("Bounding box is required.");
                var s = n.Util.getAxialAlignedBoundingBox(
                    e.bbox,
                    t.mozCurrentTransform
                  ),
                  a = [0, 0, t.canvas.width, t.canvas.height];
                s = n.Util.intersect(s, a) || [0, 0, 0, 0];
                var i = Math.floor(s[0]),
                  o = Math.floor(s[1]),
                  l = Math.max(Math.ceil(s[2]) - i, 1),
                  c = Math.max(Math.ceil(s[3]) - o, 1),
                  h = 1,
                  d = 1;
                if (l > 4096) {
                  h = l / 4096;
                  l = 4096;
                }
                if (c > 4096) {
                  d = c / 4096;
                  c = 4096;
                }
                var u = "groupAt" + this.groupLevel;
                e.smask && (u += "_smask_" + (this.smaskCounter++ % 2));
                var p = this.cachedCanvases.getCanvas(u, l, c, !0),
                  f = p.context;
                f.scale(1 / h, 1 / d);
                f.translate(-i, -o);
                f.transform.apply(f, r);
                if (e.smask)
                  this.smaskStack.push({
                    canvas: p.canvas,
                    context: f,
                    offsetX: i,
                    offsetY: o,
                    scaleX: h,
                    scaleY: d,
                    subtype: e.smask.subtype,
                    backdrop: e.smask.backdrop,
                    transferMap: e.smask.transferMap || null,
                    startTransformInverse: null,
                  });
                else {
                  t.setTransform(1, 0, 0, 1, 0, 0);
                  t.translate(i, o);
                  t.scale(h, d);
                }
                copyCtxState(t, f);
                this.ctx = f;
                this.setGState([
                  ["BM", "source-over"],
                  ["ca", 1],
                  ["CA", 1],
                ]);
                this.groupStack.push(t);
                this.groupLevel++;
                this.current.activeSMask = null;
              }
            },
            endGroup: function CanvasGraphics_endGroup(e) {
              if (this.contentVisible) {
                this.groupLevel--;
                var t = this.ctx;
                this.ctx = this.groupStack.pop();
                void 0 !== this.ctx.imageSmoothingEnabled
                  ? (this.ctx.imageSmoothingEnabled = !1)
                  : (this.ctx.mozImageSmoothingEnabled = !1);
                e.smask
                  ? (this.tempSMask = this.smaskStack.pop())
                  : this.ctx.drawImage(t.canvas, 0, 0);
                this.restore();
              }
            },
            beginAnnotations: function CanvasGraphics_beginAnnotations() {
              this.save();
              this.baseTransform &&
                this.ctx.setTransform.apply(this.ctx, this.baseTransform);
            },
            endAnnotations: function CanvasGraphics_endAnnotations() {
              this.restore();
            },
            beginAnnotation: function CanvasGraphics_beginAnnotation(e, t, r) {
              this.save();
              resetCtxToDefault(this.ctx);
              this.current = new i();
              if (Array.isArray(e) && 4 === e.length) {
                var n = e[2] - e[0],
                  s = e[3] - e[1];
                this.ctx.rect(e[0], e[1], n, s);
                this.clip();
                this.endPath();
              }
              this.transform.apply(this, t);
              this.transform.apply(this, r);
            },
            endAnnotation: function CanvasGraphics_endAnnotation() {
              this.restore();
            },
            paintImageMaskXObject:
              function CanvasGraphics_paintImageMaskXObject(e) {
                if (this.contentVisible) {
                  var t = this.ctx,
                    r = e.width,
                    n = e.height,
                    s = this.current.fillColor,
                    a = this.current.patternFill,
                    i = this.processingType3;
                  i &&
                    void 0 === i.compiled &&
                    (i.compiled =
                      r <= 1e3 && n <= 1e3
                        ? (function compileType3Glyph(e) {
                            var t,
                              r,
                              n,
                              s,
                              a = e.width,
                              i = e.height,
                              o = a + 1,
                              l = new Uint8Array(o * (i + 1)),
                              c = new Uint8Array([
                                0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
                              ]),
                              h = (a + 7) & -8,
                              d = e.data,
                              u = new Uint8Array(h * i),
                              p = 0;
                            for (t = 0, s = d.length; t < s; t++)
                              for (var f = 128, g = d[t]; f > 0; ) {
                                u[p++] = g & f ? 0 : 255;
                                f >>= 1;
                              }
                            var m = 0;
                            if (0 !== u[(p = 0)]) {
                              l[0] = 1;
                              ++m;
                            }
                            for (r = 1; r < a; r++) {
                              if (u[p] !== u[p + 1]) {
                                l[r] = u[p] ? 2 : 1;
                                ++m;
                              }
                              p++;
                            }
                            if (0 !== u[p]) {
                              l[r] = 2;
                              ++m;
                            }
                            for (t = 1; t < i; t++) {
                              n = t * o;
                              if (u[(p = t * h) - h] !== u[p]) {
                                l[n] = u[p] ? 1 : 8;
                                ++m;
                              }
                              var _ = (u[p] ? 4 : 0) + (u[p - h] ? 8 : 0);
                              for (r = 1; r < a; r++) {
                                if (
                                  c[
                                    (_ =
                                      (_ >> 2) +
                                      (u[p + 1] ? 4 : 0) +
                                      (u[p - h + 1] ? 8 : 0))
                                  ]
                                ) {
                                  l[n + r] = c[_];
                                  ++m;
                                }
                                p++;
                              }
                              if (u[p - h] !== u[p]) {
                                l[n + r] = u[p] ? 2 : 4;
                                ++m;
                              }
                              if (m > 1e3) return null;
                            }
                            n = t * o;
                            if (0 !== u[(p = h * (i - 1))]) {
                              l[n] = 8;
                              ++m;
                            }
                            for (r = 1; r < a; r++) {
                              if (u[p] !== u[p + 1]) {
                                l[n + r] = u[p] ? 4 : 8;
                                ++m;
                              }
                              p++;
                            }
                            if (0 !== u[p]) {
                              l[n + r] = 4;
                              ++m;
                            }
                            if (m > 1e3) return null;
                            var A = new Int32Array([
                                0,
                                o,
                                -1,
                                0,
                                -o,
                                0,
                                0,
                                0,
                                1,
                              ]),
                              b = [];
                            for (t = 0; m && t <= i; t++) {
                              for (var y = t * o, v = y + a; y < v && !l[y]; )
                                y++;
                              if (y !== v) {
                                var C,
                                  S = [y % o, t],
                                  x = l[y],
                                  P = y;
                                do {
                                  var k = A[x];
                                  do {
                                    y += k;
                                  } while (!l[y]);
                                  if (5 !== (C = l[y]) && 10 !== C) {
                                    x = C;
                                    l[y] = 0;
                                  } else {
                                    x = C & ((51 * x) >> 4);
                                    l[y] &= (x >> 2) | (x << 2);
                                  }
                                  S.push(y % o);
                                  S.push((y / o) | 0);
                                  l[y] || --m;
                                } while (P !== y);
                                b.push(S);
                                --t;
                              }
                            }
                            return function (e) {
                              e.save();
                              e.scale(1 / a, -1 / i);
                              e.translate(0, -i);
                              e.beginPath();
                              for (let r = 0, n = b.length; r < n; r++) {
                                var t = b[r];
                                e.moveTo(t[0], t[1]);
                                for (let r = 2, n = t.length; r < n; r += 2)
                                  e.lineTo(t[r], t[r + 1]);
                              }
                              e.fill();
                              e.beginPath();
                              e.restore();
                            };
                          })({ data: e.data, width: r, height: n })
                        : null);
                  if (i && i.compiled) i.compiled(t);
                  else {
                    var o = this.cachedCanvases.getCanvas("maskCanvas", r, n),
                      l = o.context;
                    l.save();
                    putBinaryImageMask(l, e);
                    l.globalCompositeOperation = "source-in";
                    l.fillStyle = a ? s.getPattern(l, this) : s;
                    l.fillRect(0, 0, r, n);
                    l.restore();
                    this.paintInlineImageXObject(o.canvas);
                  }
                }
              },
            paintImageMaskXObjectRepeat(e, t, r = 0, n = 0, s, a) {
              if (this.contentVisible) {
                var i = e.width,
                  o = e.height,
                  l = this.current.fillColor,
                  c = this.current.patternFill,
                  h = this.cachedCanvases.getCanvas("maskCanvas", i, o),
                  d = h.context;
                d.save();
                putBinaryImageMask(d, e);
                d.globalCompositeOperation = "source-in";
                d.fillStyle = c ? l.getPattern(d, this) : l;
                d.fillRect(0, 0, i, o);
                d.restore();
                for (var u = this.ctx, p = 0, f = a.length; p < f; p += 2) {
                  u.save();
                  u.transform(t, r, n, s, a[p], a[p + 1]);
                  u.scale(1, -1);
                  u.drawImage(h.canvas, 0, 0, i, o, 0, -1, 1, 1);
                  u.restore();
                }
              }
            },
            paintImageMaskXObjectGroup:
              function CanvasGraphics_paintImageMaskXObjectGroup(e) {
                if (this.contentVisible)
                  for (
                    var t = this.ctx,
                      r = this.current.fillColor,
                      n = this.current.patternFill,
                      s = 0,
                      a = e.length;
                    s < a;
                    s++
                  ) {
                    var i = e[s],
                      o = i.width,
                      l = i.height,
                      c = this.cachedCanvases.getCanvas("maskCanvas", o, l),
                      h = c.context;
                    h.save();
                    putBinaryImageMask(h, i);
                    h.globalCompositeOperation = "source-in";
                    h.fillStyle = n ? r.getPattern(h, this) : r;
                    h.fillRect(0, 0, o, l);
                    h.restore();
                    t.save();
                    t.transform.apply(t, i.transform);
                    t.scale(1, -1);
                    t.drawImage(c.canvas, 0, 0, o, l, 0, -1, 1, 1);
                    t.restore();
                  }
              },
            paintImageXObject: function CanvasGraphics_paintImageXObject(e) {
              if (!this.contentVisible) return;
              const t = e.startsWith("g_")
                ? this.commonObjs.get(e)
                : this.objs.get(e);
              t
                ? this.paintInlineImageXObject(t)
                : (0, n.warn)("Dependent image isn't ready yet");
            },
            paintImageXObjectRepeat:
              function CanvasGraphics_paintImageXObjectRepeat(e, t, r, s) {
                if (!this.contentVisible) return;
                const a = e.startsWith("g_")
                  ? this.commonObjs.get(e)
                  : this.objs.get(e);
                if (a) {
                  for (
                    var i = a.width, o = a.height, l = [], c = 0, h = s.length;
                    c < h;
                    c += 2
                  )
                    l.push({
                      transform: [t, 0, 0, r, s[c], s[c + 1]],
                      x: 0,
                      y: 0,
                      w: i,
                      h: o,
                    });
                  this.paintInlineImageXObjectGroup(a, l);
                } else (0, n.warn)("Dependent image isn't ready yet");
              },
            paintInlineImageXObject:
              function CanvasGraphics_paintInlineImageXObject(e) {
                if (this.contentVisible) {
                  var t = e.width,
                    r = e.height,
                    n = this.ctx;
                  this.save();
                  n.scale(1 / t, -1 / r);
                  var s,
                    a,
                    i = n.mozCurrentTransformInverse,
                    o = i[0],
                    l = i[1],
                    c = Math.max(Math.sqrt(o * o + l * l), 1),
                    h = i[2],
                    d = i[3],
                    u = Math.max(Math.sqrt(h * h + d * d), 1);
                  if (
                    ("function" == typeof HTMLElement &&
                      e instanceof HTMLElement) ||
                    !e.data
                  )
                    s = e;
                  else {
                    var p = (a = this.cachedCanvases.getCanvas(
                      "inlineImage",
                      t,
                      r
                    )).context;
                    putBinaryImageData(p, e, this.current.transferMaps);
                    s = a.canvas;
                  }
                  for (
                    var f = t, g = r, m = "prescale1";
                    (c > 2 && f > 1) || (u > 2 && g > 1);

                  ) {
                    var _ = f,
                      A = g;
                    c > 2 && f > 1 && (c /= f / (_ = Math.ceil(f / 2)));
                    u > 2 && g > 1 && (u /= g / (A = Math.ceil(g / 2)));
                    (p = (a = this.cachedCanvases.getCanvas(m, _, A))
                      .context).clearRect(0, 0, _, A);
                    p.drawImage(s, 0, 0, f, g, 0, 0, _, A);
                    s = a.canvas;
                    f = _;
                    g = A;
                    m = "prescale1" === m ? "prescale2" : "prescale1";
                  }
                  n.drawImage(s, 0, 0, f, g, 0, -r, t, r);
                  if (this.imageLayer) {
                    var b = this.getCanvasPosition(0, -r);
                    this.imageLayer.appendImage({
                      imgData: e,
                      left: b[0],
                      top: b[1],
                      width: t / i[0],
                      height: r / i[3],
                    });
                  }
                  this.restore();
                }
              },
            paintInlineImageXObjectGroup:
              function CanvasGraphics_paintInlineImageXObjectGroup(e, t) {
                if (this.contentVisible) {
                  var r = this.ctx,
                    n = e.width,
                    s = e.height,
                    a = this.cachedCanvases.getCanvas("inlineImage", n, s);
                  putBinaryImageData(a.context, e, this.current.transferMaps);
                  for (var i = 0, o = t.length; i < o; i++) {
                    var l = t[i];
                    r.save();
                    r.transform.apply(r, l.transform);
                    r.scale(1, -1);
                    r.drawImage(a.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1);
                    if (this.imageLayer) {
                      var c = this.getCanvasPosition(l.x, l.y);
                      this.imageLayer.appendImage({
                        imgData: e,
                        left: c[0],
                        top: c[1],
                        width: n,
                        height: s,
                      });
                    }
                    r.restore();
                  }
                }
              },
            paintSolidColorImageMask:
              function CanvasGraphics_paintSolidColorImageMask() {
                this.contentVisible && this.ctx.fillRect(0, 0, 1, 1);
              },
            markPoint: function CanvasGraphics_markPoint(e) {},
            markPointProps: function CanvasGraphics_markPointProps(e, t) {},
            beginMarkedContent: function CanvasGraphics_beginMarkedContent(e) {
              this.markedContentStack.push({ visible: !0 });
            },
            beginMarkedContentProps:
              function CanvasGraphics_beginMarkedContentProps(e, t) {
                "OC" === e
                  ? this.markedContentStack.push({
                      visible: this.optionalContentConfig.isVisible(t),
                    })
                  : this.markedContentStack.push({ visible: !0 });
                this.contentVisible = this.isContentVisible();
              },
            endMarkedContent: function CanvasGraphics_endMarkedContent() {
              this.markedContentStack.pop();
              this.contentVisible = this.isContentVisible();
            },
            beginCompat: function CanvasGraphics_beginCompat() {},
            endCompat: function CanvasGraphics_endCompat() {},
            consumePath: function CanvasGraphics_consumePath() {
              var e = this.ctx;
              if (this.pendingClip) {
                this.pendingClip === o ? e.clip("evenodd") : e.clip();
                this.pendingClip = null;
              }
              e.beginPath();
            },
            getSinglePixelWidth(e) {
              if (null === this._cachedGetSinglePixelWidth) {
                const e = this.ctx.mozCurrentTransformInverse;
                this._cachedGetSinglePixelWidth = Math.sqrt(
                  Math.max(e[0] * e[0] + e[1] * e[1], e[2] * e[2] + e[3] * e[3])
                );
              }
              return this._cachedGetSinglePixelWidth;
            },
            getCanvasPosition: function CanvasGraphics_getCanvasPosition(e, t) {
              var r = this.ctx.mozCurrentTransform;
              return [r[0] * e + r[2] * t + r[4], r[1] * e + r[3] * t + r[5]];
            },
            isContentVisible: function CanvasGraphics_isContentVisible() {
              for (let e = this.markedContentStack.length - 1; e >= 0; e--)
                if (!this.markedContentStack[e].visible) return !1;
              return !0;
            },
          };
          for (var l in n.OPS)
            CanvasGraphics.prototype[n.OPS[l]] = CanvasGraphics.prototype[l];
          return CanvasGraphics;
        })();
      t.CanvasGraphics = o;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.getShadingPatternFromIR = function getShadingPatternFromIR(e) {
        var t = s[e[0]];
        if (!t) throw new Error("Unknown IR type: " + e[0]);
        return t.fromIR(e);
      };
      t.TilingPattern = void 0;
      var n = r(2),
        s = {};
      function applyBoundingBox(e, t) {
        if (!t || "undefined" == typeof Path2D) return;
        const r = t[2] - t[0],
          n = t[3] - t[1],
          s = new Path2D();
        s.rect(t[0], t[1], r, n);
        e.clip(s);
      }
      s.RadialAxial = {
        fromIR: function RadialAxial_fromIR(e) {
          var t = e[1],
            r = e[2],
            n = e[3],
            s = e[4],
            a = e[5],
            i = e[6],
            o = e[7];
          return {
            type: "Pattern",
            getPattern: function RadialAxial_getPattern(e) {
              applyBoundingBox(e, r);
              var l;
              "axial" === t
                ? (l = e.createLinearGradient(s[0], s[1], a[0], a[1]))
                : "radial" === t &&
                  (l = e.createRadialGradient(s[0], s[1], i, a[0], a[1], o));
              for (var c = 0, h = n.length; c < h; ++c) {
                var d = n[c];
                l.addColorStop(d[0], d[1]);
              }
              return l;
            },
          };
        },
      };
      var a = (function createMeshCanvasClosure() {
        function drawTriangle(e, t, r, n, s, a, i, o) {
          var l,
            c = t.coords,
            h = t.colors,
            d = e.data,
            u = 4 * e.width;
          if (c[r + 1] > c[n + 1]) {
            l = r;
            r = n;
            n = l;
            l = a;
            a = i;
            i = l;
          }
          if (c[n + 1] > c[s + 1]) {
            l = n;
            n = s;
            s = l;
            l = i;
            i = o;
            o = l;
          }
          if (c[r + 1] > c[n + 1]) {
            l = r;
            r = n;
            n = l;
            l = a;
            a = i;
            i = l;
          }
          var p = (c[r] + t.offsetX) * t.scaleX,
            f = (c[r + 1] + t.offsetY) * t.scaleY,
            g = (c[n] + t.offsetX) * t.scaleX,
            m = (c[n + 1] + t.offsetY) * t.scaleY,
            _ = (c[s] + t.offsetX) * t.scaleX,
            A = (c[s + 1] + t.offsetY) * t.scaleY;
          if (!(f >= A))
            for (
              var b,
                y,
                v,
                C,
                S,
                x,
                P,
                k,
                R = h[a],
                w = h[a + 1],
                T = h[a + 2],
                E = h[i],
                F = h[i + 1],
                L = h[i + 2],
                M = h[o],
                D = h[o + 1],
                O = h[o + 2],
                I = Math.round(f),
                N = Math.round(A),
                j = I;
              j <= N;
              j++
            ) {
              if (j < m) {
                let e;
                e = j < f ? 0 : f === m ? 1 : (f - j) / (f - m);
                b = p - (p - g) * e;
                y = R - (R - E) * e;
                v = w - (w - F) * e;
                C = T - (T - L) * e;
              } else {
                let e;
                e = j > A ? 1 : m === A ? 0 : (m - j) / (m - A);
                b = g - (g - _) * e;
                y = E - (E - M) * e;
                v = F - (F - D) * e;
                C = L - (L - O) * e;
              }
              let e;
              e = j < f ? 0 : j > A ? 1 : (f - j) / (f - A);
              S = p - (p - _) * e;
              x = R - (R - M) * e;
              P = w - (w - D) * e;
              k = T - (T - O) * e;
              for (
                var G = Math.round(Math.min(b, S)),
                  U = Math.round(Math.max(b, S)),
                  W = u * j + 4 * G,
                  q = G;
                q <= U;
                q++
              ) {
                e = (b - q) / (b - S);
                e < 0 ? (e = 0) : e > 1 && (e = 1);
                d[W++] = (y - (y - x) * e) | 0;
                d[W++] = (v - (v - P) * e) | 0;
                d[W++] = (C - (C - k) * e) | 0;
                d[W++] = 255;
              }
            }
        }
        function drawFigure(e, t, r) {
          var n,
            s,
            a = t.coords,
            i = t.colors;
          switch (t.type) {
            case "lattice":
              var o = t.verticesPerRow,
                l = Math.floor(a.length / o) - 1,
                c = o - 1;
              for (n = 0; n < l; n++)
                for (var h = n * o, d = 0; d < c; d++, h++) {
                  drawTriangle(
                    e,
                    r,
                    a[h],
                    a[h + 1],
                    a[h + o],
                    i[h],
                    i[h + 1],
                    i[h + o]
                  );
                  drawTriangle(
                    e,
                    r,
                    a[h + o + 1],
                    a[h + 1],
                    a[h + o],
                    i[h + o + 1],
                    i[h + 1],
                    i[h + o]
                  );
                }
              break;
            case "triangles":
              for (n = 0, s = a.length; n < s; n += 3)
                drawTriangle(
                  e,
                  r,
                  a[n],
                  a[n + 1],
                  a[n + 2],
                  i[n],
                  i[n + 1],
                  i[n + 2]
                );
              break;
            default:
              throw new Error("illegal figure");
          }
        }
        return function createMeshCanvas(e, t, r, n, s, a, i, o) {
          var l,
            c,
            h,
            d,
            u = Math.floor(e[0]),
            p = Math.floor(e[1]),
            f = Math.ceil(e[2]) - u,
            g = Math.ceil(e[3]) - p,
            m = Math.min(Math.ceil(Math.abs(f * t[0] * 1.1)), 3e3),
            _ = Math.min(Math.ceil(Math.abs(g * t[1] * 1.1)), 3e3),
            A = f / m,
            b = g / _,
            y = {
              coords: r,
              colors: n,
              offsetX: -u,
              offsetY: -p,
              scaleX: 1 / A,
              scaleY: 1 / b,
            },
            v = m + 4,
            C = _ + 4;
          if (o.isEnabled) {
            l = o.drawFigures({
              width: m,
              height: _,
              backgroundColor: a,
              figures: s,
              context: y,
            });
            (c = i.getCanvas("mesh", v, C, !1)).context.drawImage(l, 2, 2);
            l = c.canvas;
          } else {
            var S = (c = i.getCanvas("mesh", v, C, !1)).context,
              x = S.createImageData(m, _);
            if (a) {
              var P = x.data;
              for (h = 0, d = P.length; h < d; h += 4) {
                P[h] = a[0];
                P[h + 1] = a[1];
                P[h + 2] = a[2];
                P[h + 3] = 255;
              }
            }
            for (h = 0; h < s.length; h++) drawFigure(x, s[h], y);
            S.putImageData(x, 2, 2);
            l = c.canvas;
          }
          return {
            canvas: l,
            offsetX: u - 2 * A,
            offsetY: p - 2 * b,
            scaleX: A,
            scaleY: b,
          };
        };
      })();
      s.Mesh = {
        fromIR: function Mesh_fromIR(e) {
          var t = e[2],
            r = e[3],
            s = e[4],
            i = e[5],
            o = e[6],
            l = e[7],
            c = e[8];
          return {
            type: "Pattern",
            getPattern: function Mesh_getPattern(e, h, d) {
              applyBoundingBox(e, l);
              var u;
              if (d)
                u = n.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
              else {
                u = n.Util.singularValueDecompose2dScale(h.baseTransform);
                if (o) {
                  var p = n.Util.singularValueDecompose2dScale(o);
                  u = [u[0] * p[0], u[1] * p[1]];
                }
              }
              var f = a(
                i,
                u,
                t,
                r,
                s,
                d ? null : c,
                h.cachedCanvases,
                h.webGLContext
              );
              if (!d) {
                e.setTransform.apply(e, h.baseTransform);
                o && e.transform.apply(e, o);
              }
              e.translate(f.offsetX, f.offsetY);
              e.scale(f.scaleX, f.scaleY);
              return e.createPattern(f.canvas, "no-repeat");
            },
          };
        },
      };
      s.Dummy = {
        fromIR: function Dummy_fromIR() {
          return {
            type: "Pattern",
            getPattern: function Dummy_fromIR_getPattern() {
              return "hotpink";
            },
          };
        },
      };
      var i = (function TilingPatternClosure() {
        var e = 1,
          t = 2;
        function TilingPattern(e, t, r, n, s) {
          this.operatorList = e[2];
          this.matrix = e[3] || [1, 0, 0, 1, 0, 0];
          this.bbox = e[4];
          this.xstep = e[5];
          this.ystep = e[6];
          this.paintType = e[7];
          this.tilingType = e[8];
          this.color = t;
          this.canvasGraphicsFactory = n;
          this.baseTransform = s;
          this.type = "Pattern";
          this.ctx = r;
        }
        TilingPattern.prototype = {
          createPatternCanvas: function TilinPattern_createPatternCanvas(e) {
            var t = this.operatorList,
              r = this.bbox,
              s = this.xstep,
              a = this.ystep,
              i = this.paintType,
              o = this.tilingType,
              l = this.color,
              c = this.canvasGraphicsFactory;
            (0, n.info)("TilingType: " + o);
            var h = r[0],
              d = r[1],
              u = r[2],
              p = r[3],
              f = n.Util.singularValueDecompose2dScale(this.matrix),
              g = n.Util.singularValueDecompose2dScale(this.baseTransform),
              m = [f[0] * g[0], f[1] * g[1]],
              _ = this.getSizeAndScale(s, this.ctx.canvas.width, m[0]),
              A = this.getSizeAndScale(a, this.ctx.canvas.height, m[1]),
              b = e.cachedCanvases.getCanvas("pattern", _.size, A.size, !0),
              y = b.context,
              v = c.createCanvasGraphics(y);
            v.groupLevel = e.groupLevel;
            this.setFillAndStrokeStyleToContext(v, i, l);
            v.transform(_.scale, 0, 0, A.scale, 0, 0);
            v.transform(1, 0, 0, 1, -h, -d);
            this.clipBbox(v, r, h, d, u, p);
            v.executeOperatorList(t);
            this.ctx.transform(1, 0, 0, 1, h, d);
            this.ctx.scale(1 / _.scale, 1 / A.scale);
            return b.canvas;
          },
          getSizeAndScale: function TilingPattern_getSizeAndScale(e, t, r) {
            e = Math.abs(e);
            var n = Math.max(3e3, t),
              s = Math.ceil(e * r);
            s >= n ? (s = n) : (r = s / e);
            return { scale: r, size: s };
          },
          clipBbox: function clipBbox(e, t, r, n, s, a) {
            if (Array.isArray(t) && 4 === t.length) {
              var i = s - r,
                o = a - n;
              e.ctx.rect(r, n, i, o);
              e.clip();
              e.endPath();
            }
          },
          setFillAndStrokeStyleToContext:
            function setFillAndStrokeStyleToContext(r, s, a) {
              const i = r.ctx,
                o = r.current;
              switch (s) {
                case e:
                  var l = this.ctx;
                  i.fillStyle = l.fillStyle;
                  i.strokeStyle = l.strokeStyle;
                  o.fillColor = l.fillStyle;
                  o.strokeColor = l.strokeStyle;
                  break;
                case t:
                  var c = n.Util.makeCssRgb(a[0], a[1], a[2]);
                  i.fillStyle = c;
                  i.strokeStyle = c;
                  o.fillColor = c;
                  o.strokeColor = c;
                  break;
                default:
                  throw new n.FormatError("Unsupported paint type: " + s);
              }
            },
          getPattern: function TilingPattern_getPattern(e, t) {
            (e = this.ctx).setTransform.apply(e, this.baseTransform);
            e.transform.apply(e, this.matrix);
            var r = this.createPatternCanvas(t);
            return e.createPattern(r, "repeat");
          },
        };
        return TilingPattern;
      })();
      t.TilingPattern = i;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.GlobalWorkerOptions = void 0;
      const n = Object.create(null);
      t.GlobalWorkerOptions = n;
      n.workerPort = void 0 === n.workerPort ? null : n.workerPort;
      n.workerSrc = void 0 === n.workerSrc ? "" : n.workerSrc;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.MessageHandler = void 0;
      var n = r(2);
      const s = 1,
        a = 2,
        i = 1,
        o = 2,
        l = 3,
        c = 4,
        h = 5,
        d = 6,
        u = 7,
        p = 8;
      function wrapReason(e) {
        if ("object" != typeof e || null === e) return e;
        switch (e.name) {
          case "AbortException":
            return new n.AbortException(e.message);
          case "MissingPDFException":
            return new n.MissingPDFException(e.message);
          case "UnexpectedResponseException":
            return new n.UnexpectedResponseException(e.message, e.status);
          case "UnknownErrorException":
            return new n.UnknownErrorException(e.message, e.details);
          default:
            return new n.UnknownErrorException(e.message, e.toString());
        }
      }
      t.MessageHandler = class MessageHandler {
        constructor(e, t, r) {
          this.sourceName = e;
          this.targetName = t;
          this.comObj = r;
          this.callbackId = 1;
          this.streamId = 1;
          this.postMessageTransfers = !0;
          this.streamSinks = Object.create(null);
          this.streamControllers = Object.create(null);
          this.callbackCapabilities = Object.create(null);
          this.actionHandler = Object.create(null);
          this._onComObjOnMessage = (e) => {
            const t = e.data;
            if (t.targetName !== this.sourceName) return;
            if (t.stream) {
              this._processStreamMessage(t);
              return;
            }
            if (t.callback) {
              const e = t.callbackId,
                r = this.callbackCapabilities[e];
              if (!r) throw new Error("Cannot resolve callback " + e);
              delete this.callbackCapabilities[e];
              if (t.callback === s) r.resolve(t.data);
              else {
                if (t.callback !== a)
                  throw new Error("Unexpected callback case");
                r.reject(wrapReason(t.reason));
              }
              return;
            }
            const n = this.actionHandler[t.action];
            if (!n) throw new Error("Unknown action from worker: " + t.action);
            if (t.callbackId) {
              const e = this.sourceName,
                i = t.sourceName;
              new Promise(function (e) {
                e(n(t.data));
              }).then(
                function (n) {
                  r.postMessage({
                    sourceName: e,
                    targetName: i,
                    callback: s,
                    callbackId: t.callbackId,
                    data: n,
                  });
                },
                function (n) {
                  r.postMessage({
                    sourceName: e,
                    targetName: i,
                    callback: a,
                    callbackId: t.callbackId,
                    reason: wrapReason(n),
                  });
                }
              );
            } else t.streamId ? this._createStreamSink(t) : n(t.data);
          };
          r.addEventListener("message", this._onComObjOnMessage);
        }
        on(e, t) {
          const r = this.actionHandler;
          if (r[e])
            throw new Error(`There is already an actionName called "${e}"`);
          r[e] = t;
        }
        send(e, t, r) {
          this._postMessage(
            {
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: e,
              data: t,
            },
            r
          );
        }
        sendWithPromise(e, t, r) {
          const s = this.callbackId++,
            a = (0, n.createPromiseCapability)();
          this.callbackCapabilities[s] = a;
          try {
            this._postMessage(
              {
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: e,
                callbackId: s,
                data: t,
              },
              r
            );
          } catch (e) {
            a.reject(e);
          }
          return a.promise;
        }
        sendWithStream(e, t, r, s) {
          const a = this.streamId++,
            o = this.sourceName,
            l = this.targetName,
            c = this.comObj;
          return new ReadableStream(
            {
              start: (r) => {
                const i = (0, n.createPromiseCapability)();
                this.streamControllers[a] = {
                  controller: r,
                  startCall: i,
                  pullCall: null,
                  cancelCall: null,
                  isClosed: !1,
                };
                this._postMessage(
                  {
                    sourceName: o,
                    targetName: l,
                    action: e,
                    streamId: a,
                    data: t,
                    desiredSize: r.desiredSize,
                  },
                  s
                );
                return i.promise;
              },
              pull: (e) => {
                const t = (0, n.createPromiseCapability)();
                this.streamControllers[a].pullCall = t;
                c.postMessage({
                  sourceName: o,
                  targetName: l,
                  stream: d,
                  streamId: a,
                  desiredSize: e.desiredSize,
                });
                return t.promise;
              },
              cancel: (e) => {
                (0, n.assert)(
                  e instanceof Error,
                  "cancel must have a valid reason"
                );
                const t = (0, n.createPromiseCapability)();
                this.streamControllers[a].cancelCall = t;
                this.streamControllers[a].isClosed = !0;
                c.postMessage({
                  sourceName: o,
                  targetName: l,
                  stream: i,
                  streamId: a,
                  reason: wrapReason(e),
                });
                return t.promise;
              },
            },
            r
          );
        }
        _createStreamSink(e) {
          const t = this,
            r = this.actionHandler[e.action],
            s = e.streamId,
            a = this.sourceName,
            i = e.sourceName,
            o = this.comObj,
            d = {
              enqueue(e, r = 1, o) {
                if (this.isCancelled) return;
                const l = this.desiredSize;
                this.desiredSize -= r;
                if (l > 0 && this.desiredSize <= 0) {
                  this.sinkCapability = (0, n.createPromiseCapability)();
                  this.ready = this.sinkCapability.promise;
                }
                t._postMessage(
                  {
                    sourceName: a,
                    targetName: i,
                    stream: c,
                    streamId: s,
                    chunk: e,
                  },
                  o
                );
              },
              close() {
                if (!this.isCancelled) {
                  this.isCancelled = !0;
                  o.postMessage({
                    sourceName: a,
                    targetName: i,
                    stream: l,
                    streamId: s,
                  });
                  delete t.streamSinks[s];
                }
              },
              error(e) {
                (0, n.assert)(
                  e instanceof Error,
                  "error must have a valid reason"
                );
                if (!this.isCancelled) {
                  this.isCancelled = !0;
                  o.postMessage({
                    sourceName: a,
                    targetName: i,
                    stream: h,
                    streamId: s,
                    reason: wrapReason(e),
                  });
                }
              },
              sinkCapability: (0, n.createPromiseCapability)(),
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: e.desiredSize,
              ready: null,
            };
          d.sinkCapability.resolve();
          d.ready = d.sinkCapability.promise;
          this.streamSinks[s] = d;
          new Promise(function (t) {
            t(r(e.data, d));
          }).then(
            function () {
              o.postMessage({
                sourceName: a,
                targetName: i,
                stream: p,
                streamId: s,
                success: !0,
              });
            },
            function (e) {
              o.postMessage({
                sourceName: a,
                targetName: i,
                stream: p,
                streamId: s,
                reason: wrapReason(e),
              });
            }
          );
        }
        _processStreamMessage(e) {
          const t = e.streamId,
            r = this.sourceName,
            s = e.sourceName,
            a = this.comObj;
          switch (e.stream) {
            case p:
              e.success
                ? this.streamControllers[t].startCall.resolve()
                : this.streamControllers[t].startCall.reject(
                    wrapReason(e.reason)
                  );
              break;
            case u:
              e.success
                ? this.streamControllers[t].pullCall.resolve()
                : this.streamControllers[t].pullCall.reject(
                    wrapReason(e.reason)
                  );
              break;
            case d:
              if (!this.streamSinks[t]) {
                a.postMessage({
                  sourceName: r,
                  targetName: s,
                  stream: u,
                  streamId: t,
                  success: !0,
                });
                break;
              }
              this.streamSinks[t].desiredSize <= 0 &&
                e.desiredSize > 0 &&
                this.streamSinks[t].sinkCapability.resolve();
              this.streamSinks[t].desiredSize = e.desiredSize;
              const { onPull: f } = this.streamSinks[e.streamId];
              new Promise(function (e) {
                e(f && f());
              }).then(
                function () {
                  a.postMessage({
                    sourceName: r,
                    targetName: s,
                    stream: u,
                    streamId: t,
                    success: !0,
                  });
                },
                function (e) {
                  a.postMessage({
                    sourceName: r,
                    targetName: s,
                    stream: u,
                    streamId: t,
                    reason: wrapReason(e),
                  });
                }
              );
              break;
            case c:
              (0, n.assert)(
                this.streamControllers[t],
                "enqueue should have stream controller"
              );
              if (this.streamControllers[t].isClosed) break;
              this.streamControllers[t].controller.enqueue(e.chunk);
              break;
            case l:
              (0, n.assert)(
                this.streamControllers[t],
                "close should have stream controller"
              );
              if (this.streamControllers[t].isClosed) break;
              this.streamControllers[t].isClosed = !0;
              this.streamControllers[t].controller.close();
              this._deleteStreamController(t);
              break;
            case h:
              (0, n.assert)(
                this.streamControllers[t],
                "error should have stream controller"
              );
              this.streamControllers[t].controller.error(wrapReason(e.reason));
              this._deleteStreamController(t);
              break;
            case o:
              e.success
                ? this.streamControllers[t].cancelCall.resolve()
                : this.streamControllers[t].cancelCall.reject(
                    wrapReason(e.reason)
                  );
              this._deleteStreamController(t);
              break;
            case i:
              if (!this.streamSinks[t]) break;
              const { onCancel: g } = this.streamSinks[e.streamId];
              new Promise(function (t) {
                t(g && g(wrapReason(e.reason)));
              }).then(
                function () {
                  a.postMessage({
                    sourceName: r,
                    targetName: s,
                    stream: o,
                    streamId: t,
                    success: !0,
                  });
                },
                function (e) {
                  a.postMessage({
                    sourceName: r,
                    targetName: s,
                    stream: o,
                    streamId: t,
                    reason: wrapReason(e),
                  });
                }
              );
              this.streamSinks[t].sinkCapability.reject(wrapReason(e.reason));
              this.streamSinks[t].isCancelled = !0;
              delete this.streamSinks[t];
              break;
            default:
              throw new Error("Unexpected stream case");
          }
        }
        async _deleteStreamController(e) {
          await Promise.allSettled(
            [
              this.streamControllers[e].startCall,
              this.streamControllers[e].pullCall,
              this.streamControllers[e].cancelCall,
            ].map(function (e) {
              return e && e.promise;
            })
          );
          delete this.streamControllers[e];
        }
        _postMessage(e, t) {
          t && this.postMessageTransfers
            ? this.comObj.postMessage(e, t)
            : this.comObj.postMessage(e);
        }
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.Metadata = void 0;
      var n = r(2),
        s = r(15);
      t.Metadata = class Metadata {
        constructor(e) {
          (0, n.assert)(
            "string" == typeof e,
            "Metadata: input is not a string"
          );
          e = this._repair(e);
          const t = new s.SimpleXMLParser().parseFromString(e);
          this._metadataMap = new Map();
          t && this._parse(t);
        }
        _repair(e) {
          return e
            .replace(/^[^<]+/, "")
            .replace(/>\\376\\377([^<]+)/g, function (e, t) {
              const r = t
                .replace(/\\([0-3])([0-7])([0-7])/g, function (e, t, r, n) {
                  return String.fromCharCode(64 * t + 8 * r + 1 * n);
                })
                .replace(/&(amp|apos|gt|lt|quot);/g, function (e, t) {
                  switch (t) {
                    case "amp":
                      return "&";
                    case "apos":
                      return "'";
                    case "gt":
                      return ">";
                    case "lt":
                      return "<";
                    case "quot":
                      return '"';
                  }
                  throw new Error(`_repair: ${t} isn't defined.`);
                });
              let n = "";
              for (let e = 0, t = r.length; e < t; e += 2) {
                const t = 256 * r.charCodeAt(e) + r.charCodeAt(e + 1);
                n +=
                  t >= 32 && t < 127 && 60 !== t && 62 !== t && 38 !== t
                    ? String.fromCharCode(t)
                    : "&#x" + (65536 + t).toString(16).substring(1) + ";";
              }
              return ">" + n;
            });
        }
        _parse(e) {
          let t = e.documentElement;
          if ("rdf:rdf" !== t.nodeName.toLowerCase()) {
            t = t.firstChild;
            for (; t && "rdf:rdf" !== t.nodeName.toLowerCase(); )
              t = t.nextSibling;
          }
          const r = t ? t.nodeName.toLowerCase() : null;
          if (!t || "rdf:rdf" !== r || !t.hasChildNodes()) return;
          const n = t.childNodes;
          for (let e = 0, t = n.length; e < t; e++) {
            const t = n[e];
            if ("rdf:description" === t.nodeName.toLowerCase())
              for (let e = 0, r = t.childNodes.length; e < r; e++)
                if ("#text" !== t.childNodes[e].nodeName.toLowerCase()) {
                  const r = t.childNodes[e],
                    n = r.nodeName.toLowerCase();
                  this._metadataMap.set(n, r.textContent.trim());
                }
          }
        }
        get(e) {
          return this._metadataMap.has(e) ? this._metadataMap.get(e) : null;
        }
        getAll() {
          return Object.fromEntries(this._metadataMap);
        }
        has(e) {
          return this._metadataMap.has(e);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.SimpleXMLParser = void 0;
      const n = 0,
        s = -2,
        a = -3,
        i = -4,
        o = -5,
        l = -6,
        c = -9;
      function isWhitespace(e, t) {
        const r = e[t];
        return " " === r || "\n" === r || "\r" === r || "\t" === r;
      }
      class SimpleDOMNode {
        constructor(e, t) {
          this.nodeName = e;
          this.nodeValue = t;
          Object.defineProperty(this, "parentNode", {
            value: null,
            writable: !0,
          });
        }
        get firstChild() {
          return this.childNodes && this.childNodes[0];
        }
        get nextSibling() {
          const e = this.parentNode.childNodes;
          if (!e) return;
          const t = e.indexOf(this);
          return -1 !== t ? e[t + 1] : void 0;
        }
        get textContent() {
          return this.childNodes
            ? this.childNodes
                .map(function (e) {
                  return e.textContent;
                })
                .join("")
            : this.nodeValue || "";
        }
        hasChildNodes() {
          return this.childNodes && this.childNodes.length > 0;
        }
      }
      t.SimpleXMLParser = class SimpleXMLParser extends (
        class XMLParserBase {
          _resolveEntities(e) {
            return e.replace(/&([^;]+);/g, (e, t) => {
              if ("#x" === t.substring(0, 2))
                return String.fromCharCode(parseInt(t.substring(2), 16));
              if ("#" === t.substring(0, 1))
                return String.fromCharCode(parseInt(t.substring(1), 10));
              switch (t) {
                case "lt":
                  return "<";
                case "gt":
                  return ">";
                case "amp":
                  return "&";
                case "quot":
                  return '"';
              }
              return this.onResolveEntity(t);
            });
          }
          _parseContent(e, t) {
            const r = [];
            let n = t;
            function skipWs() {
              for (; n < e.length && isWhitespace(e, n); ) ++n;
            }
            for (
              ;
              n < e.length &&
              !isWhitespace(e, n) &&
              ">" !== e[n] &&
              "/" !== e[n];

            )
              ++n;
            const s = e.substring(t, n);
            skipWs();
            for (
              ;
              n < e.length && ">" !== e[n] && "/" !== e[n] && "?" !== e[n];

            ) {
              skipWs();
              let t = "",
                s = "";
              for (; n < e.length && !isWhitespace(e, n) && "=" !== e[n]; ) {
                t += e[n];
                ++n;
              }
              skipWs();
              if ("=" !== e[n]) return null;
              ++n;
              skipWs();
              const a = e[n];
              if ('"' !== a && "'" !== a) return null;
              const i = e.indexOf(a, ++n);
              if (i < 0) return null;
              s = e.substring(n, i);
              r.push({ name: t, value: this._resolveEntities(s) });
              n = i + 1;
              skipWs();
            }
            return { name: s, attributes: r, parsed: n - t };
          }
          _parseProcessingInstruction(e, t) {
            let r = t;
            for (
              ;
              r < e.length &&
              !isWhitespace(e, r) &&
              ">" !== e[r] &&
              "/" !== e[r];

            )
              ++r;
            const n = e.substring(t, r);
            !(function skipWs() {
              for (; r < e.length && isWhitespace(e, r); ) ++r;
            })();
            const s = r;
            for (; r < e.length && ("?" !== e[r] || ">" !== e[r + 1]); ) ++r;
            return { name: n, value: e.substring(s, r), parsed: r - t };
          }
          parseXml(e) {
            let t = 0;
            for (; t < e.length; ) {
              let r = t;
              if ("<" === e[t]) {
                ++r;
                let t;
                switch (e[r]) {
                  case "/":
                    ++r;
                    t = e.indexOf(">", r);
                    if (t < 0) {
                      this.onError(c);
                      return;
                    }
                    this.onEndElement(e.substring(r, t));
                    r = t + 1;
                    break;
                  case "?":
                    ++r;
                    const n = this._parseProcessingInstruction(e, r);
                    if ("?>" !== e.substring(r + n.parsed, r + n.parsed + 2)) {
                      this.onError(a);
                      return;
                    }
                    this.onPi(n.name, n.value);
                    r += n.parsed + 2;
                    break;
                  case "!":
                    if ("--" === e.substring(r + 1, r + 3)) {
                      t = e.indexOf("--\x3e", r + 3);
                      if (t < 0) {
                        this.onError(o);
                        return;
                      }
                      this.onComment(e.substring(r + 3, t));
                      r = t + 3;
                    } else if ("[CDATA[" === e.substring(r + 1, r + 8)) {
                      t = e.indexOf("]]>", r + 8);
                      if (t < 0) {
                        this.onError(s);
                        return;
                      }
                      this.onCdata(e.substring(r + 8, t));
                      r = t + 3;
                    } else {
                      if ("DOCTYPE" !== e.substring(r + 1, r + 8)) {
                        this.onError(l);
                        return;
                      }
                      {
                        const n = e.indexOf("[", r + 8);
                        let s = !1;
                        t = e.indexOf(">", r + 8);
                        if (t < 0) {
                          this.onError(i);
                          return;
                        }
                        if (n > 0 && t > n) {
                          t = e.indexOf("]>", r + 8);
                          if (t < 0) {
                            this.onError(i);
                            return;
                          }
                          s = !0;
                        }
                        const a = e.substring(r + 8, t + (s ? 1 : 0));
                        this.onDoctype(a);
                        r = t + (s ? 2 : 1);
                      }
                    }
                    break;
                  default:
                    const h = this._parseContent(e, r);
                    if (null === h) {
                      this.onError(l);
                      return;
                    }
                    let d = !1;
                    if ("/>" === e.substring(r + h.parsed, r + h.parsed + 2))
                      d = !0;
                    else if (
                      ">" !== e.substring(r + h.parsed, r + h.parsed + 1)
                    ) {
                      this.onError(c);
                      return;
                    }
                    this.onBeginElement(h.name, h.attributes, d);
                    r += h.parsed + (d ? 2 : 1);
                }
              } else {
                for (; r < e.length && "<" !== e[r]; ) r++;
                const n = e.substring(t, r);
                this.onText(this._resolveEntities(n));
              }
              t = r;
            }
          }
          onResolveEntity(e) {
            return `&${e};`;
          }
          onPi(e, t) {}
          onComment(e) {}
          onCdata(e) {}
          onDoctype(e) {}
          onText(e) {}
          onBeginElement(e, t, r) {}
          onEndElement(e) {}
          onError(e) {}
        }
      ) {
        constructor() {
          super();
          this._currentFragment = null;
          this._stack = null;
          this._errorCode = n;
        }
        parseFromString(e) {
          this._currentFragment = [];
          this._stack = [];
          this._errorCode = n;
          this.parseXml(e);
          if (this._errorCode !== n) return;
          const [t] = this._currentFragment;
          return t ? { documentElement: t } : void 0;
        }
        onResolveEntity(e) {
          switch (e) {
            case "apos":
              return "'";
          }
          return super.onResolveEntity(e);
        }
        onText(e) {
          if (
            (function isWhitespaceString(e) {
              for (let t = 0, r = e.length; t < r; t++)
                if (!isWhitespace(e, t)) return !1;
              return !0;
            })(e)
          )
            return;
          const t = new SimpleDOMNode("#text", e);
          this._currentFragment.push(t);
        }
        onCdata(e) {
          const t = new SimpleDOMNode("#text", e);
          this._currentFragment.push(t);
        }
        onBeginElement(e, t, r) {
          const n = new SimpleDOMNode(e);
          n.childNodes = [];
          this._currentFragment.push(n);
          if (!r) {
            this._stack.push(this._currentFragment);
            this._currentFragment = n.childNodes;
          }
        }
        onEndElement(e) {
          this._currentFragment = this._stack.pop() || [];
          const t = this._currentFragment[this._currentFragment.length - 1];
          if (t)
            for (let e = 0, r = t.childNodes.length; e < r; e++)
              t.childNodes[e].parentNode = t;
        }
        onError(e) {
          this._errorCode = e;
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.OptionalContentConfig = void 0;
      var n = r(2);
      class OptionalContentGroup {
        constructor(e, t) {
          this.visible = !0;
          this.name = e;
          this.intent = t;
        }
      }
      t.OptionalContentConfig = class OptionalContentConfig {
        constructor(e) {
          this.name = null;
          this.creator = null;
          this._order = null;
          this._groups = new Map();
          if (null !== e) {
            this.name = e.name;
            this.creator = e.creator;
            this._order = e.order;
            for (const t of e.groups)
              this._groups.set(
                t.id,
                new OptionalContentGroup(t.name, t.intent)
              );
            if ("OFF" === e.baseState)
              for (const e of this._groups) e.visible = !1;
            for (const t of e.on) this._groups.get(t).visible = !0;
            for (const t of e.off) this._groups.get(t).visible = !1;
          }
        }
        isVisible(e) {
          if ("OCG" === e.type) {
            if (!this._groups.has(e.id)) {
              (0, n.warn)("Optional content group not found: " + e.id);
              return !0;
            }
            return this._groups.get(e.id).visible;
          }
          if ("OCMD" === e.type) {
            e.expression &&
              (0, n.warn)("Visibility expression not supported yet.");
            if (!e.policy || "AnyOn" === e.policy) {
              for (const t of e.ids) {
                if (!this._groups.has(t)) {
                  (0, n.warn)("Optional content group not found: " + t);
                  return !0;
                }
                if (this._groups.get(t).visible) return !0;
              }
              return !1;
            }
            if ("AllOn" === e.policy) {
              for (const t of e.ids) {
                if (!this._groups.has(t)) {
                  (0, n.warn)("Optional content group not found: " + t);
                  return !0;
                }
                if (!this._groups.get(t).visible) return !1;
              }
              return !0;
            }
            if ("AnyOff" === e.policy) {
              for (const t of e.ids) {
                if (!this._groups.has(t)) {
                  (0, n.warn)("Optional content group not found: " + t);
                  return !0;
                }
                if (!this._groups.get(t).visible) return !0;
              }
              return !1;
            }
            if ("AllOff" === e.policy) {
              for (const t of e.ids) {
                if (!this._groups.has(t)) {
                  (0, n.warn)("Optional content group not found: " + t);
                  return !0;
                }
                if (this._groups.get(t).visible) return !1;
              }
              return !0;
            }
            (0, n.warn)(`Unknown optional content policy ${e.policy}.`);
            return !0;
          }
          (0, n.warn)(`Unknown group type ${e.type}.`);
          return !0;
        }
        setVisibility(e, t = !0) {
          this._groups.has(e)
            ? (this._groups.get(e).visible = !!t)
            : (0, n.warn)("Optional content group not found: " + e);
        }
        getOrder() {
          return this._groups.size
            ? this._order
              ? this._order.slice()
              : Array.from(this._groups.keys())
            : null;
        }
        getGroups() {
          return this._groups.size ? Object.fromEntries(this._groups) : null;
        }
        getGroup(e) {
          return this._groups.get(e) || null;
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.PDFDataTransportStream = void 0;
      var n = r(2);
      t.PDFDataTransportStream = class PDFDataTransportStream {
        constructor(e, t) {
          (0, n.assert)(
            t,
            'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'
          );
          this._queuedChunks = [];
          this._progressiveDone = e.progressiveDone || !1;
          const r = e.initialData;
          if (r && r.length > 0) {
            const e = new Uint8Array(r).buffer;
            this._queuedChunks.push(e);
          }
          this._pdfDataRangeTransport = t;
          this._isStreamingSupported = !e.disableStream;
          this._isRangeSupported = !e.disableRange;
          this._contentLength = e.length;
          this._fullRequestReader = null;
          this._rangeReaders = [];
          this._pdfDataRangeTransport.addRangeListener((e, t) => {
            this._onReceiveData({ begin: e, chunk: t });
          });
          this._pdfDataRangeTransport.addProgressListener((e, t) => {
            this._onProgress({ loaded: e, total: t });
          });
          this._pdfDataRangeTransport.addProgressiveReadListener((e) => {
            this._onReceiveData({ chunk: e });
          });
          this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          });
          this._pdfDataRangeTransport.transportReady();
        }
        _onReceiveData(e) {
          const t = new Uint8Array(e.chunk).buffer;
          if (void 0 === e.begin)
            this._fullRequestReader
              ? this._fullRequestReader._enqueue(t)
              : this._queuedChunks.push(t);
          else {
            const r = this._rangeReaders.some(function (r) {
              if (r._begin !== e.begin) return !1;
              r._enqueue(t);
              return !0;
            });
            (0, n.assert)(
              r,
              "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found."
            );
          }
        }
        get _progressiveDataLength() {
          return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
        }
        _onProgress(e) {
          if (void 0 === e.total) {
            const t = this._rangeReaders[0];
            t && t.onProgress && t.onProgress({ loaded: e.loaded });
          } else {
            const t = this._fullRequestReader;
            t &&
              t.onProgress &&
              t.onProgress({ loaded: e.loaded, total: e.total });
          }
        }
        _onProgressiveDone() {
          this._fullRequestReader && this._fullRequestReader.progressiveDone();
          this._progressiveDone = !0;
        }
        _removeRangeReader(e) {
          const t = this._rangeReaders.indexOf(e);
          t >= 0 && this._rangeReaders.splice(t, 1);
        }
        getFullReader() {
          (0, n.assert)(
            !this._fullRequestReader,
            "PDFDataTransportStream.getFullReader can only be called once."
          );
          const e = this._queuedChunks;
          this._queuedChunks = null;
          return new PDFDataTransportStreamReader(
            this,
            e,
            this._progressiveDone
          );
        }
        getRangeReader(e, t) {
          if (t <= this._progressiveDataLength) return null;
          const r = new PDFDataTransportStreamRangeReader(this, e, t);
          this._pdfDataRangeTransport.requestDataRange(e, t);
          this._rangeReaders.push(r);
          return r;
        }
        cancelAllRequests(e) {
          this._fullRequestReader && this._fullRequestReader.cancel(e);
          this._rangeReaders.slice(0).forEach(function (t) {
            t.cancel(e);
          });
          this._pdfDataRangeTransport.abort();
        }
      };
      class PDFDataTransportStreamReader {
        constructor(e, t, r = !1) {
          this._stream = e;
          this._done = r || !1;
          this._filename = null;
          this._queuedChunks = t || [];
          this._loaded = 0;
          for (const e of this._queuedChunks) this._loaded += e.byteLength;
          this._requests = [];
          this._headersReady = Promise.resolve();
          e._fullRequestReader = this;
          this.onProgress = null;
        }
        _enqueue(e) {
          if (!this._done) {
            if (this._requests.length > 0) {
              this._requests.shift().resolve({ value: e, done: !1 });
            } else this._queuedChunks.push(e);
            this._loaded += e.byteLength;
          }
        }
        get headersReady() {
          return this._headersReady;
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }
        get contentLength() {
          return this._stream._contentLength;
        }
        async read() {
          if (this._queuedChunks.length > 0) {
            return { value: this._queuedChunks.shift(), done: !1 };
          }
          if (this._done) return { value: void 0, done: !0 };
          const e = (0, n.createPromiseCapability)();
          this._requests.push(e);
          return e.promise;
        }
        cancel(e) {
          this._done = !0;
          this._requests.forEach(function (e) {
            e.resolve({ value: void 0, done: !0 });
          });
          this._requests = [];
        }
        progressiveDone() {
          this._done || (this._done = !0);
        }
      }
      class PDFDataTransportStreamRangeReader {
        constructor(e, t, r) {
          this._stream = e;
          this._begin = t;
          this._end = r;
          this._queuedChunk = null;
          this._requests = [];
          this._done = !1;
          this.onProgress = null;
        }
        _enqueue(e) {
          if (!this._done) {
            if (0 === this._requests.length) this._queuedChunk = e;
            else {
              this._requests.shift().resolve({ value: e, done: !1 });
              this._requests.forEach(function (e) {
                e.resolve({ value: void 0, done: !0 });
              });
              this._requests = [];
            }
            this._done = !0;
            this._stream._removeRangeReader(this);
          }
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._queuedChunk) {
            const e = this._queuedChunk;
            this._queuedChunk = null;
            return { value: e, done: !1 };
          }
          if (this._done) return { value: void 0, done: !0 };
          const e = (0, n.createPromiseCapability)();
          this._requests.push(e);
          return e.promise;
        }
        cancel(e) {
          this._done = !0;
          this._requests.forEach(function (e) {
            e.resolve({ value: void 0, done: !0 });
          });
          this._requests = [];
          this._stream._removeRangeReader(this);
        }
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.WebGLContext = void 0;
      var n = r(2);
      t.WebGLContext = class WebGLContext {
        constructor({ enable: e = !1 }) {
          this._enabled = !0 === e;
        }
        get isEnabled() {
          let e = this._enabled;
          e && (e = s.tryInitGL());
          return (0, n.shadow)(this, "isEnabled", e);
        }
        composeSMask({ layer: e, mask: t, properties: r }) {
          return s.composeSMask(e, t, r);
        }
        drawFigures({
          width: e,
          height: t,
          backgroundColor: r,
          figures: n,
          context: a,
        }) {
          return s.drawFigures(e, t, r, n, a);
        }
        clear() {
          s.cleanup();
        }
      };
      var s = (function WebGLUtilsClosure() {
        function loadShader(e, t, r) {
          var n = e.createShader(r);
          e.shaderSource(n, t);
          e.compileShader(n);
          if (!e.getShaderParameter(n, e.COMPILE_STATUS)) {
            var s = e.getShaderInfoLog(n);
            throw new Error("Error during shader compilation: " + s);
          }
          return n;
        }
        function createVertexShader(e, t) {
          return loadShader(e, t, e.VERTEX_SHADER);
        }
        function createFragmentShader(e, t) {
          return loadShader(e, t, e.FRAGMENT_SHADER);
        }
        function createProgram(e, t) {
          for (var r = e.createProgram(), n = 0, s = t.length; n < s; ++n)
            e.attachShader(r, t[n]);
          e.linkProgram(r);
          if (!e.getProgramParameter(r, e.LINK_STATUS)) {
            var a = e.getProgramInfoLog(r);
            throw new Error("Error during program linking: " + a);
          }
          return r;
        }
        function createTexture(e, t, r) {
          e.activeTexture(r);
          var n = e.createTexture();
          e.bindTexture(e.TEXTURE_2D, n);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
          e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
          e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t);
          return n;
        }
        var e, t;
        function generateGL() {
          if (!e) {
            t = document.createElement("canvas");
            e = t.getContext("webgl", { premultipliedalpha: !1 });
          }
        }
        var r = null;
        var n = null;
        return {
          tryInitGL() {
            try {
              generateGL();
              return !!e;
            } catch (e) {}
            return !1;
          },
          composeSMask: function composeSMask(n, s, a) {
            var i = n.width,
              o = n.height;
            r ||
              (function initSmaskGL() {
                var n, s;
                generateGL();
                n = t;
                t = null;
                s = e;
                e = null;
                var a = createProgram(s, [
                  createVertexShader(
                    s,
                    "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             "
                  ),
                  createFragmentShader(
                    s,
                    "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             "
                  ),
                ]);
                s.useProgram(a);
                var i = {};
                i.gl = s;
                i.canvas = n;
                i.resolutionLocation = s.getUniformLocation(a, "u_resolution");
                i.positionLocation = s.getAttribLocation(a, "a_position");
                i.backdropLocation = s.getUniformLocation(a, "u_backdrop");
                i.subtypeLocation = s.getUniformLocation(a, "u_subtype");
                var o = s.getAttribLocation(a, "a_texCoord"),
                  l = s.getUniformLocation(a, "u_image"),
                  c = s.getUniformLocation(a, "u_mask"),
                  h = s.createBuffer();
                s.bindBuffer(s.ARRAY_BUFFER, h);
                s.bufferData(
                  s.ARRAY_BUFFER,
                  new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
                  s.STATIC_DRAW
                );
                s.enableVertexAttribArray(o);
                s.vertexAttribPointer(o, 2, s.FLOAT, !1, 0, 0);
                s.uniform1i(l, 0);
                s.uniform1i(c, 1);
                r = i;
              })();
            var l = r,
              c = l.canvas,
              h = l.gl;
            c.width = i;
            c.height = o;
            h.viewport(0, 0, h.drawingBufferWidth, h.drawingBufferHeight);
            h.uniform2f(l.resolutionLocation, i, o);
            a.backdrop
              ? h.uniform4f(
                  l.resolutionLocation,
                  a.backdrop[0],
                  a.backdrop[1],
                  a.backdrop[2],
                  1
                )
              : h.uniform4f(l.resolutionLocation, 0, 0, 0, 0);
            h.uniform1i(l.subtypeLocation, "Luminosity" === a.subtype ? 1 : 0);
            var d = createTexture(h, n, h.TEXTURE0),
              u = createTexture(h, s, h.TEXTURE1),
              p = h.createBuffer();
            h.bindBuffer(h.ARRAY_BUFFER, p);
            h.bufferData(
              h.ARRAY_BUFFER,
              new Float32Array([0, 0, i, 0, 0, o, 0, o, i, 0, i, o]),
              h.STATIC_DRAW
            );
            h.enableVertexAttribArray(l.positionLocation);
            h.vertexAttribPointer(l.positionLocation, 2, h.FLOAT, !1, 0, 0);
            h.clearColor(0, 0, 0, 0);
            h.enable(h.BLEND);
            h.blendFunc(h.ONE, h.ONE_MINUS_SRC_ALPHA);
            h.clear(h.COLOR_BUFFER_BIT);
            h.drawArrays(h.TRIANGLES, 0, 6);
            h.flush();
            h.deleteTexture(d);
            h.deleteTexture(u);
            h.deleteBuffer(p);
            return c;
          },
          drawFigures: function drawFigures(r, s, a, i, o) {
            n ||
              (function initFiguresGL() {
                var r, s;
                generateGL();
                r = t;
                t = null;
                s = e;
                e = null;
                var a = createProgram(s, [
                  createVertexShader(
                    s,
                    "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             "
                  ),
                  createFragmentShader(
                    s,
                    "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             "
                  ),
                ]);
                s.useProgram(a);
                var i = {};
                i.gl = s;
                i.canvas = r;
                i.resolutionLocation = s.getUniformLocation(a, "u_resolution");
                i.scaleLocation = s.getUniformLocation(a, "u_scale");
                i.offsetLocation = s.getUniformLocation(a, "u_offset");
                i.positionLocation = s.getAttribLocation(a, "a_position");
                i.colorLocation = s.getAttribLocation(a, "a_color");
                n = i;
              })();
            var l = n,
              c = l.canvas,
              h = l.gl;
            c.width = r;
            c.height = s;
            h.viewport(0, 0, h.drawingBufferWidth, h.drawingBufferHeight);
            h.uniform2f(l.resolutionLocation, r, s);
            var d,
              u,
              p,
              f = 0;
            for (d = 0, u = i.length; d < u; d++)
              switch (i[d].type) {
                case "lattice":
                  f +=
                    ((p = (i[d].coords.length / i[d].verticesPerRow) | 0) - 1) *
                    (i[d].verticesPerRow - 1) *
                    6;
                  break;
                case "triangles":
                  f += i[d].coords.length;
              }
            var g = new Float32Array(2 * f),
              m = new Uint8Array(3 * f),
              _ = o.coords,
              A = o.colors,
              b = 0,
              y = 0;
            for (d = 0, u = i.length; d < u; d++) {
              var v = i[d],
                C = v.coords,
                S = v.colors;
              switch (v.type) {
                case "lattice":
                  var x = v.verticesPerRow;
                  p = (C.length / x) | 0;
                  for (var P = 1; P < p; P++)
                    for (var k = P * x + 1, R = 1; R < x; R++, k++) {
                      g[b] = _[C[k - x - 1]];
                      g[b + 1] = _[C[k - x - 1] + 1];
                      g[b + 2] = _[C[k - x]];
                      g[b + 3] = _[C[k - x] + 1];
                      g[b + 4] = _[C[k - 1]];
                      g[b + 5] = _[C[k - 1] + 1];
                      m[y] = A[S[k - x - 1]];
                      m[y + 1] = A[S[k - x - 1] + 1];
                      m[y + 2] = A[S[k - x - 1] + 2];
                      m[y + 3] = A[S[k - x]];
                      m[y + 4] = A[S[k - x] + 1];
                      m[y + 5] = A[S[k - x] + 2];
                      m[y + 6] = A[S[k - 1]];
                      m[y + 7] = A[S[k - 1] + 1];
                      m[y + 8] = A[S[k - 1] + 2];
                      g[b + 6] = g[b + 2];
                      g[b + 7] = g[b + 3];
                      g[b + 8] = g[b + 4];
                      g[b + 9] = g[b + 5];
                      g[b + 10] = _[C[k]];
                      g[b + 11] = _[C[k] + 1];
                      m[y + 9] = m[y + 3];
                      m[y + 10] = m[y + 4];
                      m[y + 11] = m[y + 5];
                      m[y + 12] = m[y + 6];
                      m[y + 13] = m[y + 7];
                      m[y + 14] = m[y + 8];
                      m[y + 15] = A[S[k]];
                      m[y + 16] = A[S[k] + 1];
                      m[y + 17] = A[S[k] + 2];
                      b += 12;
                      y += 18;
                    }
                  break;
                case "triangles":
                  for (var w = 0, T = C.length; w < T; w++) {
                    g[b] = _[C[w]];
                    g[b + 1] = _[C[w] + 1];
                    m[y] = A[S[w]];
                    m[y + 1] = A[S[w] + 1];
                    m[y + 2] = A[S[w] + 2];
                    b += 2;
                    y += 3;
                  }
              }
            }
            a
              ? h.clearColor(a[0] / 255, a[1] / 255, a[2] / 255, 1)
              : h.clearColor(0, 0, 0, 0);
            h.clear(h.COLOR_BUFFER_BIT);
            var E = h.createBuffer();
            h.bindBuffer(h.ARRAY_BUFFER, E);
            h.bufferData(h.ARRAY_BUFFER, g, h.STATIC_DRAW);
            h.enableVertexAttribArray(l.positionLocation);
            h.vertexAttribPointer(l.positionLocation, 2, h.FLOAT, !1, 0, 0);
            var F = h.createBuffer();
            h.bindBuffer(h.ARRAY_BUFFER, F);
            h.bufferData(h.ARRAY_BUFFER, m, h.STATIC_DRAW);
            h.enableVertexAttribArray(l.colorLocation);
            h.vertexAttribPointer(
              l.colorLocation,
              3,
              h.UNSIGNED_BYTE,
              !1,
              0,
              0
            );
            h.uniform2f(l.scaleLocation, o.scaleX, o.scaleY);
            h.uniform2f(l.offsetLocation, o.offsetX, o.offsetY);
            h.drawArrays(h.TRIANGLES, 0, f);
            h.flush();
            h.deleteBuffer(E);
            h.deleteBuffer(F);
            return c;
          },
          cleanup() {
            if (r && r.canvas) {
              r.canvas.width = 0;
              r.canvas.height = 0;
            }
            if (n && n.canvas) {
              n.canvas.width = 0;
              n.canvas.height = 0;
            }
            r = null;
            n = null;
          },
        };
      })();
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.AnnotationLayer = void 0;
      var n = r(1),
        s = r(2),
        a = r(8);
      class AnnotationElementFactory {
        static create(e) {
          switch (e.data.annotationType) {
            case s.AnnotationType.LINK:
              return new LinkAnnotationElement(e);
            case s.AnnotationType.TEXT:
              return new TextAnnotationElement(e);
            case s.AnnotationType.WIDGET:
              switch (e.data.fieldType) {
                case "Tx":
                  return new TextWidgetAnnotationElement(e);
                case "Btn":
                  return e.data.radioButton
                    ? new RadioButtonWidgetAnnotationElement(e)
                    : e.data.checkBox
                    ? new CheckboxWidgetAnnotationElement(e)
                    : new PushButtonWidgetAnnotationElement(e);
                case "Ch":
                  return new ChoiceWidgetAnnotationElement(e);
              }
              return new WidgetAnnotationElement(e);
            case s.AnnotationType.POPUP:
              return new PopupAnnotationElement(e);
            case s.AnnotationType.FREETEXT:
              return new FreeTextAnnotationElement(e);
            case s.AnnotationType.LINE:
              return new LineAnnotationElement(e);
            case s.AnnotationType.SQUARE:
              return new SquareAnnotationElement(e);
            case s.AnnotationType.CIRCLE:
              return new CircleAnnotationElement(e);
            case s.AnnotationType.POLYLINE:
              return new PolylineAnnotationElement(e);
            case s.AnnotationType.CARET:
              return new CaretAnnotationElement(e);
            case s.AnnotationType.INK:
              return new InkAnnotationElement(e);
            case s.AnnotationType.POLYGON:
              return new PolygonAnnotationElement(e);
            case s.AnnotationType.HIGHLIGHT:
              return new HighlightAnnotationElement(e);
            case s.AnnotationType.UNDERLINE:
              return new UnderlineAnnotationElement(e);
            case s.AnnotationType.SQUIGGLY:
              return new SquigglyAnnotationElement(e);
            case s.AnnotationType.STRIKEOUT:
              return new StrikeOutAnnotationElement(e);
            case s.AnnotationType.STAMP:
              return new StampAnnotationElement(e);
            case s.AnnotationType.FILEATTACHMENT:
              return new FileAttachmentAnnotationElement(e);
            default:
              return new AnnotationElement(e);
          }
        }
      }
      class AnnotationElement {
        constructor(e, t = !1, r = !1) {
          this.isRenderable = t;
          this.data = e.data;
          this.layer = e.layer;
          this.page = e.page;
          this.viewport = e.viewport;
          this.linkService = e.linkService;
          this.downloadManager = e.downloadManager;
          this.imageResourcesPath = e.imageResourcesPath;
          this.renderInteractiveForms = e.renderInteractiveForms;
          this.svgFactory = e.svgFactory;
          this.annotationStorage = e.annotationStorage;
          t && (this.container = this._createContainer(r));
        }
        _createContainer(e = !1) {
          const t = this.data,
            r = this.page,
            n = this.viewport,
            a = document.createElement("section");
          let i = t.rect[2] - t.rect[0],
            o = t.rect[3] - t.rect[1];
          a.setAttribute("data-annotation-id", t.id);
          const l = s.Util.normalizeRect([
            t.rect[0],
            r.view[3] - t.rect[1] + r.view[1],
            t.rect[2],
            r.view[3] - t.rect[3] + r.view[1],
          ]);
          a.style.transform = `matrix(${n.transform.join(",")})`;
          a.style.transformOrigin = `-${l[0]}px -${l[1]}px`;
          if (!e && t.borderStyle.width > 0) {
            a.style.borderWidth = t.borderStyle.width + "px";
            if (t.borderStyle.style !== s.AnnotationBorderStyleType.UNDERLINE) {
              i -= 2 * t.borderStyle.width;
              o -= 2 * t.borderStyle.width;
            }
            const e = t.borderStyle.horizontalCornerRadius,
              r = t.borderStyle.verticalCornerRadius;
            if (e > 0 || r > 0) {
              const t = `${e}px / ${r}px`;
              a.style.borderRadius = t;
            }
            switch (t.borderStyle.style) {
              case s.AnnotationBorderStyleType.SOLID:
                a.style.borderStyle = "solid";
                break;
              case s.AnnotationBorderStyleType.DASHED:
                a.style.borderStyle = "dashed";
                break;
              case s.AnnotationBorderStyleType.BEVELED:
                (0, s.warn)("Unimplemented border style: beveled");
                break;
              case s.AnnotationBorderStyleType.INSET:
                (0, s.warn)("Unimplemented border style: inset");
                break;
              case s.AnnotationBorderStyleType.UNDERLINE:
                a.style.borderBottomStyle = "solid";
            }
            t.color
              ? (a.style.borderColor = s.Util.makeCssRgb(
                  0 | t.color[0],
                  0 | t.color[1],
                  0 | t.color[2]
                ))
              : (a.style.borderWidth = 0);
          }
          a.style.left = l[0] + "px";
          a.style.top = l[1] + "px";
          a.style.width = i + "px";
          a.style.height = o + "px";
          return a;
        }
        _createPopup(e, t, r) {
          if (!t) {
            (t = document.createElement("div")).style.height = e.style.height;
            t.style.width = e.style.width;
            e.appendChild(t);
          }
          const n = new PopupElement({
            container: e,
            trigger: t,
            color: r.color,
            title: r.title,
            modificationDate: r.modificationDate,
            contents: r.contents,
            hideWrapper: !0,
          }).render();
          n.style.left = e.style.width;
          e.appendChild(n);
        }
        render() {
          (0, s.unreachable)(
            "Abstract method `AnnotationElement.render` called"
          );
        }
      }
      class LinkAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.url || e.data.dest || e.data.action));
        }
        render() {
          this.container.className = "linkAnnotation";
          const { data: e, linkService: t } = this,
            r = document.createElement("a");
          e.url
            ? (0, n.addLinkAttributes)(r, {
                url: e.url,
                target: e.newWindow ? n.LinkTarget.BLANK : t.externalLinkTarget,
                rel: t.externalLinkRel,
                enabled: t.externalLinkEnabled,
              })
            : e.action
            ? this._bindNamedAction(r, e.action)
            : this._bindLink(r, e.dest);
          this.container.appendChild(r);
          return this.container;
        }
        _bindLink(e, t) {
          e.href = this.linkService.getDestinationHash(t);
          e.onclick = () => {
            t && this.linkService.navigateTo(t);
            return !1;
          };
          t && (e.className = "internalLink");
        }
        _bindNamedAction(e, t) {
          e.href = this.linkService.getAnchorUrl("");
          e.onclick = () => {
            this.linkService.executeNamedAction(t);
            return !1;
          };
          e.className = "internalLink";
        }
      }
      class TextAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents));
        }
        render() {
          this.container.className = "textAnnotation";
          const e = document.createElement("img");
          e.style.height = this.container.style.height;
          e.style.width = this.container.style.width;
          e.src =
            this.imageResourcesPath +
            "annotation-" +
            this.data.name.toLowerCase() +
            ".svg";
          e.alt = "[{{type}} Annotation]";
          e.dataset.l10nId = "text_annotation_type";
          e.dataset.l10nArgs = JSON.stringify({ type: this.data.name });
          this.data.hasPopup || this._createPopup(this.container, e, this.data);
          this.container.appendChild(e);
          return this.container;
        }
      }
      class WidgetAnnotationElement extends AnnotationElement {
        render() {
          return this.container;
        }
      }
      class TextWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(e) {
          super(
            e,
            e.renderInteractiveForms ||
              (!e.data.hasAppearance && !!e.data.fieldValue)
          );
        }
        render() {
          const e = ["left", "center", "right"],
            t = this.annotationStorage,
            r = this.data.id;
          this.container.className = "textWidgetAnnotation";
          let n = null;
          if (this.renderInteractiveForms) {
            const e = t.getOrCreateValue(r, this.data.fieldValue);
            if (this.data.multiLine) {
              n = document.createElement("textarea");
              n.textContent = e;
            } else {
              n = document.createElement("input");
              n.type = "text";
              n.setAttribute("value", e);
            }
            n.addEventListener("input", function (e) {
              t.setValue(r, e.target.value);
            });
            n.disabled = this.data.readOnly;
            n.name = this.data.fieldName;
            null !== this.data.maxLen && (n.maxLength = this.data.maxLen);
            if (this.data.comb) {
              const e =
                (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
              n.classList.add("comb");
              n.style.letterSpacing = `calc(${e}px - 1ch)`;
            }
          } else {
            n = document.createElement("div");
            n.textContent = this.data.fieldValue;
            n.style.verticalAlign = "middle";
            n.style.display = "table-cell";
            let e = null;
            this.data.fontRefName &&
              this.page.commonObjs.has(this.data.fontRefName) &&
              (e = this.page.commonObjs.get(this.data.fontRefName));
            this._setTextStyle(n, e);
          }
          null !== this.data.textAlignment &&
            (n.style.textAlign = e[this.data.textAlignment]);
          this.container.appendChild(n);
          return this.container;
        }
        _setTextStyle(e, t) {
          const r = e.style;
          r.fontSize = this.data.fontSize + "px";
          r.direction = this.data.fontDirection < 0 ? "rtl" : "ltr";
          if (!t) return;
          let n = "normal";
          t.black ? (n = "900") : t.bold && (n = "bold");
          r.fontWeight = n;
          r.fontStyle = t.italic ? "italic" : "normal";
          const s = t.loadedName ? `"${t.loadedName}", ` : "",
            a = t.fallbackName || "Helvetica, sans-serif";
          r.fontFamily = s + a;
        }
      }
      class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(e) {
          super(e, e.renderInteractiveForms);
        }
        render() {
          const e = this.annotationStorage,
            t = this.data,
            r = t.id,
            n = e.getOrCreateValue(r, t.fieldValue && "Off" !== t.fieldValue);
          this.container.className = "buttonWidgetAnnotation checkBox";
          const s = document.createElement("input");
          s.disabled = t.readOnly;
          s.type = "checkbox";
          s.name = this.data.fieldName;
          n && s.setAttribute("checked", !0);
          s.addEventListener("change", function (t) {
            e.setValue(r, t.target.checked);
          });
          this.container.appendChild(s);
          return this.container;
        }
      }
      class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(e) {
          super(e, e.renderInteractiveForms);
        }
        render() {
          this.container.className = "buttonWidgetAnnotation radioButton";
          const e = this.annotationStorage,
            t = this.data,
            r = t.id,
            n = e.getOrCreateValue(r, t.fieldValue === t.buttonValue),
            s = document.createElement("input");
          s.disabled = t.readOnly;
          s.type = "radio";
          s.name = t.fieldName;
          n && s.setAttribute("checked", !0);
          s.addEventListener("change", function (t) {
            const n = t.target.name;
            for (const r of document.getElementsByName(n))
              r !== t.target &&
                e.setValue(r.parentNode.getAttribute("data-annotation-id"), !1);
            e.setValue(r, t.target.checked);
          });
          this.container.appendChild(s);
          return this.container;
        }
      }
      class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
        render() {
          const e = super.render();
          e.className = "buttonWidgetAnnotation pushButton";
          return e;
        }
      }
      class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
        constructor(e) {
          super(e, e.renderInteractiveForms);
        }
        render() {
          this.container.className = "choiceWidgetAnnotation";
          const e = this.annotationStorage,
            t = this.data.id;
          e.getOrCreateValue(
            t,
            this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : null
          );
          const r = document.createElement("select");
          r.disabled = this.data.readOnly;
          r.name = this.data.fieldName;
          if (!this.data.combo) {
            r.size = this.data.options.length;
            this.data.multiSelect && (r.multiple = !0);
          }
          for (const e of this.data.options) {
            const t = document.createElement("option");
            t.textContent = e.displayValue;
            t.value = e.exportValue;
            this.data.fieldValue.includes(e.exportValue) &&
              t.setAttribute("selected", !0);
            r.appendChild(t);
          }
          r.addEventListener("input", function (r) {
            const n = r.target.options,
              s = n[n.selectedIndex].value;
            e.setValue(t, s);
          });
          this.container.appendChild(r);
          return this.container;
        }
      }
      class PopupAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !(!e.data.title && !e.data.contents));
        }
        render() {
          this.container.className = "popupAnnotation";
          if (
            ["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"].includes(
              this.data.parentType
            )
          )
            return this.container;
          const e = `[data-annotation-id="${this.data.parentId}"]`,
            t = this.layer.querySelector(e);
          if (!t) return this.container;
          const r = new PopupElement({
              container: this.container,
              trigger: t,
              color: this.data.color,
              title: this.data.title,
              modificationDate: this.data.modificationDate,
              contents: this.data.contents,
            }),
            n = parseFloat(t.style.left),
            s = parseFloat(t.style.width);
          this.container.style.transformOrigin = `-${n + s}px -${t.style.top}`;
          this.container.style.left = n + s + "px";
          this.container.appendChild(r.render());
          return this.container;
        }
      }
      class PopupElement {
        constructor(e) {
          this.container = e.container;
          this.trigger = e.trigger;
          this.color = e.color;
          this.title = e.title;
          this.modificationDate = e.modificationDate;
          this.contents = e.contents;
          this.hideWrapper = e.hideWrapper || !1;
          this.pinned = !1;
        }
        render() {
          const e = document.createElement("div");
          e.className = "popupWrapper";
          this.hideElement = this.hideWrapper ? e : this.container;
          this.hideElement.setAttribute("hidden", !0);
          const t = document.createElement("div");
          t.className = "popup";
          const r = this.color;
          if (r) {
            const e = 0.7 * (255 - r[0]) + r[0],
              n = 0.7 * (255 - r[1]) + r[1],
              a = 0.7 * (255 - r[2]) + r[2];
            t.style.backgroundColor = s.Util.makeCssRgb(0 | e, 0 | n, 0 | a);
          }
          const a = document.createElement("h1");
          a.textContent = this.title;
          t.appendChild(a);
          const i = n.PDFDateString.toDateObject(this.modificationDate);
          if (i) {
            const e = document.createElement("span");
            e.textContent = "{{date}}, {{time}}";
            e.dataset.l10nId = "annotation_date_string";
            e.dataset.l10nArgs = JSON.stringify({
              date: i.toLocaleDateString(),
              time: i.toLocaleTimeString(),
            });
            t.appendChild(e);
          }
          const o = this._formatContents(this.contents);
          t.appendChild(o);
          this.trigger.addEventListener("click", this._toggle.bind(this));
          this.trigger.addEventListener("mouseover", this._show.bind(this, !1));
          this.trigger.addEventListener("mouseout", this._hide.bind(this, !1));
          t.addEventListener("click", this._hide.bind(this, !0));
          e.appendChild(t);
          return e;
        }
        _formatContents(e) {
          const t = document.createElement("p"),
            r = e.split(/(?:\r\n?|\n)/);
          for (let e = 0, n = r.length; e < n; ++e) {
            const s = r[e];
            t.appendChild(document.createTextNode(s));
            e < n - 1 && t.appendChild(document.createElement("br"));
          }
          return t;
        }
        _toggle() {
          this.pinned ? this._hide(!0) : this._show(!0);
        }
        _show(e = !1) {
          e && (this.pinned = !0);
          if (this.hideElement.hasAttribute("hidden")) {
            this.hideElement.removeAttribute("hidden");
            this.container.style.zIndex += 1;
          }
        }
        _hide(e = !0) {
          e && (this.pinned = !1);
          if (!this.hideElement.hasAttribute("hidden") && !this.pinned) {
            this.hideElement.setAttribute("hidden", !0);
            this.container.style.zIndex -= 1;
          }
        }
      }
      class FreeTextAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "freeTextAnnotation";
          this.data.hasPopup ||
            this._createPopup(this.container, null, this.data);
          return this.container;
        }
      }
      class LineAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "lineAnnotation";
          const e = this.data,
            t = e.rect[2] - e.rect[0],
            r = e.rect[3] - e.rect[1],
            n = this.svgFactory.create(t, r),
            s = this.svgFactory.createElement("svg:line");
          s.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]);
          s.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]);
          s.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]);
          s.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]);
          s.setAttribute("stroke-width", e.borderStyle.width || 1);
          s.setAttribute("stroke", "transparent");
          n.appendChild(s);
          this.container.append(n);
          this._createPopup(this.container, s, e);
          return this.container;
        }
      }
      class SquareAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "squareAnnotation";
          const e = this.data,
            t = e.rect[2] - e.rect[0],
            r = e.rect[3] - e.rect[1],
            n = this.svgFactory.create(t, r),
            s = e.borderStyle.width,
            a = this.svgFactory.createElement("svg:rect");
          a.setAttribute("x", s / 2);
          a.setAttribute("y", s / 2);
          a.setAttribute("width", t - s);
          a.setAttribute("height", r - s);
          a.setAttribute("stroke-width", s || 1);
          a.setAttribute("stroke", "transparent");
          a.setAttribute("fill", "none");
          n.appendChild(a);
          this.container.append(n);
          this._createPopup(this.container, a, e);
          return this.container;
        }
      }
      class CircleAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "circleAnnotation";
          const e = this.data,
            t = e.rect[2] - e.rect[0],
            r = e.rect[3] - e.rect[1],
            n = this.svgFactory.create(t, r),
            s = e.borderStyle.width,
            a = this.svgFactory.createElement("svg:ellipse");
          a.setAttribute("cx", t / 2);
          a.setAttribute("cy", r / 2);
          a.setAttribute("rx", t / 2 - s / 2);
          a.setAttribute("ry", r / 2 - s / 2);
          a.setAttribute("stroke-width", s || 1);
          a.setAttribute("stroke", "transparent");
          a.setAttribute("fill", "none");
          n.appendChild(a);
          this.container.append(n);
          this._createPopup(this.container, a, e);
          return this.container;
        }
      }
      class PolylineAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
          this.containerClassName = "polylineAnnotation";
          this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.className = this.containerClassName;
          const e = this.data,
            t = e.rect[2] - e.rect[0],
            r = e.rect[3] - e.rect[1],
            n = this.svgFactory.create(t, r);
          let s = [];
          for (const t of e.vertices) {
            const r = t.x - e.rect[0],
              n = e.rect[3] - t.y;
            s.push(r + "," + n);
          }
          s = s.join(" ");
          const a = this.svgFactory.createElement(this.svgElementName);
          a.setAttribute("points", s);
          a.setAttribute("stroke-width", e.borderStyle.width || 1);
          a.setAttribute("stroke", "transparent");
          a.setAttribute("fill", "none");
          n.appendChild(a);
          this.container.append(n);
          this._createPopup(this.container, a, e);
          return this.container;
        }
      }
      class PolygonAnnotationElement extends PolylineAnnotationElement {
        constructor(e) {
          super(e);
          this.containerClassName = "polygonAnnotation";
          this.svgElementName = "svg:polygon";
        }
      }
      class CaretAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "caretAnnotation";
          this.data.hasPopup ||
            this._createPopup(this.container, null, this.data);
          return this.container;
        }
      }
      class InkAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
          this.containerClassName = "inkAnnotation";
          this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.className = this.containerClassName;
          const e = this.data,
            t = e.rect[2] - e.rect[0],
            r = e.rect[3] - e.rect[1],
            n = this.svgFactory.create(t, r);
          for (const t of e.inkLists) {
            let r = [];
            for (const n of t) {
              const t = n.x - e.rect[0],
                s = e.rect[3] - n.y;
              r.push(`${t},${s}`);
            }
            r = r.join(" ");
            const s = this.svgFactory.createElement(this.svgElementName);
            s.setAttribute("points", r);
            s.setAttribute("stroke-width", e.borderStyle.width || 1);
            s.setAttribute("stroke", "transparent");
            s.setAttribute("fill", "none");
            this._createPopup(this.container, s, e);
            n.appendChild(s);
          }
          this.container.append(n);
          return this.container;
        }
      }
      class HighlightAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "highlightAnnotation";
          this.data.hasPopup ||
            this._createPopup(this.container, null, this.data);
          return this.container;
        }
      }
      class UnderlineAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "underlineAnnotation";
          this.data.hasPopup ||
            this._createPopup(this.container, null, this.data);
          return this.container;
        }
      }
      class SquigglyAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "squigglyAnnotation";
          this.data.hasPopup ||
            this._createPopup(this.container, null, this.data);
          return this.container;
        }
      }
      class StrikeOutAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "strikeoutAnnotation";
          this.data.hasPopup ||
            this._createPopup(this.container, null, this.data);
          return this.container;
        }
      }
      class StampAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !!(e.data.hasPopup || e.data.title || e.data.contents), !0);
        }
        render() {
          this.container.className = "stampAnnotation";
          this.data.hasPopup ||
            this._createPopup(this.container, null, this.data);
          return this.container;
        }
      }
      class FileAttachmentAnnotationElement extends AnnotationElement {
        constructor(e) {
          super(e, !0);
          const { filename: t, content: r } = this.data.file;
          this.filename = (0, n.getFilenameFromUrl)(t);
          this.content = r;
          this.linkService.eventBus &&
            this.linkService.eventBus.dispatch("fileattachmentannotation", {
              source: this,
              id: (0, s.stringToPDFString)(t),
              filename: t,
              content: r,
            });
        }
        render() {
          this.container.className = "fileAttachmentAnnotation";
          const e = document.createElement("div");
          e.style.height = this.container.style.height;
          e.style.width = this.container.style.width;
          e.addEventListener("dblclick", this._download.bind(this));
          this.data.hasPopup ||
            (!this.data.title && !this.data.contents) ||
            this._createPopup(this.container, e, this.data);
          this.container.appendChild(e);
          return this.container;
        }
        _download() {
          this.downloadManager
            ? this.downloadManager.downloadData(this.content, this.filename, "")
            : (0, s.warn)(
                "Download cannot be started due to unavailable download manager"
              );
        }
      }
      t.AnnotationLayer = class AnnotationLayer {
        static render(e) {
          const t = [],
            r = [];
          for (const n of e.annotations)
            n &&
              (n.annotationType !== s.AnnotationType.POPUP
                ? t.push(n)
                : r.push(n));
          r.length && t.push(...r);
          for (const r of t) {
            const t = AnnotationElementFactory.create({
              data: r,
              layer: e.div,
              page: e.page,
              viewport: e.viewport,
              linkService: e.linkService,
              downloadManager: e.downloadManager,
              imageResourcesPath: e.imageResourcesPath || "",
              renderInteractiveForms:
                "boolean" != typeof e.renderInteractiveForms ||
                e.renderInteractiveForms,
              svgFactory: new n.DOMSVGFactory(),
              annotationStorage:
                e.annotationStorage || new a.AnnotationStorage(),
            });
            t.isRenderable && e.div.appendChild(t.render());
          }
        }
        static update(e) {
          for (const t of e.annotations) {
            const r = e.div.querySelector(`[data-annotation-id="${t.id}"]`);
            r &&
              (r.style.transform = `matrix(${e.viewport.transform.join(",")})`);
          }
          e.div.removeAttribute("hidden");
        }
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.renderTextLayer = void 0;
      var n = r(2),
        s = (function renderTextLayerClosure() {
          var e = /\S/;
          function appendText(t, r, s) {
            var a = document.createElement("span"),
              i = {
                angle: 0,
                canvasWidth: 0,
                isWhitespace: !1,
                originalTransform: null,
                paddingBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                scale: 1,
              };
            t._textDivs.push(a);
            if (
              (function isAllWhitespace(t) {
                return !e.test(t);
              })(r.str)
            ) {
              i.isWhitespace = !0;
              t._textDivProperties.set(a, i);
              return;
            }
            var o = n.Util.transform(t._viewport.transform, r.transform),
              l = Math.atan2(o[1], o[0]),
              c = s[r.fontName];
            c.vertical && (l += Math.PI / 2);
            var h = Math.sqrt(o[2] * o[2] + o[3] * o[3]),
              d = h;
            c.ascent
              ? (d = c.ascent * d)
              : c.descent && (d = (1 + c.descent) * d);
            let u, p;
            if (0 === l) {
              u = o[4];
              p = o[5] - d;
            } else {
              u = o[4] + d * Math.sin(l);
              p = o[5] - d * Math.cos(l);
            }
            a.style.left = u + "px";
            a.style.top = p + "px";
            a.style.fontSize = h + "px";
            a.style.fontFamily = c.fontFamily;
            a.textContent = r.str;
            t._fontInspectorEnabled && (a.dataset.fontName = r.fontName);
            0 !== l && (i.angle = l * (180 / Math.PI));
            let f = !1;
            if (r.str.length > 1) f = !0;
            else if (r.transform[0] !== r.transform[3]) {
              const e = Math.abs(r.transform[0]),
                t = Math.abs(r.transform[3]);
              e !== t && Math.max(e, t) / Math.min(e, t) > 1.5 && (f = !0);
            }
            f &&
              (c.vertical
                ? (i.canvasWidth = r.height * t._viewport.scale)
                : (i.canvasWidth = r.width * t._viewport.scale));
            t._textDivProperties.set(a, i);
            t._textContentStream && t._layoutText(a);
            if (t._enhanceTextSelection) {
              var g = 1,
                m = 0;
              if (0 !== l) {
                g = Math.cos(l);
                m = Math.sin(l);
              }
              var _,
                A,
                b = (c.vertical ? r.height : r.width) * t._viewport.scale,
                y = h;
              if (0 !== l) {
                _ = [g, m, -m, g, u, p];
                A = n.Util.getAxialAlignedBoundingBox([0, 0, b, y], _);
              } else A = [u, p, u + b, p + y];
              t._bounds.push({
                left: A[0],
                top: A[1],
                right: A[2],
                bottom: A[3],
                div: a,
                size: [b, y],
                m: _,
              });
            }
          }
          function render(e) {
            if (!e._canceled) {
              var t = e._textDivs,
                r = e._capability,
                n = t.length;
              if (n > 1e5) {
                e._renderingDone = !0;
                r.resolve();
              } else {
                if (!e._textContentStream)
                  for (var s = 0; s < n; s++) e._layoutText(t[s]);
                e._renderingDone = !0;
                r.resolve();
              }
            }
          }
          function findPositiveMin(e, t, r) {
            let n = 0;
            for (let s = 0; s < r; s++) {
              const r = e[t++];
              r > 0 && (n = n ? Math.min(r, n) : r);
            }
            return n;
          }
          function expand(e) {
            for (
              var t = e._bounds,
                r = e._viewport,
                s = (function expandBounds(e, t, r) {
                  var n = r.map(function (e, t) {
                    return {
                      x1: e.left,
                      y1: e.top,
                      x2: e.right,
                      y2: e.bottom,
                      index: t,
                      x1New: void 0,
                      x2New: void 0,
                    };
                  });
                  expandBoundsLTR(e, n);
                  var s = new Array(r.length);
                  n.forEach(function (e) {
                    var t = e.index;
                    s[t] = { left: e.x1New, top: 0, right: e.x2New, bottom: 0 };
                  });
                  r.map(function (t, r) {
                    var a = s[r],
                      i = n[r];
                    i.x1 = t.top;
                    i.y1 = e - a.right;
                    i.x2 = t.bottom;
                    i.y2 = e - a.left;
                    i.index = r;
                    i.x1New = void 0;
                    i.x2New = void 0;
                  });
                  expandBoundsLTR(t, n);
                  n.forEach(function (e) {
                    var t = e.index;
                    s[t].top = e.x1New;
                    s[t].bottom = e.x2New;
                  });
                  return s;
                })(r.width, r.height, t),
                a = 0;
              a < s.length;
              a++
            ) {
              var i = t[a].div,
                o = e._textDivProperties.get(i);
              if (0 !== o.angle) {
                var l = s[a],
                  c = t[a],
                  h = c.m,
                  d = h[0],
                  u = h[1],
                  p = [[0, 0], [0, c.size[1]], [c.size[0], 0], c.size],
                  f = new Float64Array(64);
                p.forEach(function (e, t) {
                  var r = n.Util.applyTransform(e, h);
                  f[t + 0] = d && (l.left - r[0]) / d;
                  f[t + 4] = u && (l.top - r[1]) / u;
                  f[t + 8] = d && (l.right - r[0]) / d;
                  f[t + 12] = u && (l.bottom - r[1]) / u;
                  f[t + 16] = u && (l.left - r[0]) / -u;
                  f[t + 20] = d && (l.top - r[1]) / d;
                  f[t + 24] = u && (l.right - r[0]) / -u;
                  f[t + 28] = d && (l.bottom - r[1]) / d;
                  f[t + 32] = d && (l.left - r[0]) / -d;
                  f[t + 36] = u && (l.top - r[1]) / -u;
                  f[t + 40] = d && (l.right - r[0]) / -d;
                  f[t + 44] = u && (l.bottom - r[1]) / -u;
                  f[t + 48] = u && (l.left - r[0]) / u;
                  f[t + 52] = d && (l.top - r[1]) / -d;
                  f[t + 56] = u && (l.right - r[0]) / u;
                  f[t + 60] = d && (l.bottom - r[1]) / -d;
                });
                var g = 1 + Math.min(Math.abs(d), Math.abs(u));
                o.paddingLeft = findPositiveMin(f, 32, 16) / g;
                o.paddingTop = findPositiveMin(f, 48, 16) / g;
                o.paddingRight = findPositiveMin(f, 0, 16) / g;
                o.paddingBottom = findPositiveMin(f, 16, 16) / g;
                e._textDivProperties.set(i, o);
              } else {
                o.paddingLeft = t[a].left - s[a].left;
                o.paddingTop = t[a].top - s[a].top;
                o.paddingRight = s[a].right - t[a].right;
                o.paddingBottom = s[a].bottom - t[a].bottom;
                e._textDivProperties.set(i, o);
              }
            }
          }
          function expandBoundsLTR(e, t) {
            t.sort(function (e, t) {
              return e.x1 - t.x1 || e.index - t.index;
            });
            var r = [
              {
                start: -1 / 0,
                end: 1 / 0,
                boundary: {
                  x1: -1 / 0,
                  y1: -1 / 0,
                  x2: 0,
                  y2: 1 / 0,
                  index: -1,
                  x1New: 0,
                  x2New: 0,
                },
              },
            ];
            t.forEach(function (e) {
              for (var t = 0; t < r.length && r[t].end <= e.y1; ) t++;
              for (var n, s, a = r.length - 1; a >= 0 && r[a].start >= e.y2; )
                a--;
              var i,
                o,
                l = -1 / 0;
              for (i = t; i <= a; i++) {
                var c;
                (c =
                  (s = (n = r[i]).boundary).x2 > e.x1
                    ? s.index > e.index
                      ? s.x1New
                      : e.x1
                    : void 0 === s.x2New
                    ? (s.x2 + e.x1) / 2
                    : s.x2New) > l && (l = c);
              }
              e.x1New = l;
              for (i = t; i <= a; i++)
                void 0 === (s = (n = r[i]).boundary).x2New
                  ? s.x2 > e.x1
                    ? s.index > e.index && (s.x2New = s.x2)
                    : (s.x2New = l)
                  : s.x2New > l && (s.x2New = Math.max(l, s.x2));
              var h = [],
                d = null;
              for (i = t; i <= a; i++) {
                var u = (s = (n = r[i]).boundary).x2 > e.x2 ? s : e;
                if (d === u) h[h.length - 1].end = n.end;
                else {
                  h.push({ start: n.start, end: n.end, boundary: u });
                  d = u;
                }
              }
              if (r[t].start < e.y1) {
                h[0].start = e.y1;
                h.unshift({
                  start: r[t].start,
                  end: e.y1,
                  boundary: r[t].boundary,
                });
              }
              if (e.y2 < r[a].end) {
                h[h.length - 1].end = e.y2;
                h.push({ start: e.y2, end: r[a].end, boundary: r[a].boundary });
              }
              for (i = t; i <= a; i++)
                if (void 0 === (s = (n = r[i]).boundary).x2New) {
                  var p = !1;
                  for (o = t - 1; !p && o >= 0 && r[o].start >= s.y1; o--)
                    p = r[o].boundary === s;
                  for (o = a + 1; !p && o < r.length && r[o].end <= s.y2; o++)
                    p = r[o].boundary === s;
                  for (o = 0; !p && o < h.length; o++) p = h[o].boundary === s;
                  p || (s.x2New = l);
                }
              Array.prototype.splice.apply(r, [t, a - t + 1].concat(h));
            });
            r.forEach(function (t) {
              var r = t.boundary;
              void 0 === r.x2New && (r.x2New = Math.max(e, r.x2));
            });
          }
          function TextLayerRenderTask({
            textContent: e,
            textContentStream: t,
            container: r,
            viewport: s,
            textDivs: a,
            textContentItemsStr: i,
            enhanceTextSelection: o,
          }) {
            this._textContent = e;
            this._textContentStream = t;
            this._container = r;
            this._document = r.ownerDocument;
            this._viewport = s;
            this._textDivs = a || [];
            this._textContentItemsStr = i || [];
            this._enhanceTextSelection = !!o;
            this._fontInspectorEnabled = !(
              !globalThis.FontInspector || !globalThis.FontInspector.enabled
            );
            this._reader = null;
            this._layoutTextLastFontSize = null;
            this._layoutTextLastFontFamily = null;
            this._layoutTextCtx = null;
            this._textDivProperties = new WeakMap();
            this._renderingDone = !1;
            this._canceled = !1;
            this._capability = (0, n.createPromiseCapability)();
            this._renderTimer = null;
            this._bounds = [];
            this._capability.promise
              .finally(() => {
                if (this._layoutTextCtx) {
                  this._layoutTextCtx.canvas.width = 0;
                  this._layoutTextCtx.canvas.height = 0;
                  this._layoutTextCtx = null;
                }
              })
              .catch(() => {});
          }
          TextLayerRenderTask.prototype = {
            get promise() {
              return this._capability.promise;
            },
            cancel: function TextLayer_cancel() {
              this._canceled = !0;
              if (this._reader) {
                this._reader.cancel(
                  new n.AbortException("TextLayer task cancelled.")
                );
                this._reader = null;
              }
              if (null !== this._renderTimer) {
                clearTimeout(this._renderTimer);
                this._renderTimer = null;
              }
              this._capability.reject(new Error("TextLayer task cancelled."));
            },
            _processItems(e, t) {
              for (let r = 0, n = e.length; r < n; r++) {
                this._textContentItemsStr.push(e[r].str);
                appendText(this, e[r], t);
              }
            },
            _layoutText(e) {
              const t = this._textDivProperties.get(e);
              if (t.isWhitespace) return;
              let r = "";
              if (0 !== t.canvasWidth) {
                const { fontSize: n, fontFamily: s } = e.style;
                if (
                  n !== this._layoutTextLastFontSize ||
                  s !== this._layoutTextLastFontFamily
                ) {
                  this._layoutTextCtx.font = `${n} ${s}`;
                  this._layoutTextLastFontSize = n;
                  this._layoutTextLastFontFamily = s;
                }
                const { width: a } = this._layoutTextCtx.measureText(
                  e.textContent
                );
                if (a > 0) {
                  t.scale = t.canvasWidth / a;
                  r = `scaleX(${t.scale})`;
                }
              }
              0 !== t.angle && (r = `rotate(${t.angle}deg) ${r}`);
              if (r.length > 0) {
                this._enhanceTextSelection && (t.originalTransform = r);
                e.style.transform = r;
              }
              this._textDivProperties.set(e, t);
              this._container.appendChild(e);
            },
            _render: function TextLayer_render(e) {
              const t = (0, n.createPromiseCapability)();
              let r = Object.create(null);
              const s = this._document.createElement("canvas");
              s.mozOpaque = !0;
              this._layoutTextCtx = s.getContext("2d", { alpha: !1 });
              if (this._textContent) {
                const e = this._textContent.items,
                  r = this._textContent.styles;
                this._processItems(e, r);
                t.resolve();
              } else {
                if (!this._textContentStream)
                  throw new Error(
                    'Neither "textContent" nor "textContentStream" parameters specified.'
                  );
                {
                  const pump = () => {
                    this._reader.read().then(({ value: e, done: n }) => {
                      if (n) t.resolve();
                      else {
                        Object.assign(r, e.styles);
                        this._processItems(e.items, r);
                        pump();
                      }
                    }, t.reject);
                  };
                  this._reader = this._textContentStream.getReader();
                  pump();
                }
              }
              t.promise.then(() => {
                r = null;
                e
                  ? (this._renderTimer = setTimeout(() => {
                      render(this);
                      this._renderTimer = null;
                    }, e))
                  : render(this);
              }, this._capability.reject);
            },
            expandTextDivs: function TextLayer_expandTextDivs(e) {
              if (!this._enhanceTextSelection || !this._renderingDone) return;
              if (null !== this._bounds) {
                expand(this);
                this._bounds = null;
              }
              const t = [],
                r = [];
              for (var n = 0, s = this._textDivs.length; n < s; n++) {
                const s = this._textDivs[n],
                  a = this._textDivProperties.get(s);
                if (!a.isWhitespace)
                  if (e) {
                    t.length = 0;
                    r.length = 0;
                    a.originalTransform && t.push(a.originalTransform);
                    if (a.paddingTop > 0) {
                      r.push(a.paddingTop + "px");
                      t.push(`translateY(${-a.paddingTop}px)`);
                    } else r.push(0);
                    a.paddingRight > 0
                      ? r.push(a.paddingRight / a.scale + "px")
                      : r.push(0);
                    a.paddingBottom > 0
                      ? r.push(a.paddingBottom + "px")
                      : r.push(0);
                    if (a.paddingLeft > 0) {
                      r.push(a.paddingLeft / a.scale + "px");
                      t.push(`translateX(${-a.paddingLeft / a.scale}px)`);
                    } else r.push(0);
                    s.style.padding = r.join(" ");
                    t.length && (s.style.transform = t.join(" "));
                  } else {
                    s.style.padding = null;
                    s.style.transform = a.originalTransform;
                  }
              }
            },
          };
          return function renderTextLayer(e) {
            var t = new TextLayerRenderTask({
              textContent: e.textContent,
              textContentStream: e.textContentStream,
              container: e.container,
              viewport: e.viewport,
              textDivs: e.textDivs,
              textContentItemsStr: e.textContentItemsStr,
              enhanceTextSelection: e.enhanceTextSelection,
            });
            t._render(e.timeout);
            return t;
          };
        })();
      t.renderTextLayer = s;
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.SVGGraphics = void 0;
      var n = r(2),
        s = r(1),
        a = r(4);
      let SVGGraphics = function () {
        throw new Error("Not implemented: SVGGraphics");
      };
      t.SVGGraphics = SVGGraphics;
      {
        const e = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000",
          },
          r = "http://www.w3.org/XML/1998/namespace",
          i = "http://www.w3.org/1999/xlink",
          o = ["butt", "round", "square"],
          l = ["miter", "round", "bevel"],
          c = (function () {
            const e = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]),
              t = new Int32Array(256);
            for (let e = 0; e < 256; e++) {
              let r = e;
              for (let e = 0; e < 8; e++)
                r =
                  1 & r
                    ? 3988292384 ^ ((r >> 1) & 2147483647)
                    : (r >> 1) & 2147483647;
              t[e] = r;
            }
            function writePngChunk(e, r, n, s) {
              let a = s;
              const i = r.length;
              n[a] = (i >> 24) & 255;
              n[a + 1] = (i >> 16) & 255;
              n[a + 2] = (i >> 8) & 255;
              n[a + 3] = 255 & i;
              a += 4;
              n[a] = 255 & e.charCodeAt(0);
              n[a + 1] = 255 & e.charCodeAt(1);
              n[a + 2] = 255 & e.charCodeAt(2);
              n[a + 3] = 255 & e.charCodeAt(3);
              a += 4;
              n.set(r, a);
              a += r.length;
              const o = (function crc32(e, r, n) {
                let s = -1;
                for (let a = r; a < n; a++) {
                  const r = 255 & (s ^ e[a]);
                  s = (s >>> 8) ^ t[r];
                }
                return -1 ^ s;
              })(n, s + 4, a);
              n[a] = (o >> 24) & 255;
              n[a + 1] = (o >> 16) & 255;
              n[a + 2] = (o >> 8) & 255;
              n[a + 3] = 255 & o;
            }
            function deflateSyncUncompressed(e) {
              let t = e.length;
              const r = Math.ceil(t / 65535),
                n = new Uint8Array(2 + t + 5 * r + 4);
              let s = 0;
              n[s++] = 120;
              n[s++] = 156;
              let a = 0;
              for (; t > 65535; ) {
                n[s++] = 0;
                n[s++] = 255;
                n[s++] = 255;
                n[s++] = 0;
                n[s++] = 0;
                n.set(e.subarray(a, a + 65535), s);
                s += 65535;
                a += 65535;
                t -= 65535;
              }
              n[s++] = 1;
              n[s++] = 255 & t;
              n[s++] = (t >> 8) & 255;
              n[s++] = 255 & ~t;
              n[s++] = ((65535 & ~t) >> 8) & 255;
              n.set(e.subarray(a), s);
              s += e.length - a;
              const i = (function adler32(e, t, r) {
                let n = 1,
                  s = 0;
                for (let a = t; a < r; ++a) {
                  n = (n + (255 & e[a])) % 65521;
                  s = (s + n) % 65521;
                }
                return (s << 16) | n;
              })(e, 0, e.length);
              n[s++] = (i >> 24) & 255;
              n[s++] = (i >> 16) & 255;
              n[s++] = (i >> 8) & 255;
              n[s++] = 255 & i;
              return n;
            }
            function encode(t, r, s, i) {
              const o = t.width,
                l = t.height;
              let c, h, d;
              const u = t.data;
              switch (r) {
                case n.ImageKind.GRAYSCALE_1BPP:
                  h = 0;
                  c = 1;
                  d = (o + 7) >> 3;
                  break;
                case n.ImageKind.RGB_24BPP:
                  h = 2;
                  c = 8;
                  d = 3 * o;
                  break;
                case n.ImageKind.RGBA_32BPP:
                  h = 6;
                  c = 8;
                  d = 4 * o;
                  break;
                default:
                  throw new Error("invalid format");
              }
              const p = new Uint8Array((1 + d) * l);
              let f = 0,
                g = 0;
              for (let e = 0; e < l; ++e) {
                p[f++] = 0;
                p.set(u.subarray(g, g + d), f);
                g += d;
                f += d;
              }
              if (r === n.ImageKind.GRAYSCALE_1BPP && i) {
                f = 0;
                for (let e = 0; e < l; e++) {
                  f++;
                  for (let e = 0; e < d; e++) p[f++] ^= 255;
                }
              }
              const m = new Uint8Array([
                  (o >> 24) & 255,
                  (o >> 16) & 255,
                  (o >> 8) & 255,
                  255 & o,
                  (l >> 24) & 255,
                  (l >> 16) & 255,
                  (l >> 8) & 255,
                  255 & l,
                  c,
                  h,
                  0,
                  0,
                  0,
                ]),
                _ = (function deflateSync(e) {
                  if (!a.isNodeJS) return deflateSyncUncompressed(e);
                  try {
                    let t;
                    t =
                      parseInt(process.versions.node) >= 8 ? e : Buffer.from(e);
                    const r = require("zlib").deflateSync(t, { level: 9 });
                    return r instanceof Uint8Array ? r : new Uint8Array(r);
                  } catch (e) {
                    (0, n.warn)(
                      "Not compressing PNG because zlib.deflateSync is unavailable: " +
                        e
                    );
                  }
                  return deflateSyncUncompressed(e);
                })(p),
                A = e.length + 36 + m.length + _.length,
                b = new Uint8Array(A);
              let y = 0;
              b.set(e, y);
              y += e.length;
              writePngChunk("IHDR", m, b, y);
              y += 12 + m.length;
              writePngChunk("IDATA", _, b, y);
              y += 12 + _.length;
              writePngChunk("IEND", new Uint8Array(0), b, y);
              return (0, n.createObjectURL)(b, "image/png", s);
            }
            return function convertImgDataToPng(e, t, r) {
              return encode(
                e,
                void 0 === e.kind ? n.ImageKind.GRAYSCALE_1BPP : e.kind,
                t,
                r
              );
            };
          })();
        class SVGExtraState {
          constructor() {
            this.fontSizeScale = 1;
            this.fontWeight = e.fontWeight;
            this.fontSize = 0;
            this.textMatrix = n.IDENTITY_MATRIX;
            this.fontMatrix = n.FONT_IDENTITY_MATRIX;
            this.leading = 0;
            this.textRenderingMode = n.TextRenderingMode.FILL;
            this.textMatrixScale = 1;
            this.x = 0;
            this.y = 0;
            this.lineX = 0;
            this.lineY = 0;
            this.charSpacing = 0;
            this.wordSpacing = 0;
            this.textHScale = 1;
            this.textRise = 0;
            this.fillColor = e.fillColor;
            this.strokeColor = "#000000";
            this.fillAlpha = 1;
            this.strokeAlpha = 1;
            this.lineWidth = 1;
            this.lineJoin = "";
            this.lineCap = "";
            this.miterLimit = 0;
            this.dashArray = [];
            this.dashPhase = 0;
            this.dependencies = [];
            this.activeClipUrl = null;
            this.clipGroup = null;
            this.maskId = "";
          }
          clone() {
            return Object.create(this);
          }
          setCurrentPoint(e, t) {
            this.x = e;
            this.y = t;
          }
        }
        function pf(e) {
          if (Number.isInteger(e)) return e.toString();
          const t = e.toFixed(10);
          let r = t.length - 1;
          if ("0" !== t[r]) return t;
          do {
            r--;
          } while ("0" === t[r]);
          return t.substring(0, "." === t[r] ? r : r + 1);
        }
        function pm(e) {
          if (0 === e[4] && 0 === e[5]) {
            if (0 === e[1] && 0 === e[2])
              return 1 === e[0] && 1 === e[3]
                ? ""
                : `scale(${pf(e[0])} ${pf(e[3])})`;
            if (e[0] === e[3] && e[1] === -e[2]) {
              return `rotate(${pf((180 * Math.acos(e[0])) / Math.PI)})`;
            }
          } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3])
            return `translate(${pf(e[4])} ${pf(e[5])})`;
          return (
            `matrix(${pf(e[0])} ${pf(e[1])} ${pf(e[2])} ${pf(e[3])} ${pf(
              e[4]
            )} ` +
            pf(e[5]) +
            ")"
          );
        }
        let h = 0,
          d = 0,
          u = 0;
        t.SVGGraphics = SVGGraphics = class SVGGraphics {
          constructor(e, t, r = !1) {
            this.svgFactory = new s.DOMSVGFactory();
            this.current = new SVGExtraState();
            this.transformMatrix = n.IDENTITY_MATRIX;
            this.transformStack = [];
            this.extraStack = [];
            this.commonObjs = e;
            this.objs = t;
            this.pendingClip = null;
            this.pendingEOFill = !1;
            this.embedFonts = !1;
            this.embeddedFonts = Object.create(null);
            this.cssStyle = null;
            this.forceDataSchema = !!r;
            this._operatorIdMapping = [];
            for (const e in n.OPS) this._operatorIdMapping[n.OPS[e]] = e;
          }
          save() {
            this.transformStack.push(this.transformMatrix);
            const e = this.current;
            this.extraStack.push(e);
            this.current = e.clone();
          }
          restore() {
            this.transformMatrix = this.transformStack.pop();
            this.current = this.extraStack.pop();
            this.pendingClip = null;
            this.tgrp = null;
          }
          group(e) {
            this.save();
            this.executeOpTree(e);
            this.restore();
          }
          loadDependencies(e) {
            const t = e.fnArray,
              r = e.argsArray;
            for (let e = 0, s = t.length; e < s; e++)
              if (t[e] === n.OPS.dependency)
                for (const t of r[e]) {
                  const e = t.startsWith("g_") ? this.commonObjs : this.objs,
                    r = new Promise((r) => {
                      e.get(t, r);
                    });
                  this.current.dependencies.push(r);
                }
            return Promise.all(this.current.dependencies);
          }
          transform(e, t, r, s, a, i) {
            const o = [e, t, r, s, a, i];
            this.transformMatrix = n.Util.transform(this.transformMatrix, o);
            this.tgrp = null;
          }
          getSVG(e, t) {
            this.viewport = t;
            const r = this._initialize(t);
            return this.loadDependencies(e).then(() => {
              this.transformMatrix = n.IDENTITY_MATRIX;
              this.executeOpTree(this.convertOpList(e));
              return r;
            });
          }
          convertOpList(e) {
            const t = this._operatorIdMapping,
              r = e.argsArray,
              n = e.fnArray,
              s = [];
            for (let e = 0, a = n.length; e < a; e++) {
              const a = n[e];
              s.push({ fnId: a, fn: t[a], args: r[e] });
            }
            return (function opListToTree(e) {
              let t = [];
              const r = [];
              for (const n of e)
                if ("save" !== n.fn)
                  "restore" === n.fn ? (t = r.pop()) : t.push(n);
                else {
                  t.push({ fnId: 92, fn: "group", items: [] });
                  r.push(t);
                  t = t[t.length - 1].items;
                }
              return t;
            })(s);
          }
          executeOpTree(e) {
            for (const t of e) {
              const e = t.fn,
                r = t.fnId,
                s = t.args;
              switch (0 | r) {
                case n.OPS.beginText:
                  this.beginText();
                  break;
                case n.OPS.dependency:
                  break;
                case n.OPS.setLeading:
                  this.setLeading(s);
                  break;
                case n.OPS.setLeadingMoveText:
                  this.setLeadingMoveText(s[0], s[1]);
                  break;
                case n.OPS.setFont:
                  this.setFont(s);
                  break;
                case n.OPS.showText:
                case n.OPS.showSpacedText:
                  this.showText(s[0]);
                  break;
                case n.OPS.endText:
                  this.endText();
                  break;
                case n.OPS.moveText:
                  this.moveText(s[0], s[1]);
                  break;
                case n.OPS.setCharSpacing:
                  this.setCharSpacing(s[0]);
                  break;
                case n.OPS.setWordSpacing:
                  this.setWordSpacing(s[0]);
                  break;
                case n.OPS.setHScale:
                  this.setHScale(s[0]);
                  break;
                case n.OPS.setTextMatrix:
                  this.setTextMatrix(s[0], s[1], s[2], s[3], s[4], s[5]);
                  break;
                case n.OPS.setTextRise:
                  this.setTextRise(s[0]);
                  break;
                case n.OPS.setTextRenderingMode:
                  this.setTextRenderingMode(s[0]);
                  break;
                case n.OPS.setLineWidth:
                  this.setLineWidth(s[0]);
                  break;
                case n.OPS.setLineJoin:
                  this.setLineJoin(s[0]);
                  break;
                case n.OPS.setLineCap:
                  this.setLineCap(s[0]);
                  break;
                case n.OPS.setMiterLimit:
                  this.setMiterLimit(s[0]);
                  break;
                case n.OPS.setFillRGBColor:
                  this.setFillRGBColor(s[0], s[1], s[2]);
                  break;
                case n.OPS.setStrokeRGBColor:
                  this.setStrokeRGBColor(s[0], s[1], s[2]);
                  break;
                case n.OPS.setStrokeColorN:
                  this.setStrokeColorN(s);
                  break;
                case n.OPS.setFillColorN:
                  this.setFillColorN(s);
                  break;
                case n.OPS.shadingFill:
                  this.shadingFill(s[0]);
                  break;
                case n.OPS.setDash:
                  this.setDash(s[0], s[1]);
                  break;
                case n.OPS.setRenderingIntent:
                  this.setRenderingIntent(s[0]);
                  break;
                case n.OPS.setFlatness:
                  this.setFlatness(s[0]);
                  break;
                case n.OPS.setGState:
                  this.setGState(s[0]);
                  break;
                case n.OPS.fill:
                  this.fill();
                  break;
                case n.OPS.eoFill:
                  this.eoFill();
                  break;
                case n.OPS.stroke:
                  this.stroke();
                  break;
                case n.OPS.fillStroke:
                  this.fillStroke();
                  break;
                case n.OPS.eoFillStroke:
                  this.eoFillStroke();
                  break;
                case n.OPS.clip:
                  this.clip("nonzero");
                  break;
                case n.OPS.eoClip:
                  this.clip("evenodd");
                  break;
                case n.OPS.paintSolidColorImageMask:
                  this.paintSolidColorImageMask();
                  break;
                case n.OPS.paintImageXObject:
                  this.paintImageXObject(s[0]);
                  break;
                case n.OPS.paintInlineImageXObject:
                  this.paintInlineImageXObject(s[0]);
                  break;
                case n.OPS.paintImageMaskXObject:
                  this.paintImageMaskXObject(s[0]);
                  break;
                case n.OPS.paintFormXObjectBegin:
                  this.paintFormXObjectBegin(s[0], s[1]);
                  break;
                case n.OPS.paintFormXObjectEnd:
                  this.paintFormXObjectEnd();
                  break;
                case n.OPS.closePath:
                  this.closePath();
                  break;
                case n.OPS.closeStroke:
                  this.closeStroke();
                  break;
                case n.OPS.closeFillStroke:
                  this.closeFillStroke();
                  break;
                case n.OPS.closeEOFillStroke:
                  this.closeEOFillStroke();
                  break;
                case n.OPS.nextLine:
                  this.nextLine();
                  break;
                case n.OPS.transform:
                  this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                  break;
                case n.OPS.constructPath:
                  this.constructPath(s[0], s[1]);
                  break;
                case n.OPS.endPath:
                  this.endPath();
                  break;
                case 92:
                  this.group(t.items);
                  break;
                default:
                  (0, n.warn)("Unimplemented operator " + e);
              }
            }
          }
          setWordSpacing(e) {
            this.current.wordSpacing = e;
          }
          setCharSpacing(e) {
            this.current.charSpacing = e;
          }
          nextLine() {
            this.moveText(0, this.current.leading);
          }
          setTextMatrix(e, t, r, n, s, a) {
            const i = this.current;
            i.textMatrix = i.lineMatrix = [e, t, r, n, s, a];
            i.textMatrixScale = Math.sqrt(e * e + t * t);
            i.x = i.lineX = 0;
            i.y = i.lineY = 0;
            i.xcoords = [];
            i.ycoords = [];
            i.tspan = this.svgFactory.createElement("svg:tspan");
            i.tspan.setAttributeNS(null, "font-family", i.fontFamily);
            i.tspan.setAttributeNS(null, "font-size", pf(i.fontSize) + "px");
            i.tspan.setAttributeNS(null, "y", pf(-i.y));
            i.txtElement = this.svgFactory.createElement("svg:text");
            i.txtElement.appendChild(i.tspan);
          }
          beginText() {
            const e = this.current;
            e.x = e.lineX = 0;
            e.y = e.lineY = 0;
            e.textMatrix = n.IDENTITY_MATRIX;
            e.lineMatrix = n.IDENTITY_MATRIX;
            e.textMatrixScale = 1;
            e.tspan = this.svgFactory.createElement("svg:tspan");
            e.txtElement = this.svgFactory.createElement("svg:text");
            e.txtgrp = this.svgFactory.createElement("svg:g");
            e.xcoords = [];
            e.ycoords = [];
          }
          moveText(e, t) {
            const r = this.current;
            r.x = r.lineX += e;
            r.y = r.lineY += t;
            r.xcoords = [];
            r.ycoords = [];
            r.tspan = this.svgFactory.createElement("svg:tspan");
            r.tspan.setAttributeNS(null, "font-family", r.fontFamily);
            r.tspan.setAttributeNS(null, "font-size", pf(r.fontSize) + "px");
            r.tspan.setAttributeNS(null, "y", pf(-r.y));
          }
          showText(t) {
            const s = this.current,
              a = s.font,
              i = s.fontSize;
            if (0 === i) return;
            const o = s.fontSizeScale,
              l = s.charSpacing,
              c = s.wordSpacing,
              h = s.fontDirection,
              d = s.textHScale * h,
              u = a.vertical,
              p = u ? 1 : -1,
              f = a.defaultVMetrics,
              g = i * s.fontMatrix[0];
            let m = 0;
            for (const e of t) {
              if (null === e) {
                m += h * c;
                continue;
              }
              if ((0, n.isNum)(e)) {
                m += (p * e * i) / 1e3;
                continue;
              }
              const t = (e.isSpace ? c : 0) + l,
                r = e.fontChar;
              let d,
                _,
                A,
                b = e.width;
              if (u) {
                let t;
                const r = e.vmetric || f;
                t = e.vmetric ? r[1] : 0.5 * b;
                t = -t * g;
                const n = r[2] * g;
                b = r ? -r[0] : b;
                d = t / o;
                _ = (m + n) / o;
              } else {
                d = m / o;
                _ = 0;
              }
              if (e.isInFont || a.missingFile) {
                s.xcoords.push(s.x + d);
                u && s.ycoords.push(-s.y + _);
                s.tspan.textContent += r;
              }
              A = u ? b * g - t * h : b * g + t * h;
              m += A;
            }
            s.tspan.setAttributeNS(null, "x", s.xcoords.map(pf).join(" "));
            u
              ? s.tspan.setAttributeNS(null, "y", s.ycoords.map(pf).join(" "))
              : s.tspan.setAttributeNS(null, "y", pf(-s.y));
            u ? (s.y -= m) : (s.x += m * d);
            s.tspan.setAttributeNS(null, "font-family", s.fontFamily);
            s.tspan.setAttributeNS(null, "font-size", pf(s.fontSize) + "px");
            s.fontStyle !== e.fontStyle &&
              s.tspan.setAttributeNS(null, "font-style", s.fontStyle);
            s.fontWeight !== e.fontWeight &&
              s.tspan.setAttributeNS(null, "font-weight", s.fontWeight);
            const _ =
              s.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
            if (
              _ === n.TextRenderingMode.FILL ||
              _ === n.TextRenderingMode.FILL_STROKE
            ) {
              s.fillColor !== e.fillColor &&
                s.tspan.setAttributeNS(null, "fill", s.fillColor);
              s.fillAlpha < 1 &&
                s.tspan.setAttributeNS(null, "fill-opacity", s.fillAlpha);
            } else
              s.textRenderingMode === n.TextRenderingMode.ADD_TO_PATH
                ? s.tspan.setAttributeNS(null, "fill", "transparent")
                : s.tspan.setAttributeNS(null, "fill", "none");
            if (
              _ === n.TextRenderingMode.STROKE ||
              _ === n.TextRenderingMode.FILL_STROKE
            ) {
              const e = 1 / (s.textMatrixScale || 1);
              this._setStrokeAttributes(s.tspan, e);
            }
            let A = s.textMatrix;
            if (0 !== s.textRise) {
              A = A.slice();
              A[5] += s.textRise;
            }
            s.txtElement.setAttributeNS(
              null,
              "transform",
              `${pm(A)} scale(${pf(d)}, -1)`
            );
            s.txtElement.setAttributeNS(r, "xml:space", "preserve");
            s.txtElement.appendChild(s.tspan);
            s.txtgrp.appendChild(s.txtElement);
            this._ensureTransformGroup().appendChild(s.txtElement);
          }
          setLeadingMoveText(e, t) {
            this.setLeading(-t);
            this.moveText(e, t);
          }
          addFontStyle(e) {
            if (!e.data)
              throw new Error(
                'addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.'
              );
            if (!this.cssStyle) {
              this.cssStyle = this.svgFactory.createElement("svg:style");
              this.cssStyle.setAttributeNS(null, "type", "text/css");
              this.defs.appendChild(this.cssStyle);
            }
            const t = (0, n.createObjectURL)(
              e.data,
              e.mimetype,
              this.forceDataSchema
            );
            this.cssStyle.textContent += `@font-face { font-family: "${e.loadedName}"; src: url(${t}); }\n`;
          }
          setFont(e) {
            const t = this.current,
              r = this.commonObjs.get(e[0]);
            let s = e[1];
            t.font = r;
            if (
              this.embedFonts &&
              !r.missingFile &&
              !this.embeddedFonts[r.loadedName]
            ) {
              this.addFontStyle(r);
              this.embeddedFonts[r.loadedName] = r;
            }
            t.fontMatrix = r.fontMatrix ? r.fontMatrix : n.FONT_IDENTITY_MATRIX;
            let a = "normal";
            r.black ? (a = "900") : r.bold && (a = "bold");
            const i = r.italic ? "italic" : "normal";
            if (s < 0) {
              s = -s;
              t.fontDirection = -1;
            } else t.fontDirection = 1;
            t.fontSize = s;
            t.fontFamily = r.loadedName;
            t.fontWeight = a;
            t.fontStyle = i;
            t.tspan = this.svgFactory.createElement("svg:tspan");
            t.tspan.setAttributeNS(null, "y", pf(-t.y));
            t.xcoords = [];
            t.ycoords = [];
          }
          endText() {
            const e = this.current;
            if (
              e.textRenderingMode & n.TextRenderingMode.ADD_TO_PATH_FLAG &&
              e.txtElement &&
              e.txtElement.hasChildNodes()
            ) {
              e.element = e.txtElement;
              this.clip("nonzero");
              this.endPath();
            }
          }
          setLineWidth(e) {
            e > 0 && (this.current.lineWidth = e);
          }
          setLineCap(e) {
            this.current.lineCap = o[e];
          }
          setLineJoin(e) {
            this.current.lineJoin = l[e];
          }
          setMiterLimit(e) {
            this.current.miterLimit = e;
          }
          setStrokeAlpha(e) {
            this.current.strokeAlpha = e;
          }
          setStrokeRGBColor(e, t, r) {
            this.current.strokeColor = n.Util.makeCssRgb(e, t, r);
          }
          setFillAlpha(e) {
            this.current.fillAlpha = e;
          }
          setFillRGBColor(e, t, r) {
            this.current.fillColor = n.Util.makeCssRgb(e, t, r);
            this.current.tspan = this.svgFactory.createElement("svg:tspan");
            this.current.xcoords = [];
            this.current.ycoords = [];
          }
          setStrokeColorN(e) {
            this.current.strokeColor = this._makeColorN_Pattern(e);
          }
          setFillColorN(e) {
            this.current.fillColor = this._makeColorN_Pattern(e);
          }
          shadingFill(e) {
            const t = this.viewport.width,
              r = this.viewport.height,
              s = n.Util.inverseTransform(this.transformMatrix),
              a = n.Util.applyTransform([0, 0], s),
              i = n.Util.applyTransform([0, r], s),
              o = n.Util.applyTransform([t, 0], s),
              l = n.Util.applyTransform([t, r], s),
              c = Math.min(a[0], i[0], o[0], l[0]),
              h = Math.min(a[1], i[1], o[1], l[1]),
              d = Math.max(a[0], i[0], o[0], l[0]),
              u = Math.max(a[1], i[1], o[1], l[1]),
              p = this.svgFactory.createElement("svg:rect");
            p.setAttributeNS(null, "x", c);
            p.setAttributeNS(null, "y", h);
            p.setAttributeNS(null, "width", d - c);
            p.setAttributeNS(null, "height", u - h);
            p.setAttributeNS(null, "fill", this._makeShadingPattern(e));
            this.current.fillAlpha < 1 &&
              p.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
            this._ensureTransformGroup().appendChild(p);
          }
          _makeColorN_Pattern(e) {
            return "TilingPattern" === e[0]
              ? this._makeTilingPattern(e)
              : this._makeShadingPattern(e);
          }
          _makeTilingPattern(e) {
            const t = e[1],
              r = e[2],
              s = e[3] || n.IDENTITY_MATRIX,
              [a, i, o, l] = e[4],
              c = e[5],
              h = e[6],
              d = e[7],
              p = "shading" + u++,
              [f, g] = n.Util.applyTransform([a, i], s),
              [m, _] = n.Util.applyTransform([o, l], s),
              [A, b] = n.Util.singularValueDecompose2dScale(s),
              y = c * A,
              v = h * b,
              C = this.svgFactory.createElement("svg:pattern");
            C.setAttributeNS(null, "id", p);
            C.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
            C.setAttributeNS(null, "width", y);
            C.setAttributeNS(null, "height", v);
            C.setAttributeNS(null, "x", "" + f);
            C.setAttributeNS(null, "y", "" + g);
            const S = this.svg,
              x = this.transformMatrix,
              P = this.current.fillColor,
              k = this.current.strokeColor,
              R = this.svgFactory.create(m - f, _ - g);
            this.svg = R;
            this.transformMatrix = s;
            if (2 === d) {
              const e = n.Util.makeCssRgb(...t);
              this.current.fillColor = e;
              this.current.strokeColor = e;
            }
            this.executeOpTree(this.convertOpList(r));
            this.svg = S;
            this.transformMatrix = x;
            this.current.fillColor = P;
            this.current.strokeColor = k;
            C.appendChild(R.childNodes[0]);
            this.defs.appendChild(C);
            return `url(#${p})`;
          }
          _makeShadingPattern(e) {
            switch (e[0]) {
              case "RadialAxial":
                const t = "shading" + u++,
                  r = e[3];
                let s;
                switch (e[1]) {
                  case "axial":
                    const r = e[4],
                      n = e[5];
                    s = this.svgFactory.createElement("svg:linearGradient");
                    s.setAttributeNS(null, "id", t);
                    s.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                    s.setAttributeNS(null, "x1", r[0]);
                    s.setAttributeNS(null, "y1", r[1]);
                    s.setAttributeNS(null, "x2", n[0]);
                    s.setAttributeNS(null, "y2", n[1]);
                    break;
                  case "radial":
                    const a = e[4],
                      i = e[5],
                      o = e[6],
                      l = e[7];
                    s = this.svgFactory.createElement("svg:radialGradient");
                    s.setAttributeNS(null, "id", t);
                    s.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                    s.setAttributeNS(null, "cx", i[0]);
                    s.setAttributeNS(null, "cy", i[1]);
                    s.setAttributeNS(null, "r", l);
                    s.setAttributeNS(null, "fx", a[0]);
                    s.setAttributeNS(null, "fy", a[1]);
                    s.setAttributeNS(null, "fr", o);
                    break;
                  default:
                    throw new Error("Unknown RadialAxial type: " + e[1]);
                }
                for (const e of r) {
                  const t = this.svgFactory.createElement("svg:stop");
                  t.setAttributeNS(null, "offset", e[0]);
                  t.setAttributeNS(null, "stop-color", e[1]);
                  s.appendChild(t);
                }
                this.defs.appendChild(s);
                return `url(#${t})`;
              case "Mesh":
                (0, n.warn)("Unimplemented pattern Mesh");
                return null;
              case "Dummy":
                return "hotpink";
              default:
                throw new Error("Unknown IR type: " + e[0]);
            }
          }
          setDash(e, t) {
            this.current.dashArray = e;
            this.current.dashPhase = t;
          }
          constructPath(e, t) {
            const r = this.current;
            let s = r.x,
              a = r.y,
              i = [],
              o = 0;
            for (const r of e)
              switch (0 | r) {
                case n.OPS.rectangle:
                  s = t[o++];
                  a = t[o++];
                  const e = s + t[o++],
                    r = a + t[o++];
                  i.push(
                    "M",
                    pf(s),
                    pf(a),
                    "L",
                    pf(e),
                    pf(a),
                    "L",
                    pf(e),
                    pf(r),
                    "L",
                    pf(s),
                    pf(r),
                    "Z"
                  );
                  break;
                case n.OPS.moveTo:
                  s = t[o++];
                  a = t[o++];
                  i.push("M", pf(s), pf(a));
                  break;
                case n.OPS.lineTo:
                  s = t[o++];
                  a = t[o++];
                  i.push("L", pf(s), pf(a));
                  break;
                case n.OPS.curveTo:
                  s = t[o + 4];
                  a = t[o + 5];
                  i.push(
                    "C",
                    pf(t[o]),
                    pf(t[o + 1]),
                    pf(t[o + 2]),
                    pf(t[o + 3]),
                    pf(s),
                    pf(a)
                  );
                  o += 6;
                  break;
                case n.OPS.curveTo2:
                  i.push(
                    "C",
                    pf(s),
                    pf(a),
                    pf(t[o]),
                    pf(t[o + 1]),
                    pf(t[o + 2]),
                    pf(t[o + 3])
                  );
                  s = t[o + 2];
                  a = t[o + 3];
                  o += 4;
                  break;
                case n.OPS.curveTo3:
                  s = t[o + 2];
                  a = t[o + 3];
                  i.push(
                    "C",
                    pf(t[o]),
                    pf(t[o + 1]),
                    pf(s),
                    pf(a),
                    pf(s),
                    pf(a)
                  );
                  o += 4;
                  break;
                case n.OPS.closePath:
                  i.push("Z");
              }
            i = i.join(" ");
            if (
              r.path &&
              e.length > 0 &&
              e[0] !== n.OPS.rectangle &&
              e[0] !== n.OPS.moveTo
            )
              i = r.path.getAttributeNS(null, "d") + i;
            else {
              r.path = this.svgFactory.createElement("svg:path");
              this._ensureTransformGroup().appendChild(r.path);
            }
            r.path.setAttributeNS(null, "d", i);
            r.path.setAttributeNS(null, "fill", "none");
            r.element = r.path;
            r.setCurrentPoint(s, a);
          }
          endPath() {
            const e = this.current;
            e.path = null;
            if (!this.pendingClip) return;
            if (!e.element) {
              this.pendingClip = null;
              return;
            }
            const t = "clippath" + h++,
              r = this.svgFactory.createElement("svg:clipPath");
            r.setAttributeNS(null, "id", t);
            r.setAttributeNS(null, "transform", pm(this.transformMatrix));
            const n = e.element.cloneNode(!0);
            "evenodd" === this.pendingClip
              ? n.setAttributeNS(null, "clip-rule", "evenodd")
              : n.setAttributeNS(null, "clip-rule", "nonzero");
            this.pendingClip = null;
            r.appendChild(n);
            this.defs.appendChild(r);
            if (e.activeClipUrl) {
              e.clipGroup = null;
              this.extraStack.forEach(function (e) {
                e.clipGroup = null;
              });
              r.setAttributeNS(null, "clip-path", e.activeClipUrl);
            }
            e.activeClipUrl = `url(#${t})`;
            this.tgrp = null;
          }
          clip(e) {
            this.pendingClip = e;
          }
          closePath() {
            const e = this.current;
            if (e.path) {
              const t = e.path.getAttributeNS(null, "d") + "Z";
              e.path.setAttributeNS(null, "d", t);
            }
          }
          setLeading(e) {
            this.current.leading = -e;
          }
          setTextRise(e) {
            this.current.textRise = e;
          }
          setTextRenderingMode(e) {
            this.current.textRenderingMode = e;
          }
          setHScale(e) {
            this.current.textHScale = e / 100;
          }
          setRenderingIntent(e) {}
          setFlatness(e) {}
          setGState(e) {
            for (const [t, r] of e)
              switch (t) {
                case "LW":
                  this.setLineWidth(r);
                  break;
                case "LC":
                  this.setLineCap(r);
                  break;
                case "LJ":
                  this.setLineJoin(r);
                  break;
                case "ML":
                  this.setMiterLimit(r);
                  break;
                case "D":
                  this.setDash(r[0], r[1]);
                  break;
                case "RI":
                  this.setRenderingIntent(r);
                  break;
                case "FL":
                  this.setFlatness(r);
                  break;
                case "Font":
                  this.setFont(r);
                  break;
                case "CA":
                  this.setStrokeAlpha(r);
                  break;
                case "ca":
                  this.setFillAlpha(r);
                  break;
                default:
                  (0, n.warn)("Unimplemented graphic state operator " + t);
              }
          }
          fill() {
            const e = this.current;
            if (e.element) {
              e.element.setAttributeNS(null, "fill", e.fillColor);
              e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha);
              this.endPath();
            }
          }
          stroke() {
            const e = this.current;
            if (e.element) {
              this._setStrokeAttributes(e.element);
              e.element.setAttributeNS(null, "fill", "none");
              this.endPath();
            }
          }
          _setStrokeAttributes(e, t = 1) {
            const r = this.current;
            let n = r.dashArray;
            1 !== t &&
              n.length > 0 &&
              (n = n.map(function (e) {
                return t * e;
              }));
            e.setAttributeNS(null, "stroke", r.strokeColor);
            e.setAttributeNS(null, "stroke-opacity", r.strokeAlpha);
            e.setAttributeNS(null, "stroke-miterlimit", pf(r.miterLimit));
            e.setAttributeNS(null, "stroke-linecap", r.lineCap);
            e.setAttributeNS(null, "stroke-linejoin", r.lineJoin);
            e.setAttributeNS(null, "stroke-width", pf(t * r.lineWidth) + "px");
            e.setAttributeNS(null, "stroke-dasharray", n.map(pf).join(" "));
            e.setAttributeNS(
              null,
              "stroke-dashoffset",
              pf(t * r.dashPhase) + "px"
            );
          }
          eoFill() {
            this.current.element &&
              this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
            this.fill();
          }
          fillStroke() {
            this.stroke();
            this.fill();
          }
          eoFillStroke() {
            this.current.element &&
              this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
            this.fillStroke();
          }
          closeStroke() {
            this.closePath();
            this.stroke();
          }
          closeFillStroke() {
            this.closePath();
            this.fillStroke();
          }
          closeEOFillStroke() {
            this.closePath();
            this.eoFillStroke();
          }
          paintSolidColorImageMask() {
            const e = this.svgFactory.createElement("svg:rect");
            e.setAttributeNS(null, "x", "0");
            e.setAttributeNS(null, "y", "0");
            e.setAttributeNS(null, "width", "1px");
            e.setAttributeNS(null, "height", "1px");
            e.setAttributeNS(null, "fill", this.current.fillColor);
            this._ensureTransformGroup().appendChild(e);
          }
          paintImageXObject(e) {
            const t = e.startsWith("g_")
              ? this.commonObjs.get(e)
              : this.objs.get(e);
            t
              ? this.paintInlineImageXObject(t)
              : (0, n.warn)(
                  `Dependent image with object ID ${e} is not ready yet`
                );
          }
          paintInlineImageXObject(e, t) {
            const r = e.width,
              n = e.height,
              s = c(e, this.forceDataSchema, !!t),
              a = this.svgFactory.createElement("svg:rect");
            a.setAttributeNS(null, "x", "0");
            a.setAttributeNS(null, "y", "0");
            a.setAttributeNS(null, "width", pf(r));
            a.setAttributeNS(null, "height", pf(n));
            this.current.element = a;
            this.clip("nonzero");
            const o = this.svgFactory.createElement("svg:image");
            o.setAttributeNS(i, "xlink:href", s);
            o.setAttributeNS(null, "x", "0");
            o.setAttributeNS(null, "y", pf(-n));
            o.setAttributeNS(null, "width", pf(r) + "px");
            o.setAttributeNS(null, "height", pf(n) + "px");
            o.setAttributeNS(
              null,
              "transform",
              `scale(${pf(1 / r)} ${pf(-1 / n)})`
            );
            t ? t.appendChild(o) : this._ensureTransformGroup().appendChild(o);
          }
          paintImageMaskXObject(e) {
            const t = this.current,
              r = e.width,
              n = e.height,
              s = t.fillColor;
            t.maskId = "mask" + d++;
            const a = this.svgFactory.createElement("svg:mask");
            a.setAttributeNS(null, "id", t.maskId);
            const i = this.svgFactory.createElement("svg:rect");
            i.setAttributeNS(null, "x", "0");
            i.setAttributeNS(null, "y", "0");
            i.setAttributeNS(null, "width", pf(r));
            i.setAttributeNS(null, "height", pf(n));
            i.setAttributeNS(null, "fill", s);
            i.setAttributeNS(null, "mask", `url(#${t.maskId})`);
            this.defs.appendChild(a);
            this._ensureTransformGroup().appendChild(i);
            this.paintInlineImageXObject(e, a);
          }
          paintFormXObjectBegin(e, t) {
            Array.isArray(e) &&
              6 === e.length &&
              this.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
            if (t) {
              const e = t[2] - t[0],
                r = t[3] - t[1],
                n = this.svgFactory.createElement("svg:rect");
              n.setAttributeNS(null, "x", t[0]);
              n.setAttributeNS(null, "y", t[1]);
              n.setAttributeNS(null, "width", pf(e));
              n.setAttributeNS(null, "height", pf(r));
              this.current.element = n;
              this.clip("nonzero");
              this.endPath();
            }
          }
          paintFormXObjectEnd() {}
          _initialize(e) {
            const t = this.svgFactory.create(e.width, e.height),
              r = this.svgFactory.createElement("svg:defs");
            t.appendChild(r);
            this.defs = r;
            const n = this.svgFactory.createElement("svg:g");
            n.setAttributeNS(null, "transform", pm(e.transform));
            t.appendChild(n);
            this.svg = n;
            return t;
          }
          _ensureClipGroup() {
            if (!this.current.clipGroup) {
              const e = this.svgFactory.createElement("svg:g");
              e.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
              this.svg.appendChild(e);
              this.current.clipGroup = e;
            }
            return this.current.clipGroup;
          }
          _ensureTransformGroup() {
            if (!this.tgrp) {
              this.tgrp = this.svgFactory.createElement("svg:g");
              this.tgrp.setAttributeNS(
                null,
                "transform",
                pm(this.transformMatrix)
              );
              this.current.activeClipUrl
                ? this._ensureClipGroup().appendChild(this.tgrp)
                : this.svg.appendChild(this.tgrp);
            }
            return this.tgrp;
          }
        };
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.PDFNodeStream = void 0;
      var n = r(2),
        s = r(23);
      const a = require("fs"),
        i = require("http"),
        o = require("https"),
        l = require("url"),
        c = /^file:\/\/\/[a-zA-Z]:\//;
      t.PDFNodeStream = class PDFNodeStream {
        constructor(e) {
          this.source = e;
          this.url = (function parseUrl(e) {
            const t = l.parse(e);
            if ("file:" === t.protocol || t.host) return t;
            if (/^[a-z]:[/\\]/i.test(e)) return l.parse("file:///" + e);
            t.host || (t.protocol = "file:");
            return t;
          })(e.url);
          this.isHttp =
            "http:" === this.url.protocol || "https:" === this.url.protocol;
          this.isFsUrl = "file:" === this.url.protocol;
          this.httpHeaders = (this.isHttp && e.httpHeaders) || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
        }
        getFullReader() {
          (0, n.assert)(
            !this._fullRequestReader,
            "PDFNodeStream.getFullReader can only be called once."
          );
          this._fullRequestReader = this.isFsUrl
            ? new PDFNodeStreamFsFullReader(this)
            : new PDFNodeStreamFullReader(this);
          return this._fullRequestReader;
        }
        getRangeReader(e, t) {
          if (t <= this._progressiveDataLength) return null;
          const r = this.isFsUrl
            ? new PDFNodeStreamFsRangeReader(this, e, t)
            : new PDFNodeStreamRangeReader(this, e, t);
          this._rangeRequestReaders.push(r);
          return r;
        }
        cancelAllRequests(e) {
          this._fullRequestReader && this._fullRequestReader.cancel(e);
          this._rangeRequestReaders.slice(0).forEach(function (t) {
            t.cancel(e);
          });
        }
      };
      class BaseFullReader {
        constructor(e) {
          this._url = e.url;
          this._done = !1;
          this._storedError = null;
          this.onProgress = null;
          const t = e.source;
          this._contentLength = t.length;
          this._loaded = 0;
          this._filename = null;
          this._disableRange = t.disableRange || !1;
          this._rangeChunkSize = t.rangeChunkSize;
          this._rangeChunkSize ||
            this._disableRange ||
            (this._disableRange = !0);
          this._isStreamingSupported = !t.disableStream;
          this._isRangeSupported = !t.disableRange;
          this._readableStream = null;
          this._readCapability = (0, n.createPromiseCapability)();
          this._headersCapability = (0, n.createPromiseCapability)();
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          if (this._done) return { value: void 0, done: !0 };
          if (this._storedError) throw this._storedError;
          const e = this._readableStream.read();
          if (null === e) {
            this._readCapability = (0, n.createPromiseCapability)();
            return this.read();
          }
          this._loaded += e.length;
          this.onProgress &&
            this.onProgress({
              loaded: this._loaded,
              total: this._contentLength,
            });
          return { value: new Uint8Array(e).buffer, done: !1 };
        }
        cancel(e) {
          this._readableStream
            ? this._readableStream.destroy(e)
            : this._error(e);
        }
        _error(e) {
          this._storedError = e;
          this._readCapability.resolve();
        }
        _setReadableStream(e) {
          this._readableStream = e;
          e.on("readable", () => {
            this._readCapability.resolve();
          });
          e.on("end", () => {
            e.destroy();
            this._done = !0;
            this._readCapability.resolve();
          });
          e.on("error", (e) => {
            this._error(e);
          });
          !this._isStreamingSupported &&
            this._isRangeSupported &&
            this._error(new n.AbortException("streaming is disabled"));
          this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      class BaseRangeReader {
        constructor(e) {
          this._url = e.url;
          this._done = !1;
          this._storedError = null;
          this.onProgress = null;
          this._loaded = 0;
          this._readableStream = null;
          this._readCapability = (0, n.createPromiseCapability)();
          const t = e.source;
          this._isStreamingSupported = !t.disableStream;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          if (this._done) return { value: void 0, done: !0 };
          if (this._storedError) throw this._storedError;
          const e = this._readableStream.read();
          if (null === e) {
            this._readCapability = (0, n.createPromiseCapability)();
            return this.read();
          }
          this._loaded += e.length;
          this.onProgress && this.onProgress({ loaded: this._loaded });
          return { value: new Uint8Array(e).buffer, done: !1 };
        }
        cancel(e) {
          this._readableStream
            ? this._readableStream.destroy(e)
            : this._error(e);
        }
        _error(e) {
          this._storedError = e;
          this._readCapability.resolve();
        }
        _setReadableStream(e) {
          this._readableStream = e;
          e.on("readable", () => {
            this._readCapability.resolve();
          });
          e.on("end", () => {
            e.destroy();
            this._done = !0;
            this._readCapability.resolve();
          });
          e.on("error", (e) => {
            this._error(e);
          });
          this._storedError && this._readableStream.destroy(this._storedError);
        }
      }
      function createRequestOptions(e, t) {
        return {
          protocol: e.protocol,
          auth: e.auth,
          host: e.hostname,
          port: e.port,
          path: e.path,
          method: "GET",
          headers: t,
        };
      }
      class PDFNodeStreamFullReader extends BaseFullReader {
        constructor(e) {
          super(e);
          const handleResponse = (t) => {
            if (404 === t.statusCode) {
              const e = new n.MissingPDFException(
                `Missing PDF "${this._url}".`
              );
              this._storedError = e;
              this._headersCapability.reject(e);
              return;
            }
            this._headersCapability.resolve();
            this._setReadableStream(t);
            const getResponseHeader = (e) =>
                this._readableStream.headers[e.toLowerCase()],
              { allowRangeRequests: r, suggestedLength: a } = (0,
              s.validateRangeRequestCapabilities)({
                getResponseHeader: getResponseHeader,
                isHttp: e.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange,
              });
            this._isRangeSupported = r;
            this._contentLength = a || this._contentLength;
            this._filename = (0, s.extractFilenameFromHeader)(
              getResponseHeader
            );
          };
          this._request = null;
          "http:" === this._url.protocol
            ? (this._request = i.request(
                createRequestOptions(this._url, e.httpHeaders),
                handleResponse
              ))
            : (this._request = o.request(
                createRequestOptions(this._url, e.httpHeaders),
                handleResponse
              ));
          this._request.on("error", (e) => {
            this._storedError = e;
            this._headersCapability.reject(e);
          });
          this._request.end();
        }
      }
      class PDFNodeStreamRangeReader extends BaseRangeReader {
        constructor(e, t, r) {
          super(e);
          this._httpHeaders = {};
          for (const t in e.httpHeaders) {
            const r = e.httpHeaders[t];
            void 0 !== r && (this._httpHeaders[t] = r);
          }
          this._httpHeaders.Range = `bytes=${t}-${r - 1}`;
          const handleResponse = (e) => {
            if (404 !== e.statusCode) this._setReadableStream(e);
            else {
              const e = new n.MissingPDFException(
                `Missing PDF "${this._url}".`
              );
              this._storedError = e;
            }
          };
          this._request = null;
          "http:" === this._url.protocol
            ? (this._request = i.request(
                createRequestOptions(this._url, this._httpHeaders),
                handleResponse
              ))
            : (this._request = o.request(
                createRequestOptions(this._url, this._httpHeaders),
                handleResponse
              ));
          this._request.on("error", (e) => {
            this._storedError = e;
          });
          this._request.end();
        }
      }
      class PDFNodeStreamFsFullReader extends BaseFullReader {
        constructor(e) {
          super(e);
          let t = decodeURIComponent(this._url.path);
          c.test(this._url.href) && (t = t.replace(/^\//, ""));
          a.lstat(t, (e, r) => {
            if (e) {
              "ENOENT" === e.code &&
                (e = new n.MissingPDFException(`Missing PDF "${t}".`));
              this._storedError = e;
              this._headersCapability.reject(e);
            } else {
              this._contentLength = r.size;
              this._setReadableStream(a.createReadStream(t));
              this._headersCapability.resolve();
            }
          });
        }
      }
      class PDFNodeStreamFsRangeReader extends BaseRangeReader {
        constructor(e, t, r) {
          super(e);
          let n = decodeURIComponent(this._url.path);
          c.test(this._url.href) && (n = n.replace(/^\//, ""));
          this._setReadableStream(
            a.createReadStream(n, { start: t, end: r - 1 })
          );
        }
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.createResponseStatusError = function createResponseStatusError(e, t) {
        if (404 === e || (0 === e && t.startsWith("file:")))
          return new n.MissingPDFException('Missing PDF "' + t + '".');
        return new n.UnexpectedResponseException(
          "Unexpected server response (" +
            e +
            ') while retrieving PDF "' +
            t +
            '".',
          e
        );
      };
      t.extractFilenameFromHeader = function extractFilenameFromHeader(e) {
        const t = e("Content-Disposition");
        if (t) {
          let e = (0, s.getFilenameFromContentDispositionHeader)(t);
          if (e.includes("%"))
            try {
              e = decodeURIComponent(e);
            } catch (e) {}
          if (/\.pdf$/i.test(e)) return e;
        }
        return null;
      };
      t.validateRangeRequestCapabilities =
        function validateRangeRequestCapabilities({
          getResponseHeader: e,
          isHttp: t,
          rangeChunkSize: r,
          disableRange: s,
        }) {
          (0, n.assert)(r > 0, "Range chunk size must be larger than zero");
          const a = { allowRangeRequests: !1, suggestedLength: void 0 },
            i = parseInt(e("Content-Length"), 10);
          if (!Number.isInteger(i)) return a;
          a.suggestedLength = i;
          if (i <= 2 * r) return a;
          if (s || !t) return a;
          if ("bytes" !== e("Accept-Ranges")) return a;
          if ("identity" !== (e("Content-Encoding") || "identity")) return a;
          a.allowRangeRequests = !0;
          return a;
        };
      t.validateResponseStatus = function validateResponseStatus(e) {
        return 200 === e || 206 === e;
      };
      var n = r(2),
        s = r(24);
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.getFilenameFromContentDispositionHeader =
        function getFilenameFromContentDispositionHeader(e) {
          let t = !0,
            r = toParamRegExp("filename\\*", "i").exec(e);
          if (r) {
            r = r[1];
            let e = rfc2616unquote(r);
            e = unescape(e);
            e = rfc5987decode(e);
            e = rfc2047decode(e);
            return fixupEncoding(e);
          }
          r = (function rfc2231getparam(e) {
            const t = [];
            let r;
            const n = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
            for (; null !== (r = n.exec(e)); ) {
              let [, e, n, s] = r;
              e = parseInt(e, 10);
              if (e in t) {
                if (0 === e) break;
              } else t[e] = [n, s];
            }
            const s = [];
            for (let e = 0; e < t.length && e in t; ++e) {
              let [r, n] = t[e];
              n = rfc2616unquote(n);
              if (r) {
                n = unescape(n);
                0 === e && (n = rfc5987decode(n));
              }
              s.push(n);
            }
            return s.join("");
          })(e);
          if (r) {
            return fixupEncoding(rfc2047decode(r));
          }
          r = toParamRegExp("filename", "i").exec(e);
          if (r) {
            r = r[1];
            let e = rfc2616unquote(r);
            e = rfc2047decode(e);
            return fixupEncoding(e);
          }
          function toParamRegExp(e, t) {
            return new RegExp(
              "(?:^|;)\\s*" +
                e +
                '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
              t
            );
          }
          function textdecode(e, r) {
            if (e) {
              if (!/^[\x00-\xFF]+$/.test(r)) return r;
              try {
                const n = new TextDecoder(e, { fatal: !0 }),
                  s = Array.from(r, function (e) {
                    return 255 & e.charCodeAt(0);
                  });
                r = n.decode(new Uint8Array(s));
                t = !1;
              } catch (n) {
                if (/^utf-?8$/i.test(e))
                  try {
                    r = decodeURIComponent(escape(r));
                    t = !1;
                  } catch (e) {}
              }
            }
            return r;
          }
          function fixupEncoding(e) {
            if (t && /[\x80-\xff]/.test(e)) {
              e = textdecode("utf-8", e);
              t && (e = textdecode("iso-8859-1", e));
            }
            return e;
          }
          function rfc2616unquote(e) {
            if (e.startsWith('"')) {
              const t = e.slice(1).split('\\"');
              for (let e = 0; e < t.length; ++e) {
                const r = t[e].indexOf('"');
                if (-1 !== r) {
                  t[e] = t[e].slice(0, r);
                  t.length = e + 1;
                }
                t[e] = t[e].replace(/\\(.)/g, "$1");
              }
              e = t.join('"');
            }
            return e;
          }
          function rfc5987decode(e) {
            const t = e.indexOf("'");
            if (-1 === t) return e;
            return textdecode(
              e.slice(0, t),
              e.slice(t + 1).replace(/^[^']*'/, "")
            );
          }
          function rfc2047decode(e) {
            return !e.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(e)
              ? e
              : e.replace(
                  /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
                  function (e, t, r, n) {
                    if ("q" === r || "Q" === r)
                      return textdecode(
                        t,
                        (n = (n = n.replace(/_/g, " ")).replace(
                          /=([0-9a-fA-F]{2})/g,
                          function (e, t) {
                            return String.fromCharCode(parseInt(t, 16));
                          }
                        ))
                      );
                    try {
                      n = atob(n);
                    } catch (e) {}
                    return textdecode(t, n);
                  }
                );
          }
          return "";
        };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.PDFNetworkStream = void 0;
      var n = r(2),
        s = r(23);
      class NetworkManager {
        constructor(e, t) {
          this.url = e;
          t = t || {};
          this.isHttp = /^https?:/i.test(e);
          this.httpHeaders = (this.isHttp && t.httpHeaders) || {};
          this.withCredentials = t.withCredentials || !1;
          this.getXhr =
            t.getXhr ||
            function NetworkManager_getXhr() {
              return new XMLHttpRequest();
            };
          this.currXhrId = 0;
          this.pendingRequests = Object.create(null);
        }
        requestRange(e, t, r) {
          const n = { begin: e, end: t };
          for (const e in r) n[e] = r[e];
          return this.request(n);
        }
        requestFull(e) {
          return this.request(e);
        }
        request(e) {
          const t = this.getXhr(),
            r = this.currXhrId++,
            n = (this.pendingRequests[r] = { xhr: t });
          t.open("GET", this.url);
          t.withCredentials = this.withCredentials;
          for (const e in this.httpHeaders) {
            const r = this.httpHeaders[e];
            void 0 !== r && t.setRequestHeader(e, r);
          }
          if (this.isHttp && "begin" in e && "end" in e) {
            t.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`);
            n.expectedStatus = 206;
          } else n.expectedStatus = 200;
          t.responseType = "arraybuffer";
          e.onError &&
            (t.onerror = function (r) {
              e.onError(t.status);
            });
          t.onreadystatechange = this.onStateChange.bind(this, r);
          t.onprogress = this.onProgress.bind(this, r);
          n.onHeadersReceived = e.onHeadersReceived;
          n.onDone = e.onDone;
          n.onError = e.onError;
          n.onProgress = e.onProgress;
          t.send(null);
          return r;
        }
        onProgress(e, t) {
          const r = this.pendingRequests[e];
          r && r.onProgress && r.onProgress(t);
        }
        onStateChange(e, t) {
          const r = this.pendingRequests[e];
          if (!r) return;
          const s = r.xhr;
          if (s.readyState >= 2 && r.onHeadersReceived) {
            r.onHeadersReceived();
            delete r.onHeadersReceived;
          }
          if (4 !== s.readyState) return;
          if (!(e in this.pendingRequests)) return;
          delete this.pendingRequests[e];
          if (0 === s.status && this.isHttp) {
            r.onError && r.onError(s.status);
            return;
          }
          const a = s.status || 200;
          if (
            !(200 === a && 206 === r.expectedStatus) &&
            a !== r.expectedStatus
          ) {
            r.onError && r.onError(s.status);
            return;
          }
          const i = (function getArrayBuffer(e) {
            const t = e.response;
            return "string" != typeof t ? t : (0, n.stringToBytes)(t).buffer;
          })(s);
          if (206 === a) {
            const e = s.getResponseHeader("Content-Range"),
              t = /bytes (\d+)-(\d+)\/(\d+)/.exec(e);
            r.onDone({ begin: parseInt(t[1], 10), chunk: i });
          } else
            i
              ? r.onDone({ begin: 0, chunk: i })
              : r.onError && r.onError(s.status);
        }
        getRequestXhr(e) {
          return this.pendingRequests[e].xhr;
        }
        isPendingRequest(e) {
          return e in this.pendingRequests;
        }
        abortRequest(e) {
          const t = this.pendingRequests[e].xhr;
          delete this.pendingRequests[e];
          t.abort();
        }
      }
      t.PDFNetworkStream = class PDFNetworkStream {
        constructor(e) {
          this._source = e;
          this._manager = new NetworkManager(e.url, {
            httpHeaders: e.httpHeaders,
            withCredentials: e.withCredentials,
          });
          this._rangeChunkSize = e.rangeChunkSize;
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(e) {
          const t = this._rangeRequestReaders.indexOf(e);
          t >= 0 && this._rangeRequestReaders.splice(t, 1);
        }
        getFullReader() {
          (0, n.assert)(
            !this._fullRequestReader,
            "PDFNetworkStream.getFullReader can only be called once."
          );
          this._fullRequestReader = new PDFNetworkStreamFullRequestReader(
            this._manager,
            this._source
          );
          return this._fullRequestReader;
        }
        getRangeReader(e, t) {
          const r = new PDFNetworkStreamRangeRequestReader(this._manager, e, t);
          r.onClosed = this._onRangeRequestReaderClosed.bind(this);
          this._rangeRequestReaders.push(r);
          return r;
        }
        cancelAllRequests(e) {
          this._fullRequestReader && this._fullRequestReader.cancel(e);
          this._rangeRequestReaders.slice(0).forEach(function (t) {
            t.cancel(e);
          });
        }
      };
      class PDFNetworkStreamFullRequestReader {
        constructor(e, t) {
          this._manager = e;
          const r = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this),
          };
          this._url = t.url;
          this._fullRequestId = e.requestFull(r);
          this._headersReceivedCapability = (0, n.createPromiseCapability)();
          this._disableRange = t.disableRange || !1;
          this._contentLength = t.length;
          this._rangeChunkSize = t.rangeChunkSize;
          this._rangeChunkSize ||
            this._disableRange ||
            (this._disableRange = !0);
          this._isStreamingSupported = !1;
          this._isRangeSupported = !1;
          this._cachedChunks = [];
          this._requests = [];
          this._done = !1;
          this._storedError = void 0;
          this._filename = null;
          this.onProgress = null;
        }
        _onHeadersReceived() {
          const e = this._fullRequestId,
            t = this._manager.getRequestXhr(e),
            getResponseHeader = (e) => t.getResponseHeader(e),
            { allowRangeRequests: r, suggestedLength: n } = (0,
            s.validateRangeRequestCapabilities)({
              getResponseHeader: getResponseHeader,
              isHttp: this._manager.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange,
            });
          r && (this._isRangeSupported = !0);
          this._contentLength = n || this._contentLength;
          this._filename = (0, s.extractFilenameFromHeader)(getResponseHeader);
          this._isRangeSupported && this._manager.abortRequest(e);
          this._headersReceivedCapability.resolve();
        }
        _onDone(e) {
          if (e)
            if (this._requests.length > 0) {
              this._requests.shift().resolve({ value: e.chunk, done: !1 });
            } else this._cachedChunks.push(e.chunk);
          this._done = !0;
          if (!(this._cachedChunks.length > 0)) {
            this._requests.forEach(function (e) {
              e.resolve({ value: void 0, done: !0 });
            });
            this._requests = [];
          }
        }
        _onError(e) {
          const t = this._url,
            r = (0, s.createResponseStatusError)(e, t);
          this._storedError = r;
          this._headersReceivedCapability.reject(r);
          this._requests.forEach(function (e) {
            e.reject(r);
          });
          this._requests = [];
          this._cachedChunks = [];
        }
        _onProgress(e) {
          this.onProgress &&
            this.onProgress({
              loaded: e.loaded,
              total: e.lengthComputable ? e.total : this._contentLength,
            });
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        get contentLength() {
          return this._contentLength;
        }
        get headersReady() {
          return this._headersReceivedCapability.promise;
        }
        async read() {
          if (this._storedError) throw this._storedError;
          if (this._cachedChunks.length > 0) {
            return { value: this._cachedChunks.shift(), done: !1 };
          }
          if (this._done) return { value: void 0, done: !0 };
          const e = (0, n.createPromiseCapability)();
          this._requests.push(e);
          return e.promise;
        }
        cancel(e) {
          this._done = !0;
          this._headersReceivedCapability.reject(e);
          this._requests.forEach(function (e) {
            e.resolve({ value: void 0, done: !0 });
          });
          this._requests = [];
          this._manager.isPendingRequest(this._fullRequestId) &&
            this._manager.abortRequest(this._fullRequestId);
          this._fullRequestReader = null;
        }
      }
      class PDFNetworkStreamRangeRequestReader {
        constructor(e, t, r) {
          this._manager = e;
          const n = {
            onDone: this._onDone.bind(this),
            onProgress: this._onProgress.bind(this),
          };
          this._requestId = e.requestRange(t, r, n);
          this._requests = [];
          this._queuedChunk = null;
          this._done = !1;
          this.onProgress = null;
          this.onClosed = null;
        }
        _close() {
          this.onClosed && this.onClosed(this);
        }
        _onDone(e) {
          const t = e.chunk;
          if (this._requests.length > 0) {
            this._requests.shift().resolve({ value: t, done: !1 });
          } else this._queuedChunk = t;
          this._done = !0;
          this._requests.forEach(function (e) {
            e.resolve({ value: void 0, done: !0 });
          });
          this._requests = [];
          this._close();
        }
        _onProgress(e) {
          !this.isStreamingSupported &&
            this.onProgress &&
            this.onProgress({ loaded: e.loaded });
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (null !== this._queuedChunk) {
            const e = this._queuedChunk;
            this._queuedChunk = null;
            return { value: e, done: !1 };
          }
          if (this._done) return { value: void 0, done: !0 };
          const e = (0, n.createPromiseCapability)();
          this._requests.push(e);
          return e.promise;
        }
        cancel(e) {
          this._done = !0;
          this._requests.forEach(function (e) {
            e.resolve({ value: void 0, done: !0 });
          });
          this._requests = [];
          this._manager.isPendingRequest(this._requestId) &&
            this._manager.abortRequest(this._requestId);
          this._close();
        }
      }
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.PDFFetchStream = void 0;
      var n = r(2),
        s = r(23);
      function createFetchOptions(e, t, r) {
        return {
          method: "GET",
          headers: e,
          signal: r && r.signal,
          mode: "cors",
          credentials: t ? "include" : "same-origin",
          redirect: "follow",
        };
      }
      function createHeaders(e) {
        const t = new Headers();
        for (const r in e) {
          const n = e[r];
          void 0 !== n && t.append(r, n);
        }
        return t;
      }
      t.PDFFetchStream = class PDFFetchStream {
        constructor(e) {
          this.source = e;
          this.isHttp = /^https?:/i.test(e.url);
          this.httpHeaders = (this.isHttp && e.httpHeaders) || {};
          this._fullRequestReader = null;
          this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          return this._fullRequestReader ? this._fullRequestReader._loaded : 0;
        }
        getFullReader() {
          (0, n.assert)(
            !this._fullRequestReader,
            "PDFFetchStream.getFullReader can only be called once."
          );
          this._fullRequestReader = new PDFFetchStreamReader(this);
          return this._fullRequestReader;
        }
        getRangeReader(e, t) {
          if (t <= this._progressiveDataLength) return null;
          const r = new PDFFetchStreamRangeReader(this, e, t);
          this._rangeRequestReaders.push(r);
          return r;
        }
        cancelAllRequests(e) {
          this._fullRequestReader && this._fullRequestReader.cancel(e);
          this._rangeRequestReaders.slice(0).forEach(function (t) {
            t.cancel(e);
          });
        }
      };
      class PDFFetchStreamReader {
        constructor(e) {
          this._stream = e;
          this._reader = null;
          this._loaded = 0;
          this._filename = null;
          const t = e.source;
          this._withCredentials = t.withCredentials || !1;
          this._contentLength = t.length;
          this._headersCapability = (0, n.createPromiseCapability)();
          this._disableRange = t.disableRange || !1;
          this._rangeChunkSize = t.rangeChunkSize;
          this._rangeChunkSize ||
            this._disableRange ||
            (this._disableRange = !0);
          "undefined" != typeof AbortController &&
            (this._abortController = new AbortController());
          this._isStreamingSupported = !t.disableStream;
          this._isRangeSupported = !t.disableRange;
          this._headers = createHeaders(this._stream.httpHeaders);
          const r = t.url;
          fetch(
            r,
            createFetchOptions(
              this._headers,
              this._withCredentials,
              this._abortController
            )
          )
            .then((e) => {
              if (!(0, s.validateResponseStatus)(e.status))
                throw (0, s.createResponseStatusError)(e.status, r);
              this._reader = e.body.getReader();
              this._headersCapability.resolve();
              const getResponseHeader = (t) => e.headers.get(t),
                { allowRangeRequests: t, suggestedLength: a } = (0,
                s.validateRangeRequestCapabilities)({
                  getResponseHeader: getResponseHeader,
                  isHttp: this._stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange,
                });
              this._isRangeSupported = t;
              this._contentLength = a || this._contentLength;
              this._filename = (0, s.extractFilenameFromHeader)(
                getResponseHeader
              );
              !this._isStreamingSupported &&
                this._isRangeSupported &&
                this.cancel(new n.AbortException("Streaming is disabled."));
            })
            .catch(this._headersCapability.reject);
          this.onProgress = null;
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._headersCapability.promise;
          const { value: e, done: t } = await this._reader.read();
          if (t) return { value: e, done: t };
          this._loaded += e.byteLength;
          this.onProgress &&
            this.onProgress({
              loaded: this._loaded,
              total: this._contentLength,
            });
          return { value: new Uint8Array(e).buffer, done: !1 };
        }
        cancel(e) {
          this._reader && this._reader.cancel(e);
          this._abortController && this._abortController.abort();
        }
      }
      class PDFFetchStreamRangeReader {
        constructor(e, t, r) {
          this._stream = e;
          this._reader = null;
          this._loaded = 0;
          const a = e.source;
          this._withCredentials = a.withCredentials || !1;
          this._readCapability = (0, n.createPromiseCapability)();
          this._isStreamingSupported = !a.disableStream;
          "undefined" != typeof AbortController &&
            (this._abortController = new AbortController());
          this._headers = createHeaders(this._stream.httpHeaders);
          this._headers.append("Range", `bytes=${t}-${r - 1}`);
          const i = a.url;
          fetch(
            i,
            createFetchOptions(
              this._headers,
              this._withCredentials,
              this._abortController
            )
          )
            .then((e) => {
              if (!(0, s.validateResponseStatus)(e.status))
                throw (0, s.createResponseStatusError)(e.status, i);
              this._readCapability.resolve();
              this._reader = e.body.getReader();
            })
            .catch((e) => {
              if (!e || "AbortError" !== e.name) throw e;
            });
          this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          const { value: e, done: t } = await this._reader.read();
          if (t) return { value: e, done: t };
          this._loaded += e.byteLength;
          this.onProgress && this.onProgress({ loaded: this._loaded });
          return { value: new Uint8Array(e).buffer, done: !1 };
        }
        cancel(e) {
          this._reader && this._reader.cancel(e);
          this._abortController && this._abortController.abort();
        }
      }
    },
  ]);
});
