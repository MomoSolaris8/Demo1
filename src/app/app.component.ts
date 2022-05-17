import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message : string = "helo Angular";
  htmlString: string ="<h1>htmlString</h1>"
  getInfo(){
    return "我是getInfo方法返回的内容"
  }


  //title =" angular-test2"
  //imgUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d7/MCM_London_2014_-_Pikachu_%2814266616051%29.jpg"
title = "test"
onSave(event: Event){
  this.title
}

}
