import './button.scss';

export default function Button(props){ 
  return (
    <button className="button" onClick={props.onClick}>{props.title}</button>
  )
} 
