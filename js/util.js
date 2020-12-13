// //? just makes a log




// //?                        Functions that creates SVGS in HTML

/* This function pulls an id from a structure at the top of the htlm that looks like this:

<svg xmlns="http://www.w3.org/2000/svg" style ="display: none;">

    <symbol id="back-bracket" viewBox="0 0 30.02 30.02">
        <path d="M22.735,23.43c1.43,1.686,1.224,4.209-0.46,5.64c-0.753,0.641-1.674,0.95-2.587,0.95c-1.136,0-2.261-0.479-3.052-1.41
        L7.286,17.6c-1.269-1.493-1.269-3.688,0-5.179l9.351-11.01c1.431-1.684,3.953-1.889,5.639-0.459c1.684,1.43,1.89,3.954,0.46,5.638
        l-7.152,8.42L22.735,23.43z" />
    </symbol>

</svg>

*/


function CreateSVG(id) {
    const $Svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    $Svg.setAttribute('class', 'illustration')
    const $Use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    $Use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#' + id);
    $Svg.appendChild($Use);
    return $Svg;
}




// //?                               Generates the HTML                                          

/*
    [
        {
            tag: 'div',
            attribute: 'class',
            attrValue: 'wizzbox',
            attributes: {
                type: 'text',
                name: items.formName
            },
            children: [
                {
                    tag: 'div',
                    attribute: 'class',
                    attrValue: 'wizz-head',
                    children: [
                        {
                            tag: 'h4',
                            text: 'Please enter your full name.',
                        },
                    ]    
                }
            ]
        },
    ]
*/


const key = 'tag';

const o = {tag: 'div'};



/**
 @typedef {string | {
    parent: string,
    tag: string,
    class: string?,
    attributes: Object?,
    svg: string?,
    text: string?,
    children: [ElementStruct]?
    }} ElementStruct
 */

/** 
 * Generates HTML and returns it given a certain input.
* @param {[ElementStruct]} Elements - An array with keys for html elements 
* @returns {[HTMLElement]}
*/




function CreateHTML(Elements){ //! this should be re added to my boiler plate


    const $Elements = Elements.map(e => {

        let $Element;
        if (typeof e === 'string'){  
            return e
        };
        if (e.svg !== undefined){
            $Element = CreateSVG(e.svg);
        } else {  
            $Element = document.createElement(e.tag);
        };
        if (e.class !== undefined){
            $Element.setAttribute('class', e.class)
        };
        if (e.attributes !== undefined){
            const l = Object.getOwnPropertyNames(e.attributes);
            l.forEach(k => {
                $Element.setAttribute(k, e.attributes[k])
            });
        };
        if (e.id !== undefined){
            $Element.setAttribute('id', e.id)
        };
        if(e.required){  
            $Element.required = true;
        };
        if (e.text !== undefined){   
            $Element.innerHTML = e.text;
        }
        if (e.children !== undefined){
            $Element.append(...CreateHTML(e.children));
        };
        return $Element;
    })

    if (Elements[0].parent !== undefined){
        if (typeof Elements[0].parent === "string") {
            parentElement = document.querySelector(Elements[0].parent);
        } else {
            parentElement = Elements[0].parent;
        }
        parentElement.append(...$Elements);
    } else {
        return $Elements
    }
}

//?                                    Disables scroll

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
  
        // if any scroll is attempted, set this to the previous value 
        window.onscroll = function() { 
            window.scrollTo(scrollLeft, scrollTop); 
        }; 
} 
  
function enableScroll() { 
    window.onscroll = function() {}; 
} 

