import { Button } from "../../components/Button/styles";

import { Title } from "../../components/Title/styles";

import TopBackground from "../../components/TopBackground";

import api from "../../services/api";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

import {
  Container,
  ContainerUsers,
  CardUsers,
  TrashIcon,
  AvatarUser,
} from "./styles";

import Trash from "../../assets/trash.svg";

function ListUsers() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/users");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`);

    const updatedUsers = users.filter((user) => user.id !== id);

    setUsers(updatedUsers);
  }

  return (
    <Container>
      <TopBackground />
      <div style={{ marginTop: "30px" }}>
        <Title>Users List</Title>
      </div>
      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`}
              alt={user.name}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              onClick={() => deleteUsers(user.id)}
              alt="Exclude"
            />
          </CardUsers>
        ))}
      </ContainerUsers>
      <Button type="button" onClick={() => navigate("/")}>
        Back
      </Button>
    </Container>
  );
}

export default ListUsers;
