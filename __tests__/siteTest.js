describe('Site', function() {

  jest.dontMock('../src/components/Site');
  jest.dontMock('../src/react');

  var React = require('../src/react');
  var TestUtils = React.addons.TestUtils;
  var Site = require('../src/components/Site');


  it('contains the sites title, so it is fully revealed on hover', function() {
    var data = {
      title: 'important title'
    };

    var site = TestUtils.renderIntoDocument(<Site data={data} />);
    var anchor = TestUtils.findRenderedDOMComponentWithClass(site, 'site-link');

    expect(anchor.getDOMNode().title).toEqual('important title');
  });

  it('links to given url', function() {

    var data = {
      url: 'http://jimdo.com/'
    };
    var site = TestUtils.renderIntoDocument(<Site data={data} />);
    var anchor = TestUtils.findRenderedDOMComponentWithClass(site, 'site-link');

    expect(anchor.getDOMNode().href).toEqual('http://jimdo.com/');
  });

  it('contains an non breaking space, when no title is set, so item occupies full height when there is no content', function() {

    var data = {
      title: ''
    };
    var site = TestUtils.renderIntoDocument(<Site data={data} />);
    var container = TestUtils.findRenderedDOMComponentWithClass(site, 'site');

    var titleElement = container.getDOMNode().querySelector('.site-title');
    expect(titleElement.textContent).toEqual('\u00a0');
  });
});