import React, { forwardRef } from 'react';

const Childref = forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor='val'>Enter Value:</label>
      <input type="text" id="val" ref={ref} />
    </div>
  )
});

export default Childref;


// With normal function

// import React, { forwardRef } from 'react';

// function Child(props, ref) {
//   return <input ref={ref} />;
// }

// export default forwardRef(Child);