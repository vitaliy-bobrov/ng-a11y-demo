import { Component, ChangeDetectionStrategy, HostListener, ViewChild, ElementRef } from '@angular/core';

export interface Option {
  label: string;
  value: any;
}

@Component({
  selector: 'ally-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  selected: Option;
  isDropdownVisible = false;

  options = [
    {
      label: 'Black',
      value: 'black'
    },
    {
      label: 'White',
      value: 'white'
    },
    {
      label: 'Red',
      value: 'red'
    }
  ];

  @ViewChild('listbox') listbox: ElementRef;

  @ViewChild('toggle') toggle: ElementRef;

  @HostListener('keydown.esc')
  closeDropdown() {
    this.isDropdownVisible = false;
    this.toggle.nativeElement.focus();
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;

    if (this.isDropdownVisible) {
      this.listbox.nativeElement.focus();
    }
  }

  handleSelection(option: Option) {
    this.selected = this.selected === option ? null : option;
    this.isDropdownVisible = false;
    this.toggle.nativeElement.focus();
  }
}
