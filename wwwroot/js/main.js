document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon'); // i tag'lerini seç

    icons.forEach(icon => {
        const iconName = icon.getAttribute('data-icon'); // data-icon değerini al
        if (iconName) {
            fetch(`../wwwroot/icons/${iconName}.svg`) // SVG dosyasını yükle
                .then(response => {
                    if (!response.ok) throw new Error(`SVG yüklenemedi: ${iconName}`);
                    return response.text();
                })
                .then(svgContent => {
                    icon.innerHTML = svgContent; // SVG içeriğini i tag'ine ekle
                })
                .catch(err => console.error(err));
        }
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const animatedTextElements = document.querySelectorAll("[data-text]");
  
    animatedTextElements.forEach((element) => {
      const text = element.dataset.text; // Get the value of data-text attribute
      element.innerHTML = ""; // Clear the element content
  
      // Split text into lines based on \ (escape character)
      const lines = text.split("\\");
      lines.forEach((line, lineIndex) => {
        const words = line.split(" ");
        words.forEach((word, wordIndex) => {
          const wordContainer = document.createElement("span");
          wordContainer.style.whiteSpace = "nowrap"; // Ensure word stays intact
  
          word.split("").forEach((char) => {
            const span = document.createElement("span");
            span.textContent = char;
            wordContainer.appendChild(span);
          });
  
          element.appendChild(wordContainer);
  
          // Add a space after each word except the last in the line
          if (wordIndex < words.length - 1) {
            const space = document.createElement("span");
            space.textContent = "\u00A0"; // Preserve space
            element.appendChild(space);
          }
        });
  
        // Add <br> if it's not the last line
        if (lineIndex < lines.length - 1) {
          const br = document.createElement("br");
          element.appendChild(br);
        }
      });
    });
  });


  document.getElementById("color_mode_button").addEventListener("click",function (params) {
    if (this.classList.contains("light")) {
      this.classList.remove("light");
      this.classList.add("dark");

      document.documentElement.style.setProperty("--color-1","#161616");
      document.documentElement.style.setProperty("--color-2","#f1f1f1");
      document.documentElement.style.setProperty("--color-3","#3f3f3f");
      document.documentElement.style.setProperty("--color-4","#dddddd");
      
    }else if(this.classList.contains("dark")){
        this.classList.add("light");
        this.classList.remove("dark");
  
      
        document.documentElement.style.setProperty("--color-1","#f1f1f1");
        document.documentElement.style.setProperty("--color-2","#161616");
        document.documentElement.style.setProperty("--color-3","#dddddd");
        document.documentElement.style.setProperty("--color-4","#3f3f3f");
        
    } 

  })


//   const container = document.querySelectorAll('.animated_services'); // İki liste
//   const firstList = container[0];
//   const secondList = container[1];
//   const items = firstList.children; // İlk listedeki span'lar
//   const itemHeight = items[0].offsetHeight; // Her bir span'ın yüksekliği
//   let currentPosition = 0;
  
//   // İkinci listeyi birinci listenin altına yerleştiriyoruz
//   secondList.style.transform = `translateY(${itemHeight * items.length}px)`;
  
//   function scroll() {
//     // İki listeyi aynı anda kaydır
//     firstList.style.transition = 'transform 0.5s ease';
//     secondList.style.transition = 'transform 0.5s ease';
  
//     firstList.style.transform = `translateY(-${currentPosition * itemHeight}px)`;
//     secondList.style.transform = `translateY(${
//       itemHeight * items.length - currentPosition * itemHeight
//     }px)`;
  
//     currentPosition++;
  
//     // Sıfırlama tam bir element daha kaydıktan sonra yapılır
//     if (currentPosition > items.length) {
//       // Geçiş efektlerini kaldır ve sıfırla
//       setTimeout(() => {
//         firstList.style.transition = 'none';
//         secondList.style.transition = 'none';
  
//         firstList.style.transform = 'translateY(0)';
//         secondList.style.transform = `translateY(${itemHeight * items.length}px)`;
  
//         currentPosition = 1; // Sıfırlama sonrası bir elementten devam et
//       }, 500); // Animasyon süresi kadar beklemeden sıfırla
//     }
//   }
  
