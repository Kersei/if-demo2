import { FormControl, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

export class ExtraValidation {
    static rightEmail(c: FormControl) {
        if (/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(c.value) || c.value === '' || c.value === null) {
            return null;
        }
        else {
            return { rightEmail: { valid: false } };
        }
    }

    static areEqual(g: FormGroup) {
        let lastVal: string;
        for (let name in g.controls) {
            if (lastVal == null) {
                lastVal = g.controls[name].value;
            }
            var val = g.controls[name].value;
            if (lastVal != val) {
                return { areEqual: { valid: false } };
            }
        }
        return null;
    }

    static matchValues(matchTo: string): (AbstractControl) => ValidationErrors | null {
        return (control: AbstractControl): ValidationErrors | null => {
            return !!control.parent &&
                !!control.parent.value &&
                control.value === control.parent.controls[matchTo].value
                ? null
                : { isMatching: false };
        };
    }

    static phoneMX(c: FormControl) {
        if (/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(c.value) || c.value === '' || c.value === null) {
            return null;
        }
        else {
            return { phoneMX: { valid: false } };
        }
    }
}