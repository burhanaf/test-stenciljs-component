import { newE2EPage } from '@stencil/core/testing';

describe('test-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<test-modal></test-modal>');

    const element = await page.find('test-modal');
    expect(element).toHaveClass('hydrated');
  });
});
