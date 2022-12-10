# API REST Typescript

- Creo el package.json. Con -y para que diga yes por defecto a todo

> npm init -y

- Instalo typescript como dependencia de desarrollo

> npm i typescript -D

- Creo el script tsc en el package.json

~~~js
  "scripts": {
    "tsc": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
~~~

- Inicializo el proyecto de typescript

> npm run tsc -- --init

- Este doble guión guión es para que init vaya a tsc y no a npm run
- Ahora tengo el archivo de configuración tsconfig.json
- Activaré algunas cosas, el archivo queda así
    - target: el lenguaje empleado
    - module: usará commonjs con el require en el output
    - outdir: carpeta donde compilará los archivos a js
    - esModuleInterop: para poder usar los import y export y compile a commonjs
    - strict: modo estricto
    - noUnusedLocals: para que de error cuando no use una variable
    - noUnusedParameters: para que de error cuando no se use un parámetro de una función
    - noImplicitReturns: para que me obligue a poner un return (por defecto una función devuelve undefine)
    - noFallthroughCasesInSwitch: para que me obligue a colocar en un switch el return y evitar que caiga en el case equivocado
    
~~~json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    // "incremental": true,                              /* Save .tsbuildinfo files to allow for incremental compilation of projects. */
    // "composite": true,                                /* Enable constraints that allow a TypeScript project to be used with project references. */
    // "tsBuildInfoFile": "./.tsbuildinfo",              /* Specify the path to .tsbuildinfo incremental compilation file. */
    // "disableSourceOfProjectReferenceRedirect": true,  /* Disable preferring source files instead of declaration files when referencing composite projects. */
    // "disableSolutionSearching": true,                 /* Opt a project out of multi-project reference checking when editing. */
    // "disableReferencedProjectLoad": true,             /* Reduce the number of projects loaded automatically by TypeScript. */

    /* Language and Environment */
    "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    // "lib": [],                                        /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    // "jsx": "preserve",                                /* Specify what JSX code is generated. */
    // "experimentalDecorators": true,                   /* Enable experimental support for TC39 stage 2 draft decorators. */
    // "emitDecoratorMetadata": true,                    /* Emit design-type metadata for decorated declarations in source files. */
    // "jsxFactory": "",                                 /* Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'. */
    // "jsxFragmentFactory": "",                         /* Specify the JSX Fragment reference used for fragments when targeting React JSX emit e.g. 'React.Fragment' or 'Fragment'. */
    // "jsxImportSource": "",                            /* Specify module specifier used to import the JSX factory functions when using 'jsx: react-jsx*'. */
    // "reactNamespace": "",                             /* Specify the object invoked for 'createElement'. This only applies when targeting 'react' JSX emit. */
    // "noLib": true,                                    /* Disable including any library files, including the default lib.d.ts. */
    // "useDefineForClassFields": true,                  /* Emit ECMAScript-standard-compliant class fields. */
    // "moduleDetection": "auto",                        /* Control what method is used to detect module-format JS files. */

    /* Modules */
    "module": "commonjs",                               /* Specify what module code is generated. */
    // "rootDir": "./",                                  /* Specify the root folder within your source files. */
    // "moduleResolution": "node",                       /* Specify how TypeScript looks up a file from a given module specifier. */
    // "baseUrl": "./",                                  /* Specify the base directory to resolve non-relative module names. */
    // "paths": {},                                      /* Specify a set of entries that re-map imports to additional lookup locations. */
    // "rootDirs": [],                                   /* Allow multiple folders to be treated as one when resolving modules. */
    // "typeRoots": [],                                  /* Specify multiple folders that act like './node_modules/@types'. */
    // "types": [],                                      /* Specify type package names to be included without being referenced in a source file. */
    // "allowUmdGlobalAccess": true,                     /* Allow accessing UMD globals from modules. */
    // "moduleSuffixes": [],                             /* List of file name suffixes to search when resolving a module. */
    // "resolveJsonModule": true,                        /* Enable importing .json files. */
    // "noResolve": true,                                /* Disallow 'import's, 'require's or '<reference>'s from expanding the number of files TypeScript should add to a project. */

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */
    // "checkJs": true,                                  /* Enable error reporting in type-checked JavaScript files. */
    // "maxNodeModuleJsDepth": 1,                        /* Specify the maximum folder depth used for checking JavaScript files from 'node_modules'. Only applicable with 'allowJs'. */

    /* Emit */
    // "declaration": true,                              /* Generate .d.ts files from TypeScript and JavaScript files in your project. */
    // "declarationMap": true,                           /* Create sourcemaps for d.ts files. */
    // "emitDeclarationOnly": true,                      /* Only output d.ts files and not JavaScript files. */
    // "sourceMap": true,                                /* Create source map files for emitted JavaScript files. */
    // "outFile": "./",                                  /* Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a file that bundles all .d.ts output. */
     "outDir": "./build",                                 /* Specify an output folder for all emitted files. */
    // "removeComments": true,                           /* Disable emitting comments. */
    // "noEmit": true,                                   /* Disable emitting files from a compilation. */
    // "importHelpers": true,                            /* Allow importing helper functions from tslib once per project, instead of including them per-file. */
    // "importsNotUsedAsValues": "remove",               /* Specify emit/checking behavior for imports that are only used for types. */
    // "downlevelIteration": true,                       /* Emit more compliant, but verbose and less performant JavaScript for iteration. */
    // "sourceRoot": "",                                 /* Specify the root path for debuggers to find the reference source code. */
    // "mapRoot": "",                                    /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,                          /* Include sourcemap files inside the emitted JavaScript. */
    // "inlineSources": true,                            /* Include source code in the sourcemaps inside the emitted JavaScript. */
    // "emitBOM": true,                                  /* Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files. */
    // "newLine": "crlf",                                /* Set the newline character for emitting files. */
    // "stripInternal": true,                            /* Disable emitting declarations that have '@internal' in their JSDoc comments. */
    // "noEmitHelpers": true,                            /* Disable generating custom helper functions like '__extends' in compiled output. */
    // "noEmitOnError": true,                            /* Disable emitting files if any type checking errors are reported. */
    // "preserveConstEnums": true,                       /* Disable erasing 'const enum' declarations in generated code. */
    // "declarationDir": "./",                           /* Specify the output directory for generated declaration files. */
    // "preserveValueImports": true,                     /* Preserve unused imported values in the JavaScript output that would otherwise be removed. */

    /* Interop Constraints */
    // "isolatedModules": true,                          /* Ensure that each file can be safely transpiled without relying on other imports. */
    // "allowSyntheticDefaultImports": true,             /* Allow 'import x from y' when a module doesn't have a default export. */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    // "preserveSymlinks": true,                         /* Disable resolving symlinks to their realpath. This correlates to the same flag in node. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

    /* Type Checking */
    "strict": true,                                      /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                            /* Enable error reporting for expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,                         /* When type checking, take into account 'null' and 'undefined'. */
    // "strictFunctionTypes": true,                      /* When assigning functions, check to ensure parameters and the return values are subtype-compatible. */
    // "strictBindCallApply": true,                      /* Check that the arguments for 'bind', 'call', and 'apply' methods match the original function. */
    // "strictPropertyInitialization": true,             /* Check for class properties that are declared but not set in the constructor. */
    // "noImplicitThis": true,                           /* Enable error reporting when 'this' is given the type 'any'. */
    // "useUnknownInCatchVariables": true,               /* Default catch clause variables as 'unknown' instead of 'any'. */
    // "alwaysStrict": true,                             /* Ensure 'use strict' is always emitted. */
       "noUnusedLocals": true,                           /* Enable error reporting when local variables aren't read. */
       "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read. */
    // "exactOptionalPropertyTypes": true,               /* Interpret optional property types as written, rather than adding 'undefined'. */
       "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
       "noFallthroughCasesInSwitch": true,               /* Enable error reporting for fallthrough cases in switch statements. */
    // "noUncheckedIndexedAccess": true,                 /* Add 'undefined' to a type when accessed using an index. */
    // "noImplicitOverride": true,                       /* Ensure overriding members in derived classes are marked with an override modifier. */
    // "noPropertyAccessFromIndexSignature": true,       /* Enforces using indexed accessors for keys declared using an indexed type. */
    // "allowUnusedLabels": true,                        /* Disable error reporting for unused labels. */
    // "allowUnreachableCode": true,                     /* Disable error reporting for unreachable code. */

    /* Completeness */
    // "skipDefaultLibCheck": true,                      /* Skip type checking .d.ts files that are included with TypeScript. */
    "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
  }
}
~~~

