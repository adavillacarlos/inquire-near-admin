import {render, screen} from "@testing-library/react"; 
import { BrowserRouter } from "react-router-dom";
import SignIn from "../../pages/signIn/SignIn";

describe("Test the SignIn Module", ()=> {
    test("sign in form renders in the document", () => {
            render(
                <BrowserRouter>
                    <SignIn />
                </BrowserRouter>
                );
            const divElement = screen.getByTestId("signin-form"); 
            expect(divElement).toBeInTheDocument();
    });
    test("input renders in the document", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
            );
            const divElement = screen.getByPlaceholderText('Email');
            const divPassword = screen.getByPlaceholderText('Password');
            expect(divElement).toBeInTheDocument(); 
            expect(divPassword).toBeInTheDocument(); 
    })
}); 