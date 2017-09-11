import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteItemComponent } from './invite-item.component';

describe('InviteItemComponent', () => {
  let component: InviteItemComponent;
  let fixture: ComponentFixture<InviteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
