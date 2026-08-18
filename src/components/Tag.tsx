import React from "react";

interface TagProps {
  children: React.ReactNode; 
  color: string;             
}

export const Tag = ({children, color}: TagProps) => (
<span
 style={{
    backgroundColor: color,
    borderRadius: '4px',
    color: '#fff',
    padding: '0.2rem 0.5rem',
    fontWeight: 'bold',
}}>
{children}    
</span>    
);

// export const Tag: React.FC<TagProps> = ({ children, color }) => (
//   <span
//     style={{
//       backgroundColor: color,
//       borderRadius: '4px',
//       color: '#fff',
//       padding: '0.2rem 0.5rem',
//       fontWeight: 'bold',
//     }}
//   >
//     {children}    
//   </span>    
// );

/*
// Add this default export, if you dont want to put { }

    export default Tag;

// now you can use like

    import Tag from '@site/src/components/Tag';

// without explict export default, you must put { }

import {Tag} from '@site/src/components/Tag';

*/