/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    "intro",
    "home",
    {
      type: "category",
      label: "Tutorial",
      items: [
        "tutorial-basics/create-a-document",
        "tutorial-basics/congratulations",
      ],
    },
    {
      type: "category",
      label: "Clases",
      items: [
        "tutorial-basics/create-a-document",
        "tutorial-basics/congratulations",
      ],
    },
  ],
  teoriaSidebar: [
    "home",
    {
      type: "category",
      label: "Sensores y Actuadores",
      items: [
        "sensores-actuadores/intro",
        "sensores-actuadores/inventario-lab",
        {
          type: "category",
          label: "Sensores",
          items: [
            "sensores-actuadores/sensores/intro",
            "sensores-actuadores/sensores/clases",
            {
              type: "category",
              label: "Tipos de sensores",
              items: [
                "sensores-actuadores/sensores/tipos/temperatura",
                "sensores-actuadores/sensores/tipos/distancia",
                "sensores-actuadores/sensores/tipos/movimiento",
                "sensores-actuadores/sensores/tipos/magneticos-radiacion",
                "sensores-actuadores/sensores/tipos/quimicos",
              ],
            },
          ],
        },
      ],
    },
  ],
  sesionesSidebar: [
    "sesiones/index",
    {
      type: "category",
      label: "Capa de percepcion",
      items: [
        "sesiones/percepcion/intro",
        "sesiones/percepcion/sesion1",
        "sesiones/percepcion/sesion2",
        "sesiones/percepcion/sesion3",
        {
          type: "category",
          label: "Sesión 4",
          items: [
            "sesiones/percepcion/sesion4a",
            "sesiones/percepcion/sesion4b",
            "sesiones/percepcion/sesion4c",
            "sesiones/percepcion/sesion4d",
            {
              type: "category",
              label: "Ejemplo 4",
              items: [
                "sesiones/percepcion/sesion4e_1",
                "sesiones/percepcion/sesion4e_2",
                "sesiones/percepcion/sesion4e_3",
                "sesiones/percepcion/sesion4e_4",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "Sesión 5",
          items: [
            "sesiones/percepcion/sesion5a",
            "sesiones/percepcion/sesion5b",
            "sesiones/percepcion/sesion5c",
            {
              type: "category",
              label: "Ejemplo 3",
              items: [
                "sesiones/percepcion/sesion5d_1",
                "sesiones/percepcion/sesion5d_2",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Capa de red",
      items: ["sesiones/red/intro"],
    },
    {
      type: "category",
      label: "Capa de aplicación",
      items: ["sesiones/aplicacion/intro"],
    },
  ],
};

export default sidebars;
