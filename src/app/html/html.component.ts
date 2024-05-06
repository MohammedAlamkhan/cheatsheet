import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent {
  pdfUrl:any;

 constructor(private sanitizer: DomSanitizer){}

ngOnInit() {
  this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/cheatsheet/assets/html.pdf');
}
}
