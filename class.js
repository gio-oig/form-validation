class Check {
  // show input error
  showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }

  //show input succsess
  showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  checkEmail(input) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      this.showSuccess(input);
    } else {
      this.showError(input, 'Email in not valid');
    }
  }

  checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
      this.showError(input2, 'Passwods do not match');
    }
  }

  checkRequired(inputArr) {
    inputArr.forEach(input => {
      if (input.value.trim() === '') {
        this.showError(input, `${this.getFildName(input)} is required`);
      } else {
        this.showSuccess(input);
      }
    });
  }

  // get each input name
  getFildName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  checkLength(input, min, max) {
    if (input.value.length < min) {
      this.showError(
        input,
        `${this.getFildName(input)} must be at least ${min}characters`
      );
    } else if (input.value.length > max) {
      this.showError(
        input,
        `${this.getFildName(input)} must be less than    ${max} characters`
      );
    }
  }
}
