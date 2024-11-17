import { Email } from "@/types";
import { FC } from "react";
import Card from "../ui/card";

export const EmailTemplate: FC<Readonly<Email>> = ({
  name,
  email,
  message,
}: Email) => (
  <Card className="rounded-3xl shadow-4xl">
    <h1 className="text-2xl">
      Email from {name}! - {email}
    </h1>
    <p>{message}</p>
  </Card>
);
