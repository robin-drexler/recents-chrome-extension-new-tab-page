describe('Sites Container', function() {

  jest.dontMock('../src/components/SitesContainer');

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var SitesContainer = require('../src/components/SitesContainer');
  var Site = require('../src/components/recent');

  it('contains sites', function() {
    var sites = [{}, {}, {}];

    var siteContainer = TestUtils.renderIntoDocument(<SitesContainer sites={sites} site={Site} limit={9}/>);
    var sitesComponents = TestUtils.scryRenderedComponentsWithType(siteContainer, Site);

    expect(sitesComponents.length).toEqual(3);
  });
});