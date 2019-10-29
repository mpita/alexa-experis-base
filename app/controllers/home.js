const express = require('express');
const router = express.Router();

module.exports = (app) => {
  app.use('/', router);
};

router.get('/data/:number', (req, res, next) => {
  let number = parseInt(req.params.number)
  let resultado = new Array();

  switch (number) {
    case 0:
      resultado.push("El cero no es par ni impar. ");
      resultado.push("El cero no puede ser considerado un número positivo ni negativo, "+
                     "ya que ambos representan a dígitos mayores o menores que el cero, "+
                     "quedando este en una especie de limbo. ");
      resultado.push("El cero si es un número racional, es decir puede"+
                     "resultar de la división entre dos coeficientes integrales. ");
      break;
    case 1:
      resultado.push("El uno fue el primer número de la historia. ");
      resultado.push("Al multiplicar el uno por cualquier otro número, no varía. ");
      resultado.push("El uno es tanto el primer término como el segundo de la sucesión de Fibonacci. ");
      break;
    case 2:
      resultado.push("El dos es el único número primo par. ");
      resultado.push("El dos es el valor que tiene la constante n del teorema de Fermat. ");
      resultado.push("El dos es un número simétrico en el reino animal. Dos brazos, dos ojos, dos piernas. ");
      break;
    case 3:
        resultado.push("El tres es el primer número primo impar. ");
        resultado.push("Un número natural es divisible entre tres si la suma de sus "+
                       "dígitos es divisible entre tres. ");
        resultado.push("El tres está vinculado a las dimensiones, altura, anchura y profundidad. ");
        break;
    case 4:
        resultado.push("El cuatro es el primer número compuesto, siendo sus divisores "+
                       "propios el uno, el dos y sí mismo. ");
        resultado.push("En la cultura china, se considera al cuatro como un número de "+
                       "mala suerte debido a su similitud fonética con la palabra que significa muerte. ");
        resultado.push("Como la suma de sus divisores es tres y es menor que cuatro, "+
                       "se trata de un número defectivo. ");
        break;
    case 5:
        resultado.push("El cinco es el número de anillos entrelazados en el símbolo de "+
                       "los Juegos Olímpicos, que representa el número de continentes habitados "+
                       "representados por los Olímpicos. ");
        resultado.push("El cinco es uno de los números de la suerte para el signo zodiacal "+
                       "Géminis, Cáncer y Piscis. ");
        resultado.push("El cinco es el Único número cuyo nombre tiene la misma cantidad de "+
                       "letras que el valor que representa. ");
        break;
    case 6:
      resultado.push("El seis es igual a la suma de sus divisores, característica que "+
                     "comparte con el número veintiocho, lo cual lo convierte en el primer número perfecto. ");
      resultado.push("El seis es el número atómico del carbono. ");
      resultado.push("seis son las cuerdas de la guitarra española. ");
      break;
    case 7:
      resultado.push("en numerología el siete equivale a la perfección. ");
      resultado.push("Siete es el número más pequeño de lados de un polígono regular "+
                     "que no se puede construir mediante regla y compás. ");
      resultado.push("Siete es el número de días que tiene una semana. ");
      break;
    case 8:
      resultado.push("El Oxígeno es el elemento químico de número atómico ocho, "+
                     "representado por el símbolo O. ");
      resultado.push("Ocho es el cubo más grande en la secuencia de Fibonacci. ");
      resultado.push("Ocho es el número de bits en un byte. ");
      break;
    case 9:
      resultado.push("El nueve es un número compuesto, que tiene los siguientes factores "+
                     "propios: uno y tres. Y como la suma de sus factores es cuatro y "+
                     "cuatro es menor que nueve, se trata de un número defectivo. ");
      resultado.push("Si se suma o se multiplica a su propio múltiplo, el resultado es si mismo. ");
      resultado.push("Nueve es el Número de sinfonías compuestas por Beethoven. ");
      break;
    default:
      break;
  }

  res.status(200).json(resultado);
});
