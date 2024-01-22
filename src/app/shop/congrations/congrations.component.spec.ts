import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongrationsComponent } from './congrations.component';

describe('CongrationsComponent', () => {
  let component: CongrationsComponent;
  let fixture: ComponentFixture<CongrationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CongrationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CongrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
