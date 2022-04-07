import React, { useState, useCallback, useEffect } from 'react';

const DragLabel = ({ name, value, setValue, offset }) => {
  // We are creating a snapshot of the values when the drag starts
  // because the [value] will itself change & we need the original
  // [value] to calculate during a drag.
  const [snapshot, setSnapshot] = useState(value);

  // This captures the starting position of the drag and is used to
  // calculate the diff in positions of the cursor.
  const [startVal, setStartVal] = useState(0);

  // Start the drag to change operation when the mouse button is down.
  const onStart = useCallback(
    (event) => {
      setStartVal(event.clientX);
      setSnapshot(value);
    },
    [value],
  );

  // We use document events to update and end the drag operation
  // because the mouse may not be present over the label during
  // the operation..
  useEffect(() => {
    // Only change the value if the drag was actually started.
    const onUpdate = (event) => {
      if (startVal) {
        setValue((event.clientX - startVal) * offset + snapshot);
      }
    };

    // Stop the drag operation now.
    const onEnd = () => {
      setStartVal(0);
    };

    document.addEventListener('mousemove', onUpdate);
    document.addEventListener('mouseup', onEnd);
    return () => {
      document.removeEventListener('mousemove', onUpdate);
      document.removeEventListener('mouseup', onEnd);
    };
  }, [startVal, setValue, snapshot]);

  return (
    <span
      style={{
        cursor: 'ew-resize',
        userSelect: 'none',
      }}
      onMouseDown={onStart}>
      {name}
    </span>
  );
};

export default DragLabel;
