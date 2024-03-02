import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-nested-component',
  styleUrl: 'my-nested-component.css',
  shadow: false,
  scoped: true,
})
export class MyNestedComponent {
  render() {
    return (
      <Host>
        <slot name="header" />
        <my-dummy-component id="level-1">
          <my-dummy-component id="level-2">
            <slot />
          </my-dummy-component>
        </my-dummy-component>
      </Host>
    );
  }
}
