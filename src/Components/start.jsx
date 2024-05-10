import React from "react";
import { Button, Card, CardContent, Container } from "@mui/material";
import { Link } from "react-router-dom";

function StartButton() {

    let text = 'React MCQ Test', total_questions = 'Total Number Questions: 10',
        test_time = 'Total Test Time: 2mins';

    return (
        <React.Fragment>
            <Container>
                <div style={{ margin: '15% 0' }}>
                    <Card style={{ height: '300px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <CardContent style={{ marginTop: '4%' }}>
                            <h2 className="fst-italic">{text}</h2>
                            <ol>
                                <li><p className="h6 mt-3">{total_questions}</p></li>
                                <li><p className="h6 mt-3">{test_time}</p></li>
                            </ol>
                            <div className="d-flex justify-content-center">
                                <Button variant="contained" className="w-50 h-100 mt-3">
                                    <Link to='/question' className="text-white" style={{ textDecoration: 'none' }}>Start</Link>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default StartButton;