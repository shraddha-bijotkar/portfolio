import { Component } from '@angular/core';

@Component({
  selector: 'exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css'],
})
export class ExpComponent {
  openCity(evt: Event, cityName: string): void {
    let i: number;
    let tabcontent: HTMLCollectionOf<Element> =
      document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = 'none';
    }
    let tablinks: HTMLCollectionOf<Element> =
      document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      (tablinks[i] as HTMLElement).className = (
        tablinks[i] as HTMLElement
      ).className.replace(' active', '');
    }
    (document.getElementById(cityName) as HTMLElement).style.display = 'block';
    (evt.currentTarget as HTMLElement).className += ' active';
  }

  // Get the element with id="defaultOpen" and click on it
  //document.getElementById("defaultOpen")!.click();
}
