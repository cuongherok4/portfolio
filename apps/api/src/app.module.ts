import { Module } from "@nestjs/common";
import { ContactController } from "./contact.controller";
import { HealthController } from "./health.controller";

@Module({
  imports: [],
  controllers: [HealthController, ContactController],
  providers: []
})
export class AppModule {}
