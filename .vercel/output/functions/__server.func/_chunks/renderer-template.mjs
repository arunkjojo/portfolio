import { HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
const rendererTemplate = () => new HTTPResponse("<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <meta name=\"theme-color\" content=\"#0f172a\" />\r\n    <title>Arun Jojo | Portfolio</title>\r\n  </head>\r\n  <body>\r\n    <div id=\"root\"></div>\r\n    <script type=\"module\" src=\"/src/main.tsx\"><\/script>\r\n  </body>\r\n</html>\r\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
