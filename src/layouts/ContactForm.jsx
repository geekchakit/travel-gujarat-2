import { Input, Textarea, Button } from "@material-tailwind/react";

const ContactForm = () => {
  return (
    <div className="bg-white w-full p-8">
      <form className="flex flex-col gap-4">
        <Input
          label="Full Name"
          color="orange"
          className="font-primary"
          size="lg"
          required
        />

        <Input
          label="Contact Number"
          color="orange"
          className="font-primary"
          size="lg"
          type="tel"
          required
        />

        <Input
          label="Email Address"
          color="orange"
          className="font-primary"
          size="lg"
          type="email"
          required
        />

        <Input
          label="Number of Travelers"
          color="orange"
          className="font-primary"
          size="lg"
          type="number"
          min="1"
          required
        />

        <Input
          label="Date of Travel"
          color="orange"
          className="font-primary"
          size="lg"
          type="date"
          required
        />

        <Textarea
          label="Message"
          color="orange"
          className="font-primary"
          size="lg"
          rows={4}
        />

        <Button
          color="black"
          className="mt-4 font-primary normal-case font-medium"
          fullWidth
        >
          Submit Inquiry
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
