"use strict";(self.webpackChunkio_t_2024_1=self.webpackChunkio_t_2024_1||[]).push([[6783],{4308:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(5893),i=r(1151);r(3992),r(425),r(9372);const s={sidebar_label:"Interrupciones por timer"},o="Interrupciones por timer",a={id:"sesiones/percepcion/sesion9b_3",title:"Interrupciones por timer",description:"* En construcci\xf3n....",source:"@site/docs/sesiones/percepcion/sesion9b_3.md",sourceDirName:"sesiones/percepcion",slug:"/sesiones/percepcion/sesion9b_3",permalink:"/IoT_2024-1/docs/sesiones/percepcion/sesion9b_3",draft:!1,unlisted:!1,editUrl:"https://github.com/UdeA-IoT/IoT_2024-1/tree/main/packages/create-docusaurus/templates/shared/docs/sesiones/percepcion/sesion9b_3.md",tags:[],version:"current",frontMatter:{sidebar_label:"Interrupciones por timer"},sidebar:"sesionesSidebar",previous:{title:"Interrupciones externas",permalink:"/IoT_2024-1/docs/sesiones/percepcion/sesion9b_2"},next:{title:"Interrupciones por comunicaci\xf3n",permalink:"/IoT_2024-1/docs/sesiones/percepcion/sesion9b_4"}},l={},c=[{value:"Introducci\xf3n",id:"introducci\xf3n",level:2},{value:"Apuntes",id:"apuntes",level:2},{value:"Apuntes 1",id:"apuntes-1",level:3},{value:"Apuntes 2",id:"apuntes-2",level:3},{value:"Apuntes 3",id:"apuntes-3",level:3},{value:"Apuntes 4",id:"apuntes-4",level:3},{value:"Apuntes 5 (Sparkfun)",id:"apuntes-5-sparkfun",level:3},{value:"Apuntes 6 (Random Nerds tutorials)",id:"apuntes-6-random-nerds-tutorials",level:3},{value:"Apuntes 7",id:"apuntes-7",level:3},{value:"Apuntes 7",id:"apuntes-7-1",level:3},{value:"Referencias",id:"referencias",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"interrupciones-por-timer",children:"Interrupciones por timer"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:"Objetivos"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"En construcci\xf3n...."}),"\n"]})]}),"\n",(0,t.jsx)(n.h2,{id:"introducci\xf3n",children:"Introducci\xf3n"}),"\n",(0,t.jsx)(n.h2,{id:"apuntes",children:"Apuntes"}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-1",children:"Apuntes 1"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"With interrupts you don\u2019t need to constantly check the current value of a pin. With interrupts, when a change is detected, an event is triggered (a function is called)."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To set an interrupt in the Arduino IDE, you use the attachInterrupt() function, that accepts as arguments: the GPIO pin, the name of the function to be executed, and mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"attachInterrupt(digitalPinToInterrupt(GPIO), funcion, mode);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GPIO Interrupt: The first argument is a GPIO number. Normally, you should use digitalPinToInterrupt(GPIO) to set the actual GPIO as an interrupt pin."}),"\n",(0,t.jsx)(n.li,{children:"Function to be triggered: function is the name of the function that will be called every time the interrupt is triggered."}),"\n",(0,t.jsxs)(n.li,{children:["Mode:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["There are 5 different modes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"LOW: to trigger the interrupt whenever the pin is LOW;"}),"\n",(0,t.jsx)(n.li,{children:"HIGH: to trigger the interrupt whenever the pin is HIGH;"}),"\n",(0,t.jsx)(n.li,{children:"CHANGE: to trigger the interrupt whenever the pin changes value - for example from HIGH to LOW or LOW to HIGH;"}),"\n",(0,t.jsx)(n.li,{children:"FALLING: for when the pin goes from HIGH to LOW."}),"\n",(0,t.jsx)(n.li,{children:"RISING: to trigger when the pin goes from LOW to HIGH;"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-2",children:"Apuntes 2"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Hardware interrupts allow your programs to respond to events more efficiently and dynamically."}),"\n",(0,t.jsx)(n.li,{children:"Hardware interrupts enable the AVR microcontroller to react to a change of state at a digital input pin at any time. In a way, they allow your AVR to multitask: when a button is pressed or when a signal is received at a digital input, the AVR will stop what it is doing and run some other code, called an interrupt service routine (ISR). After the ISR code runs, the AVR picks up execution where it left off before the interrupt."}),"\n",(0,t.jsxs)(n.li,{children:["This chapter covers two kinds of hardware interrupts,","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"external interrupts"}),"\n",(0,t.jsx)(n.li,{children:"pin-change interrupts"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-3",children:"Apuntes 3"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": ",(0,t.jsx)(n.a,{href:"https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html",children:"https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Polling:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Polling is a process that performs continuous monitoring. Basically, the processor continuously monitors the state of a specific device or a peripheral, and when the status of the device satisfies the condition, the device executes the task that was required. Then it moves on to the next device to monitor until each one has been served. The processor performs no other operations and devotes all of its processing time to monitoring, and all other tasks are suspended until the current one is completed."}),"\n",(0,t.jsx)(n.li,{children:"So, to overcome the disadvantage of the polling method, we chose the Interrupt method."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Interrups","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["ESP32 module has a dual-core processor and each core consists of 32 interrupts. Basically interrupts are of two types:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Software interrupts: Software interrupts are internal which occur in response to the execution of a software instruction. For example, a timer can be used to generate a software interrupt."}),"\n",(0,t.jsx)(n.li,{children:"Hardware interrupts: Hardware interrupts are the external interrupts that are caused by an external event. For example, an external push button connected to ESP32\u2019s GPIO or a motion sensor will generate an interrupt (event) if a motion is detected."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["ISR (Interrupt Service Routine):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When an interrupt occurs during normal program execution, an ISR (interrupt service routine) or an interrupt handler is called into action. The normal program execution will be halted, and the interrupt will be executed based on the priority level of the interrupt."}),"\n",(0,t.jsx)(n.li,{children:"Every interrupt has a fixed memory location where the address of the ISR is stored."}),"\n",(0,t.jsx)(n.li,{children:"Interrupt Vector Table refers to a memory table or memory table that is used to store the location of an interrupt service routine."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-4",children:"Apuntes 4"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/gpio.html",children:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/gpio.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/timer.html",children:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/timer.html"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-5-sparkfun",children:"Apuntes 5 (Sparkfun)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Ver tutorial ",(0,t.jsx)(n.a,{href:"https://learn.sparkfun.com/tutorials/processor-interrupts-with-arduino",children:"https://learn.sparkfun.com/tutorials/processor-interrupts-with-arduino"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.sparkfun.com/news/2608",children:"https://www.sparkfun.com/news/2608"})}),"\n",(0,t.jsx)(n.li,{children:"Tipos de Interrupciones."}),"\n",(0,t.jsxs)(n.li,{children:["Como definr una rutina:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/",children:"https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://playground.arduino.cc/Main/PinChangeInt/",children:"https://playground.arduino.cc/Main/PinChangeInt/"})}),"\n",(0,t.jsx)(n.li,{children:"Ejemplo sencillo..."}),"\n",(0,t.jsx)(n.li,{children:"De los videos de aqui se puede sacar la grafica donde se explica la diferencia entre Polling y Interrupcion."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-6-random-nerds-tutorials",children:"Apuntes 6 (Random Nerds tutorials)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://randomnerdtutorials.com/esp32-pir-motion-sensor-interrupts-timers/",children:"https://randomnerdtutorials.com/esp32-pir-motion-sensor-interrupts-timers/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://randomnerdtutorials.com/micropython-interrupts-esp32-esp8266/",children:"https://randomnerdtutorials.com/micropython-interrupts-esp32-esp8266/"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-7",children:"Apuntes 7"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/handling-interrupts",children:"https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/handling-interrupts"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ideas"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Microcontrollers provide a hardware mechanism called ",(0,t.jsx)(n.em,{children:"interrupts"})," for handling asynchronous events."]}),"\n",(0,t.jsxs)(n.li,{children:["A ",(0,t.jsx)(n.em,{children:"hardware interrupt"})," can be generated when a pin changes state, when an internal timer triggers, when some hardware operation has completed, such as an I2C read or write, or for numerous other reasons."]}),"\n",(0,t.jsx)(n.li,{children:"These events are usually asynchronous to the program being run, though sometimes interrupts are used to indicate that the program has caused an error, such as accessing a non-existent memory address."}),"\n",(0,t.jsx)(n.li,{children:"When an interrupt occurs, the interrupt mechanism will call a routine called an interrupt handler. The currently running program is temporarily suspended and other interrupts of lower priority are blocked. The interrupt handler routine does something quickly and returns, and then the regular program (usually) resumes."}),"\n",(0,t.jsx)(n.li,{children:"Poner ejemplo de uso: For example, a pin connected to an external sensor may change, indicating that the sensor has new..."}),"\n",(0,t.jsx)(n.li,{children:"The actual hardware interrupt is often called a hard interrupt, because it's generated and handled by the hardware. Acting on that interrupt later in an asynchronous fashion via software is often called handling a soft interrupt."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Polling:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The alternative to interrupts is polling. When you check something over and over, waiting for a change, you are polling. For instance, you can monitor a DigitalInOut.value over and over in a loop. In the examples in this guide, you'll see a number of cases where some code checks for a condition, and then does an asyncio.sleep(). The code is polling, but in a controlled way, so that it doesn't block other code from running."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"apuntes-7-1",children:"Apuntes 7"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"URL"}),": ",(0,t.jsx)(n.a,{href:"https://lastminuteengineers.com/handling-esp32-gpio-interrupts-tutorial/#google_vignette",children:"https://lastminuteengineers.com/handling-esp32-gpio-interrupts-tutorial/#google_vignette"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://deepbluembedded.com/esp32-external-interrupts-pins-arduino-examples/#google_vignette",children:"https://deepbluembedded.com/esp32-external-interrupts-pins-arduino-examples/#google_vignette"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://programarfacil.com/blog/arduino-blog/interrupciones-con-arduino-ejemplo-practico/",children:"https://programarfacil.com/blog/arduino-blog/interrupciones-con-arduino-ejemplo-practico/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.luisllamas.es/que-son-y-como-usar-interrupciones-en-arduino/",children:"https://www.luisllamas.es/que-son-y-como-usar-interrupciones-en-arduino/"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"referencias",children:"Referencias"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html",children:"https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/timer.html",children:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/timer.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.espressif.com/projects/esp-idf/en/v4.3/esp32/api-reference/peripherals/timer.html",children:"https://docs.espressif.com/projects/esp-idf/en/v4.3/esp32/api-reference/peripherals/timer.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/",children:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/timer.html",children:"https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/timer.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://deepbluembedded.com/esp32-timers-timer-interrupt-tutorial-arduino-ide/",children:"https://deepbluembedded.com/esp32-timers-timer-interrupt-tutorial-arduino-ide/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://randomnerdtutorials.com/esp8266-nodemcu-big-timer-node-red/",children:"https://randomnerdtutorials.com/esp8266-nodemcu-big-timer-node-red/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/reference/en/libraries/esp32timerinterrupt/",children:"https://www.arduino.cc/reference/en/libraries/esp32timerinterrupt/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/khoih-prog/ESP32TimerInterrupt",children:"https://github.com/khoih-prog/ESP32TimerInterrupt"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/khoih-prog/ESP32TimerInterrupt/tree/master/examples/multiFileProject",children:"https://github.com/khoih-prog/ESP32TimerInterrupt/tree/master/examples/multiFileProject"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://randomnerdtutorials.com/esp32-pir-motion-sensor-interrupts-timers/",children:"https://randomnerdtutorials.com/esp32-pir-motion-sensor-interrupts-timers/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://randomnerdtutorials.com/micropython-interrupts-esp32-esp8266/",children:"https://randomnerdtutorials.com/micropython-interrupts-esp32-esp8266/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.sparkfun.com/tutorials/processor-interrupts-with-arduino/all",children:"https://learn.sparkfun.com/tutorials/processor-interrupts-with-arduino/all"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/sparkfun/processor_interrupt_examples",children:"https://github.com/sparkfun/processor_interrupt_examples"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/overview",children:"https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/overview"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://lastminuteengineers.com/handling-esp32-gpio-interrupts-tutorial/",children:"https://lastminuteengineers.com/handling-esp32-gpio-interrupts-tutorial/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://deepbluembedded.com/esp32-external-interrupts-pins-arduino-examples/",children:"https://deepbluembedded.com/esp32-external-interrupts-pins-arduino-examples/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.sparkfun.com/news/2613",children:"https://www.sparkfun.com/news/2613"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.sparkfun.com/news/2608",children:"https://www.sparkfun.com/news/2608"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.sparkfun.com/news/2577",children:"https://www.sparkfun.com/news/2577"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://programarfacil.com/blog/arduino-blog/interrupciones-con-arduino-ejemplo-practico/",children:"https://programarfacil.com/blog/arduino-blog/interrupciones-con-arduino-ejemplo-practico/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.luisllamas.es/que-son-y-como-usar-interrupciones-en-arduino/",children:"https://www.luisllamas.es/que-son-y-como-usar-interrupciones-en-arduino/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://descubrearduino.com/interrupciones-esp32-gpio/",children:"https://descubrearduino.com/interrupciones-esp32-gpio/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.electrogeekshop.com/esp32-arduino-interrupciones-timer-2/",children:"https://www.electrogeekshop.com/esp32-arduino-interrupciones-timer-2/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/reference/en/language/functions/interrupts/interrupts/",children:"https://www.arduino.cc/reference/en/language/functions/interrupts/interrupts/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/",children:"https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://controlautomaticoeducacion.com/arduino/interrupciones-arduino/",children:"https://controlautomaticoeducacion.com/arduino/interrupciones-arduino/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html",children:"https://www.theengineeringprojects.com/2021/12/esp32-interrupts.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"http://stefanfrings.de/multithreading_arduino/",children:"http://stefanfrings.de/multithreading_arduino/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hackaday.com/2021/03/17/running-57-threads-at-once-on-the-arduino-uno/",children:"https://hackaday.com/2021/03/17/running-57-threads-at-once-on-the-arduino-uno/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.arduino.cc/reference/en/libraries/arduinothread/",children:"https://www.arduino.cc/reference/en/libraries/arduinothread/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.digikey.com/en/maker/blogs/2022/how-to-write-multi-threaded-arduino-programs",children:"https://www.digikey.com/en/maker/blogs/2022/how-to-write-multi-threaded-arduino-programs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ivanseidel/ArduinoThread",children:"https://github.com/ivanseidel/ArduinoThread"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/overview",children:"https://learn.adafruit.com/cooperative-multitasking-in-circuitpython-with-asyncio/overview"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-4/",children:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-4/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://wiki.seeedstudio.com/reServer-Getting-Started/",children:"https://wiki.seeedstudio.com/reServer-Getting-Started/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.seeedstudio.com/blog/2021/05/11/multitasking-with-arduino-millis-rtos-more/",children:"https://www.seeedstudio.com/blog/2021/05/11/multitasking-with-arduino-millis-rtos-more/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.hackster.io/485734/azure-rtos-threadx-for-arduino-101-threads-963a8d",children:"https://www.hackster.io/485734/azure-rtos-threadx-for-arduino-101-threads-963a8d"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://wiki.seeedstudio.com/reTerminal-build-UI-using-LVGL/",children:"https://wiki.seeedstudio.com/reTerminal-build-UI-using-LVGL/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.rt-thread.io/",children:"https://www.rt-thread.io/"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);