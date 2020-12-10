<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted () {

    const script = function (p5) {
      let speed = 2;
      let posX = 0;
      let video;

      p5.setup =_=> {
        console.log(_)
        p5.createCanvas(500,500);
        // p5.ellipse(p5.width/2, p5.height/2, 500,500);
        // video = p5.createCapture(VIDEO);
        video.hide();
      }
      p5.draw =_=> {
        console.log(_)
        p5.background(0);
        const degree = p5.frameCount *3;
        const y = p5.sin(p5.radians(degree)) * 50;

        p5.push();
          p5.translate(0,p5.height/2);
          p5.ellipse(posX,y,50,50);
        p5.pop();

        posX += speed;
      }
    }
    const P5 = require("p5");
    new P5(script)
  }
}
</script>