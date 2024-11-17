import { Skill as SkillType } from "@/types";
import Card from "../ui/card";
import Image from "next/image";

type SkillProps = SkillType;

const Skill = ({ name, description, image }: SkillProps) => {
  return (
    <Card className="flex flex-row gap-4 items-center bg-transparent">
      <div className="relative aspect-square h-8 w-8">
        <Image
          className="object-contain"
          fill
          src={image.src}
          alt="skill"
          placeholder="blur"
          blurDataURL={image.blurDataURL}
        />
      </div>
      <div>
        <h1 className="font-semibold">{name}</h1>
        <p className="text-foreground-muted">{description}</p>
      </div>
    </Card>
  );
};

export default Skill;
