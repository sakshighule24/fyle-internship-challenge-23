import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoListComponent } from './repo-list.component';

describe('RepoListComponent', () => {
  let component: RepoListComponent;
  let fixture: ComponentFixture<RepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepoListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display repos', () => {
    component.repos = [{ name: 'repo1' }, { name: 'repo2' }];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const repoList = compiled.querySelectorAll('li');
    expect(repoList.length).toBe(2);
    expect(repoList[0].textContent).toContain('repo1');
    expect(repoList[1].textContent).toContain('repo2');
  });

  it('should display "No repos found" when repos is empty', () => {
    component.repos = [];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.textContent).toContain('No repos found');
  });
});
