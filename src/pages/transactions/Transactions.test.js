import {render, screen} from "@testing-library/react"; 
import Transaction from "../../components/transactions/Transaction";
import TransactionDetails from "./TransactionDetails";
import TransactionSummary from "../../components/transactions/TransactionSummary"; 

import { BrowserRouter } from "react-router-dom";

describe("Test the Transaction Module", ()=> {
    test("transaction summary renders in the document", () => {
            render(   
                <BrowserRouter>
                    <TransactionSummary />
                </BrowserRouter>);
            const divElement = screen.getByTestId("transactionsummary");
            expect(divElement).toBeTruthy(); 
    });
    test("transaction details renders in the document", () => {
            render( 
                <BrowserRouter>
                    <Transaction />
                </BrowserRouter>);
            const divElement = screen.getByTestId('transactiondetails');
            expect(divElement).toBeInTheDocument(); 
    })
}); 