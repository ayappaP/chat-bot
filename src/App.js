import React, { Component } from "react"
import ReactDOM from "react-dom"
import ChatBot from "react-simple-chatbot"

const val = document.createElement("div")
const body = document.body

val.setAttribute("id", "ChatBotRoot")
body.appendChild(val)

const steps = [
  {
    id: "start",
    message: "Welcome!",
    trigger: "0",
  },
  {
    id: "0",
    message: "My name is John. Are you new to the site?",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please click on an option.",
    trigger: "2",
  },
  {
    id: "2",
    options: [
      {
        value: 1,
        label: "Yes, I'm new",
        trigger: "end",
      },
      {
        value: 2,
        label: "Login",
        trigger: "end",
      },
    ],
  },
  {
    id: "end",
    message: "Thank you!!",
    end: true,
  },
]

const App = () => (
  <div>
    <ChatBot steps={steps} floating />
  </div>
)

ReactDOM.render(<App />, val)
