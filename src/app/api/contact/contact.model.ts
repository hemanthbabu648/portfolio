import mongoose, { Schema, models } from "mongoose";

const contactInfoSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isNewsLetter: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const ContactInfo =
  models.ContactInfo || mongoose.model("ContactInfo", contactInfoSchema);
export default ContactInfo;
