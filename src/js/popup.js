$("#tweet").on('click', function() {
  var settingJson = localStorage.getItem('setting');
  var setting     = JSON.parse(settingJson);

  var inputString  = $('#tweet_string').val();
  var tweetString = CryptoJS.AES.encrypt(inputString, setting.passphrase).toString();

  if (setting.prefix) { tweetString = setting.prefix + ' ' + tweetString }
  if (setting.suffix) { tweetString = tweetString    + ' ' + setting.suffix }

  var intent = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweetString);

  chrome.tabs.create({ url: intent });
  window.close;
});