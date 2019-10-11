import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode'
})
export class CountryCodePipe implements PipeTransform {

  transform(value: any, code: string): any {
    switch (code) {
      case 'US':
        return "+1 " + value;
      case 'AUS':
        return "+11 " + value
      case 'EUR':
        return "+2 " + value
      default:
        return "+91 " + value;
    }

  }

}
