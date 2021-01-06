import { newSpecPage } from '@stencil/core/testing';
import { TestModal } from '../test-modal';

describe('test-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TestModal],
      html: `<test-modal></test-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <test-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </test-modal>
    `);
  });
});
