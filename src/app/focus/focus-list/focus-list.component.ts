import {
  Component,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList, ElementRef,
  AfterViewInit,
  Directive,
  HostBinding } from '@angular/core';
import { FocusKeyManager, FocusableOption } from '@angular/cdk/a11y';

@Directive({
  selector: '[allyTile]'
})
export class FocusableTileDirective implements FocusableOption {
  @HostBinding('attr.tabindex')
  tabindex = 0;

  constructor(private ref: ElementRef) {}

  focus() {
    this.ref.nativeElement.focus();
  }
}

@Component({
  selector: 'ally-focus-list',
  templateUrl: './focus-list.component.html',
  styleUrls: ['./focus-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FocusListComponent implements AfterViewInit {
  focusList: FocusKeyManager<FocusableTileDirective>;

  @ViewChildren(FocusableTileDirective)
  tiles: QueryList<FocusableTileDirective>;

  ngAfterViewInit() {
    this.focusList = new FocusKeyManager(this.tiles)
      .withWrap()
      .withHorizontalOrientation('ltr');
  }

  handleKeydown(event: KeyboardEvent) {
    const { key } = event;
    const manager = this.focusList;

    switch(key) {
      case 'home':
        manager.setFirstItemActive();
        event.preventDefault();
        break;
      case 'end':
        manager.setLastItemActive();
        event.preventDefault();
        break;
      default:
        this.focusList.onKeydown(event);
    }
  }
}
