import { render,screen } from "@testing-library/react";
import ContactUs from "../Components/ContactUs";
import "@testing-library/jest-dom"


describe("We are grouping test cases related to input", ()=> {
    test("load input whose text is Email", ()=> {
        render(<ContactUs/>);
        const input = screen.getByPlaceholderText('Email')
        expect(input).toBeInTheDocument();
    })
    
    test("load input whose text is Name", ()=> {
        render(<ContactUs/>);
        const button = screen.getByPlaceholderText('Name')
        expect(button).toBeInTheDocument();
    })
    
    test("should load 3 input boxes", ()=> {
        render(<ContactUs/>)
        const allTextBox = screen.getAllByRole('textbox');
        expect(allTextBox.length).toBe(3);
    })
})

test("Should load contactUs component", () => {
    render(<ContactUs/>)
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load button component", ()=> {
    render(<ContactUs/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("button load button whose text is submit", ()=> {
    render(<ContactUs/>);
    const button = screen.getByText('Submit');
    expect(button).toBeInTheDocument();
})