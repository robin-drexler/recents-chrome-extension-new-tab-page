import React from 'react';

function createSite(title, url) {
  return {title, url};
}
describe('Sites Container', function() {
  jest.dontMock('../src/components/SitesContainer');

  var TestUtils = require('react-addons-test-utils');
  var SitesContainer = require('../src/components/SitesContainer');
  var Site = require('../src/components/recent');

  it('contains sites', function() {
    var sites = [{}, {}, {}];

    var siteContainer = TestUtils.renderIntoDocument(<SitesContainer sites={sites} site={Site} limit={9}/>);
    var sitesComponents = TestUtils.scryRenderedComponentsWithType(siteContainer, Site);

    expect(sitesComponents.length).toEqual(3);
  });

  it('filters sites by title', function() {
    var sites = [
      createSite('Camel', ''),
      createSite('I do match', ''),
      createSite('Cucumber', '')
    ];

    var filter = 'i do mat';
    var siteContainer = TestUtils.renderIntoDocument(<SitesContainer filter={filter} sites={sites} site={Site} limit={9}/>);
    var sitesComponents = TestUtils.scryRenderedComponentsWithType(siteContainer, Site);

    expect(sitesComponents.length).toEqual(1);
  });

  it('filters sites by url', function() {
    var sites = [
      createSite('', 'http://google.com/1'),
      createSite('', 'http://facebook.com/'),
      createSite('', 'http://google.com/2')
    ];

    var filter = 'google';
    var siteContainer = TestUtils.renderIntoDocument(<SitesContainer filter={filter} sites={sites} site={Site} limit={9}/>);
    var sitesComponents = TestUtils.scryRenderedComponentsWithType(siteContainer, Site);

    expect(sitesComponents.length).toEqual(2);
  });
});