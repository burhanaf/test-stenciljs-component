import { Component, h, getAssetPath, Prop, State, Watch, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'test-modal',
  styleUrl: 'test-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class TestModal {
  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop()
  header: string;
  @Prop() appearance: string;
  @Prop()
  isopen: boolean;
  @Prop() closeIcon = 'close.svg';
  @Prop() buttons: string;

  @State() _buttons: Array<any>;

    //Watch for data
    @Watch('buttons')
    objectDataWatcher(newValue) {
      if (typeof newValue === 'string') {
        this._buttons = JSON.parse(newValue);
      } else {
        this._buttons = newValue;
      }
    }

    @Event() private action:EventEmitter;

  componentWillLoad() {
    this.objectDataWatcher(this.buttons);
  }

  private handleCancel = () => {
    this.isopen = false;
  };

  private handleAction = () => {
    this.action.emit();
  };
  
  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper is-open' : 'modal-wrapper'}>
      <div class="modal-overlay" onClick={this.handleCancel}/>
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close button"/>
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            {this._buttons.map((button, index) => (
              <test-button onClick={index === 0 ? this.handleAction : this.handleCancel} text={button.text} appearance={index === 0 && this.appearance} />
            ))}
          </div>
        </div>
      </div>
    );
  }

}
