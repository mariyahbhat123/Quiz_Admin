import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

import Row from "react-bootstrap/Row";
import { useSelector, useDispatch } from "react-redux";
import {
  dontShowMultipleChoiceQues,
  dontShowSingleChoiceQues,
  multipleChoiceQues,
  showMultipleChoiceQues,
  showSingleChoiceQues,
  singleChoiceQues,
} from "../Redux/slice/QuesType";

export default function AddQuizQues() {
  const [quesChoice, setQuesChoice] = useState("");
  console.log("quesChoice", quesChoice);
  const [chosenLanguage, setChosenLanguage] = useState("");
  console.log("chosenLang:", chosenLanguage);
  const [options, setOptions] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });
  console.log("options", options.a, options.b, options.c, options.d);
  const [answer, setAnswer] = useState("");
  console.log("answer:", answer);

  const [multipleAnswer, setMultipleAnswer] = useState({
    ansA: "",
    ansB: "",
    ansC: "",
  });
  const [question, setQuestion] = useState("");

  const singleQuestype = useSelector((state) => state.quesType.singleChoice);
  console.log("single->", singleQuestype);
  const multipleQuesType = useSelector(
    (state) => state.quesType.multipleChoice
  );
  console.log("multiple->", multipleQuesType);

  const dispatch = useDispatch();

  useEffect(() => {
    if (quesChoice === "singleType") {
      dispatch(showSingleChoiceQues());
      dispatch(dontShowMultipleChoiceQues());
    } else if (quesChoice === "multipleType") {
      dispatch(dontShowSingleChoiceQues());
      dispatch(showMultipleChoiceQues());
    }
  }, [quesChoice]);

  const [chosenCollection, setChosenCollection] = useState("");

  // useEffect(() => {
  //   if (chosenLanguage === "HTML" && quesChoice === "singleType") {
  //     setChosenCollection("htmlques");
  //   } else if (chosenLanguage === "HTML" && quesChoice === "singleType") {
  //     setChosenCollection("htmlMultiQues");
  //   }
  // }, [chosenCollection]);

  const handleSubmit = async () => {
    if (quesChoice === "singleType") {
      try {
        const response = await fetch(`http://localhost:5000/api/singleQues`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: chosenLanguage,
            question: question,
            answer: answer,
            options: { A: options.a, B: options.b, C: options.c, D: options.d },
          }),
        });
        const json = await response.json();
        if (!json) {
          console.log("ERROR");
        } else {
          console.log("success");
        }
      } catch (error) {
        console.error(error);
      }
    } else if (quesChoice === "multipleType") {
      try {
        const response = await fetch(`http://localhost:5000/api/multipleQues`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            language: chosenLanguage,
            question: question,
            answer: {
              A: multipleAnswer.ansA,
              B: multipleAnswer.ansB,
              C: multipleAnswer.ansC,
            },
            options: {
              A: options.a,
              B: options.b,
              C: options.c,
              D: options.d,
            },
          }),
        });
        const json = await response.json();
        if (!json) {
          console.log("ERROR");
        } else {
          console.log("success");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    if (multipleAnswer) {
      setOptions({ ...options, [e.target.name]: e.target.value });

      setMultipleAnswer({ ...multipleAnswer, [e.target.name]: e.target.value });
    } else {
      setOptions({ ...options, [e.target.name]: e.target.value });
    }
  };
  return (
    <div style={{ width: "80%" }}>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Language</Form.Label>
            <Form.Select
              defaultValue=""
              onClick={(e) => setChosenLanguage(e.target.value)}
            >
              <option value="" disabled>
                Choose Language
              </option>
              <option value="HTML">HTML</option>
              <option value="JAVASCRIPT">JAVASCRIPT</option>
              <option value="CSS">CSS</option>
              <option value="REACT">REACT</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Question Type</Form.Label>
            <Form.Select
              defaultValue=""
              onClick={(e) => setQuesChoice(e.target.value)}
            >
              <option value="" disabled>
                Choose Type
              </option>
              <option value="singleType">Single Choice Question</option>
              <option value="multipleType">Multiple Choice Question</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Question</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type Your Question Here"
            onChange={(e) => setQuestion(e.target.value)}
          />
        </Form.Group>
        <Row className="mb-3">
          <Form.Label>Options</Form.Label>
          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Control
              placeholder="Option A"
              name="a"
              value={options.a}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control
              placeholder="Option B"
              name="b"
              value={options.b}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control
              placeholder="Option C"
              name="c"
              value={options.c}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Control
              placeholder="Option D"
              name="d"
              value={options.d}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </Row>
        {multipleQuesType === true && singleQuestype === false ? (
          <Row className="mb-3">
            <Form.Label>Answer</Form.Label>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control
                placeholder="Answer A"
                name="ansA"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control
                placeholder="Answer B"
                name="ansB"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control
                placeholder="Answer C"
                name="ansC"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </Row>
        ) : (
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Answer</Form.Label>
            <Form.Control
              placeholder="Type Your Answer Here"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </Form.Group>
        )}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
