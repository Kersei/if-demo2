import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialCallComponent } from './initial-call.component';

describe('InitialCallComponent', () => {
    let component: InitialCallComponent;
    let fixture: ComponentFixture<InitialCallComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InitialCallComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InitialCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
