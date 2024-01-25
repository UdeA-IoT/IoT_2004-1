---
sidebar_label: 'Ejemplo 1'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Image from '@theme/IdealImage';

# Ejemplo 1

## Enunciado

Hacer una aplicación que cambie el estado de un led cada vez que se presiona un boton.

## Codigo polling

```
#define SERIAL_SPEED 9600

const int buttonPin = 12;
const int ledPin = 25;  

int buttonState, prev_buttonState;
int ledState;

unsigned long last_DebounceTime = 0;
unsigned long debounce_delay = 10;

void setup() {
  // Configuracion de puertos
  pinMode(ledPin, OUTPUT);
  Serial.begin(SERIAL_SPEED);
  // Inicializacion de variables
  buttonState = 0;
  ledState = LOW;
  digitalWrite(ledPin, ledState);
  prev_buttonState = buttonState;
  // Iniciacion del puerto serial  
  Serial.println("Inicio...");
}

void loop() {
  buttonState = digitalRead(buttonPin);
  delay(debounce_delay);
  if (buttonState != prev_buttonState) {
    // Transición (positiva o negativa)
    // Serial.println("[T]");
    if (buttonState == HIGH) {
      // Transición positiva
      Serial.print("[T+]-> Led:");
      Serial.println(ledState);
      ledState = !ledState;
      digitalWrite(ledPin, ledState);
    }
  }
  prev_buttonState = buttonState;
}
```

> **Simulación online**
> En el siguiente [link](https://wokwi.com/projects/387861640702724097) puede simular el código para comprender su funcionamiento.

**Nota**: hacer la solución alternativa usando la función ```millis()``` que es mas eficiente.

## Codigo interrupciones con problemas de rebote

1. Ver si el boton no tiene rebote
2. Ver que falla cuando el boton presenta rebote

```cpp
#define SERIAL_SPEED 9600

const int buttonPin = 12;
const int ledPin = 25;  

int ledState;
volatile bool led_change;

void IRAM_ATTR button_ISR() {
  led_change = true;
}

void setup() {
  // Configuracion de puertos
  pinMode(ledPin, OUTPUT);
  Serial.begin(SERIAL_SPEED);
  // Inicializacion de variables
  led_change = false;
  ledState = LOW;
  digitalWrite(ledPin, ledState);
  attachInterrupt(digitalPinToInterrupt(buttonPin), button_ISR, RISING);
  // Iniciacion del puerto serial  
  Serial.println("Inicio...");
}

void loop() {
  if (led_change == true) {
    // Transición positiva
    Serial.print("[T+]-> Led:");
    Serial.println(ledState);
    ledState = !ledState;
    digitalWrite(ledPin, ledState);
    led_change = false;
  }
}
```

> **Simulación online**
> En el siguiente [link](https://wokwi.com/projects/387862205667175425) puede simular el código para comprender su funcionamiento.

## Codigo interrupciones con el problema solucionado

No es el mejor código, pero funciona.

```cpp
#define SERIAL_SPEED 9600

const int buttonPin = 12;
const int ledPin = 25;  

int ledState;

volatile bool led_change;

unsigned long last_DebounceTime = 0;
unsigned long debounce_delay = 70; // Probar con varios valores 
                                   // hasta que funcione (10, 20,...)


void IRAM_ATTR button_ISR() {
  if(millis() - last_DebounceTime > debounce_delay){ 
    // Software debouncing buton
    // ets_printf("ISR triggered\n");
    led_change = true;
 }
 last_DebounceTime = millis();
}

void setup() {
  // Configuracion de puertos
  pinMode(ledPin, OUTPUT);
  Serial.begin(SERIAL_SPEED);
  // Inicializacion de variables
  led_change = false;
  ledState = LOW;
  digitalWrite(ledPin, ledState);
  attachInterrupt(digitalPinToInterrupt(buttonPin), button_ISR, RISING);
  // Iniciacion del puerto serial  
  Serial.println("Inicio...");
}

void loop() {
  if (led_change == true) {
    // Transición positiva
    Serial.print("[T+]-> Led:");
    Serial.println(ledState);
    ledState = !ledState;
    digitalWrite(ledPin, ledState);
    led_change = false;
  }
}
```

> **Simulación online**
> En el siguiente [link](https://wokwi.com/projects/387864147969036289) puede simular el código para comprender su funcionamiento.


## Referencias

* https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html
* https://www.upesy.com/blogs/tutorials/what-are-interrupts-in-esp32-with-examples-for-arduino-code
* https://deepbluembedded.com/esp32-external-interrupts-pins-arduino-examples/#google_vignette
* https://programarfacil.com/blog/arduino-blog/interrupciones-con-arduino-ejemplo-practico/
* https://www.luisllamas.es/que-son-y-como-usar-interrupciones-en-arduino/
* https://docs.espressif.com/projects/esp-idf/en/v4.3/esp32/api-reference/peripherals/timer.html
* https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf
* https://www.espressif.com/sites/default/files/documentation/esp32_technical_reference_manual_en.pdf#iomuxgpio
* https://docs.ai-thinker.com/_media/esp32/docs/nodemcu-32s_product_specification.pdf
* https://docs.espressif.com/projects/esp-idf/en/latest/esp32/hw-reference/index.html
* https://www.upesy.com/blogs/tutorials/what-are-interrupts-in-esp32-with-examples-for-arduino-code
* https://esphome.io/devices/nodemcu_esp32.html
* https://randomnerdtutorials.com/esp32-pir-motion-sensor-interrupts-timers/
* https://randomnerdtutorials.com/micropython-interrupts-esp32-esp8266/
* https://learn.sparkfun.com/tutorials/processor-interrupts-with-arduino/all
* https://github.com/sparkfun/processor_interrupt_examples
* https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/overview
* https://lastminuteengineers.com/handling-esp32-gpio-interrupts-tutorial/
* https://deepbluembedded.com/esp32-external-interrupts-pins-arduino-examples/
* https://www.sparkfun.com/news/2613
* https://www.sparkfun.com/news/2608
* https://www.sparkfun.com/news/2577
* https://descubrearduino.com/interrupciones-esp32-gpio/
* https://www.electrogeekshop.com/esp32-arduino-interrupciones-timer-2/
* https://www.arduino.cc/reference/en/language/functions/interrupts/interrupts/
* https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/
* https://controlautomaticoeducacion.com/arduino/interrupciones-arduino/
* https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html
* http://stefanfrings.de/multithreading_arduino/
* https://hackaday.com/2021/03/17/running-57-threads-at-once-on-the-arduino-uno/
* https://www.arduino.cc/reference/en/libraries/arduinothread/
* https://www.digikey.com/en/maker/blogs/2022/how-to-write-multi-threaded-arduino-programs
* https://github.com/ivanseidel/ArduinoThread
* https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/overview
* https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-4/
* https://wiki.seeedstudio.com/reServer-Getting-Started/
* https://www.seeedstudio.com/blog/2021/05/11/multitasking-with-arduino-millis-rtos-more/
* https://www.hackster.io/485734/azure-rtos-threadx-for-arduino-101-threads-963a8d
* https://wiki.seeedstudio.com/reTerminal-build-UI-using-LVGL/
* https://www.rt-thread.io/
* https://www.digikey.com/en/maker/tutorials/2022/how-to-use-arduino-interrupts-to-detect-user-inputs

