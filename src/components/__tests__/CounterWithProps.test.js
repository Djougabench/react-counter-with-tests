import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import CounterWithProps from "../CounterWithProps"

test("Component <CounterWithProps /> - counter starts at 0 and increments (+1) on click", () => {
  render(<CounterWithProps />)
  const button = screen.getByRole("button")
  expect(button.textContent).toContain("+1")
  const text = screen.getByText(/Vous avez cliqué/i)
  expect(text.textContent).toBe("Vous avez cliqué 0 fois.")
  fireEvent.click(button)
  expect(text.textContent).toBe("Vous avez cliqué 1 fois.")
  fireEvent.click(button)
  fireEvent.click(button)
  expect(text.textContent).toBe("Vous avez cliqué 3 fois.")
})

//initialCount = 2
test("Component <CounterWithProps initialCount={2} counter starts at {initialCount}/>", () => {
  render(<CounterWithProps initialCount={2} />)
  const button = screen.getByRole("button")
  expect(button.textContent).toContain("+1")
})

//initialCount = 2
// increment = 3
test("Component <CounterWithProps initialCount={2} increment={3}/> counter starts at {initialCount} and increments by {increment} on click", () => {
  render(<CounterWithProps initialCount={2} increment={3} />)
  const button = screen.getByRole("button")
  expect(button.textContent).toContain("+3")
  const text = screen.getByText(/Vous avez cliqué/i)
  expect(text.textContent).toBe("Vous avez cliqué 2 fois.")
  fireEvent.click(button)
  expect(text.textContent).toBe("Vous avez cliqué 5 fois.")
})
