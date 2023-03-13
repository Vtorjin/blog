(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{932:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var s=this,t=s._self._c;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"express-generator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#express-generator"}},[s._v("#")]),s._v(" express-generator")]),s._v(" "),t("h2",{attrs:{id:"init-express-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init-express-project"}},[s._v("#")]),s._v(" init express project")]),s._v(" "),t("p",[s._v("use cmd   "),t("strong",[s._v("express-generator")])]),s._v(" "),t("h2",{attrs:{id:"generator-options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generator-options"}},[s._v("#")]),s._v(" generator options")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ express -h\n\n  Usage: express [options] [dir]\n\n  Options:\n\n    -h, --help          输出使用方法\n        --version       输出版本号\n    -e, --ejs           添加对 ejs 模板引擎的支持\n        --hbs           添加对 handlebars 模板引擎的支持\n        --pug           添加对 pug 模板引擎的支持\n    -H, --hogan         添加对 hogan.js 模板引擎的支持\n        --no-view       创建不带视图引擎的项目\n    -v, --view <engine> 添加对视图引擎（view） <engine> 的支持 (ejs|hbs|hjs|jade|pug|twig|vash) （默认是 jade 模板引擎）\n    -c, --css <engine>  添加样式表引擎 <engine> 的支持 (less|stylus|compass|sass) （默认是普通的 css 文件）\n        --git           添加 .gitignore\n    -f, --force         强制在非空目录下创建\n\n")])])]),t("h2",{attrs:{id:"interface-docs-swagger-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-docs-swagger-version"}},[s._v("#")]),s._v(" interface docs swagger-version")]),s._v(" "),t("ul",[t("li",[s._v("use command "),t("strong",[s._v("pnpm i swagger-jsdoc swagger-ui-express -s")])]),s._v(" "),t("li")]),s._v(" "),t("h2",{attrs:{id:"interface-docs-apidocs-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-docs-apidocs-version"}},[s._v("#")]),s._v(" interface docs apiDocs-version")]),s._v(" "),t("ul",[t("li",[s._v("use command "),t("strong",[s._v("npm install apidoc -g")])]),s._v(" "),t("li",[s._v("create "),t("strong",[s._v("apidoc.json")]),s._v(" file in root path")]),s._v(" "),t("li",[s._v("create new folder to save generate files with api"),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/apidoc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("express"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"savepath"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("express"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"public"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])]),s._v(" "),t("li",[s._v("add comments to the corresponding interface;"),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**\n  * 获得某个用户\n  * @api {GET} /api/users/:id  获得某个用户\n  * @apiDescription 根据id获得某个用户\n  * @apiName getUser\n  * @apiParam (path参数) {Number|string} id\n  * @apiSampleRequest /api/user/1e2wwddfee22r323423-1221111\n  * @apiGroup User\n  * @apiVersion 1.0.0\n  **/")]),s._v("\n  router"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/api/users/:id'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("req"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" next")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      res"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'respond with a resource'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])]),s._v(" "),t("li",[s._v("render api docs"),t("div",{staticClass:"language-cmd extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  apidoc -i routes -o docs\n")])])])]),s._v(" "),t("li",[s._v("develop static sources"),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("express"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'public'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\napp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/docs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("express"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("static")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'docs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])]),s._v(" "),t("p",[s._v("总结：样式不好看")])])}],!1,null,null,null);t.default=e.exports}}]);