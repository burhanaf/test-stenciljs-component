import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'test-button',
  styleUrl: 'test-button.css',
  shadow: true,
})
export class TestButton {
  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {/* Slot */}
        {this.text}
      </button>
    );
  }

}
