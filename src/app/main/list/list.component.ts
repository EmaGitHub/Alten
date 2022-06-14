import { Component, OnInit } from '@angular/core';
import { HttpMockService } from 'src/app/core/services/http-mock.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private httpMockService: HttpMockService) { }

  ngOnInit(): void {
    
  }

}