- Instalo express como dependencia. -E guarda la versión exacta

> npm i express -E

- Creo la carpeta src con index.ts dentro

- Instalo los tipos de typescript como dependencia de desarrollo

> npm install --save @types/express -D

- Porqué dependencias de desarrollo y otras normales?
    - Si yo lo pongo como dependencia, el paquete a lo mejor ocupa 50 megas y obligo a descargarlo si alguien se instala esta app
    - Si quiero desarrollar si necesito los tipos, pero si no no

- Creo un servidor básico
    - En el req pongo un guión bajo para que typescript no se queje por declararse y no usarse

~~~js
import express from 'express'

const app = express()

app.use(express.json()) //middleware para usar json como formato de salida

const PORT = 3000

app.get('/ping', (_, res)=>{
    
    res.send('pong')
})


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${PORT}`)
})

~~~

- Uso el npm run tsc para comprobar que todo funciona correctamente
- Ahora tengo la carpeta build con index.js
- Creo un script llamado start en el package.json

> "start": "node build/index.js",

- Si ahora voy al http://localhost:3000/ping tengo la respuesta pong en pantalla

- Pero usar node es engorroso  a la hora de guardar los cambios.
- En lugar de usar nodemon usaré ts-node-dev que es una mezcla de ts-node y nodemon

> npm i ts-node-dev -D

- Creo el script dev en el package.json

> "dev": "ts-node-dev src/index.ts",

- Ahora con npm run dev escucha los cambios

------

# El proyecto

- Es un piloto de aviones que quiere hacer un seguimiento de sus experiencias de vuelo
    - Quiere guardar todos los viajes con su fecha de entrada, las condiciones meteorológicas, la visibilidad y el comentario
- Json con los datos

~~~json
[
    {
        "id": 1,
        "date": "2017-01-01",
        "weather": "rainy",
        "visibility": "poor",
        "comment": "Pretty scary flight, I'm glad I'm alive"
    },
    {
        "id": 2,
        "date": "2017-04-01",
        "weather": "sunny",
        "visibility": "good",
        "comment": "Everything went better than expected, I'm learning much"
    },
    {
        "id": 3,
        "date": "2017-04-15",
        "weather": "windy",
        "visibility": "good",
        "comment": "I'm getting pretty confident although I hit a flock of birds"
    },
    {
        "id": 4,
        "date": "2017-05-11",
        "weather": "cloudy",
        "visibility": "good",
        "comment": "I almost failed the landing but I survived"
    }
]
~~~

- En src creo una nueva carpeta llamada routes con diaries.routes.ts dónde irán todas las rutas
- diaries.routes.ts

~~~js
import express from 'express'

const router = express.Router()

router.get('/', (_,res)=>{
    res.send('Fetching  all entry diaries')
})

router.post('/', (_, res)=>{
    res.send('Saving a diary')
})

export default router
~~~

- Ahora hace falta importar el router en el index.ts y usarlo
- Al ser un export default lo puedo nombrar como quiera 

~~~js
app.use('/api/diaries', diaryRouter)
~~~

- Separaré la lógica de las rutas en otro archivo de controladores
- Creo en src la carpeta controllers con diaries.controllers.ts
- Creo la carpeta db y dentro el diaries.json
- Importo en el diaries.controllers el json
- Creo dos métodos

~~~js
import dairyData from '../db/diaries.json'

export const getEntries = ()=> diaryData

export const addentry =()=> null
~~~

- La importación da error. Me dice 'considere usar  --resolveJsonModule
- Por defecto typescript no soporta este tipo de archivos en las importaciones
- Hay que configurar el tsconfig.json y añadir

> "resolveJsonModule": true,

- Ya no hay error
- Si me coloco con el cursor encima de getEntries el editor me dice que devuelve un objeto con id:number, date:string, etc (los tipos del objeto JSON)
- Quiero que weather y visibility sean unos strings concretos: good, bad, rainy, etc
- Para eso están los tipos
- En src creo el archivo types.d.ts
    - Typescript busca este fichero por defecto. Es donde estarán todos los tipos
    - Se pueden importar más de otros ficheros
- types.d.ts

~~~js
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

export type Visibility = 'great' | 'good' | 'ok' | 'poor'
~~~

- Ahora crearé la interfaz ( que son extensibles con extends, aunque los tipos también )
    - Son como contratos de lo que debe contener un objeto

~~~js
export interface DiaryEntry{
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}
~~~

- Si quisiera extender la interface sería:

~~~js
interface SpecialDiaryEntry extends DiaryEntry{
    flightNumber: number
}
~~~

- Si quisiera extender un type podría hacerlo así

~~~js
type SpecialDiaryEntry2  = DiaryEntry &{
    flightNUmber: number
}
~~~

## Se recomienda si es algo estático usar un tipo y si es algo que se puede extender usar las interfaces

- Creo una variable del tipo array de la interfaz DiaryEntry en el controller

~~~js
const diaries : DiaryEntry[] = diaryData 
~~~

- Esto me marca un error: 'El tipo string no se puede asignar al tipo Weather'

        NOTA: se recomienda leer los errores de abajo a arriba

- Yo le estoy diciendo que es de tipo Weather y Typescript dice que no
- Para arreglarlo se usa **la aserción de tipos**
- Ahora ya puedo decir que el getEntries devuelve un array de DiaryEntry

~~~js
import diaryData from '../db/diaries.json'
import { DiaryEntry } from '../types'


const diaries : DiaryEntry[] = diaryData as DiaryEntry[] //aserción de tipos

export const getEntries = (): DiaryEntry[]=>  diaries

export const addentry =(): undefined=> undefined
~~~

- Hay que evitar usar la aserción de tipos siempre que sea necesario. Un caso típico de aserción de tipos es en un fetch
- También hay que evitar nombrar los archivos igual. Typescript sigue una jerarquía/orden de prioridad

> .tsx, .ts, .node, .js, .json

- En typescript no es obligatorio poner las extensiones, por lo que hay que vigilar con esto
-----
- Se puede usar ts-standard como formateador/corrector de código que usa ESLint por debajo 
- Y Crear el script

> "ts": "ts-standard",

- Y debajo de dependencias (por fuera):
    - Hay que indicarle el archivo de configuración de ts

~~~js
"esLintConfig":{
    "parserOptions":{
        "project": "./tsconfig.json"
    },
    "extends": ["./node_modules/ts-standard/eslintrc.json"]
}
~~~

- Reiniciar VSCode
- Hay una cosa en ts llamada los tipos de utilidad (hay muchos disponibles)
- Pongamos que quiero recibir las entradas en un GET pero sin los comentarios

~~~js
export const getEntriesWithoutComments = (): withoutCommentsDiaryEntry[]=> diaries 
~~~

- Ahora en types.d.ts uso el Pick con las propiedades que si me interesan

~~~js
export type withoutCommentsDiaryEntry = Pick<DiaryEntry, 'id'| 'date' | 'weather'| 'visibility'>
~~~

- En lugar de Pick puedo usar el Omit para omitir uno en concreto

~~~js
export type withoutCommentsDiaryEntry = Omit<DiaryEntry, 'comment'>
~~~

- Es mejor crear el minimo de objetos y aprovechar lo que ya hay
-----

- Importo todo del diaries.controller.ts en el diaries.routes

> import * as diaryServices from '../controllers/diaries.controllers'

- Lo uso en la petición GET

~~~js
import express from 'express'
import * as diaryServices from '../controllers/diaries.controllers'

const router = express.Router()

router.get('/', (_,res)=>{
    res.send(diaryServices.getEntriesWithoutComments())
})

router.post('/', (_, res)=>{
    res.send('Saving a diary')
})

export default router
~~~

- El resultado es el JSON pero con los comentarios.
- Con el res.send typescript no es capaz de filtrarlo
- Hay que utilizar un map

~~~js
export const getEntriesWithoutComments = (): withoutCommentsDiaryEntry[]=> {
    return diaries.map(({id, date,weather, visibility})=>{
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}
~~~
- Entonces, me serviría para el tipado (si pongo DiaryServices.comment no me va a dejar), pero hay que hacerlo a mano

----
# Los undefined








