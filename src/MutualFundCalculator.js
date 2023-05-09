import React, { useState } from "react";
import {
  Container,
  Card,
  Text,
  Grid,
  Row,
  Spacer,
  Input,
  Button,
  Tooltip
} from "@nextui-org/react";

import "./styles.css";

const MutualFundReturnCalculator = () => {
  const [endingNav, setEndingNav] = useState("");
  const [beginningNav, setBeginningNav] = useState("");
  const [annualReturn, setAnnualReturn] = useState("");
  const content =
    "Calculating the annual return on your mutual fund investment can be difficult, but our calculator makes it easy to compare the returns of a mutual fund versus a fixed deposit. With just a few clicks, you can determine which investment option will provide you with the best returns for the year.";
  function calculateAnnualReturn() {
    let annualReturn = ((endingNav - beginningNav) / beginningNav) * 100;
    setAnnualReturn(annualReturn.toFixed(2)); // round to 2 decimal places
  }

  function resetForm() {
    setEndingNav("");
    setBeginningNav("");
    setAnnualReturn("");
  }

  return (
    <Container gap={8} className="container">
      <Text h3 className="welcome-text">
        Welcome, <em>Divya</em> ❤️
      </Text>
      <Text
        h2
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%"
        }}
        weight="bold"
        className="heading-text"
      >
        Mutual Funds
      </Text>
      <Text
        h2
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%"
        }}
        className="heading-text"
      >
        Annual Return Calculator
      </Text>
      <Text className="subheading">
        Please enter exact NAV upto 4 decimal places (Ex. 45.4544)
      </Text>
      <Tooltip content={content} className="subheading" placement="right">
        <Button auto flat>
          Why this calculator?
        </Button>
      </Tooltip>

      <Grid.Container gap={2}>
        <Grid sm={12} md={5}>
          <Card isHoverable variant="bordered" css={{ mw: "500px" }}>
            <Card.Header>
              <Text b>Returns Calculator</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Row className="input-position">
                <Input
                  rounded
                  bordered
                  label="Ending NAV"
                  placeholder="0"
                  color="default"
                  width="50%"
                  value={endingNav}
                  onChange={(e) => setEndingNav(e.target.value)}
                />
                {endingNav && (
                  <Text color="#ff4ecd" className="info-text">
                    Entered value : {endingNav}
                  </Text>
                )}
              </Row>
              <Spacer y={1} />
              <Row className="input-position">
                <Input
                  rounded
                  bordered
                  label="Beginning NAV"
                  placeholder="0"
                  color="default"
                  width="50%"
                  value={beginningNav}
                  onChange={(e) => setBeginningNav(e.target.value)}
                />
                {beginningNav && (
                  <Text color="#ff4ecd" className="info-text">
                    Entered value : {beginningNav}
                  </Text>
                )}
              </Row>
              <Spacer y={1} />
              <Card.Divider />
              <Card.Footer>
                <Grid.Container gap={2} justify="center">
                  <Grid>
                    <Button
                      size="sm"
                      color="secondary"
                      onClick={calculateAnnualReturn}
                      disabled={endingNav === "" || beginningNav === ""}
                      className="button-style"
                    >
                      Calculate
                    </Button>
                  </Grid>
                  <Grid>
                    <Button
                      size="sm"
                      light
                      onClick={resetForm}
                      className="button-style"
                    >
                      Reset
                    </Button>
                  </Grid>
                </Grid.Container>
              </Card.Footer>
              <Card.Divider />
              <Spacer y={1} />
              {annualReturn && (
                <Text color="success" className="result">
                  Annual Return : {annualReturn} %
                </Text>
              )}
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default MutualFundReturnCalculator;
