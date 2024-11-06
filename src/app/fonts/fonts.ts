import { Almarai, Cairo } from 'next/font/google';

export const cairo = Cairo({ subsets: ['arabic'] });
export const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
});
