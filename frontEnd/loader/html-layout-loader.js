const loaderUtils = require('loader-utils')
const fs = require('fs')
module.exports = function (source) {
  const options = loaderUtils.getOptions(this)
  const layoutHtml = fs.readFileSync(options.layout, 'utf-8')
  console.log(layoutHtml.replace('{{__content__}}', source))
  return layoutHtml.replace('{{__content__}}', source)
}