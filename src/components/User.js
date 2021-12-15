import React, { useContext } from "react";
import { Card, Image, } from "semantic-ui-react";
import { AccountInfo } from "../providers/UserProvider";

const User = () => {
  const account = useContext(AccountInfo);
  return(
  <Card>
    <Image src={account.avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{account.firstName} {account.lastName}</Card.Header>
    </Card.Content>
    <Card.Content>
      <p>Email: {account.email}</p>
    </Card.Content>

  </Card>
  );
};

export default User;