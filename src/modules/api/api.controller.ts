import { Controller, Injectable, Post } from "@nestjs/common";


@Controller('/api')
export class APIController {
    @Post('/signup')
    signup(): boolean {
        return true;
    }

    @Post('/signin')
    signin(): boolean {
        return true;
    }

}