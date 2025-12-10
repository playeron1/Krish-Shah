let menuList = document.getElementById("menuList");
      menuList.style.maxHeight = "0px";
      function toggleMenu() {
        if (menuList.style.maxHeight == "0px") {
          menuList.style.maxHeight = "500px";
        }
        else {
          menuList.style.maxHeight = "0px";
        }
      }
      GitHubCalendar(".calendar", "playeron1", { responsive: true });