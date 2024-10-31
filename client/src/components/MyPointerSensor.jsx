import {PointerSensor,} from '@dnd-kit/core'

export default class MyPointerSensor extends PointerSensor {
  
    static activators = [
      {
        eventName: 'onPointerDown',
        handler: ({nativeEvent: event}) => {
          if (
            !event.isPrimary ||
            event.button !== 0 ||
            isInteractiveElement(event.target)
          ) {
            return false;
          }
  
          return true;
        },
      },
    ];
  }
 
  
  function isInteractiveElement(element) {
    // debugger
    // console.log(element.tagName.toLowerCase())
    const interactiveElements = [
      'button',
      'input',
      'textarea',
      'select',
      'option',
      'svg',
      'path'
    ];

    if (interactiveElements.includes(element.tagName.toLowerCase())) {
      return true;
    }
  
    return false;
  }

  // https://github.com/clauderic/dnd-kit/issues/477