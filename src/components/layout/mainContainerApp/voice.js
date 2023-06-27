import React, { useState } from "react";
import { Card, Button, Form, Container } from "react-bootstrap";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

const VoiceRecognition = () => {
  const [voiceInputs, setVoiceInputs] = useState([]);
  const [previousFrequency, setPreviousFrequency] = useState("");
  const [username, setUsername] = useState("");

  const handleAddVoiceInput = () => {
    recognition.start();
  };

  const handleFindVoiceByFrequency = () => {
    const frequencies = voiceInputs.map((input) => getVoiceFrequency(input));
    const maxFrequency = Math.max(...frequencies);
    const maxIndex = frequencies.indexOf(maxFrequency);
    const username = voiceInputs[maxIndex].username;
    setUsername(username);
    setPreviousFrequency(maxFrequency);
  };

  const getVoiceFrequency = (voiceInput) => {
    // Logic to calculate voice frequency goes here
    return Math.random(); // Placeholder logic
  };

  recognition.onresult = (event) => {
    const currentInput = event.results[0][0].transcript.trim().toLowerCase();
    const isInputUnique = !voiceInputs.some(
      (input) => input.voiceInput === currentInput
    );
    if (isInputUnique) {
      setVoiceInputs((prevInputs) => [
        ...prevInputs,
        { voiceInput: currentInput, username: "ghanshyam" },
      ]);
    } else {
      alert("Your voice input is already added!");
    }
  };

  recognition.onerror = (event) => {
    console.error(event);
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Form.Group>
            <Form.Label>Get text from voice</Form.Label>
            <Button variant="primary" onClick={handleAddVoiceInput}>
              Speak
            </Button>
          </Form.Group>
          <Form.Group>
            <Form.Label>Find voice by frequency</Form.Label>
            <Button variant="primary" onClick={handleFindVoiceByFrequency}>
              Find
            </Button>
          </Form.Group>
          {previousFrequency && (
            <Form.Group>
              <Form.Label>Previous frequency:</Form.Label>
              <Form.Control type="text" value={previousFrequency} readOnly />
            </Form.Group>
          )}
          {username && (
            <Form.Group>
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" value={username} readOnly />
            </Form.Group>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VoiceRecognition;
