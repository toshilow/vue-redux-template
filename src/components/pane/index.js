require('./style.scss')

module.exports = {
  template: require('./template.html'),
  replace: true,
  props: ['side', 'name']
}