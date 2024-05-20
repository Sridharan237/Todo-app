import {create} from 'zustand'; // zustand helps us to make the states and functions globally available
import axios from 'axios';

const todosStore = create((set) => ({
    // States
    todos: null,

    createForm: {
        title: '',
        description: ''
    },

    updateForm: {
        id: null,
        title: '',
        description: ''
    },

    // Functions
    fetchTodos: async () => {
    // Fetch the notes
    const res = await axios.get("http://localhost:3000/notes-getall");

    // set to the state
    set({todos: res.data.notes});
    },

    updateCreateFormField: (e) => {
        const {name, value} = e.target;
    
        set((state) => {
            return {
                createForm: {
                    ...state.createForm,    //it creates a duplicate of createForm
                    [name]:value,
                }
            };
        });
    },

    createTodo: async (e) => {
        e.preventDefault();
        
        const {todos, createForm} = todosStore.getState();

        // Create the note
        const res = await axios.post("http://localhost:3000/note-createnew", createForm);

        // Update the state
        set({
            todos: [...todos, res.data.note],
            createForm: {
                title: "",
                body: "",
            },
        });
    },

    deleteTodo: async (_id) => {
        // Delete the note
        await axios.delete(`http://localhost:3000/note-delete/${_id}`);
        
        const {todos} = todosStore.getState();

        // Update the state
        const newTodos = todos.filter((note) => {
          return note._id !== _id;
        });
    
        set({todos: newTodos});
    },

    handleUpdateFieldChange : (e) => {
        // Get the input values when the event is triggered
        const {value, name} = e.target;
        
        set((state) => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]:value,
                },
            };
        });
    },

    toggleUpdate: ({_id, title, body}) => {
        // Set the state on update form
        set({
            updateForm: {
                title,
                body,
                _id,
            },
        });
    },

    updateTodo: async (e) => {
        e.preventDefault();
    
        const {updateForm:{title, description, _id}, notes} = todosStore.getState();
    
        // Send the update request
        const res = await axios.put(`http://localhost:3000/note-update/${_id}`, {title, description});
    
        // Update the state
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => {
          return todo._id === _id;
        });
        newTodos[todoIndex] = res.data.todo;
        
        set({
            todos: newTodos,
            updateForm: {
                title:"",
                description:"",
            },
        });
    },
}));

export default todosStore;