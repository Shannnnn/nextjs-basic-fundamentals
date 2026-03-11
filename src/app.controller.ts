import { Controller, Get, Req, Res, Query, Param, ParseIntPipe, ParseBoolPipe, ParseArrayPipe } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('fetch/:id')
  fetchQuery(
    @Param('id') id: string,
    @Query('name') name: string,
    @Query('age') age: number,
  ) {
    return {
      Id: `${id}`, 
      Name: `${name}`,
      Age: `${age}`,
    };
  }

  @Get('pipes/array')
  getArr(@Query('num', new ParseArrayPipe({items: Number})) num: number[]) {
    return num;
  }

  @Get('pipes/:id')
  getId(@Param('id', ParseIntPipe) id: number) {
    return `Fetched id: ${id}`;
  }

  @Get('pipes')
  gelVal(@Query('isActive', ParseBoolPipe) isActive: boolean) {
    if(isActive) {
      return 'Welcome Admin!';
    } else {
      return 'Welcome User!';
    }
  }

  @Get(':id')
  fetchReq(@Req() req: Request, @Res() res: Response) {
    const {id} = req.params;
    const queryParams = req.query;
    const userAgent = req.headers['user-agent'];

    return res.send(`
        <script>
            console.log("Id: ", "${id}");
            console.log("Query Params: ", ${JSON.stringify(queryParams)});
            console.log("User Agent: ", "${userAgent}");
        </script>
    `);
  }
}
