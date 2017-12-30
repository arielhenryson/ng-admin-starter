import { TestBed, async } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { RouterTestingModule } from '@angular/router/testing'


import { MockModule } from './mocks/mocks.module'
import { MockComponent } from './mocks/mock.component'


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MockModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: MockComponent
          }
        ])
      ]
    }).compileComponents()
  }))


  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  }))
})
