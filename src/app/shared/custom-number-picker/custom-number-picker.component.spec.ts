import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNumberPickerComponent } from './custom-number-picker.component';

describe('CustomNumberPickerComponent', () => {
    let component: CustomNumberPickerComponent;
    let fixture: ComponentFixture<CustomNumberPickerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CustomNumberPickerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CustomNumberPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
