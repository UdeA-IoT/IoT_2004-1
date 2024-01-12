---
sidebar_label: 'Sesión 3'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@theme/IdealImage';

# Capa de percepción - Sesión 3

:::note[**Objetivos**]
* Aprender a usar la tarjeta de desarrollo ESP32.
* Comprender la API básica de entrada y salida del lenguaje Arduino.
:::

## Referencias principales

* La mayor parte de esta clase tomará como base la lección 2 A deeper dive into IoT (lección 2) del curso IoT for Beginners ([link](https://github.com/microsoft/IoT-For-Beginners)).
* También mucha de la información se tomó de la pagina: https://randomnerdtutorials.com/ 
* ESP32 Arduino Core’s documentation ([link](https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/))
* Páginas de referencia fundamentales (para ver lo que se puede hacer): 
  * https://randomnerdtutorials.com/
  * https://www.adafruit.com/
  * https://www.sparkfun.com/
  * https://www.seeedstudio.com/
  * https://projecthub.arduino.cc/
  * https://www.hackster.io/ubidots/projects 

## Arduino Framework

Cuando hablamos de arduino no solo nos referimos a un microcontrolador especifico, en realidad estamos hablando del **framework para microcontroladores** mas popular en la actualidad.

**Arduino**  es una plataforma opensource de electronica que combina software y hardware. Al ser esta plataforma open hardware, es posible usar el modelo de programación de Arduino para escribir codigo para cualquier otra plataforma compatible con Arduino (placas genericas o de otroa fabricantes).

El modelo de programación de arduino esta basado en el **API de arduino** el cual espone un conjunto de funciónes y estructuras (constantes, variables, tipos de datos, objetos, etc) que permiten la interacción del microcontrolador con hardware externo (sensores y actuadores). La información del API se encuentra en la pagina **Language Reference** ([link](https://www.arduino.cc/reference/en/)).

<Image img={require('/img/sesiones/percepcion/3/arduino-reference.png')} />

### Funciones basicas del API de Arduino

Las funciones basicas del API de Arduino se encuentran online en **Language Reference** ([link](https://www.arduino.cc/reference/en/))

### Entrada y Salida digital

Las funciones de entrada y salida permiten básicamente dos cosas: 
1. Configurar los puertos (**pines**) como entradas o salidas digitales.
2. Leer o escribir dichos puertos de acuerdo a la forma como fueron configurados.

|Función|Información de la función|
|--|--|
|```digitalWrite()```|**Descripción** ([link](https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/)): <br />Escribe un valor HIGH o LOW  en un puerto determinado. <br /><br />**Sintaxis**:  <br />```digitalWrite(pin, value)```<br /><br />**Parámetros**: <li> **pin**: Número del puerto del Arduino. </li> <li> **value**: Valor que se escribe en el puerto (```HIGH``` o ```LOW```).</li>|
|```digitalRead()```|**Descripción** ([link](https://www.arduino.cc/reference/en/language/functions/digital-io/digitalread/)):<br />Lee el valor de un puerto determinado.<br /><br />**Sintaxis**: <br />```digitalRead(pin)```<br /><br />**Parámetros**: <li>**pin**: Pin del Arduino a ser leído. </li> <li>**Valores retornados**: El valor del puerto al ser leído (```HIGH``` o ```LOW```).</li>|
|```pinMode()```|**Descripción** ([link](https://www.arduino.cc/reference/en/language/functions/digital-io/pinmode/)):<br />Permite configurar un puerto como entrada o salida. <br /><br />**Sintaxis**: <br />```pinMode(pin, mode)```<br /><br />**Parámetros**: <li>**pin**: Pin del Arduino a ser configurado </li> <li>**mode**: Modo: ```INPUT```, ```OUTPUT``` o ```INPUT_PULLUP```.</li>|

### Funciones de entrada y salida análoga

Permiten interactuar (leer o escribir) con puertos que funcionan como entradas o salidas análogas. La siguiente tabla muestra resume algunas de estas:

|Función|Información de la función|
|---|---|
|```analogRead()```|**Descripción** ([link](https://www.arduino.cc/reference/en/language/functions/analog-io/analogread/)):<br />Lee el valor de un puerto análogo determinado devolviendo un valor entero asociado al voltaje que tiene este puerto.<br /><br />**Sintaxis**:<br />```analogRead(pin)```<br /><br />**Parámetros**:<br /><li>**pin**: Número del puerto análogo (```A0``` – ```A5``` para la mayoría de las placas) del Arduino</li><br /><br />**Valores retornados**:<br />Valor análogo  leído en el pin. El rango dependerá de la resolución del conversor análogo digital asociado a el pin (0 – 1024 cuando la resolución es de 10 bits o 0 – 4096 cuando la resolución es de 12 bits).|
|```analogWrite()```|**Descripción** ([link](https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/)):<br />Escribe un valor análogo (modificando el valor del ciclo de dureza de una onda PWM) a un puerto.<br /><br />**Sintaxis**:<br />```analogWrite(pin, value)```<br /><br />**Parámetros**: <li>**pin**: Pin del Arduino (denotado en la placa con el símbolo ~) en el que se escribe.</li><li>**value**: Ciclo de dureza entre cero (siempre apagado) y 255 (siempre on).</li>|

### Bases de tiempo

Son funciones empleadas para la crear retardos y generar marcas de tiempos en los programas, existen varias funciones para este fin como ```delay()```, ```delayMicroseconds()```, ```micros()``` y ```millis()```. La siguiente tabla describe la función ```delay()``` que fue la empleada en los ejemplos anteriores:

|Función|Información de la función|
|---|---|
|```delay()```|**Descripción** ([link](https://www.arduino.cc/reference/en/language/functions/time/delay/)): <br />Detiene el programa por una cantidad de tiempo (en milisegundos) especificada como parámetro.<br /><br />**Sintaxis**:<br />```delay(ms)```<br /><br />**Parámetros**:<li>**ms**: Número de milisegundos a detener el programa.</li>|

### Funciones de interacción con el puerto serial

Son funciones empleadas para la configuración e interacción con el puerto serial ([link](https://www.arduino.cc/reference/en/language/functions/communication/serial/)). La siguiente figura muestra algunas funciones de uso común

|Función|Descripción|
|---|---|
|```Serial.begin()```|Configura la velocidad de transmisión serial (bits por segundo = baud).<br /><br />**Sintaxis**:<br />```Serial.begin(speed)``` <br /><br />**Parámetros**: <li>**```speed```**: Velocidad de transmisión</li>|
|```Serial.print()```|Imprime los datos del puerto serial en formato ASCII.<br /><br />**Sintaxis**:<br />```Serial.print(val)```<br />```Serial.print(val, format)```<br /><br />**Parámetros**: <li>**```val```**: Valor a imprimir. El valor puede ser de cualquier tipo.</li><li>**```format```**: Formato de representación del ASCII (```DEC```, ```HEX```, ```OCT``` o ```BIN```).</li>|
|```Serial.available()```|Obtiene el número de bytes (caracteres) disponibles por leer en el puerto serial. Estos son datos que ya han llegado y han sido almacenados en el buffer de recepción serial (el cual almacena 64 bytes).<br /><br />**Sintaxis**:<br />```Serial.available()```<br /><br />**Valores retornados**: Número de bytes disponibles para leer.|
|```Serial.read()```|Lee un dato que entra a través del serial.<br /><br />**Sintaxis**:<br />```Serial.read()```<br /><br />**Valores retornados**: Primer byte de los datos seriales disponibles (o ```-1``` si no hay datos disponibles). El tipo de dato leído es ```int```.|

### Pasos para programar un dispositivo usando el Framework de Arduino

:::tip
**Arduino Cheat Sheet**: Existen referencias breves que muestran de manera resumida el API de arduino. La referecia **Arduino Cheat Sheet** ([link](/cheat_sheet/Arduino_Cheat_Sheet.pdf)) es uno de estos casos ([URL principal](https://github.com/liffiton/Arduino-Cheat-Sheet))
:::

Para usar el API de arduino es necesario tener en cuenta los siguientes pasos:
1. Si la placa es generica, verificar esta es Arduino compatible ([link wikipedia](https://en.wikipedia.org/wiki/List_of_Arduino_boards_and_compatible_systems))
2. Identificar claramente, las caracteristicas, los pines y la funcionalidad de la placa a usar. Para esto es necesario revisar el manual de usuario de la placa, A continuación se muestran algunos ejemplos: 
   * Arduino UNO ([link](https://docs.arduino.cc/hardware/uno-rev3)) 
   * NodeMCU-32s ([link](https://docs.ai-thinker.com/_media/nodemcu32-s_specification_v1.3.pdf))
3. Proceder a programar el codigo del firmware siguiendo el modelo de programación de Arduino.

<details>
  <summary>**Ejemplos de implementación**</summary>
  <div>
    A continuación se muestra mediante varios ejemplos como se aplican los pasos mencionados para tres de las plataformas basadas en microcontroladores disponibles en el laboratorio:
    <details>
      <summary>
        **Arduino UNO**
      </summary>
      <div>
        **Material requerido**
        1. Arduino UNO.
        2. Cables USB.
        3. Grove - Starter Kit v3 ([link](https://wiki.seeedstudio.com/Grove_Starter_Kit_v3/))
        4. Base Shield V2 ([link](https://wiki.seeedstudio.com/Base_Shield_V2/))
      
      **Pinout**

      Para empezar a trabajar con cualquier plataforma de desarrollo es necesario conocer como mínimo el mapa de pines, el cual se muestra a continuación:
      
      <Image img={require('/img/sesiones/percepcion/2/arduino_uno-pines.png')} />

      Es importante notar, que los pines son multifuncionales, es decir, pueden ser empleados para diferentes funciones. La determinación de la función que puede llevar un pin se hace por programación.
      
      Para mas información sobre esta tarjeta, le recomendamos revisar el link **Overview of the Arduino UNO Components** [[link]](https://docs.arduino.cc/tutorials/uno-rev3/intro-to-board).

      **Funciones**

      El documento Arduino Cheat Sheet [[link]](/cheat_sheet/Arduino_Cheat_Sheet.pdf) contine un resumen de algunas de las principales funciones que se usan para programar plataformas Arduino. Para mas información sobre estas puede consultar la sección Language Reference.

      **Librerias**

      Ademas de las funciones, propias del API de Arduino, es posible hacer uso de librerias para agregar funcionalidad extra (tal y como sucede con el software). Una de las mayores fortalezas de la plataforma Arduino se encuentra en que esta posee una gran numero de librerias. En la sección **Libraries** [[link](https://www.arduino.cc/reference/en/libraries/)] se encuentra toda la información relacionada con diferentes librerias existentes, hardware soportado y, adicionalmente, se muestra como realizar una libreria. Hay tres cosas fundamentales para trabajar con librerias:
      1. Instalación de librerias (**Installing Libraries** [[link]](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries))
      2. Escritura de librerias (**Writing a Library for Arduino** [[link]](https://docs.arduino.cc/learn/contributions/arduino-creating-library-guide))
      3. Guia de estilo (**Arduino Style Guide for Creating Libraries** [[link]](https://docs.arduino.cc/learn/contributions/arduino-library-style-guide))
   
      **Ejemplos basicos**

      Cuando se tienen unas nociones basicas de programación, la mejor manera para aprender consiste en leer, ejecutar y comprender código a traves del desarrollo de ejemplos sencillos. Luego, y luego, aplicando lo ya aprendido realizar la adaptación del código al caso particular. Para hacer esto, nuestra recomendación es que tenga a la mano los siguientes materiales:

      |Item|Material|Link|
      |---|---|---|
      |1 |Language Reference|https://www.arduino.cc/reference/en/|
      |2|Built-in Examples|https://docs.arduino.cc/built-in-examples/|
      |3|Libraries|https://www.arduino.cc/reference/en/libraries/|
      |4|Tutorials|https://docs.arduino.cc/tutorials/|
      
      Como punto de partida tenga a la mano, minimamente los enlaces asociados a los items 1 y 2 de la tabla anterior y la **Arduino Cheat Sheet** [[link]](/cheat_sheet/Arduino_Cheat_Sheet.pdf). La idea es empezar a mirar unos cuantos ejemplos los cuales vienen implementados en IDE de arduino tal y como se muestra en la siguiente figura:

      <Image img={require('/img/sesiones/percepcion/3/ejemplos_arduino-uno.png')} />

      Veamos algunos ejemplos.

      **Ejemplo 1**

      En este ejemplo se pone a parpadear un led a un periodo de 2 segundos. La descripción completa del ejemplo se encuentra en Blink. El codigo se muestra a continuación:

      ```cpp
      void setup() {
        pinMode(LED_BUILTIN, OUTPUT);
      }
        
      // the loop function runs over and over again forever
      void loop() {
        digitalWrite(LED_BUILTIN, HIGH);  
        delay(1000);                       
        digitalWrite(LED_BUILTIN, LOW);    
        delay(1000);                       
      }
      ```

      Tambien se muestra el esquematico asociado:

      ![esquematico](https://camo.githubusercontent.com/a7f39f62dfdfc906aa477e6af7d7b8ee11e0023aae9e05cab9c2eb8ca34690a8/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f63386462656666373836653532363831633364306539656539353235653134302f32393131342f736368656d617469632e706e67)

      Y el diagrama de conexión:

      ![circuito](https://camo.githubusercontent.com/0902622cb0474c0f6f32cf8dfcff68a96b374091e9f95a6d8bfa70ae7120a3ef/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f35326332333864626130396332653430623639653036313266663032656630662f61366433362f636972637569742e706e67)

      **Ejemplo 2**

      Este ejemplo se encuentra en **How to Wire and Program a Button** [[link]](https://docs.arduino.cc/built-in-examples/digital/Button). En éste se prende un led cuando se presiona un switch.

      El codigo asociado se muestra a continuación:

      ```cpp
      const int buttonPin = 2;     
      const int ledPin =  13;      
      
      int buttonState = 0;         
      
      void setup() {
        pinMode(ledPin, OUTPUT);
        pinMode(buttonPin, INPUT);
      }
      
      void loop() {
        buttonState = digitalRead(buttonPin);
        if (buttonState == HIGH) {
          digitalWrite(ledPin, HIGH);
        } 
        else {
          digitalWrite(ledPin, LOW);
        }
      }
      ```

      El esquematico asociado se muestra a continuación:

      ![sch](https://camo.githubusercontent.com/f190462dad109bfb99632d22c074bbb5a204333767514ae96fa17a7369faaf5b/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f66623834343962343833346466626266336330333232336338626333653562352f61366433362f736368656d617469632e706e67)

      Finalmente, el diagrama de conexión es el siguiente:

      ![bb](https://camo.githubusercontent.com/c43feb60295b946c18e3e48e847d4ebf94c5911a4731de42342a8bba6f0078af/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f37333730326565313231383630666130346337663664623562633737313833622f61366433362f636972637569742e706e67)

      **Ejemplo 3**

      Este ejemplo es tomado de **Fading** [[link]](https://docs.arduino.cc/built-in-examples/analog/Fading). En este ejemplo se modifica el brillo de un led de manera automatica.

      ```cpp
      int ledPin = 9;    
      
      void setup() {
        // nothing happens in setup
      }
      
      void loop() {
        for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {
          analogWrite(ledPin, fadeValue);
          delay(30);
        }
        
        for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {
          analogWrite(ledPin, fadeValue);
          delay(30);
        }
      }
      ```

      El esquematico del ejemplo se muestra a continuación:

      ![sch](https://camo.githubusercontent.com/20c02f5abdbe9be94b6744cbf507163a2fc3e8d699c3d006b58fd6b839e8ee56/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f64653432623364333938636634303736386331333530383933323432386664622f61366433362f736368656d617469632e706e67)

      Finalmente, las conexiones son las siguientes:

      ![bb](https://camo.githubusercontent.com/b1cf5dad6cb08bb993cea2b3f4e63ec2bc749d2016441dd08332e84c7643d443/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f30373962316261623337353836303361353663356439386531663539613838652f61366433362f636972637569742e706e67)

      **Ejemplo 4**

      Este ejemplo es tomado de **Analog Read Serial** [[link]](https://docs.arduino.cc/built-in-examples/basics/AnalogReadSerial). Aqui, se lee un potenciometro y se imprime su estado a traves del monitor serial.

      ```cpp
      void setup() {
        Serial.begin(9600);
      }
      
      void loop() {
        int sensorValue = analogRead(A0);
        Serial.println(sensorValue);
        delay(1);        
      }
      ```

      El esquematico se muestra a continuación:

      ![sch](https://camo.githubusercontent.com/1cbb6d7effc07dd7dc934045e267b0efb266228f55f8a2f7a09afbb7e02f41c5/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f33626238343265633038623861383366383863316137633332383030666534312f61366433362f736368656d617469632e706e67)

      Finalmente, el diagrama de conexión es el siguiente:

      ![bb](https://camo.githubusercontent.com/5c2385e4b61333826b649fc4b8d703e79b10ba443f1b6353e49bd0973cc75133/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f31303834326230343939613565346533373061656463643232326235326532632f35613139302f636972637569742e706e67)

      **Ejemplo 5**

      Este ejemplo es tomado de **Analog In, Out Serial** [[link]](https://docs.arduino.cc/built-in-examples/analog/AnalogInOutSerial). Aqui, se usa un potenciometro para controlar el brillo de un led; adicionalmente, se imprime su estado a traves del monitor serial.

      ```cpp
      const int analogInPin = A0;  
      const int analogOutPin = 9; 
      
      int sensorValue = 0;        
      int outputValue = 0;        
      
      void setup() {
        Serial.begin(9600);
      }
      
      void loop() {
        sensorValue = analogRead(analogInPin);
        outputValue = map(sensorValue, 0, 1023, 0, 255);
        analogWrite(analogOutPin, outputValue);
        Serial.print("sensor = ");
        Serial.print(sensorValue);
        Serial.print("\t output = ");
        Serial.println(outputValue);
        delay(2);
      }
      ```

      El esquematico de este ejemplo es el siguiente:

      ![sch](https://camo.githubusercontent.com/2d63517e456c044ff2c3c47a9a84f490f105875a857f3d26bf9ab111caec3925/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f33396135646136653036633531333035666130626239303266336361623165332f61366433362f736368656d617469632e706e67)

      Por otro lado, las conexiones entre los componentes se muestran a continuación:

      ![bb](https://camo.githubusercontent.com/68816c69fd9d58266b610905348e2dce49e39e4a8723da0cf2a558a008650081/68747470733a2f2f646f63732e61726475696e6f2e63632f7374617469632f37646266623462346330393062613162633532633261373739383232623866392f61366433362f636972637569742e706e67)

      **Implementación de los ejemplos**      

      Para implementar cada uno de los ejemplos se pueden llevar a cabo los siguientes pasosEl proceso de trabajo a lo largo de esta sesión de trabajo será (siendo los pasos 2 y 3 son intercambiables):
      1. Escribir el programa en el IDE
      2. Descargar codigo.
      3. Montar circuito.
      4. Probar.
      </div>
    </details>
    <details>
      <summary>
        **Kit de sensores**
      </summary>
      <div>
        s
      </div>
    </details>
  </div>
</details>