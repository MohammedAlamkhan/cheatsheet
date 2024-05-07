import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
  pdfUrl:any;

  constructor(private sanitizer: DomSanitizer){}
 
 ngOnInit() {
   this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/cheatsheet/assets/angular.pdf');
   
 }
}
