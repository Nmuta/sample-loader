import { Component, OnInit, ViewChild } from '@angular/core';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad.component';
import { AdItem } from './ad-Item';

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.scss']
})
export class OrangeComponent implements OnInit {
  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;

  constructor() { }

   

  ngOnInit(): void {
    this.doStuff();
  }

  doStuff(){
    // this line below is giving an error I cannot figure out why.
    // it cannot find this.adHost.viewContainerRef
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

  }

}
