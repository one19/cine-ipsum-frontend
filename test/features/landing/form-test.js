/* global render:false */
import test from 'ava';
import nock from 'nock';
import React from 'react';
import CineForm from '../../../src/features/landing/form';
import MarkovBox from '../../../src/features/landing/markov-box';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

test('renders a basic form', t => {
  const wrapper = render(<CineForm />);
  t.is(wrapper.find('form').length, 1);
  t.is(wrapper.find('input').length, 1);
  t.is(wrapper.find('button').length, 1);
});

test('sends requests off to the proper place', async t => {
  const ourServer = nock('https://us-central1-cine-ipsum.cloudfunctions.net')
    .get('/searchToText')
    .query({movie: 'scott pilgrim'})
    .reply(
      200,
      `This is some of the script of scott pilgrim. It involves him
        and kim pine, and ramona flowers, and knives chau being cheeky.
        They're all adorable and have hijinks. There's a pirate? Oh, and
        crash and the boys try to <i>kill</i> the audience.`
    );

  const wrapper = render(<CineForm />);

  t.is(wrapper.find(MarkovBox).length, 0);

  wrapper.find('input').simulate('change', {target: {value: 'scott pilgrim'}});
  wrapper.find('form').simulate('submit');

  // Give it a little time to redraw states and warm up mkjs
  await sleep(30);
  wrapper.update();

  t.is(wrapper.find(MarkovBox).length, 1);

  t.true(ourServer.isDone());
});
