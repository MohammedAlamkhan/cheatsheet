import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mongodb',
  standalone: true,
  imports: [],
  templateUrl: './mongodb.component.html',
  styleUrl: './mongodb.component.css'
})
export class MongodbComponent implements OnInit {
  pdfUrl:any;

  constructor(private sanitizer: DomSanitizer){}
 
 ngOnInit() {
   this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/cheatsheet/assets/mongo.pdf');
   
 }
}
