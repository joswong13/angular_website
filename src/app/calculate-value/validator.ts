import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function numberValidator(control: AbstractControl){
//     if(control && (control.value !== null || control.value !==undefined)){
//         var tempCheck = parseFloat(control.value);
//         if (typeof tempCheck !== "number"){
//                 return tempCheck ? {
//                     'isError':{value: parseFloat(control.value)}
//                 }: null
//         }
//     }
//     return null;
// }

/** A hero's name can't match the given regular expression */
export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const tempCheck = (!parseFloat(control.value));
      return tempCheck ? {'numCheck': {value: false}} : null;
    };
  }