import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "../Counter"

/*
Que testons nous ici ?
Nous faisons abstraction (tant que c'est possible) de markup de notre components
Si le developpeur change les tags de <p>Vous avez cliqué ... fois</p> pour
<p>Vous avez cliqué <span>...</span> fois</p>, notre component continuera de fonctionner bien.
Nous devrons pas être trop spécifique sur le "comment" la fonctionnalité est exactement implémenté.
Nous testons la fonctionnalité elle même.

Dans ce component, le "click" sur bouton devrait changer le texte "Vous avez cliqué ... fois"

*/

test("Component <Counter /> : counter starts at 0 and increments (+1) when the button is clicked", () => {
  render(<Counter />)
  // accès au bouton
  const button = screen.getByRole("button")
  // acces à l'élément qui contient l'info sur le nombre de clicks
  const text = screen.getByText(/Vous avez cliqué/i)
  // texte initial
  expect(text.textContent).toBe("Vous avez cliqué 0 fois.")
  // click 1 fois
  fireEvent.click(button)
  expect(text.textContent).toBe("Vous avez cliqué 1 fois.")
  // click 2 fois
  fireEvent.click(button)
  fireEvent.click(button)
  expect(text.textContent).toBe("Vous avez cliqué 3 fois.")
})
