import { Fragment, h } from '@stencil/core';
import { render } from '@wdio/browser-runner/stencil';
import { $, expect } from '@wdio/globals';

describe('static-members', function () {
  beforeEach(() => {
    render({
      components: [],
      template: () => (
        <>
          <static-members></static-members>
          <static-decorated-members></static-decorated-members>
          <static-members-separate-export></static-members-separate-export>
          <static-members-separate-initializer></static-members-separate-initializer>
        </>
      ),
    });
  });

  it('renders properly with initialized static members', async () => {
    const cmp = await $('static-members').$('div');
    await expect(cmp).toHaveText('This is a component with static public and private members');
  });

  it('renders properly with initialized, decorated static members', async () => {
    const cmp = await $('static-decorated-members').$('div');
    await expect(cmp).toHaveText('This is a component with a static Stencil decorated member');
  });

  it('renders properly with a separate export', async () => {
    const cmp = await $('static-members-separate-export').$('div');
    await expect(cmp).toHaveText('This is a component with static public and private members');
  });

  it('renders properly with a static member initialized outside of a class', async () => {
    const cmp = await $('static-members-separate-initializer').$('div');
    await expect(cmp).toHaveText('This is a component with static an externally initialized member');
  });
});
