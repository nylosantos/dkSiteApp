declare const fbq:any 

export const contactUsCellphone = () => {
  fbq("trackCustom", "Contact-Us-Cellphone");
};
export const contactUsDesktop = () => {
  fbq("trackCustom", "Contact-Us-Desktop");
};