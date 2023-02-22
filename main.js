if (/iPhone/i.test(navigator.userAgent)) {
    window.location.replace("instagram://");

    setTimeout(() => {
      window.location.replace(
        "https://apps.apple.com/us/app/instagram/id389801252"
      );
    },100);
}

if (/Android/i.test(navigator.userAgent)) {
    const url =
    "intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end";

  window.location.replace(url);
}

  