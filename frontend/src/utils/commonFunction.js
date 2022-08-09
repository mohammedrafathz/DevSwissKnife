import {notify} from 'react-notify-bootstrap';

export const generateUniqueId = length => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
};

export const copyToClipboard = text => {
  if (text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        notify({text: 'Copied!', variant: 'dark'});
      });
  }
};