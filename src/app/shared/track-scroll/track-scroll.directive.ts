import { Directive } from '@angular/core';

@Directive({
    selector: '[appTrackScroll]',
    host: {
        '(window:scroll)': 'track($event)'
    }
})
export class TrackScrollDirective {

    constructor() { }

}
