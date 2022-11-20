import {render, screen} from "@testing-library/react"; 
import Dashboard from "./Dashboard";
import Chart from "../../components/dashboard/Chart";
import Widget from "../../components/dashboard/Widget";
import { BrowserRouter } from "react-router-dom";

describe("Test the Dashboard Module", ()=> {
    test("header renders with dashboard title in the document", () => {
            render(   
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>);
            const divElement = screen.getAllByText("Dashboard");
            expect(divElement).toBeTruthy(); 
    });
    test("chart renders in the document", () => {
            render( 
                <BrowserRouter>
                    <Dashboard />
                </BrowserRouter>);
            const divElement = screen.getByText('APP USAGE');
            expect(divElement).toBeInTheDocument(); 
    })
}); 