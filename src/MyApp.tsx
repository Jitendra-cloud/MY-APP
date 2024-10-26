import { Card, CardHeader, Text } from "@ui5/webcomponents-react";

export function MyApp() {
  return (
    <div>
      <Card header={<CardHeader titleText="Card" />} style={{ width: "300px" }}>
        <text>This is the content area of the Card</text>
      </Card>
    </div>
  );
}