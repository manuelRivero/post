import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivationCodeComponent } from './activation-code.component';

describe('ActivationCodeComponent', () => {
  let component: ActivationCodeComponent;
  let fixture: ComponentFixture<ActivationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivationCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
