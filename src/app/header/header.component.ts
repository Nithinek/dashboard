import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{

  constructor() {}
  ngOnInit():void{
    
  }
 @Output() toggle=new EventEmitter();
  menuIconClick(){
this.toggle.emit()
setTimeout(()=>{
window.dispatchEvent(
  new Event('resize')
)
},1000)
  }
}
