let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// Intersection Observerを使って画像が表示されたときに"visible"クラスを追加
document.addEventListener("DOMContentLoaded", function() {
  // 対象となる画像の要素を取得
  const images = document.querySelectorAll('.fade-in');

  // オプション設定 (ビューポートに50%入ったら)
  const options = {
    root: null, // ビューポートを基準にする
    rootMargin: '0px',
    threshold: 0.5 // 50%が画面に表示されたら発火
  };

  // 交差した際に発火するコールバック関数
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      // 要素が表示されたとき
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // "visible"クラスを追加
      }
    });
  };

  // IntersectionObserverのインスタンスを作成
  const observer = new IntersectionObserver(callback, options);

  // 各画像に対して監視を開始
  images.forEach(image => {
    observer.observe(image);
  });
});


