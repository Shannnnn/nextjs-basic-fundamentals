import { Controller, Get, Req, Res, Query, Param } from '@nestjs/common';
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
