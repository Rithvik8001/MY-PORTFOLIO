import Card from "../ui/card";
import Link from "../ui/link";

const CTA = () => {
  return (
    <Card className="bg-background-blur shadow-4xl rounded-3xl col-span-2 min-h-52 md:p-8 md:col-span-1 3xl:min-h-72">
      <h1 className="font-semibold text-2xl">Have a project in mind?</h1>
      <p className="text-foreground-muted">
        Don't hesitate to contact me for any potential project ideas you have!
      </p>
      <div className="flex justify-end gap-4 mt-auto">
        <Link
          color="peach"
          href="mailto:rithvik.utd@outlook.com"
          className="w-max"
        >
          Contact me
        </Link>
      </div>
    </Card>
  );
};

export default CTA;
