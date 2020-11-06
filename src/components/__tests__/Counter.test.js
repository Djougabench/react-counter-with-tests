import React from "react"
import { render, screen, fireEvents, fireEvent } from "@testing-library/react"
import Counter from "../Counter"

test("Component <Counter />", () => {
  render(<Counter />)
  // container represent le #root element
  const button = screen.getByRole("button")
  const text = screen.getByText(/Vous avez cliqué/i)
  expect(text.textContent).toBe("Vous avez cliqué 0 fois.")
  fireEvent.click(button)
  expect(text.textContent).toBe("Vous avez cliqué 1 fois.")
  fireEvent.click(button)
  fireEvent.click(button)
  expect(text.textContent).toBe("Vous avez cliqué 3 fois.")
})
