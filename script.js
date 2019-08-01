var clock = document.getElementById('clock')
var c = clock.getContext('2d')

function draw(){
// clear
c.beginPath()
c.rect(0,0, clock.width, clock.height)
c.fillStyle= 'hsl(0, 0%, 100%)'
c.fill
  
  
  
  // Draw clock face
c.beginPath()
c.arc(
  clock.width/2,
  clock.height/2,
  clock.width/2 * 0.8,
  0,
  Math.PI *2
)
c.fillStyle= 'hsl(300, 100%, 45%)'
c.fill()

// second hand 
var time =new Date()
var angleSeconds = (Math.PI * 2) / 60 * time.getSeconds()
var angleMinutes = (Math.PI * 2) / 60 * time.getMinutes()
var angleHours = (Math.PI * 2) / 12 * time.getHours()


c.save()
c.beginPath()
c.translate(clock.width/2, clock.height/2)
c.rotate(angleSeconds)
c.moveTo(0,0)
c.lineTo(0, - (clock.height/2)*0.8)
c.lineWidth = 5
//black
c.strokeStyle= 'hsl(0, 0%, 0%)'
c.stroke()
c.restore()

c.save()
c.beginPath()
c.translate(clock.width/2, clock.height/2)
c.rotate(angleMinutes)
c.moveTo(0,0)
c.lineTo(0, - (clock.height/2)*0.8)
c.lineWidth = 5.5
//yellow
c.strokeStyle= 'hsl(60, 100%, 50%)'
c.stroke()
c.restore()

c.save()
c.beginPath()
c.translate(clock.width/2, clock.height/2)
c.rotate(angleHours)
c.moveTo(0,0)
c.lineTo(0, - (clock.height/2)*0.8)
c.lineWidth = 6
c.strokeStyle= 'hsl(12, 100%, 50%)'
c.stroke()
c.restore()

// Draw the centre cap 
  c.beginPath()
  c.arc(
    clock.width/2,
    clock.height/2,
    7,
    0,
    Math.PI * 2
  )
  c.fillStyle = 'red'
  c.fill()



requestAnimationFrame(draw)
}
requestAnimationFrame(draw)
