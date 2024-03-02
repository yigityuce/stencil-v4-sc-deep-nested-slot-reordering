import { Component, ComponentInterface, Host, State, h } from '@stencil/core';

const DEFAULT_ITEM_COUNT = 8;

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent implements ComponentInterface {
  @State() dynamicTestItems: HTMLElement[] = [];

  componentWillLoad(): void | Promise<void> {
    this.dynamicTestItems = this.createTestVNodes();
  }

  private createTestVNodes = (count = DEFAULT_ITEM_COUNT, shuffle = false): HTMLElement[] => {
    const items = Array.from(new Array(count)).map((_, i) => <span class="default-slot-item">{`item-${i}`}</span>);
    return shuffle ? items.sort(() => Math.random() - 0.5) : items;
  };

  render() {
    return (
      <Host>
        <my-nested-component>
          <span slot="header">Header Text</span>
          {this.dynamicTestItems}
        </my-nested-component>
      </Host>
    );
  }
}
