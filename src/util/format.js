import numeral from 'numeral';
// load a locale
numeral.register('locale', 'br', {
  delimiters: {
    thousands: '.',
    decimal: ',',
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't',
  },
  ordinal(number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'R$',
  },
});

// switch between locales
numeral.locale('br');

export default function formatPrice(value) {
  return numeral(value).format('$ 0,0.00');
}
