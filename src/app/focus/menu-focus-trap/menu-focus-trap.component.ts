import { Component, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';

@Component({
  selector: 'ally-menu-focus-trap',
  templateUrl: './menu-focus-trap.component.html',
  styleUrls: ['./menu-focus-trap.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuFocusTrapComponent {
  isMenuVisible = false;
  isDialogVisible = false;

  @ViewChild('cdkTrapFocus', { static: true })
  cdkTrapFocus: CdkTrapFocus;

  @ViewChild('menuButton', { static: true })
  menuButton: ElementRef<HTMLButtonElement>;

  @ViewChild('dialog', { static: true })
  dialog: ElementRef<HTMLDialogElement>;

  showMenu() {
    this.isMenuVisible = true;
    this.cdkTrapFocus.focusTrap.focusInitialElement();
  }

  hideMenu() {
    this.isMenuVisible = false;
    this.menuButton.nativeElement.focus();
  }

  showDialog() {
    this.isDialogVisible = true;
    this.dialog.nativeElement.open = true;
  }

  hideDialog() {
    this.dialog.nativeElement.open = false;
    this.isDialogVisible = false;
  }
}
