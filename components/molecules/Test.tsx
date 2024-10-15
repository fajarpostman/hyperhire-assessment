<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Swiper demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!-- Link Swiper's CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

  <!-- Demo styles -->
  <style>
    html,
    body {
      position: relative;
      height: 100%;
    }

    body {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
    }

    body {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    /* Tooltip style */
    .salary-tooltip {
      background-color: #59d57e;
      color: #fff;
      font-weight: bold;
      padding: 8px 16px;
      border-radius: 50px;
      position: absolute;
      top: -40px;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    }

    .salary-tooltip::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 10px;
      border-style: solid;
      border-color: #59d57e transparent transparent transparent;
    }

    .swiper {
      width: 300px;
      height: 400px;
      position: relative;
    }

    .swiper-slide {
      background-color: #fff;
      border-radius: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }

    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #ddd;
      margin-bottom: 10px;
    }

    .name {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    .position {
      font-size: 16px;
      color: #888;
      margin-bottom: 15px;
    }

    .experience {
      font-size: 14px;
      color: #555;
      margin-bottom: 20px;
    }

    .skills {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .skills div {
      background-color: #f1f1f1;
      padding: 5px 10px;
      border-radius: 12px;
      font-size: 12px;
      margin: 5px;
    }
  </style>
</head>

<body>
  <!-- Salary tooltip -->
  <div class="salary-tooltip">
    월 100만원
  </div>

  <!-- Swiper -->
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <div class="profile-img"></div>
        <div class="name">Abhishek Gupta</div>
        <div class="position">마케팅</div>
        <div class="experience">2y+</div>
        <div class="skills">
          <div>마케팅 콘텐츠 제작</div>
          <div>인스타그램 관리</div>
          <div>트위터 관리</div>
          <div>블로그 글 작성</div>
        </div>
      </div>
      <div class="swiper-slide">
        <div class="profile-img"></div>
        <div class="name">User 2</div>
        <div class="position">디자이너</div>
        <div class="experience">3y+</div>
        <div class="skills">
          <div>UI/UX 디자인</div>
          <div>프로토타입 제작</div>
          <div>브랜드 디자인</div>
        </div>
      </div>
      <!-- More slides here -->
    </div>
  </div>

  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

  <!-- Initialize Swiper -->
  <script>
    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });
  </script>
</body>

</html>
