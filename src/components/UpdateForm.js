import todosStore from "../stores/todosStore";

export default function UpdateForm() {
    const store = todosStore();
    
    if(!store.updateForm._id) return <></>;

    return (
    <div id="updateForm">
        <h2 className="text-4xl font-bold">Update Note</h2>
        <form onSubmit={store.updateNote} className="flex flex-row gap-3">
          <input name="title" value={store.updateForm.title} onChange={store.handleUpdateFieldChange} className="border-3 rounded-md bg-gray-300"/>
          <textarea name="body" value={store.updateForm.body} onChange={store.handleUpdateFieldChange} className="bg-gray-300"/>
          <button type="submit" className="bg-red-500 rounded-md shadow-md text-white text-md px-3">update note</button>
        </form>
    </div>
    );
}