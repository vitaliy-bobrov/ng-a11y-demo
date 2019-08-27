import {
  Component,
  OnInit,
  ChangeDetectionStrategy } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ally-focus-monitor',
  templateUrl: './focus-monitor.component.html',
  styleUrls: ['./focus-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FocusMonitorComponent implements OnInit {
  focusedElement$: Observable<string>;

  ngOnInit() {
    this.focusedElement$ = interval(300).pipe(map(this.findFocused));
  }

  private findFocused() {
    const element = document.querySelector(':focus');

    return element === null ? 'body' : `${element.tagName.toLowerCase()} ${element.textContent}`;
  }
}
