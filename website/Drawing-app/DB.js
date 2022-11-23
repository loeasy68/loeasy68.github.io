 const ERASER=0
	   const PAINT=1
       var draw=PAINT
	   
       function init() {
		document.body.style.overflow="hidden";
        var ctx = myCanvas.getContext("2d")
		var can = document.createElement("myCanvas")
		document.body.appendChild(can)
	    }
		
		paint.onclick = function() 
		{
            draw = PAINT
        }
     
	 
	    eraser.onclick = function() 
		{
            draw = ERASER
        }
		
	
               
        window.addEventListener('mousedown', function(e) { //when mouse button is pressed down and the path begins
            var can = document.getElementById("myCanvas")
            var ctx = can.getContext('2d')
            ctx.beginPath()
			canvasX = e.pageX - myCanvas.offsetLeft;
            canvasY = e.pageY - myCanvas.offsetTop;
            ctx.moveTo(canvasX, canvasY);
            ctx.lineCap = "round"
            
		
		if(draw== ERASER) { //work of eraser
            ctx.strokeStyle = "#fff"
            ctx.lineWidth = document.getElementById("nsize").value
	    }
		
		else //work for pen
		{
            ctx.strokeStyle = document.getElementById("colorPicker").value
            ctx.lineWidth = document.getElementById("nsize").value
        }
                
	   can.onmousemove = function(e) //when mouse wil move
	   {
            
			canvasX = e.pageX - myCanvas.offsetLeft;
            canvasY = e.pageY - myCanvas.offsetTop;
            ctx.lineTo(canvasX, canvasY);
			ctx.stroke()
       }
              
	    can.onmouseup = function(e) //when mouse will be released
		{
            ctx.closePath()
			can.onmousemove = null
            can.onmouseup = null
        }
 })

init()