import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-javascript',
  standalone: true,
  imports: [],
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.css'
})
export class JavascriptComponent {
  pdfUrl1:any;
  pdfUrl2:any;
  pdfUrl3:any;

  constructor(private sanitizer: DomSanitizer){}
 
 ngOnInit() {
   this.pdfUrl1 = this.sanitizer.bypassSecurityTrustResourceUrl('/cheatsheet/assets/ES6HTMLDOM.pdf');
   
   this.pdfUrl2 = this.sanitizer.bypassSecurityTrustResourceUrl('/cheatsheet/assets/JsAPIcalls.pdf');
   
   this.pdfUrl3 = this.sanitizer.bypassSecurityTrustResourceUrl('/cheatsheet/assets/JsEs6CheatSheet.pdf');
   
 }
}
