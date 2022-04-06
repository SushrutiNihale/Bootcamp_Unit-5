import { addNote } from "./addNote"
import ("../index.css")


document.getElementById("take-note").addEventListener("keypress", addNote);
