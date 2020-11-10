import { Component } from '@angular/core';
import {GetApiService} from './get-api.service';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  items:Array<any> = [];
  name = '';
  constructor(private api:GetApiService){
    


  }
  
  //fonction de controle d'animation
  pause() {
    
    

    var anim1 = document.querySelectorAll('.timer');
    var anim2 = document.querySelectorAll('.items');
    var anim3 = document.querySelectorAll('.dots_commands');
    for (var i = 0; i < anim1.length; i++){
      //anim1[i].style.animationPlayState = 'paused';
    }

    for (var i = 0; i < anim2.length; i++){
      //anim2[i].style.animationPlayState = 'paused';
    }

    for (var i = 0; i < anim3.length; i++){
      //anim3[i].style.animationPlayState = 'paused';
    }
  }

  play() {

   
    
    var anim1 = document.querySelectorAll('.timer');
    var anim2 = document.querySelectorAll('.items');
    var anim3 = document.querySelectorAll('.dots_commands');
    for (var i = 0; i < anim1.length; i++){
     // anim1[i].style.animationPlayState = 'running';
    }

    for (var i = 0; i < anim2.length; i++){
     // anim2[i].style.animationPlayState = 'running';
    }

    for (var i = 0; i < anim3.length; i++){
     // anim3[i].style.animationPlayState = 'running';
    }
  }

  
  ngOnInit(){
    
    //Appel Api
    this.api.apicall().subscribe((data)=>{
      //console.log("get api data",data);
      for (var i=0;i<13;i++)
      {
        
        this.items[i]=data[i];
      }
      
      //Gestion de priorité dans l'affichage des logos
    
    var a;
    for(var k=0;k<12;k++){
      
      for(var j=k+1;j<13;j++){
        
        if(this.items[j].weight>this.items[k].weight){
          
          a=this.items[j];
          this.items[j]=this.items[k];
          this.items[k]=a;
        }


        
      }

    }
    
    })
    

}


  
}
