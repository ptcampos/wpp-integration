import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { VenomService } from './venom.service';

class QueryLogin {
  session: string;
}

@Controller('venom')
export class VenomController {
  constructor(private readonly venomService: VenomService) {}

  @Get('create')
  async create(@Res() res: Response, @Query() queryParams: QueryLogin) {
    await this.venomService.createSession(queryParams.session, (base64) => {
      res.write(base64);
    });
    res.end();
  }
}
