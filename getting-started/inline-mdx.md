---
title: Inline MDX
sidebar_position: 6
---

export const ITag = ({children, color}) => (
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

<ITag color="#FF5733">Important</ITag> information: This is an <ITag color="#3399FF">Exiciting</ITag> example of custom components!

I can write **markdown** alongside my _JSX_!