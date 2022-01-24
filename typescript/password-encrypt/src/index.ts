import { encrypt } from './encryption';

const form = <HTMLFormElement>document.getElementById('encryption');
const passphrase = <HTMLTextAreaElement>document.getElementById('passphrase')!;
const password = <HTMLInputElement>document.getElementById('password')!;
const result = <HTMLTextAreaElement>document.getElementById('encrypted')!;
const error = <HTMLDivElement>document.getElementById('error')!;

window.onload = function() {

    passphrase.value = 'acid skill page ginger hospital ripple green cup fine finger other pipe envelope refuse bike year put multiply harsh churn claw display move improve';
    password.value = 'password';

    form!.addEventListener('submit', (event) => {
        try {
            result.innerText = encrypt(passphrase.value, password.value);
        } catch(errorText) {
            error.innerHTML = '' + errorText;
        }
        event.preventDefault();
    });
}
