import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaAlunosComponent } from './media-alunos.component';

describe('MediaAlunosComponent', () => {
  let component: MediaAlunosComponent;
  let fixture: ComponentFixture<MediaAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
