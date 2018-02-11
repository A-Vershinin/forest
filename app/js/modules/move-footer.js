'use strict';

// отступ для футера и секции над ним
function moveFooter(element, target, callback) {
    element = element instanceof jQuery ? element : $(element);

    let elementHeight = Math.ceil(element.height());
    element.css('margin-top', '-' + (elementHeight - 1)  + 'px');

    if (target) {
        target = target instanceof jQuery ? target : $(target);
        target.css('padding-bottom', elementHeight + 'px');
    }

    if (callback)
        callback(elementHeight);
}


export default moveFooter;
