import React from 'react';

const InterSectionLoader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <div ref={ref} {...props}>
      <div>Trigger</div>
    </div>
  )
);

InterSectionLoader.displayName = 'InterSectionLoader';
export default InterSectionLoader;