//   // Her 1 saniyede bir hareketi tekrar et
//   setInterval(scroll, 1000); // 1 saniye = 0.5 hareket + 0.5 duraklama
  
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelectorAll('.animated_services'); // İki liste
    const firstList = container[0];
    const secondList = container[1];
    const items = firstList.children; // İlk listedeki span'lar
    let currentPosition = 0;
  
    function isMobile() {
      return window.innerWidth <= 768; // Mobil cihaz genişliğini belirleme
    }
  
    function updatePositions() {
      const itemSize = isMobile() ? items[0].offsetWidth : items[0].offsetHeight; // Yükseklik veya genişlik
      currentPosition = 0;
  
      if (isMobile()) {
        // Soldan sağa kayma için ikinci listeyi birinci listenin sağına yerleştiriyoruz
        secondList.style.transform = `translateX(${itemSize * items.length}px)`;
      } else {
        // Yukarıdan aşağıya kayma için ikinci listeyi birinci listenin altına yerleştiriyoruz
        secondList.style.transform = `translateY(${itemSize * items.length}px)`;
      }
    }
  
    function scroll() {
      const itemSize = isMobile() ? items[0].offsetWidth : items[0].offsetHeight; // Yükseklik veya genişlik
  
      if (isMobile()) {
        // Yatay kaydırma
        firstList.style.transition = 'transform 0.5s ease';
        secondList.style.transition = 'transform 0.5s ease';
  
        firstList.style.transform = `translateX(-${currentPosition * itemSize}px)`;
        secondList.style.transform = `translateX(${
          itemSize * items.length - currentPosition * itemSize
        }px)`;
      } else {
        // Dikey kaydırma
        firstList.style.transition = 'transform 0.5s ease';
        secondList.style.transition = 'transform 0.5s ease';
  
        firstList.style.transform = `translateY(-${currentPosition * itemSize}px)`;
        secondList.style.transform = `translateY(${
          itemSize * items.length - currentPosition * itemSize
        }px)`;
      }
  
      currentPosition++;
  
      if (currentPosition > items.length) {
        setTimeout(() => {
          firstList.style.transition = 'none';
          secondList.style.transition = 'none';
  
          if (isMobile()) {
            firstList.style.transform = 'translateX(0)';
            secondList.style.transform = `translateX(${itemSize * items.length}px)`;
          } else {
            firstList.style.transform = 'translateY(0)';
            secondList.style.transform = `translateY(${itemSize * items.length}px)`;
          }
  
          currentPosition = 1;
        }, 500); // Animasyon süresi kadar beklemeden sıfırla
      }
    }
  
    // Sayfa boyutu değiştiğinde pozisyonları güncelle
    window.addEventListener('resize', updatePositions);
    updatePositions();
  
    // Her 1 saniyede bir hareketi tekrar et
    setInterval(scroll, 1000); // 1 saniye = 0.5 hareket + 0.5 duraklama
  });
  




document.querySelector("#menu_button").addEventListener("click",function (params) {
    let menu = document.querySelector("menu");
    this.classList.toggle("active");
    
    menu.classList.toggle("opened");
    
    document.querySelector("body").classList.toggle("scrollStopped");
})






  /* now play three times as fast just for the heck of it */
document.querySelector('video').playbackRate = .8;





document.addEventListener("DOMContentLoaded", () => {
    const indexPart2 = document.querySelector("#index_part_2");
  
    // Track the stopping point
    const stopPoint = 1300; // Scroll value where the sticky behavior should stop
    const stickyTop = 4 * 16; // Convert rem to pixels (4rem = 64px assuming 1rem = 16px)
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      console.log(scrollTop);
  
      if (scrollTop > stopPoint) {
        indexPart2.style.position = "fixed";
        indexPart2.style.top = `${stopPoint - scrollTop + stickyTop}px`;
      } else {
        indexPart2.style.position = "sticky";
        indexPart2.style.top = "4rem"; // Original top value
      }
    });
  });
  


document.addEventListener("DOMContentLoaded", () => {
    const content1 = document.querySelector("#p_2_content_1");
    const content2 = document.querySelector("#p_2_content_2");
  
    // Scroll thresholds configuration
    const scrollThresholds = {
      content1Activate: 300,
      content2Activate: 1100
    };
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
  
      if (scrollTop > scrollThresholds.content2Activate) {
        // ScrollTop > content2Activate: Activate content2, deactivate content1
        content2.classList.add("active");
        content2.classList.remove("passive");
        content1.classList.add("passive");
        content1.classList.remove("active");
      } else if (scrollTop > scrollThresholds.content1Activate) {
        // ScrollTop > content1Activate and <= content2Activate: Activate content1, deactivate content2
        content1.classList.add("active");
        content1.classList.remove("passive");
        content2.classList.add("passive");
        content2.classList.remove("active");
      } else {
        // ScrollTop <= content1Activate: Deactivate all
        content1.classList.add("passive");
        content1.classList.remove("active");
        content2.classList.add("passive");
        content2.classList.remove("active");
      }
    });
  });
  