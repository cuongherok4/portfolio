import { Body, Controller, Post } from "@nestjs/common";
import { ContactDto } from "./contact.dto";

@Controller("contact")
export class ContactController {
  @Post()
  create(@Body() contact: ContactDto) {
    return {
      ok: true,
      message: "Contact request received",
      data: {
        name: contact.name,
        email: contact.email
      }
    };
  }
}
