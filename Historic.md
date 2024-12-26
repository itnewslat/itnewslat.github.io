<!DOCTYPE html> 
<html lang="es"> 
  <head> <meta charset="UTF-8"> 
    <title>Calendario Anual 2025</title> 
    <style> 
      .calendar { 
        display: flex; 
        flex-wrap: wrap; 
        width: 100%; 
      } 
      .month { 
        border: 1px solid #ccc; 
        margin: 5px; 
        width: calc(100% / 3 - 10px); 
      } 
      .month h2 { text-align: center;
      } 
      .weeks { display: flex; 
        flex-wrap: 
          wrap;
      } 
      .week { 
        border: 1px solid #ddd; 
        margin: 2px; width: calc(100% / 4 - 4px); 
        padding: 5px; 
      } 
      .week h3 { font-size: 14px; 
      } 
      .week p { font-size: 12px; 
      } 
    </style> 
  </head> 
  <body> 
    <h1>Calendario Anual 2025</h1> 
    <div class="calendar"> 
      <!-- Genera los meses --> 
      <div class="month"> 
        <h2>Enero</h2> 
        <div class="weeks"> 
          <!-- Genera las semanas --> 
          <div class="week"> 
            <h3>Semana 1</h3> 
            <p>Aquí puedes añadir el histórico de noticias...</p> 
          </div> <div class="week"> 
          <h3>Semana 2</h3> 
          <p>Aquí puedes añadir el histórico de noticias...</p> </div> 
          <!-- Añadir más semanas según necesidad --> </div> </div> 
      <!-- Añadir más meses según necesidad --> </div> 
  </body>
