import { Injectable } from '@nestjs/common';

import * as packageJson from '../package.json';

@Injectable()
export class AppService {
  ping(): any {
    return { version: packageJson.version };
  }
}
