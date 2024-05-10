import { Button } from "@mui/material";
import React from "react";
// import QuestionComponents from "./question";
import { Link } from "react-router-dom";

function StartButton() {

    return (
        <React.Fragment>
            <div style={{ margin: '20% 0' }}>
                <h2 style={{ display: 'flex', justifyContent: 'center' }}>online Test portal</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" >
                        <Link to='/question' className="text-white">Start</Link>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StartButton;