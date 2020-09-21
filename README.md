## 猴子都會的部落格

### 專案目錄
* package-lock.json

* gulpfile.js

* package.json

* README.md

* src
  > 前端撰寫的原始碼
  * back
    > 後台的 js 與 less
    * js
    * less
  * front
    > 前台的 js 與 less
    * js
    * less
    
* dist <!-- 此為整個網站的根目錄 -->  
  * back
    * component <!-- 多個頁面會用到的共同元件 (例如<header>) -->
      * endOfBody.php <!-- (前台各頁面 <body> 最下方共用的 html) -->
      * head.php      <!-- (前台各頁面中 <head> 共用的 html) -->
    * content <!-- 各頁面的內容 -->
    * css
    * function <!-- 後端的function (例如連結資料庫) -->
    * img
    * js
    * plugin <!-- 前端套件 -->
    * source <!-- 從後台上傳的檔案 -->
    * 各頁面的php檔 <!-- 此檔案僅為容器，不含該頁面body中的內容 -->
  * front
    * component <!-- 多個頁面會用到的共同元件 (例如<header>) -->
      * endOfBody.php <!-- (前台各頁面 <body> 最下方共用的 html) -->
      * head.php      <!-- (前台各頁面中 <head> 共用的 html) -->
    * content <!-- 各頁面的內容 -->
    * funuction <!-- 後端的function，例如 from.php -->
    * css
    * img
    * js
    * plugin <!-- 前端套件 -->
    * 各頁面的php檔 <!-- 此檔案僅為容器，不含該頁面body中的內容 -->

### 流程圖

  ```mermaid
  graph LR

  A[使用者]-->B("登入(可使用後台功能)")
  B-->F
  B-->G
  B-->C[公告編輯]
  B-->D[文章編輯]
  B-->E[個人資料編輯]
  A-->F[公告]
  A-->G[文章瀏覽]

  ```