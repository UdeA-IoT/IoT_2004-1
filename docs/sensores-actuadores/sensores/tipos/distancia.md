# Proximidad y contacto

En esta sección se trararán los sensores de contacto y proximidad:

![sensores_distancia](/img/sensores/sensores_distancia.png)

## Contacto

### Touch Screens

Los Touch Screens (pantallas tactiles) son principalmente empleados en celulares y tablets como dispositivo de entrada. Existen varios tipos de Touch Screens ([link](https://tru-vumonitors.com/touch-screen-basics/)) siendo los de tipo resistivo, los mas comunes ([link](https://www.dush.co.jp/english/museum/touchscreens/technologies/Resistive.asp)). Un touch Screen esta compuesto por dos laminas transparentes cubiertas por una superficie conductora y separadas por medio de unos unos puntos de aislamiento uniformemente espaciados. Como la superficie exterior es flexible, cuando esta es precionada esta hace contacto con la superficie interior lo cual puede ser empleado para determinar las coordenada (X,Y) en las que se realizo el toque. La siguiente figura ilustra este tipo de componente.

![touch_screen_resistivo](/img/sensores/tactiles/touch_screen_resistivo.jpg)

La siguiente figura muestre un Touch Screen de 4 wires:

![touch_creen_4wires](/img/sensores/tactiles/touch_creen_4wires.png)

Para determinar la posición X de un toque, A se fija a 0 V y B se pone a 5 V lo cual, establece una diferencia de potencial a lo largo lamina superior. Asi mismo, en el toque, el voltaje medido en C, o para el caso D, será proporcional a la posición X cuyas coordenadas se pueden obtener mediante un conversor analogo a digital. 

Tal y como se muestra en la siguiente figura, la capa conductora actúa como un potenciómetro con C como control deslizante. Si el dispositivo que mide el voltaje en C tiene una impedancia de entrada muy alta, entonces se puede ignorar la resistencia de la pista desde la superficie hasta el terminal C. Como la mayoría de los microcontroladores tiene un conversor analógo a digital con una alta resistencia de entrada (normalmente varios MΩ); entonces, el voltaje en C estará entre 0 y 5 V en proporción directa a la distancia de A del toque. La siguiente figura muestra esto:

![posicion_x](/img/sensores/tactiles/posicion_x.png)

:::tip
En la pagina **Resistive Touch screen** ([link](https://javalab.org/en/resistive_touch_screen_en/)) se muestra una animación del proceso resultante.
:::

Para obtener la posición Y, lo que se se hace es establecer el voltaje de C a 0 V, el de D a 5 V y se mide el voltaje en A o B. Todo este procesamiento es llevado a cabo mediante un chip controlador de propósito especial o un microcontrolador. La siguiente figura (tomada de **4-Wire Resistive Touch Screen Interfacing with ESP32** ([link](https://www.electronicwings.com/esp32/4-wire-resistive-touch-screen-interfacing-with-esp32))) resume el proceso de obtención de coordenadas:

![get_posiciones](/img/sensores/tactiles/get_posiciones.png)

La siguiente figura muestra tomada de la pagina **4-Wire Resistive Touch Screen Interfacing with ESP32** ([link](https://www.electronicwings.com/esp32/4-wire-resistive-touch-screen-interfacing-with-esp32)), un caso de uso en el que se conecta un Touch Screen a un ESP32:

![conexion](/img/sensores/tactiles/conexion.png)

### Sensor capacitivo

En construcción...

## Proximidad

### Sensor de ultrasonido

En construcción...

### Sensor infrarrojo

En construcción...