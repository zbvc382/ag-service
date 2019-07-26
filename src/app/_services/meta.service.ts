import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export class MetaService {
  constructor(@Inject(DOCUMENT) private dom) { }

  createCanonicalURL(url?: string) {
    const link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.dom.head.appendChild(link);
    link.setAttribute('href', url);
  }
}
