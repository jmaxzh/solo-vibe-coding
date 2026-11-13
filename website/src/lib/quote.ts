import Big from 'big.js';

export type QuoteInput = { hours: number; rate: number; extras: number; reserve: number; };

export function calculateQuote(input: QuoteInput) {
  const { hours, rate, extras, reserve } = input;
  if (![hours, rate, extras, reserve].every(Number.isFinite) || hours < 0 || hours > 10000 || rate < 0 || rate > 1000000 || extras < 0 || extras > 1000000000 || reserve < 0 || reserve > 100) {
    throw new RangeError('Quote inputs are outside the supported range.');
  }
  const cents = (amount: Big) => amount.round(0, Big.roundHalfUp).toNumber();
  const rateCents = cents(new Big(rate).times(100));
  const workCents = cents(new Big(hours).times(rateCents));
  const extraCents = cents(new Big(extras).times(100));
  const baseCents = workCents + extraCents;
  const reserveCents = cents(new Big(baseCents).times(reserve).times('0.01'));
  return { rateCents, extraCents, baseCents, reserveCents, totalCents: baseCents + reserveCents };
}
