function onFormSubmit(evt) {

  const email = evt.namedValue['メールアドレス'][0];
  const name = evt.namedValue['お名前'][0];

  GmailApp.sendEmail(email, MailSubject, MailBody(name), Options);
}
