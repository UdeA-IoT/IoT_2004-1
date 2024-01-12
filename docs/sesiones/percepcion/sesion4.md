---
sidebar_label: 'Sesión 4'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@theme/IdealImage';

# Capa de percepción - Sesión 4

:::note[**Objetivos**]
* Aprender el API de programación de Arduino para comunicar serialmente el ESP32 hardware externo.
* Aprender a realizar debug de software para microcontroladores mediante comunicacion serial.
* Implementar mediante comunicación serial un protocolo para comunicar aplicaciones de escritorio con firmware de microcontroladores. 
:::

## Referencias principales

* La mayor parte de esta clase tomará como base la lección 2 A deeper dive into IoT (lección 2) del curso IoT for Beginners ([link](https://github.com/microsoft/IoT-For-Beginners)).
* También mucha de la información se tomó de la pagina: https://randomnerdtutorials.com/ 
* ESP32 Arduino Core’s documentation ([link](https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/))
* Tutorial **Serial Communication** de Sparkfun ([link](https://learn.sparkfun.com/tutorials/serial-communication/serial-intro)).
* Tutorial **Circuit Playground Express Serial Communications** de Adafruit ([link](https://learn.adafruit.com/circuit-playground-express-serial-communications))
* Tutorial **Arduino Lesson 5. The Serial Monitor** de Adafruit ([link](https://learn.adafruit.com/adafruit-arduino-lesson-5-the-serial-monitor/overview))
* Páginas de referencia fundamentales (para ver lo que se puede hacer): 
  * https://randomnerdtutorials.com/
  * https://www.adafruit.com/
  * https://www.sparkfun.com/
  * https://www.seeedstudio.com/
  * https://projecthub.arduino.cc/
  * https://www.hackster.io/ubidots/projects 

## Comunicación serial

Mediante la comunicación es posible que varios dispositivos puedan transferir y recibir información entre ellos tal y como se muestra en la siguiente figura ([link](https://docs.espressif.com/projects/esp-at/en/latest/esp32/Get_Started/Hardware_connection.html)). 

En construcción...