import { DecimalPipe } from '@angular/common';
import { Pipe } from '@angular/core';

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({ name: 'appCurrency' })
export class AppCurrencyPipe extends DecimalPipe {
  private readonly symbols: {[key: string]: string}  = {
    rub: '₽',
    usd: '$',
    eur: '€',
  };
  transform(value: number | string, digitsInfo?: string, locale?: string): string | null;
  transform(value: null | undefined, digitsInfo?: string, locale?: string): null;
  transform(value: number | string | null | undefined, currencyCode: string, digitsInfo?: string, locale?: string): string | null {
    const symbol = this.symbols[currencyCode.toLowerCase()];
    const price = super.transform(value, digitsInfo || '1.0-0');
    // tslint:disable-next-line:no-unused-expression
    return symbol.toString() + ' ' + price?.toString();
  }
}
