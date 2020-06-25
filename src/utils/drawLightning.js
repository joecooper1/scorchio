export default function drawLightning(ctx, width, height) {
  //Create array of ligntning bolts
  const bolts = [];

  //Make illuminate function
  function illuminate(counter) {
    //Clear canvas
    ctx.clearRect(0, 0, width, height);

    //Add a new bolt
    if (counter > 0.995) {
      //Set starting coords
      const x = Math.random() * width;
      const y = 0;
      //Set course
      const pointsAlongCourse = [{ x, y }];
      for (let i = 1; i < 30; i++) {
        const prevX = pointsAlongCourse[i - 1].x;
        const prevY = pointsAlongCourse[i - 1].y;
        pointsAlongCourse.push({
          x: prevX + Math.random() * 20 - 10,
          y: prevY + Math.random() * 40,
        });
      }
      //Push into bolt
      bolts.push({
        x,
        y,
        brightness: 2,
        pointsAlongCourse,
      });
    }

    //Draw bolt
    for (let i = 0; i < bolts.length; i++) {
      const bolt = bolts[i];
      //Draw flash
      ctx.fillStyle = `hsla(308, 38%, 95%, ${bolt.brightness - 1})`;
      ctx.fillRect(0, 0, width, height);
      //Draw stakes
      ctx.strokeStyle = `hsla(308, 38%, 95%, ${bolt.brightness})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bolt.x, bolt.y);
      //Go to all points along course
      for (let i = 0; i < bolt.pointsAlongCourse.length; i++) {
        const point = bolt.pointsAlongCourse[i];
        ctx.lineTo(point.x, point.y);
      }
      ctx.stroke();
    }

    //Modify bolts
    for (let i = 0; i < bolts.length; i++) {
      const bolt = bolts[i];
      //Reduce brightness
      bolt.brightness -= 0.04;
      //If brightness is zero, remove bolt
      if (bolt.brightness < 0) bolts.shift();
    }
  }

  return illuminate;
}
