import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-dummy-component',
  styleUrl: 'my-dummy-component.css',
  shadow: false,
  scoped: true,
})
export class MyDummyComponent {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
