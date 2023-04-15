import { useState } from "react";


const Addtodo = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        title: "",
        isActive: true,
    });
    const { title } = todo;
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    todo?.title?.trim()?.length > 0 && addTodo(todo);
                    setTodo({
                        id: "",
                        title: "",
                        isActive: true,
                    });
                }}
            >
                <input
                    placeholder="New todo"
                    value={title}
                    onChange={(e) => {
                        let id = new Date();
                        id = id.getTime();
                        if (e.target.value?.trim().length > 0)
                            setTodo({
                                ...todo,
                                id,
                                title: e.target.value,
                            });
                    }}
                />
                <button className="submit-button" title="Add Todo">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.75 5.25V0H5.25V5.25H0V6.75H5.25V12H6.75V6.75H12V5.25H6.75Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
};


export default Addtodo;