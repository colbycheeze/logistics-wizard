import React from 'react';
import test from 'ava';
import { mount, render, shallow } from 'enzyme';

// Ava api: https://github.com/avajs/ava#api
test('(Ava) api works as expected.', t => {
  t.pass();
  t.skip.fail(); // auto fails, so we skip it!
  t.is(typeof ('a string'), 'string');
  t.not(typeof ('a string'), 'number');
  t.regex('Some words!', /word/);
  // t.notRegex('Some words!', /blah/); // not working??
  t.true(true);
  t.false(false);
  t.truthy(1);
  t.falsy(null);
  t.skip.is({ a: { b: 1 } }, { a: { b: 1 } }); // this would fail (so use deepEqual)
  t.deepEqual({ a: { b: 1 } }, { a: { b: 1 } });
  t.notDeepEqual({ a: { b: 1 } }, { a: { b: 2 } });
  t.throws(() => { throw 'Error'; }); // eslint-disable-line
  t.notThrows(() => {});
});

// Sinon docs: http://sinonjs.org/docs/
test.todo('Write some sinon examples');

// redux-ava docs: https://github.com/sotojuan/redux-ava#examples
test.todo('Write some examples of redux-ava');

const Fixture = () => (
  <div>
    <input id="checked" defaultChecked />
    <input id="not" defaultChecked={false} />
  </div>
);

// Enzyme docs: https://github.com/airbnb/enzyme/tree/master/docs
// Shallow is used for almost every use case, unless you CANNOT use it (see below)
test('(Enzyme) shallow', t => {
  const wrapper = shallow(<Fixture />);
  t.is(wrapper.find('input').length, 2);
  t.is(wrapper.find('#checked').props().defaultChecked, true);
  t.is(wrapper.find('#not').props().defaultChecked, false);
});

// Mount is used when you need to interact with lifecycle methods such as componentDidMount
test.todo('Write example of using lifecycle methods with Enzyme mount');
test('(Enzyme) mount', t => {
  const wrapper = mount(<Fixture />);
  t.is(wrapper.find('input').length, 2);
  t.is(wrapper.find('#checked').props().defaultChecked, true);
  t.is(wrapper.find('#not').props().defaultChecked, false);
});

// Render is for viewing and interacting with the actual static HTML that is generated
// The wrapper uses the Cheerio api: https://cheerio.js.org/#selectors
test('(Enzyme) render', t => {
  const wrapper = render(<Fixture />);
  t.is(wrapper.find('input').length, 2);
  t.is(wrapper.find('#checked').attr('checked'), 'checked');
  t.is(wrapper.find('#not').attr('checked'), undefined);
});
