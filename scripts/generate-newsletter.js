const fs = require('fs');
const path = require('path');

// Obtener fecha actual en UTC
const now = new Date();

// Convertir a America/Caracas (UTC-4)
// O calcular el lunes actual
const utcMillis = now.getTime() + (now.getTimezoneOffset() * 60000);
const caracasOffset = -4; // Horas UTC-4
const caracasDate = new Date(utcMillis + (3600000 * caracasOffset));

// Función para obtener número de semana ISO 8601
function getISOWeekNumber(d) {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
}

const year = caracasDate.getFullYear();
const weekNum = getISOWeekNumber(caracasDate);
const weekPadded = String(weekNum).padStart(2, '0');
const yearStr = String(year);

// Nombres de meses en español
const meses = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

const day = String(caracasDate.getDate()).padStart(2, '0');
const monthName = meses[caracasDate.getMonth()];
const formattedDate = `${caracasDate.getFullYear()}-${String(caracasDate.getMonth() + 1).padStart(2, '0')}-${day}`;
const humanDate = `${day} de ${monthName}, ${year}`;

console.log(`Generando Newsletter para Semana ${weekNum} (${weekPadded}) - ${humanDate}`);

const newslettersDir = path.join(__dirname, '..', '_newsletters');
if (!fs.existsSync(newslettersDir)) {
  fs.mkdirSync(newslettersDir, { recursive: true });
}

// 1. Crear / actualizar el archivo en _newsletters/{week}.md
const filePath = path.join(newslettersDir, `${weekNum}.md`);
const frontMatter = `---
published: true
layout: newsletter
year: '${yearStr}'
week: '${weekNum}'
date: '${formattedDate}'
title: "Boletín Semanal - Semana ${weekNum} (${humanDate})"
banner: >-
  https://raw.githubusercontent.com/itnewslat/assets/master/img/728x90/Banner-Resumen.jpg
---
`;

fs.writeFileSync(filePath, frontMatter, 'utf8');
console.log(`Archivo creado con éxito: ${filePath}`);
