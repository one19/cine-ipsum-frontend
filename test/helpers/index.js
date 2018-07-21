/* eslint-env browser */
const {JSDOM} = require('jsdom');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost/'
});

Enzyme.configure({adapter: new Adapter()});
global.render = Enzyme.mount;

const {window} = jsdom;
global.window = window;
global.document = window.document;
global.navigator = window.navigator;
