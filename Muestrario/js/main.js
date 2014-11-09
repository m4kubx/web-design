$(document).on("ready", inicio);

function inicio () {
	$("#personalizar").on("click", transicion);	
}

function transicion() {
	var cambiosCSS = {
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var cambiosPerson = {
		height: "auto",
		opacity: 1,
		width: "35%"
	};
	$("#historia").css(cambiosCSS);
	$("#personalizacion").css(cambiosPerson);

	$("#color div").on("click", cambiarColor);
}

function cambiarColor(datos) {
	var color = datos.currentTarget.id;
	$("#imagen img").attr("src","./images/c"+color+".jpg");
}