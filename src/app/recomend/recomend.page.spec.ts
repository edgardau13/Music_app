import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendPage } from './recomend.page';

describe('RecomendPage', () => {
  let component: RecomendPage;
  let fixture: ComponentFixture<RecomendPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecomendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
