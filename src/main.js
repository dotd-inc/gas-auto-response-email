function onFormSubmit(evt) {

  const email = evt.namedValue['メールアドレス'][0];
  const name = evt.namedValue['お名前'][0];

  MailApp.sendEmail({
    to: email,
    subject: MailSubject,
    body: MailBody(name),
  });
}
