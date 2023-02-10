// const ctx = document.getElementById('canvas').getContext('2d');
//     if (ctx && imgRef) {
//       canvasRef.current.width = parentRef.current.offsetWidth;
//       canvasRef.current.height = parentRef.current.offsetHeight;
//       const aspectRatio = 503 / 448
      
//       // ctx.drawImage(imgRef.current, 0, 0, parentRef.current.offsetHeight, parentRef.current.offsetHeight / aspectRatio)

//       class Particle {
//         constructor(effect) {
//           this.effect = effect;
//           this.x = Math.random() * this.effect.width;
//           this.y = Math.random() * this.effect.height;
//           this.size = 3;
//         }
      
//         draw(context) {
//           context.fillRect(this.x, this.y, this.size, this.size);
//         }
//       }

//       class Effect {
//         constructor(width, height, img, parentWidth, parentHeight) {
//           this.width = width
//           this.height = height
//           this.parentWidth = parentWidth
//           this.parentHeight = parentHeight
//           this.particlesArray = [];
//           this.aspectRatio = (503 * 1.0) / 448
//           // this.image = document.getElementById('image')
//           this.image = img
//           this.centerX = this.width * 0.5
//           this.centerY = this.height * 0.5
//           this.x = this.centerX - this.image.width * 0.5
//           this.y = this.centerY - this.image.height * 0.5
//         }

//         init() {
//           for (let i = 0; i < 100; i++) {
//             this.particlesArray.push(new Particle(this))
//           }
//         }

//         draw(context) {
//           this.particlesArray.forEach((particle) => particle.draw(context));
//           context.drawImage(imgRef.current, 0, 0, this.parentHeight * this.aspectRatio, this.parentHeight)
//         }
//       }

//       const effect = new Effect(canvasRef.current.width, canvasRef.current.height, imgRef.current, parentRef.current.offsetWidth, parentRef.current.offsetHeight);
//       effect.init()
//       effect.draw(ctx)

//       function animation() {
        
//       }
//     }