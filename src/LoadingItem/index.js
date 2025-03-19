import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon }  from "../TodoIcon/DeleteIcon";
import "./loadingItem.css";

function LoadingItem(props) {
    return (
      <li className="LoadingItem">
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />

        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
        </p>
        <DeleteIcon 
          onDelete={props.onDelete}
        />
      </li> 
    );
  }

  export { LoadingItem };