import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpMockService } from 'src/app/core/services/http-mock.service';
import { SpinnerService } from 'src/app/core/services/spinner-service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private httpService: HttpMockService, private spinnerService: SpinnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.spinnerService.start("Loading");
    this.httpService.getUsers().subscribe(
      (data: User[]) => {
        this.user = data.filter(u => u.id == this.route.snapshot.params['id'])[0];
        console.log("U "+JSON.stringify(this.user))
        this.spinnerService.stop();
      }
    )
  }

}
