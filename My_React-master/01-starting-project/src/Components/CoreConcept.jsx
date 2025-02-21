export default function CoreConcept(props) {   // function CoreConcept(image,title,discription) and no neeed to use prope. anywhere
  return (
    <li>
      <img src={props.image} alt={props.title} /> 
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}