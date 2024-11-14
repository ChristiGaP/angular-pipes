import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {

  public nameLower: string = 'christian'
  public nameUpper: string = 'CHRISTIAN'
  public fullName: string = 'ChrIsTian dAviD'

  public customDate: Date = new Date()
}
