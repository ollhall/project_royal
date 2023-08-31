export function isScript() {
  document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".item-tabs");

    function removeActiveClassFromTabs() {
      tabs.forEach((tab) => {
        tab.classList.remove("item-tabs-active");
      });
    }

    document.addEventListener("click", function (event) {
      const isTab = Array.from(tabs).some((tab) => tab.contains(event.target));

      if (!isTab) {
        removeActiveClassFromTabs();
      }
    });

    tabs.forEach((tab) => {
      tab.addEventListener("click", function (event) {
        event.stopPropagation();

        tabs.forEach((otherTab) => {
          if (otherTab !== tab) {
            otherTab.classList.remove("item-tabs-active");
          }
        });
        this.classList.toggle("item-tabs-active");
      });
    });
  });

  //======================================================


}
