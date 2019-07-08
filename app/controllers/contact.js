import Controller from '@ember/controller';
import {match, not, gte, and} from '@ember/object/computed';

export default Controller.extend({
    emailAddress: '',
    responseMessage: '',


    isValidEmail: match('emailAddress', /^.+@.+\..+$/), 
    isValidMessage: gte('message.length', 5 ),
    isBothTrue: and('isValidEmail', 'isValidMessage'),
    isDisabled: not('isBothTrue'),

    actions:{
        sendMessage(){
            alert(`Thank you for contacting us. \n ${this.get('emailAddress')} is sending the message: \n ${this.get('message')}`);
            this.set('responseMessage', `We got your message and we'll get in touch soon`);
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }
});
