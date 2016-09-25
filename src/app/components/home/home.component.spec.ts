import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [HomeComponent]});
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
  });
});
