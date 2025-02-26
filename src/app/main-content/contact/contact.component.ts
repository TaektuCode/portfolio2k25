import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslatePipe, TranslateDirective, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isHovered: boolean = false;
  isAnimated: boolean = false;
  isChecked: boolean = false;

  showGraphic() {
    if (!this.isAnimated) {
      this.isHovered = true;
      this.isAnimated = true;

      setTimeout(() => {
        this.isHovered = false;
        this.isAnimated = false;
      }, 2000);
    }
  }
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  nameError: boolean = false;
  emailError: boolean = false;
  messageError: boolean = false;

  checkPlaceholder(field: string): void {
    switch (field) {
      case 'name':
        this.nameError =
          !this.contactData.name || this.contactData.name.trim() === '';
        break;
      case 'email':
        this.emailError =
          !this.contactData.email || this.contactData.email.trim() === '';
        break;
      case 'message':
        this.messageError =
          !this.contactData.message || this.contactData.message.trim() === '';
        break;
    }
  }

  mailTest = true;

  post = {
    endPoint: 'https://caryen-song.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.isChecked = false;
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      this.isChecked = false;
    }
  }
}
