import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodoListsType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodoListsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });


    function removeTask(todoListID: string, taskID: string) {
        let filteredTasks = tasks[todoListID].filter(task => task.id != taskID);
        setTasks({...tasks, [todoListID]: filteredTasks});
    }

    function addTask(todoListID: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        let newTasks = [task, ...tasks[todoListID]];
        setTasks({...tasks, [todoListID]: newTasks});
    }

    function changeTaskStatus(todoListID: string, taskId: string, isDone: boolean) {
        setTasks({...tasks,
            [todoListID]: tasks[todoListID].map(task => task.id === taskId ? {...task, isDone} : task)});
    }


    function changeFilter(todoListID: string, filterValue: FilterValuesType) {
        setTodolists(todolists.map(list => list.id === todoListID ? {...list, filter: filterValue} : list))
    }




    return (
        <div className="App">

            {todolists.map(list => {
                let filteredTasks = tasks[list.id]
                if(list.filter === "completed") {
                    filteredTasks = tasks[list.id].filter(task => task.isDone == true)
                }
                if(list.filter === "active") {
                    filteredTasks = tasks[list.id].filter(task => task.isDone == false)
                }
                return <Todolist
                    key={list.id}
                    todolistID={list.id}
                    title={list.title}
                    tasks={filteredTasks}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    changeTaskStatus={changeTaskStatus}
                    filter={list.filter}
                />}
            )}

        </div>
    );
}

export default App;
