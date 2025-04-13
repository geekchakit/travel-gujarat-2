import { Input, Textarea, Button } from "@material-tailwind/react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: e.target.fullName.value,
      contact_no: e.target.contactNumber.value,
      email_id: e.target.emailAddress.value,
      number_of_travelers: e.target.numberOfTravelers.value,
      date_of_travel: e.target.dateOfTravel.value,
      message: e.target.message.value,
      website: "Gujarattrip",
    };

    alert("Your Response Has been submitted!");

    emailjs
      .send(
        "service_v2o5j0l", // Replace with your EmailJS service ID
        "template_apvv4kv", // Replace with your EmailJS template ID
        templateParams,
        "3w5lxrQSjLVVLUx6_" // Replace with your EmailJS public key
      )
      .then(
        () => {
          swal("Good job!", "Your Response Has been submitted!", "success");
        },
        () => {
          swal("Sorry!", "Something went wrong. Please try again.", "error");
        }
      );
  };

  return (
    <div className="bg-white w-full p-8">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          name="fullName"
          label="Full Name"
          color="orange"
          className="font-primary"
          size="lg"
          required
        />

        <Input
          name="contactNumber"
          label="Contact Number"
          color="orange"
          className="font-primary"
          size="lg"
          type="tel"
          required
        />

        <Input
          name="emailAddress"
          label="Email Address"
          color="orange"
          className="font-primary"
          size="lg"
          type="email"
          required
        />

        <Input
          name="numberOfTravelers"
          label="Number of Travelers"
          color="orange"
          className="font-primary"
          size="lg"
          type="number"
          min="1"
          required
        />

        <Input
          name="dateOfTravel"
          label="Date of Travel"
          color="orange"
          className="font-primary"
          size="lg"
          type="date"
          required
        />

        <Textarea
          name="message"
          label="Message"
          color="orange"
          className="font-primary"
          size="lg"
          rows={4}
        />

        <Button
          type="button"
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
