import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../pages/Home';
import Calculator from '../../components/Calculator';
import Quote from '../../pages/Quotes';
import NavBar from '../../components/NavBar';

describe('test snapshots for all components', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders calculator correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders Quotes correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('matches navbar', () => {
    const tree = renderer.create(
      <Router>
        <NavBar />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
