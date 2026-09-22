import { Container, Form, ContainerInputs, Input, InputLabel } from "./style";

import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import Button from "../../components/Button";

import TopBackground from "../../components/TopBackground";

import Title from "../../components/Title";

function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  const navigate = useNavigate();

  async function registerNewUser() {
    const name = inputName.current.value.trim();
    const email = inputEmail.current.value.trim();
    const age = Number(inputAge.current.value);
    const errors = [];

    if (!name) {
      errors.push("Enter username.");
    }

    if (!email) {
      errors.push("Enter email.");
    } else if (!inputEmail.current.checkValidity()) {
      errors.push("Enter a valid email.");
    }

    if (!Number.isInteger(age) || age <= 0) {
      errors.push("Age must be an integer number greater than zero.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    try {
      await api.post("/users", {
        email,
        age,
        name,
      });

      inputName.current.value = "";
      inputAge.current.value = "";
      inputEmail.current.value = "";
    } catch (error) {
      console.error("Fail Registering User:", error);
    }
  }
  return (
    <>
      <Container>
        <TopBackground />
        <Form>
          <Title>Register User</Title>
          <ContainerInputs>
            <div>
              <InputLabel>
                Name<span> *</span>
              </InputLabel>
              <Input
                type="text"
                required
                placeholder="Username"
                ref={inputName}
              />
            </div>

            <div>
              <InputLabel>
                Age<span> *</span>
              </InputLabel>
              <Input
                type="number"
                min="1"
                step="1"
                required
                placeholder="User Age"
                ref={inputAge}
              />
            </div>
          </ContainerInputs>
          <div style={{ width: "100%" }}>
            <InputLabel>
              Email<span> *</span>
            </InputLabel>
            <Input
              type="email"
              required
              placeholder="User Email"
              ref={inputEmail}
            />
          </div>

          <Button type="button" onClick={registerNewUser} theme="primary">
            Register User
          </Button>
          <Button type="button" onClick={() => navigate("/users-list")}>
            See Users List
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default Home;
