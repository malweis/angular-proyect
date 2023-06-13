import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() data: any;

  ngOnInit() {
    console.log('Image URL:', this.data.imageSrc);
  }

  viewReport() {
    // Implement your logic to view the full report here
    console.log('View Report Clicked');
  }
}
