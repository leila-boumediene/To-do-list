import "./App.css";
import Header from "./Header";
import Task from "./Task";
import Form from "./Form";
import Footer from "./Footer";

import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList } from "@fortawesome/free-solid-svg-icons";
library.add(faList);

function App() {
  // state pour stocker ce qui est rentré dans l'input
  const [input, setInput] = useState("");
  // state pour stocker un tableau de tâches
  const [tasks, setTasks] = useState();

  // fonction déclanchée lorsque l'on tape quelque chose dans l'input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // fonction déclanchée lorsque l'on clique sur le bouton "Add task"
  const handleSubmit = (e) => {
    // empêcher le rafraîchissement de la page
    e.preventDefault();
    // si rien n'a été rentré dans l'input
    if (!input) {
      alert("Veuillez rentrer une nouvelle tâche");
    } else {
      //  création d'une copie du tableau "tasks", pour pouvoir lui ajouter la nouvelle tâche
      let tasksCopy = [...tasks];
      // ajout de la nouvelle tâche dans la copie du tableau
      tasksCopy.push({
        // si la tâche rentrée (input est supérieure à 20 caractères, on ne prend que les 20 premiers et on ajoute'...')
        // sinon, on ajoute la tâche rentrée en entier
        title: input.lenght > 20 ? input.substring(0, 30) + "..." : input,
        done: false,
      });
    }
    // mise à jour du state "taks" avec le tableau à jour
    setTasks(tasksCopy);
    // remise à zéro de l'input
    setInput("");
  };

  //  fonction appelée lorsque l'on clique sur la poubelle
  const handleClickCheck = (index) => {
    // il faut supprimer l'élément cliqué du tableau "tasks"
    let tasksCopy = [...tasks];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };
  const handleClickTrash = (index) => {
    let tasksCopy = [...tasks];
    tasksCopy.splice(tasksCopy.indexOf(tasksCopy[index]), 1);
    setTasks(tasksCopy);
  };
  return (
    <div className="body">
      <Header />
      <div className="container">
        <Task
          handleClickCheck={handleClickCheck}
          handleClickTrash={handleClickTrash}
          tasks={tasks}
        />
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
