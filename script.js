function runAnimation() {
    var tl = gsap.timeline();

    // Add sequential animations to the timeline
    tl.to(".title", { duration: 0.3, x: "130%", ease: "power2.linear" })
      .to("#list1", { duration: 0.3, x: "130%", ease: "power2.linear" })
      .to("#list2", { duration: 0.3, x: "130%", ease: "power2.linear" })
      .to("#list3", { duration: 0.3, x: "200%", ease: "power2.linear" })
      .to("#list4", { duration: 0.3, x: "130%", ease: "power2.linear" })
      .to("#list5", { duration: 0.3, x: "130%", ease: "power2.linear" })
      .to("#list6", { duration: 0.3, x: "130%", ease: "power2.linear" })
      .to("#image", { duration: 0.3, x: "-15%", rotate:360 , ease: "power2.linear" });
  
    // Play the timeline
    tl.play();
}


document.addEventListener('DOMContentLoaded', function () {
    runAnimation();
});