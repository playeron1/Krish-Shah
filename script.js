// Menu Toggle with Smooth Animation
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "500px";
    menuList.style.transition = "max-height 0.5s ease-in-out";
  } else {
    menuList.style.maxHeight = "0px";
    menuList.style.transition = "max-height 0.5s ease-in-out";
  }
}

// GitHub Contributions Graph with Fade-in Effect
document.addEventListener("DOMContentLoaded", function () {
    let githubContainer = document.querySelector("#github-contributions");
    githubContainer.style.opacity = "0";
    githubContainer.style.transition = "opacity 1s ease-in-out";

    GitHubCalendar("#github-contributions", "krish-shah").then(() => {
        githubContainer.style.opacity = "1";
    });
});

// Calendar Heatmap with Smooth Transition
import CalHeatmap from 'cal-heatmap';

const cal = new CalHeatmap();
cal.paint({
   itemSelector: '#cal-heatmap',
   domain: {
      type: 'month',
      gutter: 4,
      label: { text: 'MMM', textAlign: 'start', position: 'top' },
    },
    subDomain: { type: 'ghDay', radius: 2, width: 11, height: 11, gutter: 4 },
    date: { start: new Date('2012-01-01') },
    range: 12,
}).then(() => {
    document.querySelector('#cal-heatmap').style.opacity = "1";
    document.querySelector('#cal-heatmap').style.transition = "opacity 1s ease-in-out";
});