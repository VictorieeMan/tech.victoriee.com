# Welcome

The time is: <span id="binary-clock"></span>, and all is well.

This site is a work in progress, and I'm still structuring and evolving it. My play is to present some of my technical writing and maybe some projects. Writing and sharing is a valuable part of learning.

Things I find interesting:

  - Physics
  - Mathematics
  - Engineering
  - Computer programming

The future is bright, and I'm excited to see what it holds. We are living in a time of useful tools and information. If we just get our act together, I bet we can and will do some amazing things.

<!-- Javascripts -->
<!-- Binary Clock -->
<script>
  function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString(2).padStart(4, '0');
    var minutes = now.getMinutes().toString(2).padStart(6, '0');
    var seconds = now.getSeconds().toString(2).padStart(6, '0');
    document.getElementById('binary-clock').innerText = hours + ' : ' + minutes + ' : ' + seconds;
  }
  setInterval(updateClock, 1000);
  updateClock();
</script>