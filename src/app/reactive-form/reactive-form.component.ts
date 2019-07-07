import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-root',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent implements OnInit {
  licenseForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private formService: FormService) {}
  ngOnInit() {
    this.licenseForm = this.formBuilder.group({
      licenseFile: this.formBuilder.group({
        filename: [''],
        serialNumber: [''],
        file: null
      }),
      username: [''],
      password: ['']
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      // console.log(file instanceof Blob);
      // reader.readAsText(file);
      reader.readAsBinaryString(file);
      reader.onload = () => {
        console.log(reader.result);
        // const fileContentAsJson = JSON.parse(<string>reader.result);
        // this.licenseForm.get('licenseFile').setValue({
        //   filename: file.name,
        //   serialNumber: fileContentAsJson.serialNumber,
        //   file: file
        // });
      };
    }
  }

  onSubmit() {
    console.log(this.licenseForm);
    let reader = new FileReader();
    reader.readAsText(this.licenseForm.value.licenseFile.file);
    reader.onload = () => {
      console.log(reader.result);
    };
    const { licenseFile, username, password } = this.licenseForm.value;
    this.formService.putData(licenseFile.filename, licenseFile.file, username, password);
  }
}
