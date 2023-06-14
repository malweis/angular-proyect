import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('reportForm', { static: false }) reportForm!: NgForm;
  cardItems: any[] = [];
  formData: any = {};
  errorMessages: any = {
    imageSrc: '',
    descripcion: '',
    lastTimeSeen: '',
    contactNumber: '',
    country: ''
  };
  
  


  submitReport() {
    if (!this.isFormValid()) {
      return;
    }

    // Add the form data to the cardItems array
    this.cardItems.push(this.formData);

    // Reset the form data
    this.formData = {};

    // Reset the form state
    this.reportForm.resetForm();
  }
  isFormValid(): boolean {
    const { imageSrc, descripcion, lastTimeSeen, contactNumber, country } = this.formData;
    let isValid = true;
  
    // Reset error messages
    this.errorMessages = {
      imageSrc: '',
      descripcion: '',
      lastTimeSeen: '',
      contactNumber: '',
      country: ''
    };
  
    // Check if all required fields are filled
    if (!imageSrc || imageSrc.trim().length === 0) {
      this.errorMessages.imageSrc = 'Imagen de mascota es requerida';
      isValid = false;
    }
  
    if (!descripcion || descripcion.trim().length === 0) {
      this.errorMessages.descripcion = 'Descripcion es requerida';
      isValid = false;
    }
  
    if (!lastTimeSeen || lastTimeSeen.trim().length === 0) {
      this.errorMessages.lastTimeSeen = 'Ultima vez visto es requerido';
      isValid = false;
    }
  
    if (!contactNumber || contactNumber.trim().length === 0) {
      this.errorMessages.contactNumber = 'Numero de contacto es requerido';
      isValid = false;
    }
  
    if (!country || country.trim().length === 0) {
      this.errorMessages.country = 'Pais es requerido';
      isValid = false;
    }

   // Check title length
if (descripcion && descripcion.length > 13) {
  this.errorMessages.descripcion = 'Descripcio no puede exceder 13 caracteres';
  isValid = false;
}

  
    // Check phone number format (numeric type)
    if (isNaN(Number(contactNumber))) {
      this.errorMessages.contactNumber = 'Numero de contacto debe ser numerico';
      isValid = false;
    }
  
    // Check country field value
    if (country !== 'Paraguay') {
      this.errorMessages.country = 'Pais debe ser "Paraguay"';
      isValid = false;
    }
  
    // Check link field format (URL)
    const urlPattern = /^(https?:\/\/).*\..*$/;
    if (!urlPattern.test(imageSrc)) {
      this.errorMessages.imageSrc = 'Debe ser una URL valida';
      isValid = false;
    }
  
   
  
    // Reset error messages if the form is valid
    if (isValid) {
      this.errorMessages = {
        imageSrc: '',
        descripcion: '',
        lastTimeSeen: '',
        contactNumber: '',
        country: ''
      };
    }
  
    return isValid;
  }
  
  
}
