import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./component/Header";
import Task from "./component/Task";
import Form from "./component/Form";
import Footer from "./component/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faListAlt as farListAlt } from "@fortawesome/free-regular-svg-icons";
library.add(faTrash, faListAlt, farListAlt);

const App = () => {
  // state pour stocker ce qui est rentré dans l'input
  const [input, setInput] = useState("");

  // state pour stocker un tableau de tâches
  const [tasks, setTasks] = useState([]);

  // fonction déclenchée lorsque l'on tape quelque chose dans l'input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // fonction déclenchée lorsque l'on clique sue le bouton "Add task"
  const handleSubmit = (e) => {
    // empêcher le rafraîchissement de la page
    e.preventDefault();
    // si rien n'a été rentré dans l'input
    if (!input) {
      alert("Veuillez rentrer une nouvelle tâche");
    } else {
      // création d'une copie du tableau "tasks", pour pouvoir lui ajouter la nouvelle tâche
      let tasksCopy = [...tasks];
      // ajout de la nouvelle tâche dans la copie du tableau

      tasksCopy.push({
        // si la tâche rentrée (input) est supérieure à 20 caractères, on ne prend que les 20 premiers et on ajoute '...'
        // sinon, on ajoute la tâche rentrée en entier
        title: input.length > 20 ? input.substring(0, 30) + "..." : input,
        done: false,
      });
      // mise à jour du state "tasks" avec le tableau à jour
      setTasks(tasksCopy);
      // remise à zéro de l'input
      setInput("");
    }
  };

  // fonction appelée lorsque l'on clique sur une checkbox
  const handleClickCheck = (index) => {
    let tasksCopy = [...tasks];
    // grâce à l'index du .map(), on peut retrouver la tâche concernée dans le tableau "tasks"
    // on modifie la valeur de la clé "done", qui passe de "false" à "true" et inversement
    tasksCopy[index].done = !tasksCopy[index].done;
    setTasks(tasksCopy);
  };

  // fonction appelée lorsque l'on clique sur la poubelle
  const handleClickTrash = (index) => {
    // il faut supprimer l'élément cliqué du tableau "tasks"
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
};

export default App;
