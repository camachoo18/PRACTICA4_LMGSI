function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log('Hora copiada al portapapeles: ' + texto);
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
      });
  }
  
  // Obtengo el elemento con el id "reloj"
  const reloj = document.querySelector("#reloj")
  
  // Agrego un EVENTO de clic al reloj
  reloj.addEventListener('click', clicEnReloj);
  
  
  // Creo función para manejar el clic en el reloj
  function clicEnReloj() {
    // Copia la hora actual al portapapeles
    copiarAlPortapapeles(updateHour());
  }
  
  
  
  
  function select(tag){
    const val = document.querySelector(tag)
    return val
  }
  function updateTag(tag, contenido){
    const mi_tag= select(tag)
    mi_tag.innerHTML= contenido
    
  }
  
  function updateHour(){
  // const fecha = new Date()
  // const horas = fecha.getHours()
  // const minutos = fecha.getMinutes()
  // const segundos = fecha.getSeconds()
  const now = new Date();
  
  const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
  const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
  const [hora, minuto, segundo] = horaEnFormato24Horas.split(":")
  updateTag("#horas", hora)
  updateTag("#minutos", minuto)
  updateTag("#segundos", segundo)
            
   copiarAlPortapapeles(horaEnFormato24Horas);
  
  }
  
  setInterval(updateHour,1000)
  