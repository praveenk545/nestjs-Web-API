import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Roles(Role.Admin)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @ApiTags('Admin')
  // @ApiOperation({ summary: 'Get admin section' })
  // @Get('admin')
  // @ApiBearerAuth('JWT-auth') // This is the one that needs to match the name in main.ts
  // getAdminArea(@Request() req) {
  //   return req.user;

  //   @Get('/test')
  // @ApiBearerAuth()
  // }
}
