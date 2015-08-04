describe('Site', function() {
  
  var React = require('../src/react');
  jest.dontMock('../src/components/Site');
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
});