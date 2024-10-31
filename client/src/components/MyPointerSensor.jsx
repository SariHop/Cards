import { PointerSensor, TouchSensor } from '@dnd-kit/core';

export class MyPointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: 'onPointerDown',
      handler: ({ nativeEvent: event }) => {
        if (
          !event.isPrimary ||
          event.button !== 0 ||
          isInteractiveElement(event.target)
        ) {
          return false;
        }
        return true;
      }
    }];
}


export class MyTouchSensor extends TouchSensor {
  static activators = [
    {
      eventName: 'onTouchStart',
      handler: ({ nativeEvent: event }) => {
        if (isInteractiveElement(event.target)) {
          return false;
        }
        return true;
      }
    }]
}


function isInteractiveElement(element) {
  const interactiveElements = [
    'button',
    'input',
    'svg',
    'path',
  ];

  return interactiveElements.includes(element.tagName.toLowerCase());
}
