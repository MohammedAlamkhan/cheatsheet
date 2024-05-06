import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'app-typescript',
  standalone: true,
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.css'
})
export class TypescriptComponent implements OnInit, OnDestroy{
  id: string="";
  sub:any;
  constructor(private route: ActivatedRoute){
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id =  "/cheatsheet/assets/ts/"+params['id']+".png"; 
    });
   
  }

  

}
