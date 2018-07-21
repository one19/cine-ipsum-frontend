/* global render:false */
import test from 'ava';
import React from 'react';
import MarkovJson from 'markov-json';
import MarkovBox from '../../../src/features/landing/markov-box';

// The following text is nearly deterministic.
// it should be random enough to give different results
// but not so random that you never see the two tests pass
const mkjs = new MarkovJson();
mkjs.train(
  'This has been <i>trained really well</i> bingo really well on text.'
);

test('renders ok, given good props', t => {
  const wrapper = render(<MarkovBox markov={mkjs} />);
  t.is(wrapper.find('h3').length, 1);
  t.is(wrapper.find('h3').text(), 'Movie title: uhhhh.... some movie?');
  t.is(wrapper.find('button').length, 1);
});

test('listens to the search query for your movie', t => {
  const wrapper = render(<MarkovBox markov={mkjs} search="Satantango" />);
  t.is(wrapper.find('h3').text(), 'Movie title: Satantango');
});

test('outputs some random text', t => {
  const wrapper = render(<MarkovBox markov={mkjs} />);
  t.true(wrapper.find('div').text().length > 100);
});

test('gives you new text when asked to', t => {
  const wrapper = render(<MarkovBox markov={mkjs} />);
  const text1 = wrapper.find('div').text();

  wrapper.find('button').simulate('click');

  const text2 = wrapper.find('div').text();
  t.notDeepEqual(text1, text2);
});

test('changes <i>blah</i> groups into <bold>s', t => {
  const wrapper = render(<MarkovBox markov={mkjs} />);
  t.true(
    wrapper
      .find('div')
      .html()
      .includes('<bold>')
  );
});
