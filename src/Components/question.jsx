import {
    Container, Card, Stepper, Step, StepButton, Typography, Box, Button,
    StepContent, CardContent, CardHeader, FormControlLabel, Radio, FormControl, RadioGroup, CardActions
} from "@mui/material";
// import FormControlContext from "@mui/material/FormControl/FormControlContext";
import React, { useState, useRef, useEffect } from "react";
import user from './userData.json';

const STATUS = {
    pause: 0,
    start: 1,
    default: 2
};

function QuestionComponents() {

    const questionNumber = user[0].count;

    const [activePage, setActivePage] = useState(0);
    const [completed, setCompleted] = useState({});
    const [min, setMin] = useState(2);
    // user[0].time1
    const [sec, setSec] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
    const [status, setStatus] = useState(STATUS.default);
    const intervalRef = useRef();
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [result, setResult] = useState(false);
    const [Score, setScore]= useState(0);

    const totalSteps = () => {
        return questionNumber.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activePage === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };


    const handleBack = () => {
        setActivePage((data) => data - 1);
    }

    const handleStep = (step) => () => {
        setActivePage(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activePage] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActivePage(0);
        setCompleted({});
    };

    const countDown = () => {
        if (sec == 0) {
            if (min !== 0) {
                setSec(59);
                setMin(min => min - 1);
            }
            else {
                let mins = displayMessage ? 24 : 4;
                let secs = 59;
                setSec(secs);
                setMin(mins);
                setDisplayMessage(value => !value);
            }
        }
        else {
            setSec(sec => sec - 1);
        }
    }

    // onload call timer function
    useEffect(() => {
        start();
        console.log('user');
        user[1].map((data) => {
            // console.log('s', data.label);
            setQuestions(data.label);
        })
        // console.log('s', user[1][0].label);
    }, [])

    useEffect(() => {
        if (status === STATUS.start) {
            intervalRef.current = setInterval(() => {
                countDown();
            }, 1000);
        }
        else if (STATUS === STATUS.pause && intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        return () => {
            clearInterval(intervalRef.current);
        };
    }, [min, sec, status]);

    const timeMin = min < 10 ? `0${min}` : min;
    const timeSec = sec < 10 ? `0${sec}` : sec;

    const start = () => setStatus(STATUS.start);
    const pause = () => setStatus(STATUS.pause);
    const stop = () => {
        setStatus(STATUS.pause);
        setMin(2);
        setSec(0);
    }

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                questionNumber.findIndex((step, i) => !(i in completed))
                : activePage + 1;
        setActivePage(newActiveStep);
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
        setCheck4(false);
    }

    const onChangeCheckOne = (e) => {
        console.log('get answer', e.target.value);
        console.log("json ans", user[1][activePage].answer);
        // setCheck1( ? true : false);
        if(e.target.value == user[1][activePage].answer){
            setScore((data) => data+1);
        }
    };

    const onChangeCheckTwo = (e) => {
        // console.log('e 2', e.target.checked);
        setCheck2(e.target.checked ? true : false);
    };

    const onChangeCheckThree = (e) => {
        // console.log('e 3', e.target.checked);
        setCheck3(e.target.checked ? true : false);
    };
    const onChangeCheckFour = (e) => {
        // console.log('e 4', e.target.checked);
        setCheck4(e.target.checked ? true : false);
    };

    return (
        <React.Fragment>
            <Container className="mt-5 w-75">

                {result ?
                    <Card className="bg-light" style={{ height: '300px', marginTop: '15%' }}>
                        <CardContent className="d-flex justify-content-center" style={{ marginTop: '10%' }}>
                            <h2>Your Score is: <span className="fw-bold">{Score}/10</span></h2>
                        </CardContent>
                        <CardActions className="d-flex justify-content-center">
                            <Button variant="contained">Reset</Button>
                        </CardActions>
                    </Card> :
                    <React.Fragment>
                        <Stepper nonLinear activeStep={activePage}>
                            {questionNumber.map((data, index) => (
                                <Step key={data} completed={completed[index]}>
                                    <StepButton onClick={handleStep(index)} color="inherit"></StepButton>
                                </Step>
                            ))}
                        </Stepper>
                        <Card className="mt-5" style={{ height: '480px' }}>
                            <div className="row my-3 mx-2">
                                <div className="col"><CardHeader title={`Questions: ${activePage + 1}`} /></div>
                                <div className="col d-flex justify-content-end mt-4">
                                    <p><b><i>Timer</i></b>:{timeMin}:{timeSec}</p>
                                </div>
                            </div>
                            <CardContent className="mx-3">
                                <Typography id="demo-radio-buttons-group-label" className="d-flex justify-content-start">{user[1][activePage].label}</Typography>
                                <FormControl className="mt-4">
                                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                        {user[1][activePage].options.map((options, index) => {
                                            return <FormControlLabel key={index} control={<Radio onClick={(e) => onChangeCheckOne(e)} />} value={options} label={options} />
                                        })}
                                    </RadioGroup>
                                </FormControl>
                                {allStepsCompleted() ? (
                                    <React.Fragment>
                                        <Typography sx={{ mt: 2, mb: 1 }}>
                                            All steps completed - you&apos;re finished
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            <Button onClick={handleReset}>Reset</Button>
                                        </Box>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                            Step {activePage + 1}
                        </Typography> */}
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }} className='mt-5'>
                                            <Button
                                                color="inherit"
                                                disabled={activePage === 0}
                                                onClick={handleBack}
                                                sx={{ mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            {activePage !== questionNumber.length &&
                                                (completed[activePage] ? (
                                                    <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                                        Step {activePage + 1} already completed
                                                    </Typography>
                                                ) : (
                                                    <Button onClick={handleComplete} variant="contained" color="success">
                                                        {completedSteps() === totalSteps() - 1
                                                            ? ('Finish',setResult(true))
                                                            : 'Save'}
                                                    </Button>
                                                ))}
                                            <Button onClick={handleNext} sx={{ mr: 1 }}>
                                                Next
                                            </Button>
                                        </Box>
                                        {/* <Button onClick={start}>Start</Button> */}
                                        <Button onClick={pause}>Pause</Button>
                                        {/* <Button onClick={stop}>Stop</Button> */}
                                    </React.Fragment>
                                )}
                            </CardContent>
                        </Card>
                    </React.Fragment>
                }
            </Container>
        </React.Fragment>
    );
}

export default QuestionComponents;