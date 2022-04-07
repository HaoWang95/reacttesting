import {render, screen} from "@testing-library/react"
import Button from "../../src/components/Button.component";

test('Init button', () => {
    render(<Button buttonText="Init Button" color="green" />);
})