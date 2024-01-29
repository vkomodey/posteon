import { Module } from "@nestjs/common";
import { APIController } from "./api.controller";
import { RegisterUseCase } from "../user/use-cases/register/register.use-case";
import { UserModule } from "../user/user.module";


@Module({
  controllers: [APIController],
  imports: [UserModule]
})
export class APIModule { }
