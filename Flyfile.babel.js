const paths = {
  source: {
    htmls: ["src/**/*.html"],
    scripts: ["src/**/*.js"],
    stylesheets: ["src/**/*.css", "src/**/*.scss"]
  },
  dist: "dist"
}

export default function*() {
  yield this.start("watch")
}

export function* watch() {
  yield this.watch(paths.source.htmls, ["build_html"])
  yield this.watch(paths.source.scripts, ["build_js"])
  yield this.watch(paths.source.stylesheets, ["build_css"])
}

export function* build_all() {
  yield this.start(["build_css", "build_js", "build_html"])
}

export function* build_css() {
  yield this.clear(`${paths.dist}/**/*.css*`)
  yield this
    .source(paths.source.stylesheets)
    .sass({
      outputStyle: "compressed",
      sourceMap: true
    })
    .target(paths.dist)
}

export function* build_js() {
  yield this.clear(`${paths.dist}/**/*.js*`)
  yield this
    .source(paths.source.scripts)
    .babel({ presets: ["es2015", "react"], sourceMaps: true })
    .target(paths.dist)
}

export function* build_html() {
  yield this.clear(`${paths.dist}/**/*.html`)
  yield this.source(paths.source.htmls)
    .target(paths.dist)
}
