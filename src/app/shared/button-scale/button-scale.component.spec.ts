import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonScaleComponent } from './button-scale.component';

describe('ButtonScaleComponent', () => {
    let component: ButtonScaleComponent;
    let fixture: ComponentFixture<ButtonScaleComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ButtonScaleComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ButtonScaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
