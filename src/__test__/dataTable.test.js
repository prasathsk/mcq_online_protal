import { render, screen } from "@testing-library/react";
import DataTableApi from "../Components/dataTableApi";

test('test the text', () =>{
    render(<DataTableApi/>);
    expect(screen.queryByText(/Data Table/)).toBeInTheDocument;
})