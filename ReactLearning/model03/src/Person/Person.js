import React  from 'react'

const Person = (props) => {
  return (
    <div>
      <p> I'm {props.name} and i'm {props.age}</p>
      <p>{props.children}</p>

    </div>
  );

}

export default Person;
