import { PointerSensor, TouchSensor } from '@dnd-kit/core';

export default class MySensor extends PointerSensor {
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
      },
    },
    {
      eventName: 'onTouchStart',
      handler: ({ nativeEvent: event }) => {
        if (
          !isInteractiveElement(event.target)
        ) {
          return true; // Allow touch events for non-interactive elements
        }

        return false; // Prevent touch events for interactive elements
      },
    },
  ];
}

function isInteractiveElement(element) {
  const interactiveElements = [
    'button',
    'input',
    'textarea',
    'select',
    'option',
    'svg',
    'path',
  ];

  return interactiveElements.includes(element.tagName.toLowerCase());
}
