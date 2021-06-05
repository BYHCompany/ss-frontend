import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { Paginator } from ".."
import { PaginatorProps } from "./PaginatorTypes"

describe("Paginator", () => {
  const renderPaginator = (args: PaginatorProps) => render(<Paginator {...args} callback={fn} />)
  const fn = jest.fn()

  it("Paginator should be in the document", () => {
    const { getByText } = renderPaginator({ allPagesCount: 200, currentPage: 23 })
    expect(getByText('23')).toBeInTheDocument()
  })

  it("Paginator should change on prev page", () => {
    const { getByText } = renderPaginator({ allPagesCount: 200, currentPage: 23 })
    userEvent.click(getByText('19'))
    expect(getByText('13')).toBeInTheDocument()
  })

  it("Paginator should change on next page", () => {
    const { getByText } = renderPaginator({ allPagesCount: 200, currentPage: 23 })
    userEvent.click(getByText('30'))
    expect(getByText('38')).toBeInTheDocument()
  })

  it("Paginator should throw error", () => {
    let eMessage

    try {
      expect(renderPaginator({ allPagesCount: 200, currentPage: 800 })).toBeInTheDocument()
    } catch(e) {
      eMessage = e.message
    }
    
    expect(eMessage).toBe('No current page')
  })

  it("Paginator should show pages from 1 - 10", () => {
    const { getByText } = renderPaginator({ allPagesCount: 200, currentPage: -23 })
    expect(getByText('2')).toBeInTheDocument()
  })
})

