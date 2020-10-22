import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpCallComponent } from './follow-up-call.component';

describe('FollowUpCallComponent', () => {
    let component: FollowUpCallComponent;
    let fixture: ComponentFixture<FollowUpCallComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FollowUpCallComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FollowUpCallComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
