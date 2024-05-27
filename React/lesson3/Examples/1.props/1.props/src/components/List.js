import React from 'react';

const ListItem = props => {
  return <li>{props.value}</li>
}

export const List = (props) => {
  return (
    <ul>
      {props.items.map(item => <ListItem value={item}/>)}
    </ul>
  );
}
// export const List = ({ items }) => {
//   return (
//     <ul>{
//       items.map(item => <ListItem key={item.toString()} value={item}/>)
//     }</ul>
//   );
// }
