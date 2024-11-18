import { Controller, Post, Req, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { KeysService } from '../../service/keys.service';
import { UnprocessableDataException } from '../../../domain/errors/UnprocessableData.exception';
import { AllExceptionsFilterDTO } from '../../../domain/dtos/errors/AllException.filter.dto';
import { GenerateKeysReturnDTO } from '../../../domain/dtos/request/GenerateKeys.request.dto';
import { Request, Response } from 'express';

@Controller('key')
@ApiTags('Chaves')
export class KeysController {
    constructor(
        private readonly keyService: KeysService
    ) {}

    @Post('generate')
    @ApiResponse({
        status: new UnprocessableDataException().getStatus(),
        description: new UnprocessableDataException().message,
        type: AllExceptionsFilterDTO
    })
    @ApiResponse({
        status: 201,
        description: "Chaves geradas com sucesso",
        type: GenerateKeysReturnDTO
    })
    async generateKeys(
        @Req() req: Request,
        @Res() res: Response,
    ): Promise<GenerateKeysReturnDTO | AllExceptionsFilterDTO> {
        const result = await this.keyService.generateKeys()

        return res.status(201).json(result);
    }
}
