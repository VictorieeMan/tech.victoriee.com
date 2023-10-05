# Welcome

The time is: <div id="binary-clock"></div> and all is well.



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