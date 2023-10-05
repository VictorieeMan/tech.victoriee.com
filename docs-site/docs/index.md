# Welcome

To visit the blog follow this link: [https://tech.victoriee.com/journal/blog/](https://tech.victoriee.com/journal/blog/)

Math test: $\frac{a}{b}$ \\[\frac{a}{b}\\]

<!-- Binary Clock -->
<div id="binary-clock"></div>
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

<!-- Binary Clock -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary Clock</title>
    <style>
        .container {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: inline-block;
            margin: 2px;
        }

        .red {
            background-color: red;
        }

        .grey {
            background-color: grey;
        }

        pre {
            font-size: 20px;
            font-family: monospace;
        }
    </style>
</head>
<body>
    <pre id="binaryClock"></pre>
    
    <script>
        function decimalToBinary(decimal, numBits = 4) {
            let binaryStr = (decimal >>> 0).toString(2);
            return binaryStr.padStart(numBits, '0');
        }

        function displayBinaryClock(elapsedTime) {
            // Convert elapsed time to hours, minutes, seconds
            const hours = decimalToBinary(Math.floor(elapsedTime / 3600), 6);
            const minutes = decimalToBinary(Math.floor((elapsedTime % 3600) / 60), 6);
            const seconds = decimalToBinary(elapsedTime % 60, 6);

            const binaryMatrix = [
                ["h:"].concat([...hours]),
                ["m:"].concat([...minutes]),
                ["s:"].concat([...seconds])
            ];

            const binaryClockElement = document.getElementById("binaryClock");
            binaryClockElement.innerHTML = "";

            for (const row of binaryMatrix) {
                const rowContainer = document.createElement("div");
                rowContainer.className = "container";
                for (const item of row) {
                    if (item === "1" || item === "0") {
                        const circleElement = document.createElement("div");
                        circleElement.className = "circle " + (item === '1' ? "red" : "grey");
                        rowContainer.appendChild(circleElement);
                    } else {
                        rowContainer.innerHTML += item + "";
                    }
                }
                binaryClockElement.appendChild(rowContainer);
            }
        }

        function binaryClock() {
            const startTime = Math.floor(Date.now() / 1000);
            setInterval(() => {
                const elapsedTime = Math.floor(Date.now() / 1000) - startTime;
                displayBinaryClock(elapsedTime);
            }, 1000);
        }

        window.addEventListener("DOMContentLoaded", () => {
            binaryClock();
        });
    </script>
</body>
</html>
