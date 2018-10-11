import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  _displayAccountIcons = false;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public media: ObservableMedia
    ) {
    iconRegistry.addSvgIcon(
      'fuel',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/img/icons/fuel.svg')
    );
  }

  get displayAccountIcons() {
    return this._displayAccountIcons;
  }

}
