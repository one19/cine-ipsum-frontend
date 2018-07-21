/* global render:false */
import test from 'ava';
import React from 'react';
import sinon from 'sinon';
import {Button} from '../../src/various';

test('renders a basic button', t => {
  const wrapper = render(<Button />);
  t.is(wrapper.find('button').length, 1);
});

test('pipes a submit prop to the proper place', t => {
  const wrapper = render(<Button submit />);
  t.is(wrapper.find('button').props().type, 'submit');
});
test('pipes it through aas button type if not there', t => {
  const wrapper = render(<Button />);
  t.is(wrapper.find('button').props().type, 'button');
});

test('pipes the children through', t => {
  const wrapper = render(<Button>Do stuff</Button>);
  t.is(wrapper.find('button').text(), 'Do stuff');
});
test('pipes through anything, even more html', t => {
  const wrapper = render(
    <Button>
      <p>woop de do</p>
    </Button>
  );
  t.is(wrapper.find('p').text(), 'woop de do');
});

test('does stuff when you use an onClick', t => {
  const onClick = sinon.spy();
  const wrapper = render(<Button onClick={onClick}>Fire</Button>);

  wrapper.find('button').simulate('click');
  t.true(onClick.calledOnce);
});

test('looks disabled when given that prop', t => {
  const wrapper = render(<Button disabled />);
  t.is(wrapper.find('button').props().disabled, true);
});
test('disables the onClick method when disabled', t => {
  const onClick = sinon.spy();
  const wrapper = render(
    <Button onClick={onClick} disabled>
      Fire
    </Button>
  );

  wrapper.find('button').simulate('click');
  t.is(onClick.callCount, 0);
});
