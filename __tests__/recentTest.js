import React from 'react';

describe('Site', function() {
  jest.dontMock('../src/components/recent');

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Recent = require('../src/components/recent');


  it('contains the sites title, so it is fully revealed on hover', function() {
    var data = {
      title: 'important title'
    };

    var site = TestUtils.renderIntoDocument(<Recent data={data} />);
    var anchor = TestUtils.findRenderedDOMComponentWithClass(site, 'site-link');

    expect(anchor.getDOMNode().title).toEqual('important title');
  });

  it('links to given url', function() {

    var data = {
      url: 'http://jimdo.com/'
    };
    var site = TestUtils.renderIntoDocument(<Recent data={data} />);
    var anchor = TestUtils.findRenderedDOMComponentWithClass(site, 'site-link');

    expect(anchor.getDOMNode().href).toEqual('http://jimdo.com/');
  });

  it('contains an non breaking space, when no title is set, so item occupies full height when there is no content', function() {

    var data = {
      title: ''
    };
    var site = TestUtils.renderIntoDocument(<Recent data={data} />);
    var container = TestUtils.findRenderedDOMComponentWithClass(site, 'site');

    var titleElement = container.getDOMNode().querySelector('.site-title');
    expect(titleElement.textContent).toEqual('\u00a0');
  });

  it('indicates removal when x is hovered', function() {
    var data = {
      title: ''
    };
    var site = TestUtils.renderIntoDocument(<Recent data={data} />);
    var siteContainer = TestUtils.findRenderedDOMComponentWithClass(site, 'site');
    var removeComponent = TestUtils.findRenderedDOMComponentWithClass(site, 'site-remove');

    TestUtils.Simulate.mouseOver(removeComponent);
    expect(siteContainer.getDOMNode().className).toContain('site-removal-intended');

    TestUtils.Simulate.mouseOut(removeComponent);
    expect(siteContainer.getDOMNode().className).not.toContain('site-removal-intended');
  });

  it('removes recent when x is clicked', function() {
    var data = {
      title: ''
    };
    var site = TestUtils.renderIntoDocument(<Recent data={data} />);
    var siteContainer = TestUtils.findRenderedDOMComponentWithClass(site, 'site');
    var removeComponent = TestUtils.findRenderedDOMComponentWithClass(site, 'site-remove');

    TestUtils.Simulate.mouseOver(removeComponent);
    expect(siteContainer.getDOMNode().className).toContain('site-removal-intended');

    TestUtils.Simulate.mouseOut(removeComponent);
    expect(siteContainer.getDOMNode().className).not.toContain('site-removal-intended');
  });

});