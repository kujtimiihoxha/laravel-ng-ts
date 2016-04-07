/**
 * @author    Martin Micunda {@link http://martinmicunda.com}
 * @copyright Copyright (c) 2015, Martin Micunda
 * @license   GPL-3.0
 */
'use strict';


/**
 * The banner is the comment that is placed at the top of our compiled
 * source files. It is first processed as a Gulp template, where the `<%=`
 * pairs are evaluated based on this very configuration object.
 */
import paths from './paths'
const constants = {
    templates: {
        options: {
            moduleName: 'app.templates',
            prefix: './views/'
        },
        out: 'templates.js'
    },
    typescript :{
      folders:[
          `${paths.app.typescript}/app/app.main.ts`,
          `${paths.app.typescript}/**/*.+(module.ts)`,
          `${paths.app.typescript}/**/*.+(ts)`,
          'typings/main.d.ts',
          'typings/app.d.ts'
      ]
    }
};
export default constants;
