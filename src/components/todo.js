import todosStore from "../stores/todosStore";

export default function Todo({todo}) {
    const store = todosStore(store => {
        return {deleteTodo: store.deleteTodo, toggleUpdate: store.toggleUpdate};
    });

    return (
        <div key={todo._id}>
          <h3>{todo.title}</h3>
          <div className="flex flex-row gap-3">
          <button id="deleteNote" onClick={() => store.deleteNote(todo._id)} className="bg-red-500 text-white rounded-md px-2">Delete</button>
          <button id="movetoUpdateForm" onClick={() => store.toggleUpdate(todo)} className="bg-red-500 text-white rounded-md px-2">Update</button>
          </div>
        </div>
    );
}