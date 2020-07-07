import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  addForm: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.addForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(30), userService.checkCapital]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, [Validators.min(18), Validators.max(120)]),
      gender: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  addUser(): void {
    const u: User = {
      name: this.addForm.get('name').value,
      email: this.addForm.get('email').value,
      age: this.addForm.get('age').value,
      gender: this.addForm.get('gender').value,
    };
    this.userService.addUser(u).subscribe((response) => {
      if (response.success){
        this.router.navigate(['/students']);
      }
    });
    console.log(this.addForm);
  }
}
