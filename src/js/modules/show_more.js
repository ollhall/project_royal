export function isShowMore() {
  const showMoreInformDuble = document.querySelector(".show-more-inform-duble");
  const InformDubleGridItems = document.querySelectorAll(
    ".inform-duble-grid-item"
  );

  if (showMoreInformDuble && InformDubleGridItems.length > 0) {
    const productsLengthPub = InformDubleGridItems.length;
    let itemsPub = 1;

    showMoreInformDuble.addEventListener("click", () => {
      showMoreInformDuble.innerHTML = "Завантажуємо";

      setTimeout(() => {
        itemsPub += 1;
        const arrayPub = Array.from(
          document.querySelector(".inform-duble-grid").children
        );
        const visItemsPub = arrayPub.slice(0, itemsPub);

        visItemsPub.forEach((el) => {
          el.setAttribute("tabindex", "0");
          el.classList.add("is-visible");
        });

        if (visItemsPub.length > 0) {
          visItemsPub[visItemsPub.length - 1].focus();
        }

        if (visItemsPub.length === productsLengthPub) {
          showMoreInformDuble.style.display = "none";
        }

        showMoreInformDuble.innerHTML = "Більше";
      }, 1000);
    });
  }

  //=====================================================

  const showMoreEntersThird = document.querySelector(".show-more-enters-third");
  const EntersThirdGridItems = document.querySelectorAll(".enters-third-grid__item");
  
  if (showMoreEntersThird && EntersThirdGridItems.length > 0) {
    let itemsPod = 3;
    const productsLengthPod = EntersThirdGridItems.length;
  
    showMoreEntersThird.addEventListener("click", () => {
      showMoreEntersThird.innerHTML = "Завантажуємо"; 
  
     
      setTimeout(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 950) {
          itemsPod += 7;
        } else {
          itemsPod += 3;
        }
  
        const arrayPod = Array.from(
          document.querySelector(".enters-third-grid").children
        );
        const visItemsPod = arrayPod.slice(0, itemsPod);
  
        visItemsPod.forEach((el) => {
          el.setAttribute("tabindex", "0");
          el.classList.add("is-visible");
        });
  
        if (visItemsPod.length > 0) {
          visItemsPod[visItemsPod.length - 1].focus(); 
        }
  
        if (visItemsPod.length === productsLengthPod) {
          showMoreEntersThird.style.display = "none";
        }
  
        showMoreEntersThird.innerHTML = "Всі послуги"; 
      }, 1000); 
    });
  }

  //===============================================
  const showMoreNew = document.querySelector(".show-more-why-us");
  const newsGridItems = document.querySelectorAll(".why-us-grid__item-show");

  if (showMoreNew && newsGridItems.length > 0) {
    let itemsNew = 3;
    const productsLengthNew = newsGridItems.length;

    showMoreNew.addEventListener("click", () => {
      showMoreNew.innerHTML = "Завантажуємо";

      setTimeout(() => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 670) {
          itemsNew += 4;
        } else {
          itemsNew += 1;
        }

        const arrayNew = Array.from(
          document.querySelector(".why-us-grid-show").children
        );
        const visItemsNew = arrayNew.slice(0, itemsNew);

        visItemsNew.forEach((el) => {
          el.setAttribute("tabindex", "0");
          el.classList.add("is-visible");
        });

        if (visItemsNew.length > 0) {
          visItemsNew[visItemsNew.length - 1].focus();
        }

        if (visItemsNew.length === productsLengthNew) {
          showMoreNew.style.display = "none";
        }

        showMoreNew.innerHTML = "Більше переваг";
      }, 1000);
    });
  }
}
