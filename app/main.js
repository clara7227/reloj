window.addEventListener('load', () => {
    upgradeClock;
    canvasClock()
    /*skiesEvents()*/
})
/*VARIABLES*/
let backgroundSky = document.querySelector(".container");

/*DATOS DE DATE*/
let displayClock = () => {
    let clock = new Date();
    let hours = clock.getHours();
    let minutes = clock.getMinutes();
    let seconds = clock.getUTCSeconds();
    let month = clock.getMonth();
    let dayWeek = clock.getUTCDay();
    let dayDate = clock.getUTCDate();
    let timeOfDay = ""
    let astro = ""
    /*CERO ANTES DE NÚMERO*/
    if (seconds < 10) {
        seconds = `0`+ seconds
    }
    if (minutes < 10) {
        minutes = `0`+ minutes
    }
    /*MOMENTO DEL DIA*/
  if (18 >= hours && hours > 9 ) {
        timeOfDay = `day`
        astro = "sol"
        console.log(`day`)
    } else if ( 6 > hours || hours >= 21){
        timeOfDay = `night`
        astro = "luna"
        console.log(`night`)
    } else if ( 20 >= hours && hours > 18){
        timeOfDay = `sunset`
        astro = "sol-rojo"
        console.log(`sunset`)
    } else if ( 21 > hours && hours > 20){
        timeOfDay = `twilight`
        astro = "sol-mitad"
        console.log(`twilight`)
    } else if (9 > hours && hours >= 6 ) {
        timeOfDay = `dawn`
        astro = "sol-mitad"
        console.log(`dawn`)
    }


    /*DIA DE LA SEMANA*/
    switch (dayWeek) {
        case 0:
            dayWeek = "Domingo";
            break;
        case 1:
            dayWeek = "Lunes";
            break;
        case 2:
            dayWeek = "Martes";
            break;
        case 3:
            dayWeek = "Miércoles";
            break;
        case 4:
            dayWeek = "Jueves";
            break;
        case 5:
            dayWeek = "Viernes";
            break;
        case 6:
            dayWeek = "Sábado";
            break;
    }
    switch (month) {
        case 0:
            month = "Enero";
            break;
        case 1:
            month = "Febrero";
            break;
        case 2:
            month = "Marzo";
            break;
        case 3:
            month = "Abril";
            break;
        case 4:
            month = "Mayo";
            break;
        case 5:
            month = "Junio";
            break;
        case 6:
            month = "Julio";
            break;
        case 7:
            month = "Agosto";
            break;
        case 8:
            month = "Septiembre";
            break;
        case 9:
            month = "Octubre";
            break;
        case 10:
            month = "Noviembre";
            break;
        case 11:
            month = "Diciembre";
            break;
    }

    let main = `
        <div class="container">
            <div class="clock-container">
               <div class="hour">
                    <div class="hour-big">${hours}:${minutes} </div>
                    <div class="hour-small">${seconds}</div>
               </div>
                <div class="date"> 
                    <div>${dayWeek} </div>
                    <div class="day-date">${dayDate} </div>
                    <div> ${month}</div>
                </div>
            </div>
        </div>
        <div class="sky-background ${timeOfDay}">
        <div class="astro">
                <div class="${astro}"></div>
            </div></div>`
    document.querySelector(`.main`).innerHTML = main
    
	
}

/*2 INTENTO */

let canvasClock= function() {
	const cvs = document.querySelector('#canvas');
	const ctx = cvs.getContext('2d');
	ctx.lineWidth = 3; //change here circles line-width
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.font = '16px monospace'; //you can put the font outside canvas if you prefer
	ctx.fillStyle = 'gray';

	function getTime(){
		let date = new Date();
	
		let h    = date.getHours();
		let s  = date.getSeconds();
		let m  = date.getMinutes();
	
		// Calculate percentage to be drawn

		var mp = 100 / 60 * m;
		var hp = (100 / 12 * (h % 12)) + ((100 / 12) * (m/60));
		var sp = 100 / 60 * s;

		console.log(hp)
		console.log(mp)
		
		// Ensure double digits
		let dateString = ""
	
		ctx.clearRect(0, 0, 350, 350);
		ctx.fillText(dateString, 175, 175);
		draw(95, hp, "rgba(255, 255, 255, 0.5)"); //change here circles radius y color
		draw(110, mp, "rgba(255, 255, 255, 0.3)");
		draw(125, sp, "rgba(255, 255, 255, 0.1)");			
	}
	
	/**
	 * Draw circles
	*/
	var draw = (function () {
		var start = 1.5 * Math.PI; // Start circle from top
		var end = (2 * Math.PI) / 100; // One percent of circle
	
		/**
		 * Draw percentage of a circle
		 *
		 * @param {number} r Radius
		 * @param {number} p Percentage of circle
		 * @param {string} c Stroke color
		 * @return void
		 */
		return function (r, p, c) {
			p = p || 100; // When time is '00' we show full circle
			ctx.strokeStyle = c;
			ctx.beginPath();
			ctx.arc(175, 175, r, start, p * end + start, false);
			ctx.stroke();
		};
	}());

    setInterval(getTime, 1000);
};
/*ACTUALIZACION RELOJ*/
let upgradeClock = setInterval(displayClock, 1000);


