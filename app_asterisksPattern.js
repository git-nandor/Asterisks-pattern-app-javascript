'use strict';
/*
(Extra) Homework #2 (Optional)

Write a JavaScript program to construct the following pattern, which takes the number of levels as parameter

Function Input: 4

Example output:

*
**
***
****

Make it harder by accepting a 2nd parameter for the position of the asterisks (left, center or right)

   *
  ***
 *****
*******
*/

function createAsterisksPattern(levels, position) {
    var patternLevels = [];

    // Build pattern: starting from y axis 0 and adding characters along x axis
    function buildPattern(levels, position) {
        for (var y = 0; y < levels; y++) {
            // If array element isn't exist then create one to be able to expand later
            if (!patternLevels[y]) patternLevels[y] = '';

            for (var x = 0; x < levels - y; x++) {
                patternLevels[y] = patternLevels[y] + '*';

                // In centered position extend the pattern 
                if (position === 'center' && y !== 0) {
                    patternLevels[y - 1] = patternLevels[y - 1] + '*';
                }
            }
        }
    }

    // Adding spaces befor/after elements based on the positioning
    function positioningPattern(position) {
        for (var y = 1; y < patternLevels.length; y++) {
            switch (position) {
                case 'left':
                    for (var x = 0; x < y; x++) {
                        patternLevels[y] = patternLevels[y] + ' ';
                    }
                    break;
                case 'right':
                    for (var x = 0; x < y; x++) {
                        patternLevels[y] = ' ' + patternLevels[y];
                    }
                    break;
                case 'center':
                    for (var x = 0; x < y; x++) {
                        patternLevels[y] = ' ' + patternLevels[y] + ' ';
                    }
                    break;
            }
        }
    }

    // Print pattern into the console
    function printPattern() {
        for (var y = patternLevels.length; y > 0; y--) {
            console.log(patternLevels[y - 1]);
        }

        console.log(patternLevels);
    }

    buildPattern(levels, position);
    positioningPattern(position);
    printPattern();
}

// Start application
createAsterisksPattern(4, 'left');
createAsterisksPattern(4, 'right');
createAsterisksPattern(4, 'center');
