import todosStore from "../stores/todosStore";

export default function CreateForm() {
    const store = todosStore();

    if(store.updateForm._id) return <></>;

    return (
    <div id="createForm" className="flex flex-col gap-3">
        <h2 className="font-bold text-4xl">Create Todo</h2>
        <form onSubmit={store.createTodo} className="flex flex-row gap-2">
          <input name="title" value={store.createForm.title} onChange={store.updateCreateFormField} className="border-3 rounded-md bg-gray-300"/>
          <textarea name="body" value={store.createForm.description} onChange={store.updateCreateFormField} className="bg-gray-300"/>
          <button type="submit" className="bg-red-500 rounded-md shadow-md text-white text-md px-3">Create todo</button>
        </form>
    </div>
    );
}