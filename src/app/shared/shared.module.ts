import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatDatepickerModule, MatIconModule, MatSelectModule } from '@angular/material';
import { FocusOnShowDirective } from './focus-on-show/focus-on-show.directive';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { TrackScrollDirective } from './track-scroll/track-scroll.directive';
import { ButtonScaleComponent } from './button-scale/button-scale.component';
import { OptionsDotsComponent } from './options-dots/options-dots.component';
import { DayPickerComponent } from './day-picker/day-picker.component';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';
import { CustomNumberPickerComponent } from './custom-number-picker/custom-number-picker.component';

registerLocaleData(es);

@NgModule({
    declarations: [
        SearchBarComponent,
        CustomSelectComponent,
        ButtonScaleComponent,
        FocusOnShowDirective,
        TrackScrollDirective,
        OptionsDotsComponent,
        DayPickerComponent,
        CustomCheckboxComponent,
        CustomNumberPickerComponent
    ],
    exports: [
        SearchBarComponent,
        CustomSelectComponent,
        ButtonScaleComponent,
        OptionsDotsComponent,
        DayPickerComponent,
        CustomCheckboxComponent,
        CustomNumberPickerComponent
    ],
    imports: [
        MatIconModule,
        CommonModule,
        MatSelectModule,
        MatDatepickerModule,
        FormsModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-MX' }
    ]
})
export class SharedModule { }
