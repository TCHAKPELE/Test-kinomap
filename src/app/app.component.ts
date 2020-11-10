import { Component } from '@angular/core';
import {GetApiService} from './get-api.service';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { noUndefined } from '@angular/compiler/src/util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test KINOMAP';
  items:Array<any> = [];
  
  name = '';
  constructor(private api:GetApiService){
    


  }
  
  //fonction de controle d'animation( Enlever les commentaires pour rendre active les fonctions.PS: les fonctions marches mais génèrent une erreur de syntaxe qui n'empêche pas la compilation)
  pause() {
    
    

    var anim1 = document.querySelectorAll('.timer');
    var anim2 = document.querySelectorAll('.items');
    var anim3 = document.querySelectorAll('.dots_commands');
    for (var i = 0; i < anim1.length; i++){
      // anim1[i].style.animationPlayState = 'paused';
    }

    for (var i = 0; i < anim2.length; i++){
      // anim2[i].style.animationPlayState = 'paused';
    }

    for (var i = 0; i < anim3.length; i++){
      // anim3[i].style.animationPlayState = 'paused';
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
    
    //Appel Api// 

    this.api.apicall().subscribe((data)=>{
      //console.log("get api data",data["length"]);
      var length =data["length"];
      
      for (var i=0;i<length;i++)
      {
        
        this.items[i]=data[i];
      }
      
      //Gestion de l'ordre de priorité dans l'affichage des logos//

    //console.log('taille',this.items.length);
    var a;
    for(var k=0;k<length-1;k++){
      
      for(var j=k+1;j<length;j++){
        
        if(this.items[j].weight>this.items[k].weight){
          
          a=this.items[j];
          this.items[j]=this.items[k];
          this.items[k]=a;
        }


        
      }

    }

    
    var x =0;
    for(var k=length;k<length+Math.round(length*2/3);k++){
      this.items[k]=this.items[x];
      x++;
     // console.log(k);
    }

    var y =0;
    for(var k=length+Math.round(length*2/3);k<length+Math.round(length*2/3)+Math.round(length/2);k++){
      this.items[k]=this.items[y];
      y++;
      //console.log(k);
    }

    var z =0;
    for(var k=length+Math.round(length*2/3)+Math.round(length/2);k<length+Math.round(length*2/3)+Math.round(length/2)+Math.round(length/4);k++){
      this.items[k]=this.items[z];
      z++;
    }
    

    })
    

}


  
}
