import './styles.scss';

export default function Button(props){ 
  return (
    <button onClick={props.onClick}>{props.title}</button>
  )
} 
