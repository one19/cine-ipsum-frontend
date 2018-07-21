/* global render:false */
import test from 'ava';
import React from 'react';
import {LandingPage} from '../../../src/features';

test('renders a basic page', t => {
  const wrapper = render(<LandingPage />);
  t.is(wrapper.find('h1').length, 1);
  t.is(wrapper.find('h3').length, 1);
  t.is(wrapper.find('form').length, 1);
});
