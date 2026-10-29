import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QuoteSection, Search, LazyDemo } from './index';

test('use() + Suspense shows a fallback while pending', () => {
  render(<QuoteSection quotePromise={new Promise<string>(() => {})} />);
  expect(screen.getByText('Loading quote…')).toBeInTheDocument();
});

test('use() renders the resolved value', async () => {
  const p = Promise.resolve('Stay hungry');
  await act(async () => { render(<QuoteSection quotePromise={p} />); });
  expect(await screen.findByText('Stay hungry')).toBeInTheDocument();
});

test('deferred search filters', async () => {
  render(<Search />);
  await userEvent.type(screen.getByLabelText('search'), '1999');
  expect(await screen.findByText('item-1999')).toBeInTheDocument();
});

test('lazy component', async () => {
  render(<LazyDemo />);
  expect(await screen.findByText('Heavy chart loaded')).toBeInTheDocument();
});
