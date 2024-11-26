/**
 * 送信メールのテンプレート
 */

// メール設定
const Options = {
  from: 'test@example.com',            // 送信元メールアドレス
  name: 'テストユーザー',                // 送信元表示名
  replyTo: 'test@example.com',         // 返信先メールアドレス
  cc: '',                              // CCメールアドレス
  bcc: '',                             // BCCメールアドレス
};

// 送信メールの件名
const MailSubject = `メールの件名`

// 送信メールの本文
const MailBody = (customerName) => (`
${customerName} 様

メール本文

メール本文

メール本文

`);